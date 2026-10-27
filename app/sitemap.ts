// app/sitemap.ts
import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE, lastModified: "2026-10-28", changeFrequency: "monthly", priority: 1 }]
}
