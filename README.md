# NOVUM Holding

Sitio institucional de [NOVUM Holding](https://www.novumholding.lat/), construido con Next.js 14, React y TypeScript.

## Contenido

- `/`: productos, estudio, proceso y solicitud de demo.
- `/novudent`: software dental en producción, con capturas reales y enlace a la demo pública.
- `/novumed`: producto para consultorios en desarrollo.
- `/novudent/[especialidad]` y `/novumed/[especialidad]`: información por especialidad.
- `/api/demo`: envío del formulario de contacto.
- Asistente NOVUM: consultas frecuentes y toma guiada de pedidos en todas las páginas.

El diseño compartido está documentado en [design.md](./design.md). Los datos de productos, estados y enlaces viven en `lib/site.ts` y `lib/productos.ts`.

## Desarrollo

```bash
npm ci
npm run dev
npm run build
```

El correo público es `hola@novumholding.lat`. WhatsApp se muestra solo si existe `NEXT_PUBLIC_CONTACTO_WHATSAPP`. El asistente y el formulario envían a `/api/demo`. Si el servicio de envío falla, ofrecen un correo con el pedido preparado; nunca muestran un éxito falso.

### Correo para pedidos

1. Crear la cuenta de Purelymail, agregar `novumholding.lat` y crear el buzón `hola@novumholding.lat`.
2. Cambiar en el DNS los MX y SPF de Zoho por los valores mostrados por Purelymail. Agregar el código de propiedad único de la cuenta y los registros DKIM y DMARC indicados allí. Guardar y verificar el dominio en Purelymail.
3. Configurar en Vercel `PURELYMAIL_SMTP_USER=hola@novumholding.lat` y `PURELYMAIL_SMTP_PASSWORD` (contraseña de aplicación si la cuenta usa 2FA). Opcionalmente `LEADS_EMAIL` permite otro destinatario.
4. Enviar un pedido de prueba desde la web y confirmar que llega al buzón.

Se conserva compatibilidad con `RESEND_API_KEY` y `EMAIL_FROM` si ya estaban configuradas, pero Purelymail tiene prioridad cuando sus dos variables están presentes. No guardar contraseñas en el repositorio.

## Publicación

El sitio se aloja en Vercel. Antes de publicar, verificar el proyecto y el entorno destino, ejecutar `npm run build` y comprobar la portada, las páginas de producto, una especialidad y el formulario en móvil y escritorio.
