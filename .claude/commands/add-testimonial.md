# Agregar Testimonio

Agrega un nuevo testimonio/reseña al sitio de Mamitas Caffe & Bar.

## Uso
```
/add-testimonial
```

## Instrucciones

1. Leer `src/lib/data/testimonials.ts` para ver el formato actual
2. Añadir el nuevo `Testimonial` al array `TESTIMONIALS`:

```typescript
{
  id: "t-006",                        // Siguiente ID disponible
  name: "Nombre del Cliente",
  location: "Lugano",                  // Ciudad opcional
  rating: 5,                           // 1-5 estrellas
  text: "Texto del testimonio...",     // En el idioma del cliente
  date: "2026-06-15",                  // Fecha real ISO: YYYY-MM-DD
  platform: "google",                  // "google" | "instagram" | "tripadvisor" | "direct"
  avatarInitials: "NC",               // Iniciales del nombre para el avatar
}
```

## Plataformas soportadas
- `"google"` — Google Reviews
- `"instagram"` — Instagram
- `"tripadvisor"` — TripAdvisor
- `"direct"` — Testimonio directo/WhatsApp

## Notas
- El componente `TestimonialsSection` muestra los primeros 3 en desktop y un carousel en mobile
- Mantener un mix de testimonios en español e italiano (mercado local de Lugano)
- Fechas reales, nunca inventadas
- Archivo: `src/lib/data/testimonials.ts`
