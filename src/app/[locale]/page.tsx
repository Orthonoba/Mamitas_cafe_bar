import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/Hero";
import { FeaturesStrip } from "@/components/sections/FeaturesStrip";
import { BestSellers } from "@/components/sections/BestSellers";
import { BirthdayCTA } from "@/components/sections/BirthdayCTA";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhatsAppCTA } from "@/components/sections/WhatsAppCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.seo" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/",
    locale,
  });
}

export default async function HomePage() {
  const t = await getTranslations("home");

  return (
    <>
      <Hero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
        ctaPrimary={{ label: t("ctaMenu"), href: "/menu" }}
        ctaSecondary={{ label: t("ctaBirthday"), href: "/birthdays" }}
      />
      <FeaturesStrip />
      <BestSellers />
      <BirthdayCTA />
      <GalleryPreview />
      <TestimonialsSection />
      <WhatsAppCTA />
    </>
  );
}
