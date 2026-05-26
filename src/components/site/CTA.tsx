import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { useSpatialHover } from "../../hooks/useSpatialHover";

const WA_HREF =
  "https://wa.me/5581987530744?text=Oi%2C%20Cristine!%20Quero%20pedir%20um%20or%C3%A7amento%20para%20um%20site%20profissional.";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const spatialHover = useSpatialHover();

  const badges = [
    "Site responsivo",
    "WhatsApp integrado",
    "Visual profissional",
    "Estratégia por nicho",
  ];

  return (
    <section
      id="contato"
      className="relative py-16 md:py-24 overflow-hidden border-t border-white/[0.04]"
      ref={ref}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-white/[0.01]"
      />

      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          {...spatialHover}
          className="spatial-card relative overflow-hidden rounded-[2rem] text-center transition-all duration-300 shadow-2xl border border-white/[0.08]"
          style={{
            background: "linear-gradient(180deg, #111215 0%, #0c0d0f 100%)",
          }}
        >
          {/* ── Content layer ───────────────────────────────────────────── */}
          <div className="relative z-10 flex flex-col items-center px-8 py-12 md:px-16 md:py-18">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-brand border border-white/[0.08]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
              </span>
              Vamos Conversar
            </div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl max-w-3xl animate-fade-in"
            >
              Vamos construir uma{" "}
              <span className="text-gradient">presença digital</span> mais
              profissional para o seu negócio?
            </motion.h2>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg"
            >
              Me chama no WhatsApp e eu te ajudo a entender qual tipo de site
              combina melhor com seu momento.
            </motion.p>

            {/* Quality badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {badges.map((badge, i) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 text-xs text-muted-foreground"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand" />
                  {badge}
                </motion.div>
              ))}
            </div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <a
                id="cta-final-whatsapp"
                href={WA_HREF}
                target="_blank"
                rel="noreferrer"
                className="group/btn relative inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="relative z-10 h-5 w-5 fill-white text-[#25D366]" />
                <span className="relative z-10">
                  Pedir orçamento no WhatsApp
                </span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
