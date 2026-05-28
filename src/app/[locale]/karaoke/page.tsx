import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";
import { MENU_ITEMS } from "@/lib/data/menu-items";
import { MenuCard } from "@/components/menu/MenuCard";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Mic, Music, Calendar, Clock, MessageCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "karaoke.seo" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/karaoke",
    locale,
  });
}

const KARAOKE_ITEMS = MENU_ITEMS.filter((i) => i.category === "karaoke");

export default async function KaraokePage() {
  const t = await getTranslations("karaoke");

  const schedule = t.raw("schedule") as Array<{
    time: string;
    event: string;
    desc: string;
  }>;

  const genres = t.raw("genres") as string[];
  const details = t.raw("details") as string[];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-linear-to-br from-charcoal via-espresso to-charcoal/95" />
        <div className="absolute inset-0 bg-linear-to-br from-rose-medium/20 via-transparent to-tropical-green/20" />

        <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
          <FadeUp>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-medium/20 px-4 py-2 backdrop-blur-sm">
              <Mic size={16} className="text-rose-soft" />
              <span className="text-sm font-medium text-rose-soft">{t("hero.badge")}</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-bebas text-5xl leading-none text-white drop-shadow md:text-8xl">
              LATIN
              <br />
              <span className="text-gradient-rose">KARAOKE</span>
              <br />
              NIGHTS
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/75 whitespace-pre-line">
              {t("hero.description")}
            </p>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rose-medium px-8 py-4 font-semibold text-white shadow-lg hover:bg-rose-dark transition-colors"
              >
                <MessageCircle size={20} />
                {t("hero.ctaReserve")}
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/50 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                {t("hero.ctaHighlights")}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Info + schedule */}
      <section className="section-padding bg-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Schedule */}
            <FadeUp>
              <h2 className="font-montserrat mb-8 text-2xl font-bold">{t("scheduleTitle")}</h2>
              <div className="space-y-4">
                {schedule.map((item) => (
                  <div key={item.time} className="flex gap-4 rounded-2xl bg-white/5 p-5">
                    <div className="flex-shrink-0 text-center">
                      <Clock size={16} className="mx-auto mb-1 text-rose-soft" />
                      <span className="font-bebas text-xl text-rose-soft">{item.time}</span>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold">{item.event}</p>
                      <p className="mt-0.5 text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Genres + info */}
            <FadeUp delay={0.15}>
              <h2 className="font-montserrat mb-8 text-2xl font-bold">{t("genresTitle")}</h2>
              <div className="flex flex-wrap gap-2 mb-10">
                {genres.map((g) => (
                  <span
                    key={g}
                    className="rounded-full bg-rose-medium/20 px-4 py-2 text-sm font-medium text-rose-soft"
                  >
                    🎵 {g}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  { icon: Calendar, text: details[0] },
                  { icon: Clock, text: details[1] },
                  { icon: Mic, text: details[2] },
                  { icon: Music, text: details[3] },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-white/80">
                    <item.icon size={18} className="text-tropical-green shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-rose-medium/10 border border-rose-medium/20 p-5">
                <p className="font-semibold text-rose-soft">{t("vip.title")}</p>
                <p className="mt-1 text-sm text-white/70">{t("vip.description")}</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Karaoke Menu */}
      <section className="section-padding bg-espresso">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow={t("menuSection.eyebrow")}
            title={t("menuSection.title")}
            subtitle={t("menuSection.subtitle")}
            light={true}
          />
          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {KARAOKE_ITEMS.map((item) => (
              <StaggerItem key={item.id}>
                <MenuCard item={item} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-rose-dark via-rose-medium to-rose-soft py-20 text-center">
        <FadeUp>
          <Mic className="mx-auto mb-4 text-white/80" size={48} />
          <h2 className="font-bebas text-4xl text-white md:text-6xl">{t("cta.title")}</h2>
          <p className="mt-3 text-white/80 text-lg">{t("cta.subtitle")}</p>
          <a
            href={SITE_CONFIG.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 font-semibold text-rose-dark shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle size={22} className="text-rose-medium" />
            {t("cta.button")}
          </a>
        </FadeUp>
      </section>
    </>
  );
}
