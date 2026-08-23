"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Sun, Moon, Menu, X } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[10000] bg-[var(--bg-page)]/90 backdrop-blur-md border-b border-[var(--border-color)] transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Container: Logo + Nome PrismStudio */}
        <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
          <AnimatedLogo />
          <span className="font-bold text-sm sm:text-base tracking-tight text-[var(--text-main)] group-hover:text-[#00c02a] transition-colors">
            PrismStudio<span className="text-[#00c02a]">.</span>
          </span>
        </Link>

        {/* Links de navegação */}
        <nav className="hidden md:flex items-center gap-7">
          {["Diferenciais", "Portfólio", "Processo", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-3">
          {/* Botão de Tema */}
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] hover:opacity-80 transition-all cursor-pointer"
            aria-label="Alternar Tema"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-neutral-800" />
            )}
          </button>

          {/* Oculto no Mobile / Visível no Desktop */}
          <a
            href="#orcamento"
            className="btn-brand-green text-xs px-4 py-2 hidden md:inline-flex items-center gap-1.5"
          >
            Solicitar orçamento
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </a>

          {/* Botão do Menu Hambúrguer (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="flex md:hidden p-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)]"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border-color)] bg-[var(--bg-page)] px-6 py-4 flex flex-col gap-3">
          {["Diferenciais", "Portfólio", "Processo", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] py-1"
            >
              {item}
            </Link>
          ))}
          <a
            href="#orcamento"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-brand-green text-xs px-4 py-2.5 inline-flex items-center justify-center gap-1.5 mt-2"
          >
            Solicitar orçamento
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </a>
        </div>
      )}
    </header>
  );
}