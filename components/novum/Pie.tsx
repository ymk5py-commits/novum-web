import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Wordmark from "./Wordmark";
import { CONTACTO, NOVUDENT_URL, SITE } from "@/lib/site";

export default function Pie() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div>
            <Wordmark tamano="pie" />
            <p>Software que conecta personas, procesos e ideas.</p>
          </div>
          <a href="#demo" className="site-footer__button">Empecemos a conversar <ArrowUpRight size={20} aria-hidden /></a>
        </div>
        <div className="site-footer__columns">
          <div><span>Explorá</span><Link href="/#cartera">Productos</Link><Link href="/#estudio">El estudio</Link><Link href="/#proceso">Cómo trabajamos</Link></div>
          <div><span>Productos</span><Link href="/novudent">Novudent</Link><Link href="/novumed">NOVUMed</Link><a href={NOVUDENT_URL}>Entrar a Novudent <ArrowUpRight size={14} aria-hidden /></a></div>
          <div><span>Contacto</span><a href="#demo">Pedir una demo</a>{CONTACTO.email && <a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a>}{CONTACTO.whatsapp && <a href={`https://wa.me/${CONTACTO.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14} aria-hidden /></a>}<p>Asunción, Paraguay</p></div>
        </div>
        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} {SITE.name}</span><span>Hecho en Paraguay para trabajar mejor.</span></div>
      </div>
    </footer>
  );
}
