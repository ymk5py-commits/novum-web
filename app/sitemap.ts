import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SPECIALTIES } from "@/lib/specialties";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const specialty = SPECIALTIES.map((s) => ({
    url: `${SITE.url}/novumed/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/novumed`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE.url}/novudent`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    ...specialty,
    { url: `${SITE.url}/#productos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/#servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/#proyectos`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/#faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/#contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
