import { ArrowRight, Calendar, MessageCircle, MessageSquare, ShoppingBag, ShoppingCart, Star, Wrench } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { waLink } from "@/lib/contact";

interface NicheModel {
  id: string;
  title: string;
  description: string;
  tags: string[];
  whatsappMessage: string;
  preview: React.ReactNode;
}

function BrowserChrome({ domain }: { domain: string }) {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.02] px-3 py-2">
      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      <div className="mx-auto h-4 w-[58%] rounded bg-white/[0.04] px-2 text-center text-[7px] text-white/35">
        {domain}
      </div>
    </div>
  );
}

function PreviewBarber() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/[0.06] bg-[#0b0b0d]">
      <BrowserChrome domain="barbeariapremium.com.br" />
      <div className="space-y-2.5 p-3">
        <div className="rounded-md border border-amber-300/20 bg-gradient-to-r from-amber-500/20 to-transparent p-2.5">
          <p className="text-[10px] font-semibold text-amber-100">Cortes premium em Recife</p>
          <p className="text-[8px] text-white/60">Experiencia classica com acabamento moderno</p>
          <div className="mt-2 inline-flex items-center gap-1 rounded bg-amber-300 px-2 py-1 text-[8px] font-bold text-black">
            <Calendar className="h-2.5 w-2.5" />
            Agendar horario
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 text-[8px] text-white/75">
          <span className="rounded bg-white/[0.04] px-2 py-1">Corte</span>
          <span className="rounded bg-white/[0.04] px-2 py-1">Barba</span>
          <span className="rounded bg-white/[0.04] px-2 py-1">Sobrancelha</span>
          <span className="rounded bg-white/[0.04] px-2 py-1">Combo</span>
        </div>
        <div className="flex items-center gap-1 text-[8px] text-amber-300">
          <Star className="h-2.5 w-2.5 fill-amber-300/30" />
          4.9 de avaliacao local
        </div>
      </div>
    </div>
  );
}

function PreviewClinic() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/[0.06] bg-[#fffaf5] text-neutral-900">
      <BrowserChrome domain="clinicavitta.com.br" />
      <div className="space-y-2.5 p-3">
        <div className="rounded-md border border-rose-200 bg-rose-50 p-2.5">
          <p className="text-[10px] font-semibold text-rose-900">Clinica Estetica Vitta</p>
          <p className="text-[8px] text-neutral-600">Harmonizacao, pele e rejuvenescimento</p>
          <div className="mt-2 inline-flex items-center gap-1 rounded bg-rose-700 px-2 py-1 text-[8px] font-bold text-white">
            <MessageSquare className="h-2.5 w-2.5" />
            Avaliacao pelo WhatsApp
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 text-[8px] text-neutral-700">
          <span className="rounded bg-rose-100 px-2 py-1">Botox</span>
          <span className="rounded bg-rose-100 px-2 py-1">Peeling</span>
          <span className="rounded bg-rose-100 px-2 py-1">Preenchimento</span>
          <span className="rounded bg-rose-100 px-2 py-1">Bioestimulador</span>
        </div>
      </div>
    </div>
  );
}

function PreviewRestaurant() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/[0.06] bg-[#160d09]">
      <BrowserChrome domain="sabordacasabr.com" />
      <div className="space-y-2.5 p-3">
        <div className="rounded-md border border-orange-300/20 bg-orange-500/15 p-2.5">
          <p className="text-[10px] font-semibold text-orange-100">Pratos especiais da casa</p>
          <p className="text-[8px] text-white/60">Cardapio digital com entrega rapida</p>
          <div className="mt-2 inline-flex items-center gap-1 rounded bg-orange-300 px-2 py-1 text-[8px] font-bold text-black">
            <ShoppingCart className="h-2.5 w-2.5" />
            Pedir agora
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 text-[8px] text-white/80">
          <span className="rounded bg-white/[0.05] px-2 py-1">Burger Artesanal</span>
          <span className="rounded bg-white/[0.05] px-2 py-1">Executivo</span>
          <span className="rounded bg-white/[0.05] px-2 py-1">Pizza</span>
          <span className="rounded bg-white/[0.05] px-2 py-1">Sobremesas</span>
        </div>
      </div>
    </div>
  );
}

function PreviewStore() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/[0.06] bg-[#fff] text-neutral-900">
      <BrowserChrome domain="ateliermoda.com.br" />
      <div className="space-y-2.5 p-3">
        <div className="rounded-md border border-neutral-200 bg-neutral-50 p-2.5">
          <p className="text-[10px] font-semibold">Nova colecao da estacao</p>
          <p className="text-[8px] text-neutral-600">Vitrine digital com destaques por categoria</p>
          <div className="mt-2 inline-flex items-center gap-1 rounded bg-neutral-900 px-2 py-1 text-[8px] font-bold text-white">
            <ShoppingBag className="h-2.5 w-2.5" />
            Ver pecas
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-[8px]">
          <span className="rounded bg-amber-100 px-1 py-3 text-center">Vestidos</span>
          <span className="rounded bg-blue-100 px-1 py-3 text-center">Blusas</span>
          <span className="rounded bg-neutral-100 px-1 py-3 text-center">Jeans</span>
        </div>
      </div>
    </div>
  );
}

function PreviewService() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/[0.06] bg-[#0d131a]">
      <BrowserChrome domain="servicotech24h.com.br" />
      <div className="space-y-2.5 p-3">
        <div className="rounded-md border border-sky-300/20 bg-sky-500/15 p-2.5">
          <p className="text-[10px] font-semibold text-sky-100">Atendimento residencial e empresarial</p>
          <p className="text-[8px] text-white/60">Servicos, avaliacoes e contato rapido</p>
          <div className="mt-2 inline-flex items-center gap-1 rounded bg-sky-300 px-2 py-1 text-[8px] font-bold text-black">
            <Wrench className="h-2.5 w-2.5" />
            Solicitar orcamento
          </div>
        </div>
        <div className="space-y-1.5 text-[8px] text-white/75">
          <div className="rounded bg-white/[0.05] px-2 py-1">Instalacao eletrica</div>
          <div className="rounded bg-white/[0.05] px-2 py-1">Manutencao preventiva</div>
          <div className="rounded bg-white/[0.05] px-2 py-1">Emergencias 24h</div>
        </div>
      </div>
    </div>
  );
}

function PreviewPortfolio() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/[0.06] bg-[#111216]">
      <BrowserChrome domain="portfoliopro.com.br" />
      <div className="space-y-2.5 p-3">
        <div className="rounded-md border border-white/[0.14] bg-white/[0.05] p-2.5">
          <p className="text-[10px] font-semibold text-white">Joao Mendes, Designer de Produto</p>
          <p className="text-[8px] text-white/65">Projetos estrategicos para negocios locais</p>
          <div className="mt-2 inline-flex items-center gap-1 rounded bg-white px-2 py-1 text-[8px] font-bold text-black">
            Entrar em contato
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 text-[8px] text-white/75">
          <span className="rounded bg-white/[0.05] px-2 py-2 text-center">Projeto A</span>
          <span className="rounded bg-white/[0.05] px-2 py-2 text-center">Projeto B</span>
          <span className="rounded bg-white/[0.05] px-2 py-2 text-center">Projeto C</span>
          <span className="rounded bg-white/[0.05] px-2 py-2 text-center">Projeto D</span>
        </div>
      </div>
    </div>
  );
}

const models: NicheModel[] = [
  {
    id: "barbearia",
    title: "Barbearia premium",
    description: "Landing com identidade forte, servicos em destaque e CTA imediato para agenda.",
    tags: ["Fundo escuro", "Agendamento", "Servicos"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Barbearia Premium.",
    preview: <PreviewBarber />,
  },
  {
    id: "clinica",
    title: "Clinica estetica",
    description: "Visual sofisticado, procedimentos claros e fluxo direto para avaliacao.",
    tags: ["Clean", "Procedimentos", "Sofisticado"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Clínica Estética.",
    preview: <PreviewClinic />,
  },
  {
    id: "restaurante-delivery",
    title: "Restaurante/delivery",
    description: "Modelo com cardapio visual, itens em destaque e botao de pedido.",
    tags: ["Cardapio", "Pedir agora", "Menu"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Restaurante/Delivery.",
    preview: <PreviewRestaurant />,
  },
  {
    id: "loja-roupas",
    title: "Loja de roupas",
    description: "Vitrine por colecao com foco em produtos e contato comercial rapido.",
    tags: ["Vitrine", "Colecao", "Moda"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Loja de Roupas.",
    preview: <PreviewStore />,
  },
  {
    id: "prestador",
    title: "Prestador de servico",
    description: "Pagina de confianca com servicos, prova social e solicitacao de orcamento.",
    tags: ["Servicos", "Avaliacoes", "Orcamento"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Prestador de Serviço.",
    preview: <PreviewService />,
  },
  {
    id: "portfolio",
    title: "Portfolio profissional",
    description: "Estrutura para apresentar autoridade, projetos e contato estrategico.",
    tags: ["Hero pessoal", "Projetos", "Contato"],
    whatsappMessage: "Olá, Cristine! Tenho interesse em um site modelo Portfólio Profissional.",
    preview: <PreviewPortfolio />,
  },
];

export function NicheShowcase() {
  return (
    <section id="modelos" className="relative border-t border-white/[0.04] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Modelos"
          title={
            <>
              Modelos que transformam presença digital em <span className="text-gradient">resultado.</span>
            </>
          }
          description="Escolha um estilo de site para o seu negócio e visualize como sua marca poderia aparecer online."
          align="center"
          animated={false}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <article
              key={model.id}
              className="spatial-card flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08]"
            >
              <div className="p-3">{model.preview}</div>
              <div className="flex flex-1 flex-col border-t border-white/[0.06] p-5">
                <h3 className="text-base font-semibold text-white">{model.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{model.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {model.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2 py-1 text-[10px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={waLink(model.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
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
