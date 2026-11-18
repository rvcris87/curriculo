import { useState } from "react";
import { MessageCircle, Minus, Plus } from "lucide-react";
import { waLink } from "@/lib/contact";

const faqs = [
  {
    q: "Quanto custa um site?",
    a: "A landing page (pacote Essencial) começa em R$ 1.200 e o site Profissional em R$ 2.200. Sistemas com login e painel começam em R$ 5.000. O valor final depende do que você precisa — e tudo fica por escrito na proposta antes de começar.",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "A landing page fica pronta em até 7 dias e o site Profissional entre 10 e 14 dias. O prazo começa quando eu recebo a entrada e o seu material (logo, fotos, serviços).",
  },
  {
    q: "Tem custo mensal?",
    a: "O único custo obrigatório é o domínio .com.br, cerca de R$ 40 por ano, pago direto por você no Registro.br. A manutenção mensal (R$ 150) é opcional e inclui hospedagem, pequenos ajustes e atualizações.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Todo pacote inclui 2 rodadas de ajustes. Antes de começar, a gente define referências e o estilo, para a primeira versão já chegar perto do que você imagina.",
  },
  {
    q: "Consigo mudar coisas no site depois?",
    a: "Pequenas mudanças (preço, horário, foto) estão incluídas na manutenção mensal. Sem o plano, cada ajuste é cobrado à parte, com valor combinado antes.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "50% de entrada para começar e 50% na entrega, antes de o site ir para o ar. Aceito Pix ou cartão (o parcelamento tem o acréscimo da maquininha).",
  },
];

export function FAQ() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 bg-gray py-20 text-ink md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-background">
              <span className="h-2 w-2 rounded-full bg-background" />
              Dúvidas
            </div>
            <h2 className="font-display text-6xl uppercase leading-[0.9] tracking-tight md:text-8xl">
              Perguntas antes de <span className="text-background">fechar</span>
            </h2>
            <p className="mt-5 max-w-sm text-base text-ink/75">
              Não achou a sua? Me pergunta direto, respondo no mesmo dia.
            </p>
            <a
              href={waLink(
                "Oi, Cristine! Tenho uma dúvida sobre criação de site.",
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              Perguntar no WhatsApp
            </a>
          </div>
        </div>

        <ul className="border-t-2 border-ink lg:col-span-7">
          {faqs.map((f, i) => {
            const open = aberta === i;
            return (
              <li key={f.q} className="border-b-2 border-ink/15">
                <button
                  onClick={() => setAberta(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-5 py-6 text-left"
                >
                  <span className="font-display text-3xl leading-none text-background">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-lg font-semibold md:text-xl">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition ${
                      open ? "bg-background text-white" : "bg-ink/10"
                    }`}
                  >
                    {open ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pl-[3.25rem] pr-12 text-base leading-relaxed text-ink/75">
                      {f.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
