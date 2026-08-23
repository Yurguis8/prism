"use client";

import { useState } from "react";
import { motion, PanInfo, useMotionValue, useTransform, useSpring } from "framer-motion";
import { AnimatedLogo } from "./AnimatedLogo";

const projects = [
  {
    title: "Curso de Pistola",
    description: "Website institucional com foco em conversão e interface minimalista estilo B2B.",
    link: "https://paulopithon.com.br",
    previewUrl: `https://api.microlink.io/?url=${encodeURIComponent("https://paulopithon.com.br")}&screenshot=true&meta=false&embed=screenshot.url`,
  },
  {
    title: "AP Planejados",
    description: "Website feito sob medida para uma empresa de móveis planejados, com um design moderno e limpo.",
    link: "https://ap-planejado.netlify.app/",
    previewUrl: `https://api.microlink.io/?url=${encodeURIComponent("https://ap-planejado.netlify.app")}&screenshot=true&meta=false&embed=screenshot.url`,
  },
  {
    title: "SOS Manutenções",
    description: "Página de assinatura para manutenção preventiva de móveis.",
    link: "https://sos-manutencoes.netlify.app/",
    previewUrl: `https://api.microlink.io/?url=${encodeURIComponent("https://sos-manutencoes.netlify.app/")}&screenshot=true&meta=false&embed=screenshot.url`,
  },
  {
    title: "Prism Design System",
    description: "Documentação de componentes e guia de estilo moderno para aplicações web.",
    link: "https://tailwindui.com",
    previewUrl: `https://api.microlink.io/?url=${encodeURIComponent("https://tailwindui.com")}&screenshot=true&meta=false&embed=screenshot.url`,
  },
];

function CardItem({
  project,
  index,
  total,
  smoothProgress,
  onSelect,
}: {
  project: (typeof projects)[0];
  index: number;
  total: number;
  smoothProgress: any;
  onSelect: () => void;
}) {
  const radius = 220;
  const stepAngle = 360 / total;

  const angle = useTransform(smoothProgress, (prog: number) => {
    // Calcula o deslocamento contínuo em relação ao centro sem sobressaltos
    let diff = (index - prog) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    return diff * stepAngle;
  });

  const translateY = useTransform(angle, (a) => Math.sin((a * Math.PI) / 180) * radius);
  const translateZ = useTransform(angle, (a) => Math.cos((a * Math.PI) / 180) * radius - radius);
  const rotateX = useTransform(angle, (a) => -a * 0.35);

  const scale = useTransform(translateZ, [-radius * 2, 0], [0.65, 1]);
  const opacity = useTransform(translateZ, [-radius * 2, -radius * 0.8, 0], [0.15, 0.5, 1]);
  const blur = useTransform(translateZ, [-radius * 2, 0], [8, 0]);
  const zIndex = useTransform(translateZ, (z) => Math.round(z + 1000));

  return (
    <motion.div
      style={{
        y: translateY,
        z: translateZ,
        scale,
        rotateX,
        opacity,
        zIndex,
      }}
      onClick={onSelect}
      className="group/card absolute w-full rounded-2xl border bg-[var(--bg-card)] overflow-hidden transition-colors duration-300 pointer-events-auto cursor-pointer border-[var(--border-color)] hover:border-[#00c02a]/40 shadow-md"
    >
      <motion.div
        className="flex flex-col h-full relative"
        style={{ filter: useTransform(blur, (b) => `blur(${b}px)`) }}
      >
        {/* Top Bar Minimalista */}
        <div className="px-5 py-3 bg-[var(--bg-page)] border-b border-[var(--border-color)] flex items-center justify-between">
          <span className="text-[#00c02a] text-xs font-bold leading-none select-none">
            ▲
          </span>

          <span className="text-[11px] font-mono text-[var(--text-muted)] truncate max-w-[280px]">
            {project.link}
          </span>
        </div>

        {/* Container da Imagem */}
        <div className="relative h-80 w-full bg-neutral-900 overflow-hidden">
          <img
            src={project.previewUrl}
            alt={`Preview de ${project.title}`}
            className="w-full h-full object-cover object-top group-hover/card:scale-105 transition-transform duration-700 pointer-events-none"
            loading="lazy"
          />

          {/* Botão "Ver Projeto" */}
          <div className="absolute top-4 right-4 z-20">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="btn-brand-green text-xs px-4 py-2 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg shadow-[#00c02a]/25 cursor-pointer backdrop-blur-sm"
            >
              <span>Ver Projeto</span>
              <AnimatedLogo className="w-3.5 h-3.5 text-[8px]" />
            </motion.a>
          </div>

          {/* Textos Flutuantes */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-6 bg-gradient-to-t from-black/85 via-black/45 to-transparent backdrop-blur-[2px] flex flex-col justify-end space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed line-clamp-2 drop-shadow-sm">
              {project.description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Progresso acumulativo contínuo
  const carouselProgress = useMotionValue(0);
  
  // Guarda o ponto de partida do arrasto atual
  const [dragStartBase, setDragStartBase] = useState(0);
  
  const smoothProgress = useSpring(carouselProgress, {
    stiffness: 220,
    damping: 26,
    mass: 0.8,
  });

  const updateTargetProgress = (targetValue: number) => {
    carouselProgress.set(targetValue);
    const normalizedIndex = ((Math.round(targetValue) % projects.length) + projects.length) % projects.length;
    setActiveIndex(normalizedIndex);
  };

  const handlePanStart = () => {
    // Congela a posição exata de onde o arrasto começou
    setDragStartBase(Math.round(carouselProgress.get()));
  };

  const handlePan = (_: any, info: PanInfo) => {
    // Converte os pixels do arrasto vertical diretamente em fração de card
    const deltaIndex = -info.offset.y / 200;
    const clampedDelta = Math.max(-1, Math.min(1, deltaIndex));
    carouselProgress.set(dragStartBase + clampedDelta);
  };

  const handlePanEnd = (_: any, info: PanInfo) => {
    const threshold = 35;
    const velocity = info.velocity.y;

    // Decide o destino SEMPRE com base no ponto onde o gesto começou
    if (info.offset.y < -threshold || velocity < -150) {
      updateTargetProgress(dragStartBase + 1);
    } else if (info.offset.y > threshold || velocity > 150) {
      updateTargetProgress(dragStartBase - 1);
    } else {
      updateTargetProgress(dragStartBase);
    }
  };

  const handleSelectBullet = (targetIndex: number) => {
    const current = carouselProgress.get();
    const currentNormalized = ((Math.round(current) % projects.length) + projects.length) % projects.length;
    let diff = targetIndex - currentNormalized;
    
    if (diff > projects.length / 2) diff -= projects.length;
    if (diff < -projects.length / 2) diff += projects.length;
    
    updateTargetProgress(Math.round(current) + diff);
  };

  return (
    <section id="portfolio" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-main)] transition-colors overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16 space-y-4 max-w-2xl"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs uppercase tracking-widest text-[#00c02a] font-semibold"
          >
            Portfólio Selecionado
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-main)]"
          >
            Projetos desenhados com precisão e elegância.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed"
          >
            Arraste verticalmente para girar o carrossel.
          </motion.p>
        </motion.div>

        {/* Palco 3D Fixo */}
        <motion.div 
          onPanStart={handlePanStart}
          onPan={handlePan}
          onPanEnd={handlePanEnd}
          className="relative w-full max-w-2xl h-[520px] flex items-center justify-center perspective-1000 mt-8 sm:mt-12 mb-6 touch-none cursor-grab active:cursor-grabbing"
        >
          {projects.map((project, index) => (
            <CardItem
              key={project.title}
              project={project}
              index={index}
              total={projects.length}
              smoothProgress={smoothProgress}
              onSelect={() => handleSelectBullet(index)}
            />
          ))}
        </motion.div>

        {/* Indicador Minimalista de Páginas */}
        <div className="flex items-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelectBullet(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeIndex === i ? "w-6 bg-[#00c02a]" : "w-1.5 bg-[var(--border-color)] hover:bg-[#00c02a]/50"
              }`}
              aria-label={`Ir para o projeto ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}