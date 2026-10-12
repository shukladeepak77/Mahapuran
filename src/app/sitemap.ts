import type { MetadataRoute } from "next";
import { puranas } from "@/content/puranas";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  // Only locally-hosted, written Puranas get a sitemap entry — the
  // externally-linked Shreemad Bhagwat has no local page to index here
  // (its own site has its own sitemap).
  const puranaRoutes: MetadataRoute.Sitemap = puranas
    .filter((p) => p.available && !p.externalUrl)
    .map((p) => ({
      url: `${SITE_URL}/purana/${p.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    }));

  return [...staticRoutes, ...puranaRoutes];
}
