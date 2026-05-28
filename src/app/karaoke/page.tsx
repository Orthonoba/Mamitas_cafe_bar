import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { MENU_ITEMS } from "@/lib/data/menu-items";
import { MenuCard } from "@/components/menu/MenuCard";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Mic, Music, Calendar, Clock, MessageCircle } from "lucide-react";

export const metadata = buildMetadata({
  title: "Latin Karaoke Nights — Viernes y Sábados en Lugano",
  description:
    "La noche más latina de Lugano cada viernes y sábado en Mamitas Caffe & Bar. Karaoke en español, cócteles tropicales, tapas venezolanas y energía latina sin límites.",
  path: "/karaoke",
  keywords: [
    "karaoke lugano",
    "karaoke notti lugano",
    "serata latina lugano",
    "karaoke venerdì sabato lugano",
    "latin night lugano",
    "bar karaoke lugano",
  ],
});

const KARAOKE_ITEMS = MENU_ITEMS.filter((i) => i.category === "karaoke");

const SCHEDULE = [
  { time: "19:00", event: "Aperitivo & Bienvenida", desc: "Tabla Karaoke + primeras canciones" },
  { time: "20:30", event: "El Karaoke Empieza", desc: "Salsa, reggaeton, bachata, pop latino" },
  { time: "22:00", event: "Hora Pico", desc: "Máxima energía — el local se transforma" },
  { time: "00:00", event: "Encore & Cierre", desc: "Las últimas canciones y los mejores recuerdos" },
];

const GENRES = ["Salsa", "Reggaeton", "Bachata", "Vallenato", "Pop Latino", "Rock en Español", "Merengue", "Cumbia"];

export default function KaraokePage() {
  return (
    <>
      {/* Hero — dark & energetic */}
      <section className="relative min-h-[80vh] overflow-hidden bg-charcoal">
        {/* Moody dark gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-charcoal via-espresso to-charcoal/95" />
        {/* Neon glow effect */}
        <div className="absolute inset-0 bg-linear-to-br from-rose-medium/20 via-transparent to-tropical-green/20" />

        <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
          <FadeUp>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-medium/20 px-4 py-2 backdrop-blur-sm">
              <Mic size={16} className="text-rose-soft" />
              <span className="text-sm font-medium text-rose-soft">Cada Viernes & Sábado</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-bebas text-5xl leading-none text-white drop-shadow md:text-8xl">
              LATIN
              <br />
              <span className="text-gradient-rose">KARAOKE</span>
              <br />
              NIGHTS
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/75">
              La noche más latina de Lugano. Canta, baila, bebe y ríe.
              <br />
              Todos son bienvenidos. Nadie juzga la afinación.
            </p>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE_CONFIG.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-rose-medium px-8 py-4 font-semibold text-white shadow-lg hover:bg-rose-dark transition-colors"
              >
                <MessageCircle size={20} />
                Reservar Mesa VIP
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/50 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                Ver Highlights →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Info + schedule */}
      <section className="section-padding bg-charcoal text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Schedule */}
            <FadeUp>
              <h2 className="font-montserrat mb-8 text-2xl font-bold">
                La noche, paso a paso
              </h2>
              <div className="space-y-4">
                {SCHEDULE.map((item) => (
                  <div key={item.time} className="flex gap-4 rounded-2xl bg-white/5 p-5">
                    <div className="flex-shrink-0 text-center">
                      <Clock size={16} className="mx-auto mb-1 text-rose-soft" />
                      <span className="font-bebas text-xl text-rose-soft">{item.time}</span>
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold">{item.event}</p>
                      <p className="mt-0.5 text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Genres + info */}
            <FadeUp delay={0.15}>
              <h2 className="font-montserrat mb-8 text-2xl font-bold">
                Géneros disponibles
              </h2>
              <div className="flex flex-wrap gap-2 mb-10">
                {GENRES.map((g) => (
                  <span
                    key={g}
                    className="rounded-full bg-rose-medium/20 px-4 py-2 text-sm font-medium text-rose-soft"
                  >
                    🎵 {g}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  { icon: Calendar, text: "Todos los viernes y sábados" },
                  { icon: Clock, text: "19:00 – 00:00 (último turno)" },
                  { icon: Mic, text: "Equipo de sonido profesional" },
                  { icon: Music, text: "+10.000 canciones en español e italiano" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-white/80">
                    <item.icon size={18} className="text-tropical-green shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-rose-medium/10 border border-rose-medium/20 p-5">
                <p className="font-semibold text-rose-soft">Mesa VIP Karaoke</p>
                <p className="mt-1 text-sm text-white/70">
                  Reserva tu mesa con antelación y recibe una Tabla Karaoke de bienvenida.
                  Perfecto para despedidas de soltero/a, cumpleaños y grupos.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Karaoke Menu */}
      <section className="section-padding bg-espresso">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Menú de la Noche"
            title="Para cantar mejor"
            subtitle="Selección especial diseñada para las noches de karaoke"
            light={true}
          />

          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {KARAOKE_ITEMS.map((item) => (
              <StaggerItem key={item.id}>
                <MenuCard item={item} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-rose-dark via-rose-medium to-rose-soft py-20 text-center">
        <FadeUp>
          <Mic className="mx-auto mb-4 text-white/80" size={48} />
          <h2 className="font-bebas text-4xl text-white md:text-6xl">
            ¿TE ATREVES A CANTAR?
          </h2>
          <p className="mt-3 text-white/80 text-lg">
            Aquí nadie juzga. Solo aplaudimos.
          </p>
          <a
            href={SITE_CONFIG.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 font-semibold text-rose-dark shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle size={22} className="text-rose-medium" />
            Reservar para este Viernes
          </a>
        </FadeUp>
      </section>
    </>
  );
}
