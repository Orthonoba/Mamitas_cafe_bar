"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import { GALLERY_IMAGES } from "@/lib/data/gallery-images";
import { SITE_CONFIG } from "@/lib/constants/site";
import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/animations";
import type { GalleryTag } from "@/types";

export function GalleryClient() {
  const t = useTranslations("gallery");
  const [activeTag, setActiveTag] = useState<GalleryTag | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const FILTER_TAGS: { label: string; value: GalleryTag | "all" }[] = [
    { label: t("filter.all"), value: "all" },
    { label: t("filter.food"), value: "food" },
    { label: t("filter.arepas"), value: "arepas" },
    { label: t("filter.ambiance"), value: "ambiance" },
    { label: t("filter.drinks"), value: "drinks" },
    { label: t("filter.desserts"), value: "desserts" },
    { label: t("filter.events"), value: "events" },
  ];

  const filtered =
    activeTag === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.tags.includes(activeTag));

  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + filtered.length) % filtered.length : null
    );
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <>
      {/* Filter tabs */}
      <section className="sticky top-16 z-40 border-b border-warm-beige bg-cream/95 py-4 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {FILTER_TAGS.map((tag) => (
              <button
                key={tag.value}
                onClick={() => setActiveTag(tag.value)}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeTag === tag.value
                    ? "bg-rose-medium text-white shadow-md"
                    : "bg-white text-charcoal hover:bg-rose-blush"
                )}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTag}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 gap-4 sm:columns-2 lg:columns-3"
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  className="mb-4 cursor-pointer overflow-hidden break-inside-avoid rounded-2xl"
                  onClick={() => setLightboxIndex(i)}
                >
                  <div className="group relative overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {img.caption && (
                      <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {img.caption}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-warm-beige py-16 text-center">
        <FadeUp>
          <Instagram className="mx-auto mb-4 text-rose-medium" size={36} />
          <h2 className="font-montserrat text-2xl font-bold text-charcoal">
            {t("instagram.title")}
          </h2>
          <p className="mt-2 text-charcoal/60">{SITE_CONFIG.instagram}</p>
          <a
            href={SITE_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-medium px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-rose-dark"
          >
            <Instagram size={18} />
            {t("instagram.button")}
          </a>
        </FadeUp>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[90vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={filtered[lightboxIndex].width}
                height={filtered[lightboxIndex].height}
                className="max-h-[80vh] w-full rounded-2xl object-contain"
              />
              {filtered[lightboxIndex].caption && (
                <p className="mt-3 text-center text-sm text-white/70">
                  {filtered[lightboxIndex].caption}
                </p>
              )}
            </motion.div>

            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label={t("lightbox.close")}
            >
              <X size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label={t("lightbox.prev")}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label={t("lightbox.next")}
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
