import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { waLink } from "@/lib/contact";
import { useSpatialHover } from "../../hooks/useSpatialHover";

const services = [
  {
    name: "Site Essencial",
    tagline: "Para comecar com presenca profissional.",
    items: [
      "Pagina unica",
      "Apresentacao da empresa",
      "Servicos organizados",
      "Localizacao",
      "Botao para WhatsApp",
    ],
    highlighted: false,
  },
  {
    name: "Site Profissional",
    tagline: "Pagina completa e estrategica para conversao.",
    items: [
      "Copy comercial",
      "Galeria de fotos",
      "Depoimentos",
      "Perguntas frequentes",
      "Estrutura focada em conversao",
    ],
    highlighted: true,
  },
  {
    name: "Sistema Personalizado",
    tagline: "Funcionalidades alem de uma pagina simples.",
    items: [
      "Login e painel administrativo",
      "Cadastro de clientes ou produtos",
      "Banco de dados",
      "Formularios e upload",
      "Dashboards",
    ],
    highlighted: false,
  },
];

export function Services() {
  const spatialHover = useSpatialHover();

  return (
    <section id="servicos" className="relative py-14 md:py-18">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Servicos"
          title={
            <>
              Como posso <span className="text-gradient">ajudar seu negocio</span>
            </>
          }
          description="Tres formatos para comecar - escolha o que faz mais sentido para a sua fase atual."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="relative overflow-visible pt-7 md:pt-5">
              {s.highlighted && (
                <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2 rounded-full bg-primary px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/30 md:left-7 md:translate-x-0">
                  Mais escolhido
                </div>
              )}
              <div
                {...(s.highlighted ? spatialHover : {})}
                className={`spatial-card h-full px-7 pb-7 pt-8 transition-all duration-300 ${
                  s.highlighted ? "border-brand/25 shadow-lg shadow-brand/8 ring-1 ring-brand/10" : ""
                }`}
              >
                <h3 className="text-xl font-bold">{s.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.tagline}</p>

                <ul className="mt-6 space-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-brand/15 text-brand">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-foreground/85">{it}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Olá, Cristine! Vi seu portfólio e tenho interesse no plano ${s.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    s.highlighted
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:opacity-90"
                      : "border border-white/[0.08] bg-white/[0.05] text-foreground hover:bg-white/10"
                  }`}
                >
                  Tenho interesse
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
