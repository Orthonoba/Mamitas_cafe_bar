import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_CONFIG } from "@/lib/constants/site";
import { FadeUp } from "@/components/animations";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = buildMetadata({
  title: "Contacto — Mamitas Caffe & Bar Lugano",
  description:
    "Contacta con Mamitas Caffe & Bar en Lugano. Encuentra nuestra dirección, horarios, teléfono y formulario de contacto. ¡Estamos aquí para ayudarte!",
  path: "/contact",
  keywords: ["contacto mamitas lugano", "direccion cafe venezolano lugano", "reservas lugano"],
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-charcoal to-espresso py-28 text-center">
        <FadeUp>
          <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-soft uppercase">
            Contacto
          </span>
          <h1 className="font-montserrat text-4xl font-black text-white md:text-6xl">
            Estamos en Lugano
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            ¿Tienes alguna pregunta o quieres hacer una reserva? Escríbenos,
            estamos aquí para ayudarte.
          </p>
        </FadeUp>
      </section>

      {/* Main content */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left: Info + Map */}
            <FadeUp className="space-y-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <MapPin className="mb-3 text-rose-medium" size={22} />
                  <h3 className="font-semibold text-charcoal">Dirección</h3>
                  <p className="mt-1 text-sm text-charcoal/60">
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.canton}
                    <br />
                    {SITE_CONFIG.address.country}
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <Phone className="mb-3 text-rose-medium" size={22} />
                  <h3 className="font-semibold text-charcoal">Teléfono</h3>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone}`}
                    className="mt-1 block text-sm text-charcoal/60 transition-colors hover:text-rose-medium"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <Mail className="mb-3 text-rose-medium" size={22} />
                  <h3 className="font-semibold text-charcoal">Email</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="mt-1 block break-all text-sm text-charcoal/60 transition-colors hover:text-rose-medium"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <Clock className="mb-3 text-rose-medium" size={22} />
                  <h3 className="font-semibold text-charcoal">Horarios</h3>
                  <div className="mt-1 space-y-1">
                    {SITE_CONFIG.hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between text-xs text-charcoal/60"
                      >
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="mb-3 font-semibold text-charcoal">Síguenos</h3>
                <div className="flex gap-3">
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-rose-blush px-4 py-2 text-sm font-medium text-rose-dark transition-colors hover:bg-rose-soft"
                  >
                    <Instagram size={16} />
                    Instagram
                  </a>
                  <a
                    href={SITE_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
                  >
                    <Facebook size={16} />
                    Facebook
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-2xl shadow-sm">
                <iframe
                  src={SITE_CONFIG.address.googleMapsEmbed}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mamitas Caffe & Bar en Lugano"
                />
              </div>
            </FadeUp>

            {/* Right: Contact form (client component) */}
            <FadeUp delay={0.15}>
              <ContactForm />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
