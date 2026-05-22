import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Smartphone,
  MessageCircle,
  Target,
  Zap,
  Star,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { waLink } from "@/lib/contact";

const WA_HREF =
  "https://wa.me/5581987530744?text=Oi%2C%20Cristine!%20Quero%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

const trustBadges = [
  { icon: Smartphone, label: "Sites responsivos" },
  { icon: Target, label: "Foco em conversão" },
  { icon: MessageCircle, label: "WhatsApp integrado" },
  { icon: Sparkles, label: "Visual premium" },
  { icon: Zap, label: "Entrega estratégica" },
  { icon: Star, label: "Design moderno" },
  { icon: CheckCircle2, label: "Projetos reais" },
  { icon: TrendingUp, label: "Resultados mensuráveis" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-scene relative overflow-hidden pt-32 pb-0 md:pt-40"
    >
      {/* Backgrounds */}
      <div
        className="aurora-field absolute inset-0 pointer-events-none"
        data-depth="0.35"
      />
      <div
        className="mesh-particles absolute inset-0 pointer-events-none"
        data-depth="0.55"
      />
      <div
        className="absolute inset-0 grid-bg pointer-events-none"
        data-depth="0.8"
      />

      {/* Floating decorative screens */}
      <div
        className="hero-float-field pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="floating-screen floating-screen-a glass-strong"
          data-depth="1.1"
        />
        <div
          className="floating-screen floating-screen-b glass"
          data-depth="1.6"
        />
        <div
          className="floating-screen floating-screen-c glass-strong"
          data-depth="2"
        />
      </div>

      {/* Soft exit gradient */}
      <div
        className="hero-soft-exit pointer-events-none absolute inset-x-0 bottom-0"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center pb-20 md:pb-28">
          {/* Copy */}
          <div className="hero-copy lg:col-span-7">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-stagger inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              Disponível para novos projetos
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="hero-stagger mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
            >
              Transformo negócios locais em{" "}
              <span className="text-gradient">
                marcas mais profissionais
              </span>{" "}
              no digital
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hero-stagger mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Crio sites modernos, rápidos e estratégicos para barbearias,
              clínicas, lojas, restaurantes e prestadores de serviço atraírem
              mais clientes pelo WhatsApp.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="hero-stagger mt-9 flex flex-wrap gap-3"
            >
              <a
                id="hero-cta-whatsapp"
                href={WA_HREF}
                target="_blank"
                rel="noreferrer"
                className="magnetic-btn group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 glow"
              >
                <MessageCircle className="h-4 w-4" />
                Quero um site premium
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                id="hero-cta-nichos"
                href="#nichos"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-white/10"
              >
                Ver modelos por nicho
              </a>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-visual-wrap lg:col-span-5"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problema"
        className="scroll-indicator"
        aria-label="Rolar para a próxima seção"
      >
        <span />
      </a>

      {/* Authority Strip */}
      <AuthorityStrip />
    </section>
  );
}

function HeroVisual() {
  return (
    <div
      className="hero-device relative mx-auto aspect-[4/5] w-full max-w-md"
      data-depth="1.35"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-brand/30 via-brand-2/20 to-brand-3/30 blur-3xl" />

      {/* Mock browser card */}
      <div className="hero-device-shell absolute inset-0 glass-strong rounded-3xl border-gradient card-shadow overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="ml-3 flex-1 rounded-md bg-white/5 h-5 flex items-center px-3">
            <span className="text-[9px] text-white/30">meusite.com.br</span>
          </div>
        </div>

        {/* Mock site content */}
        <div className="space-y-4 p-5">
          {/* Niche tag */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-2.5 py-1">
            <div className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] text-brand font-medium">Barbearia Premium</span>
          </div>

          {/* Mock headline */}
          <div className="space-y-2">
            <div className="h-4 w-3/4 rounded-md bg-white/15" />
            <div className="h-4 w-1/2 rounded-md bg-white/10" />
          </div>

          {/* Mock subtext */}
          <div className="space-y-1.5">
            <div className="h-2 w-full rounded bg-white/6" />
            <div className="h-2 w-5/6 rounded bg-white/6" />
            <div className="h-2 w-4/6 rounded bg-white/6" />
          </div>

          {/* Mock image grid */}
          <div className="hero-device-grid grid grid-cols-2 gap-3 pt-1">
            <div className="h-20 rounded-xl bg-gradient-to-br from-brand/30 to-brand-2/20 flex items-end p-2">
              <div className="h-2 w-2/3 rounded bg-white/20" />
            </div>
            <div className="h-20 rounded-xl bg-gradient-to-br from-brand-3/30 to-brand/10 flex items-end p-2">
              <div className="h-2 w-1/2 rounded bg-white/20" />
            </div>
          </div>

          {/* Mock CTA button */}
          <div className="flex items-center gap-2">
            <div className="h-9 w-36 rounded-xl bg-primary/90 flex items-center justify-center gap-1.5">
              <div className="h-2 w-2 rounded-full bg-primary-foreground/60" />
              <div className="h-2 w-16 rounded bg-primary-foreground/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating metric: Conversão */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="hero-orbit-card absolute -left-6 bottom-10 glass-strong card-shadow rounded-2xl p-4 w-44"
        data-depth="2.2"
      >
        <div className="text-xs text-muted-foreground">Conversão via WA</div>
        <div className="mt-1 text-2xl font-bold text-gradient">+218%</div>
        <div className="mt-3 h-1.5 rounded-full bg-white/5">
          <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-brand to-brand-3" />
        </div>
      </motion.div>

      {/* Floating chip: WhatsApp */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="hero-orbit-card hero-orbit-card-alt absolute -right-3 top-10 glass-strong card-shadow rounded-2xl px-4 py-3 flex items-center gap-2"
        data-depth="2.6"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366]/20">
          <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
        </div>
        <div className="text-xs">
          <div className="font-semibold">WhatsApp ativo</div>
          <div className="text-muted-foreground">resposta rápida</div>
        </div>
      </motion.div>

      {/* Floating chip: Star rating */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.85 }}
        className="absolute -bottom-2 right-4 glass-strong card-shadow rounded-2xl px-3.5 py-2.5 flex items-center gap-2"
        data-depth="2"
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-3 w-3 fill-amber-400 text-amber-400"
            />
          ))}
        </div>
        <div className="text-xs font-medium">Site entregue</div>
      </motion.div>
    </div>
  );
}

function AuthorityStrip() {
  const items = [
    { icon: Smartphone, label: "Sites responsivos" },
    { icon: Target, label: "Foco em conversão" },
    { icon: MessageCircle, label: "WhatsApp integrado" },
    { icon: Sparkles, label: "Visual premium" },
    { icon: Zap, label: "Entrega estratégica" },
    { icon: Star, label: "Design moderno" },
    { icon: CheckCircle2, label: "Projetos reais" },
    { icon: TrendingUp, label: "Mais clientes" },
  ];

  // Duplicate for seamless loop
  const marqueeItems = [...items, ...items];

  return (
    <div className="relative border-t border-white/5 bg-white/[0.02] overflow-hidden py-5">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="authority-marquee flex gap-8 w-max">
        {marqueeItems.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-muted-foreground flex-shrink-0"
          >
            <item.icon className="h-4 w-4 text-brand flex-shrink-0" />
            <span className="font-medium">{item.label}</span>
            <span className="text-white/15 text-base ml-4">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
