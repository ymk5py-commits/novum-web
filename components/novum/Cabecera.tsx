"use client";
/* Cabecera N6 (periódico): fila fina, wordmark centrado, links, doble filete.
 * Al bajar más allá de la cabecera aparece una barra fina fija con el wordmark chico y
 * «Pedir una demo» (entra con resorte, sale acelerando). En el celular los links van en «Menú». */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, m, useMotionValueEvent, useScroll } from "motion/react";
import Wordmark from "./Wordmark";
import { DUR, EASE_IN, RESORTE } from "@/lib/movimiento";

const LINKS = [
  { href: "/#cartera", label: "Cartera" },
  { href: "/#estudio", label: "Estudio" },
  { href: "/novudent", label: "Novudent" },
  { href: "/novumed", label: "NOVUMed" },
  { href: "/#preguntas", label: "Preguntas" },
] as const;

function activo(pathname: string, href: string) {
  return !href.startsWith("/#") && (pathname === href || pathname.startsWith(`${href}/`));
}

export default function Cabecera() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);
  const [barra, setBarra] = useState(false);
  const alto = useRef(220);
  const [menu, setMenu] = useState(false);
  const idMenu = useId();
  const { scrollY } = useScroll();

  // Alto de la cabecera medido fuera del scroll (leerlo en cada evento fuerza un recálculo de layout).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => (alto.current = e.target.getBoundingClientRect().height));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useMotionValueEvent(scrollY, "change", (y) => setBarra(y > alto.current + 40));

  useEffect(() => setMenu(false), [pathname]);
  useEffect(() => {
    if (!menu) return;
    const cerrar = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", cerrar);
    return () => window.removeEventListener("keydown", cerrar);
  }, [menu]);

  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-md focus:top-md focus:z-[400] focus:bg-paper focus:px-md focus:py-xs">
        Saltar al contenido
      </a>
      <header ref={ref} className="envoltura pt-md">
        <div className="flex items-baseline justify-between gap-md text-sm">
          <span className="mono text-muted">Asunción, Paraguay</span>
          <a href="#demo" className="vinculo text-sm">
            Pedir una demo <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-lg flex justify-center">
          <Link href="/" aria-label="NOVUM holding, inicio" className="text-ink">
            <Wordmark animado />
          </Link>
        </div>

        <nav aria-label="Principal" className="mt-lg">
          <ul className="hidden items-baseline justify-center gap-xl text-sm sm:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={activo(pathname, l.href) ? "page" : undefined}
                  className="whitespace-nowrap underline-offset-[6px] transition-colors hover:underline hover:decoration-accent hover:decoration-2 aria-[current=page]:underline aria-[current=page]:decoration-accent aria-[current=page]:decoration-2"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center sm:hidden">
            <button
              type="button"
              className="mono min-h-[44px] px-md text-ink"
              aria-expanded={menu}
              aria-controls={idMenu}
              onClick={() => setMenu((v) => !v)}
            >
              {menu ? "Cerrar menú" : "Menú"}
            </button>
          </div>
          <AnimatePresence initial={false}>
            {menu && (
              <m.ul
                id={idMenu}
                className="overflow-hidden sm:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: DUR.short, staggerChildren: 0.04 } }}
                exit={{ opacity: 0, transition: { duration: DUR.short * 0.75, ease: EASE_IN } }}
              >
                {LINKS.map((l) => (
                  <m.li
                    key={l.href}
                    className="border-t border-rule"
                    variants={{ hidden: { y: -6, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                    initial="hidden"
                    animate="show"
                  >
                    <Link href={l.href} className="block min-h-[44px] py-sm text-center font-display text-xl" onClick={() => setMenu(false)}>
                      {l.label}
                    </Link>
                  </m.li>
                ))}
              </m.ul>
            )}
          </AnimatePresence>
        </nav>

        <div aria-hidden className="anim-trazar mt-md h-[4px] origin-center border-y border-ink" style={{ "--d": "0.15s", animationDuration: "1.1s" } as React.CSSProperties} />
      </header>

      <AnimatePresence>
        {barra && (
          <m.div
            className="fixed inset-x-0 top-0 z-[200] border-b border-rule bg-paper"
            initial={{ y: "-100%" }}
            animate={{ y: 0, transition: RESORTE }}
            exit={{ y: "-100%", transition: { duration: DUR.short * 0.75, ease: EASE_IN } }}
          >
            <div className="envoltura flex h-14 items-center justify-between gap-md">
              <Link href="/" aria-label="NOVUM holding, inicio" className="text-ink">
                <Wordmark tamano="barra" />
              </Link>
              <ul className="hidden items-center gap-lg text-sm lg:flex">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} aria-current={activo(pathname, l.href) ? "page" : undefined} className="whitespace-nowrap hover:underline hover:decoration-accent hover:decoration-2 hover:underline-offset-[6px]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <a href="#demo" className="boton !min-h-[36px] !py-xs !px-md">
                Pedir una demo
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
