import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants/site";

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path,
  image = "/images/og-default.jpg",
  keywords = [],
}: PageSEOProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle = `${title} | ${SITE_CONFIG.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "arepas Lugano",
      "brunch Lugano",
      "ristorante venezuelano Lugano",
      "café Lugano",
      "cucina venezuelana Ticino",
      ...keywords,
    ],
    authors: [{ name: SITE_CONFIG.name }],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}${image}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "it_CH",
      alternateLocale: ["es_VE", "de_CH"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_CONFIG.url}${image}`],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
