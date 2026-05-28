# Mamitas Caffe & Bar — Guía del Proyecto

Sitio web completo para **Mamitas Caffe & Bar**, café venezolano familiar en Lugano, Suiza.  
Propietarios venezolanos de Barquisimeto. Instagram: @mamitas_caffebar.

---

## Stack Técnico

| Tecnología | Versión | Notas |
|---|---|---|
| Next.js | 16.x | App Router, Server Components |
| TypeScript | 5.x | strict + noUncheckedIndexedAccess |
| Tailwind CSS | 4.x | CSS-first config, tokens en `@theme {}` |
| Shadcn/ui | 4.x | Base UI (NO Radix UI) — API diferente |
| Motion | 12.x | Importar desde `"motion/react"` (no framer-motion) |
| Lucide React | latest | Icons |
| React Hook Form + Zod | latest | Formularios |

---

## Estructura del Proyecto

```
src/
├── app/                    # App Router — páginas y API routes
│   ├── layout.tsx          # Root layout: Navbar + Footer + WhatsApp + JSON-LD
│   ├── page.tsx            # Home
│   ├── menu/page.tsx       # Menú filtrable por categoría
│   ├── arepas/page.tsx     # Showcase de arepas
│   ├── birthdays/page.tsx  # Paquetes + formulario de reserva
│   ├── gallery/page.tsx    # Galería masonry + lightbox
│   ├── about/page.tsx      # Historia "De Barquisimeto a Lugano"
│   ├── contact/page.tsx    # Contacto + mapa + formulario
│   ├── api/contact/        # POST handler (Zod validated)
│   ├── api/birthday-inquiry/
│   ├── sitemap.ts          # Sitemap automático
│   └── robots.ts
├── components/
│   ├── animations/         # FadeUp, StaggerChildren, ScaleOnHover
│   ├── birthday/           # BirthdayPackages, BirthdayForm, BirthdayFAQ
│   ├── layout/             # Navbar, Footer, WhatsAppButton
│   ├── menu/               # MenuCard, MenuFilter, MenuGrid
│   ├── qr/                 # QRSection
│   ├── sections/           # Hero, FeaturesStrip, BestSellers, etc.
│   └── ui/                 # Shadcn + SectionHeader, PriceTag, StarRating, TagBadge
├── hooks/                  # useMobileMenu, useMenuFilter, useScrolled, useWindowSize
├── lib/
│   ├── constants/          # site.ts (SITE_CONFIG), navigation.ts (NAV_LINKS)
│   ├── data/               # menu-items.ts, birthday-packages.ts, testimonials.ts, gallery-images.ts
│   ├── seo/                # metadata.ts (buildMetadata), json-ld.ts (Restaurant schema)
│   └── utils/              # formatters.ts (formatPrice CHF)
└── types/                  # menu.ts, birthday.ts, gallery.ts, testimonial.ts, navigation.ts
```

---

## Reglas Críticas — Leer Antes de Tocar el Código

### Shadcn v4 usa Base UI (NO Radix UI)
El `shadcn@latest` instalado usa `@base-ui/react` internamente. Esto significa:

```tsx
// ❌ INCORRECTO — Radix/viejo patrón
<Button asChild><Link href="/menu">Ver</Link></Button>
<Accordion type="single" collapsible>

// ✅ CORRECTO — Base UI patrón
<Button render={<Link href="/menu" />}>Ver</Button>
<Accordion multiple={false}>
```

### Tailwind v4 — Sintaxis CSS Variables
```tsx
// ❌ INCORRECTO — Tailwind v3 / arbitrario
className="bg-gradient-to-br shadow-[var(--shadow-card)]"

// ✅ CORRECTO — Tailwind v4 canónico
className="bg-linear-to-br shadow-(--shadow-card)"
```

### Motion — Importación
```tsx
// ❌ INCORRECTO
import { motion } from "framer-motion"

// ✅ CORRECTO
import { motion, AnimatePresence } from "motion/react"
```

### Server vs Client Components
- Páginas son **Server Components** por defecto → pueden exportar `metadata`
- `"use client"` solo para: estado interactivo, hooks de browser, Framer Motion
- **Nunca** poner `"use client"` en el mismo archivo que `export const metadata`
- Patrón: `page.tsx` (server, metadata) → importa `ClientComponent.tsx` (use client)

### Precios — Siempre número, nunca string
```typescript
price: 16.50  // CHF — se formatea con formatPrice() en render
// Usar: import { formatPrice } from "@/lib/utils/formatters"
// formatPrice(16.50) → "CHF 16.50"
```

### Color Tokens
Los colores están en `src/app/globals.css` bajo `@theme {}` y se usan como clases Tailwind:
- `bg-rose-blush`, `bg-rose-soft`, `bg-rose-medium`, `bg-rose-dark`
- `bg-tropical-green`, `bg-tropical-green-light`, `bg-tropical-green-dark`
- `bg-warm-beige`, `bg-cream`, `bg-espresso`, `bg-charcoal`

---

## Datos del Negocio

Toda la información del restaurante vive en `src/lib/constants/site.ts` → `SITE_CONFIG`.  
**Siempre modificar ahí** — nunca hardcodear en componentes.

| Campo | Valor actual |
|---|---|
| Nombre | Mamitas Caffe & Bar |
| Ciudad | Lugano, TI, Suiza |
| Instagram | @mamitas_caffebar |
| WhatsApp | +41760000000 (placeholder) |
| Dominio | mamitascaffe.ch (placeholder) |

> ⚠️ Los campos marcados como "placeholder" deben actualizarse con datos reales antes del lanzamiento.

---

## Imágenes

Durante **desarrollo**: URLs de Unsplash configuradas en `next.config.ts` `remotePatterns`.  
En **producción**: Reemplazar con fotografías reales en `public/images/`.

```
public/images/
├── logo.svg                 # Placeholder — reemplazar con logo real
├── og-default.jpg           # 1200×630 — Open Graph
├── hero-home.jpg            # Fondo hero principal
└── menu/                    # Fotos de cada plato
```

---

## Comandos

```bash
npm run dev          # Servidor desarrollo http://localhost:3000
npm run build        # Build de producción (TypeScript check incluido)
npm run start        # Servidor producción
npm run lint         # ESLint
npm run format       # Prettier (corregir)
npm run format:check # Prettier (verificar sin corregir)
```

---

## SEO — Cómo Agregar Metadata a una Página

```typescript
// En cada page.tsx (Server Component)
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Título de la Página",
  description: "Descripción SEO...",
  path: "/ruta",
  keywords: ["keyword específica", "otra keyword"],
});
```

El `buildMetadata()` añade automáticamente las keywords base del restaurante.

---

## Agregar Nuevos Items al Menú

1. Editar `src/lib/data/menu-items.ts`
2. Añadir objeto `MenuItem` al array `MENU_ITEMS`
3. Si `isPopular: true`, aparece automáticamente en la sección "Más Populares" del home

```typescript
{
  id: "are-007",           // Prefijo de categoría + número
  name: "Nueva Arepa",
  description: "Descripción del relleno...",
  price: 15.50,            // CHF — número, no string
  category: "arepas",
  tags: ["signature"],
  isPopular: false,
  image: "https://images.unsplash.com/...",  // URL Unsplash o path /images/menu/...
  allergens: ["lacteos"],
}
```

---

## Configuración de Build — next.config.ts

El archivo `next.config.ts` incluye `turbopack.root` para evitar que Turbopack escanee fuera del directorio del proyecto:

```typescript
import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname), // Limita el scan de lockfiles al proyecto
  },
  // ...
};
```

> Esta configuración es necesaria porque Turbopack escanea directorios padre buscando lockfiles.  
> Sin ella, puede detectar lockfiles espurios en directorios superiores y emitir el warning  
> "We detected multiple lockfiles".

**Lockfile único:** el proyecto usa **npm** exclusivamente. Solo debe existir `package-lock.json` en la raíz.  
Nunca ejecutar `yarn install` o `pnpm install` en este proyecto.

---

## Próximas Integraciones (Producción)

- **Email**: Integrar Resend en `src/app/api/contact/route.ts` y `src/app/api/birthday-inquiry/route.ts`
- **CMS**: Migrar `src/lib/data/menu-items.ts` → Sanity.io (el bridge JSON ya existe en `src/content/menu/`)
- **Analytics**: Google Analytics o Plausible en `src/app/layout.tsx`
- **WhatsApp Business API**: Para respuestas automáticas a inquiries de cumpleaños
