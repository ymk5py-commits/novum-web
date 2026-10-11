/* JSON-LD de la organización y el sitio. Solo datos reales: sin teléfono ni correo si no están
 * configurados, sin ofertas ni precios inventados. */
import { CARTERA, CONTACTO, SITE } from "@/lib/site";

export default function DatosEstructurados() {
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
        description: SITE.description,
        slogan: SITE.tagline,
        ...(CONTACTO.email ? { email: CONTACTO.email } : {}),
        address: { "@type": "PostalAddress", addressLocality: SITE.city, addressCountry: "PY" },
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
      ...CARTERA.filter((p) => p.estado === "En producción").map((p) => ({
        "@type": "SoftwareApplication",
        "@id": `${SITE.url}/#${p.slug}`,
        name: p.nombre,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: p.queHace,
        url: p.pagina ? `${SITE.url}${p.pagina}` : SITE.url,
        publisher: { "@id": `${SITE.url}/#organization` },
      })),
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}
