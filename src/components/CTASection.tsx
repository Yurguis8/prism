"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section id="orcamento" className="py-24 bg-[var(--bg-page)] text-[var(--text-main)] border-t border-[var(--border-color)] transition-colors relative overflow-hidden">
      {/* Glow Suave Adaptável */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00c02a]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 md:p-16 overflow-hidden text-center space-y-8 shadow-xl"
        >
          {/* Badge de Disponibilidade */}
          <span><br /> <br />
          </span>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-main)] max-w-3xl mx-auto leading-tight">
            Pronto para elevar o <span className="text-[#00c02a]">nível digital</span> da sua empresa?
          </h2>
          
          <p className="text-[var(--text-muted)] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Não perca mais clientes com um site lento ou amador. Vamos criar uma presença online que reflete a qualidade do seu trabalho.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <a
              href="https://wa.me/seunumeroaqui"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand-green text-xs px-8 py-4 rounded-full font-medium inline-flex items-center justify-center gap-2.5 shadow-lg shadow-[#00c02a]/20 w-full sm:w-auto cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Solicitar Orçamento via WhatsApp</span>
            </a>

            <a
              href="#portfolio"
              className="bg-[var(--bg-page)] hover:bg-[var(--bg-card)] text-[var(--text-main)] text-xs px-8 py-4 rounded-full border border-[var(--border-color)] transition-all inline-flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto cursor-pointer"
            >
              <span>Ver nossos projetos</span>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}