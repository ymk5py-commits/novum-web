/* Datos del sitio. Regla (design.md § Contenido honesto): nada de cifras, testimonios ni
 * contactos inventados. Los canales de contacto salen de variables de entorno PÚBLICAS
 * (Next las incrusta al compilar); un canal que falta o está mal cargado no se muestra. */

export type EstadoProducto = "En producción" | "En desarrollo";

export interface ProductoDeCartera {
  slug: string;
  nombre: string;
  queHace: string;
  paraQuien: string;
  estado: EstadoProducto;
  /** Página propia en este sitio; sin ella, la fila lleva al formulario de demo con el producto elegido. */
  pagina?: string;
}

const soloDigitos = (s: string | undefined) => (s ?? "").replace(/\D/g, "");
const whatsapp = soloDigitos(process.env.NEXT_PUBLIC_CONTACTO_WHATSAPP);
const email = (process.env.NEXT_PUBLIC_CONTACTO_EMAIL ?? "").trim();

export const CONTACTO = {
  /** Solo dígitos con código de país (595…), listo para wa.me. */
  whatsapp: whatsapp.length >= 8 && whatsapp.length <= 15 ? whatsapp : undefined,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined,
};

export const NOVUDENT_URL = "https://novudent.novumholding.lat";
export const NOVUDENT_DEMO = `${NOVUDENT_URL}/login?demo=1`;
export const NOVUDENT_PRECIOS = `${NOVUDENT_URL}/precios`;

export const SITE = {
  name: "NOVUM Holding",
  shortName: "NOVUM",
  url: "https://www.novumholding.lat",
  locale: "es_PY",
  lang: "es",
  city: "Asunción",
  country: "Paraguay",
  tagline: "Software propio para clínicas y empresas.",
  description:
    "NOVUM es un holding paraguayo de software: cuatro productos propios —Novudent, NOVUMed, Botika y PAUTIK— y un estudio que los instala, los conecta y los opera junto a cada cliente.",
  keywords: [
    "software para clínicas dentales",
    "software odontológico Paraguay",
    "software para consultorios médicos",
    "agente de WhatsApp con IA",
    "automatización de procesos",
    "integraciones a medida",
    "desarrollo de software Paraguay",
    "Asunción Paraguay",
  ],
} as const;

export const CARTERA: ProductoDeCartera[] = [
  {
    slug: "novudent",
    nombre: "Novudent",
    queHace: "Agenda, ficha, odontograma, presupuestos y caja de la clínica dental.",
    paraQuien: "Odontología",
    estado: "En producción",
    pagina: "/novudent",
  },
  {
    slug: "novumed",
    nombre: "NOVUMed",
    queHace: "Agenda e historia clínica para consultorios de otras especialidades.",
    paraQuien: "Salud",
    estado: "En desarrollo",
    pagina: "/novumed",
  },
  {
    slug: "botika",
    nombre: "Botika",
    queHace: "Un agente que atiende, responde y agenda por WhatsApp e Instagram.",
    paraQuien: "Empresas",
    estado: "En desarrollo",
  },
  {
    slug: "pautik",
    nombre: "PAUTIK",
    queHace: "Una sola consola para la pauta de Meta y Google, con reportes por cliente.",
    paraQuien: "Marketing",
    estado: "En desarrollo",
  },
];

/** Lo que el formulario deja elegir (el valor viaja al correo tal cual). */
export const INTERESES = [...CARTERA.map((p) => p.nombre), "Un proyecto a medida"] as const;

export const ESTUDIO = [
  { t: "IA aplicada", d: "Asistentes y agentes que trabajan sobre los datos de tu empresa, con un humano a mano cuando hace falta." },
  { t: "Automatización", d: "Lo que hoy se copia y se pega entre planillas, sistemas y mensajes, hecho solo." },
  { t: "Integraciones", d: "WhatsApp, Instagram, Google Calendar, CRM, ERP y pasarelas de pago hablando entre sí." },
  { t: "Pauta y medición", d: "Campañas en Meta y Google con el embudo medido de punta a punta." },
  { t: "Producto y web", d: "De la idea al sistema en producción: diseño, código y puesta en marcha." },
  { t: "Operación", d: "Nos quedamos después del lanzamiento: monitoreo, ajustes y soporte." },
] as const;

export const PASOS = [
  { t: "Entender", d: "Conversamos sobre tu negocio, tus datos y lo que hoy no funciona. Definimos cómo se mide el éxito." },
  { t: "Diseñar", d: "Proponemos la solución y su costo antes de escribir una línea. Vos aprobás." },
  { t: "Construir", d: "Entregas cortas con demostración en vivo: ves el avance real, no presentaciones." },
  { t: "Operar", d: "Lo dejamos funcionando y lo seguimos: ajustes, soporte y mejoras." },
] as const;

export const PREGUNTAS = [
  {
    q: "¿Qué es NOVUM?",
    a: "Un holding paraguayo de software. Tiene cuatro productos propios —Novudent, NOVUMed, Botika y PAUTIK— y un estudio que hace proyectos a medida para empresas.",
  },
  {
    q: "¿Qué puedo usar hoy?",
    a: "Novudent está en producción y tiene una demo pública que podés recorrer sin registrarte. NOVUMed, Botika y PAUTIK están en desarrollo: si te interesa alguno, pedí una demo y te mostramos el avance.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Los planes de Novudent están publicados en su sitio. Los proyectos del estudio se cotizan según el alcance, después de la primera conversación.",
  },
  {
    q: "¿Hacen proyectos a medida?",
    a: "Sí. El estudio diseña, construye y opera software para empresas: agentes de IA, automatización, integraciones, pauta y desarrollo web.",
  },
  {
    q: "¿Dónde están?",
    a: "En Asunción, Paraguay. Trabajamos en remoto con clientes de cualquier lugar.",
  },
] as const;
