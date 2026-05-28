import Link from "next/link";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { buildMetadata } from "@/lib/seo/metadata";
import { MENU_ITEMS } from "@/lib/data/menu-items";
import { MenuCard } from "@/components/menu/MenuCard";
import { FadeUp, StaggerChildren, StaggerItem } from "@/components/animations";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE_CONFIG } from "@/lib/constants/site";
import { Truck, Clock, Package, Star, MessageCircle } from "lucide-react";

export const metadata = buildMetadata({
  title: "Delivery — Mamitas a Tu Puerta en Lugano",
  description:
    "Recibe la comida venezolana de Mamitas Caffe & Bar en casa. Arepas, empanadas, tequeños y más. Disponible en Smood, Uber Eats y Just Eat Lugano.",
  path: "/delivery",
  keywords: [
    "delivery lugano venezuelano",
    "arepas consegna lugano",
    "smood lugano venezuelano",
    "uber eats lugano arepas",
    "comida venezolana domicilio lugano",
  ],
});

const DELIVERY_ITEMS = MENU_ITEMS.filter((i) => i.category === "delivery");

const PLATFORMS = [
  {
    name: "Smood",
    desc: "El líder de delivery en Ticino",
    color: "bg-orange-500",
    icon: "🔵",
  },
  {
    name: "Uber Eats",
    desc: "Rápido y confiable en toda Lugano",
    color: "bg-emerald-600",
    icon: "🟢",
  },
  {
    name: "Just Eat",
    desc: "Para familias y pedidos grandes",
    color: "bg-rose-500",
    icon: "🔴",
  },
];

const WHY_DELIVERY = [
  {
    icon: Package,
    title: "Packaging Premium",
    desc: "Cajas kraft con logo Mamitas, salsas en frasquitos y nota de bienvenida artesanal.",
  },
  {
    icon: Star,
    title: "Calidad Garantizada",
    desc: "Los mismos productos que sirves en el local. Sin compromiso de calidad.",
  },
  {
    icon: Clock,
    title: "30–45 min",
    desc: "Tiempo estimado de entrega en Lugano y alrededores.",
  },
  {
    icon: Truck,
    title: "Zona de Cobertura",
    desc: "Lugano, Paradiso, Bissone, Melide, Lugano Nord y Massagno.",
  },
];

export default function DeliveryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal py-28 text-center">
        <div className="absolute inset-0 bg-linear-to-br from-charcoal via-espresso/50 to-charcoal/90 opacity-80" />
        <div className="relative mx-auto max-w-3xl px-4">
          <FadeUp>
            <span className="font-bebas mb-3 block text-sm tracking-[0.3em] text-rose-soft uppercase">
              Delivery Lugano
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-montserrat text-4xl font-black text-white md:text-6xl">
              Mamitas
              <br />
              <span className="text-gradient-rose">a tu puerta</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70 leading-relaxed">
              Las arepas más auténticas de Lugano ahora llegan a tu hogar.
              Packaging premium, calidad garantizada, sabor venezolano sin moverte del sofá.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {PLATFORMS.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-white backdrop-blur-sm"
                >
                  <span className="text-xl">{p.icon}</span>
                  <div className="text-left">
                    <p className="font-semibold text-sm">{p.name}</p>
                    <p className="text-xs text-white/60">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why delivery */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Por qué Mamitas Delivery"
            title="Calidad que viaja contigo"
            subtitle="No hacemos concesiones. El mismo amor de la cocina llega a tu mesa."
          />
          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_DELIVERY.map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl bg-white p-6 shadow-sm text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-blush">
                    <item.icon className="text-rose-medium" size={24} />
                  </div>
                  <h3 className="font-montserrat font-bold text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Delivery Menu */}
      <section className="section-padding bg-warm-beige">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Delivery Box"
            title="Paquetes diseñados para tu hogar"
            subtitle="Combos que viajan perfecto y llegan llenos de sabor"
          />

          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERY_ITEMS.map((item) => (
              <StaggerItem key={item.id}>
                <MenuCard item={item} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Packaging section */}
      <section className="section-padding bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <FadeUp delay={0.15} className="flex-1">
              <span className="font-bebas text-sm tracking-widest text-rose-medium uppercase">
                Packaging
              </span>
              <h2 className="font-montserrat mt-2 text-3xl font-bold text-charcoal">
                Hasta el packaging
                <br />
                es premium
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "📦 Cajas kraft con logo Mamitas en rosa",
                  "🫙 Salsas en frasquitos de vidrio reutilizables",
                  "📝 Nota artesanal 'Cocinado desde Barquisimeto'",
                  "🌿 Packaging 100% reciclable",
                  "📱 QR del menú + código de fidelidad",
                  "🎁 Stickers de Venezuela en cada pedido",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-charcoal/80 text-sm">
                    <span className="mt-0.5">{item.split(" ")[0]}</span>
                    <span>{item.slice(item.indexOf(" ") + 1)}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp className="flex-1">
              <div className="relative h-72 w-full overflow-hidden rounded-3xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
                  alt="Packaging premium Mamitas delivery"
                  fill
                  className="object-cover"
                  fallbackSrc="/images/gallery/food.svg"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-tropical-green py-16 text-center">
        <FadeUp>
          <Truck className="mx-auto mb-4 text-white/80" size={40} />
          <h2 className="font-montserrat text-2xl font-bold text-white md:text-3xl">
            ¿Pedido especial o corporativo?
          </h2>
          <p className="mt-3 text-white/80">
            Para grupos grandes, empresas o eventos. Escríbenos y diseñamos tu menú.
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
