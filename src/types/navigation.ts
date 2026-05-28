export type NavKey =
  | "menu"
  | "arepas"
  | "brunch"
  | "karaoke"
  | "birthdays"
  | "delivery"
  | "about"
  | "contact";

export interface NavLink {
  key: NavKey;
  label: string;
  href: string;
  isExternal?: boolean;
  highlightOnMobile?: boolean;
}

export interface SocialLink {
  platform: "instagram" | "facebook" | "whatsapp" | "tiktok";
  href: string;
  label: string;
}
