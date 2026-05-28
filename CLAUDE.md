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
│   ├── business-hours.ts   # ÚNICA FUENTE de verdad para horarios
│   ├── constants/          # site.ts (SITE_CONFIG), navigation.ts (NAV_LINKS), delivery-platforms.ts
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

### Color Tokens (paleta v2 — pastel premium)
Los colores están en `src/app/globals.css` bajo `@theme {}` y se usan como clases Tailwind:
- Fondos: `bg-cream`, `bg-rose-blush`, `bg-rose-cream`, `bg-warm-beige`
- Rosa primario: `bg-rose-soft`, `bg-rose-medium`, `bg-rose-dark`, `bg-rose-accent`
- Menta: `bg-tropical-green` (pastel decorativo), `bg-tropical-green-dark` (contraste con blanco)
- Acentos: `bg-peach`, `bg-butter`, `bg-lavender`
- WhatsApp específico: `bg-whatsapp`, `bg-whatsapp-dark`
- Texto oscuro: `text-charcoal` (#4A2C3A — plum cálido)

> ⚠️ `bg-tropical-green` es ahora **mint pastel** (#A8E6CF). NO usar con `text-white` directo.
> Para botones/fondos con texto blanco: usar `bg-tropical-green-dark` o `bg-rose-medium`.
> Para el botón de WhatsApp: usar `bg-whatsapp` (#25D366).

---

## Nueva Identidad Visual (v2)

**Filosofía:** pastel · luminosa · alegre · femenina elegante · brunch café · instagram-friendly

### Paleta Principal
| Token | Hex | Uso |
|---|---|---|
| `cream` | `#FFF9F5` | Fondo de páginas |
| `rose-blush` | `#FFF0F4` | Fondos de sección suaves |
| `rose-medium` | `#FF8FA3` | Color primario, CTAs, botones |
| `rose-dark` | `#FF6F91` | Hover states, gradientes |
| `tropical-green` | `#A8E6CF` | Menta pastel decorativa |
| `tropical-green-dark` | `#27AE78` | Verde legible (check icons, tags) |
| `charcoal` | `#4A2C3A` | Texto oscuro, footer background |
| `whatsapp` | `#25D366` | Botón WhatsApp exclusivamente |

### Tipografía
| Variable CSS | Fuente | Rol |
|---|---|---|
| `--font-montserrat` | **Fredoka** | Headings: redondeado, alegre, display |
| `--font-poppins` | **Nunito** | Body: moderno, legible, suave |
| `--font-bebas` | **Quicksand** | Eyebrow/display: geométrico premium |

> Las variables CSS conservan sus nombres antiguos para no romper componentes existentes.
> Las clases Tailwind `font-montserrat`, `font-poppins`, `font-bebas` siguen funcionando.

### CTAs y Secciones de Fondo
- Fondo de CTA principal: `bg-linear-to-br from-rose-medium to-rose-dark`
- Secciones Features/Strip: `bg-linear-to-r from-rose-medium to-rose-dark`
- Glass card: `background: rgba(255,249,245,0.85)` — tinte crema pastel

---

## Sistema de Horarios

### Fuente Única: `src/lib/business-hours.ts`

```typescript
import { BUSINESS_HOURS } from "@/lib/business-hours";
// Retorna: Array<{ dayKey: DayKey, time: string }>
// dayKey mapea a next-intl: tHours(h.dayKey) → "Lunedì – Venerdì" etc.
```

### Para cambiar al horario de INVIERNO (oct–mar):
1. Editar `src/lib/business-hours.ts` — actualizar los campos `time`
2. Editar `src/lib/seo/json-ld.ts` — actualizar `opens`/`closes` en `openingHoursSpecification`
3. (Opcional) `src/lib/constants/site.ts` campo `hours` — solo usado como fallback referencia

### Horario actual (verano abr–sep)
| Día | Horario |
|---|---|
| Lunes – Viernes | 08:00 – 23:00 |
| Sábado | 09:00 – 23:00 |
| Domingo | 10:00 – 23:00 |

### Componentes que consumen BUSINESS_HOURS
- `src/components/layout/Footer.tsx`
- `src/app/[locale]/contact/page.tsx`

---

## Delivery — Plataformas

### Configuración: `src/lib/constants/delivery-platforms.ts`

```typescript
import { ACTIVE_PLATFORMS } from "@/lib/constants/delivery-platforms";
// Solo devuelve plataformas con enabled: true
```

### Activar / desactivar plataforma
```typescript
// En delivery-platforms.ts
{ id: "just-eat", enabled: false, ... }  // → NO aparece en la página
```

### Añadir links reales
Buscar `TODO_ADD_*_LINK` en `delivery-platforms.ts` y reemplazar con URLs reales:
- `TODO_ADD_SMOOD_LINK` → URL del restaurante en smood.ch
- `TODO_ADD_UBER_EATS_LINK` → URL del restaurante en ubereats.com
- `TODO_ADD_JUST_EAT_LINK` → URL del restaurante en just-eat.ch

### Logos de plataformas
Actualmente se usan estilos con colores de marca (placeholder visual).
Para producción, reemplazar con logos SVG oficiales en `/public/images/delivery/`:
- `smood-logo.svg`
- `uber-eats-logo.svg`
- `just-eat-logo.svg`

---

## Datos del Negocio

Toda la información del restaurante vive en `src/lib/constants/site.ts` → `SITE_CONFIG`.  
**Siempre modificar ahí** — nunca hardcodear en componentes.

| Campo | Valor actual |
|---|---|
| Nombre | Mamitas Caffe & Bar |
| Ciudad | Lugano, TI, Suiza |
| Instagram | @mamitas_caffebar |
| WhatsApp | +41 76 464 09 05 |
| Teléfono | +41 91 922 00 59 |
| Email | eslynaga@gmail.com |
| Dominio | mamitascaffe.ch (placeholder) |

---

## Imágenes

Durante **desarrollo**: URLs de Unsplash configuradas en `next.config.ts` `remotePatterns`.  
En **producción**: Reemplazar con fotografías reales en `public/images/`.

```
public/images/
├── logo.svg                 # Placeholder — reemplazar con logo real
├── og-default.jpg           # 1200×630 — Open Graph
├── hero-home.jpg            # Fondo hero principal
├── delivery/                # Logos oficiales de plataformas delivery
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

---

## Pendientes de Producción

- [ ] Subir imágenes reales (fotos del local, platos, equipo) → reemplazar Unsplash en `src/lib/data/`
- [ ] Añadir logos SVG oficiales de delivery platforms en `/public/images/delivery/`
- [ ] Reemplazar `TODO_ADD_*_LINK` en `src/lib/constants/delivery-platforms.ts`
- [ ] Reemplazar `/images/logo.svg` con el logo real del restaurante
- [ ] Actualizar dominio real en `src/lib/constants/site.ts` → `url` field
- [ ] Configurar Resend (email) para formularios de contacto y cumpleaños

---

## Changelog

### 2026-05-28 — Rediseño Visual Pastel Premium v2

**Archivos creados:**
- `src/lib/business-hours.ts` — única fuente de verdad para horarios
- `src/lib/constants/delivery-platforms.ts` — config de plataformas con toggle enable/disable

**Archivos modificados:**
- `src/app/globals.css` — paleta pastel completa, nuevos tokens, shadcn :root actualizado
- `src/app/[locale]/layout.tsx` — tipografía actualizada: Fredoka + Nunito + Quicksand
- `src/lib/constants/site.ts` — horarios verano actualizados (23:00 cierre)
- `src/lib/seo/json-ld.ts` — `openingHoursSpecification` actualizado
- `src/components/layout/Footer.tsx` — consume BUSINESS_HOURS
- `src/components/layout/WhatsAppButton.tsx` — usa `bg-whatsapp` (#25D366)
- `src/components/layout/Navbar.tsx` — WhatsApp link usa `text-whatsapp-dark`
- `src/components/sections/WhatsAppCTA.tsx` — `bg-rose-medium/dark` en lugar de tropical-green
- `src/components/sections/FeaturesStrip.tsx` — `bg-rose-medium/dark` gradient
- `src/components/sections/ContactForm.tsx` — success icon usa `text-tropical-green-dark`
- `src/components/birthday/BirthdayPackages.tsx` — popular card usa rose en lugar de tropical-green
- `src/components/birthday/BirthdayForm.tsx` — success icon usa `text-tropical-green-dark`
- `src/components/menu/MenuCard.tsx` — vegetarian tag usa `text-tropical-green-dark`
- `src/components/qr/QRSection.tsx` — URL text usa `text-rose-soft`
- `src/app/[locale]/contact/page.tsx` — BUSINESS_HOURS + WhatsApp btn usa `bg-whatsapp`
- `src/app/[locale]/delivery/page.tsx` — rediseño completo pastel premium
- `src/app/[locale]/arepas/page.tsx` — CTA usa rose gradient
- `src/app/[locale]/about/page.tsx` — CTA usa rose gradient
- `src/app/[locale]/brunch/page.tsx` — info strip usa rose gradient
- `src/app/[locale]/karaoke/page.tsx` — icons usan `text-rose-soft`, lint fix
- `src/messages/it.json` — añadido `delivery.orderOn`
- `src/messages/es.json` — añadido `delivery.orderOn`
- `CLAUDE.md` — documentación completa actualizada
