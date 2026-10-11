import { brandOG, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { NOVUMED } from "@/lib/productos";

export const runtime = "edge";
export const alt = "NOVUMed — Historia clínica y agenda para consultorios";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OG() {
  return brandOG({ etiqueta: "NOVUMed · En desarrollo", titulo: NOVUMED.titular });
}
