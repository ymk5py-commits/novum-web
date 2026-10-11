import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DENTAL_CORE, DENTAL_MAP, DENTAL_SPECIALTIES } from "@/lib/specialties";
import { SITE } from "@/lib/site";
import PaginaEspecialidad from "@/components/novum/PaginaEspecialidad";

export function generateStaticParams() {
  return DENTAL_SPECIALTIES.map((s) => ({ especialidad: s.slug }));
}

export function generateMetadata({ params }: { params: { especialidad: string } }): Metadata {
  const s = DENTAL_MAP[params.especialidad];
  if (!s) return {};
  const title = `${s.seoLabel} | Novudent`;
  return {
    title,
    description: s.intro,
    keywords: [...s.keywords],
    alternates: { canonical: `/novudent/${s.slug}` },
    openGraph: { title, description: s.intro, url: `${SITE.url}/novudent/${s.slug}`, type: "website" },
  };
}

export default function Page({ params }: { params: { especialidad: string } }) {
  const s = DENTAL_MAP[params.especialidad];
  if (!s) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "NOVUM", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Novudent", item: `${SITE.url}/novudent` },
      { "@type": "ListItem", position: 3, name: s.name, item: `${SITE.url}/novudent/${s.slug}` },
    ],
  };
  return (
    <>
      <PaginaEspecialidad
        s={s}
        otras={DENTAL_SPECIALTIES.filter((o) => o.slug !== s.slug)}
        marca={{ nombre: "Novudent", base: "novudent", enDesarrollo: false }}
        nucleo={DENTAL_CORE}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
