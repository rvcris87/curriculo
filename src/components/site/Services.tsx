import { ArrowUpRight, Check, Plus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { waLink } from "@/lib/contact";

/**
 * PACOTES — edite preços, prazos e itens aqui.
 * `lancamento`: deixe `null` quando as vagas de lançamento acabarem.
 */
const pacotes = [
  {
    nome: "Essencial",
    para: "Para começar a aparecer no Google e no WhatsApp.",
    preco: "1.200",
    prefixo: "a partir de",
    prazo: "7 dias",
    exemplo: "Lumi Estética",
    exemploId: "lumi",
    itens: [
      "Landing page de 1 página",
      "Serviços, localização e horários",
      "Botão de WhatsApp com mensagem pronta",
      "2 rodadas de ajustes",
    ],
    lancamento: { preco: "500", vagas: 3 },
    destaque: false,
  },
  {
    nome: "Profissional",
    para: "Para quem quer vender pelo site, não só aparecer.",
    preco: "2.200",
    prefixo: "a partir de",
    prazo: "10 a 14 dias",
    exemplo: "Dom Barbearia",
    exemploId: "dom-barbearia",
    itens: [
      "Até 5 seções ou páginas",
      "1 recurso: agendamento, cardápio com pedido ou planos",
      "Galeria, depoimentos e perguntas frequentes",
      "Configuração para aparecer no Google",
      "2 rodadas de ajustes",
    ],
    lancamento: null,
    destaque: true,
  },
  {
    nome: "Sistema",
    para: "Para organizar o negócio por dentro.",
    preco: "5.000",
    prefixo: "a partir de",
    prazo: "sob orçamento",
    exemplo: "Caixa Certo",
    exemploId: "caixa-certo",
    itens: [
      "Login e painel administrativo",
      "Cadastro de clientes, vendas ou agenda",
      "Gráficos e relatórios",
      "Escopo definido numa conversa de diagnóstico",
    ],
    lancamento: null,
    destaque: false,
  },
];

const extras = [
  ["Página ou seção extra", "R$ 300"],
  ["Agendamento ou carrinho de pedido", "R$ 400"],
  ["Textos completos do site", "R$ 250"],
  ["Rodada de ajuste adicional", "R$ 80"],
];

export function Services() {
  return (
    <section id="servicos" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Serviços e preços"
          title={
            <>
              Escolha o seu <span className="text-brand">pacote</span>
            </>
          }
          description="Preço de entrada claro, prazo definido e escopo por escrito. O que passar do pacote tem valor fixo, sem surpresa."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pacotes.map((p) => (
            <article
              key={p.nome}
              className={`relative flex flex-col rounded-[1.75rem] p-7 md:p-8 ${
                p.destaque
                  ? "bg-brand text-ink"
                  : "bg-white/[0.07] text-white ring-1 ring-white/15"
              }`}
            >
              {p.destaque && (
                <span className="absolute -top-3 left-7 rounded-full bg-ink px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-brand">
                  Mais escolhido
                </span>
              )}
              {p.lancamento && (
                <span className="absolute -top-3 right-6 rotate-3 rounded-full bg-brand px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-ink">
                  🔥 Lançamento · {p.lancamento.vagas} vagas
                </span>
              )}

              <h3 className="font-display text-5xl uppercase leading-none">
                {p.nome}
              </h3>
              <p
                className={`mt-2 text-sm ${p.destaque ? "text-ink/75" : "text-muted-foreground"}`}
              >
                {p.para}
              </p>

              <div className="mt-6">
                <div
                  className={`text-xs ${p.destaque ? "text-ink/60" : "text-white/60"}`}
                >
                  {p.lancamento ? "preço de lançamento" : p.prefixo}
                </div>
                {p.lancamento ? (
                  <div className="flex items-end gap-3">
                    <span className="font-display text-6xl leading-none text-brand">
                      R$ {p.lancamento.preco}
                    </span>
                    <span className="pb-1 text-lg text-white/50 line-through">
                      R$ {p.preco}
                    </span>
                  </div>
                ) : (
                  <div className="font-display text-6xl leading-none">
                    R$ {p.preco}
                  </div>
                )}
                {p.lancamento && (
                  <p className="mt-2 text-xs text-white/70">
                    Para os {p.lancamento.vagas} primeiros clientes, em troca de
                    depoimento e autorização para mostrar no portfólio.
                  </p>
                )}
              </div>

              <div
                className={`mt-6 flex flex-wrap gap-2 text-xs font-semibold ${
                  p.destaque ? "text-ink" : "text-white"
                }`}
              >
                <span
                  className={`rounded-full px-3 py-1 ${p.destaque ? "bg-ink/10" : "bg-white/10"}`}
                >
                  ⏱ {p.prazo}
                </span>
                <a
                  href={`#projeto-${p.exemploId}`}
                  className={`rounded-full px-3 py-1 underline-offset-2 hover:underline ${
                    p.destaque ? "bg-ink/10" : "bg-white/10"
                  }`}
                >
                  Ex.: {p.exemplo}
                </a>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {p.itens.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        p.destaque ? "bg-ink text-brand" : "bg-brand text-ink"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(
                  p.lancamento
                    ? `Olá, Cristine! Quero uma das vagas de lançamento do pacote ${p.nome}.`
                    : `Olá, Cristine! Tenho interesse no pacote ${p.nome}.`,
                )}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition hover:scale-[1.02] ${
                  p.destaque ? "bg-ink text-white" : "bg-brand text-ink"
                }`}
              >
                {p.lancamento ? "Quero uma vaga" : "Quero esse pacote"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        {/* Extras + manutenção */}
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <div className="rounded-[1.75rem] bg-white/[0.07] p-7 ring-1 ring-white/15 lg:col-span-2">
            <h3 className="font-display text-3xl uppercase">
              Extras com preço fixo
            </h3>
            <ul className="mt-5 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
              {extras.map(([n, v]) => (
                <li
                  key={n}
                  className="flex items-center justify-between gap-3 border-b border-white/10 pb-3"
                >
                  <span className="inline-flex items-center gap-2">
                    <Plus className="h-4 w-4 text-brand" /> {n}
                  </span>
                  <span className="font-semibold text-brand">{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between rounded-[1.75rem] bg-gray p-7 text-ink">
            <div>
              <h3 className="font-display text-3xl uppercase">
                Manutenção mensal
              </h3>
              <p className="mt-2 text-sm text-ink/75">
                Hospedagem, pequenos ajustes e atualizações sem dor de cabeça.
              </p>
            </div>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <span className="font-display text-5xl leading-none">
                  R$ 150
                </span>
                <span className="text-sm text-ink/60">/mês</span>
              </div>
              <span className="text-xs text-ink/60">opcional</span>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Pagamento: 50% para começar e 50% na entrega · Pix ou cartão · Domínio
          .com.br (cerca de R$ 40/ano) pago direto pelo cliente.
        </p>
      </div>
    </section>
  );
}
