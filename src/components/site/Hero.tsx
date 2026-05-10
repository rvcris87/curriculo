import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Smartphone, MessageCircle, Target } from "lucide-react";
import { waLink } from "@/lib/contact";

const badges = [
  { icon: Smartphone, label: "Sites responsivos" },
  { icon: Target, label: "Foco em conversão" },
  { icon: Sparkles, label: "Design moderno" },
  { icon: MessageCircle, label: "WhatsApp integrado" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
            >
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              Disponível para novos projetos
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              Crio sites profissionais para{" "}
              <span className="text-gradient">negócios que querem vender mais</span> no digital
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Sou Cristine Ribeiro, desenvolvedora web. Ajudo empresas locais a terem uma
              presença online mais bonita, organizada e estratégica — com sites responsivos,
              modernos e pensados para gerar confiança e facilitar o contato pelo WhatsApp.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 text-sm text-muted-foreground/80"
            >
              Landing pages • Sites institucionais • Sistemas personalizados • Páginas para captação
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 glow"
              >
                Quero um site para minha empresa
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-white/10"
              >
                Ver projetos
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
                >
                  <b.icon className="h-3.5 w-3.5 text-brand" />
                  {b.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
      {/* Glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-brand/30 via-brand-2/20 to-brand-3/30 blur-3xl" />

      {/* Mock browser card */}
      <div className="absolute inset-0 glass-strong rounded-3xl border-gradient card-shadow overflow-hidden">
        <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
        </div>
        <div className="space-y-4 p-5">
          <div className="h-3 w-24 rounded bg-brand/40" />
          <div className="h-6 w-3/4 rounded bg-white/10" />
          <div className="h-6 w-1/2 rounded bg-white/10" />
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="h-20 rounded-xl bg-gradient-to-br from-brand/30 to-brand-2/20" />
            <div className="h-20 rounded-xl bg-gradient-to-br from-brand-3/30 to-brand/10" />
          </div>
          <div className="h-10 w-40 rounded-xl bg-primary/90" />
        </div>
      </div>

      {/* Floating metric card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -left-6 bottom-10 glass-strong card-shadow rounded-2xl p-4 w-44"
      >
        <div className="text-xs text-muted-foreground">Conversão</div>
        <div className="mt-1 text-2xl font-bold text-gradient">+218%</div>
        <div className="mt-3 h-1.5 rounded-full bg-white/5">
          <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-brand to-brand-3" />
        </div>
      </motion.div>

      {/* Floating chip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="absolute -right-3 top-10 glass-strong card-shadow rounded-2xl px-4 py-3 flex items-center gap-2"
      >
        <MessageCircle className="h-4 w-4 text-brand" />
        <div className="text-xs">
          <div className="font-semibold">WhatsApp ativo</div>
          <div className="text-muted-foreground">resposta rápida</div>
        </div>
      </motion.div>
    </div>
  );
}
