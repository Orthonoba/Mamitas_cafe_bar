"use client";

import {
  Sunrise,
  Coffee,
  Sandwich,
  CircleDot,
  Flame,
  Cake,
  GlassWater,
  Salad,
  LayoutGrid,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { MenuCategoryMeta } from "@/types";
import type { MenuFilterCategory } from "@/hooks/useMenuFilter";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sunrise,
  Coffee,
  Sandwich,
  CircleDot,
  Flame,
  Cake,
  GlassWater,
  Salad,
};

interface MenuFilterProps {
  categories: MenuCategoryMeta[];
  activeCategory: MenuFilterCategory;
  onCategoryChange: (cat: MenuFilterCategory) => void;
}

export function MenuFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: MenuFilterProps) {
  return (
    <div className="mb-10 overflow-x-auto pb-2">
      <div className="flex gap-2 min-w-max sm:flex-wrap sm:justify-center sm:min-w-0">
        {/* All tab */}
        <button
          onClick={() => onCategoryChange("all")}
          className={cn(
            "flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all",
            activeCategory === "all"
              ? "bg-rose-medium text-white shadow-md shadow-rose-medium/30"
              : "bg-white text-charcoal hover:bg-rose-blush hover:text-rose-dark"
          )}
        >
          <LayoutGrid size={16} />
          <span>Todo</span>
        </button>

        {categories.map((cat) => {
          const Icon = ICON_MAP[cat.icon] ?? CircleDot;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-rose-medium text-white shadow-md shadow-rose-medium/30"
                  : "bg-white text-charcoal hover:bg-rose-blush hover:text-rose-dark"
              )}
            >
              <Icon size={16} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
