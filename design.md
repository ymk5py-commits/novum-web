# Sistema visual de NOVUM Holding

Rediseño de la web institucional. Referencia de implementación: `app/globals.css`, componentes compartidos en `components/novum`.

## Dirección

NOVUM se presenta como una empresa de productos de software con un estudio detrás. La primera pantalla muestra qué hace y una captura auténtica del producto en producción. El resto del sitio distingue claramente los productos disponibles de los que están en desarrollo.

- Azul profundo para navegación, hero, estudio y pie.
- Superficies claras para producto, proceso, preguntas y contacto.
- Cian como acento funcional de marca, sin degradados sobre el texto del cuerpo.
- Inter como única familia para lectura, titulares, etiquetas y piezas compartidas. Titulares en Bold o ExtraBold con espaciado de −3,5 %; etiquetas en Bold, mayúsculas y +16 %; párrafos en Regular o Medium con interlínea de 1,4–1,5. Montserrat queda únicamente en el logotipo.
- Contenedores de hasta 1280 px, tarjetas de radio moderado, bordes suaves y sombras reservadas para capturas.

## Tipografía de marca

Referencia: Manual de marca de Novudent (borrador del 8 de octubre de 2026), sección 09. Esta regla se extiende a las páginas institucionales de NOVUM para que la cartera de productos comparta una voz visual.

- Titulares principales y de sección: Inter ExtraBold (800), espaciado −3,5 %. Los subtítulos usan Inter Bold (700).
- Etiquetas y rótulos: Inter Bold (700), mayúsculas, espaciado +16 %. No se usa una fuente monoespaciada como acento.
- Párrafos y elementos de interfaz: Inter Regular (400) o Medium (500), interlínea 1,5.
- El logotipo NOVUM conserva su forma; Montserrat solo se carga para ese símbolo tipográfico. El logotipo de Novudent es un activo gráfico que no depende de fuentes web.
- El acento celeste se reserva para palabras o frases cortas en títulos y elementos de acción. Los párrafos mantienen un color uniforme.

## Estructura

- Inicio: hero con producto real → cartera → demostración visual de Novudent → estudio → proceso → preguntas → formulario.
- Productos: hero con estado visible → funciones con capturas reales o detalles tipográficos → especialidades → preguntas → formulario.
- Especialidades: hero compacto → contenido útil con navegación lateral → formulario.
- Cabecera, logotipo y pie compartidos entre todas las páginas.

## Contenido y activos

- Las capturas de Novudent son imágenes reales de la demo. No se presentan interfaces inventadas como capturas.
- Novudent: «En producción». NOVUMed, Botika y PAUTIK: «En desarrollo».
- No se inventan clientes, métricas, precios ni testimonios.
- La acción principal es pedir una demo; la demo pública de Novudent es la segunda vía para conocer el producto.
- El formulario y el asistente comparten `/api/demo` y validación de contacto. El asistente responde solo con información confirmada del sitio y toma pedidos en pasos claros.
- El correo público confirmado es `hola@novumholding.lat`. Un pedido se marca como recibido solo tras confirmación del servicio de envío; ante un fallo, se ofrece un correo preparado.

## Interacción y accesibilidad

- Menú móvil con `aria-expanded`, Escape y enlaces de 44 px o más.
- El asistente está disponible en todas las rutas, con diálogo identificado, foco en el campo de texto y cierre con Escape.
- Estados de foco visibles y contraste suficiente en superficies claras y oscuras.
- Las capturas usan texto alternativo; los iconos decorativos quedan fuera de la lectura asistida.
- Animación ligera en hover. `prefers-reduced-motion` desactiva movimiento y scroll suave.

## Rutas

`/`, `/novudent`, `/novumed` y las páginas de especialidad comparten el sistema. Los metadatos e imágenes Open Graph siguen la misma identidad.
