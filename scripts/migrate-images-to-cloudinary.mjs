/**
 * One-shot migration: uploads every project image (currently on the Squarespace
 * CDN) into YOUR Cloudinary account, then rewrites app/projects/projects.ts to
 * serve the optimised Cloudinary URLs.
 *
 * Usage (from the hallmarc-web folder):
 *   npm i cloudinary
 *   export CLOUDINARY_URL="cloudinary://<api_key>:<api_secret>@<cloud_name>"
 *   node scripts/migrate-images-to-cloudinary.mjs
 *
 * The script is idempotent — safe to re-run. It reads your credentials from the
 * CLOUDINARY_URL env var only; nothing is hard-coded.
 */
import { v2 as cloudinary } from "cloudinary";
import crypto from "crypto";
import fs from "fs";

if (!process.env.CLOUDINARY_URL) {
  console.error("✗ CLOUDINARY_URL is not set. Export it first (see the header of this file).");
  process.exit(1);
}
cloudinary.config({ secure: true });

const FILE = "app/projects/projects.ts";
const SQUARESPACE_BASE = "https://images.squarespace-cdn.com/content/v1/67280211d7c97448975a8636/";

let src = fs.readFileSync(FILE, "utf8");

// Find every `B + "<path>"` image reference.
const paths = [...new Set([...src.matchAll(/B \+ "([^"]+)"/g)].map((m) => m[1]))];
console.log(`Found ${paths.length} project images to migrate.\n`);

const map = {};
for (const path of paths) {
  const sourceUrl = SQUARESPACE_BASE + path;
  const publicId = "hallmarc/projects/" + crypto.createHash("md5").update(path).digest("hex").slice(0, 16);
  try {
    await cloudinary.uploader.upload(sourceUrl, { public_id: publicId, overwrite: true });
    map[path] = cloudinary.url(publicId, { fetch_format: "auto", quality: "auto", secure: true });
    console.log(`✓ ${path}`);
  } catch (err) {
    console.error(`✗ ${path}: ${err.message}`);
  }
}

const migrated = Object.keys(map).length;
if (migrated !== paths.length) {
  console.error(`\n⚠ Only ${migrated}/${paths.length} migrated. Fix errors above and re-run before committing.`);
  process.exit(1);
}

// Rewrite: replace each `B + "<path>"` with the Cloudinary URL, and drop the now-unused B constant.
src = src.replace(/B \+ "([^"]+)"/g, (full, path) => (map[path] ? `"${map[path]}"` : full));
src = src.replace(/^const B = .*\n/m, "");
fs.writeFileSync(FILE, src);

console.log(`\n✓ Migrated ${migrated} images and rewrote ${FILE}.`);
console.log("Review the diff, then commit & push.");
