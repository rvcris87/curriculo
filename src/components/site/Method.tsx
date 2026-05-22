import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import { MessageCircle, Search, Layers, PenTool, CheckCircle } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Diagnóstico rápido",
    desc: "Entendo seu negócio, público, serviços, objetivo e o que precisa aparecer no site.",
    icon: Search,
    color: "from-blue-500/25 to-brand/10",
    iconColor: "text-blue-400",
  },
  {
    n: "02",
    title: "Estrutura e estratégia",
    desc: "Organizo as seções, textos, chamadas e caminho ideal para levar o visitante até o WhatsApp.",
    icon: Layers,
    color: "from-brand/25 to-brand-2/10",
    iconColor: "text-brand",
  },
  {
    n: "03",
    title: "Design e desenvolvimento",
    desc: "Crio uma página moderna, responsiva e alinhada com a identidade do seu negócio.",
    icon: PenTool,
    color: "from-brand-2/25 to-purple-500/10",
    iconColor: "text-brand-2",
  },
  {
    n: "04",
    title: "Entrega e ajustes",
    desc: "Você revisa, solicita ajustes finais e recebe o site pronto para divulgar.",
    icon: CheckCircle,
    color: "from-purple-500/25 to-pink-500/10",
    iconColor: "text-purple-400",
  },
];

export function Method() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="metodo" className="relative py-16 md:py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Como funciona"
            title={
              <>
                Do primeiro contato ao site no ar,{" "}
                <span className="text-gradient">sem complicação</span>
              </>
            }
            description="Você me conta sobre o seu negócio, eu organizo a estratégia, crio o visual e entrego uma página pronta para apresentar sua marca com mais profissionalismo."
            align="center"
            animated={false}
          />
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 32, rotateX: 6 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateX: 0 }
                  : { opacity: 0, y: 32, rotateX: 6 }
              }
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bento-card group relative flex flex-col p-6 rounded-2xl glass-strong border-gradient overflow-hidden hover:bg-white/[0.06] transition-colors duration-500"
            >
              {/* Ambient glow on hover */}
              <div
                className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}
              />

              {/* Top area: Icon and Big Number */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-white/[0.04] border border-white/[0.06] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  <step.icon className={`h-5 w-5 ${step.iconColor}`} />
                </div>
                <span className="text-5xl font-extrabold text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 select-none tracking-tighter">
                  {step.n}
                </span>
              </div>

              {/* Text content */}
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {step.desc}
              </p>
              
              {/* Subtle line indicator */}
              <div className="h-0.5 w-full bg-white/[0.05] mt-6 rounded-full overflow-hidden">
                <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${step.color} transition-all duration-700 ease-out`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col items-center text-center p-8 rounded-3xl glass border border-white/[0.08] max-w-2xl mx-auto relative overflow-hidden group"
        >
          {/* subtle background glow */}
          <div className="absolute inset-0 bg-brand/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-6">
              Quer entender qual site faz mais sentido para o seu negócio?
            </h4>
            <a
              href="https://wa.me/5581987530744?text=Oi%2C%20Cristine!%20Quero%20entender%20qual%20site%20faz%20mais%20sentido%20para%20meu%20neg%C3%B3cio."
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] transition hover:opacity-90 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] glow"
            >
              <MessageCircle className="h-5 w-5" />
              Conversar pelo WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
