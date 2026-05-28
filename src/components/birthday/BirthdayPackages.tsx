import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Check, X, Sparkles, PartyPopper, Crown } from "lucide-react";
import { BIRTHDAY_PACKAGES } from "@/lib/data/birthday-packages";
import { formatPrice } from "@/lib/utils/formatters";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { cn } from "@/lib/utils";

const ICON_MAP = { Sparkles, PartyPopper, Crown };

export async function BirthdayPackages() {
  const t = await getTranslations("birthdays.packages");

  return (
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mb-12 text-center">
            <span className="font-bebas mb-2 block text-sm font-semibold tracking-[0.25em] text-rose-medium uppercase">
              {t("eyebrow")}
            </span>
            <h2 className="font-montserrat text-3xl font-bold text-charcoal md:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-charcoal/60">{t("subtitle")}</p>
          </div>
        </FadeUp>

        <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {BIRTHDAY_PACKAGES.map((pkg) => {
            const Icon = ICON_MAP[pkg.icon as keyof typeof ICON_MAP] ?? Sparkles;
            return (
              <StaggerItem key={pkg.id}>
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border-2 bg-white p-8 shadow-(--shadow-card) transition-transform hover:-translate-y-1",
                    pkg.isPopular
                      ? "border-rose-medium scale-[1.03] shadow-(--shadow-hover)"
                      : "border-transparent"
                  )}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-rose-medium px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow">
                        {t("popular")}
                      </span>
                    </div>
                  )}

                  <div className="mb-6 flex items-start gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
                        pkg.isPopular ? "bg-rose-blush" : "bg-rose-blush"
                      )}
                    >
                      <Icon
                        size={24}
                        className={pkg.isPopular ? "text-rose-dark" : "text-rose-medium"}
                      />
                    </div>
                    <div>
                      <h3 className="font-montserrat text-xl font-bold text-charcoal">
                        {pkg.name}
                      </h3>
                      <p className="text-sm text-charcoal/60">{pkg.subtitle}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <span className="font-montserrat text-4xl font-black text-charcoal">
                      {formatPrice(pkg.price)}
                    </span>
                    {pkg.priceNote && (
                      <p className="mt-1 text-xs text-charcoal/50">{pkg.priceNote}</p>
                    )}
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2.5">
                        {f.included ? (
                          <Check size={16} className="mt-0.5 shrink-0 text-rose-medium" />
                        ) : (
                          <X size={16} className="mt-0.5 shrink-0 text-charcoal/25" />
                        )}
                        <span
                          className={cn(
                            "text-sm",
                            f.included ? "text-charcoal/80" : "text-charcoal/35"
                          )}
                        >
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/birthdays#reservar?package=${pkg.id}` as "/"}
                    className={cn(
                      "block rounded-full py-3.5 text-center text-sm font-semibold transition-colors",
                      pkg.isPopular
                        ? "bg-rose-medium text-white hover:bg-rose-dark"
                        : "border-2 border-rose-medium text-rose-medium hover:bg-rose-medium hover:text-white"
                    )}
                  >
                    {t("select")}
                  </Link>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
