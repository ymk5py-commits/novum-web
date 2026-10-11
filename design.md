# Design — NOVUM Holding (novumholding.lat)

Sistema de diseño fijo del sitio. Toda página nueva o rediseñada lee este archivo antes de escribir
código. No se regenera por página: si el sistema necesita algo nuevo, se agrega acá primero.

Aprobado por Croman el 11-oct-2026 (rediseño completo; el diseño anterior navy + menta se descartó).

## Genre
editorial — tono «editorial sobrio»: papel claro, tipografía con carácter, filetes finos, casi sin efectos.

## Audiencia y acción
- Mixta: dueños de clínicas (Novudent, NOVUMed) y empresas (Botika, PAUTIK, estudio a medida).
- Acción principal: **Pedir una demo** (formulario corto → correo a Novum). Secundaria: probar la demo pública de Novudent.

## Macrostructure family
- Inicio (marketing): **Index-First** — la cartera de productos como índice con filetes (informe anual de un holding),
  después el estudio, cómo trabajamos, preguntas y el formulario.
- Productos (`/novudent`, `/novumed`): **Split Studio** — díptico texto / prueba, alternando lados.
  La prueba es una captura REAL del producto. Un producto en desarrollo no lleva capturas inventadas: su prueba es una
  ficha tipográfica (lista con filetes).
- Especialidades (`/novudent/<x>`, `/novumed/<x>`): **Long Document** — prosa a 62ch, solo tipografía.

## Theme (custom, anclado en el navy del logo)
- `--color-paper`      oklch(97.5% 0.006 255)
- `--color-paper-2`    oklch(94.5% 0.009 255)
- `--color-rule`       oklch(85% 0.012 255)
- `--color-muted`      oklch(46% 0.022 258)
- `--color-ink`        oklch(23% 0.055 262)   ← navy del logo (también es el papel de las bandas invertidas)
- `--color-ink-2`      oklch(33% 0.05 262)
- `--color-accent`     oklch(72% 0.13 78)     ← latón: subrayados, marcas, estado. < 5 % de cada pantalla
- `--color-accent-ink` oklch(47% 0.1 68)      ← latón oscuro para texto y anillo de foco (≥ 4.5:1 sobre papel)
- `--color-on-ink`     oklch(95% 0.008 255)   ← texto sobre la banda navy
- `--color-on-ink-2`   oklch(76% 0.02 255)
- Ejes: paper-band light · display-style roman-serif · accent-hue warm (latón)

## Typography
- Display: **Newsreader** 300 (roman, nunca itálica en títulos), tracking -0.02em
- Body: **IBM Plex Sans** 400 / 500
- Mono: **IBM Plex Mono** 400 — solo números de índice, estados y datos chicos
- Wordmark: **Montserrat** 500 (NOVUM, +0.32em) y 300 («holding», +0.42em) entre dos filetes, copiando el logo.
  Montserrat está en la lista de fuentes gastadas: acá es deliberado (fidelidad al logo) y se usa SOLO en el wordmark.
- `--text-display` = clamp(2.75rem, 1.6rem + 4.6vw, 5.25rem); titulares ≤ 50 caracteres.

## Spacing
Escala de 4 pt con nombre (`--space-3xs` … `--space-4xl`, en `app/globals.css`). Nada de px sueltos.
Ancho máximo 1240 px; margen lateral `--gutter` = clamp(1rem, 4vw, 3rem).

## Motion (librería: Motion — `motion/react`)
- Easings: `--ease-out` cubic-bezier(0.16, 1, 0.3, 1) · `--ease-in` (0.7, 0, 0.84, 0) · `--ease-in-out` (0.65, 0, 0.35, 1).
  En Motion: `EASE_OUT = [0.16, 1, 0.3, 1]` (`lib/movimiento.ts`).
- Un solo momento orquestado por página: al cargar, el doble filete de la cabecera se dibuja y el titular sube 8 px
  con fundido (escalonado de 60 ms, total < 500 ms).
- Filetes que se dibujan una vez al entrar en pantalla (`scaleX` 0 → 1). Nada de parallax ni scroll-scrub.
- Hover: la flecha de cada fila del índice se corre 4 px y el nombre gana el subrayado latón.
- `prefers-reduced-motion`: todo pasa a fundido de opacidad ≤ 150 ms (`useReducedMotion`).
- Prohibido: rebote, cursor propio, smooth-scroll, marquees, contadores animados.

## Microinteractions stance
- Éxito silencioso: el formulario se reemplaza por un párrafo de confirmación, sin toast ni confeti.
- Foco visible al instante (anillo 2 px `--color-accent-ink`, sin animar).
- Acordeón de preguntas con `grid-template-rows` 0fr → 1fr, nunca `height`.

## CTA voice
- Primario: rectángulo navy, radio 2 px, texto papel, «Pedir una demo».
- Secundario: link subrayado con flecha («Probar la demo de Novudent →»).

## Contenido honesto (regla del sitio)
- Nada de métricas, testimonios, logos de clientes ni precios inventados.
- Estado de cada producto a la vista: Novudent «En producción»; NOVUMed, Botika y PAUTIK «En desarrollo».
- Lo que se dice de Novudent sale de lo que la app hace hoy (`novudent-app/lib/capacidades.ts` y el código);
  sus precios viven en novudent.novumholding.lat/precios (no se copian acá).
- Contacto: solo canales reales, cargados por variables de entorno (`NEXT_PUBLIC_CONTACTO_*`); si falta, no se muestra.
- Voseo rioplatense en todo el sitio.

## Per-page allowances
- Inicio y productos: capturas reales en `<figure>` con filete fino. Sin marcos de navegador dibujados.
- Especialidades: solo tipografía.

## What pages MUST share
Wordmark, cabecera (N6 periódico), pie (Ft1 banda navy), paleta, tipografías, botones, formulario de demo.

## What pages MAY differ on
La estructura dentro de su familia (índice / díptico / documento).
