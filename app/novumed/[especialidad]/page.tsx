import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MEDICAL_CORE, SPECIALTY_MAP, SPECIALTIES } from "@/lib/specialties";
import { SITE } from "@/lib/site";
import PaginaEspecialidad from "@/components/novum/PaginaEspecialidad";

export function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ especialidad: s.slug }));
}

export function generateMetadata({ params }: { params: { especialidad: string } }): Metadata {
  const s = SPECIALTY_MAP[params.especialidad];
  if (!s) return {};
  const title = `${s.seoLabel} | NOVUMed`;
  return {
    title,
    description: s.intro,
    keywords: [...s.keywords],
    alternates: { canonical: `/novumed/${s.slug}` },
    openGraph: { title, description: s.intro, url: `${SITE.url}/novumed/${s.slug}`, type: "website" },
  };
}

export default function Page({ params }: { params: { especialidad: string } }) {
  const s = SPECIALTY_MAP[params.especialidad];
  if (!s) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "NOVUM", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "NOVUMed", item: `${SITE.url}/novumed` },
      { "@type": "ListItem", position: 3, name: s.name, item: `${SITE.url}/novumed/${s.slug}` },
    ],
  };
  return (
    <>
      <PaginaEspecialidad
        s={s}
        otras={SPECIALTIES.filter((o) => o.slug !== s.slug)}
        marca={{ nombre: "NOVUMed", base: "novumed", enDesarrollo: true }}
        nucleo={MEDICAL_CORE}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
