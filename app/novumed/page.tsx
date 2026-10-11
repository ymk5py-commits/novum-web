import type { Metadata } from "next";
import { NOVUMED } from "@/lib/productos";
import { SPECIALTIES } from "@/lib/specialties";
import { SITE } from "@/lib/site";
import PaginaProducto from "@/components/novum/PaginaProducto";

export const metadata: Metadata = {
  title: "NOVUMed — Historia clínica y agenda para consultorios (en desarrollo)",
  description:
    "NOVUMed es el producto de NOVUM para consultorios de kinesiología, psicología, nutrición, pediatría y otras especialidades. Está en desarrollo: mirá lo que va a tener y pedí una demo.",
  alternates: { canonical: "/novumed" },
  keywords: ["software para consultorios", "historia clínica digital", "agenda médica", "software médico Paraguay"],
  openGraph: { title: "NOVUMed — Historia clínica y agenda para consultorios.", url: `${SITE.url}/novumed`, type: "website" },
};

export default function Page() {
  return <PaginaProducto datos={NOVUMED} especialidades={SPECIALTIES} />;
}
