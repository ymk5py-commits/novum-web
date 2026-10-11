import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Blocks, Bot, ChartNoAxesCombined,
  Check, CirclePlay, CodeXml, HeartPulse, Megaphone,
  MessageCircleMore, Workflow,
} from "lucide-react";
import Preguntas from "@/components/novum/Preguntas";
import PedirDemo from "@/components/novum/PedirDemo";
import { CARTERA, ESTUDIO, NOVUDENT_DEMO, PASOS, PREGUNTAS } from "@/lib/site";

const serviceIcons = [Bot, Workflow, Blocks, ChartNoAxesCombined, CodeXml, HeartPulse] as const;
const productIcons = [HeartPulse, MessageCircleMore, Megaphone] as const;

export default function Inicio() {
  return (
    <>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-section__grid section-container">
          <div className="hero-section__copy">
            <span className="eyebrow eyebrow--light"><span className="eyebrow__dot" /> Tecnología creada en Paraguay</span>
            <h1 id="hero-title">Software que <span>mueve</span> tu negocio.</h1>
            <p>Desarrollamos productos para clínicas y empresas. Conectamos herramientas, simplificamos procesos y acompañamos cada implementación.</p>
            <div className="hero-section__actions">
              <a href="#demo" className="button button--bright">Pedir una demo <ArrowUpRight size={18} aria-hidden /></a>
              <a href="#cartera" className="text-link text-link--light">Explorar productos <ArrowRight size={18} aria-hidden /></a>
            </div>
            <div className="hero-section__meta"><span>Productos propios</span><span>Software a medida</span><span>Operación continua</span></div>
          </div>
          <div className="hero-section__visual">
            <div className="hero-section__halo" aria-hidden />
            <div className="hero-window">
              <div className="hero-window__bar"><span className="hero-window__lights"><i /><i /><i /></span><span>Novudent / Demo pública</span><span className="hero-window__live"><i /> En producción</span></div>
              <Image src="/novudent/inicio.png" alt="Pantalla de inicio de Novudent, software de gestión para clínicas dentales" width={2160} height={1350} priority sizes="(max-width: 800px) 100vw, 56vw" />
            </div>
            <div className="hero-section__floating"><span className="hero-section__floating-icon"><Check size={20} aria-hidden /></span><div><strong>Una clínica, una sola vista</strong><span>Agenda · Pacientes · Caja</span></div></div>
          </div>
        </div>
        <div className="hero-section__rail section-container"><span>01 / 04</span><div /><span>Productos reales. Soluciones para crecer.</span><ArrowRight size={18} aria-hidden /></div>
      </section>

      <section id="cartera" className="products-section section-container" aria-labelledby="products-title">
        <div className="section-intro"><div><span className="eyebrow">01 / Nuestros productos</span><h2 id="products-title">Un ecosistema para <span>hacer más.</span></h2></div><p>Desde la atención al paciente hasta la operación comercial. Cada producto resuelve un trabajo concreto y puede crecer con vos.</p></div>
        <div className="product-grid">
          <Link href="/novudent" className="product-card product-card--novudent">
            <div className="product-card__top"><span className="product-card__icon"><Image src="/novudent/logo-icon.svg" alt="" width={36} height={36} /></span><span className="status status--live"><i /> En producción</span></div>
            <div className="product-card__body"><span className="product-card__category">Clínicas dentales</span><h3>Novudent</h3><p>Agenda, ficha clínica, odontograma, presupuestos y caja. Todo en un mismo lugar.</p><span className="product-card__link">Descubrir Novudent <ArrowUpRight size={18} aria-hidden /></span></div>
            <div className="product-card__screen"><Image src="/novudent/agenda.png" alt="Vista real de la agenda de Novudent" width={2160} height={1350} sizes="(max-width: 800px) 100vw, 55vw" /></div>
          </Link>
          <Link href="/novumed" className="product-card product-card--novumed">
            <div className="product-card__top"><span className="product-card__glyph"><HeartPulse size={28} strokeWidth={1.7} aria-hidden /></span><span className="status">En desarrollo</span></div>
            <div className="product-card__body"><span className="product-card__category">Consultorios de salud</span><h3>NOVUMed</h3><p>Una historia clínica y agenda pensadas para distintas especialidades.</p><span className="product-card__link">Conocer el proyecto <ArrowUpRight size={18} aria-hidden /></span></div>
            <HeartPulse className="product-card__watermark" size={220} strokeWidth={0.7} aria-hidden />
          </Link>
          {CARTERA.slice(2).map((product, index) => {
            const Icon = productIcons[index + 1];
            return (
              <a key={product.slug} href={`/?interes=${encodeURIComponent(product.nombre)}#demo`} className={`product-card product-card--${product.slug}`}>
                <div className="product-card__top"><span className="product-card__glyph"><Icon size={28} strokeWidth={1.7} aria-hidden /></span><span className="status">En desarrollo</span></div>
                <div className="product-card__body"><span className="product-card__category">{product.paraQuien}</span><h3>{product.nombre}</h3><p>{product.queHace}</p><span className="product-card__link">Quiero saber más <ArrowUpRight size={18} aria-hidden /></span></div>
                <span className="product-card__number" aria-hidden>0{index + 3}</span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="proof-section" aria-labelledby="proof-title">
        <div className="section-container proof-section__grid">
          <div className="proof-section__visual"><span className="proof-section__tag">Una mirada al producto real</span><div className="proof-section__image"><Image src="/novudent/odontograma.png" alt="Odontograma real de Novudent con piezas y superficies dentales" width={2160} height={1350} sizes="(max-width: 800px) 100vw, 52vw" /></div></div>
          <div className="proof-section__copy"><span className="eyebrow">Producto en acción</span><h2 id="proof-title">Novudent ya está trabajando.</h2><p>Del primer turno al último cobro, la información de la clínica se mantiene conectada. Podés entrar a una demo pública y recorrer el sistema con datos de ejemplo.</p><ul><li><Check size={18} aria-hidden /> Agenda y confirmaciones</li><li><Check size={18} aria-hidden /> Odontograma por superficies</li><li><Check size={18} aria-hidden /> Planes, caja y reportes</li></ul><a href={NOVUDENT_DEMO} className="button button--navy">Probar demo pública <CirclePlay size={19} aria-hidden /></a></div>
        </div>
      </section>

      <section id="estudio" className="studio-section" aria-labelledby="studio-title">
        <div className="section-container"><div className="studio-section__intro"><div><span className="eyebrow eyebrow--light">02 / El estudio</span><h2 id="studio-title">Cuando el software se adapta a tu operación.</h2></div><p>También diseñamos sistemas a medida. Entendemos el trabajo de tu equipo, conectamos lo que ya usás y seguimos cerca después del lanzamiento.</p></div>
          <div className="services-grid">{ESTUDIO.map((service, index) => { const Icon = serviceIcons[index]; return <article key={service.t} className="service-card"><div className="service-card__top"><Icon size={25} strokeWidth={1.6} aria-hidden /><span>0{index + 1}</span></div><h3>{service.t}</h3><p>{service.d}</p></article>; })}</div>
          <div className="studio-section__bottom"><span>Una conversación puede ordenar mucho.</span><a href="#demo" className="text-link text-link--light">Contanos qué necesitás <ArrowUpRight size={18} aria-hidden /></a></div>
        </div>
      </section>

      <section id="proceso" className="process-section section-container" aria-labelledby="process-title">
        <div className="section-intro"><div><span className="eyebrow">03 / Cómo trabajamos</span><h2 id="process-title">De la idea a algo que funciona.</h2></div><p>Un proceso claro, con entregas que podés ver y decisiones que tomamos juntos.</p></div>
        <ol className="process-grid">{PASOS.map((step, index) => <li key={step.t}><span className="process-grid__number">0{index + 1}</span><h3>{step.t}</h3><p>{step.d}</p><span className="process-grid__arrow" aria-hidden><ArrowRight size={19} /></span></li>)}</ol>
      </section>

      <section id="preguntas" className="faq-section" aria-labelledby="faq-title"><div className="section-container faq-section__grid"><div><span className="eyebrow">04 / Preguntas frecuentes</span><h2 id="faq-title">Lo esencial, claro.</h2><p>Si tenés una necesidad distinta, contanos. La primera conversación sirve para encontrar el punto de partida.</p></div><Preguntas preguntas={PREGUNTAS} /></div></section>
      <PedirDemo />
    </>
  );
}
