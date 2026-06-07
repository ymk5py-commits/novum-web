import { brandOG, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { DENTAL_MAP } from "@/lib/specialties";

export const runtime = "edge";
export const alt = "NOVUdent";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OG({ params }: { params: { especialidad: string } }) {
  const s = DENTAL_MAP[params.especialidad];
  return brandOG({
    eyebrow: "NOVUdent · Especialidad",
    title: s?.seoLabel ?? "Software odontológico",
    subtitle: s?.tagline,
  });
}
