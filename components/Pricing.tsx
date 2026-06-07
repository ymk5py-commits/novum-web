"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { GlassButton, GlassChip } from "./primitives/GlassButton";
import { NeoButton } from "./magic/NeoButton";
import { BorderBeam } from "./magic/BorderBeam";

/* Toggle animado Mensual / Anual */
function BillingSwitch({ value, onChange }: { value: 0 | 1; onChange: (v: 0 | 1) => void }) {
  return (
    <div className="relative inline-flex rounded-full glass-chip p-1">
      {(["Mensual", "Anual"] as const).map((label, i) => (
        <button
          key={label}
          onClick={() => onChange(i as 0 | 1)}
          className={`relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            value === i ? "text-white" : "text-ivory-300/70 hover:text-ivory-100"
          }`}
        >
          {value === i && (
            <motion.span
              layoutId="billing-pill"
              transition={{ type: "spring", stiffness: 500, damping: 34 }}
              className="absolute inset-0 -z-10 rounded-full liquid-glass"
            />
          )}
          <span className="relative inline-flex items-center gap-1.5">
            {label}
            {i === 1 && (
              <span className="rounded-full bg-signal-mint/15 px-1.5 py-0.5 font-mono text-[9px] text-signal-mint">
                −20%
              </span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
}

/* Número de precio animado */
function MoneyFlow({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(value);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) {
      if (ref.current) ref.current.textContent = value.toLocaleString("es-PY");
      return;
    }
    const controls = animate(mv, value, {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toLocaleString("es-PY");
      },
    });
    return () => controls.stop();
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps
  return <span ref={ref}>{value.toLocaleString("es-PY")}</span>;
}

type Plan = {
  name: string;
  blurb: string;
  monthly: number | null;
  annual: number | null;
  features: string[];
  featured?: boolean;
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Botika",
    blurb: "Un agente conversacional en producción, conectado a tu stack.",
    monthly: 290,
    annual: 232,
    features: [
      "1 agente en producción",
      "Meta · WhatsApp · Calendar",
      "Hasta 2.000 conversaciones / mes",
      "Handoff a humano con contexto",
      "Panel y métricas en vivo",
      "Soporte por chat",
    ],
    cta: "Empezar con Botika",
  },
  {
    name: "Studio",
    blurb: "Equipo dedicado que diseña, construye y despliega tu producto.",
    monthly: 1490,
    annual: 1192,
    features: [
      "Equipo dedicado part-time",
      "IA + automatización + web",
      "Sprints semanales con demos",
      "Integraciones a medida",
      "Despliegue continuo",
      "Soporte prioritario",
    ],
    featured: true,
    cta: "Hablar con fundadores",
  },
  {
    name: "Operación",
    blurb: "Todo gestionado, con SLA y equipo full-time. Para escalar en serio.",
    monthly: null,
    annual: null,
    features: [
      "Todo lo de Studio",
      "Equipo full-time + on-call",
      "SLA y roadmap trimestral",
      "Modelos privados / on-prem",
      "Seguridad y cumplimiento",
      "Account manager dedicado",
    ],
    cta: "Cotizar a medida",
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<0 | 1>(0);

  return (
    <section id="precios" className="relative py-32 sm:py-44 border-t border-white/[0.06] overflow-hidden">
      <div
        className="aurora -z-10 top-0 left-1/2 -translate-x-1/2 h-[440px] w-[820px]"
        style={{ background: "radial-gradient(closest-side, rgba(23,105,224,0.16), transparent)" }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* header */}
        <div className="text-center">
          <div className="inline-flex"><GlassChip dot tone="cobalt">Planes</GlassChip></div>
          <h2 className="mt-5 display-tight text-4xl sm:text-5xl lg:text-6xl text-ivory-50 text-pretty">
            Precios claros. <span className="aurora-text">Sin sorpresas.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ivory-200/75 leading-relaxed">
            Empezás con lo que necesitás hoy y escalás cuando el sistema lo pide. Los
            proyectos a medida se cotizan según alcance.
          </p>
          <div className="mt-8 flex justify-center">
            <BillingSwitch value={billing} onChange={setBilling} />
          </div>
        </div>

        {/* cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ${
                p.featured ? "liquid-glass md:-translate-y-3" : "glass"
              }`}
            >
              {p.featured && <BorderBeam duration={7} />}
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <GlassChip dot tone="cobalt">Más elegido</GlassChip>
                </span>
              )}

              <div className="relative z-10 flex grow flex-col">
                <div className="display-tight text-2xl text-ivory-50">{p.name}</div>
                <p className="mt-2 text-sm text-ivory-200/70 leading-relaxed min-h-[40px]">{p.blurb}</p>

                {/* price */}
                <div className="mt-6 flex items-end gap-1.5">
                  {p.monthly === null ? (
                    <span className="display-tight text-4xl text-ivory-50">A medida</span>
                  ) : (
                    <>
                      <span className="display-tight text-4xl sm:text-5xl text-ivory-50">
                        $<MoneyFlow value={billing === 0 ? p.monthly : (p.annual as number)} />
                      </span>
                      <span className="mb-1.5 text-sm text-ivory-300/70">USD / mes</span>
                    </>
                  )}
                </div>
                <div className="mt-1 h-4 font-mono text-[10px] uppercase tracking-ultrawide text-ivory-300/50">
                  {p.monthly !== null && billing === 1 ? "Facturado anual" : p.monthly !== null ? "Facturación mensual" : "Según alcance"}
                </div>

                {/* features */}
                <ul className="mt-6 grid gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ivory-100/90">
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${p.featured ? "bg-cobalt-500/25 text-cobalt-100" : "bg-white/[0.06] text-cobalt-300"}`}>
                        <Check className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* cta */}
                <div className="mt-8 pt-2">
                  {p.featured ? (
                    <NeoButton href="#contacto" size="md" className="w-full justify-center">
                      {p.cta}
                    </NeoButton>
                  ) : (
                    <GlassButton href="#contacto" variant="outline" size="md" icon={false}>
                      {p.cta}
                    </GlassButton>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-ultrawide text-ivory-300/50">
          Precios referenciales en USD · Impuestos no incluidos · Cancelás cuando quieras
        </p>
      </div>
    </section>
  );
}
