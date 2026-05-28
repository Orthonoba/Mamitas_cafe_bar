import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { buildMetadata } from "@/lib/seo/metadata";
import { MENU_ITEMS } from "@/lib/data/menu-items";
import { MenuCard } from "@/components/menu/MenuCard";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Calendar, Clock, MessageCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "brunch.seo" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/brunch",
    locale,
  });
}

const BRUNCH_ITEMS = MENU_ITEMS.filter((i) => i.category === "brunch");

export default async function BrunchPage() {
  const t = await getTranslations("brunch");

  const BRUNCH_INFO = [
    { icon: Calendar, label: t("info.when"), value: t("info.schedule") },
    { icon: Clock, label: t("info.hoursLabel"), value: t("info.time") },
    { icon: MessageCircle, label: t("info.reservations"), value: t("info.via") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-charcoal via-espresso to-charcoal/90" />
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/50 via-charcoal/30 to-charcoal/70" />

        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
          <FadeUp>
            <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-soft uppercase">
              {t("hero.eyebrow")}
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-montserrat text-4xl font-black leading-tight text-white drop-shadow md:text-6xl lg:text-7xl">
              {t("hero.title")}
              <br />
              <span className="text-gradient-rose">{t("hero.titleHighlight")}</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/85 drop-shadow">
              {t("hero.description")}
            </p>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rose-medium px-8 py-4 font-semibold text-white shadow-lg hover:bg-rose-dark transition-colors"
              >
                <MessageCircle size={20} />
                {t("hero.ctaReserve")}
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-charcoal transition-colors"
              >
                {t("hero.ctaMenu")}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-linear-to-r from-rose-medium to-rose-dark py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-3 gap-4 text-center text-white">
            {BRUNCH_INFO.map((info) => (
              <div key={info.label} className="flex flex-col items-center gap-1">
                <info.icon size={22} className="text-white/70" />
                <p className="text-xs uppercase tracking-wide text-white/70">{info.label}</p>
                <p className="font-montserrat font-bold">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brunch Menu */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={t("menuSection.eyebrow")}
            title={t("menuSection.title")}
            subtitle={t("menuSection.subtitle")}
          />
          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BRUNCH_ITEMS.map((item) => (
              <StaggerItem key={item.id}>
                <MenuCard item={item} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Experience section */}
      <section className="section-padding bg-warm-beige">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <FadeUp className="flex-1">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="Brunch Mamitas"
                  fill
                  className="object-cover"
                  fallbackSrc="/images/gallery/food.svg"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="flex-1">
              <span className="font-bebas text-sm tracking-widest text-rose-medium uppercase">
                {t("experience.eyebrow")}
              </span>
              <h2 className="font-montserrat mt-2 text-3xl font-bold text-charcoal">
                {t("experience.title")}
                <br />
                {t("experience.titleLine2")}
              </h2>
              <p className="mt-4 text-charcoal/70 leading-relaxed">{t("experience.p1")}</p>
              <p className="mt-3 text-charcoal/70 leading-relaxed">{t("experience.p2")}</p>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose-medium hover:text-rose-dark transition-colors"
              >
                {t("experience.instagramLink")}
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-blush py-20 text-center">
        <FadeUp>
          <h2 className="font-montserrat text-2xl font-bold text-charcoal md:text-3xl">
            {t("cta.title")}
          </h2>
          <p className="mt-3 text-charcoal/70">{t("cta.subtitle")}</p>
          <a
            href={SITE_CONFIG.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-rose-medium px-10 py-4 font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle size={22} />
            {t("cta.button")}
          </a>
        </FadeUp>
      </section>
    </>
  );
}
