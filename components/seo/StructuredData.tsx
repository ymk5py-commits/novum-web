import { SITE } from "@/lib/site";

export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        alternateName: SITE.shortName,
        url: SITE.url,
        logo: { "@type": "ImageObject", url: `${SITE.url}/icon.svg` },
        image: `${SITE.url}/opengraph-image`,
        description: SITE.description,
        email: SITE.email,
        slogan: SITE.tagline,
        foundingLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: SITE.city,
            addressCountry: "PY",
          },
        },
        areaServed: ["Paraguay", "Latinoamérica", "Estados Unidos", "Europa"],
        knowsAbout: [
          "Inteligencia artificial aplicada",
          "Agentes conversacionales",
          "Automatización de procesos",
          "Pauta digital programática",
          "CRM clínico",
          "Desarrollo de software a la medida",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: SITE.email,
          contactType: "sales",
          availableLanguage: ["Spanish", "English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "es",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
      ...SITE.products.map((p) => ({
        "@type": "SoftwareApplication",
        "@id": `${SITE.url}/#${p.slug}`,
        name: p.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        description: p.description,
        offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
        publisher: { "@id": `${SITE.url}/#organization` },
      })),
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        mainEntity: SITE.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
