"use client";
import { motion } from "framer-motion";
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
              <span className="bg-gradient-to-r from-cobalt-200 via-cobalt-300 to-cobalt-400 bg-clip-text text-transparent">
                Una sola tesis
              </span>
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

function BotikaVisual() {
  return (
    <FrameShell label="botika · runtime">
      <div className="p-6 sm:p-7 grid gap-3.5 bg-gradient-to-br from-navy-900/40 via-transparent to-cobalt-500/[0.04]">
        <Bubble side="user" name="Camila · Instagram">¿Tienes disponibilidad para una limpieza el sábado?</Bubble>
        <Bubble side="agent" name="Botika">
          Hola Camila. Sábado a las 10:30 con el Dr. Ruiz. ¿Reservo?
          <ToolCall name="calendar.checkAvailability" />
        </Bubble>
        <Bubble side="user" name="Camila · Instagram">Sí, gracias.</Bubble>
        <Bubble side="agent" name="Botika">
          Listo. Cita confirmada y recordatorio enviado por WhatsApp.
          <ToolCall name="crm.createOpportunity" />
          <ToolCall name="whatsapp.sendTemplate" />
        </Bubble>
        <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3 font-mono text-[10px] uppercase tracking-ultrawide text-ivory-300/60">
          <span>412ms · 3 tools · closed-loop</span>
          <span className="inline-flex items-center gap-1.5 text-signal-mint">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-mint" />
            resolved
          </span>
        </div>
      </div>
    </FrameShell>
  );
}

function Bubble({ side, name, children }: { side: "user" | "agent"; name: string; children: React.ReactNode }) {
  const isAgent = side === "agent";
  return (
    <div className={`flex ${isAgent ? "" : "justify-end"}`}>
      <div className={`max-w-[88%] ${isAgent ? "" : "text-right"}`}>
        <div className="eyebrow mb-1.5">{name}</div>
        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isAgent
              ? "glass-cobalt text-ivory-50"
              : "glass-chip text-ivory-100"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function ToolCall({ name }: { name: string }) {
  return (
    <div className="mt-2.5 inline-flex items-center gap-2 rounded-md border border-cobalt-300/30 bg-cobalt-500/10 px-2 py-1 font-mono text-[10px] text-cobalt-100">
      <span className="h-1 w-1 rounded-full bg-cobalt-300 animate-ticker" />
      {name}()
    </div>
  );
}

function PautikVisual() {
  return (
    <FrameShell label="pautik · cockpit">
      <div className="p-6 sm:p-7 grid gap-5 bg-gradient-to-br from-navy-900/40 via-transparent to-cobalt-500/[0.04]">
        <div className="grid grid-cols-3 gap-3">
          <Kpi label="Spend / día" value="$18,420" delta="+12.3%" />
          <Kpi label="CPA" value="$4.12" delta="−8.5%" positive />
          <Kpi label="ROAS" value="6.41×" delta="+0.8×" positive />
        </div>
        <div className="glass-chip rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="eyebrow">Performance · últimos 30d</div>
            <div className="flex gap-1.5">
              <Tag color="cobalt">META</Tag>
              <Tag color="ivory">GOOGLE</Tag>
              <Tag color="coral">TIKTOK</Tag>
            </div>
          </div>
          <Sparkline />
        </div>
        <div className="glass-chip rounded-2xl p-3 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-signal-mint animate-ticker shadow-[0_0_12px_rgba(123,227,179,0.7)]" />
          <span className="font-mono text-xs text-ivory-200">
            Auto-bid · subió presupuesto en <span className="text-cobalt-300">VENTA — RT</span> (+8%)
          </span>
        </div>
      </div>
    </FrameShell>
  );
}

function Tag({ color, children }: { color: "cobalt" | "ivory" | "coral"; children: React.ReactNode }) {
  const c = {
    cobalt: "bg-cobalt-500/15 text-cobalt-100 border-cobalt-300/30",
    ivory: "bg-white/10 text-ivory-100 border-white/15",
    coral: "bg-signal-coral/15 text-signal-coral border-signal-coral/30",
  }[color];
  return (
    <span className={`rounded-md border px-1.5 py-0.5 font-mono text-[9.5px] tracking-ultrawide ${c}`}>
      {children}
    </span>
  );
}

function Kpi({ label, value, delta, positive }: { label: string; value: string; delta: string; positive?: boolean }) {
  return (
    <div className="glass-chip rounded-2xl p-3.5">
      <div className="eyebrow">{label}</div>
      <div className="display-tight text-2xl text-ivory-50 mt-1.5">{value}</div>
      <div className={`text-[11px] mt-0.5 font-mono ${positive ? "text-signal-mint" : "text-ivory-300/70"}`}>{delta}</div>
    </div>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 400 110" className="w-full h-28">
      <defs>
        <linearGradient id="sp" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,80 C 30,72 50,55 80,58 S 130,40 160,38 200,55 230,48 280,18 310,22 360,42 400,28 L400,110 L0,110 Z"
        fill="url(#sp)"
      />
      <path
        d="M0,80 C 30,72 50,55 80,58 S 130,40 160,38 200,55 230,48 280,18 310,22 360,42 400,28"
        stroke="#60A5FA"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M0,92 C 60,88 100,78 150,82 S 230,62 290,68 360,72 400,62"
        stroke="#F4C46A"
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
        strokeDasharray="3 4"
      />
    </svg>
  );
}

function NovuMedVisual() {
  return (
    <FrameShell label="novumed · agenda">
      <div className="p-6 sm:p-7 grid gap-4 bg-gradient-to-br from-navy-900/40 via-transparent to-cobalt-500/[0.04]">
        <div className="flex items-center justify-between">
          <div className="display-tight text-3xl text-ivory-50">Jueves 14</div>
          <div className="eyebrow">7 citas · 92% ocup.</div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Appt h="08:30" who="María González" what="Control · Hipertensión" tag="Confirmada" tone="mint" />
          <Appt h="09:00" who="Juan P. Ríos" what="Primera consulta" tag="Pendiente" tone="amber" />
          <Appt h="09:45" who="Camila Ortega" what="Resultados de laboratorio" tag="Telemedicina" tone="cobalt" />
          <Appt h="10:30" who="Andrés Mejía" what="Procedimiento menor" tag="Confirmada" tone="mint" />
        </div>
        <div className="grid grid-cols-2 gap-3 mt-1">
          <MiniMetric n="48" l="Pacientes activos" />
          <MiniMetric n="$12.4M" l="Facturado mes" />
        </div>
      </div>
    </FrameShell>
  );
}

function Appt({
  h,
  who,
  what,
  tag,
  tone,
}: {
  h: string;
  who: string;
  what: string;
  tag: string;
  tone: "mint" | "amber" | "cobalt";
}) {
  return (
    <div className="grid grid-cols-12 items-center gap-3 glass-chip rounded-2xl px-3.5 py-2.5">
      <div className="col-span-2 font-mono text-sm text-ivory-50">{h}</div>
      <div className="col-span-6">
        <div className="text-sm text-ivory-50">{who}</div>
        <div className="text-[11px] text-ivory-300/70">{what}</div>
      </div>
      <div className="col-span-4 flex justify-end">
        <GlassChip tone={tone}>{tag}</GlassChip>
      </div>
    </div>
  );
}

function MiniMetric({ n, l }: { n: string; l: string }) {
  return (
    <div className="glass-chip rounded-2xl p-3.5">
      <div className="display-tight text-2xl text-ivory-50">{n}</div>
      <div className="eyebrow mt-1">{l}</div>
    </div>
  );
}
