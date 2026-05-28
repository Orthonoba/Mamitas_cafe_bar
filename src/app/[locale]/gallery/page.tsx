import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";
import { FadeUp } from "@/components/animations";
import { GalleryClient } from "./GalleryClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gallery.seo" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/gallery",
    locale,
  });
}

export default async function GalleryPage() {
  const t = await getTranslations("gallery");

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-charcoal to-espresso py-28 text-center">
        <FadeUp>
          <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-soft uppercase">
            {t("hero.eyebrow")}
          </span>
          <h1 className="font-montserrat text-4xl font-black text-white md:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{t("hero.description")}</p>
        </FadeUp>
      </section>

      <GalleryClient />
    </>
  );
}
