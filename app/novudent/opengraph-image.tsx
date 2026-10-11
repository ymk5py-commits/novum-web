import { brandOG, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { NOVUDENT } from "@/lib/productos";

export const runtime = "edge";
export const alt = "Novudent — Software para clínicas dentales";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function OG() {
  return brandOG({ etiqueta: "Novudent · En producción", titulo: NOVUDENT.titular, bajada: "Agenda, odontograma, presupuestos y caja." });
}
