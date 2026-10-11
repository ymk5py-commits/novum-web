import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, HeartPulse } from "lucide-react";
import type { PaginaProducto as Datos } from "@/lib/productos";
import type { Specialty } from "@/lib/specialties";
import { NOVUDENT_DEMO, NOVUDENT_PRECIOS } from "@/lib/site";
import Diptico from "./Diptico";
import Preguntas from "./Preguntas";
import PedirDemo from "./PedirDemo";

export default function PaginaProducto({ datos, especialidades }: { datos: Datos; especialidades: Specialty[] }) {
  const enProduccion = datos.estado === "En producción";
  return (
    <>
      <section className="product-hero">
        <div className="section-container product-hero__inner">
          <div>
            <nav aria-label="Ruta" className="product-hero__crumbs"><Link href="/">NOVUM</Link><span aria-hidden>/</span><span>{datos.nombre}</span></nav>
            <span className="product-hero__status"><i /> {datos.estado}</span>
            <h1>{datos.titular}</h1>
            <p>{datos.bajada}</p>
            <div className="product-hero__actions">
              {enProduccion ? <a href={NOVUDENT_DEMO} className="button button--bright">Probar la demo <ArrowUpRight size={18} aria-hidden /></a> : <a href="#demo" className="button button--bright">Conocer el proyecto <ArrowUpRight size={18} aria-hidden /></a>}
              <a href="#bloques" className="text-link text-link--light">Explorar funciones <ArrowRight size={18} aria-hidden /></a>
            </div>
            {enProduccion && <a href={NOVUDENT_PRECIOS} className="text-link text-link--light mt-lg text-sm">Ver planes y precios <ArrowUpRight size={15} aria-hidden /></a>}
          </div>
          <div className="product-hero__visual">
            {enProduccion ? <Image src="/novudent/inicio.png" alt="Pantalla real de inicio de Novudent" width={2160} height={1350} sizes="(max-width: 800px) 100vw, 55vw" priority /> : <div className="product-hero__concept" aria-label="NOVUMed, producto en desarrollo"><HeartPulse size={64} strokeWidth={1.4} aria-hidden /><strong>NOVUMed</strong><span>Una plataforma para distintas especialidades</span></div>}
          </div>
        </div>
      </section>

      <section id="bloques" className="product-features section-container" aria-labelledby="bloques-titulo">
        <div className="product-features__intro"><span className="eyebrow">01 / El producto</span><h2 id="bloques-titulo">{datos.bloquesTitulo}</h2></div>
        <div className="feature-list">{datos.bloques.map((bloque, index) => <Diptico key={bloque.t} bloque={bloque} indice={index} />)}</div>
      </section>

      {datos.ademas && <section className="product-more" aria-labelledby="ademas-titulo"><div className="section-container product-more__grid"><div><span className="eyebrow">02 / Más posibilidades</span><h2 id="ademas-titulo">Y hay más.</h2></div><ul>{datos.ademas.map((item) => <li key={item}>{item}</li>)}</ul></div></section>}
      {especialidades.length > 0 && <section className="product-specialties section-container" aria-labelledby="especialidades-titulo"><div className="product-specialties__intro"><span className="eyebrow">Para cada práctica</span><h2 id="especialidades-titulo">Por especialidad.</h2></div><ul>{especialidades.map((item) => <li key={item.slug}><Link href={`/${datos.slug}/${item.slug}`}>{item.seoLabel}<ArrowUpRight size={18} aria-hidden /></Link></li>)}</ul></section>}
      <section className="product-faq" aria-labelledby="preguntas-producto"><div className="section-container product-faq__grid"><div><span className="eyebrow">Respuestas rápidas</span><h2 id="preguntas-producto">Preguntas frecuentes.</h2></div><div><Preguntas preguntas={datos.preguntas} /><p className="mt-lg text-sm text-muted">{datos.cruce.texto} <Link href={datos.cruce.href} className="vinculo">Ver {datos.cruce.nombre} <ArrowRight size={15} aria-hidden /></Link></p></div></div></section>
      <PedirDemo interes={datos.nombre} />
    </>
  );
}
