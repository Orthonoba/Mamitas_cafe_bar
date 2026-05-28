import { buildMetadata } from "@/lib/seo/metadata";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/data/menu-items";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { QRSection } from "@/components/qr/QRSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata = buildMetadata({
  title: "Menú — Arepas, Brunch & Café",
  description:
    "Descubre nuestro menú venezolano completo: arepas, desayunos, panini, postres, bebidas tropicales y más. Todo preparado con amor en Lugano.",
  path: "/menu",
  keywords: ["menu venezolano lugano", "carta arepas lugano", "desayuno lugano"],
});

export default function MenuPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-charcoal via-espresso to-charcoal py-28 text-center">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_120%,#F4A7B9,transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-4">
          <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-soft uppercase">
            Nuestra Carta
          </span>
          <h1 className="font-montserrat text-4xl font-black text-white md:text-6xl">
            El Menú de Mamitas
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Sabores auténticos de Venezuela preparados con ingredientes frescos
            y mucho amor en el corazón de Lugano.
          </p>
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
