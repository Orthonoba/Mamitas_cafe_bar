import { buildMetadata } from "@/lib/seo/metadata";
import { BirthdayPackages } from "@/components/birthday/BirthdayPackages";
import { BirthdayForm } from "@/components/birthday/BirthdayForm";
import { BirthdayFAQ } from "@/components/birthday/BirthdayFAQ";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { FadeUp } from "@/components/animations";

export const metadata = buildMetadata({
  title: "Fiestas de Cumpleaños Infantiles en Lugano",
  description:
    "Organiza la fiesta de cumpleaños perfecta en Mamitas Caffe & Bar, Lugano. Mini parque infantil, menú venezolano, decoración temática. 3 paquetes disponibles desde CHF 25.",
  path: "/birthdays",
  keywords: [
    "fiestas cumpleaños infantiles lugano",
    "cumpleaños niños lugano",
    "party bambini lugano",
    "fiesta venezolana lugano",
  ],
});

export default function BirthdaysPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-rose-blush via-rose-soft/30 to-warm-beige py-28 text-center">
        <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-rose-medium/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-tropical-green/15 blur-3xl" />

        {/* Confetti dots decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {["🎈", "🎉", "🎊", "⭐", "🎂"].map((emoji, i) => (
            <span
              key={i}
              className="absolute text-2xl opacity-20"
              style={{
                left: `${10 + i * 20}%`,
                top: `${15 + (i % 3) * 25}%`,
                transform: `rotate(${i * 15}deg)`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>

        <div className="relative mx-auto max-w-3xl px-4">
          <FadeUp>
            <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-dark uppercase">
              Zona Infantil · Mamitas
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-montserrat text-4xl font-black text-charcoal md:text-6xl">
              Fiestas de
              <br />
              <span className="text-gradient-rose">Cumpleaños</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-charcoal/70 leading-relaxed">
              Hacemos realidad la fiesta que tu pequeño siempre soñó. Mini
              parque, menú venezolano, decoración mágica y momentos que nunca
              olvidarán.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Packages */}
      <BirthdayPackages />

      {/* Form */}
      <section className="section-padding bg-warm-beige">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <FadeUp>
              <span className="font-bebas mb-2 block text-sm tracking-[0.25em] text-rose-medium uppercase">
                Reservar
              </span>
              <h2 className="font-montserrat text-3xl font-bold text-charcoal md:text-4xl">
                ¡Empieza la fiesta!
              </h2>
              <p className="mx-auto mt-3 max-w-md text-charcoal/60">
                Completa el formulario y te contactamos en menos de 24 horas para
                confirmar todos los detalles.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.15}>
            <BirthdayForm />
          </FadeUp>
        </div>
      </section>

      {/* Gallery preview */}
      <GalleryPreview />

      {/* FAQ */}
      <BirthdayFAQ />
    </>
  );
}
