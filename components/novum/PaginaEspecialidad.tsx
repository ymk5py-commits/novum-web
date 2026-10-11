import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Specialty } from "@/lib/specialties";
import PedirDemo from "./PedirDemo";

export default function PaginaEspecialidad({
  s, otras, marca, nucleo,
}: {
  s: Specialty;
  otras: Specialty[];
  marca: { nombre: string; base: string; enDesarrollo: boolean };
  nucleo: readonly { t: string; d: string }[];
}) {
  return (
    <>
      <section className="specialty-hero">
        <div className="section-container specialty-hero__inner">
          <nav aria-label="Ruta" className="product-hero__crumbs"><Link href="/">NOVUM</Link><span aria-hidden>/</span><Link href={`/${marca.base}`}>{marca.nombre}</Link><span aria-hidden>/</span><span>{s.name}</span></nav>
          <span className="product-hero__status"><i /> {marca.enDesarrollo ? "En desarrollo" : "Para tu especialidad"}</span>
          <h1>{s.seoLabel}</h1>
          <p>{s.tagline} {s.intro}</p>
          <a href="#demo" className="button button--bright mt-xl">Hablemos de tu consultorio <ArrowUpRight size={18} aria-hidden /></a>
        </div>
      </section>
      <div className="specialty-content section-container">
        <aside aria-label="En esta página">
          <strong>En esta página</strong>
          <a href="#ficha">La ficha <ArrowRight size={13} className="inline" aria-hidden /></a>
          <a href="#resuelve">Lo que resuelve</a>
          <a href="#nucleo">La plataforma</a>
          <a href="#preguntas-especialidad">Preguntas</a>
        </aside>
        <article>
          {marca.enDesarrollo && <p className="!mt-0 rounded-lg border border-cyan-200 bg-cyan-50 p-lg"><strong>{marca.nombre} está en desarrollo.</strong> Esta página muestra lo que estamos construyendo para {s.pro}. Si querés conocer el avance, <a href="#demo">pedí una demo</a>.</p>}
          <h2 id="ficha">{marca.enDesarrollo ? "La ficha que estamos armando" : "Una ficha para tu práctica"}</h2>
          <p>Información clínica y tareas del día organizadas alrededor de tu especialidad.</p>
          <ul>{s.ficha.map((item) => <li key={item}>{item}</li>)}</ul>
          <h2 id="resuelve">Lo que resuelve</h2>
          {s.pains.map((pain) => <p key={pain.t}><strong className="text-ink">{pain.t}.</strong> {pain.d}</p>)}
          <h2 id="nucleo">{marca.enDesarrollo ? "Lo que va a compartir con las demás especialidades" : `Lo que ${marca.nombre} trae para todas`}</h2>
          <dl>{nucleo.map((item) => <div key={item.t}><dt>{item.t}</dt><dd>{item.d}</dd></div>)}</dl>
          <h2 id="preguntas-especialidad">Preguntas frecuentes</h2>
          {s.faqs.map((faq) => <div key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></div>)}
          <p className="!mt-2xl">También para: {otras.map((other, index) => <span key={other.slug}><Link href={`/${marca.base}/${other.slug}`}>{other.name.toLowerCase()}</Link>{index < otras.length - 2 ? ", " : index === otras.length - 2 ? " y " : "."}</span>)}</p>
        </article>
      </div>
      <PedirDemo interes={marca.nombre} />
    </>
  );
}
