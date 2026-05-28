import { SITE_CONFIG } from "@/lib/constants/site";

export function getRestaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.taglineIt,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.canton,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: "CH",
    },
    servesCuisine: ["Venezuelan", "Latin American", "Cafe", "Brunch"],
    priceRange: "CHF 10-30",
    image: `${SITE_CONFIG.url}/images/og-default.jpg`,
    sameAs: [SITE_CONFIG.social.instagram, SITE_CONFIG.social.facebook],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    hasMenu: `${SITE_CONFIG.url}/menu`,
    acceptsReservations: "True",
    currenciesAccepted: "CHF",
    paymentAccepted: "Cash, Credit Card",
  };
}
