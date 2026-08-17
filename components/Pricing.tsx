"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionBar, SectionTitle, PillCTA } from "./several/Section";

/* Toggle Mensual / Anual.
 *
 * Va SOBRE PAPEL, así que dejó de ser un `glass-chip`: el vidrio es
 * blanco-sobre-oscuro y sobre el papel desaparecía. Ahora es una píldora
 * blanca con borde fino y el estado activo en navy sólido — el mismo par de
 * colores que usa el resto de la sección clara. */
function BillingSwitch({ value, onChange }: { value: 0 | 1; onChange: (v: 0 | 1) => void }) {
  return (
    <div
      role="group"
      aria-label="Ciclo de facturación"
      className="relative inline-flex rounded-full border border-paper-line bg-paper-card p-1"
    >
      {(["Mensual", "Anual"] as const).map((label, i) => (
        <button
          key={label}
          type="button"
          onClick={() => onChange(i as 0 | 1)}
          aria-pressed={value === i}
          /* min-h 44px: el mínimo táctil. Con text-sm + py-3 da justo 44. */
          className={`relative z-10 inline-flex min-h-[44px] items-center rounded-full px-5 text-sm font-medium transition-colors ${
            value === i ? "text-white" : "text-paper-muted hover:text-paper-ink"
          }`}
        >
          {value === i && (
            <motion.span
              layoutId="billing-pill"
              transition={{ type: "spring", stiffness: 500, damping: 34 }}
              className="absolute inset-0 -z-10 rounded-full bg-navy-950"
            />
          )}
          <span className="relative inline-flex items-center gap-1.5">
            {label}
            {i === 1 && (
              /* El badge cambia de par cromático según sobre qué esté parado:
                 menta clara sobre el navy activo, menta oscura (cobalt-700,
                 el único que llega a 4.5:1 sobre claro) sobre el blanco. */
              <span
                className={`rounded-full px-1.5 py-0.5 font-mono text-[9px] ${
                  value === i ? "bg-cobalt-400/20 text-cobalt-100" : "bg-cobalt-700/10 text-cobalt-700"
                }`}
              >
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

/* El precio que corresponde al ciclo elegido. Devuelve null cuando el plan no
   tiene precio de lista — NUNCA cae al mensual para tapar un hueco, porque
   mostrar un número mensual bajo la etiqueta "anual" sería un precio falso. */
function precioVisible(p: Plan, billing: 0 | 1): number | null {
  return billing === 0 ? p.monthly : p.annual;
}

/* La letra chica del ciclo, tal cual estaba antes. */
function etiquetaCiclo(p: Plan, billing: 0 | 1): string {
  if (p.monthly === null) return "Según alcance";
  return billing === 1 ? "Facturado anual" : "Facturación mensual";
}

/* Transición de entrada compartida.
 *
 * Sin `opacity: 0`: el sitio ya se comió una portada en blanco por servir texto
 * en opacidad 0 esperando que React lo levantara. Si la hidratación no corre,
 * un translate de 16px deja el texto legible igual; una opacidad 0, no. */
const entrada = {
  initial: { y: 16 },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Pricing() {
  const [billing, setBilling] = useState<0 | 1>(0);

  /* El destacado es el marcado `featured`; si algún día nadie lo está, cae al
     del medio (que es donde la referencia pone el plan protagonista). */
  const destacado = plans.find((p) => p.featured) ?? plans[Math.floor(plans.length / 2)];
  const secundarios = plans.filter((p) => p !== destacado);

  const precioDestacado = precioVisible(destacado, billing);

  return (
    /* La sección deja el fondo oscuro: en la referencia el bloque de precio es
       una página de contenido sobre papel, con la tarjeta navy como único
       elemento oscuro para que el plan protagonista se lleve toda la mirada. */
    <section id="precios" className="relative bg-paper-soft py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionBar label="Precios" tone="light" />

        {/* Fila superior: titular + apoyo a la izquierda, plan destacado a la derecha */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:items-start lg:gap-16">
          <div>
            <SectionTitle tone="light">
              Precios claros. <span className="text-cobalt-700">Sin sorpresas.</span>
            </SectionTitle>
            <p className="mt-6 max-w-md leading-relaxed text-paper-muted">
              Empezás con lo que necesitás hoy y escalás cuando el sistema lo pide. Los
              proyectos a medida se cotizan según alcance.
            </p>
            <div className="mt-8">
              <BillingSwitch value={billing} onChange={setBilling} />
            </div>
          </div>

          {/* Tarjeta navy: el único bloque oscuro de la sección */}
          <motion.div {...entrada} className="rounded-[28px] bg-navy-950 p-8 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-2xl font-light text-white">{destacado.name}</h3>
              {/* Relleno menta sólido ⇒ texto navy. Blanco encima del menta no
                  llega al contraste mínimo. */}
              <span className="rounded-full bg-cobalt-400 px-3 py-1 font-display text-[11px] font-medium uppercase tracking-[0.18em] text-navy-950">
                Más elegido
              </span>
            </div>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory-200/75">
              {destacado.blurb}
            </p>

            <div className="mt-8 flex flex-wrap items-end gap-x-3 gap-y-1">
              <span className="font-display text-[4rem] font-extralight leading-none tracking-tight text-white tabular-nums sm:text-[4.5rem]">
                {precioDestacado === null ? (
                  "A medida"
                ) : (
                  <>
                    {/* El acento menta brillante solo acá adentro: es el único
                        fondo oscuro de la sección. */}
                    <span className="text-cobalt-400">$</span>
                    <MoneyFlow value={precioDestacado} />
                  </>
                )}
              </span>
              {precioDestacado !== null && (
                <span className="mb-2 text-sm text-ivory-300">USD / mes</span>
              )}
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-ultrawide text-ivory-300">
              {etiquetaCiclo(destacado, billing)}
            </div>

            <ul className="mt-8 grid gap-3 border-t border-white/10 pt-8">
              {destacado.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-ivory-100">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cobalt-400" strokeWidth={1.75} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <PillCTA href="#contacto" tone="dark">
                {destacado.cta}
              </PillCTA>
            </div>
          </motion.div>
        </div>

        {/* Planes secundarios: barras blancas horizontales sobre el papel */}
        <div className="mt-6 grid gap-3 lg:mt-10">
          {secundarios.map((p) => {
            const precio = precioVisible(p, billing);
            return (
              <motion.div
                {...entrada}
                key={p.name}
                className="rounded-2xl border border-paper-line bg-paper-card p-6 sm:p-7"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="lg:max-w-sm">
                    <h3 className="font-display text-2xl font-light text-paper-ink">{p.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-paper-muted">{p.blurb}</p>
                  </div>

                  {/* Apilado hasta sm: el precio con su unidad más el CTA no
                      entran en 375px de ancho sin partirse feo. */}
                  <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 lg:justify-end">
                    <div className="lg:text-right">
                      {/* Sobre claro el acento de texto es cobalt-700; el menta
                          brillante acá no pasaría AA. */}
                      <div className="flex items-end gap-2 lg:justify-end">
                        <span
                          className={`font-display font-extralight leading-none tracking-tight text-cobalt-700 tabular-nums ${
                            precio === null ? "text-3xl" : "text-4xl"
                          }`}
                        >
                          {precio === null ? "A medida" : <>$<MoneyFlow value={precio} /></>}
                        </span>
                        {precio !== null && (
                          <span className="mb-1 text-sm text-paper-muted">USD / mes</span>
                        )}
                      </div>
                      <div className="mt-2 font-mono text-[10px] uppercase tracking-ultrawide text-paper-muted">
                        {etiquetaCiclo(p, billing)}
                      </div>
                    </div>

                    <PillCTA href="#contacto" tone="light">
                      {p.cta}
                    </PillCTA>
                  </div>
                </div>

                {/* Las features NO se recortan al pasar a barra: se acuestan en
                    una línea envolvente para no perder nada de lo que el plan
                    promete. */}
                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-paper-line pt-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[13px] text-paper-muted">
                      <Check className="h-3.5 w-3.5 shrink-0 text-cobalt-700" strokeWidth={1.75} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-ultrawide text-paper-muted">
          Precios referenciales en USD · Impuestos no incluidos · Cancelás cuando quieras
        </p>
      </div>
    </section>
  );
}
