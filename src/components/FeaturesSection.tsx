"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Search, 
  Smartphone, 
  Code2, 
  MessageSquare, 
  Sliders, 
  ShieldCheck, 
  Paintbrush 
} from "lucide-react";

const features = [
  {
    icon: Paintbrush,
    title: "Design Exclusivo",
    description: "Visual minimalista e refinado, desenhado do zero.",
  },
  {
    icon: Zap,
    title: "Carregamento Ultra-rápido",
    description: "Performance extrema para retenção máxima.",
  },
  {
    icon: Search,
    title: "SEO Técnico",
    description: "Estruturado para ranquear no topo do Google.",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Interface perfeita para telas móbiles e desktop.",
  },
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Sem templates pesados. Apenas código moderno.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Direct",
    description: "Captação rápida de leads com links diretos.",
  },
  {
    icon: Sliders,
    title: "Fácil Gestão",
    description: "Atualize seus conteúdos sem complicações.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança & SSL",
    description: "Padrões modernos de acessibilidade e proteção.",
  },
];

// Dividimos os 8 diferenciais em 2 grupos de 4 para as duas pistas
const row1 = features.slice(0, 4);
const row2 = features.slice(4, 8);

function MarqueeRow({ 
  items, 
  direction = "left", 
  speed = 30 
}: { 
  items: typeof features; 
  direction?: "left" | "right"; 
  speed?: number; 
}) {
  // Duplicamos os itens para alimentar o loop infinito contínuo
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-4 shrink-0 py-2"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={`${feature.title}-${idx}`}
              className="w-[280px] sm:w-[320px] shrink-0 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 transition-all duration-300 hover:border-[#00c02a]/50 hover:shadow-lg hover:shadow-[#00c02a]/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[var(--bg-page)] border border-[var(--border-color)] flex items-center justify-center mb-3 text-[var(--text-muted)] group-hover:text-[#00c02a] transition-all">
                  <Icon className="w-4 h-4 text-[#00c02a]" />
                </div>

                <h3 className="text-sm font-bold text-[var(--text-main)] mb-1 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="diferenciais" className="py-20 border-t border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-main)] transition-colors overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho Compacto */}
        <div className="flex flex-col items-center text-center mb-10 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#00c02a] font-semibold">
            Por que a PrismStudio?
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
            Engenharia web focada em resultados.
          </h2>
        </div>

      </div>

      {/* Duas pistas paralelas e contínuas */}
      <div className="flex flex-col gap-4 w-full">
        <MarqueeRow items={row1} direction="left" speed={28} />
        <MarqueeRow items={row2} direction="right" speed={32} />
      </div>
    </section>
  );
}