import type { MetadataRoute } from "next";
import { SITE } from "@/constants/site";
import { NAV_ITEMS } from "@/constants/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return NAV_ITEMS.map((item) => ({
    url: `${SITE.url}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
