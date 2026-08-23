"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Shadcn/UI",
  "PostgreSQL",
  "Vercel",
];

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer:
      "O prazo médio para Landing Pages e Sites Institucionais varia de 1 a 3 semanas, dependendo da complexidade das páginas e do envio de conteúdos.",
  },
  {
    question: "O site será otimizado para celulares?",
    answer:
      "Com certeza! Desenvolvemos com a abordagem 'Mobile-First', garantindo navegação rápida e perfeita em qualquer tamanho de tela.",
  },
  {
    question: "Como funciona a otimização SEO?",
    answer:
      "Estruturamos as tags HTML, métricas de Core Web Vitals, meta tags e sitemap para garantir que o Google consiga indexar e ranquear seu site facilmente.",
  },
  {
    question: "Vou conseguir atualizar os textos e imagens depois?",
    answer:
      "Sim. Deixamos a estrutura configurada de forma simples e intuitiva para você ou sua equipe realizarem edições básicas quando necessário.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Trabalhamos normalmente com entrada de 50% no início do projeto e os 50% restantes na entrega final e publicação do site.",
  },
];

export function TechAndFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 border-t border-[var(--border-color)] bg-[var(--bg-page)] text-[var(--text-main)] transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        
        {/* Faixa de Tecnologias */}
        <div className="flex flex-col items-center text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium">
            Tecnologias de Alta Performance
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-4xl">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-xs font-medium text-[var(--text-main)] backdrop-blur-sm transition-all hover:border-[#00c02a]/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Seção FAQ */}
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#00c02a] font-semibold">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-main)]">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden transition-colors hover:border-[#00c02a]/40"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left text-sm font-semibold text-[var(--text-main)] gap-4 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#00c02a] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-xs text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-color)] pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}