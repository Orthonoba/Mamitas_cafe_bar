import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["it", "es"] as const,
  defaultLocale: "it",
});

export type Locale = (typeof routing.locales)[number];
