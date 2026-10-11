# NOVUM Holding

Sitio institucional de [NOVUM Holding](https://www.novumholding.lat/), construido con Next.js 14, React y TypeScript.

## Contenido

- `/`: productos, estudio, proceso y solicitud de demo.
- `/novudent`: software dental en producción, con capturas reales y enlace a la demo pública.
- `/novumed`: producto para consultorios en desarrollo.
- `/novudent/[especialidad]` y `/novumed/[especialidad]`: información por especialidad.
- Formulario de contacto que prepara un correo con los datos del pedido.
- Asistente NOVUM: consultas frecuentes y preparación guiada de pedidos en todas las páginas.

El diseño compartido está documentado en [design.md](./design.md). Los datos de productos, estados y enlaces viven en `lib/site.ts` y `lib/productos.ts`.

## Desarrollo

```bash
npm ci
npm run dev
npm run build
```

El correo público es `hola@novumholding.lat`. WhatsApp se muestra solo si existe `NEXT_PUBLIC_CONTACTO_WHATSAPP`. El asistente y el formulario preparan un enlace `mailto:`; el visitante debe abrir su aplicación de correo y pulsar Enviar. El sitio no afirma haber recibido un pedido antes de ese paso.

### Correo para pedidos

1. El alias `hola@novumholding.lat` se creó en ImprovMX con destino `ymk5py@gmail.com`.
2. Los MX del dominio apuntan a ImprovMX y su SPF está publicado. El panel de ImprovMX marca el dominio como activo y registra una entrega de prueba aceptada por Gmail.
3. Probar el formulario y el asistente en un dispositivo con una aplicación de correo configurada. Confirmar que abren un mensaje dirigido a `hola@novumholding.lat` con los datos y que el usuario lo envía.

ImprovMX gratuito recibe mediante reenvío, pero no ofrece un buzón ni envío SMTP desde `hola@novumholding.lat`. Al responder manualmente desde Gmail, el remitente visible será la cuenta de Gmail. El envío automático de pedidos queda pendiente para una integración posterior.

## Publicación

El sitio se aloja en Vercel. Antes de publicar, verificar el proyecto y el entorno destino, ejecutar `npm run build` y comprobar la portada, las páginas de producto, una especialidad y el formulario en móvil y escritorio.
