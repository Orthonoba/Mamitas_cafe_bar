import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { MENU_ITEMS } from "@/lib/data/menu-items";
import { MenuCard } from "@/components/menu/MenuCard";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE_CONFIG } from "@/lib/constants/site";
import { ACTIVE_PLATFORMS } from "@/lib/constants/delivery-platforms";
import { Truck, Clock, Package, Star, MessageCircle, ExternalLink } from "lucide-react";

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

  // Merge platform config (toggle/href/colors) with translated descriptions
  const activePlatformsWithDesc = ACTIVE_PLATFORMS.map((p) => ({
    ...p,
    desc: platforms[p.descIndex]?.desc ?? "",
  }));

  return (
    <>
      {/* Hero — pastel gradient, texto oscuro para contraste AA */}
      <section className="relative overflow-hidden bg-linear-to-br from-rose-blush via-cream to-warm-beige py-28 text-center">
        {/* Decoraciones de fondo */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-rose-medium/8 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-tropical-green/15 blur-3xl" />
          <div className="absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-peach/20 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4">
          <FadeUp>
            <span className="font-bebas mb-3 inline-block rounded-full bg-rose-blush px-5 py-1.5 text-sm font-semibold tracking-[0.2em] text-rose-dark uppercase shadow-sm">
              {t("hero.eyebrow")}
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-montserrat mt-4 text-5xl font-black text-charcoal md:text-7xl">
              {t("hero.title")}
              <br />
              <span className="text-gradient-rose">{t("hero.titleHighlight")}</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-charcoal/65">
              {t("hero.description")}
            </p>
          </FadeUp>

          {/* Platform cards — solo plataformas habilitadas */}
          <FadeUp delay={0.35}>
            <div className="mt-12 flex flex-wrap items-stretch justify-center gap-4">
              {activePlatformsWithDesc.map((p) => (
                <a
                  key={p.id}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("orderOn")} ${p.name}`}
                  className="group flex min-w-[160px] flex-col items-center gap-3 rounded-3xl border-2 border-transparent bg-white px-6 py-5 shadow-(--shadow-card) transition-all duration-200 hover:-translate-y-1 hover:border-rose-medium/30 hover:shadow-(--shadow-hover)"
                >
                  {/* Logo placeholder — reemplazar con imagen oficial de cada plataforma */}
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black"
                    style={{ backgroundColor: `${p.brandColor}15`, color: p.brandColor }}
                  >
                    {p.name.charAt(0)}
                  </div>
                  <div className="text-center">
                    <p className="font-montserrat text-base font-bold text-charcoal">
                      {p.name}
                    </p>
                    <p className="mt-0.5 text-xs text-charcoal/55">{p.desc}</p>
                  </div>
                  <span
                    className="mt-auto flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-opacity group-hover:opacity-90"
                    style={{ backgroundColor: p.brandColor }}
                  >
                    {t("orderOn")} {p.name}
                    <ExternalLink size={11} />
                  </span>
                </a>
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
          <StaggerChildren className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item, i) => {
              const Icon = ICON_LIST[i] ?? Package;
              return (
                <StaggerItem key={item.title}>
                  <div className="rounded-2xl bg-white p-6 shadow-(--shadow-soft) text-center transition-shadow hover:shadow-(--shadow-card)">
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
      {DELIVERY_ITEMS.length > 0 && (
        <section className="section-padding bg-rose-blush">
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
      )}

      {/* Packaging */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <FadeUp delay={0.15} className="flex-1">
              <span className="font-bebas text-sm font-semibold tracking-widest text-rose-medium uppercase">
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
                    <li key={i} className="flex items-start gap-2 text-charcoal/75 text-sm">
                      <span className="mt-0.5">{EMOJIS[i]}</span>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </FadeUp>
            <FadeUp className="flex-1">
              {/* IMAGEN REAL: foto del packaging/caja kraft Mamitas */}
              {/* Tamaño recomendado: 800×600px, orientación horizontal */}
              <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-(--shadow-card)">
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

      {/* CTA — usa rose en lugar de tropical-green para contraste correcto */}
      <section className="bg-linear-to-br from-rose-medium to-rose-dark py-16 text-center">
        <FadeUp>
          <Truck className="mx-auto mb-4 text-white/80" size={40} />
          <h2 className="font-montserrat text-2xl font-bold text-white md:text-3xl">
            {t("cta.title")}
          </h2>
          <p className="mt-3 text-white/85 max-w-md mx-auto">{t("cta.subtitle")}</p>
          <a
            href={SITE_CONFIG.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-rose-dark shadow-lg shadow-rose-dark/20 transition-transform hover:scale-105"
          >
            <MessageCircle size={22} className="fill-rose-medium text-rose-medium" />
            {t("cta.button")}
          </a>
        </FadeUp>
      </section>
    </>
  );
}
