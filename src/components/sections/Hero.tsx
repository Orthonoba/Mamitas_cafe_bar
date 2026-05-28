"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  eyebrow?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  className?: string;
  overlayOpacity?: number;
  minHeight?: string;
}

export function Hero({
  backgroundImage,
  title,
  subtitle,
  eyebrow,
  ctaPrimary = { label: "Ver Menú", href: "/menu" },
  ctaSecondary = { label: "Reservar Fiesta", href: "/birthdays" },
  className,
  overlayOpacity = 0.55,
  minHeight = "min-h-screen",
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        minHeight,
        className
      )}
    >
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={90}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-linear-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70"
        style={{ opacity: overlayOpacity * 1.2 }}
      />

      {/* Floating tropical decorations */}
      <motion.div
        className="absolute right-[10%] top-[20%] h-32 w-32 rounded-full bg-rose-soft/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[8%] h-40 w-40 rounded-full bg-tropical-green/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-bebas mb-4 text-sm tracking-[0.3em] text-rose-soft uppercase md:text-base"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="font-montserrat text-4xl font-black leading-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 drop-shadow md:text-xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            render={<Link href={ctaPrimary.href} />}
            size="lg"
            className="rounded-full bg-rose-medium px-8 py-6 text-base font-semibold text-white shadow-lg shadow-rose-medium/30 hover:bg-rose-dark"
          >
            {ctaPrimary.label}
          </Button>
          <Button
            render={<Link href={ctaSecondary.href} />}
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-white/80 bg-white/10 px-8 py-6 text-base font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-charcoal"
          >
            {ctaSecondary.label}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="text-white/60" size={32} />
      </motion.div>
    </section>
  );
}
