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
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const WA_BASE = "https://wa.me/5581987530744?text=";

interface NicheModel {
  id: string;
  icon: React.ElementType;
  name: string;
  desc: string;
  tags: string[];
  waMsg: string;
  accent: string;
  mockupAccent: string;
  mockupFeatures: { icon: React.ElementType; label: string }[];
}

const models: NicheModel[] = [
  {
    id: "barbearia",
    icon: Scissors,
    name: "Barbearia",
    desc: "Página moderna com serviços, preços, localização, galeria de cortes e botão direto para agendamento no WhatsApp.",
    tags: ["Agendamento", "Galeria", "WhatsApp", "Localização"],
    waMsg: "Oi, Cristine! Quero um site para barbearia.",
    accent: "from-amber-500/30 to-amber-600/10",
    mockupAccent: "from-amber-500/25 to-amber-700/10",
    mockupFeatures: [
      { icon: CalendarCheck, label: "Agendamento" },
      { icon: Camera, label: "Galeria" },
      { icon: MapPin, label: "Localização" },
      { icon: MessageCircle, label: "WhatsApp" },
    ],
  },
  {
    id: "clinica",
    icon: Heart,
    name: "Clínica estética",
    desc: "Site elegante para apresentar procedimentos, benefícios, depoimentos, antes e depois e contato rápido.",
    tags: ["Procedimentos", "Autoridade", "Depoimentos", "Conversão"],
    waMsg: "Oi, Cristine! Quero um site para clínica estética.",
    accent: "from-rose-500/25 to-rose-600/10",
    mockupAccent: "from-rose-500/20 to-rose-700/8",
    mockupFeatures: [
      { icon: FileText, label: "Procedimentos" },
      { icon: Star, label: "Depoimentos" },
      { icon: Camera, label: "Antes/Depois" },
      { icon: Phone, label: "Contato" },
    ],
  },
  {
    id: "restaurante",
    icon: UtensilsCrossed,
    name: "Restaurante / Delivery",
    desc: "Página com cardápio digital, fotos dos pratos, localização, horários e botão para pedido pelo WhatsApp.",
    tags: ["Cardápio", "Delivery", "Fotos", "Pedido rápido"],
    waMsg: "Oi, Cristine! Quero um site para restaurante ou delivery.",
    accent: "from-orange-500/25 to-red-600/10",
    mockupAccent: "from-orange-500/20 to-orange-700/8",
    mockupFeatures: [
      { icon: UtensilsCrossed, label: "Cardápio" },
      { icon: Camera, label: "Fotos" },
      { icon: Clock, label: "Horários" },
      { icon: MapPin, label: "Localização" },
    ],
  },
  {
    id: "loja",
    icon: ShoppingBag,
    name: "Loja de roupas",
    desc: "Vitrine digital para apresentar coleções, promoções, diferenciais da marca e contato para compra.",
    tags: ["Vitrine", "Coleções", "Promoções", "WhatsApp"],
    waMsg: "Oi, Cristine! Quero um site para loja de roupas.",
    accent: "from-brand-3/30 to-brand-3/10",
    mockupAccent: "from-brand-3/20 to-purple-700/8",
    mockupFeatures: [
      { icon: ShoppingBag, label: "Vitrine" },
      { icon: Star, label: "Promoções" },
      { icon: Camera, label: "Coleções" },
      { icon: MessageCircle, label: "Compra" },
    ],
  },
  {
    id: "prestador",
    icon: Wrench,
    name: "Prestador de serviço",
    desc: "Página objetiva para explicar serviços, mostrar diferenciais, depoimentos e facilitar pedidos de orçamento.",
    tags: ["Orçamento", "Serviços", "Confiança", "Contato"],
    waMsg: "Oi, Cristine! Quero um site para prestação de serviço.",
    accent: "from-brand/30 to-brand-2/15",
    mockupAccent: "from-brand/20 to-brand-2/8",
    mockupFeatures: [
      { icon: Wrench, label: "Serviços" },
      { icon: Award, label: "Diferenciais" },
      { icon: Star, label: "Depoimentos" },
      { icon: FileText, label: "Orçamento" },
    ],
  },
  {
    id: "portfolio",
    icon: Briefcase,
    name: "Portfólio profissional",
    desc: "Site para profissionais autônomos mostrarem trabalhos, experiências, diferenciais e formas de contato.",
    tags: ["Autoridade", "Projetos", "Currículo", "Contato"],
    waMsg: "Oi, Cristine! Quero um portfólio profissional.",
    accent: "from-brand-2/30 to-sky-600/10",
    mockupAccent: "from-brand-2/20 to-sky-700/8",
    mockupFeatures: [
      { icon: Briefcase, label: "Projetos" },
      { icon: Award, label: "Experiência" },
      { icon: FileText, label: "Currículo" },
      { icon: Phone, label: "Contato" },
    ],
  },
];

export function NicheShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="nichos" className="relative py-16 md:py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Modelos por nicho"
            title={
              <>
                Escolha o modelo que combina com{" "}
                <span className="text-gradient">o seu negócio</span>
              </>
            }
            description="Crio páginas estratégicas para diferentes tipos de empresas, sempre com foco em visual profissional, clareza e conversão pelo WhatsApp."
            align="center"
            animated={false}
          />
        </motion.div>

        <div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
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

  return (
    <motion.article
      initial={{ opacity: 0, y: 32, rotateX: 6 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, rotateX: 0 }
          : { opacity: 0, y: 32, rotateX: 6 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bento-card group relative flex flex-col overflow-hidden rounded-2xl glass-strong border-gradient"
    >
      {/* Ambient glow */}
      <div
        className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${model.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
      />

      {/* Mockup Area */}
      <div className="relative p-4 pb-0">
        <NicheMockup model={model} hovered={hovered} />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 pt-5">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${model.accent} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]`}
          >
            <model.icon className="h-5 w-5 text-foreground" />
          </div>
          <h3 className="text-lg font-bold">{model.name}</h3>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-grow">
          {model.desc}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {model.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`${WA_BASE}${encodeURIComponent(model.waMsg)}`}
          target="_blank"
          rel="noreferrer"
          className="mt-5 group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 glow"
        >
          <MessageCircle className="h-4 w-4" />
          Quero um site assim
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}

function NicheMockup({
  model,
  hovered,
}: {
  model: NicheModel;
  hovered: boolean;
}) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden border border-white/[0.08] bg-gradient-to-br ${model.mockupAccent} bg-white/[0.02] transition-transform duration-700 ${hovered ? "scale-[1.02]" : ""}`}
    >
      {/* Browser chrome bar */}
      <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-white/15" />
        <div className="h-2 w-2 rounded-full bg-white/15" />
        <div className="h-2 w-2 rounded-full bg-white/15" />
        <div className="ml-2 flex-1 h-4 rounded bg-white/[0.06] flex items-center px-2">
          <span className="text-[8px] text-white/25">
            meu{model.id}.com.br
          </span>
        </div>
      </div>

      {/* Mock content */}
      <div className="p-3.5 space-y-3">
        {/* Niche pill */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2 py-0.5">
          <model.icon className="h-2.5 w-2.5 text-brand/70" />
          <span className="text-[9px] text-brand/70 font-medium">
            {model.name}
          </span>
        </div>

        {/* Mock headline */}
        <div className="space-y-1.5">
          <div className="h-3 w-4/5 rounded bg-white/12" />
          <div className="h-3 w-3/5 rounded bg-white/8" />
        </div>

        {/* Mock subtext */}
        <div className="space-y-1">
          <div className="h-1.5 w-full rounded bg-white/5" />
          <div className="h-1.5 w-5/6 rounded bg-white/4" />
        </div>

        {/* Feature pills */}
        <div className="grid grid-cols-2 gap-1.5 pt-1">
          {model.mockupFeatures.map((feat) => (
            <div
              key={feat.label}
              className="flex items-center gap-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] px-2 py-1.5"
            >
              <feat.icon className="h-3 w-3 text-brand/50 flex-shrink-0" />
              <span className="text-[9px] text-muted-foreground/70 truncate">
                {feat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Mock CTA */}
        <div className="flex gap-2 pt-1">
          <div className="h-7 flex-1 rounded-lg bg-primary/70 flex items-center justify-center gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground/50" />
            <div className="h-1.5 w-12 rounded bg-primary-foreground/50" />
          </div>
          <div className="h-7 w-7 rounded-lg bg-white/[0.06] flex items-center justify-center">
            <MessageCircle className="h-3 w-3 text-[#25D366]/60" />
          </div>
        </div>
      </div>
    </div>
  );
}
