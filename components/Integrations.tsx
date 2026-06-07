"use client";
import { forwardRef, useRef } from "react";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, Calendar, Database, CreditCard, Building2 } from "lucide-react";
import { AnimatedBeam } from "./magic/AnimatedBeam";
import { NovumMark } from "./brand/NovumLogo";
import { GlassChip } from "./primitives/GlassButton";

const Node = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; label?: string; size?: "sm" | "lg" }
>(({ children, label, size = "sm" }, ref) => (
  <div className="flex flex-col items-center gap-2">
    <div
      ref={ref}
      className={`glass-strong grid place-items-center rounded-2xl shadow-glass ${
        size === "lg" ? "h-20 w-20 rounded-3xl" : "h-12 w-12 sm:h-14 sm:w-14"
      }`}
    >
      {children}
    </div>
    {label && (
      <span className="font-mono text-[9px] uppercase tracking-ultrawide text-ivory-300/70 text-center leading-tight">
        {label}
      </span>
    )}
  </div>
));
Node.displayName = "Node";

export default function Integrations() {
  const container = useRef<HTMLDivElement>(null);
  const hub = useRef<HTMLDivElement>(null);
  const instagram = useRef<HTMLDivElement>(null);
  const whatsapp = useRef<HTMLDivElement>(null);
  const calendar = useRef<HTMLDivElement>(null);
  const crm = useRef<HTMLDivElement>(null);
  const pagos = useRef<HTMLDivElement>(null);
  const outcome = useRef<HTMLDivElement>(null);

  const inputs = [instagram, whatsapp, calendar, crm, pagos];

  return (
    <section id="integraciones" className="relative py-32 sm:py-44 border-t border-white/[0.06] overflow-hidden">
      <div
        className="aurora -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[760px]"
        style={{ background: "radial-gradient(closest-side, rgba(47,98,245,0.18), transparent)" }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow border-l border-cobalt-400/60 pl-3">Integraciones</div>
          </div>
          <h2 className="col-span-12 md:col-span-9 display-tight text-4xl sm:text-5xl lg:text-6xl text-ivory-50 text-pretty">
            Conecta con todo
            <br />
            tu <span className="font-serif italic text-cobalt-300">stack</span>. En minutos.
          </h2>
        </div>

        <p className="mt-6 max-w-xl text-ivory-200/75 leading-relaxed">
          Botika se enlaza de forma nativa con tus canales, tu calendario, tu CRM y tus
          pasarelas de pago. La conversación entra por cualquier lado y la acción se
          ejecuta donde tiene que pasar.
        </p>

        {/* Diagrama */}
        <div
          ref={container}
          className="relative mt-14 mx-auto flex h-[420px] w-full max-w-3xl items-stretch justify-between"
        >
          {/* Beams (debajo de los nodos) */}
          {inputs.map((node, i) => (
            <AnimatedBeam
              key={i}
              containerRef={container}
              fromRef={node}
              toRef={hub}
              duration={3}
              delay={i * 0.4}
              curvature={(i - 2) * 18}
            />
          ))}
          <AnimatedBeam containerRef={container} fromRef={hub} toRef={outcome} duration={3} delay={0.6} />

          {/* Columna izquierda: entradas */}
          <div className="z-10 flex flex-col justify-between py-2">
            <Node ref={instagram} label="Instagram"><Instagram className="h-5 w-5 text-cobalt-200" strokeWidth={1.5} /></Node>
            <Node ref={whatsapp} label="WhatsApp"><MessageCircle className="h-5 w-5 text-signal-mint" strokeWidth={1.5} /></Node>
            <Node ref={calendar} label="Calendar"><Calendar className="h-5 w-5 text-cobalt-200" strokeWidth={1.5} /></Node>
            <Node ref={crm} label="CRM / ERP"><Database className="h-5 w-5 text-cobalt-200" strokeWidth={1.5} /></Node>
            <Node ref={pagos} label="Pagos"><CreditCard className="h-5 w-5 text-signal-amber" strokeWidth={1.5} /></Node>
          </div>

          {/* Centro: hub Botika */}
          <div className="z-10 flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div ref={hub} className="relative glass-cobalt grid h-20 w-20 place-items-center rounded-3xl shadow-glow">
                <span className="absolute inset-0 conic-glow rounded-3xl opacity-40" />
                <NovumMark className="!h-10 !w-10" />
              </div>
              <GlassChip dot tone="cobalt">Botika</GlassChip>
            </div>
          </div>

          {/* Derecha: resultado */}
          <div className="z-10 flex items-center">
            <Node ref={outcome} label="Tu negocio" size="lg">
              <Building2 className="h-7 w-7 text-ivory-50" strokeWidth={1.5} />
            </Node>
          </div>
        </div>

        {/* leyenda */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {["Meta Cloud API", "Google Calendar", "HubSpot · Salesforce", "Stripe · Bancard", "n8n · Make"].map((t) => (
            <span
              key={t}
              className="glass-chip rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-ultrawide text-ivory-200/80"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
