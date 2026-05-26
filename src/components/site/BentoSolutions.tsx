import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  MessageCircle,
  Zap,
  Smartphone,
  Sparkles,
  Search,
  LayoutList,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useSpatialHover } from "../../hooks/useSpatialHover";

const WA_HREF =
  "https://wa.me/5581987530744?text=Oi%2C%20Cristine!%20Quero%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

interface BentoCard {
  icon: React.ElementType;
  title: string;
  desc: string;
  accent: string;
  iconBg: string;
  span: string;
  visual?: React.ReactNode;
}

const cards: BentoCard[] = [
  {
    icon: ShieldCheck,
    title: "Mais confiança para o cliente",
    desc: "Um site profissional transmite credibilidade instantânea. Seu cliente decide em 3 segundos se confia ou fecha a aba.",
    accent: "from-brand/40 to-brand-2/25",
    iconBg: "from-brand/30 to-brand/10",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    visual: <TrustVisual />,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp integrado",
    desc: "Botão estratégico em todas as páginas. Um toque e o cliente já está falando com você.",
    accent: "from-[#25D366]/30 to-[#25D366]/10",
    iconBg: "from-[#25D366]/30 to-[#25D366]/10",
    span: "lg:col-span-1",
  },
  {
    icon: Zap,
    title: "Site rápido",
    desc: "Carregamento em menos de 2 segundos. Site lento perde 53% dos visitantes.",
    accent: "from-amber-500/30 to-amber-600/10",
    iconBg: "from-amber-500/30 to-amber-500/10",
    span: "lg:col-span-1",
    visual: <SpeedVisual />,
  },
  {
    icon: Smartphone,
    title: "100% responsivo",
    desc: "Perfeito no celular, tablet e desktop. 85% dos donos de negócios locais acessam pelo celular.",
    accent: "from-brand-2/30 to-brand-3/15",
    iconBg: "from-brand-2/30 to-brand-2/10",
    span: "lg:col-span-1",
    visual: <ResponsiveVisual />,
  },
  {
    icon: Sparkles,
    title: "Visual premium",
    desc: "Design moderno e elegante, personalizado para o seu segmento. Não é template genérico.",
    accent: "from-brand-3/30 to-brand-3/10",
    iconBg: "from-brand-3/30 to-brand-3/10",
    span: "lg:col-span-1",
  },
  {
    icon: Search,
    title: "SEO básico incluído",
    desc: "Seu site aparece no Google quando clientes pesquisam por serviços como o seu na sua região.",
    accent: "from-sky-500/25 to-sky-600/10",
    iconBg: "from-sky-500/30 to-sky-500/10",
    span: "lg:col-span-1",
    visual: <SeoVisual />,
  },
  {
    icon: LayoutList,
    title: "Informações organizadas",
    desc: "Serviços, preços, horários, localização e depoimentos — tudo no lugar certo, sem confusão.",
    accent: "from-brand/25 to-brand-2/15",
    iconBg: "from-brand/30 to-brand-2/10",
    span: "sm:col-span-2 lg:col-span-1",
  },
];

export function BentoSolutions() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const spatialHover = useSpatialHover();

  return (
    <section id="solucoes" className="relative py-16 md:py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Por que ter um site profissional?"
            title={
              <>
                Tudo que seu negócio ganha com{" "}
                <span className="text-gradient">um site feito para vender</span>
              </>
            }
            description="Não é só aparência — é uma ferramenta de vendas. Cada detalhe é pensado para atrair, convencer e levar o cliente a falar com você."
            animated={false}
          />
        </motion.div>

        <div
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 28 }
              }
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              {...spatialHover}
              className={`spatial-card group p-6 transition-all duration-300 ${card.span}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.iconBg} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]`}
                >
                  <card.icon className="h-5 w-5 text-foreground" />
                </div>

                {/* Text */}
                <h3 className="mt-4 text-base font-semibold leading-snug">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-grow">
                  {card.desc}
                </p>

                {/* Inline visual (if exists) */}
                {card.visual && (
                  <div className="mt-4">{card.visual}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
          }
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex justify-center"
        >
          <a
            id="bento-cta-whatsapp"
            href={WA_HREF}
            target="_blank"
            rel="noreferrer"
            className="magnetic-btn group inline-flex items-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 glow"
          >
            <MessageCircle className="h-4 w-4" />
            Quero essas vantagens no meu site
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Transition to next section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <div className="h-16 w-px bg-gradient-to-b from-brand/0 via-brand/30 to-brand/0 mb-6" />
          <p className="text-sm font-medium text-brand uppercase tracking-widest max-w-sm mx-auto">
            Veja na prática
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Inline micro-visuals for featured cards ─── */

function TrustVisual() {
  return (
    <div className="space-y-5 mt-2">
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3 text-center">
          <div className="text-xl font-bold text-gradient">94%</div>
          <div className="text-[10px] text-muted-foreground mt-0.5">julgam pela aparência</div>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3 text-center">
          <div className="text-xl font-bold text-gradient">3s</div>
          <div className="text-[10px] text-muted-foreground mt-0.5">para decidir ficar</div>
        </div>
        <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3 text-center">
          <div className="text-xl font-bold text-gradient">75%</div>
          <div className="text-[10px] text-muted-foreground mt-0.5">pesquisam online antes</div>
        </div>
      </div>

      {/* Before / After comparison */}
      <div className="flex items-stretch gap-3">
        {/* Before */}
        <div className="flex-1 rounded-xl bg-white/[0.04] border border-white/[0.06] p-3.5 space-y-2.5">
          <div className="text-[10px] uppercase tracking-wider text-destructive/70 font-medium">
            Sem site
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-white/6" />
            <div className="h-1.5 w-4/5 rounded bg-white/4" />
            <div className="h-1.5 w-3/5 rounded bg-white/3" />
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <div className="h-5 w-5 rounded-full bg-destructive/20" />
            <div className="h-1.5 w-10 rounded bg-white/6" />
          </div>
          <div className="text-[10px] text-destructive/60 mt-1">
            Cliente fecha a aba ✕
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center flex-shrink-0">
          <ArrowRight className="h-4 w-4 text-brand/60" />
        </div>

        {/* After */}
        <div className="flex-1 rounded-xl bg-white/[0.04] border border-brand/20 p-3.5 space-y-2.5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.06] to-transparent" />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-wider text-brand/80 font-medium">
              Com site
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded bg-brand/25" />
              <div className="h-1.5 w-4/5 rounded bg-brand/15" />
              <div className="h-1.5 w-3/5 rounded bg-brand-2/15" />
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="h-5 w-5 rounded-full bg-brand/30 flex items-center justify-center">
                <ShieldCheck className="h-3 w-3 text-brand" />
              </div>
              <div className="h-1.5 w-10 rounded bg-brand/20" />
            </div>
            <div className="text-[10px] text-brand/70 mt-1">
              Cliente chama no WhatsApp ✓
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpeedVisual() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1">
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-bold text-gradient">1.2s</span>
          <span className="text-xs text-muted-foreground">carregamento</span>
        </div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-brand"
            initial={{ width: 0 }}
            whileInView={{ width: "92%" }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </div>
  );
}

function ResponsiveVisual() {
  return (
    <div className="flex items-end gap-2 justify-center">
      {/* Desktop */}
      <div className="w-16 h-11 rounded-md bg-white/[0.06] border border-white/[0.08] p-1 relative">
        <div className="w-full h-full rounded-sm bg-gradient-to-br from-brand-2/20 to-brand-3/10" />
        <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded bg-white/10" />
      </div>
      {/* Tablet */}
      <div className="w-8 h-10 rounded-md bg-white/[0.06] border border-white/[0.08] p-0.5">
        <div className="w-full h-full rounded-sm bg-gradient-to-br from-brand/20 to-brand-2/10" />
      </div>
      {/* Phone */}
      <div className="w-5 h-9 rounded-md bg-white/[0.06] border border-brand/20 p-0.5 relative">
        <div className="w-full h-full rounded-sm bg-gradient-to-br from-brand/30 to-brand/10" />
        <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-2 h-0.5 rounded bg-white/15" />
      </div>
    </div>
  );
}

function SeoVisual() {
  return (
    <div className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-2.5 space-y-2">
      {/* Search bar */}
      <div className="flex items-center gap-2 rounded-md bg-white/[0.06] px-2 py-1">
        <Search className="h-3 w-3 text-muted-foreground/60" />
        <span className="text-[10px] text-muted-foreground/60">
          barbearia em recife
        </span>
      </div>
      {/* Result */}
      <div className="space-y-1 pl-0.5">
        <div className="text-[10px] font-semibold text-brand/90">
          Barbearia Premium — Seu Nome
        </div>
        <div className="h-1 w-4/5 rounded bg-white/8" />
        <div className="h-1 w-3/5 rounded bg-white/5" />
      </div>
    </div>
  );
}
