import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const badges = [
    "Site responsivo",
    "WhatsApp integrado",
    "Visual profissional",
    "Estratégia por nicho",
  ];

  return (
    <section id="contato" className="relative py-16 md:py-20" ref={ref}>
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 32, scale: 0.98 }
          }
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] glass-strong border-gradient p-10 md:p-16 text-center shadow-2xl"
        >
          {/* Fundo elegante */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-brand-2/10" />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/30 blur-3xl opacity-50" />
          <div className="pointer-events-none absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-brand-2/20 blur-3xl opacity-40" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Tag superior */}
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-brand-2 border border-brand/20 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-2 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-2"></span>
              </span>
              Projeto exclusivo
            </div>

            {/* Título e Subtítulo */}
            <h2 className="mt-8 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[54px] max-w-3xl">
              Pronta para transformar a{" "}
              <span className="text-gradient">presença digital</span> do seu negócio?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
              Me chama no WhatsApp e vamos entender qual tipo de site combina melhor com seu momento, seu público e seus objetivos.
            </p>

            {/* Selos de Qualidade */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {badges.map((badge, i) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 text-xs text-muted-foreground/90 backdrop-blur-md"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand/70" />
                  {badge}
                </motion.div>
              ))}
            </div>

            {/* Botão Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12"
            >
              <a
                href="https://wa.me/5581987530744?text=Oi%2C%20Cristine!%20Quero%20pedir%20um%20or%C3%A7amento%20para%20um%20site%20profissional."
                target="_blank"
                rel="noreferrer"
                className="group/btn relative inline-flex min-h-14 items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-10 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(37,211,102,0.25)] transition-all hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(37,211,102,0.4)]"
              >
                {/* Glow button background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                
                <MessageCircle className="relative z-10 h-5 w-5" />
                <span className="relative z-10">Pedir orçamento no WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
