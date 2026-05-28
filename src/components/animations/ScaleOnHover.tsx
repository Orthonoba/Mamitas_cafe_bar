"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ScaleOnHoverProps {
  children: ReactNode;
  className?: string;
  scale?: number;
}

export function ScaleOnHover({
  children,
  className,
  scale = 1.03,
}: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
