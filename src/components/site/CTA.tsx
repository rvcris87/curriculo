import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

const WA_HREF = waLink(
  "Oi, Cristine! Quero pedir um orçamento para um site profissional.",
);

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" ref={ref} className="relative px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-brand px-6 py-14 text-ink md:px-14 md:py-20"
      >
        <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest">
          <span className="h-2 w-2 animate-pulse rounded-full bg-background" />
          Vamos conversar
        </div>

        <h2
          className="mt-6 font-display uppercase leading-[0.88] tracking-tight"
          style={{ fontSize: "clamp(3.2rem, 9vw, 8.5rem)" }}
        >
          Seu negócio
          <br />
          <span className="text-background">merece um site</span>
          <br />
          que trabalha.
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
          <p className="max-w-md text-lg leading-relaxed text-ink/80">
            Me chama no WhatsApp, me conta do seu negócio e eu te digo qual
            formato de site faz mais sentido para o seu momento.
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              id="cta-final-whatsapp"
              href={WA_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-bold text-white transition hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" />
              Pedir orçamento
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-[14px] text-base font-bold transition hover:bg-ink hover:text-brand"
            >
              Rever os sites <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-10 -right-6 select-none font-display text-[12rem] uppercase leading-none text-ink/[0.06] md:text-[20rem]"
        >
          CR
        </span>
      </motion.div>
    </section>
  );
}
