"use client";

import { motion } from "framer-motion";
import { Layout, Check, Globe, Terminal } from "lucide-react";

export function HeroCard3D() {
  const codeLines = [
    { text: "// PrismStudio Core Engine", color: "text-[#00c02a]/50" },
    { text: "const site = new WebProject({", color: "text-[#00c02a]" },
    { text: "  speed: 98,", color: "text-amber-300" },
    { text: "  seo: true,", color: "text-amber-300" },
    { text: '  conversions: "maximum",', color: "text-emerald-300" },
    { text: '  stack: ["Next.js", "Tailwind"]', color: "text-emerald-300" },
    { text: "});", color: "text-[#00c02a]" },
  ];

  const codeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const codeLineVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="w-full relative [perspective:1200px]">
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 sm:p-5 shadow-2xl relative z-10"
      >
        {/* ================= FACE FRONTAL (WEBSITE) ================= */}
        <div
          style={{ transformStyle: "preserve-3d" }}
          className="[backface-visibility:hidden]"
        >
          {/* Ícone Superior Flutuante (Projeção 3D mais alta) */}
          <div
            style={{ transform: "translateZ(45px)" }}
            className="absolute -top-6 -right-3 z-30 hidden sm:flex items-center justify-center"
          >
            <div className="w-10 h-10 bg-[#00c02a] rounded-xl flex items-center justify-center border border-white/20 shadow-xl">
              <Globe className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Topbar do Card (Efeito 3D saltado) */}
          <div
            style={{ transform: "translateZ(20px)" }}
            className="flex items-center gap-1.5 pb-3 border-b border-[var(--border-color)]"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />

            <div className="ml-auto flex items-center gap-1.5 bg-[var(--bg-page)] px-3 py-1 rounded-full text-[10px] text-[var(--text-muted)] border border-[var(--border-color)] shadow-xs">
              <Layout className="w-3 h-3 text-[#00c02a]" />
              <span className="font-mono">prismstudio.dev</span>
            </div>
          </div>

          {/* Corpo da Interface (Projeção em Camadas 3D) */}
          <div
            style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
            className="mt-3 rounded-xl bg-[var(--bg-page)] p-4 space-y-3 border border-[var(--border-color)] shadow-md"
          >
            <div className="flex justify-between items-center" style={{ transform: "translateZ(10px)" }}>
              <div className="h-2.5 bg-[var(--border-color)] rounded-full w-24 animate-pulse" />
              <span className="px-2 py-0.5 text-[9px] font-semibold bg-[#00c02a]/15 text-[#00c02a] rounded-full border border-[#00c02a]/30">
                ONLINE
              </span>
            </div>

            {/* Sub-card com destaque 3D elevado */}
            <div
              style={{ transform: "translateZ(20px)" }}
              className="h-16 rounded-lg bg-[var(--bg-card)] p-3 border border-[var(--border-color)] flex items-center justify-between shadow-lg"
            >
              <div className="space-y-1.5">
                <div className="h-2 bg-[var(--border-color)] rounded-full w-28" />
                <div className="h-1.5 bg-[var(--border-color)]/60 rounded-full w-16" />
              </div>
              <div className="w-7 h-7 rounded-full bg-[#00c02a] text-white flex items-center justify-center shadow-md shadow-[#00c02a]/30">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5" style={{ transform: "translateZ(15px)" }}>
              <div className="h-14 rounded-lg bg-[var(--bg-card)] p-3 border border-[var(--border-color)] space-y-1.5 shadow-sm">
                <div className="h-1.5 bg-[var(--border-color)] rounded-full w-10" />
                <div className="h-2.5 bg-[#00c02a]/30 rounded-full w-14" />
              </div>
              <div className="h-14 rounded-lg bg-[var(--bg-card)] p-3 border border-[var(--border-color)] space-y-1.5 shadow-sm">
                <div className="h-1.5 bg-[var(--border-color)] rounded-full w-10" />
                <div className="h-2.5 bg-[var(--border-color)] rounded-full w-12" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= FACE TRASEIRA (MATRIX / CÓDIGO ANIMADO) ================= */}
        <div
          style={{ transform: "rotateY(180deg)", transformStyle: "preserve-3d" }}
          className="absolute inset-0 rounded-2xl bg-[#030a04] p-4 sm:p-5 border border-[#00c02a]/40 [backface-visibility:hidden] flex flex-col justify-between overflow-hidden shadow-2xl"
        >
          {/* Topbar Terminal 3D */}
          <div
            style={{ transform: "translateZ(20px)" }}
            className="flex items-center gap-1.5 pb-2 border-b border-[#00c02a]/20"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#00c02a]/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#00c02a]/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#00c02a]/40" />

            <div className="ml-auto flex items-center gap-1.5 text-[10px] text-[#00c02a] font-mono">
              <Terminal className="w-3 h-3 text-[#00c02a]" />
              <span>backend.config.ts</span>
            </div>
          </div>

          {/* Terminal de Código com Animação Matrix (Projetado para fora em 3D) */}
          <motion.div
            style={{ transform: "translateZ(35px)" }}
            variants={codeContainerVariants}
            initial="hidden"
            animate="visible"
            className="font-mono text-[10px] leading-relaxed py-2 space-y-1 overflow-hidden"
          >
            {codeLines.map((line, index) => (
              <motion.p key={index} variants={codeLineVariants} className={line.color}>
                {line.text}
              </motion.p>
            ))}

            {/* Linha com Cursor Digitado */}
            <motion.div variants={codeLineVariants} className="flex items-center gap-1 text-[#00c02a] pt-1">
              <span>&gt; Compiling matrix... [OK]</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-1.5 h-3 bg-[#00c02a]"
              />
            </motion.div>
          </motion.div>

          {/* Badge Inferior 3D */}
          <div
            style={{ transform: "translateZ(15px)" }}
            className="pt-2 border-t border-[#00c02a]/20 flex justify-between items-center text-[9px] font-mono text-[#00c02a]/70"
          >
            <span>SYS_BUILD_2026</span>
            <span className="text-[#00c02a] animate-pulse">STATUS: ACTIVE</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
}