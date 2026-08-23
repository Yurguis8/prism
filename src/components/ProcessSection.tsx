"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileSearch, Palette, Code, CheckCircle, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Conversa Inicial",
    description: "Entendemos seu negócio, objetivos, público-alvo e necessidades específicas do projeto.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Planejamento & Estrutura",
    description: "Mapeamento do fluxo do usuário, arquitetura das páginas e estratégia de conversão.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "UI/UX Design",
    description: "Criação do visual moderno e exclusivo no Figma, focado na identidade da sua marca.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description: "Transformação do design em código limpo, ultra-rápido e responsivo com Next.js.",
    icon: Code,
  },
  {
    number: "05",
    title: "Revisões & Ajustes",
    description: "Ajustes finos, testes de performance, SEO e validação em múltiplos dispositivos.",
    icon: CheckCircle,
  },
  {
    number: "06",
    title: "Publicação & Suporte",
    description: "Colocamos seu site no ar com domínio próprio, certificado SSL e suporte inicial.",
    icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section id="processo" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-main)] transition-colors relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#00c02a] font-semibold">
            Passo a Passo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] max-w-xl">
            Como transformamos sua ideia em um site de elite.
          </h2>
          <p className="text-[var(--text-muted)] text-sm max-w-lg">
            Um processo estruturado para garantir entregas pontuais e um resultado impecável.
          </p>
        </div>

        {/* Grid / Timeline de Etapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 transition-all duration-300 hover:border-[#00c02a]/40 group shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[var(--text-muted)] group-hover:text-[#00c02a] transition-colors">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-[var(--bg-page)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[#00c02a] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-[var(--text-main)] tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}