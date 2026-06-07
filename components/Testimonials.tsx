"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type T = { text: string; name: string; role: string };

const testimonials: T[] = [
  { text: "Botika contesta el 90% de los mensajes de Instagram y agenda sola. Recuperamos horas todos los días.", name: "Dirección comercial", role: "Retail" },
  { text: "Pasamos de planillas a un CRM clínico que el equipo realmente usa. Los no-shows bajaron muchísimo.", name: "Gerencia", role: "Clínica privada" },
  { text: "Con PAUTIK por fin vemos todo el embudo en un solo lugar. El CPA bajó y dormimos tranquilos.", name: "Marketing", role: "E-commerce D2C" },
  { text: "Entregaron en semanas lo que otros cotizaban en meses. Y el código es nuestro.", name: "Fundador", role: "Startup" },
  { text: "El agente entiende el contexto y escala al humano cuando toca. Los clientes ni notan la diferencia.", name: "Atención al cliente", role: "Servicios" },
  { text: "Automatizamos la cotización y el seguimiento. El equipo se enfoca en cerrar, no en copiar y pegar.", name: "Operaciones", role: "Distribución" },
  { text: "Integraron WhatsApp, calendario y nuestro ERP sin fricción. Funcionó desde el día uno.", name: "TI", role: "Manufactura" },
  { text: "Profesionales de verdad. Métricas claras, demos cada semana, cero humo.", name: "Dirección", role: "Servicios B2B" },
  { text: "La web nueva carga volando y se ve premium. Subió la conversión apenas lanzamos.", name: "Marketing digital", role: "Inmobiliaria" },
];

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 9);

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Card({ t }: { t: T }) {
  return (
    <figure className="glass rounded-3xl p-6 sm:p-7 w-full select-none">
      <blockquote className="text-ivory-100/90 leading-relaxed text-pretty">"{t.text}"</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="glass-cobalt grid h-10 w-10 place-items-center rounded-full font-mono text-[11px] text-cobalt-100">
          {initials(t.name)}
        </span>
        <div>
          <div className="text-sm text-ivory-50">{t.name}</div>
          <div className="eyebrow">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

function Column({ items, duration, className = "" }: { items: T[]; duration: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div className={className}>
      <motion.div
        animate={reduce ? undefined : { y: ["0%", "-50%"] }}
        transition={reduce ? undefined : { duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-col gap-5"
      >
        {[...items, ...items].map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-32 sm:py-44 border-t border-white/[0.06] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow border-l border-cobalt-400/60 pl-3">Testimonios</div>
          </div>
          <h2 className="col-span-12 md:col-span-9 display-tight text-4xl sm:text-5xl lg:text-6xl text-ivory-50 text-pretty">
            Lo que dicen quienes
            <br />
            ya <span className="aurora-text">trabajan</span> con nosotros.
          </h2>
        </div>

        <div className="relative mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 max-h-[640px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_12%,#000_88%,transparent)]">
          <Column items={col1} duration={26} />
          <Column items={col2} duration={32} className="hidden md:block" />
          <Column items={col3} duration={29} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
