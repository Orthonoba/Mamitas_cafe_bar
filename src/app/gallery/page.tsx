import { buildMetadata } from "@/lib/seo/metadata";
import { FadeUp } from "@/components/animations";
import { GalleryClient } from "./GalleryClient";

export const metadata = buildMetadata({
  title: "Galería — Mamitas Caffe & Bar",
  description:
    "Explora la galería de Mamitas Caffe & Bar en Lugano. Arepas venezolanas, ambiente tropical, postres artesanales y momentos de celebración.",
  path: "/gallery",
  keywords: ["galería mamitas lugano", "fotos cafe venezolano", "instagram mamitas caffebar"],
});

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-charcoal to-espresso py-28 text-center">
        <FadeUp>
          <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-soft uppercase">
            Galería
          </span>
          <h1 className="font-montserrat text-4xl font-black text-white md:text-6xl">
            Un vistazo a Mamitas
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Colores, sabores y momentos que solo encuentras en nuestro café
            venezolano en Lugano
          </p>
        </FadeUp>
      </section>

      <GalleryClient />
    </>
  );
}
