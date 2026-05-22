import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const internalLinks = [
    { label: "O Problema", href: "#problema" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Modelos por Nicho", href: "#nichos" },
    { label: "Como Funciona", href: "#metodo" },
    { label: "Pacotes", href: "#servicos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-background/50 backdrop-blur-lg pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Identidade e Descrição */}
          <div className="sm:col-span-12 md:col-span-5 lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-3 text-primary-foreground font-bold shadow-lg">
                CV
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">Cristine Vieira</div>
                <div className="text-xs uppercase tracking-wider text-brand font-medium">Desenvolvedora Web</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Desenvolvimento de sites estratégicos para negócios locais. Ajudo pequenas e médias empresas a terem uma presença digital mais profissional e atrativa.
            </p>
          </div>

          {/* Links Internos */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="font-semibold mb-4 text-foreground/90">Navegação</h4>
            <ul className="space-y-2.5">
              {internalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato & Redes */}
          <div className="sm:col-span-6 md:col-span-4 lg:col-span-3">
            <h4 className="font-semibold mb-4 text-foreground/90">Contato e Redes</h4>
            <div className="flex flex-col gap-2.5">
              <SocialLink 
                href="https://wa.me/5581987530744?text=Oi%2C%20Cristine!%20Vim%20pelo%20seu%20site." 
                label="(81) 98753-0744" 
                icon={MessageCircle} 
                highlight
              />
              <SocialLink 
                href="mailto:cristinevieira89@gmail.com" 
                label="cristinevieira89@gmail.com" 
                icon={Mail} 
                className="break-all"
              />
              <SocialLink 
                href="https://www.linkedin.com/in/cristine-vieira-6b5042400/" 
                label="LinkedIn" 
                icon={Linkedin} 
              />
              <SocialLink 
                href="https://github.com/rvcris87" 
                label="GitHub" 
                icon={Github} 
              />
            </div>
          </div>
        </div>

        {/* Linha de Direitos Autorais */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {currentYear} Cristine Vieira. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <span className="text-brand">♥</span> e código limpo.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
  highlight = false,
  className = "",
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-all ${
        highlight 
          ? "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/20" 
          : "glass hover:bg-white/10 text-muted-foreground hover:text-foreground border border-transparent"
      } ${className}`}
    >
      <Icon className={`h-4 w-4 ${highlight ? "" : "text-brand/70"}`} />
      {label}
    </a>
  );
}
