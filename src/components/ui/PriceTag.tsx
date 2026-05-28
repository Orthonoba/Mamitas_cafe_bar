import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils/formatters";

interface PriceTagProps {
  price: number;
  currency?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function PriceTag({
  price,
  currency = "CHF",
  className,
  size = "md",
}: PriceTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-semibold",
        "bg-rose-blush text-rose-dark",
        {
          "px-2 py-0.5 text-xs": size === "sm",
          "px-3 py-1 text-sm": size === "md",
          "px-4 py-1.5 text-base": size === "lg",
        },
        className
      )}
    >
      {formatPrice(price, currency)}
    </span>
  );
}
