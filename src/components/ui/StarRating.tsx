import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  max?: number;
  className?: string;
  size?: number;
}

export function StarRating({
  rating,
  max = 5,
  className,
  size = 16,
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            i < rating ? "fill-amber-400 text-amber-400" : "fill-none text-gray-300"
          )}
        />
      ))}
    </div>
  );
}
