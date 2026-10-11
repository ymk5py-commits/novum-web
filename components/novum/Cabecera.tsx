"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Wordmark from "./Wordmark";

const LINKS = [
  { href: "/#cartera", label: "Productos" },
  { href: "/#estudio", label: "Estudio" },
  { href: "/novudent", label: "Novudent" },
  { href: "/novumed", label: "NOVUMed" },
] as const;

export default function Cabecera() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const idMenu = useId();

  useEffect(() => setMenu(false), [pathname]);
  useEffect(() => {
    if (!menu) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menu]);

  const demoHref = pathname === "/" ? "#demo" : `${pathname}#demo`;

  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" aria-label="NOVUM holding, inicio" className="site-header__logo" onClick={() => setMenu(false)}>
            <Wordmark />
          </Link>
          <nav aria-label="Navegación principal" className="site-header__nav">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>
                {link.label}
              </Link>
            ))}
          </nav>
          <a href={demoHref} className="site-header__cta">
            Hablemos <ArrowUpRight size={16} aria-hidden />
          </a>
          <button
            type="button"
            className="site-header__toggle"
            aria-label={menu ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menu}
            aria-controls={idMenu}
            onClick={() => setMenu((value) => !value)}
          >
            {menu ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
        </div>
        {menu && (
          <nav id={idMenu} aria-label="Navegación móvil" className="site-header__mobile">
            {LINKS.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenu(false)}>{link.label}<ArrowUpRight size={17} aria-hidden /></Link>)}
            <a href={demoHref} onClick={() => setMenu(false)}>Pedir una demo<ArrowUpRight size={17} aria-hidden /></a>
          </nav>
        )}
      </header>
    </>
  );
}
