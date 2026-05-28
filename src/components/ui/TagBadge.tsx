import { cn } from "@/lib/utils";
import type { MenuTag } from "@/types";

const TAG_STYLES: Record<MenuTag, string> = {
  popular: "bg-amber-100 text-amber-800",
  vegetarian: "bg-green-100 text-green-800",
  vegan: "bg-emerald-100 text-emerald-800",
  spicy: "bg-red-100 text-red-800",
  new: "bg-blue-100 text-blue-800",
  signature: "bg-rose-100 text-rose-800",
  hero: "bg-purple-100 text-purple-800",
  viral: "bg-pink-100 text-pink-800",
  alcohol: "bg-violet-100 text-violet-800",
  seasonal: "bg-orange-100 text-orange-800",
  "delivery-friendly": "bg-teal-100 text-teal-800",
};

const TAG_LABELS: Record<MenuTag, string> = {
  popular: "Popular",
  vegetarian: "Vegetariano",
  vegan: "Vegano",
  spicy: "Picante",
  new: "Nuevo",
  signature: "Especial",
  hero: "Hero",
  viral: "Viral 🔥",
  alcohol: "Con Alcohol",
  seasonal: "Temporada",
  "delivery-friendly": "Delivery",
};

interface TagBadgeProps {
  tag: MenuTag;
  className?: string;
}

export function TagBadge({ tag, className }: TagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        TAG_STYLES[tag],
        className
      )}
    >
      {TAG_LABELS[tag]}
    </span>
  );
}
