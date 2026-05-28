import { getTranslations } from "next-intl/server";
import { Coffee, Cake, Baby, MapPin } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/animations";

const ICONS = [Coffee, Cake, Baby, MapPin];

export async function FeaturesStrip() {
  const t = await getTranslations("features");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section className="bg-tropical-green py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerChildren className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {items.map((feature, i) => {
            const Icon = ICONS[i] ?? Coffee;
            return (
              <StaggerItem key={feature.title}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-montserrat text-base font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
