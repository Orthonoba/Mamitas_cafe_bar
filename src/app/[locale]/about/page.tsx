import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { buildMetadata } from "@/lib/seo/metadata";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { Heart, Coffee, Star, Users } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.seo" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/about",
    locale,
  });
}

export default async function AboutPage() {
  const t = await getTranslations("about");

  const VALUES = [
    { icon: Heart, title: t("values.loveTitle"), description: t("values.loveDesc") },
    { icon: Coffee, title: t("values.authenticTitle"), description: t("values.authenticDesc") },
    { icon: Star, title: t("values.qualityTitle"), description: t("values.qualityDesc") },
    { icon: Users, title: t("values.familyTitle"), description: t("values.familyDesc") },
  ];

  const CULTURE_ITEMS = [
    { emoji: "🫓", label: t("culture.arepas") },
    { emoji: "☕", label: t("culture.coffee") },
    { emoji: "🎉", label: t("culture.parties") },
    { emoji: "❤️", label: t("culture.love") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal py-28">
        <div className="absolute inset-0 bg-linear-to-br from-charcoal/80 via-espresso/40 to-charcoal/80 opacity-60" />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <FadeUp>
            <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-soft uppercase">
              {t("hero.eyebrow")}
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-montserrat text-4xl font-black text-white md:text-6xl">
              {t("hero.title")}
              <br />
              <span className="text-gradient-rose">{t("hero.titleHighlight")}</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70 leading-relaxed">
              {t("hero.description")}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Block 1 */}
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <FadeUp className="flex-1">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1609590981063-d495f5096177?w=800&q=80"
                  alt="Barquisimeto, Venezuela"
                  fill
                  className="object-cover"
                  fallbackSrc="/images/gallery/food.svg"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="flex-1">
              <span className="font-bebas text-sm tracking-widest text-rose-medium uppercase">
                {t("block1.eyebrow")}
              </span>
              <h2 className="font-montserrat mt-2 text-3xl font-bold text-charcoal">
                {t("block1.title")}
              </h2>
              <p className="mt-4 text-charcoal/70 leading-relaxed">{t("block1.p1")}</p>
              <p className="mt-3 text-charcoal/70 leading-relaxed">{t("block1.p2")}</p>
            </FadeUp>
          </div>

          {/* Block 2 */}
          <div className="mt-20 flex flex-col items-center gap-12 md:flex-row-reverse">
            <FadeUp className="flex-1">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&q=80"
                  alt="Lugano, Suiza"
                  fill
                  className="object-cover"
                  fallbackSrc="/images/gallery/ambiance.svg"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="flex-1">
              <span className="font-bebas text-sm tracking-widest text-rose-medium uppercase">
                {t("block2.eyebrow")}
              </span>
              <h2 className="font-montserrat mt-2 text-3xl font-bold text-charcoal">
                {t("block2.title")}
              </h2>
              <p className="mt-4 text-charcoal/70 leading-relaxed">{t("block2.p1")}</p>
              <p className="mt-3 text-charcoal/70 leading-relaxed">{t("block2.p2")}</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Venezuelan culture strip */}
      <section className="bg-warm-beige py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <FadeUp>
              <h2 className="font-montserrat text-3xl font-bold text-charcoal md:text-4xl">
                {t("culture.title")}
              </h2>
            </FadeUp>
          </div>
          <StaggerChildren className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {CULTURE_ITEMS.map((item) => (
              <StaggerItem key={item.label}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <span className="text-4xl">{item.emoji}</span>
                  <p className="mt-3 font-montserrat text-sm font-semibold text-charcoal">
                    {item.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <FadeUp>
              <span className="font-bebas mb-2 block text-sm tracking-[0.25em] text-rose-medium uppercase">
                {t("values.eyebrow")}
              </span>
              <h2 className="font-montserrat text-3xl font-bold text-charcoal md:text-4xl">
                {t("values.title")}
              </h2>
            </FadeUp>
          </div>
          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <StaggerItem key={v.title}>
                <div className="rounded-2xl bg-white p-6 shadow-sm text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-blush">
                    <v.icon className="text-rose-medium" size={24} />
                  </div>
                  <h3 className="font-montserrat text-base font-bold text-charcoal">{v.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-tropical-green py-20 text-center">
        <FadeUp>
          <h2 className="font-montserrat text-2xl font-bold text-white md:text-3xl">
            {t("cta.title")}
          </h2>
          <p className="mt-3 text-white/80">{t("cta.subtitle")}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-tropical-green-dark shadow-lg transition-transform hover:scale-105"
          >
            {t("cta.button")}
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
