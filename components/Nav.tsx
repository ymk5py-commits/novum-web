"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlassButton, GlassChip } from "./primitives/GlassButton";

const links = [
  { href: "#productos", label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#proyectos", label: "Proyectos" },
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
          <a href="#top" className="flex items-center gap-3 group">
            <Mark />
            <div className="flex items-baseline gap-2">
              <span className="display-tight text-xl text-ivory-50 tracking-ultrawide">NOVUM</span>
              <span className="hidden sm:inline-block text-[9px] uppercase tracking-ultrawide text-ivory-300 border-l border-white/10 pl-2">
                holding
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-0.5 text-sm">
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
            <GlassButton href="#contacto" size="sm">
              Agendar
            </GlassButton>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function Mark() {
  return (
    <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-cobalt-500/15 ring-1 ring-cobalt-400/40 overflow-hidden">
      <span className="absolute inset-0 conic-glow opacity-50" />
      <span className="absolute inset-0 rounded-full animate-pulseRing" />
      <span className="relative z-10 h-2 w-2 rounded-full bg-cobalt-300" />
    </span>
  );
}
