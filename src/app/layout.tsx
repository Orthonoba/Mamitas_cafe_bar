import type { Metadata } from "next";
import { Poppins, Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { getRestaurantJsonLd } from "@/lib/seo/json-ld";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mamitascaffe.ch"),
  title: {
    template: "%s | Mamitas Caffe & Bar",
    default: "Mamitas Caffe & Bar — Arepas & Brunch Venezolano en Lugano",
  },
  description:
    "Café venezolano en Lugano, Suiza. Arepas auténticas, brunch latinoamericano, café de especialidad y fiestas de cumpleaños infantiles. Sabores de Venezuela en el corazón del Ticino.",
  keywords: [
    "arepas Lugano",
    "brunch Lugano",
    "ristorante venezuelano Lugano",
    "café Lugano",
    "cucina venezuelana Ticino",
    "feste bambini Lugano",
    "cumpleaños Lugano",
  ],
  openGraph: {
    type: "website",
    locale: "it_CH",
    alternateLocale: ["es_VE", "de_CH"],
    siteName: "Mamitas Caffe & Bar",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getRestaurantJsonLd();

  return (
    <html
      lang="it"
      className={`${poppins.variable} ${montserrat.variable} ${bebasNeue.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
