"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { StarRating } from "@/components/ui/StarRating";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section className="section-padding bg-warm-beige">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes"
          subtitle="Palabras de quienes ya han vivido la experiencia Mamitas"
        />

        {/* Desktop: 3-col grid */}
        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-2xl p-6"
            >
              <Quote className="mb-4 text-rose-soft" size={28} />
              <p className="text-sm leading-relaxed text-charcoal/80">{t.text}</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-charcoal">{t.name}</p>
                  {t.location && (
                    <p className="text-xs text-charcoal/50">{t.location}</p>
                  )}
                </div>
                <StarRating rating={t.rating} size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="relative lg:hidden">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="glass-card rounded-2xl p-6"
              >
                {TESTIMONIALS[active] && (
                  <>
                    <Quote className="mb-4 text-rose-soft" size={28} />
                    <p className="text-sm leading-relaxed text-charcoal/80">
                      {TESTIMONIALS[active].text}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-charcoal">
                          {TESTIMONIALS[active].name}
                        </p>
                        {TESTIMONIALS[active].location && (
                          <p className="text-xs text-charcoal/50">
                            {TESTIMONIALS[active].location}
                          </p>
                        )}
                      </div>
                      <StarRating
                        rating={TESTIMONIALS[active].rating}
                        size={14}
                      />
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="rounded-full bg-white p-2 shadow hover:bg-rose-blush transition-colors"
            >
              <ChevronLeft size={20} className="text-charcoal" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonio ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === active ? "w-6 bg-rose-medium" : "w-2 bg-rose-soft/50"
                  )}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="rounded-full bg-white p-2 shadow hover:bg-rose-blush transition-colors"
            >
              <ChevronRight size={20} className="text-charcoal" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
