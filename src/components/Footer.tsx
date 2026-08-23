"use client";

import Link from "next/link";
import { Mail, Phone, Globe, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-foreground flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#00ff87]" />
              </div>
              <span className="font-semibold text-base tracking-tight text-foreground">
                Prism<span className="text-muted-foreground font-normal">Studio</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-xs">
              Especialistas em desenvolvimento web de alto padrão. Projetos focados em velocidade, conversão e design contemporâneo.
            </p>
            {/* Ícones sociais usando SVG inline limpo para evitar erros de versão */}
            <div className="flex items-center gap-3 text-muted-foreground pt-1">
              <a href="#" className="p-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="p-1.5 rounded-md hover:bg-muted hover:text-foreground transition-colors" aria-label="Código">
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-foreground text-xs font-semibold tracking-wider uppercase">Navegação</h4>
            <ul className="flex flex-col gap-2.5">
              {["Diferenciais", "Portfólio", "Processo", "FAQ"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground text-xs transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-foreground text-xs font-semibold tracking-wider uppercase">Contato</h4>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-2 text-muted-foreground text-xs">
                <Mail className="w-3.5 h-3.5 text-[#00ff87]" />
                contato@prismstudio.com.br
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-xs">
                <Phone className="w-3.5 h-3.5 text-[#00ff87]" />
                +55 (75) 988376-7544
              </li>
            </ul>
          </div>

          {/* Status */}
          <div className="space-y-4">
            <h4 className="text-foreground text-xs font-semibold tracking-wider uppercase">Infraestrutura</h4>
            <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-muted border border-border w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87]" />
              <span className="text-[11px] text-muted-foreground font-medium">Sistemas Operacionais</span>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground text-[11px]">
          <p>© {new Date().getFullYear()} PrismStudio. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}