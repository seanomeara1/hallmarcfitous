import type { MetadataRoute } from "next";
import { PROJECTS } from "./projects/projects";
import { LOCATIONS } from "./fitouts/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hallmarcfitouts.com.au";
  const now = new Date();

  const core = [
    "", "/retail", "/commercial", "/hospitality", "/national-rollout",
    "/partners", "/about", "/resources", "/projects",
  ];
  const coreEntries: MetadataRoute.Sitemap = core.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const locationEntries: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: `${base}/fitouts/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectEntries: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const legal: MetadataRoute.Sitemap = [
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  return [...coreEntries, ...locationEntries, ...projectEntries, ...legal];
}
