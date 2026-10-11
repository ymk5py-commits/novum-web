import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SPECIALTIES, DENTAL_SPECIALTIES } from "@/lib/specialties";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const specialty = SPECIALTIES.map((s) => ({
    url: `${SITE.url}/novumed/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  const dental = DENTAL_SPECIALTIES.map((s) => ({
    url: `${SITE.url}/novudent/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/novumed`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE.url}/novudent`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    ...specialty,
    ...dental,
  ];
}
