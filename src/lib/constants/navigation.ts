import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { key: "menu", label: "Menú", href: "/menu" },
  { key: "arepas", label: "Arepas", href: "/arepas" },
  { key: "brunch", label: "Brunch", href: "/brunch" },
  { key: "karaoke", label: "Karaoke", href: "/karaoke" },
  { key: "birthdays", label: "Cumpleaños", href: "/birthdays", highlightOnMobile: true },
  { key: "delivery", label: "Delivery", href: "/delivery" },
  { key: "about", label: "Nosotros", href: "/about" },
  { key: "contact", label: "Contacto", href: "/contact" },
];
