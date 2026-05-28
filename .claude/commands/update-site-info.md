# Actualizar Información del Sitio

Actualiza los datos de contacto, horarios, redes sociales u otra información del negocio.

## Uso
```
/update-site-info
```

## Archivo Central
**Toda** la información del negocio vive en un solo lugar:
```
src/lib/constants/site.ts → export const SITE_CONFIG
```

## Campos a Actualizar para Lanzamiento

### Datos reales pendientes (placeholders actuales)
```typescript
SITE_CONFIG = {
  url: "https://mamitascaffe.ch",        // ← Confirmar dominio real
  address: {
    street: "Lugano",                    // ← Añadir dirección exacta
    googleMapsEmbed: "https://...",      // ← Reemplazar con embed real de Maps
    googleMapsUrl: "https://...",        // ← URL directa al local en Google Maps
  },
  contact: {
    phone: "+41 76 XXX XX XX",           // ← Número real
    whatsapp: "+41760000000",            // ← Sin espacios ni guiones: +41XXXXXXXXX
    email: "info@mamitascaffe.ch",       // ← Confirmar email
  },
  social: {
    instagram: "https://instagram.com/mamitas_caffebar",  // ← Confirmar username
    facebook: "https://facebook.com/mamitascaffebar",     // ← Confirmar URL
  },
}
```

### Formato WhatsApp
El número de WhatsApp en `contact.whatsapp` debe seguir el formato `+41XXXXXXXXX` (sin espacios, sin guiones).  
El enlace de WhatsApp se genera automáticamente con el mensaje predefinido.

### Horarios
Modificar el array `hours` en `SITE_CONFIG`. Se renderiza automáticamente en el Footer y la página de Contacto.

## Notas
- Cambiar `SITE_CONFIG` actualiza automáticamente: Footer, WhatsAppButton, ContactPage, JSON-LD Schema y sitemap
- El JSON-LD de Schema.org (SEO) usa los mismos datos via `src/lib/seo/json-ld.ts`
- Los cambios se propagan a toda la app — no hay que tocar otros archivos
