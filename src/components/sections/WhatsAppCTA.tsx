import { getTranslations } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants/site";
import { FadeUp } from "@/components/animations";

export async function WhatsAppCTA() {
  const t = await getTranslations("whatsappCta");

  return (
    <section className="bg-linear-to-br from-rose-medium to-rose-dark py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <FadeUp>
          <MessageCircle className="mx-auto mb-4 text-white/80" size={40} />
          <h2 className="font-montserrat text-2xl font-bold text-white md:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-white/85">{t("subtitle")}</p>
          <a
            href={SITE_CONFIG.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-rose-dark shadow-lg shadow-rose-dark/20 transition-transform hover:scale-105"
          >
            <MessageCircle size={22} className="fill-rose-medium text-rose-medium" />
            {t("button")}
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
