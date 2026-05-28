# Agregar Item al Menú

Agrega un nuevo plato al menú de Mamitas Caffe & Bar.

## Uso
```
/add-menu-item [nombre] [categoría] [precio]
```

## Categorías disponibles
- `desayunos` — Desayunos y brunch
- `cafeteria` — Bebidas calientes
- `panini` — Panini y sándwiches
- `arepas` — Arepas venezolanas
- `sabores-latinos` — Platos típicos venezolanos
- `dulces` — Postres y dulces
- `bebidas` — Bebidas frías
- `ensaladas` — Ensaladas

## Instrucciones

1. Leer `src/lib/data/menu-items.ts` para ver el formato actual
2. Generar un `id` único siguiendo el patrón `[prefijo-categoría]-[numero]` (ej: `are-007`, `dul-006`)
3. Añadir el nuevo `MenuItem` al array `MENU_ITEMS` con:
   - `name`: nombre del plato
   - `description`: descripción apetitosa en español
   - `price`: precio en CHF (número, nunca string)
   - `category`: una de las categorías de arriba
   - `tags`: array de `MenuTag[]` — usar `"signature"` para platos de la casa
   - `isPopular`: `true` solo si debe aparecer en el home
   - `image`: URL de Unsplash representativa o path `/images/menu/[nombre].jpg`
   - `allergens`: array de strings con los alérgenos (si aplica)
4. Si `isPopular: true`, verificar que `POPULAR_ITEMS.length <= 8` (para el grid del home)
5. Confirmar que TypeScript compila: `npm run build`

## Notas
- Los precios siempre en CHF como número decimal: `16.50` no `"CHF 16.50"`
- El texto debe estar en español (idioma principal del menú)
- Archivo: `src/lib/data/menu-items.ts`
