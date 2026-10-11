/* Contenido de las páginas de producto (Split Studio, ver design.md).
 * Novudent: solo lo que la app hace hoy (verificado contra novudent-app/lib/capacidades.ts y el código).
 * NOVUMed: está en desarrollo — se presenta como plan, sin capturas ni cifras. */
import type { EstadoProducto } from "./site";

export interface Bloque {
  t: string;
  d: string;
  /** Captura real (en /public). Sin captura, la prueba es la lista `detalle`. */
  imagen?: { src: string; alt: string; pie: string };
  detalle?: string[];
}

export interface PaginaProducto {
  slug: "novudent" | "novumed";
  nombre: string;
  estado: EstadoProducto;
  titular: string;
  bajada: string;
  bloquesTitulo: string;
  bloques: Bloque[];
  ademas?: string[];
  preguntas: { q: string; a: string }[];
  cruce: { nombre: string; href: string; texto: string };
}

export const NOVUDENT: PaginaProducto = {
  slug: "novudent",
  nombre: "Novudent",
  estado: "En producción",
  titular: "La clínica dental, en un solo sistema.",
  bajada:
    "Agenda, ficha clínica, odontograma, presupuestos, caja y equipo. Novudent está en producción y tiene una demo pública con datos de ejemplo que podés recorrer ahora.",
  bloquesTitulo: "Lo que hace hoy",
  bloques: [
    {
      t: "La agenda de toda la clínica",
      d: "Vista diaria, semanal y mensual por profesional y por sillón. Un clic en un espacio libre y la cita existe; el paciente la confirma por WhatsApp o desde un link.",
      imagen: { src: "/novudent/agenda.png", alt: "Agenda semanal de Novudent con citas de varios profesionales", pie: "Agenda semanal · demo pública" },
    },
    {
      t: "Odontograma por superficies",
      d: "Las 32 piezas con su forma real, en dentición permanente, primaria o mixta. Caries en mesial, corona en la 26: dos clics, y queda registrado quién lo marcó y cuándo.",
      imagen: { src: "/novudent/odontograma.png", alt: "Odontograma de Novudent con las piezas dentales dibujadas", pie: "Odontograma · ficha clínica" },
    },
    {
      t: "Del plan de tratamiento al cobro",
      d: "Prestaciones por pieza, convenios, descuentos y cuotas de financiamiento. El plan pasa de borrador a presentado y aceptado, y se imprime en PDF.",
      imagen: { src: "/novudent/planes.png", alt: "Plan de tratamiento de un paciente en Novudent", pie: "Planes de tratamiento · ficha del paciente" },
    },
    {
      t: "La caja, al día",
      d: "Arqueo por medio de pago, gastos, cheques y cuentas por cobrar, con el recordatorio de deuda a un clic.",
      imagen: { src: "/novudent/caja.png", alt: "Caja abierta en Novudent con ingresos, egresos y movimientos", pie: "Caja · movimientos del día" },
    },
    {
      t: "El día de cada uno",
      d: "Cada rol entra y ve lo suyo: citas por confirmar, documentos pendientes, la caja abierta. El administrador tiene su rutina de cada día, de cada lunes y de fin de mes.",
      imagen: { src: "/novudent/inicio.png", alt: "Pantalla de inicio de Novudent con la rutina del administrador", pie: "Inicio · rutina del administrador" },
    },
  ],
  ademas: [
    "Ortodoncia con controles mensuales",
    "Documentos clínicos y consentimientos con firma electrónica",
    "Radiografías con análisis asistido por IA",
    "Simulador de sonrisa",
    "Laboratorios, boxes y liquidaciones a profesionales",
    "Inventario con alertas de reposición",
    "Encuestas de satisfacción y CRM",
    "Reportes gráficos y descargas en Excel",
    "Permisos por rol que la clínica reparte",
    "Reserva online de citas con link y QR",
  ],
  preguntas: [
    {
      q: "¿Puedo probarlo sin registrarme?",
      a: "Sí. La demo pública entra con datos de ejemplo y podés recorrerla como administrador, dentista, asistente, recepción o caja.",
    },
    {
      q: "¿Cuánto cuesta?",
      a: "Hay tres planes —Solo, Clínica y Multi— en guaraníes, publicados en el sitio de Novudent.",
    },
    {
      q: "¿Migran los datos de mi clínica?",
      a: "Sí. La puesta en marcha incluye la configuración, la migración de tus datos y la capacitación del equipo.",
    },
    {
      q: "¿Hay que instalar algo?",
      a: "No. Funciona en el navegador de la computadora, la tablet o el celular.",
    },
    {
      q: "¿Cada persona ve todo?",
      a: "No. Hay roles —administrador, dentista, asistente, recepción, caja y comercial— y el administrador puede dar y sacar permisos a cada uno.",
    },
  ],
  cruce: {
    nombre: "NOVUMed",
    href: "/novumed",
    texto: "¿Tu consultorio es de otra especialidad? NOVUMed es el producto para consultorios médicos; está en desarrollo.",
  },
};

export const NOVUMED: PaginaProducto = {
  slug: "novumed",
  nombre: "NOVUMed",
  estado: "En desarrollo",
  titular: "Historia clínica y agenda para consultorios.",
  bajada:
    "NOVUMed es el producto de NOVUM para consultorios de otras especialidades. Está en desarrollo: abajo está lo que va a tener. Si querés probarlo antes que nadie, pedí una demo.",
  bloquesTitulo: "Lo que va a tener",
  bloques: [
    {
      t: "Una ficha para cada especialidad",
      d: "La historia clínica cambia según la práctica: no se evalúa igual en kinesiología que en pediatría. NOVUMed arranca con estas ocho.",
      detalle: [
        "Kinesiología · evaluación funcional y plan de sesiones",
        "Psicología · evoluciones por sesión",
        "Psiquiatría · recetas y seguimiento de medicación",
        "Nutrición · antropometría y planes alimentarios",
        "Oftalmología · agudeza visual y receta óptica",
        "Pediatría · curvas de crecimiento y vacunas",
        "Dermatología · mapa de lesiones",
        "Centros estéticos · ficha facial y consentimientos",
      ],
    },
    {
      t: "Agenda y recordatorios",
      d: "Agenda por profesional y por box, reserva online y confirmación por WhatsApp para bajar las inasistencias.",
      detalle: ["Agenda por profesional y por box", "Reserva online con link", "Recordatorio y confirmación por WhatsApp", "Videoconsulta desde un link"],
    },
    {
      t: "Cobros y reportes",
      d: "Medios de pago, caja y cuentas por cobrar, con reportes de lo atendido y lo cobrado.",
      detalle: ["Caja por medio de pago", "Cuentas por cobrar", "Reportes de atención y cobros"],
    },
  ],
  preguntas: [
    { q: "¿Ya puedo usarlo?", a: "Todavía no: está en desarrollo. Pedí una demo y te avisamos cuando haya una versión para probar." },
    {
      q: "¿Sirve para mi especialidad?",
      a: "Lo estamos diseñando para kinesiología, psicología, psiquiatría, nutrición, oftalmología, pediatría, dermatología y centros estéticos. Si la tuya no está, contanos qué necesitás.",
    },
    {
      q: "¿Es lo mismo que Novudent?",
      a: "No. Novudent es solo para odontología y ya está en producción. NOVUMed es para las demás especialidades.",
    },
  ],
  cruce: {
    nombre: "Novudent",
    href: "/novudent",
    texto: "¿Tenés una clínica dental? Novudent ya está en producción y tiene demo pública.",
  },
};
