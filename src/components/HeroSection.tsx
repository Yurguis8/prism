"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedLogo } from "./AnimatedLogo";
import { HeroCard3D } from "./HeroCard3D";

// Componente para o efeito de máquina de escrever
function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < text.length) {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(text.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 70);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text]);

  return (
    <span className="inline-flex items-center">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-3 bg-[#00c02a] ml-0.5"
      />
    </span>
  );
}

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 bg-[var(--bg-page)] text-[var(--text-main)] overflow-hidden transition-colors">
      {/* Grid Visível */}
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Lado Esquerdo */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left gap-5"
          >
            {/* Badge com Typewriter */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c02a] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c02a]" />
              </span>
              <span className="text-[11px] sm:text-xs text-[var(--text-muted)] font-mono tracking-wide min-h-[16px] flex items-center">
                <TypewriterText text="Aceitando novos projetos em 2026" />
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight leading-[1.15] text-[var(--text-main)]"
            >
              Sites modernos que <span className="text-[#00c02a] relative inline-block">transformam</span> visitantes em clientes.
            </motion.h1>

            {/* Descrição */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base text-[var(--text-muted)] max-w-lg leading-relaxed"
            >
              A PrismStudio desenvolve landing pages, sites institucionais, catálogos online e projetos sob medida — rápidos, elegantes e focados em conversão.
            </motion.p>

            {/* Badges */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-1.5 pt-1"
            >
              {["Landing Pages", "Sites Institucionais", "Catálogos Online", "Sites Personalizados"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-[11px] font-normal bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-color)] transition-all hover:border-[#00c02a]/40"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Botões */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto"
            >
              {/* Botão com trigger de hover/tap em todo o elemento pai */}
              <motion.a
                href="#orcamento"
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="btn-brand-green text-xs px-6 py-3.5 rounded-full font-medium inline-flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Solicitar orçamento</span>
                <AnimatedLogo />
              </motion.a>

              <a
                href="#portfolio"
                className="bg-[var(--bg-card)] hover:bg-[var(--bg-page)] text-[var(--text-main)] text-xs px-6 py-3.5 rounded-full border border-[var(--border-color)] transition-all inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
                Ver portfólio
              </a>
            </motion.div>

            {/* Métricas */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 sm:gap-10 pt-6 border-t border-[var(--border-color)] mt-2 w-full max-w-xs sm:max-w-sm"
            >
              <div className="text-center lg:text-left">
                <span className="text-2xl font-extrabold block text-[var(--text-main)] tracking-tight">98</span>
                <span className="text-[11px] text-[var(--text-muted)] leading-tight block">score médio PageSpeed</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="text-2xl font-extrabold block text-[var(--text-main)] tracking-tight">7 dias</span>
                <span className="text-[11px] text-[var(--text-muted)] leading-tight block">prazo médio de entrega</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Lado Direito: Componente 3D Isolado */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <HeroCard3D />
          </div>

        </div>
      </div>
    </section>
  );
}