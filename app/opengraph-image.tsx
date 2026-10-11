import { brandOG, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OG() {
  return brandOG({ etiqueta: "Asunción, Paraguay", titulo: SITE.tagline, bajada: "Novudent · NOVUMed · Botika · PAUTIK" });
}
