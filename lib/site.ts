export const SITE = {
  name: "NOVUM Holding",
  shortName: "NOVUM",
  url: "https://novum-web-six.vercel.app",
  locale: "es_CO",
  lang: "es",
  email: "hola@novum.studio",
  phone: "+57 300 000 0000",
  whatsapp: "https://wa.me/573000000000",
  city: "Bogotá",
  country: "Colombia",
  founder: "NOVUM",
  tagline: "Sistemas que piensan, venden y operan por ti.",
  description:
    "NOVUM es un holding y studio de sistemas inteligentes. Diseñamos, construimos y operamos software con IA: agentes conversacionales, automatización, pauta programática y un CRM clínico de nueva generación. Producto propietario, medible y en producción.",
  keywords: [
    "agencia de IA",
    "agentes de inteligencia artificial",
    "automatización de procesos",
    "chatbot WhatsApp",
    "integración Meta Calendar CRM",
    "plataforma de pauta digital",
    "CRM para médicos",
    "software a la medida",
    "desarrollo de producto SaaS",
    "Bogotá Colombia",
  ],
  products: [
    {
      slug: "botika",
      name: "Botika",
      category: "Conversational AI",
      tagline: "El agente que cierra.",
      short: "Agentes agénticos que atienden, agendan, cobran y venden conectados a Meta, Calendar y tu CRM.",
      description:
        "Botika es una plataforma de agentes conversacionales agénticos que razonan, deciden y ejecutan dentro de tu stack. Atiende clientes en Instagram, WhatsApp y Messenger; agenda reuniones, califica leads, crea oportunidades en el CRM, cobra y entrega — sin intervención humana. Integración nativa con Meta, Google Calendar, CRMs y ERPs, memoria persistente, modelo agnóstico y observabilidad desde el día uno.",
    },
    {
      slug: "pautik",
      name: "PAUTIK",
      category: "Performance Media",
      tagline: "La consola que tu pauta merece.",
      short: "Plataforma de pauta programática que unifica Meta, Google, TikTok y X con optimización por IA.",
      description:
        "PAUTIK unifica Meta, Google, TikTok y X en un mismo plano de control. Optimización por reglas y asistente de medios con IA, atribución unificada, reportes white-label, biblioteca creativa con scoring de performance y operación multi-cuenta, multi-cliente y multi-moneda.",
    },
    {
      slug: "novumed",
      name: "NOVUMed",
      category: "Vertical SaaS · Salud",
      tagline: "El sistema operativo de tu consultorio.",
      short: "CRM clínico de nueva generación: historia clínica, agenda inteligente, facturación y telemedicina.",
      description:
        "NOVUMed es un CRM clínico de nueva generación diseñado junto a profesionales de la salud. Reemplaza agenda, historia clínica estructurada, facturación electrónica y comunicación con pacientes en un solo producto mobile-first, con recordatorios omnicanal, portal del paciente y telemedicina integrada.",
    },
  ],
  faqs: [
    {
      q: "¿Qué hace exactamente NOVUM?",
      a: "NOVUM es un holding y studio de sistemas inteligentes. Desarrollamos producto propietario —Botika, PAUTIK y NOVUMed— e implementamos software a la medida con IA, automatización, integraciones, pauta digital y desarrollo web y mobile para empresas que quieren resultados medibles, no presentaciones.",
    },
    {
      q: "¿Botika reemplaza a mi equipo de atención al cliente?",
      a: "Botika automatiza el 70–90% de las conversaciones repetitivas (consultas, agendamiento, cotizaciones, seguimiento) y escala a un humano con todo el contexto cuando hace falta. Tu equipo deja de responder lo mismo mil veces y se enfoca en cerrar y atender casos complejos.",
    },
    {
      q: "¿Con qué plataformas se integran?",
      a: "Integramos de forma nativa con Meta (Instagram, WhatsApp Cloud API, Messenger), Google Calendar, los principales CRMs y ERPs, pasarelas de pago como Stripe y MercadoPago, mensajería como Twilio y 360dialog, y herramientas de datos como GA4 y Looker. Si tiene API, lo conectamos.",
    },
    {
      q: "¿Cuánto tarda un proyecto?",
      a: "Un MVP de producto sale en 8 semanas y un agente conversacional puede estar en producción en 4–6 semanas. Trabajamos en sprints semanales con demos en vivo y despliegue continuo desde el día 5, así que ves avances reales cada semana.",
    },
    {
      q: "¿Trabajan con empresas fuera de Colombia?",
      a: "Sí. Operamos en remoto para LATAM, Estados Unidos y Europa. Tenemos sede en Bogotá pero el equipo está distribuido y respondemos en menos de 12 horas hábiles. Firmamos NDA cuando el proyecto lo requiere.",
    },
    {
      q: "¿El software es propio o de terceros?",
      a: "Construimos producto propietario y código que es tuyo. Usamos modelos de IA agnósticos (GPT, Claude, Gemini o modelos locales) y la infraestructura que mejor se ajuste a tu costo por unidad. No te amarramos a una caja negra.",
    },
  ],
} as const;

export type Product = (typeof SITE.products)[number];
export type Faq = (typeof SITE.faqs)[number];
