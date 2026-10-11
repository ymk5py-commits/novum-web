"use client";
import { useEffect, useState } from "react";
import { GlassChip } from "./primitives/GlassButton";
import { NeoButton } from "./magic/NeoButton";
import { NovumLogo, NovumMark } from "./brand/NovumLogo";
import { ProductsMenu } from "./ProductsMenu";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Sin animación de entrada, por la misma razón que el hero (ver Hero.tsx): se
     servía con `opacity: 0` y dependía de que React hidratara para aparecer. Si
     la hidratación fallaba, el visitante se quedaba sin menú — peor que un hero
     en blanco, porque encima no puede navegar a ningún lado. La navegación es lo
     último que puede depender de un efecto. */
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-7xl rounded-full transition-all duration-500 ${
          scrolled ? "glass-strong" : "glass"
        }`}
      >
        <div className="h-14 px-4 sm:px-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group" aria-label="NOVUM Holding — inicio">
            <NovumMark />
            <NovumLogo size="sm" subline={false} className="text-ivory-50" />
            <span className="hidden sm:inline-block text-[12px] uppercase tracking-ultrawide text-ivory-300 border-l border-white/10 pl-2 self-center">
              holding
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-0.5 text-sm">
            <ProductsMenu />
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-ivory-200/85 hover:text-ivory-50 transition-colors rounded-full hover:bg-white/[0.05]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex">
              <GlassChip dot tone="mint">
                Disponible
              </GlassChip>
            </span>
            <NeoButton href="#contacto" size="sm">
              Agendar
            </NeoButton>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

