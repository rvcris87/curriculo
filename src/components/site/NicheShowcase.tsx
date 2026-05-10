import { MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { waLink } from "@/lib/contact";
import academia from "@/assets/mockup-academia.jpg";
import barbearia from "@/assets/mockup-barbearia.jpg";
import clinica from "@/assets/mockup-clinica.jpg";
import loja from "@/assets/mockup-loja.jpg";
import restaurante from "@/assets/mockup-restaurante.jpg";
import servicos from "@/assets/mockup-servicos.jpg";

type Niche = {
  title: string;
  desc: string;
  image: string;
  tags: string[];
  feedback: string;
  author: string;
};

const niches: Niche[] = [
  {
    title: "Academias",
    desc: "Página com modalidades, horários, professores e captação direta para matrícula.",
    image: academia,
    tags: ["WhatsApp", "Serviços", "Conversão"],
    feedback: "“Em poucas semanas começamos a receber matrículas direto pelo site.”",
    author: "Exemplo ilustrativo — academia local",
  },
  {
    title: "Barbearias",
    desc: "Catálogo de cortes, preços e botão direto para agendamento via WhatsApp.",
    image: barbearia,
    tags: ["WhatsApp", "Serviços", "Localização"],
    feedback: "“Os clientes agora agendam sozinhos. Reduziu muito a fila no telefone.”",
    author: "Exemplo ilustrativo — barbearia",
  },
  {
    title: "Clínicas e estética",
    desc: "Apresentação de procedimentos, equipe e dúvidas frequentes com agendamento.",
    image: clinica,
    tags: ["Serviços", "Depoimentos", "WhatsApp"],
    feedback: "“O site passou exatamente a confiança que eu queria transmitir.”",
    author: "Exemplo ilustrativo — clínica de estética",
  },
  {
    title: "Lojas físicas",
    desc: "Vitrine digital com produtos, promoções e direcionamento para a loja.",
    image: loja,
    tags: ["Conversão", "Localização", "WhatsApp"],
    feedback: "“As pessoas chegam na loja já sabendo o que querem comprar.”",
    author: "Exemplo ilustrativo — loja física",
  },
  {
    title: "Restaurantes e cafeterias",
    desc: "Cardápio digital, fotos, reservas e link direto para delivery.",
    image: restaurante,
    tags: ["Cardápio", "Localização", "Conversão"],
    feedback: "“Aumentou as reservas de fim de semana sem precisar pagar anúncio.”",
    author: "Exemplo ilustrativo — restaurante",
  },
  {
    title: "Prestadores de serviço",
    desc: "Página profissional para apresentar serviços, autoridade e gerar orçamentos.",
    image: servicos,
    tags: ["Serviços", "Depoimentos", "WhatsApp"],
    feedback: "“Finalmente tenho um site para enviar antes de fechar contrato.”",
    author: "Exemplo ilustrativo — prestador de serviço",
  },
];

export function NicheShowcase() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Inspiração por nicho"
          title={
            <>
              Como seu site pode <span className="text-gradient">se apresentar</span> para o cliente
            </>
          }
          description="Cada negócio precisa de uma página com estratégia, visual e informações certas. Veja exemplos de como diferentes nichos podem transformar sua presença digital."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {niches.map((n) => (
            <article
              key={n.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl glass border-gradient card-shadow transition hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={n.image}
                  alt={`Exemplo de site para ${n.title}`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold">{n.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {n.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <blockquote className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm italic text-foreground/90 leading-relaxed">{n.feedback}</p>
                  <footer className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {n.author}
                  </footer>
                </blockquote>

                <a
                  href={waLink(`Olá, Cristine! Vi seu portfólio e tenho interesse em um site para meu negócio (${n.title}).`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" />
                  Quero um site assim
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground">
          Exemplos visuais e feedbacks ilustrativos para demonstrar possibilidades de aplicação por nicho.
        </p>
      </div>
    </section>
  );
}
