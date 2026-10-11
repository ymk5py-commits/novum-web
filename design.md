# Sistema visual de NOVUM Holding

Rediseño de la web institucional. Referencia de implementación: `app/globals.css`, componentes compartidos en `components/novum`.

## Dirección

NOVUM se presenta como una empresa de productos de software con un estudio detrás. La primera pantalla muestra qué hace y una captura auténtica del producto en producción. El resto del sitio distingue claramente los productos disponibles de los que están en desarrollo.

- Azul profundo para navegación, hero, estudio y pie.
- Superficies claras para producto, proceso, preguntas y contacto.
- Cian como acento funcional de marca, sin degradados sobre el texto del cuerpo.
- Tipografía Geist para lectura y titulares; Montserrat solo para el logotipo; IBM Plex Mono para rótulos pequeños.
- Contenedores de hasta 1280 px, tarjetas de radio moderado, bordes suaves y sombras reservadas para capturas.

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
- El formulario mantiene el envío existente a `/api/demo` y la validación de contacto.

## Interacción y accesibilidad

- Menú móvil con `aria-expanded`, Escape y enlaces de 44 px o más.
- Estados de foco visibles y contraste suficiente en superficies claras y oscuras.
- Las capturas usan texto alternativo; los iconos decorativos quedan fuera de la lectura asistida.
- Animación ligera en hover. `prefers-reduced-motion` desactiva movimiento y scroll suave.

## Rutas

`/`, `/novudent`, `/novumed` y las páginas de especialidad comparten el sistema. Los metadatos e imágenes Open Graph siguen la misma identidad.
