import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Instagram,
  ShieldCheck,
  MessageCircle,
  Sparkles,
  ClipboardList,
  Smartphone,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface ProblemCard {
  icon: React.ElementType;
  title: string;
  desc: string;
  accent: string;
  iconBg: string;
  span: string;
  visual?: React.ReactNode;
}

const cards: ProblemCard[] = [
  {
    icon: Instagram,
    title: "Seu Instagram não explica tudo",
    desc: "Um site organiza seus serviços, diferenciais, localização e contato em uma experiência clara e profissional.",
    accent: "from-[#E1306C]/25 to-[#833AB4]/15",
    iconBg: "from-[#E1306C]/25 to-[#833AB4]/15",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
    visual: <InstagramVsWebsite />,
  },
  {
    icon: ShieldCheck,
    title: "Mais confiança antes do primeiro contato",
    desc: "Quando o cliente pesquisa seu negócio, uma página bem feita transmite autoridade e reduz dúvidas.",
    accent: "from-brand/30 to-brand-2/15",
    iconBg: "from-brand/25 to-brand/10",
    span: "lg:col-span-1",
    visual: <TrustMeter />,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp no caminho certo",
    desc: "Botões estratégicos levam o visitante direto para uma conversa com mensagem pronta.",
    accent: "from-[#25D366]/25 to-[#25D366]/10",
    iconBg: "from-[#25D366]/25 to-[#25D366]/10",
    span: "lg:col-span-1",
    visual: <WhatsAppFlow />,
  },
  {
    icon: Sparkles,
    title: "Visual que valoriza seu serviço",
    desc: "Design moderno ajuda seu negócio a parecer mais premium e memorável.",
    accent: "from-brand-3/25 to-brand-3/10",
    iconBg: "from-brand-3/25 to-brand-3/10",
    span: "lg:col-span-1",
  },
  {
    icon: ClipboardList,
    title: "Informações sempre acessíveis",
    desc: "Horários, serviços, localização, galeria, cardápio ou agendamento em um só lugar.",
    accent: "from-brand-2/25 to-brand/10",
    iconBg: "from-brand-2/25 to-brand-2/10",
    span: "lg:col-span-1",
    visual: <InfoGrid />,
  },
  {
    icon: Smartphone,
    title: "Feito para celular",
    desc: "Seu cliente provavelmente vai acessar pelo smartphone. O site precisa ser rápido, bonito e responsivo.",
    accent: "from-sky-500/20 to-brand-2/10",
    iconBg: "from-sky-500/25 to-sky-500/10",
    span: "sm:col-span-2 lg:col-span-2",
    visual: <MobileFirst />,
  },
];

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problema" className="relative py-16 md:py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Problemas que um site resolve"
            title={
              <>
                Seu negócio pode estar perdendo clientes por{" "}
                <span className="text-gradient">
                  não ter uma presença digital profissional
                </span>
              </>
            }
            description="Muitos clientes pesquisam antes de comprar, contratar ou chamar no WhatsApp. Sem um site profissional, seu negócio perde credibilidade, visibilidade e oportunidades todos os dias."
            animated={false}
          />
        </motion.div>

        <div
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 28, rotateX: 8 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateX: 0 }
                  : { opacity: 0, y: 28, rotateX: 8 }
              }
              transition={{
                duration: 0.6,
                delay: i * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`bento-card group relative overflow-hidden rounded-2xl glass-strong border-gradient p-6 transition-all duration-500 hover:bg-white/[0.06] ${card.span}`}
            >
              {/* Ambient glow on hover */}
              <div
                className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
              />

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

                {/* Inline visual */}
                {card.visual && (
                  <div className="mt-4">{card.visual}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition to next section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <div className="h-16 w-px bg-gradient-to-b from-brand/0 via-brand/30 to-brand/0 mb-6" />
          <p className="text-sm font-medium text-brand uppercase tracking-widest max-w-sm mx-auto">
            Mas não precisa ser assim
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Micro-visuals ─── */

function InstagramVsWebsite() {
  return (
    <div className="flex items-stretch gap-3 mt-1">
      {/* Instagram limitation */}
      <div className="flex-1 rounded-xl bg-white/[0.04] border border-white/[0.06] p-3.5 space-y-2.5">
        <div className="flex items-center gap-1.5">
          <Instagram className="h-3 w-3 text-[#E1306C]/70" />
          <span className="text-[10px] uppercase tracking-wider text-[#E1306C]/70 font-medium">
            Só Instagram
          </span>
        </div>
        <div className="space-y-1.5">
          <div className="h-8 w-full rounded-lg bg-white/[0.05]" />
          <div className="h-1.5 w-4/5 rounded bg-white/4" />
          <div className="h-1.5 w-3/5 rounded bg-white/3" />
        </div>
        <div className="flex items-center gap-1 mt-1">
          <div className="h-1 w-1 rounded-full bg-destructive/40" />
          <span className="text-[9px] text-muted-foreground/50">Serviços espalhados</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-1 w-1 rounded-full bg-destructive/40" />
          <span className="text-[9px] text-muted-foreground/50">Difícil achar informação</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-1 w-1 rounded-full bg-destructive/40" />
          <span className="text-[9px] text-muted-foreground/50">Depende do algoritmo</span>
        </div>
      </div>

      {/* Website */}
      <div className="flex-1 rounded-xl bg-white/[0.04] border border-brand/20 p-3.5 space-y-2.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.05] to-transparent" />
        <div className="relative">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-sm bg-brand/30" />
            <span className="text-[10px] uppercase tracking-wider text-brand/80 font-medium">
              Com site
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="h-8 w-full rounded-lg bg-brand/10 flex items-center justify-center">
              <div className="h-1.5 w-12 rounded bg-brand/30" />
            </div>
            <div className="h-1.5 w-4/5 rounded bg-brand/15" />
            <div className="h-1.5 w-3/5 rounded bg-brand-2/12" />
          </div>
          <div className="flex items-center gap-1 mt-1">
            <div className="h-1 w-1 rounded-full bg-brand/50" />
            <span className="text-[9px] text-brand/60">Tudo organizado</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-1 w-1 rounded-full bg-brand/50" />
            <span className="text-[9px] text-brand/60">Contato fácil</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-1 w-1 rounded-full bg-brand/50" />
            <span className="text-[9px] text-brand/60">Seu domínio próprio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustMeter() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-muted-foreground">Confiança do cliente</span>
        <span className="text-[10px] font-semibold text-brand/80">Alto</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand/60 to-brand"
          initial={{ width: 0 }}
          whileInView={{ width: "88%" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
      <div className="flex items-center gap-1.5">
        <ShieldCheck className="h-3 w-3 text-brand/60" />
        <span className="text-[9px] text-muted-foreground/70">
          Site profissional = mais credibilidade
        </span>
      </div>
    </div>
  );
}

function WhatsAppFlow() {
  return (
    <div className="flex items-center gap-2">
      {/* Site */}
      <div className="flex-1 rounded-lg bg-white/[0.04] border border-white/[0.06] px-2 py-1.5 text-center">
        <div className="text-[9px] text-muted-foreground/60">Visitou o site</div>
      </div>
      {/* Arrow */}
      <div className="text-brand/40 text-xs">→</div>
      {/* CTA */}
      <div className="flex-1 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 px-2 py-1.5 text-center">
        <div className="text-[9px] text-[#25D366]/80 font-medium">Clicou no botão</div>
      </div>
      {/* Arrow */}
      <div className="text-brand/40 text-xs">→</div>
      {/* WhatsApp */}
      <div className="flex-1 rounded-lg bg-[#25D366]/15 border border-[#25D366]/25 px-2 py-1.5 text-center">
        <MessageCircle className="h-3 w-3 text-[#25D366] mx-auto mb-0.5" />
        <div className="text-[9px] text-[#25D366]/80 font-medium">Conversa</div>
      </div>
    </div>
  );
}

function InfoGrid() {
  const items = ["Serviços", "Horários", "Local", "Galeria"];
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-lg bg-white/[0.04] border border-white/[0.06] px-2 py-1.5 text-center"
        >
          <span className="text-[9px] text-muted-foreground/70">{item}</span>
        </div>
      ))}
    </div>
  );
}

function MobileFirst() {
  return (
    <div className="flex items-center gap-4">
      {/* Stat */}
      <div className="flex-shrink-0 text-center">
        <div className="text-2xl font-bold text-gradient">85%</div>
        <div className="text-[10px] text-muted-foreground mt-0.5">acessam pelo celular</div>
      </div>
      {/* Divider */}
      <div className="h-10 w-px bg-white/[0.08] flex-shrink-0" />
      {/* Devices */}
      <div className="flex items-end gap-2.5 flex-shrink-0">
        {/* Phone highlighted */}
        <div className="w-7 h-12 rounded-lg bg-brand/15 border border-brand/25 p-0.5 relative">
          <div className="w-full h-full rounded-md bg-gradient-to-b from-brand/20 to-brand/5" />
          <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-2.5 h-0.5 rounded bg-brand/30" />
        </div>
        {/* Tablet */}
        <div className="w-9 h-11 rounded-lg bg-white/[0.05] border border-white/[0.08] p-0.5 opacity-50">
          <div className="w-full h-full rounded-md bg-white/[0.04]" />
        </div>
        {/* Desktop */}
        <div className="w-14 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] p-0.5 opacity-30 relative">
          <div className="w-full h-full rounded-md bg-white/[0.04]" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded bg-white/[0.06]" />
        </div>
      </div>
      {/* Short text */}
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-muted-foreground/60 leading-relaxed">
          Mobile-first: seu site é otimizado primeiro para a tela mais usada.
        </p>
      </div>
    </div>
  );
}
