import { Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { waLink } from "@/lib/contact";

const services = [
  {
    name: "Site Essencial",
    tagline: "Para começar com presença profissional.",
    items: ["Página única", "Apresentação da empresa", "Serviços organizados", "Localização", "Botão para WhatsApp"],
    highlighted: false,
  },
  {
    name: "Site Profissional",
    tagline: "Página completa e estratégica para conversão.",
    items: ["Copy comercial", "Galeria de fotos", "Depoimentos", "Perguntas frequentes", "Estrutura focada em conversão"],
    highlighted: true,
  },
  {
    name: "Sistema Personalizado",
    tagline: "Funcionalidades além de uma página simples.",
    items: ["Login e painel administrativo", "Cadastro de clientes ou produtos", "Banco de dados", "Formulários e upload", "Dashboards"],
    highlighted: false,
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Serviços"
          title={<>Como posso <span className="text-gradient">ajudar seu negócio</span></>}
          description="Três formatos para começar — escolha o que faz mais sentido para a sua fase atual."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className={`relative rounded-3xl p-7 card-shadow transition hover:-translate-y-1 ${
                s.highlighted
                  ? "glass-strong border-gradient glow"
                  : "glass"
              }`}
            >
              {s.highlighted && (
                <div className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  Mais escolhido
                </div>
              )}
              <h3 className="text-2xl font-bold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>

              <ul className="mt-6 space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-brand/15 text-brand">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-foreground/90">{it}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(`Olá, Cristine! Vi seu portfólio e tenho interesse no plano ${s.name}.`)}
                target="_blank"
                rel="noreferrer"
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  s.highlighted
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-white/5 text-foreground hover:bg-white/10"
                }`}
              >
                Tenho interesse
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
