"use client";

import { Play } from "lucide-react";
import { GlassButton, GlassChip } from "./primitives/GlassButton";
import { NovumLogo } from "./brand/NovumLogo";
import PremiumHeroBg from "./PremiumHeroBg";
import { Counter } from "@/components/motion/Counter";
import { NeoButton } from "@/components/magic/NeoButton";

/**
 * ⚠️ EL HERO NO LLEVA ANIMACIÓN DE ENTRADA, Y NO HAY QUE REPONERLA.
 *
 * Antes el logo, el titular y el copy eran `motion.div`/`motion.h1` con
 * `initial={{ opacity: 0 }}`. Eso significa que el HTML sale del servidor con
 * `opacity: 0` y depende de que React hidrate y framer levante la opacidad.
 * Cuando eso no pasa —y pasaba— la portada del sitio queda EN BLANCO: fondo
 * navy y nada más.
 *
 * El disparador que encontramos fue un mismatch de hidratación en TiltCard
 * (ver el comentario ahí), pero la causa de fondo es más simple: una animación
 * de entrada no puede ser lo que decide si el contenido se ve. Cualquier cosa
 * que rompa la hidratación —un componente nuevo, una extensión del navegador,
 * un chunk que no carga— vuelve a dejar la home vacía.
 *
 * Así que el contenido crítico se sirve visible y punto. El movimiento ambiental
 * (PremiumHeroBg, los rayos) sigue: eso es decoración, y si falla no se lleva
 * puesto el mensaje.
 */
export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* ===== Background premium animado (azul, fluido) ===== */}
      <div className="absolute inset-0 -z-[30]"><PremiumHeroBg /></div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Barra superior: contexto a los costados y una regla fina abajo. Es la
            cabecera de la referencia — ubica al visitante en una línea y deja
            el resto de la pantalla para lo único que importa: el titular. */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <GlassChip dot tone="cobalt" shiny>Holding · Studio</GlassChip>
          <span className="eyebrow">Asunción · LATAM · Remoto global</span>
        </div>

        {/* EL TITULAR ES LO PRIMERO.
            Antes acá había un wordmark "NOVUM" a pantalla completa. Se bajó a la
            firma del pie de esta sección por una razón simple: el logo ya está
            en el nav, y un visitante que entra necesita saber QUÉ HACEMOS, no
            cómo nos llamamos. Dos titulares compitiendo hacían que el bueno
            —este— quedara segundo. */}
        <h1 className="mt-16 max-w-[19ch] font-display text-[3rem] font-extralight leading-[0.98] tracking-[-0.02em] text-ivory-50 sm:mt-24 sm:text-[5rem] lg:text-[6rem]">
          Sistemas que <span className="text-cobalt-400">piensan</span>,{" "}
          <span className="text-cobalt-400">venden</span> y operan por ti.
        </h1>

        <div className="mt-12 flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
          <p className="max-w-xl text-lg font-light leading-[1.7] text-ivory-200/75 text-pretty">
            NOVUM es un <em className="not-italic font-medium text-ivory-50">holding</em> de cuatro
            productos propietarios y un studio que los implementa: <em className="not-italic font-medium text-cobalt-300">Botika</em> (agentes),{" "}
            <em className="not-italic font-medium text-cobalt-300">PAUTIK</em> (pauta), <em className="not-italic font-medium text-cobalt-300">NOVUMed</em> (CRM clínico)
            y <em className="not-italic font-medium text-cobalt-300">NOVUdent</em> (software dental).
          </p>

          {/* UNA sola acción principal. Antes había dos botones de peso casi
              idéntico y ninguno ganaba; ahora "Ver productos" es la píldora
              sólida y "Hablar con fundadores" queda como enlace secundario. */}
          <div className="flex flex-wrap items-center gap-6">
            <NeoButton href="#productos" size="lg">
              Ver productos
            </NeoButton>
            <a
              href="#contacto"
              /* min-h-44: es secundario, pero sigue siendo una acción y en un
                 teléfono se toca con el dedo igual que el botón principal. */
              className="inline-flex min-h-[44px] items-center text-[15px] font-light text-ivory-200/70 underline-offset-8 transition-colors hover:text-ivory-50 hover:underline"
            >
              Hablar con fundadores
            </a>
          </div>
        </div>

        {/* Las cifras, ANCLADAS en una franja a lo ancho. Antes eran una tarjeta
            de vidrio flotando en la esquina, que quedaba cortada y no se sabía
            a qué pertenecía. Acá cierran el bloque y se leen como un dato del
            holding, que es lo que son. */}
        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:mt-20">
          <Stat value={34} prefix="+" label="En producción" />
          <Stat value={11} label="Verticales" />
          <Stat value={99.9} decimals={1} suffix="%" label="Uptime" mono />
        </div>

        {/* El wordmark, ahora como FIRMA y no como titular. */}
        <div className="mt-14 flex items-center gap-5">
          <NovumLogo size="sm" align="left" className="text-ivory-50/35" />
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Showreel card */}
        <div
          className="mt-16 sm:mt-20 relative glass rounded-3xl overflow-hidden"
        >
          <div className="aspect-[16/7] relative">
            <video
              src="/assets/showreel.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-navy-700/30 via-transparent to-cobalt-500/10 mix-blend-overlay" />

            {/* Floating play badge */}
            <div className="absolute top-5 sm:top-7 left-5 sm:left-7">
              <GlassChip dot tone="mint">Showreel · 26"</GlassChip>
            </div>
            <div className="absolute top-5 sm:top-7 right-5 sm:right-7">
              <GlassChip>Live</GlassChip>
            </div>

            {/* Center play affordance */}
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <div className="glass-strong h-16 w-16 rounded-full grid place-items-center shadow-glow">
                <Play className="h-6 w-6 text-ivory-50 fill-ivory-50/80 translate-x-0.5" />
              </div>
            </div>

            {/* Bottom caption */}
            <div className="absolute left-5 sm:left-8 bottom-5 sm:bottom-8 right-5 sm:right-8 flex items-end justify-between">
              <div>
                <div className="eyebrow">Diseñado en Asunción</div>
                <div className="display-tight text-2xl sm:text-3xl text-ivory-50 mt-1">
                  Desplegado donde lo necesites.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  prefix,
  suffix,
  decimals = 0,
  mono = false,
}: {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  mono?: boolean;
}) {
  return (
    <div>
      <Counter
        value={value}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        className={`block text-ivory-50 leading-none ${
          mono ? "font-mono text-2xl sm:text-3xl" : "display-tight text-3xl sm:text-4xl"
        }`}
      />
      <div className="eyebrow mt-2">{label}</div>
    </div>
  );
}
