"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <div
        className={`mx-auto max-w-7xl rounded-full transition-all duration-500 ${
          scrolled ? "glass-strong" : "glass"
        }`}
      >
        <div className="h-14 px-4 sm:px-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group" aria-label="NOVUM Holding — inicio">
            <NovumMark />
            <NovumLogo size="sm" subline={false} className="text-ivory-50" />
            <span className="hidden sm:inline-block text-[9px] uppercase tracking-ultrawide text-ivory-300 border-l border-white/10 pl-2 self-center">
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
    </motion.header>
  );
}

