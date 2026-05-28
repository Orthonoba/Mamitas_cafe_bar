export interface NavLink {
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
