import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  async redirects() {
    return [
      // Old Squarespace URLs → new equivalents (project slugs are unchanged)
      { source: "/home", destination: "/", permanent: true },
      { source: "/contact-us", destination: "/#enquire", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      { source: "/work-with-hallmarc", destination: "/partners", permanent: true },

      // Old brand domain → canonical host (permanent 301, not 302 — preserves ranking authority).
      // Requires hallmarcnp.com.au + www to be added as domains on this Vercel project.
      {
        source: "/:path*",
        has: [{ type: "host", value: "hallmarcnp.com.au" }],
        destination: "https://www.hallmarcfitouts.com.au/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.hallmarcnp.com.au" }],
        destination: "https://www.hallmarcfitouts.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
