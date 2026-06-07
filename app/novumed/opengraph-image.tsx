import { brandOG, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "NOVUMed — Software médico multiespecialidad";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OG() {
  return brandOG({
    eyebrow: "NOVUMed · Salud",
    title: "El sistema operativo de tu consultorio.",
    subtitle: "Software médico multiespecialidad para Paraguay.",
  });
}
