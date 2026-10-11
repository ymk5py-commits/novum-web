import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SPECIALTIES, SPECIALTY_MAP, MEDICAL_CORE } from "@/lib/specialties";
import { SITE } from "@/lib/site";
import SpecialtyPage from "@/components/product/SpecialtyPage";

export function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ especialidad: s.slug }));
}

export function generateMetadata({ params }: { params: { especialidad: string } }): Metadata {
  const s = SPECIALTY_MAP[params.especialidad];
  if (!s) return {};
  const title = `${s.seoLabel} | NOVUMed`;
  const description = s.intro;
  return {
    title,
    description,
    keywords: [...s.keywords],
    alternates: { canonical: `/novumed/${s.slug}` },
    openGraph: { title, description, url: `${SITE.url}/novumed/${s.slug}`, type: "website" },
  };
}

export default function Page({ params }: { params: { especialidad: string } }) {
  const s = SPECIALTY_MAP[params.especialidad];
  if (!s) notFound();
  const others = SPECIALTIES.filter((o) => o.slug !== s.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: `NOVUMed · ${s.name}`,
        applicationCategory: "HealthApplication",
        operatingSystem: "Web, iOS, Android",
        description: s.intro,
        url: `${SITE.url}/novumed/${s.slug}`,
        offers: { "@type": "Offer", price: "39", priceCurrency: "USD", availability: "https://schema.org/InStock" },
        publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "NOVUM", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "NOVUMed", item: `${SITE.url}/novumed` },
          { "@type": "ListItem", position: 3, name: s.name, item: `${SITE.url}/novumed/${s.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <SpecialtyPage s={s} others={others} brand={{ name: "NOVUMed", base: "novumed" }} core={MEDICAL_CORE} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
