import { brandOG, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { SPECIALTY_MAP } from "@/lib/specialties";

export const runtime = "edge";
export const alt = "NOVUMed";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OG({ params }: { params: { especialidad: string } }) {
  const s = SPECIALTY_MAP[params.especialidad];
  return brandOG({
    eyebrow: "NOVUMed · Especialidad",
    title: s?.seoLabel ?? "Software médico",
    subtitle: s?.tagline,
  });
}
