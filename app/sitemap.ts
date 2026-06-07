import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/#productos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/#servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/#proyectos`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/#faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/#contacto`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
}
