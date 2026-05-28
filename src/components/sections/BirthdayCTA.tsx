import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PartyPopper, Sparkles, Music } from "lucide-react";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { Button } from "@/components/ui/button";

const HIGHLIGHT_ICONS = [PartyPopper, Sparkles, Music];

export async function BirthdayCTA() {
  const t = await getTranslations("birthdayCta");
  const highlights = [t("highlight1"), t("highlight2"), t("highlight3")];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-linear-to-br from-rose-blush via-rose-soft/40 to-warm-beige" />
      <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-rose-medium/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-tropical-green/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <FadeUp>
          <span className="font-bebas mb-2 inline-block text-sm tracking-[0.3em] text-rose-dark uppercase">
            {t("eyebrow")}
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="font-bebas text-5xl leading-none text-charcoal md:text-7xl">
            {t("title")}
            <br />
            <span className="text-gradient-rose">{t("titleHighlight")}</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-charcoal/70">{t("description")}</p>
        </FadeUp>

        <StaggerChildren className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {highlights.map((text, i) => {
            const Icon = HIGHLIGHT_ICONS[i] ?? Sparkles;
            return (
              <StaggerItem key={text}>
                <div className="flex items-center gap-2 rounded-full bg-white/70 px-5 py-2.5 text-sm font-medium text-charcoal shadow-sm backdrop-blur-sm">
                  <Icon size={16} className="text-rose-medium shrink-0" />
                  {text}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        <FadeUp delay={0.4}>
          <Button
            render={<Link href="/birthdays" />}
            size="lg"
            className="mt-10 rounded-full bg-rose-medium px-10 py-6 text-base font-semibold text-white shadow-lg shadow-rose-medium/30 hover:bg-rose-dark"
          >
            {t("button")}
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
