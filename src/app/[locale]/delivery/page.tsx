import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { MENU_ITEMS } from "@/lib/data/menu-items";
import { MenuCard } from "@/components/menu/MenuCard";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Truck, Clock, Package, Star, MessageCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "delivery.seo" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/delivery",
    locale,
  });
}

const DELIVERY_ITEMS = MENU_ITEMS.filter((i) => i.category === "delivery");

export default async function DeliveryPage() {
  const t = await getTranslations("delivery");

  const platforms = t.raw("platforms") as Array<{ name: string; desc: string }>;
  const whyItems = t.raw("why.items") as Array<{ title: string; desc: string }>;
  const packagingItems = t.raw("packaging.items") as string[];

  const ICON_LIST = [Package, Star, Clock, Truck];

  const PLATFORM_ICONS = ["🔵", "🟢", "🔴"];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal py-28 text-center">
        <div className="absolute inset-0 bg-linear-to-br from-charcoal via-espresso/50 to-charcoal/90 opacity-80" />
        <div className="relative mx-auto max-w-3xl px-4">
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
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70 leading-relaxed">
              {t("hero.description")}
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {platforms.map((p, i) => (
                <div
                  key={p.name}
                  className="flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-white backdrop-blur-sm"
                >
                  <span className="text-xl">{PLATFORM_ICONS[i]}</span>
                  <div className="text-left">
                    <p className="font-semibold text-sm">{p.name}</p>
                    <p className="text-xs text-white/60">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why delivery */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={t("why.eyebrow")}
            title={t("why.title")}
            subtitle={t("why.subtitle")}
          />
          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item, i) => {
              const Icon = ICON_LIST[i] ?? Package;
              return (
                <StaggerItem key={item.title}>
                  <div className="rounded-2xl bg-white p-6 shadow-sm text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-blush">
                      <Icon className="text-rose-medium" size={24} />
                    </div>
                    <h3 className="font-montserrat font-bold text-charcoal">{item.title}</h3>
                    <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Delivery Menu */}
      <section className="section-padding bg-warm-beige">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={t("deliveryMenu.eyebrow")}
            title={t("deliveryMenu.title")}
            subtitle={t("deliveryMenu.subtitle")}
          />
          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERY_ITEMS.map((item) => (
              <StaggerItem key={item.id}>
                <MenuCard item={item} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Packaging */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <FadeUp delay={0.15} className="flex-1">
              <span className="font-bebas text-sm tracking-widest text-rose-medium uppercase">
                {t("packaging.eyebrow")}
              </span>
              <h2 className="font-montserrat mt-2 text-3xl font-bold text-charcoal">
                {t("packaging.title")}
                <br />
                {t("packaging.titleLine2")}
              </h2>
              <ul className="mt-6 space-y-3">
                {packagingItems.map((item, i) => {
                  const EMOJIS = ["📦", "🫙", "📝", "🌿", "📱", "🎁"];
                  return (
                    <li key={i} className="flex items-start gap-2 text-charcoal/80 text-sm">
                      <span className="mt-0.5">{EMOJIS[i]}</span>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </FadeUp>
            <FadeUp className="flex-1">
              <div className="relative h-72 w-full overflow-hidden rounded-3xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
                  alt="Packaging Mamitas delivery"
                  fill
                  className="object-cover"
                  fallbackSrc="/images/gallery/food.svg"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-tropical-green py-16 text-center">
        <FadeUp>
          <Truck className="mx-auto mb-4 text-white/80" size={40} />
          <h2 className="font-montserrat text-2xl font-bold text-white md:text-3xl">
            {t("cta.title")}
          </h2>
          <p className="mt-3 text-white/80">{t("cta.subtitle")}</p>
          <a
            href={SITE_CONFIG.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-tropical-green-dark shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle size={22} className="fill-tropical-green text-tropical-green" />
            {t("cta.button")}
          </a>
        </FadeUp>
      </section>
    </>
  );
}
