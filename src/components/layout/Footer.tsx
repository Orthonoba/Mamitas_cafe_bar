import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Coffee, Instagram, Facebook, MapPin, Clock, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants/site";
import { NAV_LINKS } from "@/lib/constants/navigation";
import { BUSINESS_HOURS } from "@/lib/business-hours";

export async function Footer() {
  const tNav = await getTranslations("nav");
  const tFooter = await getTranslations("footer");
  const tHours = await getTranslations("hours");

  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Coffee className="text-rose-soft" size={28} />
              <span className="font-montserrat text-xl font-bold text-white">Mamitas</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{tFooter("tagline")}</p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-rose-medium"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-rose-medium"
              >
                <Facebook size={18} />
              </a>
              <a
                href={SITE_CONFIG.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-rose-medium"
              >
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.29 6.29 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.95a8.19 8.19 0 0 0 4.78 1.52V7.02a4.85 4.85 0 0 1-1.01-.33z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="font-montserrat text-sm font-semibold uppercase tracking-wider text-white/40">
              {tFooter("navigation")}
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href as "/"}
                    className="text-sm text-white/70 transition-colors hover:text-rose-soft"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours — single source: BUSINESS_HOURS */}
          <div>
            <h3 className="font-montserrat text-sm font-semibold uppercase tracking-wider text-white/40">
              {tFooter("hours")}
            </h3>
            <ul className="mt-4 space-y-3">
              {BUSINESS_HOURS.map((h) => (
                <li key={h.dayKey} className="flex items-start gap-2">
                  <Clock size={14} className="mt-0.5 shrink-0 text-rose-soft" />
                  <div>
                    <p className="text-sm font-medium text-white/90">{tHours(h.dayKey)}</p>
                    <p className="text-xs text-white/50">{h.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat text-sm font-semibold uppercase tracking-wider text-white/40">
              {tFooter("contact")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-rose-soft" />
                <span className="text-sm text-white/70">
                  {SITE_CONFIG.address.street},{" "}
                  {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-rose-soft" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="text-sm text-white/70 hover:text-rose-soft transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-rose-soft" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-sm text-white/70 hover:text-rose-soft transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-white/40 font-montserrat uppercase tracking-wider mb-2">
                Instagram
              </p>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-rose-soft hover:text-rose-medium transition-colors"
              >
                {SITE_CONFIG.instagram}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. {tFooter("madeWith")} 🇨🇭🇻🇪
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              {tFooter("privacy")}
            </Link>
            <Link
              href="/contact"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              {tFooter("contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
