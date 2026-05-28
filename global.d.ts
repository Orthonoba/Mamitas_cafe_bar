import es from "./src/messages/es.json";

type Messages = typeof es;

declare global {
  // Augments next-intl so that t() parameters are typed against the actual messages.
  // This enables compile-time validation: t("nav.menu") ✓, t("nav.typo") ✗
  interface IntlMessages extends Messages {}
}
