import { brandOG, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { SPECIALTY_MAP } from "@/lib/specialties";

export const runtime = "edge";
export const alt = "NOVUMed por especialidad";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OG({ params }: { params: { especialidad: string } }) {
  const s = SPECIALTY_MAP[params.especialidad];
  return brandOG({ etiqueta: "NOVUMed · En desarrollo", titulo: s?.seoLabel ?? "Software para consultorios", bajada: s?.tagline });
}
