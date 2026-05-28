import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { Heart, Coffee, Star, Users } from "lucide-react";

export const metadata = buildMetadata({
  title: "Nuestra Historia — De Barquisimeto a Lugano",
  description:
    "Conoce la historia de Mamitas Caffe & Bar: una familia venezolana de Barquisimeto que llevó el sabor de Venezuela al corazón de Lugano, Suiza.",
  path: "/about",
  keywords: ["restaurante venezolano lugano historia", "familia venezolana suiza"],
});

const VALUES = [
  {
    icon: Heart,
    title: "Cocinado con Amor",
    description:
      "Cada arepa, cada café y cada postre lleva el amor de nuestra familia venezolana.",
  },
  {
    icon: Coffee,
    title: "Autenticidad",
    description:
      "Recetas originales de Barquisimeto que conservamos con orgullo y fidelidad.",
  },
  {
    icon: Star,
    title: "Calidad",
    description:
      "Ingredientes frescos y de primera calidad, seleccionados cada día para ti.",
  },
  {
    icon: Users,
    title: "Familia",
    description:
      "Tratamos a cada cliente como parte de nuestra familia venezolana extendida.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal py-28">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <FadeUp>
            <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-soft uppercase">
              Nuestra Historia
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-montserrat text-4xl font-black text-white md:text-6xl">
              De Barquisimeto
              <br />
              <span className="text-gradient-rose">a Lugano</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70 leading-relaxed">
              Un viaje de miles de kilómetros, una cultura que no se puede dejar
              atrás, y el deseo de compartir lo mejor de Venezuela con el mundo.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Block 1 */}
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <FadeUp className="flex-1">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1609590981063-d495f5096177?w=800&q=80"
                  alt="Barquisimeto, Venezuela"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="flex-1">
              <span className="font-bebas text-sm tracking-widest text-rose-medium uppercase">
                El origen
              </span>
              <h2 className="font-montserrat mt-2 text-3xl font-bold text-charcoal">
                Raíces en Barquisimeto
              </h2>
              <p className="mt-4 text-charcoal/70 leading-relaxed">
                Todo comenzó en las cocinas de Barquisimeto, la Ciudad Musical de
                Venezuela, donde aprendimos a preparar arepas con la masa perfecta,
                a filtrar el café guayoyo con paciencia, y a hacer el quesillo con la
                receta de la abuela.
              </p>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                Venezuela nos enseñó que la comida es amor compartido. Que una
                mesa bien puesta es sinónimo de familia reunida. Y que el sabor
                auténtico nunca se olvida.
              </p>
            </FadeUp>
          </div>

          {/* Block 2 */}
          <div className="mt-20 flex flex-col items-center gap-12 md:flex-row-reverse">
            <FadeUp className="flex-1">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&q=80"
                  alt="Lugano, Suiza"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="flex-1">
              <span className="font-bebas text-sm tracking-widest text-rose-medium uppercase">
                El destino
              </span>
              <h2 className="font-montserrat mt-2 text-3xl font-bold text-charcoal">
                Un hogar en Lugano
              </h2>
              <p className="mt-4 text-charcoal/70 leading-relaxed">
                Llegamos a Lugano con las maletas llenas de recetas, sueños y
                mucho sabor venezolano. La ciudad nos recibió con los brazos
                abiertos, y nosotros la correspondimos con lo que mejor sabemos
                hacer: cocinar con el corazón.
              </p>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                Mamitas Caffe & Bar nació de ese encuentro entre la calidad suiza
                y la calidez venezolana. Un espacio donde la comunidad latina y los
                amigos locales se reúnen alrededor de sabores que transportan.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Venezuelan culture strip */}
      <section className="bg-warm-beige py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <FadeUp>
              <h2 className="font-montserrat text-3xl font-bold text-charcoal md:text-4xl">
                Un poco de Venezuela en cada visita
              </h2>
            </FadeUp>
          </div>
          <StaggerChildren className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              { emoji: "🫓", label: "Arepas Auténticas" },
              { emoji: "☕", label: "Café Guayoyo" },
              { emoji: "🎉", label: "Fiestas Latinas" },
              { emoji: "❤️", label: "Amor Venezolano" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <span className="text-4xl">{item.emoji}</span>
                  <p className="mt-3 font-montserrat text-sm font-semibold text-charcoal">
                    {item.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <FadeUp>
              <span className="font-bebas mb-2 block text-sm tracking-[0.25em] text-rose-medium uppercase">
                Nuestros valores
              </span>
              <h2 className="font-montserrat text-3xl font-bold text-charcoal md:text-4xl">
                Lo que nos define
              </h2>
            </FadeUp>
          </div>
          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <StaggerItem key={v.title}>
                <div className="rounded-2xl bg-white p-6 shadow-sm text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-blush">
                    <v.icon className="text-rose-medium" size={24} />
                  </div>
                  <h3 className="font-montserrat text-base font-bold text-charcoal">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-tropical-green py-20 text-center">
        <FadeUp>
          <h2 className="font-montserrat text-2xl font-bold text-white md:text-3xl">
            Ven a conocernos
          </h2>
          <p className="mt-3 text-white/80">
            Lugano, Suiza · Abierto todos los días
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-tropical-green-dark shadow-lg transition-transform hover:scale-105"
          >
            Cómo llegar
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
