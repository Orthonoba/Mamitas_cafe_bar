import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeUp } from "@/components/animations";

const FAQ_ITEMS = [
  {
    q: "¿Con cuánta anticipación debo reservar?",
    a: "Recomendamos reservar con al menos 2-3 semanas de anticipación, especialmente los sábados y domingos. Para fiestas Premium, 1 mes antes es ideal para asegurar la decoración personalizada.",
  },
  {
    q: "¿Puedo traer mi propio pastel?",
    a: "Para los paquetes Mini y Latin Party, ofrecemos nuestro pastel artesanal incluido. Si tienes un pastel especial ya encargado, podemos coordinarlo con un pequeño cargo de €20 por el servicio de corte.",
  },
  {
    q: "¿Tienen opciones vegetarianas o sin gluten?",
    a: "¡Por supuesto! Nuestro menú venezolano tiene opciones vegetarianas como cachapas, tequeños y ensaladas. Para opciones sin gluten o alergias específicas, consúltanos al hacer la reserva y adaptamos el menú.",
  },
  {
    q: "¿Cuál es la capacidad máxima del espacio?",
    a: "Nuestro espacio puede acomodar hasta 50 personas cómodamente para la zona de fiesta. Para grupos más grandes, podemos organizar eventos en el espacio completo del local. Consúltanos.",
  },
  {
    q: "¿Qué incluye exactamente la zona de juegos?",
    a: "La zona infantil cuenta con juegos adaptados para niños de 2 a 10 años: castillo inflable (para grupos de 15+), área de actividades creativas, mesa de dibujo y zona de juegos blandos para los más pequeños.",
  },
  {
    q: "¿Aceptan pagos con tarjeta de crédito?",
    a: "Sí, aceptamos todas las tarjetas de crédito y débito (Visa, Mastercard, AMEX), TWINT y efectivo en francos suizos. Para reservar, solicitamos un depósito del 30% con hasta 48h de antelación.",
  },
  {
    q: "¿Se puede personalizar la decoración temática?",
    a: "En los paquetes Latin Party y Premium, la decoración es completamente personalizable. Podemos hacer temáticas de princesas, superhéroes, animales, personajes venezolanos y más. ¡Dinos la idea y lo hacemos realidad!",
  },
];

export function BirthdayFAQ() {
  return (
    <section className="section-padding bg-warm-beige">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          subtitle="Todo lo que necesitas saber para la fiesta perfecta"
        />

        <FadeUp delay={0.15}>
          <Accordion multiple={false} className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border-0 bg-white shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-charcoal hover:no-underline hover:text-rose-dark">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm leading-relaxed text-charcoal/70">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}
