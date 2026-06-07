import { brandOG, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "NOVUdent — Software odontológico";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OG() {
  return brandOG({
    eyebrow: "NOVUdent · Odontología",
    title: "El software de tu clínica dental.",
    subtitle: "Odontograma, presupuestos, financiamiento e IA.",
  });
}
