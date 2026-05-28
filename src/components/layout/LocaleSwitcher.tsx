"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "it", label: "IT" },
  { code: "es", label: "ES" },
] as const;

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleSwitch(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div className={cn("flex items-center gap-1", className)} aria-label="Seleziona lingua">
      <Globe size={13} className="text-current opacity-60 shrink-0" aria-hidden="true" />
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleSwitch(code)}
          aria-label={`Switch to ${label}`}
          aria-current={locale === code ? "true" : undefined}
          className={cn(
            "rounded px-1.5 py-0.5 text-xs font-bold transition-colors",
            locale === code
              ? "bg-rose-medium text-white"
              : "opacity-60 hover:opacity-100"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
