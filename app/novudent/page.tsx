import type { Metadata } from "next";
import { NOVUDENT } from "@/lib/productos";
import { DENTAL_SPECIALTIES } from "@/lib/specialties";
import { NOVUDENT_URL, SITE } from "@/lib/site";
import PaginaProducto from "@/components/novum/PaginaProducto";

export const metadata: Metadata = {
  title: "Novudent — Software para clínicas dentales",
  description:
    "Agenda, ficha clínica, odontograma por superficies, presupuestos con cuotas, caja y equipo en un solo sistema. En producción, con demo pública.",
  alternates: { canonical: "/novudent" },
  keywords: ["software dental", "software odontológico", "odontograma digital", "software para dentistas", "software dental Paraguay"],
  openGraph: { title: "Novudent — La clínica dental, en un solo sistema.", url: `${SITE.url}/novudent`, type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Novudent",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  description: NOVUDENT.bajada,
  url: NOVUDENT_URL,
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
};

export default function Page() {
  return (
    <>
      <PaginaProducto datos={NOVUDENT} especialidades={DENTAL_SPECIALTIES} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
