import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";
import { BirthdayPackages } from "@/components/birthday/BirthdayPackages";
import { BirthdayForm } from "@/components/birthday/BirthdayForm";
import { BirthdayFAQ } from "@/components/birthday/BirthdayFAQ";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { FadeUp } from "@/components/animations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "birthdays.seo" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/birthdays",
    locale,
  });
}

export default async function BirthdaysPage() {
  const t = await getTranslations("birthdays");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-rose-blush via-rose-soft/30 to-warm-beige py-28 text-center">
        <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-rose-medium/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-tropical-green/15 blur-3xl" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {["🎈", "🎉", "🎊", "⭐", "🎂"].map((emoji, i) => (
            <span
              key={i}
              className="absolute text-2xl opacity-20"
              style={{
                left: `${10 + i * 20}%`,
                top: `${15 + (i % 3) * 25}%`,
                transform: `rotate(${i * 15}deg)`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>

        <div className="relative mx-auto max-w-3xl px-4">
          <FadeUp>
            <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-dark uppercase">
              {t("hero.eyebrow")}
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-montserrat text-4xl font-black text-charcoal md:text-6xl">
              {t("hero.title")}
              <br />
              <span className="text-gradient-rose">{t("hero.titleHighlight")}</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-charcoal/70 leading-relaxed">
              {t("hero.description")}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Packages */}
      <BirthdayPackages />

      {/* Form */}
      <section className="section-padding bg-warm-beige">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <FadeUp>
              <span className="font-bebas mb-2 block text-sm tracking-[0.25em] text-rose-medium uppercase">
                {t("form.eyebrow")}
              </span>
              <h2 className="font-montserrat text-3xl font-bold text-charcoal md:text-4xl">
                {t("form.title")}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-charcoal/60">{t("form.description")}</p>
            </FadeUp>
          </div>
          <FadeUp delay={0.15}>
            <BirthdayForm />
          </FadeUp>
        </div>
      </section>

      {/* Gallery preview */}
      <GalleryPreview />

      {/* FAQ */}
      <BirthdayFAQ />
    </>
  );
}
