import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/data/menu-items";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { QRSection } from "@/components/qr/QRSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "menu.seo" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/menu",
    locale,
  });
}

export default async function MenuPage() {
  const t = await getTranslations("menu");

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-charcoal via-espresso to-charcoal py-28 text-center">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_120%,#F4A7B9,transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4">
          <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-soft uppercase">
            {t("hero.eyebrow")}
          </span>
          <h1 className="font-montserrat text-4xl font-black text-white md:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{t("hero.description")}</p>
        </div>
      </section>

      {/* Menu grid with filter */}
      <div className="bg-cream">
        <MenuGrid items={MENU_ITEMS} categories={MENU_CATEGORIES} />
      </div>

      {/* QR Section */}
      <QRSection />
    </>
  );
}
