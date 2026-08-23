"use client";

import { motion } from "framer-motion";

interface AnimatedLogoProps {
  className?: string;
}

export function AnimatedLogo({ className = "" }: AnimatedLogoProps) {
  return (
    <motion.div
      variants={{
        hover: { scale: 1.15, rotate: 12 },
        tap: { scale: 0.85, rotate: -12 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`w-5 h-5 rounded bg-[#00c02a] flex items-center justify-center font-bold text-white text-[10px] select-none cursor-pointer border border-white/20 relative overflow-hidden ${className}`}
    >
      {/* Efeito de brilho interno acionado pelo hover no container pai */}
      <motion.div
        variants={{
          hover: { x: "100%" },
        }}
        initial={{ x: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
      />

      {/* Ícone ▲ acionado tanto no hover quanto no clique/tap */}
      <motion.span
        variants={{
          hover: { rotate: 360 },
          tap: { rotate: 360 },
        }}
        transition={{ duration: 0.4 }}
        className="inline-block relative z-10"
      >
        ▲
      </motion.span>
    </motion.div>
  );
}