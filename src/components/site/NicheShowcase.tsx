import { ArrowRight, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { waLink } from "@/lib/contact";

interface NicheModel {
  id: string;
  title: string;
  description: string;
  tags: string[];
  whatsappMessage: string;
  mockupLabels: string[];
}

function MockupPlaceholder({ labels }: { labels: string[] }) {
  return (
    <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-3">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
        <div className="ml-auto h-4 w-20 rounded bg-white/[0.08]" />
      </div>
      <div className="mb-3 h-10 rounded-lg bg-white/[0.08]" />
      <div className="grid grid-cols-3 gap-2">
        <div className="h-12 rounded-md bg-white/[0.07]" />
        <div className="h-12 rounded-md bg-white/[0.06]" />
        <div className="h-12 rounded-md bg-white/[0.05]" />
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {labels.map((label) => (
          <span
            key={label}
            className="rounded-full border border-white/[0.16] bg-white/[0.06] px-2 py-0.5 text-[10px] text-white/80"
          >
            {label}
          </span>
        ))}
      </div>
      <div className="mt-3 h-6 w-24 rounded-md bg-white/[0.14]" />
    </div>
  );
}

function BarberMockup() {
  return (
    <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#c29a67]/30 bg-gradient-to-br from-[#19130e] via-[#110f0d] to-[#0b0b0b] p-3">
      <div className="h-full rounded-xl border border-[#c29a67]/20 bg-black/20 p-3">
        <div className="mb-2 flex items-center">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c49a67]" />
          <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[#a67d50]" />
          <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[#886542]" />
          <div className="ml-auto flex gap-1.5">
            <span className="h-1 w-5 rounded bg-[#d8ba90]/50" />
            <span className="h-1 w-5 rounded bg-[#d8ba90]/35" />
            <span className="h-1 w-5 rounded bg-[#d8ba90]/25" />
          </div>
        </div>
        <div className="h-14 rounded-lg bg-gradient-to-r from-[#2b1e14] to-[#15110f]" />
        <div className="mt-2 flex items-center justify-between">
          <div>
            <div className="text-[9px] tracking-[0.12em] text-[#e2c496]">Barbearia Premium</div>
            <div className="mt-1 h-1 w-16 rounded bg-[#d4b486]/35" />
          </div>
          <div className="rounded-md border border-[#c29a67]/35 bg-[#c69a66] px-2 py-0.5 text-[8px] font-semibold text-[#24170f]">
            Preview
          </div>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          <div className="h-7 rounded-md bg-[#241a14]" />
          <div className="h-7 rounded-md bg-[#1f1712]" />
          <div className="h-7 rounded-md bg-[#1a1411]" />
        </div>
      </div>
    </div>
  );
}

const models: NicheModel[] = [
  {
    id: "barbearia",
    title: "Barbearia Premium",
    description:
      "Modelo ideal para barbearias que querem transmitir autoridade, facilitar agendamentos e valorizar seus serviços.",
    tags: ["Agendamento", "Serviços", "WhatsApp"],
    whatsappMessage: "Olá, Cristine! Vi o modelo Barbearia Premium e tenho interesse em um site nesse estilo.",
    mockupLabels: ["Agenda", "Serviços"],
  },
  {
    id: "clinica",
    title: "Clínica Estética",
    description: "Composição limpa e sofisticada com procedimentos e contato direto.",
    tags: ["Sofisticado", "Procedimentos", "WhatsApp"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Clínica Estética.",
    mockupLabels: ["Contato", "Agenda"],
  },
  {
    id: "restaurante-delivery",
    title: "Restaurante/Delivery",
    description: "Prato e cardápio em destaque com CTA objetivo para pedido.",
    tags: ["Cardápio", "Pedir agora", "Menu"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Restaurante/Delivery.",
    mockupLabels: ["Menu", "Contato"],
  },
  {
    id: "loja-roupas",
    title: "Loja de Roupas",
    description: "Vitrine de coleções com foco em produtos e jornada visual.",
    tags: ["Coleção", "Produtos", "Ver peças"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Loja de Roupas.",
    mockupLabels: ["Produtos", "Contato"],
  },
  {
    id: "prestador",
    title: "Prestador de Serviço",
    description: "Estrutura profissional com serviços, confiança e orçamento rápido.",
    tags: ["Serviços", "Confiança", "Orçamento"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Prestador de Serviço.",
    mockupLabels: ["Serviços", "Contato"],
  },
  {
    id: "portfolio",
    title: "Portfólio Profissional",
    description: "Hero pessoal e projetos para destacar autoridade e contato.",
    tags: ["Hero", "Projetos", "Entrar em contato"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Portfólio Profissional.",
    mockupLabels: ["Projetos", "Contato"],
  },
];

export function NicheShowcase() {
  return (
    <section
      id="modelos"
      className="relative scroll-mt-[110px] border-t border-white/[0.05] pb-14 pt-20 md:pb-16 md:pt-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Modelos"
          title="Modelos que transformam presença digital em resultado"
          description="Escolha um estilo de site para visualizar como sua marca poderia aparecer online."
          align="center"
          animated={false}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <article
              key={model.id}
              className={`group flex h-full flex-col rounded-3xl border border-white/[0.12] bg-[#0d1016] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-white/[0.24] ${
                model.id === "barbearia" ? "min-h-[450px]" : "min-h-[490px]"
              }`}
            >
              {model.id === "barbearia" ? (
                <BarberMockup />
              ) : (
                <MockupPlaceholder labels={model.mockupLabels} />
              )}

              <div className="mt-4 flex flex-1 flex-col border-t border-white/[0.08] pt-4">
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
                {model.id === "barbearia" ? (
                  <div className="mt-auto grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <a
                      href="/modelos/barbearia"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.18] bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/[0.08]"
                    >
                      Ver modelo
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={waLink(model.whatsappMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Quero um site assim
                    </a>
                  </div>
                ) : (
                  <a
                    href={waLink(model.whatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Quero um site assim
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
