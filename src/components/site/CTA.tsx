import { MessageCircle, Mail } from "lucide-react";
import { mailtoLink, waLink } from "@/lib/contact";

export function CTA() {
  return (
    <section id="contato" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-3xl glass-strong border-gradient p-10 md:p-16 text-center card-shadow">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Vamos conversar
            </div>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Quer um site profissional <span className="text-gradient">para sua empresa?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
              Me chame no WhatsApp e me conte sobre seu negócio. Posso te mostrar uma ideia
              de estrutura para sua página e como ela pode ajudar a atrair mais clientes.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 glow"
              >
                <MessageCircle className="h-4 w-4" />
                Quero um orçamento pelo WhatsApp
              </a>
              <a
                href={mailtoLink}
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
