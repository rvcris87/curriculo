import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "Preciso já ter domínio e hospedagem?",
    a: "Não necessariamente. Se você ainda não tiver, eu posso te orientar sobre as melhores opções para o seu momento. O importante é começar com uma estrutura simples, profissional e que possa evoluir.",
  },
  {
    q: "Você cria o texto do site também?",
    a: "Sim. Eu organizo os textos de forma estratégica com base nas informações do seu negócio, seus serviços, diferenciais e objetivo principal. A ideia é deixar a comunicação clara, profissional e focada em gerar contato.",
  },
  {
    q: "O site funciona bem no celular?",
    a: "Sim. O site é pensado para funcionar bem no computador e principalmente no celular, já que a maioria dos clientes acessa pelo smartphone.",
  },
  {
    q: "Consigo colocar botão para WhatsApp?",
    a: "Sim. O WhatsApp é uma das partes principais da estratégia. Os botões podem levar o cliente direto para uma conversa com mensagem pronta.",
  },
  {
    q: "Posso ter galeria, cardápio, serviços ou localização?",
    a: "Sim. Dependendo do tipo de negócio, o site pode ter galeria de fotos, lista de serviços, cardápio digital, localização, horários de atendimento, depoimentos e outras seções importantes.",
  },
  {
    q: "Quanto tempo demora para ficar pronto?",
    a: "O prazo depende do tamanho do projeto e da velocidade de envio das informações. Projetos mais simples costumam ser mais rápidos, enquanto páginas mais completas exigem mais etapas de revisão e ajustes.",
  },
  {
    q: "Você faz manutenção depois?",
    a: "Sim. Podemos combinar manutenção, ajustes pontuais ou melhorias futuras conforme a necessidade do seu negócio.",
  },
  {
    q: "Como faço para pedir um orçamento?",
    a: "É só me chamar no WhatsApp. Eu vou entender seu tipo de negócio, o que você precisa no site e indicar o melhor caminho para começar.",
  },
];

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="relative py-16 md:py-20" ref={ref}>
      <div className="mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            eyebrow="Dúvidas frequentes"
            title={
              <>
                Dúvidas antes de{" "}
                <span className="text-gradient">tirar seu site do papel?</span>
              </>
            }
            description="Separei as principais respostas para você entender como funciona o processo antes de me chamar."
            align="center"
            animated={false}
          />
        </motion.div>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`overflow-hidden rounded-2xl glass transition-all duration-300 hover:bg-white/[0.04] ${
                  isOpen ? "border border-brand/30 bg-white/[0.03]" : "border border-white/[0.08]"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base font-semibold leading-snug md:text-lg transition-colors duration-300 ${isOpen ? "text-foreground" : "text-muted-foreground"}`}>
                    {faq.q}
                  </span>
                  <div
                    className={`grid shrink-0 place-items-center rounded-full h-8 w-8 transition-colors duration-300 ${
                      isOpen
                        ? "bg-primary text-primary-foreground"
                        : "bg-white/[0.08] text-muted-foreground group-hover:bg-white/[0.12]"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 pt-1 md:px-6 md:pb-7 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-white/[0.04] mt-2 pt-5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-sm font-medium text-muted-foreground">
            Ainda ficou alguma dúvida?
          </p>
          <a
            href="https://wa.me/5581987530744?text=Oi%2C%20Cristine!%20Tenho%20uma%20d%C3%BAvida%20sobre%20cria%C3%A7%C3%A3o%20de%20site."
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,211,102,0.2)] transition hover:opacity-90 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] glow"
          >
            <MessageCircle className="h-5 w-5" />
            Me chamar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
