import type { NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Menú", href: "/menu" },
  { label: "Arepas", href: "/arepas" },
  { label: "Brunch", href: "/brunch" },
  { label: "Karaoke", href: "/karaoke" },
  { label: "Cumpleaños", href: "/birthdays", highlightOnMobile: true },
  { label: "Delivery", href: "/delivery" },
  { label: "Nosotros", href: "/about" },
  { label: "Contacto", href: "/contact" },
];
