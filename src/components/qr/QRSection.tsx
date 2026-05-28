"use client";

import dynamic from "next/dynamic";
import { Download, Smartphone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants/site";
import { FadeUp } from "@/components/animations";

const QRCodeSVG = dynamic(
  () => import("qrcode.react").then((m) => m.QRCodeSVG),
  { ssr: false, loading: () => <div className="h-48 w-48 animate-pulse rounded-2xl bg-warm-beige" /> }
);

const MENU_URL = `${SITE_CONFIG.url}/menu`;

export function QRSection() {
  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const svg = document.querySelector<SVGElement>("#qr-code svg");
    if (!svg) return;

    const data = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "mamitas-menu-qr.svg";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="section-padding bg-charcoal">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
          {/* QR Code */}
          <FadeUp className="flex-shrink-0">
            <div
              id="qr-code"
              className="rounded-3xl bg-white p-6 shadow-2xl"
            >
              <QRCodeSVG
                value={MENU_URL}
                size={180}
                bgColor="#FFFBF5"
                fgColor="#1A1A2E"
                level="H"
              />
            </div>
            <button
              onClick={handleDownload}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-medium text-white/70 transition-colors hover:border-rose-soft hover:text-rose-soft"
            >
              <Download size={16} />
              Descargar QR
            </button>
          </FadeUp>

          {/* Text */}
          <FadeUp delay={0.15} className="text-center md:text-left">
            <div className="flex items-center gap-2 md:justify-start justify-center mb-4">
              <Smartphone className="text-rose-soft" size={24} />
              <span className="font-bebas text-sm tracking-[0.25em] text-rose-soft uppercase">
                Menú Digital
              </span>
            </div>
            <h2 className="font-montserrat text-3xl font-bold text-white md:text-4xl">
              Escanea y explora
              <br />
              nuestro menú
            </h2>
            <p className="mt-4 max-w-md text-white/60 leading-relaxed">
              Accede a todo nuestro menú desde tu móvil. Sin papel, sin esperas.
              También puedes compartirlo con tus amigos.
            </p>
            <p className="mt-4 font-mono text-sm text-tropical-green-light">
              {MENU_URL}
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
