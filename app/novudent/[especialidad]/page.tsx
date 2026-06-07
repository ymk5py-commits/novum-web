import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DENTAL_SPECIALTIES, DENTAL_MAP, DENTAL_CORE } from "@/lib/specialties";
import { SITE } from "@/lib/site";
import SpecialtyPage from "@/components/product/SpecialtyPage";

export function generateStaticParams() {
  return DENTAL_SPECIALTIES.map((s) => ({ especialidad: s.slug }));
}

export function generateMetadata({ params }: { params: { especialidad: string } }): Metadata {
  const s = DENTAL_MAP[params.especialidad];
  if (!s) return {};
  const title = `${s.seoLabel} | NOVUdent`;
  const description = s.intro;
  return {
    title,
    description,
    keywords: [...s.keywords],
    alternates: { canonical: `/novudent/${s.slug}` },
    openGraph: { title, description, url: `${SITE.url}/novudent/${s.slug}`, type: "website" },
  };
}

export default function Page({ params }: { params: { especialidad: string } }) {
  const s = DENTAL_MAP[params.especialidad];
  if (!s) notFound();
  const others = DENTAL_SPECIALTIES.filter((o) => o.slug !== s.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `NOVUdent · ${s.name}`,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web, iOS, Android",
    description: s.intro,
    url: `${SITE.url}/novudent/${s.slug}`,
    offers: { "@type": "Offer", price: "45", priceCurrency: "USD", availability: "https://schema.org/InStock" },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };

  return (
    <>
      <SpecialtyPage s={s} others={others} brand={{ name: "NOVUdent", base: "novudent" }} core={DENTAL_CORE} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
