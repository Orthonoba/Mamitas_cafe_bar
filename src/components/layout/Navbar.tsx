"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X, Coffee } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_LINKS } from "@/lib/constants/navigation";
import { SITE_CONFIG } from "@/lib/constants/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const { isOpen, toggle, close } = useMobileMenu();
  const scrolled = useScrolled(80);

  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      close();
      prevPathname.current = pathname;
    }
  }, [pathname, close]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass-card shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-montserrat text-xl font-bold"
          onClick={close}
        >
          <Coffee className="text-rose-medium" size={28} aria-hidden="true" />
          <span
            className={cn(
              "transition-colors",
              scrolled ? "text-charcoal" : "text-white"
            )}
          >
            Mamitas
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href as "/"}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-rose-blush text-rose-dark"
                    : scrolled
                      ? "text-charcoal hover:bg-warm-beige hover:text-charcoal"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                )}
              >
                {t(link.key)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA + locale switcher */}
        <div className="hidden lg:flex items-center gap-3">
          <LocaleSwitcher
            className={scrolled ? "text-charcoal" : "text-white"}
          />
          <Button
            render={<Link href="/birthdays" />}
            size="sm"
            className="rounded-full bg-rose-medium hover:bg-rose-dark text-white"
          >
            {t("reserveParty")}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={toggle}
          aria-label={isOpen ? t("closeMenu") : t("openMenu")}
          className={cn(
            "rounded-lg p-2 transition-colors lg:hidden",
            scrolled ? "text-charcoal hover:bg-warm-beige" : "text-white hover:bg-white/10"
          )}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass-card border-t border-white/20 lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-6">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href as "/"}
                      onClick={close}
                      className={cn(
                        "block rounded-lg px-4 py-3 font-medium transition-colors",
                        pathname === link.href
                          ? "bg-rose-blush text-rose-dark"
                          : "text-charcoal hover:bg-warm-beige"
                      )}
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-charcoal/10 pt-4">
                <Button
                  render={<Link href="/birthdays" onClick={close} />}
                  className="w-full rounded-full bg-rose-medium hover:bg-rose-dark text-white"
                >
                  {t("reservePartyFull")}
                </Button>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={SITE_CONFIG.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm text-whatsapp-dark font-medium"
                  >
                    WhatsApp: {SITE_CONFIG.contact.phone}
                  </a>
                  <LocaleSwitcher className="text-charcoal" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
