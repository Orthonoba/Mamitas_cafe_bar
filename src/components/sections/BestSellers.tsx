import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { POPULAR_ITEMS } from "@/lib/data/menu-items";
import { MenuCard } from "@/components/menu/MenuCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerChildren, StaggerItem } from "@/components/animations";

export async function BestSellers() {
  const t = await getTranslations("bestSellers");
  const items = POPULAR_ITEMS.slice(0, 6);

  return (
    <section className="section-padding bg-tropical-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <MenuCard item={item} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-full border-2 border-charcoal px-8 py-3 font-semibold text-charcoal transition-colors hover:bg-charcoal hover:text-white"
          >
            {t("viewAll")}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
