"use client";

import { useState, useMemo } from "react";
import type { MenuCategory, MenuItem } from "@/types";

export type MenuFilterCategory = MenuCategory | "all";

export function useMenuFilter(items: MenuItem[]) {
  const [activeCategory, setActiveCategory] = useState<MenuFilterCategory>("all");

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? items
        : items.filter((item) => item.category === activeCategory),
    [items, activeCategory]
  );

  return { filtered, activeCategory, setActiveCategory };
}
