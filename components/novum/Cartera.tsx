"use client";
/* La cartera del holding como índice con filetes (Index-First, design.md).
 * Movimiento:
 *  - Las filas entran escalonadas: el filete se dibuja y el contenido aparece.
 *  - Al pasar el mouse: barrido de fondo desde la izquierda, la flecha se corre y el nombre
 *    gana el subrayado latón.
 *  - Con puntero fino (mouse), una tarjeta de vista previa sigue al cursor con resorte:
 *    la captura real si el producto la tiene, una ficha tipográfica si no. Con teclado o
 *    táctil no aparece (no tapa nada ni roba el foco). */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import Image from "next/image";
import type { ProductoDeCartera } from "@/lib/site";
import { DUR, EASE_OUT, RESORTE, VISTA } from "@/lib/movimiento";

const PREVIA: Record<string, string> = { novudent: "/novudent/inicio.png" };
const COLUMNAS = "md:grid-cols-[3rem_minmax(0,1.1fr)_minmax(0,1.7fr)_minmax(0,0.8fr)_8.5rem_1.5rem]";

function destino(p: ProductoDeCartera) {
  return p.pagina ?? `/?interes=${encodeURIComponent(p.nombre)}#demo`;
}

export default function Cartera({ productos }: { productos: ProductoDeCartera[] }) {
  const [encima, setEncima] = useState<ProductoDeCartera | null>(null);
  const [punteroFino, setPunteroFino] = useState(false);
  const reducido = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, RESORTE);
  const sy = useSpring(y, RESORTE);
  const lista = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const fijar = () => setPunteroFino(mq.matches);
    fijar();
    mq.addEventListener("change", fijar);
    return () => mq.removeEventListener("change", fijar);
  }, []);

  const mover = (e: React.PointerEvent) => {
    x.set(e.clientX + 28);
    y.set(e.clientY - 120);
  };

  return (
    <div className="relative">
      <div className={`mono hidden gap-md pb-xs text-muted md:grid ${COLUMNAS}`} aria-hidden>
        <span>Nº</span>
        <span>Producto</span>
        <span>Qué hace</span>
        <span>Para quién</span>
        <span>Estado</span>
        <span />
      </div>

      <m.ol
        ref={lista}
        className="border-b border-rule"
        initial="oculto"
        whileInView="visible"
        viewport={VISTA}
        variants={{ oculto: {}, visible: { transition: { staggerChildren: 0.09 } } }}
        onPointerLeave={() => setEncima(null)}
        onPointerMove={punteroFino ? mover : undefined}
      >
        {productos.map((p, i) => (
          <m.li key={p.slug} className="relative" variants={{ oculto: {}, visible: {} }}>
            <m.div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-rule"
              style={{ originX: 0 }}
              variants={{ oculto: { scaleX: 0 }, visible: { scaleX: 1 } }}
              transition={{ duration: 0.9, ease: EASE_OUT }}
            />
            <Link
              href={destino(p)}
              className={`group relative isolate grid grid-cols-[2.25rem_minmax(0,1fr)_1.25rem] items-baseline gap-x-md gap-y-2xs py-lg md:py-md ${COLUMNAS}`}
              onPointerEnter={() => setEncima(p)}
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 origin-left scale-x-0 bg-paper-2 transition-transform duration-[420ms] ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
              <m.span className="mono pl-2xs text-muted" variants={{ oculto: { opacity: 0 }, visible: { opacity: 1 } }}>
                {String(i + 1).padStart(2, "0")}
              </m.span>
              <m.span
                translate="no"
                className="font-display text-2xl leading-tight decoration-accent decoration-2 underline-offset-[6px] group-hover:underline"
                variants={{ oculto: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
              >
                {p.nombre}
              </m.span>
              <span aria-hidden className="justify-self-end pr-2xs transition-transform duration-[220ms] ease-out group-hover:translate-x-1 md:order-last">
                →
              </span>
              <m.span
                className="col-start-2 col-end-4 text-ink-2 md:col-auto"
                variants={{ oculto: { opacity: 0 }, visible: { opacity: 1 } }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                {p.queHace}
              </m.span>
              <m.span className="col-start-2 text-sm text-muted md:col-auto md:text-md" variants={{ oculto: { opacity: 0 }, visible: { opacity: 1 } }}>
                {p.paraQuien}
              </m.span>
              <m.span
                className={`mono col-start-2 flex items-center gap-xs md:col-auto ${p.estado === "En producción" ? "text-accent-ink" : "text-muted"}`}
                variants={{ oculto: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                <span aria-hidden className={`inline-block h-[7px] w-[7px] rounded-full ${p.estado === "En producción" ? "bg-accent" : "border border-muted"}`} />
                {p.estado}
              </m.span>
            </Link>
          </m.li>
        ))}
      </m.ol>

      {punteroFino && !reducido && (
        <m.div aria-hidden className="pointer-events-none fixed left-0 top-0 z-[300] hidden md:block" style={{ x: sx, y: sy }}>
          <AnimatePresence mode="popLayout">
            {encima && (
              <m.div
                key={encima.slug}
                className="w-[340px] overflow-hidden border border-rule bg-paper"
                initial={{ opacity: 0, scale: 0.94, rotate: -1.5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: DUR.long, ease: EASE_OUT } }}
                exit={{ opacity: 0, scale: 0.97, transition: { duration: DUR.short * 0.75 } }}
              >
                {PREVIA[encima.slug] ? (
                  <Image src={PREVIA[encima.slug]} alt="" width={680} height={425} className="block h-auto w-full" sizes="340px" loading="eager" />
                ) : (
                  <div className="flex aspect-[16/10] flex-col justify-between p-lg">
                    <span className="mono text-muted">{encima.paraQuien}</span>
                    <span className="font-display text-3xl leading-none">{encima.nombre}</span>
                    <span className="mono flex items-center gap-xs text-muted">
                      <span className="inline-block h-[7px] w-[7px] rounded-full border border-muted" />
                      {encima.estado} · pedí una demo
                    </span>
                  </div>
                )}
              </m.div>
            )}
          </AnimatePresence>
        </m.div>
      )}
    </div>
  );
}
