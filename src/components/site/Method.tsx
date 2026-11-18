import { Check, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { waLink } from "@/lib/contact";

const etapas = [
  {
    n: "01",
    quando: "Dia 1",
    titulo: "Conversa",
    texto:
      "Você me conta do negócio, do público e do que precisa aparecer. Eu te mando a proposta.",
  },
  {
    n: "02",
    quando: "Dias 2–3",
    titulo: "Estrutura",
    texto:
      "Organizo as seções, os textos e o caminho que leva o visitante até o WhatsApp.",
  },
  {
    n: "03",
    quando: "Dias 4–7",
    titulo: "Criação",
    texto:
      "Desenho e desenvolvo o site com a identidade do seu negócio. Você acompanha pelo link.",
  },
  {
    n: "04",
    quando: "Dias 8–10",
    titulo: "Publicação",
    texto:
      "Duas rodadas de ajustes, site no ar no seu domínio e um passo a passo de como usar.",
  },
];

const preciso = [
  "Logo (PNG, de preferência sem fundo)",
  "Fotos do negócio, produtos ou serviços",
  "Lista de serviços e preços",
  "Número de WhatsApp",
  "Endereço e horário de funcionamento",
  "Links do Instagram e redes",
];

export function Method() {
  return (
    <section
      id="metodo"
      className="relative scroll-mt-24 bg-gray py-20 text-ink md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          tone="light"
          eyebrow="Como funciona"
          title={
            <>
              Do primeiro oi ao site no ar em{" "}
              <span className="text-background">10 dias</span>
            </>
          }
          description="O prazo começa quando eu recebo a entrada e o seu material. Sem sumiço, com prazo combinado por escrito."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] bg-ink/15 md:grid-cols-2 lg:grid-cols-4">
          {etapas.map((e) => (
            <li key={e.n} className="flex flex-col bg-gray p-7">
              <div className="flex items-start justify-between gap-3">
                <span className="font-display text-7xl leading-none text-background md:text-8xl">
                  {e.n}
                </span>
                <span className="rounded-full bg-ink px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
                  {e.quando}
                </span>
              </div>
              <h3 className="mt-6 font-display text-4xl uppercase leading-none">
                {e.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                {e.texto}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-5 rounded-[1.75rem] bg-background p-7 text-white md:grid-cols-12 md:p-10">
          <div className="md:col-span-5">
            <h3 className="font-display text-4xl uppercase leading-none md:text-5xl">
              O que eu preciso <span className="text-brand">de você</span>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Não tem tudo? Sem problema: eu te ajudo a organizar e indico o que
              dá para usar no lugar.
            </p>
            <a
              href={waLink(
                "Oi, Cristine! Quero entender qual site faz mais sentido para meu negócio.",
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-ink transition hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              Começar pela conversa
            </a>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 md:col-span-7">
            {preciso.map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 rounded-2xl bg-white/[0.08] px-4 py-3 text-sm"
              >
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-ink">
                  <Check className="h-3 w-3" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
