# Checklist de Despliegue

Lista de verificación completa antes de lanzar el sitio de Mamitas Caffe & Bar en producción.

## Uso
```
/deploy-checklist
```

## Instrucciones

Revisa y verifica cada punto de la siguiente lista. Marca como completado cuando estés seguro.

---

## 1. Datos Reales (src/lib/constants/site.ts)
- [ ] Dominio real confirmado y actualizado (`url`)
- [ ] Dirección exacta de la tienda en Lugano (`address.street`)
- [ ] Google Maps embed real (`address.googleMapsEmbed`)
- [ ] Teléfono real con código suizo `+41` (`contact.phone`)
- [ ] WhatsApp real sin espacios: `+41XXXXXXXXX` (`contact.whatsapp`)
- [ ] Email real confirmado (`contact.email`)
- [ ] URL de Instagram real (`social.instagram`)
- [ ] URL de Facebook real (`social.facebook`)
- [ ] Horarios correctos y actualizados (`hours`)

## 2. Assets / Imágenes Reales
- [ ] `public/images/logo.svg` — Logo real del restaurante (SVG vectorial)
- [ ] `public/images/og-default.jpg` — Imagen 1200×630 para redes sociales
- [ ] `public/images/hero-home.jpg` — Foto del local o platos para el hero
- [ ] Fotos reales de platos en `public/images/menu/`
- [ ] Actualizar URLs de Unsplash en `src/lib/data/menu-items.ts` → paths locales
- [ ] Actualizar `src/lib/data/gallery-images.ts` con fotos reales del local

## 3. Build y Calidad de Código
- [ ] `npm run build` → exitoso sin errores TypeScript
- [ ] `npm run lint` → sin errores ESLint
- [ ] `npm run format:check` → Prettier sin diferencias

## 4. SEO y Schema
- [ ] Verificar JSON-LD en Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Sitemap accesible: `https://[dominio]/sitemap.xml`
- [ ] Robots accesible: `https://[dominio]/robots.txt`
- [ ] Metadata Open Graph visible al compartir en WhatsApp/Facebook

## 5. Funcionalidad Manual
- [ ] Hero: animaciones de entrada funcionan
- [ ] Navbar: scroll behavior (transparente → glass-card al hacer scroll)
- [ ] Navbar mobile: menú hamburguesa abre/cierra correctamente
- [ ] `/menu`: filtros por categoría funcionan sin errores
- [ ] `/arepas`: hover en tarjetas muestra descripción
- [ ] `/birthdays`: formulario valida y muestra confetti al enviar
- [ ] `/gallery`: lightbox abre/cierra, navegación con flechas ← →
- [ ] `/contact`: formulario envía correctamente
- [ ] WhatsApp button: abre `wa.me` en nueva pestaña
- [ ] QR Code: escaneable, apunta al menú correcto

## 6. Integrar Servicios de Producción
- [ ] **Email**: Integrar Resend en `src/app/api/contact/route.ts`
- [ ] **Email**: Integrar Resend en `src/app/api/birthday-inquiry/route.ts`
- [ ] **Analytics**: Añadir Google Analytics o Plausible en `src/app/layout.tsx`

## 7. Performance
- [ ] Lighthouse score ≥ 90 en Performance
- [ ] Lighthouse score ≥ 90 en SEO
- [ ] Lighthouse score ≥ 90 en Accessibility
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms

## 8. Despliegue en Vercel (recomendado)
```bash
# 1. Conectar repositorio en vercel.com
# 2. Framework: Next.js (auto-detectado)
# 3. Build command: npm run build
# 4. Output directory: .next
# 5. Configurar dominio personalizado
```

## Notas
- El workspace root warning de Next.js (`C:\Users\Asus\package-lock.json`) es local y no afecta producción
- Vercel detecta automáticamente Next.js — sin configuración adicional necesaria
