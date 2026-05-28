import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants/site";
import { FadeUp } from "@/components/animations";

export function WhatsAppCTA() {
  return (
    <section className="bg-tropical-green py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeUp>
          <MessageCircle className="mx-auto mb-4 text-white/80" size={40} />
          <h2 className="font-montserrat text-2xl font-bold text-white md:text-3xl">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="mt-3 text-white/80">
            Escríbenos directamente por WhatsApp y te respondemos enseguida.
          </p>
          <a
            href={SITE_CONFIG.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-tropical-green-dark shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle size={22} className="fill-tropical-green text-tropical-green" />
            Chatear por WhatsApp
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
