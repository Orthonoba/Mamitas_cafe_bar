"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants/site";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            className="glass-card rounded-xl px-3 py-2 text-sm font-medium text-charcoal shadow-lg"
          >
            ¡Escríbenos!
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href={SITE_CONFIG.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-tropical-green text-white shadow-lg shadow-tropical-green/30"
        >
          <MessageCircle size={26} fill="currentColor" />

          {/* Pulse ring */}
          <motion.div
            className="absolute h-14 w-14 rounded-full bg-tropical-green"
            animate={{ scale: [1, 1.4, 1.4], opacity: [0.4, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </motion.div>
      </a>
    </div>
  );
}
