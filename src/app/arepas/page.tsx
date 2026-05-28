import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { MENU_ITEMS } from "@/lib/data/menu-items";
import { PriceTag } from "@/components/ui/PriceTag";
import { TagBadge } from "@/components/ui/TagBadge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { SITE_CONFIG } from "@/lib/constants/site";
import { MessageCircle } from "lucide-react";

export const metadata = buildMetadata({
  title: "Arepas Venezolanas Auténticas en Lugano",
  description:
    "Las mejores arepas venezolanas de Lugano: Reina Pepiada, Dominó, La Pelúa, Catira, La Sifrina y la Mamita Especial. Recetas auténticas de Barquisimeto.",
  path: "/arepas",
  keywords: ["arepa venezolana lugano", "reina pepiada lugano", "arepa autentica suiza"],
});

const AREPA_ITEMS = MENU_ITEMS.filter((i) => i.category === "arepas");

export default function ArepassPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-warm-beige to-cream py-28 text-center">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-blush/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-tropical-green/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4">
          <FadeUp>
            <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-medium uppercase">
              El corazón de Venezuela
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-montserrat text-4xl font-black text-charcoal md:text-6xl">
              Nuestras Arepas
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-charcoal/70 leading-relaxed">
              La arepa es mucho más que un alimento — es cultura, identidad y amor
              venezolano. Cada una está preparada con la receta original que aprendimos
              en Barquisimeto y que ahora traemos al corazón de Lugano.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Arepas showcase */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AREPA_ITEMS.map((arepa) => (
              <StaggerItem key={arepa.id}>
                <article className="group relative overflow-hidden rounded-3xl bg-white shadow-(--shadow-card) transition-all hover:shadow-(--shadow-hover) hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    {arepa.image && (
                      <Image
                        src={arepa.image}
                        alt={arepa.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal/70 via-transparent to-transparent" />

                    {/* Glass overlay on hover */}
                    <div className="absolute inset-0 flex items-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="glass-dark m-3 rounded-2xl p-4 text-white w-full">
                        <p className="text-xs leading-relaxed">{arepa.description}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="absolute left-3 top-3 flex gap-1">
                      {arepa.tags.slice(0, 2).map((tag) => (
                        <TagBadge key={tag} tag={tag} />
                      ))}
                    </div>

                    {/* Name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity">
                      <h3 className="font-montserrat text-lg font-bold text-white drop-shadow">
                        {arepa.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content (visible without hover) */}
                  <div className="p-5 group-hover:hidden">
                    <h3 className="font-montserrat text-lg font-bold text-charcoal">
                      {arepa.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-charcoal/60">
                      {arepa.description}
                    </p>
                    <div className="mt-4">
                      <PriceTag price={arepa.price} />
                    </div>
                  </div>
                  {/* Price in hover state */}
                  <div className="hidden p-5 group-hover:block">
                    <PriceTag price={arepa.price} />
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-tropical-green py-20 text-center">
        <FadeUp>
          <h2 className="font-montserrat text-2xl font-bold text-white md:text-3xl">
            ¿Ya tienes tu favorita?
          </h2>
          <p className="mt-3 text-white/80">
            Pide por WhatsApp o visítanos en Lugano
          </p>
          <a
            href={SITE_CONFIG.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-tropical-green-dark shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle size={22} className="fill-tropical-green text-tropical-green" />
            Pedir por WhatsApp
          </a>
        </FadeUp>
      </section>
    </>
  );
}
