import type { Metadata } from "next";
import { NOVUMED } from "@/lib/products";
import { SITE } from "@/lib/site";
import ProductPage from "@/components/product/ProductPage";
import { MedVisual } from "@/components/product/ProductVisuals";

export const metadata: Metadata = {
  title: "NOVUMed — Software médico multiespecialidad para Paraguay",
  description: NOVUMED.intro,
  alternates: { canonical: "/novumed" },
  keywords: [
    "software médico", "software para clínicas", "ficha clínica digital",
    "software kinesiología", "software psicología", "software nutrición",
    "software oftalmología", "software pediatría", "CRM médico Paraguay",
  ],
  openGraph: {
    title: `NOVUMed — ${NOVUMED.tagline}`,
    description: NOVUMED.intro,
    url: `${SITE.url}/novumed`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NOVUMed",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web, iOS, Android",
  description: NOVUMED.intro,
  url: `${SITE.url}/novumed`,
  offers: { "@type": "Offer", price: "39", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
};

export default function Page() {
  return (
    <>
      <ProductPage config={NOVUMED} visual={<MedVisual />} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
