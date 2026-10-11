import { brandOG, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { DENTAL_MAP } from "@/lib/specialties";

export const runtime = "edge";
export const alt = "Novudent por especialidad";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OG({ params }: { params: { especialidad: string } }) {
  const s = DENTAL_MAP[params.especialidad];
  return brandOG({ etiqueta: "Novudent · Especialidad", titulo: s?.seoLabel ?? "Software odontológico", bajada: s?.tagline });
}
