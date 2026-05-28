"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  y?: number;
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  y = 32,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: EASE }}
      viewport={{ once, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
