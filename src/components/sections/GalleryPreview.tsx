import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/data/gallery-images";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp } from "@/components/animations";

export async function GalleryPreview() {
  const t = await getTranslations("galleryPreview");
  const preview = GALLERY_IMAGES.slice(0, 4);

  return (
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <FadeUp delay={0.1}>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {preview.map((img, i) => (
              <Link
                key={img.id}
                href="/gallery"
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                style={{ aspectRatio: i === 0 ? "1/1" : "4/3" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {img.caption && (
                  <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {img.caption}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border-2 border-charcoal px-8 py-3 font-semibold text-charcoal transition-colors hover:bg-charcoal hover:text-white"
            >
              {t("button")}
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
