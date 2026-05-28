import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_CONFIG } from "@/lib/constants/site";
import { FadeUp } from "@/components/animations";
import { ContactForm } from "@/components/sections/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.seo" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/contact",
    locale,
  });
}

export default async function ContactPage() {
  const t = await getTranslations("contact");
  const tHours = await getTranslations("hours");

  const HOURS = [
    { day: tHours("mondayFriday"), time: "08:00 – 18:00" },
    { day: tHours("saturday"), time: "09:00 – 20:00" },
    { day: tHours("sunday"), time: "10:00 – 17:00" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-charcoal to-espresso py-28 text-center">
        <FadeUp>
          <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-soft uppercase">
            {t("hero.eyebrow")}
          </span>
          <h1 className="font-montserrat text-4xl font-black text-white md:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{t("hero.description")}</p>
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
                  <h3 className="font-semibold text-charcoal">{t("info.address")}</h3>
                  <a
                    href={SITE_CONFIG.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-charcoal/60 transition-colors hover:text-rose-medium"
                  >
                    {SITE_CONFIG.address.street}
                    <br />
                    {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city},{" "}
                    {SITE_CONFIG.address.canton}
                    <br />
                    {SITE_CONFIG.address.country}
                  </a>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <Phone className="mb-3 text-rose-medium" size={22} />
                  <h3 className="font-semibold text-charcoal">{t("info.phone")}</h3>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone}`}
                    className="mt-1 block text-sm text-charcoal/60 transition-colors hover:text-rose-medium"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.contact.whatsapp}`}
                    className="mt-1 block text-sm text-charcoal/60 transition-colors hover:text-rose-medium"
                  >
                    {SITE_CONFIG.contact.whatsapp}
                  </a>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <Mail className="mb-3 text-rose-medium" size={22} />
                  <h3 className="font-semibold text-charcoal">{t("info.email")}</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="mt-1 block break-all text-sm text-charcoal/60 transition-colors hover:text-rose-medium"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <Clock className="mb-3 text-rose-medium" size={22} />
                  <h3 className="font-semibold text-charcoal">{t("info.hoursLabel")}</h3>
                  <div className="mt-1 space-y-1">
                    {HOURS.map((h) => (
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

              {/* Social & WhatsApp */}
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="mb-3 font-semibold text-charcoal">{t("info.quickContact")}</h3>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={SITE_CONFIG.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-tropical-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-tropical-green-dark"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                  <a
                    href={SITE_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-rose-blush px-4 py-2 text-sm font-medium text-rose-dark transition-colors hover:bg-rose-soft"
                  >
                    <Instagram size={16} />
                    {SITE_CONFIG.instagram}
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
                  title="Mamitas Caffe & Bar a Lugano"
                />
              </div>
            </FadeUp>

            {/* Right: Contact form */}
            <FadeUp delay={0.15}>
              <ContactForm />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
