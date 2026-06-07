"use client";
import { motion } from "framer-motion";
import { Send, Check, Instagram, Video, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { GlassButton, GlassChip } from "./primitives/GlassButton";
import { TiltCard } from "@/components/motion/TiltCard";
import { BorderBeam } from "@/components/magic/BorderBeam";

export default function Products() {
  return (
    <section id="productos" className="relative py-32 sm:py-44 overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-x-0 top-0 h-[40vh] bg-gradient-to-b from-cobalt-500/[0.08] to-transparent -z-10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          tag="01 · Productos propietarios"
          title={
            <>
              Tres productos.{" "}
              <span className="aurora-text">Una sola tesis</span>
              :<br />
              <span className="font-serif italic text-ivory-200/90">software que opera por ti.</span>
            </>
          }
        />

        <div className="mt-20 space-y-28">
          <Botika />
          <Pautik />
          <NovuMed />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ tag, title }: { tag: string; title: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-6 items-end">
      <div className="col-span-12 md:col-span-3">
        <div className="eyebrow border-l border-cobalt-400/60 pl-3">{tag}</div>
      </div>
      <h2 className="col-span-12 md:col-span-9 display-tight text-4xl sm:text-5xl lg:text-6xl text-ivory-50 text-pretty">
        {title}
      </h2>
    </div>
  );
}

function Botika() {
  return (
    <ProductRow
      eyebrow="01 / Conversational AI"
      kicker="Botika"
      tagline="El agente que cierra."
      copy="Plataforma de agentes agénticos: razona, decide y ejecuta dentro de tu stack. Atiende clientes en Instagram, WhatsApp y Messenger; agenda, califica leads, crea oportunidades en tu CRM, cobra y entrega — sin intervención humana."
      bullets={[
        "Integración nativa con Meta · Calendar · CRMs · ERPs",
        "Memoria persistente y handoff humano con contexto",
        "Modelo agnóstico (GPT · Claude · Gemini · locales)",
        "Observabilidad, evals y guardrails desde el día uno",
      ]}
      visual={<BotikaVisual />}
    />
  );
}

function Pautik() {
  return (
    <ProductRow
      reverse
      eyebrow="02 / Performance media"
      kicker="PAUTIK"
      tagline="La consola que tu pauta merece."
      copy="Unificamos Meta, Google, TikTok y X en un mismo plano de control. Decide presupuesto por hora, replica creatividades ganadoras, audita el embudo y dispara alertas cuando el CPA se sale del rango."
      bullets={[
        "Optimización por reglas + asistente con IA",
        "Atribución unificada y reportes white-label",
        "Biblioteca creativa con scoring de performance",
        "Multi-cuenta, multi-cliente, multi-moneda",
      ]}
      visual={<PautikVisual />}
    />
  );
}

function NovuMed() {
  return (
    <ProductRow
      eyebrow="03 / Vertical SaaS · Salud"
      kicker="NOVUMed"
      tagline="El SO de tu consultorio."
      copy="Diseñado junto a profesionales clínicos. Reemplaza agenda, historia clínica, facturación y comunicación con pacientes en un solo producto, sin la deuda técnica del software de los 2010."
      bullets={[
        "Historia clínica estructurada + plantillas por especialidad",
        "Agenda inteligente con recordatorios omnicanal",
        "Facturación electrónica y conciliación con pasarelas",
        "Portal del paciente y telemedicina integrada",
      ]}
      visual={<NovuMedVisual />}
    />
  );
}

function ProductRow({
  eyebrow,
  kicker,
  tagline,
  copy,
  bullets,
  visual,
  reverse,
}: {
  eyebrow: string;
  kicker: string;
  tagline: string;
  copy: string;
  bullets: string[];
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-12 gap-6 lg:gap-12 items-center"
    >
      <div className={`col-span-12 lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
        <GlassChip tone="cobalt">{eyebrow}</GlassChip>
        <h3 className="mt-5 display-tight text-6xl sm:text-7xl text-ivory-50">
          <span className="block text-cobalt-300">{kicker}</span>
          <span className="font-serif italic text-ivory-100/85 text-4xl sm:text-5xl block mt-2 leading-tight">
            {tagline}
          </span>
        </h3>
        <p className="mt-6 max-w-xl text-ivory-200/80 text-base leading-[1.75] text-pretty">
          {copy}
        </p>
        <ul className="mt-7 grid grid-cols-1 gap-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-ivory-100/90">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cobalt-400 shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <GlassButton href="#contacto" variant="outline" size="md">
            Solicitar demo de {kicker}
          </GlassButton>
        </div>
      </div>
      <div className={`col-span-12 lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>{visual}</div>
    </motion.article>
  );
}

/* ============ VISUALS ============ */
function FrameShell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <TiltCard className="group">
      {/* glow */}
      <div className="absolute -inset-4 bg-cobalt-500/10 blur-3xl rounded-3xl -z-10" />
      <div className="relative glass-strong rounded-3xl overflow-hidden shadow-glass-lg">
        <BorderBeam />
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-ultrawide text-ivory-300/60">{label}</span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-mint animate-ticker" />
            <span className="font-mono text-[10px] text-ivory-300/60">LIVE</span>
          </div>
        </div>
        {children}
      </div>
    </TiltCard>
  );
}

/* ---------- BOTIKA · chat ---------- */
function BotikaVisual() {
  return (
    <FrameShell label="botika · runtime">
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 sm:px-6 py-3">
        <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white">
          <Instagram className="h-4 w-4" strokeWidth={2} />
          <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-signal-mint ring-2 ring-navy-900" />
        </span>
        <div className="min-w-0">
          <div className="text-sm text-ivory-50 truncate">Camila Restrepo</div>
          <div className="eyebrow">Instagram DM · en línea</div>
        </div>
        <span className="ml-auto shrink-0"><GlassChip dot tone="mint">Auto</GlassChip></span>
      </div>

      <div className="p-4 sm:p-6 grid gap-2.5 bg-gradient-to-br from-navy-900/40 via-transparent to-cobalt-500/[0.04]">
        <Bubble side="user" time="10:02">¿Tienen disponibilidad para una limpieza el sábado?</Bubble>
        <Bubble side="agent" time="10:02">
          ¡Hola Camila! El sábado tengo 10:30 con el Dr. Ruiz. ¿Te la reservo?
          <ToolCall name="calendar.checkAvailability" />
        </Bubble>
        <Bubble side="user" time="10:03">Sí, porfa 🙌</Bubble>
        <Bubble side="agent" time="10:03">
          Listo. Cita confirmada y te envié el recordatorio por WhatsApp.
          <ToolCall name="crm.createOpportunity" />
          <ToolCall name="whatsapp.sendTemplate" />
        </Bubble>

        <div className="mt-1 flex items-center gap-2 rounded-full glass-chip px-3 py-2">
          <span className="text-[13px] text-ivory-300/60">Botika está respondiendo…</span>
          <span className="ml-auto grid h-7 w-7 place-items-center rounded-full bg-cobalt-500 text-white">
            <Send className="h-3.5 w-3.5" />
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between border-t border-white/5 pt-3 font-mono text-[10px] uppercase tracking-ultrawide text-ivory-300/60">
          <span>412ms · 3 tools</span>
          <span className="inline-flex items-center gap-1.5 text-signal-mint"><Check className="h-3 w-3" /> resolved</span>
        </div>
      </div>
    </FrameShell>
  );
}

function Bubble({ side, time, children }: { side: "user" | "agent"; time: string; children: React.ReactNode }) {
  const isAgent = side === "agent";
  return (
    <div className={`flex ${isAgent ? "" : "justify-end"}`}>
      <div className={`flex max-w-[85%] flex-col ${isAgent ? "items-start" : "items-end"}`}>
        <div
          className={`px-3.5 py-2.5 text-[13px] sm:text-sm leading-relaxed ${
            isAgent
              ? "glass-cobalt text-ivory-50 rounded-2xl rounded-tl-md"
              : "glass-chip text-ivory-100 rounded-2xl rounded-tr-md"
          }`}
        >
          {children}
        </div>
        <span className="mt-1 font-mono text-[9px] text-ivory-300/50">{time}</span>
      </div>
    </div>
  );
}

function ToolCall({ name }: { name: string }) {
  return (
    <div className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-cobalt-300/30 bg-cobalt-500/10 px-2 py-1 font-mono text-[10px] text-cobalt-100">
      <Check className="h-2.5 w-2.5 text-signal-mint" />
      {name}()
    </div>
  );
}

/* ---------- PAUTIK · cockpit ---------- */
function PautikVisual() {
  return (
    <FrameShell label="pautik · cockpit">
      <div className="p-4 sm:p-6 grid gap-4 bg-gradient-to-br from-navy-900/40 via-transparent to-cobalt-500/[0.04]">
        <div className="flex items-center justify-between gap-2">
          <div className="eyebrow">Cuenta · NOVUM</div>
          <div className="flex gap-0.5 rounded-full glass-chip p-0.5">
            {["7d", "30d", "90d"].map((d, i) => (
              <span
                key={d}
                className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] ${
                  i === 1 ? "bg-cobalt-500 text-white" : "text-ivory-300/70"
                }`}
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <Kpi label="Spend" value="$18.4k" delta="+12.3%" />
          <Kpi label="CPA" value="$4.12" delta="−8.5%" />
          <Kpi label="ROAS" value="6.41×" delta="+0.8×" />
        </div>

        <div className="glass-chip rounded-2xl p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-3 text-[11px]">
              <span className="inline-flex items-center gap-1.5 text-cobalt-200">
                <span className="h-1.5 w-1.5 rounded-full bg-cobalt-400" />Ingresos
              </span>
              <span className="inline-flex items-center gap-1.5 text-signal-amber">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-amber" />Inversión
              </span>
            </div>
            <span className="eyebrow hidden sm:block">30 días</span>
          </div>
          <AreaChart />
        </div>

        <div className="grid gap-2">
          <div className="flex h-2 w-full overflow-hidden rounded-full">
            <span className="bg-cobalt-500" style={{ width: "52%" }} />
            <span className="bg-cobalt-300" style={{ width: "31%" }} />
            <span className="bg-signal-coral" style={{ width: "17%" }} />
          </div>
          <div className="flex justify-between font-mono text-[10px] text-ivory-300/70">
            <span>Meta 52%</span>
            <span>Google 31%</span>
            <span>TikTok 17%</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 rounded-xl glass-chip px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-signal-mint animate-ticker shadow-[0_0_12px_rgba(123,227,179,0.7)]" />
          <span className="font-mono text-[11px] text-ivory-200">
            Auto-bid · +8% en <span className="text-cobalt-300">VENTA — RT</span>
          </span>
        </div>
      </div>
    </FrameShell>
  );
}

function Kpi({ label, value, delta }: { label: string; value: string; delta: string }) {
  const up = delta.includes("+") || delta.includes("−");
  return (
    <div className="glass-chip rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5">
      <div className="eyebrow truncate">{label}</div>
      <div className="display-tight text-lg sm:text-2xl text-ivory-50 mt-1">{value}</div>
      <div className="mt-0.5 inline-flex items-center gap-0.5 font-mono text-[10px] text-signal-mint">
        {up && <TrendingUp className="h-3 w-3" />}
        {delta}
      </div>
    </div>
  );
}

function AreaChart() {
  return (
    <svg viewBox="0 0 400 130" preserveAspectRatio="none" className="h-24 w-full sm:h-32">
      <defs>
        <linearGradient id="pa" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="0" x2="400" y1={i * 32 + 12} y2={i * 32 + 12} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}
      <path d="M0,90 C30,82 55,60 85,64 S135,42 165,40 205,60 235,52 285,20 315,26 360,46 400,30 L400,130 L0,130 Z" fill="url(#pa)" />
      <path d="M0,90 C30,82 55,60 85,64 S135,42 165,40 205,60 235,52 285,20 315,26 360,46 400,30" stroke="#60A5FA" strokeWidth="2.5" fill="none" vectorEffect="non-scaling-stroke" />
      <path d="M0,104 C60,100 100,90 150,94 S230,74 290,80 360,84 400,74" stroke="#F4C46A" strokeWidth="1.5" fill="none" opacity="0.7" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/* ---------- NOVUMED · agenda ---------- */
function NovuMedVisual() {
  return (
    <FrameShell label="novumed · agenda">
      <div className="p-4 sm:p-6 grid gap-4 bg-gradient-to-br from-navy-900/40 via-transparent to-cobalt-500/[0.04]">
        <div className="flex items-center justify-between">
          <div>
            <div className="display-tight text-2xl sm:text-3xl text-ivory-50">Jueves 14</div>
            <div className="eyebrow mt-0.5">Marzo · 7 citas</div>
          </div>
          <div className="flex items-center gap-1">
            <span className="grid h-7 w-7 place-items-center rounded-full glass-chip"><ChevronLeft className="h-3.5 w-3.5 text-ivory-200" /></span>
            <span className="grid h-7 w-7 place-items-center rounded-full glass-chip"><ChevronRight className="h-3.5 w-3.5 text-ivory-200" /></span>
          </div>
        </div>

        <div className="flex justify-between">
          {[11, 12, 13, 14, 15, 16, 17].map((n, i) => (
            <span
              key={n}
              className={`grid h-8 w-8 place-items-center rounded-full font-mono text-[11px] ${
                i === 3 ? "bg-cobalt-500 text-white" : "glass-chip text-ivory-300/70"
              }`}
            >
              {n}
            </span>
          ))}
        </div>

        <div className="grid gap-2">
          <Appt h="08:30" who="María González" what="Control · Hipertensión" tag="Confirmada" tone="mint" />
          <Appt h="09:00" who="Juan P. Ríos" what="Primera consulta" tag="Pendiente" tone="amber" />
          <Appt h="09:45" who="Camila Ortega" what="Resultados de lab" tag="Telemedicina" tone="cobalt" video />
          <Appt h="10:30" who="Andrés Mejía" what="Procedimiento menor" tag="Confirmada" tone="mint" />
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <MiniMetric n="48" l="Pacientes" />
          <MiniMetric n="92%" l="Ocupación" />
          <MiniMetric n="$12.4M" l="Facturado" />
        </div>
      </div>
    </FrameShell>
  );
}

function apptInitials(n: string) {
  return n.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

function Appt({
  h,
  who,
  what,
  tag,
  tone,
  video,
}: {
  h: string;
  who: string;
  what: string;
  tag: string;
  tone: "mint" | "amber" | "cobalt";
  video?: boolean;
}) {
  const dot = { mint: "bg-signal-mint", amber: "bg-signal-amber", cobalt: "bg-cobalt-400" }[tone];
  return (
    <div className="flex items-center gap-3 glass-chip rounded-2xl px-3 py-2.5">
      <div className="w-10 shrink-0 font-mono text-xs text-ivory-300/70">{h}</div>
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cobalt-500/15 font-mono text-[10px] text-cobalt-100 ring-1 ring-cobalt-300/20">
        {apptInitials(who)}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 truncate text-sm text-ivory-50">
          {who}
          {video && <Video className="h-3 w-3 shrink-0 text-cobalt-300" />}
        </div>
        <div className="truncate text-[11px] text-ivory-300/70">{what}</div>
      </div>
      <span className="hidden sm:flex"><GlassChip tone={tone}>{tag}</GlassChip></span>
      <span className={`h-2 w-2 shrink-0 rounded-full sm:hidden ${dot}`} />
    </div>
  );
}

function MiniMetric({ n, l }: { n: string; l: string }) {
  return (
    <div className="glass-chip rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5">
      <div className="display-tight text-lg sm:text-2xl text-ivory-50">{n}</div>
      <div className="eyebrow mt-0.5 truncate">{l}</div>
    </div>
  );
}
