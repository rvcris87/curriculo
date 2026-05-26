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
  MapPin,
  Clock,
  Scissors,
  Calendar,
} from "lucide-react";

const WA_HREF =
  "https://wa.me/5581987530744?text=Oi%2C%20Cristine!%20Quero%20um%20site%20profissional%20para%20meu%20neg%C3%B3cio.";

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero-scene relative overflow-hidden pt-24 pb-0 md:pt-32"
    >
      {/* ── Neutral premium dark background ── */}
      <div className="aurora-field absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div
        className="hero-soft-exit pointer-events-none absolute inset-x-0 bottom-0"
        aria-hidden="true"
      />

      {/* ── Content Grid ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center pb-12 md:pb-16">

          {/* ── Copy column ── */}
          <div className="lg:col-span-6">
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-brand font-semibold mb-4"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              Desenvolvedora Web & Especialista em Conversão
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="text-4xl font-bold leading-[1.15] sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[3.8rem]"
            >
              Transformo negócios locais em{" "}
              <span className="text-gradient">marcas profissionais</span> no digital
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Crio sites e landing pages de altíssima conversão para barbearias,
              clínicas, lojas e prestadores de serviço que desejam atrair novos
              clientes e valorizar sua marca.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                id="hero-cta-whatsapp"
                href={WA_HREF}
                target="_blank"
                rel="noreferrer"
                className="magnetic-btn group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 shadow-lg shadow-primary/10"
              >
                <MessageCircle className="h-4 w-4" />
                Quero um site profissional
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#modelos"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-white/10"
              >
                Ver modelos por nicho
              </a>
            </motion.div>

            {/* Core indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {[
                { icon: Smartphone, label: "Foco em Celular" },
                { icon: MessageCircle, label: "Botões de WhatsApp Estratégicos" },
                { icon: Sparkles, label: "Visual Limpo e Premium" },
                { icon: CheckCircle2, label: "Sem Mensalidades" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 text-xs text-muted-foreground"
                >
                  <Icon className="h-3.5 w-3.5 text-brand" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Visual Column (Mockup) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="lg:col-span-6 relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Authority Marquee */}
      <AuthorityStrip />
    </section>
  );
}

/* ─────────────────────────────────────────────
   HeroVisual – Detailed Mockup of a Real Site
───────────────────────────────────────────── */
function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Subtle border glow overlay */}
      <div className="absolute -inset-1 rounded-2xl bg-white/[0.02] blur-md -z-10" />

      {/* Browser shell container */}
      <div className="relative rounded-xl border border-white/[0.08] bg-[#0c0d0f] shadow-2xl overflow-hidden">
        
        {/* Browser header strip */}
        <div className="flex items-center gap-2 border-b border-white/[0.05] bg-white/[0.02] px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="ml-4 flex-1 rounded bg-white/[0.04] h-5 flex items-center px-3 justify-between">
            <span className="text-[9px] text-white/30 font-mono">
              barbeariablanck.com.br
            </span>
            <span className="text-[9px] text-emerald-400 font-mono flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              online
            </span>
          </div>
        </div>

        {/* Realistic Mini Landing Page Content */}
        <div className="p-4 space-y-4">
          
          {/* Site Menu Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
            <div className="flex items-center gap-1.5">
              <Scissors className="h-4.5 w-4.5 text-amber-500" />
              <span className="text-[10px] font-bold tracking-wider text-white">BLANCK</span>
            </div>
            <div className="flex gap-3 text-[9px] text-white/50 font-medium">
              <span>Início</span>
              <span>Serviços</span>
              <span>Contatos</span>
            </div>
          </div>

          {/* Mock Hero Section */}
          <div className="rounded-lg bg-gradient-to-r from-amber-950/20 to-amber-900/10 border border-amber-500/10 p-4 relative overflow-hidden">
            <div className="absolute right-2 top-2 opacity-10">
              <Scissors className="h-24 w-24 text-amber-500" />
            </div>
            <div className="max-w-[70%] space-y-2">
              <div className="text-[9px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                Estilo & Tradição
              </div>
              <h4 className="text-sm font-bold text-white leading-tight">
                Corte e Estilo de Alto Padrão em Recife
              </h4>
              <p className="text-[9px] text-white/50">
                Agende seu horário com os melhores profissionais da região.
              </p>
              
              {/* WhatsApp Action Button */}
              <div className="inline-flex items-center gap-1.5 rounded-md bg-[#25D366] hover:bg-[#25D366]/90 px-3 py-1.5 text-[9px] font-bold text-white shadow-md">
                <MessageCircle className="h-3 w-3 fill-white text-[#25D366]" />
                Agendar pelo WhatsApp
              </div>
            </div>
          </div>

          {/* Mock Services Section */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Principais Serviços</span>
              <span className="text-[8px] text-amber-400">ver todos</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Corte Moderno", price: "R$ 45", desc: "Degradê, social ou clássico" },
                { name: "Barba & Toalha Quente", price: "R$ 35", desc: "Alinhamento com navalha" },
                { name: "Combo Premium", price: "R$ 70", desc: "Corte + barba + hidratação" },
                { name: "Design de Sobrancelha", price: "R$ 20", desc: "Limpeza detalhada" },
              ].map((s) => (
                <div key={s.name} className="rounded border border-white/[0.04] bg-white/[0.01] p-2.5 space-y-1">
                  <div className="flex justify-between items-center text-[9px]">
                    <span className="font-semibold text-white/80">{s.name}</span>
                    <span className="text-amber-400 font-bold">{s.price}</span>
                  </div>
                  <p className="text-[8px] text-white/40 leading-normal">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Details Block */}
          <div className="grid grid-cols-3 gap-2 border-t border-white/[0.04] pt-3 text-[9px]">
            <div className="flex items-center gap-1.5 text-white/60">
              <MapPin className="h-3.5 w-3.5 text-amber-500 shrink-0" />
              <div className="min-w-0">
                <div className="font-semibold text-white/80">Endereço</div>
                <div className="text-white/40 truncate">Av. Boa Viagem, PE</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-white/60">
              <Clock className="h-3.5 w-3.5 text-amber-500 shrink-0" />
              <div>
                <div className="font-semibold text-white/80">Funcionamento</div>
                <div className="text-white/40">Seg a Sáb 9h-20h</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-white/60">
              <Star className="h-3.5 w-3.5 text-amber-500 shrink-0 fill-amber-500/20" />
              <div>
                <div className="font-semibold text-white/80">Avaliação Google</div>
                <div className="text-white/40 flex items-center gap-0.5">
                  <span className="font-bold text-white/80">4.9</span>
                  <span>(180+ reviews)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   AuthorityStrip – scrolling marquee
───────────────────────────────────────────── */
function AuthorityStrip() {
  const items = [
    { icon: Smartphone, label: "Sites responsivos" },
    { icon: Target, label: "Foco em conversão" },
    { icon: MessageCircle, label: "WhatsApp integrado" },
    { icon: Sparkles, label: "Visual premium" },
    { icon: Zap, label: "Entrega rápida" },
    { icon: Star, label: "Design moderno" },
    { icon: CheckCircle2, label: "Projetos reais" },
    { icon: TrendingUp, label: "Mais clientes" },
  ];

  const marqueeItems = [...items, ...items];

  return (
    <div className="relative border-t border-white/[0.04] bg-white/[0.01] overflow-hidden py-3">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="authority-marquee flex gap-8 w-max">
        {marqueeItems.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 whitespace-nowrap text-xs text-muted-foreground flex-shrink-0"
          >
            <item.icon className="h-3.5 w-3.5 text-brand flex-shrink-0" />
            <span className="font-medium">{item.label}</span>
            <span className="text-white/10 ml-4">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
