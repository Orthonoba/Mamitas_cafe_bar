import { getTranslations } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp } from "@/components/animations";

export async function BirthdayFAQ() {
  const t = await getTranslations("birthdays.faq");
  const items = t.raw("items") as Array<{ q: string; a: string }>;

  return (
    <section className="section-padding bg-warm-beige">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <FadeUp delay={0.15}>
          <Accordion multiple={false} className="space-y-3">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border-0 bg-white shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-charcoal hover:no-underline hover:text-rose-dark">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm leading-relaxed text-charcoal/70">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}
