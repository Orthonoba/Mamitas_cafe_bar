import { cn } from "@/lib/utils";
import { PriceTag } from "@/components/ui/PriceTag";
import { TagBadge } from "@/components/ui/TagBadge";
import { ScaleOnHover } from "@/components/animations";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import type { MenuItem } from "@/types";

interface MenuCardProps {
  item: MenuItem;
  className?: string;
}

export function MenuCard({ item, className }: MenuCardProps) {
  const displayTags = item.tags.slice(0, 2);

  return (
    <ScaleOnHover className={cn("h-full", className)}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-(--shadow-card) transition-shadow hover:shadow-(--shadow-hover)">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden bg-warm-beige">
          <ImageWithFallback
            src={item.image ?? "/images/menu/placeholder.svg"}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            fallbackSrc="/images/menu/placeholder.svg"
          />

          {/* Tag badges overlay */}
          {displayTags.length > 0 && (
            <div className="absolute left-3 top-3 flex flex-wrap gap-1">
              {displayTags.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-montserrat text-base font-bold text-charcoal">
            {item.name}
          </h3>
          <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-charcoal/60">
            {item.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <PriceTag price={item.price} />
            {item.isVegetarian && (
              <span className="text-xs text-tropical-green-dark">🌱 Vegetariano</span>
            )}
          </div>
        </div>
      </article>
    </ScaleOnHover>
  );
}
