import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Scissors,
  Heart,
  UtensilsCrossed,
  ShoppingBag,
  Wrench,
  Briefcase,
  MessageCircle,
  ArrowRight,
  MapPin,
  Clock,
  Camera,
  Star,
  CalendarCheck,
  FileText,
  Award,
  Phone,
  ShoppingCart,
  Sparkles,
  ChefHat,
  Shirt,
  CircleCheck,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useSpatialHover } from "../../hooks/useSpatialHover";

const WA_BASE = "https://wa.me/5581987530744?text=";

interface NicheModel {
  id: string;
  icon: React.ElementType;
  name: string;
  desc: string;
  tags: string[];
  waMsg: string;
  accentColor: string;
  mockupContent: React.ReactNode;
}

/* ─── Rich mockup sub-components per niche ─────────────────────────────── */

function BarberMockup() {
  return (
    <div className="rounded-xl bg-[#0e0f12] border border-amber-500/10 p-3.5 space-y-3 text-left">
      {/* Mini Header */}
      <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
        <span className="text-[9px] font-bold tracking-wider text-amber-500 uppercase">💈 VINTAGE BARBER</span>
        <span className="text-[8px] text-white/40">Recife - PE</span>
      </div>
      {/* Hero Banner */}
      <div className="rounded-lg bg-gradient-to-r from-amber-950/40 to-amber-900/10 p-3 space-y-1">
        <h4 className="text-[11px] font-bold text-amber-100">Cabelo, Barba & Cevada</h4>
        <p className="text-[8px] text-white/50">Cortes modernos com técnicas tradicionais.</p>
      </div>
      {/* Services List */}
      <div className="space-y-1.5">
        {[
          { name: "Corte Social / Fade", price: "R$ 40" },
          { name: "Barboterapia Completa", price: "R$ 30" },
        ].map((s) => (
          <div key={s.name} className="flex justify-between items-center text-[9px] border-b border-white/[0.03] pb-1">
            <span className="text-white/70">{s.name}</span>
            <span className="text-amber-400 font-semibold">{s.price}</span>
          </div>
        ))}
      </div>
      {/* Action CTA */}
      <div className="h-7 w-full rounded bg-amber-500 text-black flex items-center justify-center gap-1">
        <CalendarCheck className="h-3 w-3" />
        <span className="text-[9px] font-bold">Agendar pelo WhatsApp</span>
      </div>
    </div>
  );
}

function ClinicMockup() {
  return (
    <div className="rounded-xl bg-[#faf6f0] border border-rose-900/5 p-3.5 space-y-3 text-left text-neutral-800">
      {/* Mini Header */}
      <div className="flex items-center justify-between border-b border-rose-900/10 pb-2">
        <span className="text-[9px] font-bold tracking-wider text-rose-700 uppercase">✨ CLÍNICA DREAMS</span>
        <span className="text-[8px] text-neutral-500">Médica Responsável</span>
      </div>
      {/* Hero Banner */}
      <div className="rounded-lg bg-rose-500/5 p-3 space-y-1 border border-rose-500/10">
        <h4 className="text-[11px] font-bold text-rose-950">Realce sua Beleza Natural</h4>
        <p className="text-[8px] text-neutral-600">Tratamentos faciais e corporais personalizados.</p>
      </div>
      {/* Procedures */}
      <div className="grid grid-cols-2 gap-1.5">
        {["Toxina Botulínica", "Preenchimento", "Peeling Químico", "Bioestimulador"].map((p) => (
          <div key={p} className="rounded bg-white border border-rose-900/5 p-1.5 text-[8px] text-neutral-700 font-medium">
            ✦ {p}
          </div>
        ))}
      </div>
      {/* Action CTA */}
      <div className="h-7 w-full rounded bg-rose-700 text-white flex items-center justify-center gap-1">
        <MessageCircle className="h-3 w-3 fill-white text-rose-700" />
        <span className="text-[9px] font-bold">Avaliação pelo WhatsApp</span>
      </div>
    </div>
  );
}

function RestaurantMockup() {
  return (
    <div className="rounded-xl bg-[#140e0a] border border-orange-500/10 p-3.5 space-y-3 text-left">
      {/* Mini Header */}
      <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
        <span className="text-[9px] font-bold tracking-wider text-orange-500 uppercase">🍔 BISTRÔ & BURGER</span>
        <span className="text-[8px] text-white/40">Aberto até às 23h</span>
      </div>
      {/* Menu Spotlight */}
      <div className="rounded-lg bg-orange-950/20 p-2.5 space-y-1.5 border border-orange-500/10">
        <div className="flex justify-between items-center text-[10px] font-bold text-orange-200">
          <span>Monster Cheddar</span>
          <span>R$ 34</span>
        </div>
        <p className="text-[8px] text-white/50 leading-tight">Hambúrguer 150g, muito cheddar cremoso e bacon crocante.</p>
      </div>
      {/* Details */}
      <div className="flex justify-between text-[8px] text-white/40">
        <span className="flex items-center gap-1">⭐ 4.8 (250+ reviews)</span>
        <span>Entrega Rápida</span>
      </div>
      {/* Action CTA */}
      <div className="h-7 w-full rounded bg-orange-500 text-black flex items-center justify-center gap-1">
        <ShoppingCart className="h-3 w-3" />
        <span className="text-[9px] font-bold">Fazer Pedido no WhatsApp</span>
      </div>
    </div>
  );
}

function ShopMockup() {
  return (
    <div className="rounded-xl bg-[#ffffff] border border-neutral-200 p-3.5 space-y-3 text-left text-neutral-900">
      {/* Mini Header */}
      <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
        <span className="text-[9px] font-bold tracking-wider text-neutral-900 uppercase">👗 AMÉLIE BOUTIQUE</span>
        <span className="text-[8px] text-neutral-400">Coleção Outono</span>
      </div>
      {/* Grid of items */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { name: "Vestido", color: "bg-amber-100" },
          { name: "Casaco", color: "bg-neutral-100" },
          { name: "Blusa", color: "bg-blue-50" },
        ].map((item) => (
          <div key={item.name} className="space-y-1 text-center">
            <div className={`aspect-square w-full rounded ${item.color} flex items-center justify-center`}>
              <ShoppingBag className="h-3.5 w-3.5 text-neutral-700/60" />
            </div>
            <div className="text-[8px] font-semibold text-neutral-800">{item.name}</div>
          </div>
        ))}
      </div>
      {/* Action CTA */}
      <div className="h-7 w-full rounded bg-neutral-900 text-white flex items-center justify-center gap-1">
        <MessageCircle className="h-3 w-3 fill-white text-neutral-900" />
        <span className="text-[9px] font-bold">Ver Catálogo no WhatsApp</span>
      </div>
    </div>
  );
}

function ServiceProviderMockup() {
  return (
    <div className="rounded-xl bg-[#0c1017] border border-sky-500/10 p-3.5 space-y-3 text-left">
      {/* Mini Header */}
      <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
        <span className="text-[9px] font-bold tracking-wider text-sky-400 uppercase">⚡ J.R. ELETRICISTA</span>
        <span className="text-[8px] text-white/40">Recife & Região</span>
      </div>
      {/* Highlights */}
      <div className="space-y-2">
        {[
          { title: "Atendimento 24h", desc: "Urgências e reparos elétricos." },
          { title: "Garantia por Escrito", desc: "Segurança para a sua residência." },
        ].map((item) => (
          <div key={item.title} className="flex gap-2">
            <CircleCheck className="h-3.5 w-3.5 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-[9px] font-bold text-white/90">{item.title}</div>
              <div className="text-[8px] text-white/40">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Action CTA */}
      <div className="h-7 w-full rounded bg-sky-500 text-black flex items-center justify-center gap-1">
        <Wrench className="h-3 w-3" />
        <span className="text-[9px] font-bold">Solicitar Orçamento</span>
      </div>
    </div>
  );
}

function PortfolioMockup() {
  return (
    <div className="rounded-xl bg-[#0f0f12] border border-white/[0.05] p-3.5 space-y-3 text-left">
      {/* Mini Header */}
      <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
        <span className="text-[9px] font-bold tracking-wider text-white uppercase">💻 MARCOS SILVA</span>
        <span className="text-[8px] text-white/40">UI/UX Designer</span>
      </div>
      {/* Profile Card */}
      <div className="flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-full bg-white/[0.08] flex items-center justify-center shrink-0">
          <Camera className="h-4 w-4 text-white/60" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-white">Marcos Silva</div>
          <p className="text-[8px] text-white/40">Crio produtos digitais de alta performance.</p>
        </div>
      </div>
      {/* Work preview */}
      <div className="grid grid-cols-2 gap-1.5 text-[8px] text-white/50">
        <div className="rounded bg-white/[0.02] border border-white/[0.04] p-1 text-center">
          📁 15+ Projetos
        </div>
        <div className="rounded bg-white/[0.02] border border-white/[0.04] p-1 text-center">
          🏆 3+ Anos Exp
        </div>
      </div>
      {/* Action CTA */}
      <div className="h-7 w-full rounded bg-white text-black flex items-center justify-center gap-1">
        <Phone className="h-3 w-3" />
        <span className="text-[9px] font-bold">Falar no WhatsApp</span>
      </div>
    </div>
  );
}

/* ─── Niche data ──────────────────────────────────────────────────────────── */
const models: NicheModel[] = [
  {
    id: "barbearia",
    icon: Scissors,
    name: "Barbearia",
    desc: "Estética masculina de alto padrão com fotos, preços dos serviços e agendamento rápido pelo WhatsApp.",
    tags: ["Agendamento", "Preços", "Horários", "Galeria"],
    waMsg: "Oi, Cristine! Quero um orçamento de site para Barbearia.",
    accentColor: "from-amber-500/20 to-amber-600/5",
    mockupContent: <BarberMockup />,
  },
  {
    id: "clinica",
    icon: Heart,
    name: "Clínica Estética",
    desc: "Visual clean e sofisticado para divulgar procedimentos, profissionalismo e facilitar agendamentos.",
    tags: ["Procedimentos", "Sobre a Médica", "WhatsApp"],
    waMsg: "Oi, Cristine! Quero um orçamento de site para Clínica Estética.",
    accentColor: "from-rose-500/20 to-rose-600/5",
    mockupContent: <ClinicMockup />,
  },
  {
    id: "restaurante",
    icon: UtensilsCrossed,
    name: "Restaurante / Delivery",
    desc: "Cardápio integrado, fotos dos pratos em destaque e link direto para o pedido no WhatsApp.",
    tags: ["Cardápio", "Localização", "Pedido Rápido"],
    waMsg: "Oi, Cristine! Quero um orçamento de site para Restaurante.",
    accentColor: "from-orange-500/20 to-red-600/5",
    mockupContent: <RestaurantMockup />,
  },
  {
    id: "loja",
    icon: ShoppingBag,
    name: "Loja de Roupas / Boutique",
    desc: "Vitrine de produtos limpa, separada por coleções e link de compra rápida via WhatsApp.",
    tags: ["Vitrine Digital", "Coleções", "Comprar"],
    waMsg: "Oi, Cristine! Quero um orçamento de site para Loja de Roupas.",
    accentColor: "from-purple-500/20 to-brand-3/5",
    mockupContent: <ShopMockup />,
  },
  {
    id: "prestador",
    icon: Wrench,
    name: "Prestador de Serviço",
    desc: "Apresentação focada na confiança do seu trabalho, fotos, depoimentos e botão de orçamento.",
    tags: ["Orçamentos", "Garantias", "Depoimentos"],
    waMsg: "Oi, Cristine! Quero um orçamento de site para Prestação de Serviços.",
    accentColor: "from-sky-500/20 to-brand-2/5",
    mockupContent: <ServiceProviderMockup />,
  },
  {
    id: "portfolio",
    icon: Briefcase,
    name: "Portfólio Profissional",
    desc: "Para profissionais liberais, freelancers e consultores mostrarem seus melhores projetos.",
    tags: ["Projetos", "Sobre mim", "Contatos"],
    waMsg: "Oi, Cristine! Quero um orçamento de site para Portfólio Profissional.",
    accentColor: "from-brand-2/20 to-sky-600/5",
    mockupContent: <PortfolioMockup />,
  },
];

/* ─── Main Component ─────────────────────────────────────────────────────── */
export function NicheShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="nichos" className="relative py-14 md:py-18 border-t border-white/[0.04]" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Vitrine de Nichos"
            title={
              <>
                Sites prontos para{" "}
                <span className="text-gradient">atrair clientes</span>
              </>
            }
            description="Escolha o estilo de página que mais combina com o seu negócio local. Cada modelo é focado em clareza comercial e conversão rápida."
            align="center"
            animated={false}
          />
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model, i) => (
            <NicheCard
              key={model.id}
              model={model}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── NicheCard ──────────────────────────────────────────────────────────── */
function NicheCard({
  model,
  index,
  isInView,
}: {
  model: NicheModel;
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const spatialHover = useSpatialHover();

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={(e) => { setHovered(false); spatialHover.onMouseLeave(e); }}
      onMouseMove={spatialHover.onMouseMove}
      className="spatial-card group relative flex flex-col overflow-hidden transition-all duration-300 border border-white/[0.08] rounded-xl"
    >
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between border-b border-white/[0.05] bg-white/[0.02] px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 max-w-[65%] mx-auto h-4 rounded bg-white/[0.04] flex items-center justify-center">
          <span className="text-[7.5px] text-white/20 font-mono tracking-wide">
            demo.{model.id}.com.br
          </span>
        </div>
      </div>

      {/* Mockup Showcase Area */}
      <div
        className={`p-4 bg-white/[0.01] border-b border-white/[0.04] transition-all duration-300 ${
          hovered ? "bg-white/[0.02]" : ""
        }`}
      >
        {model.mockupContent}
      </div>

      {/* Info Card Footer */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2.5">
          <div
            className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${model.accentColor} border border-white/[0.06]`}
          >
            <model.icon className="h-4 w-4 text-foreground" />
          </div>
          <h3 className="text-sm font-bold text-white">{model.name}</h3>
        </div>

        <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-grow">
          {model.desc}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {model.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={`${WA_BASE}${encodeURIComponent(model.waMsg)}`}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground transition hover:opacity-90 shadow-sm"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Solicitar Modelo
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </motion.article>
  );
}
