export type Plan = {
  name: string;
  blurb: string;
  price: string;
  features: string[];
  featured?: boolean;
};

export type ProductConfig = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  intro: string;
  heroBullets: string[];
  problems: { t: string; d: string }[];
  modules: { t: string; d: string }[];
  specialties?: { name: string; slug: string; fields: string[] }[];
  dental?: { t: string; d: string }[];
  ai: { t: string; d: string }[];
  integrations: string[];
  plans: Plan[];
  faqs: { q: string; a: string }[];
  cross: { name: string; slug: string; desc: string };
};

export const NOVUMED: ProductConfig = {
  slug: "novumed",
  name: "NOVUMed",
  eyebrow: "Vertical SaaS · Salud",
  tagline: "El sistema operativo de tu consultorio.",
  intro:
    "Una sola plataforma para agenda, ficha clínica, facturación y pacientes — con un agente de IA que atiende y agenda por WhatsApp para que dejes de perder pacientes. Diseñado junto a profesionales de la salud y hecho para Paraguay.",
  heroBullets: [
    "Ficha clínica personalizada por especialidad",
    "Agenda con recordatorios por WhatsApp (anti no-show)",
    "Facturación electrónica y cobranzas",
    "Telemedicina y portal del paciente",
  ],
  problems: [
    { t: "Agenda en papel o WhatsApp", d: "Citas que se pierden, dobles reservas y horas muertas que nadie recupera." },
    { t: "No-shows constantes", d: "Pacientes que no avisan y agenda que queda vacía sin recordatorios automáticos." },
    { t: "Datos dispersos", d: "Historias en cuadernos, Excel y la cabeza del profesional. Nada se puede medir." },
    { t: "Cobros que se escapan", d: "Saldos pendientes sin seguimiento y facturación manual que consume horas." },
  ],
  modules: [
    { t: "Agenda inteligente", d: "Por profesional, box y sucursal. Agendamiento online y reagendamiento automático." },
    { t: "Ficha clínica digital", d: "Historia centralizada, personalizable por especialidad, con imágenes y documentos." },
    { t: "Recordatorios WhatsApp", d: "Confirmación y recordatorio automático por el canal #1 de Paraguay." },
    { t: "Facturación electrónica", d: "Emisión, medios de pago, control de caja, cobranzas y morosidad." },
    { t: "Telemedicina", d: "Videoconsulta integrada y portal del paciente." },
    { t: "Recetas y consentimientos", d: "Plantillas + firma electrónica de recetas, certificados y consentimientos." },
    { t: "Reportes y KPIs", d: "Más de 50 reportes y tableros para decidir con datos." },
    { t: "Multi-sucursal", d: "Convenios, seguros y prepagas, inventario y honorarios por profesional." },
  ],
  specialties: [
    { name: "Kinesiología", slug: "kinesiologia", fields: ["Evaluación funcional", "Plan de sesiones", "Evolución por sesión", "Registro de ejercicios y progreso"] },
    { name: "Psicología", slug: "psicologia", fields: ["Evoluciones por sesión", "Historia y antecedentes", "Consentimientos", "Telemedicina con confidencialidad reforzada"] },
    { name: "Psiquiatría", slug: "psiquiatria", fields: ["Evoluciones por sesión", "Recetas de psicofármacos", "Seguimiento de medicación", "Telemedicina"] },
    { name: "Nutrición", slug: "nutricion", fields: ["Antropometría y composición corporal", "Planes alimentarios", "Objetivos y metas", "Gráficos de progreso"] },
    { name: "Oftalmología", slug: "oftalmologia", fields: ["Agudeza visual", "Refracción", "Receta óptica", "Presión intraocular"] },
    { name: "Pediatría", slug: "pediatria", fields: ["Curvas de crecimiento (percentiles)", "Calendario de vacunas", "Control de niño sano", "Recordatorios a padres"] },
    { name: "Dermatología", slug: "dermatologia", fields: ["Mapa de lesiones", "Seguimiento fotográfico", "Registro de procedimientos", "Antes / después"] },
    { name: "Centros estéticos", slug: "centros-esteticos", fields: ["Ficha estética facial", "Presupuestos con esquema", "Consentimientos", "Fotos antes / después"] },
  ],
  ai: [
    { t: "Botika · Contact Center", d: "Agente de IA que atiende Instagram y WhatsApp, agenda, confirma y crea la oportunidad. 24/7." },
    { t: "Notas clínicas por voz", d: "Dictás y la IA estructura la evolución. Menos tipeo, más paciente." },
    { t: "Resumen clínico", d: "Lo relevante del paciente antes de entrar a la consulta." },
    { t: "Reportes con IA", d: "Preguntás en lenguaje natural; la IA te arma el dato." },
  ],
  integrations: ["WhatsApp Cloud API", "Google Calendar", "Facturación electrónica (DNIT/SET)", "Pasarelas de pago", "Bancard", "Prepagas y seguros"],
  plans: [
    { name: "Esencial", blurb: "Para profesionales independientes.", price: "Desde $39/mes", features: ["1 profesional", "Agenda + ficha clínica", "Recordatorios WhatsApp", "Facturación básica"] },
    { name: "Pro", blurb: "Para consultorios en crecimiento.", price: "$99/mes", features: ["Hasta 5 profesionales", "Telemedicina + portal", "Reportes y KPIs", "Botika (agente IA)"], featured: true },
    { name: "Clínica", blurb: "Centros y multi-sucursal.", price: "A medida", features: ["Profesionales ilimitados", "Multi-sucursal + convenios", "Integraciones a medida", "Soporte prioritario"] },
  ],
  faqs: [
    { q: "¿Sirve para mi especialidad?", a: "Sí. NOVUMed personaliza la ficha y el flujo por especialidad: kinesiología, psicología, psiquiatría, nutrición, oftalmología, pediatría, dermatología y centros estéticos. Si tu especialidad no está, la configuramos." },
    { q: "¿Migran mis datos?", a: "Sí. Migramos tus pacientes e historias desde Excel u otro sistema, y configuramos tu cuenta antes de arrancar." },
    { q: "¿Cómo reduce los no-shows?", a: "Con recordatorios automáticos por WhatsApp y el agente Botika que confirma y reagenda solo. Clínicas reportan caídas grandes de inasistencia." },
    { q: "¿Está adaptado a Paraguay?", a: "Sí: facturación electrónica local, guaraníes, prepagas y seguros del país, y WhatsApp como canal principal." },
    { q: "¿Necesito instalar algo?", a: "No. Es 100% en la nube, funciona desde el navegador y el celular, con actualizaciones continuas." },
  ],
  cross: { name: "NOVUdent", slug: "novudent", desc: "¿Sos odontólogo o tenés clínica dental? Mirá NOVUdent, nuestro software 100% odontológico." },
};

export const NOVUDENT: ProductConfig = {
  slug: "novudent",
  name: "NOVUdent",
  eyebrow: "Vertical SaaS · Odontología",
  tagline: "El software que entiende tu clínica dental.",
  intro:
    "Todo lo que necesita una clínica dental en un solo lugar: odontograma, planes de tratamiento, presupuestos, financiamiento y agenda — con IA para diagnóstico de radiografías y simulación de sonrisa, y un agente que agenda por WhatsApp.",
  heroBullets: [
    "Odontograma y periodontograma interactivos",
    "Plan de tratamiento y presupuesto por pieza",
    "Financiamiento y cobro en cuotas",
    "Análisis de RX y simulador de sonrisa con IA",
  ],
  problems: [
    { t: "Odontograma en papel", d: "Estado bucal disperso, sin historial claro de qué se hizo y qué falta." },
    { t: "Presupuestos lentos", d: "Cotizar a mano cada tratamiento y perder al paciente en el camino." },
    { t: "Tratamientos sin seguir", d: "Planes que quedan a medias y cuotas que no se cobran." },
    { t: "Agenda y cobros sueltos", d: "No-shows, morosidad y caja sin control." },
  ],
  modules: [
    { t: "Odontograma + periodontograma", d: "Estado pieza por pieza, en tiempo real, con historial de intervenciones." },
    { t: "Plan de tratamiento", d: "Por pieza, con presupuesto creado desde el mismo odontograma." },
    { t: "Tratamientos predefinidos", d: "Elegís el diagnóstico y se cargan todos los pasos automáticamente." },
    { t: "Financiamiento", d: "Cobro en cuotas, créditos en línea y tareas de morosidad." },
    { t: "Ortodoncia", d: "Control integral del tratamiento y cuotas mensuales." },
    { t: "Laboratorio", d: "Solicitudes de trabajos internos y externos con seguimiento." },
    { t: "Agenda + WhatsApp", d: "Agendamiento online, recordatorios y reagendamiento automático." },
    { t: "Caja y comisiones", d: "Control de caja, gastos y cálculo de comisiones por odontólogo." },
  ],
  specialties: [
    { name: "Ortodoncia", slug: "ortodoncia", fields: ["Control del tratamiento", "Cobro en cuotas", "Evolución por control", "Fotos y radiografías"] },
    { name: "Implantología", slug: "implantologia", fields: ["Planificación de implantes", "Registro por pieza", "RX + análisis con IA", "Financiamiento"] },
    { name: "Estética dental", slug: "estetica-dental", fields: ["Simulador de sonrisa con IA", "Fotos antes / después", "Presupuestos", "Financiamiento"] },
    { name: "Odontopediatría", slug: "odontopediatria", fields: ["Odontograma infantil", "Control y prevención", "Recordatorios a padres", "Historia clínica"] },
    { name: "Endodoncia", slug: "endodoncia", fields: ["Registro por conducto", "RX + análisis con IA", "Evolución del tratamiento", "Presupuesto por pieza"] },
  ],
  dental: [
    { t: "Odontograma interactivo", d: "Marcá lesiones y tratamientos sobre cada pieza; el presupuesto se arma solo." },
    { t: "Análisis de RX con IA", d: "Diagnóstico asistido sobre radiografías para no pasar nada por alto." },
    { t: "Simulador de sonrisa", d: "Proyección con IA del antes/después para cerrar más tratamientos." },
    { t: "Videos 3D", d: "Explicá procedimientos al paciente con material visual claro." },
  ],
  ai: [
    { t: "Botika · Contact Center", d: "Agente que atiende WhatsApp e Instagram, agenda y confirma. Menos sillón vacío." },
    { t: "Análisis de radiografías", d: "IA que asiste el diagnóstico sobre RX." },
    { t: "Simulador de sonrisa", d: "Antes/después generado con IA para presentar el tratamiento." },
    { t: "Conversión de presupuestos", d: "La IA ayuda a convertir presupuestos en planes y a seguir morosidad." },
  ],
  integrations: ["WhatsApp Cloud API", "Google Calendar", "Facturación electrónica (DNIT/SET)", "Pasarelas de pago", "Bancard", "Laboratorios"],
  plans: [
    { name: "Solo", blurb: "Para el odontólogo independiente.", price: "Desde $45/mes", features: ["1 sillón / profesional", "Odontograma + ficha", "Presupuestos y agenda", "Recordatorios WhatsApp"] },
    { name: "Clínica", blurb: "Para clínicas en crecimiento.", price: "$129/mes", features: ["Hasta 5 sillones", "Financiamiento + morosidad", "Análisis de RX con IA", "Botika (agente IA)"], featured: true },
    { name: "Cadena", blurb: "Multi-sucursal.", price: "A medida", features: ["Sucursales ilimitadas", "Comisiones y laboratorio", "Integraciones a medida", "Soporte prioritario"] },
  ],
  faqs: [
    { q: "¿Tiene odontograma de verdad?", a: "Sí: odontograma y periodontograma interactivos, con estado por pieza en tiempo real y presupuesto creado desde ahí. Es lo que un software médico genérico no tiene." },
    { q: "¿Maneja ortodoncia y cuotas?", a: "Sí. Control integral de ortodoncia, cobro en cuotas, créditos y seguimiento de morosidad." },
    { q: "¿La IA realmente ayuda?", a: "Análisis asistido de radiografías, simulador de sonrisa para presentar tratamientos, y Botika para agendar por WhatsApp." },
    { q: "¿Migran mi clínica?", a: "Sí, migramos pacientes, historias y presupuestos, y configuramos tu clínica antes de arrancar." },
    { q: "¿Está hecho para Paraguay?", a: "Facturación electrónica local, guaraníes, pagos y WhatsApp. Sin instalaciones, 100% en la nube." },
  ],
  cross: { name: "NOVUMed", slug: "novumed", desc: "¿Atendés otras especialidades médicas? Conocé NOVUMed, nuestro CRM clínico multiespecialidad." },
};

export const PRODUCTS: Record<string, ProductConfig> = { novumed: NOVUMED, novudent: NOVUDENT };
