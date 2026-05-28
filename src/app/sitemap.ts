import type { MetadataRoute } from "next";

const BASE_URL = "https://mamitascaffe.ch";
const LOCALES = ["it", "es"] as const;

const ROUTES = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/menu", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/arepas", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/brunch", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/karaoke", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/delivery", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/birthdays", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/gallery", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/about", changeFrequency: "yearly" as const, priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly" as const, priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of ROUTES) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}${route.path === "/" ? "" : route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }

  return entries;
}
