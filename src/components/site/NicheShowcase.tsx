import { ArrowRight, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { waLink } from "@/lib/contact";

import barberMockup from "@/assets/mockup-barbearia.jpg";
import clinicMockup from "@/assets/mockup-clinica.jpg";
import restaurantMockup from "@/assets/mockup-restaurante.jpg";
import storeMockup from "@/assets/mockup-loja.jpg";
import serviceMockup from "@/assets/mockup-servicos.jpg";
import portfolioMockup from "@/assets/mockup-academia.jpg";

interface NicheModel {
  id: string;
  title: string;
  description: string;
  tags: string[];
  whatsappMessage: string;
  mockup: string;
  domain: string;
  style: "dark" | "light";
  previewLabel: string;
}

function PreviewFrame({
  mockup,
  domain,
  style,
  previewLabel,
}: {
  mockup: string;
  domain: string;
  style: "dark" | "light";
  previewLabel: string;
}) {
  const dark = style === "dark";

  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.1] bg-black/40 shadow-[0_18px_42px_rgba(0,0,0,0.5)]">
      <div
        className={`flex items-center gap-1.5 border-b px-3 py-2 ${
          dark ? "border-white/[0.1] bg-black/45" : "border-neutral-200 bg-white"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-white/35" : "bg-neutral-300"}`} />
        <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-white/35" : "bg-neutral-300"}`} />
        <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-white/35" : "bg-neutral-300"}`} />
        <div
          className={`mx-auto h-4 w-[64%] rounded px-2 text-center text-[7px] ${
            dark ? "bg-white/[0.07] text-white/50" : "bg-neutral-100 text-neutral-500"
          }`}
        >
          {domain}
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={mockup} alt={previewLabel} className="h-full w-full object-cover object-top" loading="lazy" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2">
          <span className="rounded bg-black/65 px-2 py-1 text-[9px] font-medium text-white">Preview real do modelo</span>
          <span className="rounded bg-white px-2 py-1 text-[9px] font-semibold text-black">Landing page</span>
        </div>
      </div>
    </div>
  );
}

const models: NicheModel[] = [
  {
    id: "barbearia",
    title: "Barbearia Premium",
    description: "Visual forte com chamada principal, servicos e CTA para agenda.",
    tags: ["Fundo escuro", "Agendar horario", "Avaliacao"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Barbearia Premium.",
    mockup: barberMockup,
    domain: "barbeariapremium.com.br",
    style: "dark",
    previewLabel: "Preview do modelo de barbearia",
  },
  {
    id: "clinica",
    title: "Clínica Estética",
    description: "Composicao limpa e sofisticada com procedimentos e contato direto.",
    tags: ["Sofisticado", "Procedimentos", "WhatsApp"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Clínica Estética.",
    mockup: clinicMockup,
    domain: "clinicavitta.com.br",
    style: "light",
    previewLabel: "Preview do modelo de clinica estetica",
  },
  {
    id: "restaurante-delivery",
    title: "Restaurante/Delivery",
    description: "Prato e cardapio em destaque com CTA objetivo para pedido.",
    tags: ["Cardapio", "Pedir agora", "Menu"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Restaurante/Delivery.",
    mockup: restaurantMockup,
    domain: "sabordacasa.com.br",
    style: "dark",
    previewLabel: "Preview do modelo de restaurante",
  },
  {
    id: "loja-roupas",
    title: "Loja de Roupas",
    description: "Vitrine de colecoes com foco em produtos e jornada visual.",
    tags: ["Colecao", "Produtos", "Ver pecas"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Loja de Roupas.",
    mockup: storeMockup,
    domain: "ateliermoda.com.br",
    style: "light",
    previewLabel: "Preview do modelo de loja de roupas",
  },
  {
    id: "prestador",
    title: "Prestador de Serviço",
    description: "Estrutura profissional com servicos, confianca e orcamento rapido.",
    tags: ["Servico", "Confianca", "Orcamento"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Prestador de Serviço.",
    mockup: serviceMockup,
    domain: "servicotech24h.com.br",
    style: "dark",
    previewLabel: "Preview do modelo de prestador de servico",
  },
  {
    id: "portfolio",
    title: "Portfólio Profissional",
    description: "Hero pessoal e projetos para destacar autoridade e contato.",
    tags: ["Hero", "Projetos", "Entrar em contato"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Portfólio Profissional.",
    mockup: portfolioMockup,
    domain: "portfoliopro.com.br",
    style: "dark",
    previewLabel: "Preview do modelo de portfolio profissional",
  },
];

export function NicheShowcase() {
  return (
    <section id="modelos" className="relative border-t border-white/[0.05] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Modelos"
          title="Modelos que transformam presença digital em resultado"
          description="Escolha um estilo de site para o seu negócio e visualize como sua marca poderia aparecer online."
          align="center"
          animated={false}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {models.map((model) => (
            <article
              key={model.id}
              className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.02] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.25]"
            >
              <div className="min-h-[300px]">
                <PreviewFrame
                  mockup={model.mockup}
                  domain={model.domain}
                  style={model.style}
                  previewLabel={model.previewLabel}
                />
              </div>

              <div className="mt-4 border-t border-white/[0.08] pt-4">
                <h3 className="text-lg font-semibold text-white">{model.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/68">{model.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {model.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.14] bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-white/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={waLink(model.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Quero um site assim
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
