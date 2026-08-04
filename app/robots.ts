import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Explicitly welcome AI search/answer crawlers (GEO): being readable by these
  // bots is a prerequisite for being cited in ChatGPT, Perplexity, Google AI
  // Overviews, Gemini and Claude answers. All are allowed the full site except /api.
  const aiCrawlers = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
    "Amazonbot",
    "Bytespider",
    "CCBot",
    "cohere-ai",
    "Meta-ExternalAgent",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: aiCrawlers, allow: "/", disallow: "/api/" },
    ],
    sitemap: "https://www.hallmarcfitouts.com.au/sitemap.xml",
    host: "https://www.hallmarcfitouts.com.au",
  };
}
