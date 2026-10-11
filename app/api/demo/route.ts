import { NextRequest, NextResponse } from "next/server";
import { INTERESES } from "@/lib/site";

/**
 * Pedido de demo → correo a Novum (vía Resend, sin SDK).
 *
 * POST { nombre, empresa?, contacto, interes?, mensaje?, web? }  →  { ok }
 *
 * Env (Vercel): RESEND_API_KEY, EMAIL_FROM («NOVUM <avisos@novumholding.lat>», dominio verificado
 * en Resend) y LEADS_EMAIL (a dónde llegan los pedidos). Sin ellas responde 503: el formulario
 * avisa y ofrece los canales reales que haya.
 *
 * `web` es la trampa para robots: si viene con algo, se contesta ok y no se manda nada.
 */
export const runtime = "nodejs";

const LIMITE = 5; // pedidos por IP
const VENTANA_MS = 10 * 60_000;
const golpes = new Map<string, number[]>();

function demasiados(ip: string) {
  const ahora = Date.now();
  const h = (golpes.get(ip) ?? []).filter((t) => ahora - t < VENTANA_MS);
  h.push(ahora);
  golpes.set(ip, h);
  if (golpes.size > 5000) golpes.clear();
  return h.length > LIMITE;
}

const recortar = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escapar = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: NextRequest) {
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "sin-ip";
  if (demasiados(ip)) return NextResponse.json({ ok: false, error: "Demasiados pedidos seguidos." }, { status: 429 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  if (recortar(body.web, 200)) return NextResponse.json({ ok: true });

  const nombre = recortar(body.nombre, 120);
  const empresa = recortar(body.empresa, 160);
  const contacto = recortar(body.contacto, 160);
  const interesCrudo = recortar(body.interes, 60);
  const interes = (INTERESES as readonly string[]).includes(interesCrudo) ? interesCrudo : "";
  const mensaje = recortar(body.mensaje, 2000);

  const contactoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto) || contacto.replace(/\D/g, "").length >= 8;
  if (nombre.length < 2 || !contactoValido) {
    return NextResponse.json({ ok: false, error: "Faltan el nombre o un contacto válido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.LEADS_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("[demo] faltan envs de correo: RESEND_API_KEY / EMAIL_FROM / LEADS_EMAIL");
    return NextResponse.json({ ok: false, error: "El formulario todavía no está configurado." }, { status: 503 });
  }

  const filas: [string, string][] = [
    ["Nombre", nombre],
    ["Clínica o empresa", empresa || "—"],
    ["Contacto", contacto],
    ["Le interesa", interes || "—"],
    ["Mensaje", mensaje || "—"],
  ];
  const html = `<h2 style="font-family:Georgia,serif;font-weight:400">Pedido de demo · novumholding.lat</h2><table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${filas
    .map(([k, v]) => `<tr><td style="color:#555;vertical-align:top">${k}</td><td style="white-space:pre-wrap">${escapar(v)}</td></tr>`)
    .join("")}</table>`;
  const esCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contacto);

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Demo${interes ? ` de ${interes}` : ""} · ${nombre}${empresa ? ` (${empresa})` : ""}`,
      html,
      text: filas.map(([k, v]) => `${k}: ${v}`).join("\n"),
      ...(esCorreo ? { reply_to: contacto } : {}),
    }),
  }).catch(() => null);

  if (!r || !r.ok) {
    console.error("[demo] Resend respondió", r?.status, await r?.text().catch(() => ""));
    return NextResponse.json({ ok: false, error: "No se pudo enviar." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
