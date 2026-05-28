import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { MENU_ITEMS } from "@/lib/data/menu-items";
import { MenuCard } from "@/components/menu/MenuCard";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Clock, Calendar, MessageCircle } from "lucide-react";

export const metadata = buildMetadata({
  title: "Brunch Tropical Venezolano — Sábados y Domingos en Lugano",
  description:
    "El mejor brunch latino de Lugano cada sábado y domingo de 10:00 a 14:00. Arepas, açaí bowls, french toast de coco, mimosas tropicales y más. Mamitas Caffe & Bar.",
  path: "/brunch",
  keywords: [
    "brunch lugano sabato domenica",
    "brunch latino lugano",
    "brunch venezolano lugano",
    "colazione lugano",
    "brunch con mimosa lugano",
  ],
});

const BRUNCH_ITEMS = MENU_ITEMS.filter((i) => i.category === "brunch");

const BRUNCH_INFO = [
  { icon: Calendar, label: "Cuándo", value: "Sábado & Domingo" },
  { icon: Clock, label: "Horario", value: "10:00 – 14:00" },
  { icon: MessageCircle, label: "Reservas", value: "Por WhatsApp" },
];

export default function BrunchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1920&q=85"
          alt="Brunch tropical Mamitas"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/70 via-charcoal/40 to-charcoal/80" />

        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
          <FadeUp>
            <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-soft uppercase">
              Sábado & Domingo · 10:00 – 14:00
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-montserrat text-4xl font-black leading-tight text-white drop-shadow md:text-6xl lg:text-7xl">
              Brunch Tropical
              <br />
              <span className="text-gradient-rose">de Mamitas</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/85 drop-shadow">
              El único brunch venezolano de Lugano. Colores tropicales, sabores
              auténticos y la energía latina que te hará olvidar que es lunes mañana.
            </p>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rose-medium px-8 py-4 font-semibold text-white shadow-lg hover:bg-rose-dark transition-colors"
              >
                <MessageCircle size={20} />
                Reservar Mesa
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-charcoal transition-colors"
              >
                Ver Menú Completo
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Info strip */}
      <section className="bg-tropical-green py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-3 gap-4 text-center text-white">
            {BRUNCH_INFO.map((info) => (
              <div key={info.label} className="flex flex-col items-center gap-1">
                <info.icon size={22} className="text-white/70" />
                <p className="text-xs uppercase tracking-wide text-white/60">{info.label}</p>
                <p className="font-montserrat font-bold">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brunch Menu */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="La Carta"
            title="El Brunch más Latino de Suiza"
            subtitle="Cada plato es una experiencia. Cada sorbo, un recuerdo."
          />

          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BRUNCH_ITEMS.map((item) => (
              <StaggerItem key={item.id}>
                <MenuCard item={item} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Experience section */}
      <section className="section-padding bg-warm-beige">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <FadeUp className="flex-1">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                  alt="Ambiente brunch Mamitas"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="flex-1">
              <span className="font-bebas text-sm tracking-widest text-rose-medium uppercase">
                La Experiencia
              </span>
              <h2 className="font-montserrat mt-2 text-3xl font-bold text-charcoal">
                No es solo desayuno.
                <br />
                Es un ritual.
              </h2>
              <p className="mt-4 text-charcoal/70 leading-relaxed">
                Cada fin de semana transformamos Mamitas en el rincón más
                tropical de Lugano. Música latina, colores vibrantes, aromas de
                Venezuela y un equipo que cocina con el alma.
              </p>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                Ven con tu pareja, tu familia o tus amigos. Aquí todos son
                bienvenidos y nadie se va con hambre.
              </p>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose-medium hover:text-rose-dark transition-colors"
              >
                Ver fotos del brunch en Instagram →
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-blush py-20 text-center">
        <FadeUp>
          <h2 className="font-montserrat text-2xl font-bold text-charcoal md:text-3xl">
            ¿Este fin de semana?
          </h2>
          <p className="mt-3 text-charcoal/70">
            Las mesas se agotan — reserva por WhatsApp antes del viernes
          </p>
          <a
            href={SITE_CONFIG.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-rose-medium px-10 py-4 font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle size={22} />
            Reservar Brunch Ahora
          </a>
        </FadeUp>
      </section>
    </>
  );
}
