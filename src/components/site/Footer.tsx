import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import { CONTACT, mailtoLink, waLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-3 text-primary-foreground font-bold">
                CR
              </div>
              <div>
                <div className="font-semibold">Cristine Ribeiro — Desenvolvedora Web</div>
                <div className="text-sm text-muted-foreground">Sites estratégicos para pequenos negócios</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            <SocialLink href={waLink()} label="WhatsApp" icon={MessageCircle} />
            <SocialLink href={mailtoLink} label="E-mail" icon={Mail} />
            <SocialLink href={CONTACT.github} label="GitHub" icon={Github} />
            <SocialLink href={CONTACT.linkedin} label="LinkedIn" icon={Linkedin} />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Cristine Ribeiro. Todos os direitos reservados.</div>
          <div>Feito com cuidado em código.</div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-xl glass px-3 py-2 text-xs font-medium transition hover:bg-white/10"
    >
      <Icon className="h-3.5 w-3.5 text-brand" />
      {label}
    </a>
  );
}
