# Agregar Nueva Página

Crea una nueva página al sitio de Mamitas Caffe & Bar siguiendo los patrones establecidos.

## Uso
```
/add-page [nombre-ruta]
```

## Instrucciones

1. **Crear** `src/app/[nombre-ruta]/page.tsx` como **Server Component** (sin `"use client"`)
2. **Exportar metadata** usando `buildMetadata()` de `@/lib/seo/metadata`:
   ```typescript
   import { buildMetadata } from "@/lib/seo/metadata";
   export const metadata = buildMetadata({
     title: "Título de la Página",
     description: "Descripción SEO...",
     path: "/ruta",
   });
   ```
3. **Estructura visual** estándar:
   - Hero section: fondo oscuro con `FadeUp` para el título
   - Contenido principal: fondo `bg-cream` o `bg-warm-beige`
   - CTA final: `<WhatsAppCTA />` o sección verde con `bg-tropical-green`
4. **Animaciones**: usar `FadeUp`, `StaggerChildren`, `StaggerItem` de `@/components/animations`
5. **Si necesita interactividad** (estado, hooks browser): extraer la parte cliente a un componente separado:
   - `src/app/[ruta]/[NombreClient].tsx` con `"use client"`
   - La página principal la importa sin `"use client"`
6. **Actualizar el sitemap** en `src/app/sitemap.ts` añadiendo la nueva URL
7. **Añadir al navbar** en `src/lib/constants/navigation.ts` si debe ser visible

## Patrones de Color (usar solo estos)
- Fondos: `bg-cream`, `bg-warm-beige`, `bg-charcoal`, `bg-espresso`, `bg-tropical-green`
- Texto: `text-charcoal`, `text-white`, `text-charcoal/70`
- Accents: `text-rose-medium`, `text-tropical-green`

## Notas Importantes
- **Nunca** mezclar `"use client"` con `export const metadata` en el mismo archivo
- **Siempre** usar `buildMetadata()` — nunca definir `metadata` manualmente
- **Gradientes**: usar `bg-linear-to-br` (NO `bg-gradient-to-br` — Tailwind v4)
- **CSS variables**: `shadow-(--shadow-card)` (NO `shadow-[var(--shadow-card)]`)
