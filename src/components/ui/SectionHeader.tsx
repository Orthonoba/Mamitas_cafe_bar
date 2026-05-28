import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/animations";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <FadeUp delay={0}>
          <span
            className={cn(
              "font-bebas mb-2 block text-sm tracking-[0.25em] uppercase",
              light ? "text-rose-soft" : "text-rose-medium"
            )}
          >
            {eyebrow}
          </span>
        </FadeUp>
      )}
      <FadeUp delay={0.1}>
        <h2
          className={cn(
            "font-montserrat text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
            light ? "text-white" : "text-charcoal",
            titleClassName
          )}
        >
          {title}
        </h2>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.2}>
          <p
            className={cn(
              "mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg",
              align === "center" && "mx-auto",
              light ? "text-white/80" : "text-charcoal/60"
            )}
          >
            {subtitle}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
