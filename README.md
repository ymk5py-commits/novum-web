# NOVUM Holding

Sitio institucional de [NOVUM Holding](https://www.novumholding.lat/), construido con Next.js 14, React y TypeScript.

## Contenido

- `/`: productos, estudio, proceso y solicitud de demo.
- `/novudent`: software dental en producción, con capturas reales y enlace a la demo pública.
- `/novumed`: producto para consultorios en desarrollo.
- `/novudent/[especialidad]` y `/novumed/[especialidad]`: información por especialidad.
- `/api/demo`: envío del formulario de contacto.

El diseño compartido está documentado en [design.md](./design.md). Los datos de productos, estados y enlaces viven en `lib/site.ts` y `lib/productos.ts`.

## Desarrollo

```bash
npm ci
npm run dev
npm run build
```

Los canales públicos de contacto se muestran solo si existen `NEXT_PUBLIC_CONTACTO_EMAIL` o `NEXT_PUBLIC_CONTACTO_WHATSAPP`. La configuración del envío del formulario se describe en `app/api/demo/route.ts`.

## Publicación

El sitio se aloja en Vercel. Antes de publicar, verificar el proyecto y el entorno destino, ejecutar `npm run build` y comprobar la portada, las páginas de producto, una especialidad y el formulario en móvil y escritorio.
