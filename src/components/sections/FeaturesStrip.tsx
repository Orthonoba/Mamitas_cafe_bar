import { Coffee, Cake, Baby, MapPin } from "lucide-react";
import { StaggerChildren, StaggerItem } from "@/components/animations";

const FEATURES = [
  {
    icon: Coffee,
    title: "Café Venezolano",
    description: "Guayoyo y tetero auténticos, recetas de Barquisimeto",
  },
  {
    icon: Cake,
    title: "Postres Artesanales",
    description: "Quesillo, bienmesabe y dulces típicos venezolanos",
  },
  {
    icon: Baby,
    title: "Zona Infantil",
    description: "Mini parque y fiestas de cumpleaños para los más pequeños",
  },
  {
    icon: MapPin,
    title: "Corazón de Lugano",
    description: "Un rincón tropical en el Ticino suizo",
  },
];

export function FeaturesStrip() {
  return (
    <section className="bg-tropical-green py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerChildren className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="font-montserrat text-base font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
