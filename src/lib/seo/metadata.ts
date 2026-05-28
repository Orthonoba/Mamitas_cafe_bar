import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants/site";

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  locale?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  image = "/images/og-default.jpg",
  keywords = [],
  locale = "it",
}: PageSEOProps): Metadata {
  const url = `${SITE_CONFIG.url}/${locale}${path === "/" ? "" : path}`;
  const fullTitle = `${title} | ${SITE_CONFIG.name}`;
  const ogLocale = locale === "it" ? "it_CH" : "es_VE";
  const altLocale = locale === "it" ? "es_VE" : "it_CH";

  return {
    title: fullTitle,
    description,
    keywords: [
      "arepas Lugano",
      "brunch Lugano",
      "ristorante venezuelano Lugano",
      "caffè Lugano",
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
      locale: ogLocale,
      alternateLocale: [altLocale],
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
      languages: {
        it: `${SITE_CONFIG.url}/it${path === "/" ? "" : path}`,
        es: `${SITE_CONFIG.url}/es${path === "/" ? "" : path}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
