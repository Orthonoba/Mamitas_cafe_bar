import { buildMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/Hero";
import { FeaturesStrip } from "@/components/sections/FeaturesStrip";
import { BestSellers } from "@/components/sections/BestSellers";
import { BirthdayCTA } from "@/components/sections/BirthdayCTA";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhatsAppCTA } from "@/components/sections/WhatsAppCTA";

export const metadata = buildMetadata({
  title: "Arepas & Brunch Venezolano en Lugano",
  description:
    "Mamitas Caffe & Bar en Lugano — arepas venezolanas auténticas, brunch latinoamericano, café de especialidad y fiestas de cumpleaños infantiles. Un pedazo de Venezuela en el corazón del Ticino.",
  path: "/",
  keywords: ["cafe venezolano lugano", "arepas lugano", "brunch lugano"],
});

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Mamitas Caffe & Bar · Lugano"
        title="Sabores latinos en el corazón de Lugano"
        subtitle="Arepas venezolanas auténticas, brunch tropical y fiestas de cumpleaños inolvidables. Un pedacito de Venezuela en el Ticino."
        ctaPrimary={{ label: "Ver Menú", href: "/menu" }}
        ctaSecondary={{ label: "Reservar Fiesta", href: "/birthdays" }}
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
