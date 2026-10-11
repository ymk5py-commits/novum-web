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

1. Crear una cuenta gratuita en ImprovMX, agregar `novumholding.lat` y crear el alias `hola@novumholding.lat` con destino `ymk5py@gmail.com`. Confirmar el destino en Gmail.
2. En el DNS del dominio, sustituir los MX de Zoho por los dos MX que indique ImprovMX. Sustituir el SPF de Zoho por el valor recomendado por ImprovMX. Conservar los registros de la web y el DMARC. Verificar en ImprovMX que el reenvío está activo y probar un correo entrante.
3. Crear una cuenta gratuita en Resend y verificar `novumholding.lat` con los registros DNS que indique su panel. Sus registros de envío en el subdominio `send` no sustituyen los MX de recepción del dominio principal.
4. Configurar en Vercel `RESEND_API_KEY` y `EMAIL_FROM=NOVUM Web <hola@novumholding.lat>`. Opcionalmente `LEADS_EMAIL` permite otro destinatario. Volver a desplegar tras guardar las variables.
5. Enviar un pedido de prueba desde la web y confirmar que llega a Gmail mediante el reenvío.

ImprovMX gratuito permite recibir mediante reenvío, pero no ofrece un buzón ni envío SMTP desde `hola@novumholding.lat`. Al responder manualmente desde Gmail, el remitente visible será la cuenta de Gmail. Resend solo envía los avisos automáticos de la web. No guardar claves en el repositorio.

## Publicación

El sitio se aloja en Vercel. Antes de publicar, verificar el proyecto y el entorno destino, ejecutar `npm run build` y comprobar la portada, las páginas de producto, una especialidad y el formulario en móvil y escritorio.
