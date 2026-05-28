"use client";

import { AnimatePresence, motion } from "motion/react";
import { MenuCard } from "./MenuCard";
import { MenuFilter } from "./MenuFilter";
import { useMenuFilter } from "@/hooks/useMenuFilter";
import type { MenuItem, MenuCategoryMeta } from "@/types";

interface MenuGridProps {
  items: MenuItem[];
  categories: MenuCategoryMeta[];
}

export function MenuGrid({ items, categories }: MenuGridProps) {
  const { filtered, activeCategory, setActiveCategory } = useMenuFilter(items);

  return (
    <div className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MenuFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((item) => (
              <motion.div key={item.id} layout>
                <MenuCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-charcoal/50">
            No hay items en esta categoría.
          </p>
        )}
      </div>
    </div>
  );
}
