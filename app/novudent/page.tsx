import type { Metadata } from "next";
import { NOVUDENT } from "@/lib/products";
import { SITE } from "@/lib/site";
import ProductPage from "@/components/product/ProductPage";
import { DentalVisual } from "@/components/product/ProductVisuals";

export const metadata: Metadata = {
  title: "NOVUdent — Software para clínicas y consultorios odontológicos",
  description: NOVUDENT.intro,
  alternates: { canonical: "/novudent" },
  keywords: [
    "software dental", "software odontológico", "odontograma digital",
    "software para dentistas", "gestión clínica dental", "presupuestos odontología",
    "software ortodoncia", "software dental Paraguay",
  ],
  openGraph: {
    title: `NOVUdent — ${NOVUDENT.tagline}`,
    description: NOVUDENT.intro,
    url: `${SITE.url}/novudent`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NOVUdent",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web, iOS, Android",
  description: NOVUDENT.intro,
  url: `${SITE.url}/novudent`,
  offers: { "@type": "Offer", price: "45", priceCurrency: "USD", availability: "https://schema.org/InStock" },
  publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
};

export default function Page() {
  return (
    <>
      <ProductPage config={NOVUDENT} visual={<DentalVisual />} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
