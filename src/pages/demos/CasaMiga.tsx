import { useMemo, useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useDemoSetup } from "./useDemoSetup";

const C = {
  cream: "#FFF4E2",
  crust: "#B4441B",
  brown: "#3A2215",
  mustard: "#F2B544",
  soft: "#7A5A45",
};

type Item = { id: string; nome: string; desc: string; preco: number };

const cardapio: Record<string, Item[]> = {
  Pães: [
    {
      id: "p1",
      nome: "Levain da casa",
      desc: "Fermentação natural de 36h, casca crocante",
      preco: 24,
    },
    {
      id: "p2",
      nome: "Focaccia de alecrim",
      desc: "Azeite, flor de sal e alecrim fresco",
      preco: 19,
    },
    {
      id: "p3",
      nome: "Pão de milho",
      desc: "Receita da avó, com erva-doce",
      preco: 14,
    },
    {
      id: "p4",
      nome: "Baguete tradicional",
      desc: "Assada 3x ao dia",
      preco: 9,
    },
  ],
  Doces: [
    {
      id: "d1",
      nome: "Croissant de manteiga",
      desc: "Folhado francês, 27 camadas",
      preco: 12,
    },
    {
      id: "d2",
      nome: "Bolo de rolo",
      desc: "Goiabada cascão, fatia generosa",
      preco: 11,
    },
    {
      id: "d3",
      nome: "Cinnamon roll",
      desc: "Canela, açúcar mascavo e cream cheese",
      preco: 13,
    },
  ],
  Café: [
    {
      id: "c1",
      nome: "Espresso",
      desc: "Grão do Cariri, torra média",
      preco: 7,
    },
    {
      id: "c2",
      nome: "Cappuccino",
      desc: "Leite vaporizado e cacau",
      preco: 12,
    },
    { id: "c3", nome: "Coado na hora", desc: "Método V60, 300ml", preco: 10 },
  ],
};

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function CasaMiga() {
  useDemoSetup(
    "Casa Miga — Padaria artesanal",
    "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=DM+Serif+Display:ital@1&family=Inter:wght@400;500;600&display=swap",
    C.cream,
  );
  const [aba, setAba] = useState("Pães");
  const [carrinho, setCarrinho] = useState<Record<string, number>>({});

  const todos = useMemo(() => Object.values(cardapio).flat(), []);
  const itens = todos.filter((i) => carrinho[i.id]);
  const total = itens.reduce((s, i) => s + i.preco * carrinho[i.id], 0);
  const qtd = itens.reduce((s, i) => s + carrinho[i.id], 0);

  const alterar = (id: string, d: number) =>
    setCarrinho((c) => {
      const n = Math.max(0, (c[id] ?? 0) + d);
      const copy = { ...c, [id]: n };
      if (!n) delete copy[id];
      return copy;
    });

  const pedido = `Olá, Casa Miga! Quero encomendar:\n${itens
    .map((i) => `• ${carrinho[i.id]}x ${i.nome}`)
    .join("\n")}\nTotal: ${brl(total)}`;

  return (
    <div
      className="demo-root min-h-screen"
      style={
        {
          background: C.cream,
          color: C.brown,
          fontFamily: "Inter, sans-serif",
          "--f-display": "'Bricolage Grotesque', sans-serif",
        } as React.CSSProperties
      }
    >
      {/* Aviso */}
      <div
        className="py-2 text-center text-xs font-medium"
        style={{ background: C.brown, color: C.cream }}
      >
        Fornada de hoje saiu às 7h · Encomendas até 18h para retirar amanhã
      </div>

      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span
          className="text-2xl font-extrabold tracking-tight"
          style={{ fontFamily: "'Bricolage Grotesque'" }}
        >
          casa miga
        </span>
        <nav className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#cardapio">Cardápio</a>
          <a href="#fornadas">Fornadas</a>
          <a href="#visite">Visite</a>
        </nav>
        <a
          href="#cardapio"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          style={{ background: C.mustard }}
        >
          <ShoppingBag className="h-4 w-4" /> {qtd}
        </a>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 pb-16 pt-8">
        <h1
          className="text-[15vw] font-extrabold uppercase leading-[0.85] tracking-tight md:text-[9.5rem]"
          style={{ color: C.crust }}
        >
          Pão
          <br />
          de verdade
        </h1>
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-lg leading-relaxed">
            Fermentação natural, farinha de moinho pequeno e{" "}
            <span
              style={{
                fontFamily: "'DM Serif Display'",
                fontStyle: "italic",
                fontSize: "1.3em",
              }}
            >
              paciência
            </span>
            . Uma padaria de bairro no Espinheiro desde 2019.
          </p>
          <a
            href="#cardapio"
            className="self-start rounded-full px-8 py-4 text-base font-semibold text-white md:self-auto"
            style={{ background: C.brown }}
          >
            Montar meu pedido →
          </a>
        </div>

        {/* Selo giratório */}
        <div className="pointer-events-none absolute right-6 top-4 hidden h-36 w-36 md:block">
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full animate-[spin_18s_linear_infinite]"
          >
            <defs>
              <path
                id="circ"
                d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
              />
            </defs>
            <circle cx="50" cy="50" r="48" fill={C.mustard} />
            <text
              fontSize="9.5"
              fontWeight="700"
              letterSpacing="2"
              fill={C.brown}
            >
              <textPath href="#circ">
                FERMENTAÇÃO NATURAL · 36 HORAS ·{" "}
              </textPath>
            </text>
          </svg>
        </div>
      </section>

      {/* Cardápio */}
      <section
        id="cardapio"
        className="border-t-2"
        style={{ borderColor: C.brown }}
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-5xl font-extrabold">Cardápio</h2>
              <div
                className="flex gap-1 rounded-full p-1"
                style={{ background: "rgba(58,34,21,0.08)" }}
              >
                {Object.keys(cardapio).map((k) => (
                  <button
                    key={k}
                    onClick={() => setAba(k)}
                    className="rounded-full px-4 py-1.5 text-sm font-semibold transition"
                    style={
                      aba === k ? { background: C.brown, color: C.cream } : {}
                    }
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>

            <ul
              className="mt-8 divide-y-2 divide-dashed"
              style={{ borderColor: C.brown }}
            >
              {cardapio[aba].map((i) => (
                <li
                  key={i.id}
                  className="flex items-center gap-4 py-5"
                  style={{ borderColor: "rgba(58,34,21,0.25)" }}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-xl font-extrabold">{i.nome}</h3>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: C.crust }}
                      >
                        {brl(i.preco)}
                      </span>
                    </div>
                    <p className="mt-1 text-sm" style={{ color: C.soft }}>
                      {i.desc}
                    </p>
                  </div>
                  {carrinho[i.id] ? (
                    <div
                      className="flex items-center gap-3 rounded-full border-2 px-2 py-1"
                      style={{ borderColor: C.brown }}
                    >
                      <button
                        onClick={() => alterar(i.id, -1)}
                        aria-label="Remover"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-4 text-center text-sm font-bold">
                        {carrinho[i.id]}
                      </span>
                      <button
                        onClick={() => alterar(i.id, 1)}
                        aria-label="Adicionar"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => alterar(i.id, 1)}
                      className="rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition hover:text-white"
                      style={{ borderColor: C.brown }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = C.brown)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      Adicionar
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Sacola */}
          <aside
            className="h-fit rounded-3xl p-6 lg:sticky lg:top-6"
            style={{ background: C.brown, color: C.cream }}
          >
            <h3 className="text-2xl font-extrabold">Sua sacola</h3>
            {itens.length === 0 ? (
              <p className="mt-4 text-sm opacity-70">
                Adicione itens do cardápio para montar sua encomenda.
              </p>
            ) : (
              <ul className="mt-4 space-y-2 text-sm">
                {itens.map((i) => (
                  <li key={i.id} className="flex justify-between gap-3">
                    <span>
                      {carrinho[i.id]}× {i.nome}
                    </span>
                    <span className="opacity-80">
                      {brl(i.preco * carrinho[i.id])}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <div
              className="mt-6 flex justify-between border-t pt-4 text-lg font-bold"
              style={{ borderColor: "rgba(255,244,226,0.2)" }}
            >
              <span>Total</span>
              <span>{brl(total)}</span>
            </div>
            <a
              href={
                itens.length
                  ? `https://wa.me/5581900000000?text=${encodeURIComponent(pedido)}`
                  : undefined
              }
              target="_blank"
              rel="noreferrer"
              aria-disabled={!itens.length}
              className="mt-5 block rounded-full py-3.5 text-center text-sm font-bold transition"
              style={{
                background: C.mustard,
                color: C.brown,
                opacity: itens.length ? 1 : 0.4,
                pointerEvents: itens.length ? "auto" : "none",
              }}
            >
              Enviar pedido no WhatsApp
            </a>
          </aside>
        </div>
      </section>

      {/* Fornadas */}
      <section id="fornadas" style={{ background: C.crust, color: C.cream }}>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-5xl font-extrabold">Fornadas do dia</h2>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              ["07:00", "Levain e baguetes"],
              ["09:30", "Croissants e folhados"],
              ["12:00", "Focaccias"],
              ["16:00", "Pão de milho e bolos"],
            ].map(([h, t]) => (
              <div
                key={h}
                className="border-t-2 pt-4"
                style={{ borderColor: C.cream }}
              >
                <div className="text-4xl font-extrabold">{h}</div>
                <div className="mt-2 text-sm opacity-85">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visite */}
      <section
        id="visite"
        className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2"
      >
        <div>
          <h2 className="text-5xl font-extrabold">Passa aqui</h2>
          <p className="mt-4 text-lg">Rua do Espinheiro, 410 — Recife</p>
          <p className="mt-1" style={{ color: C.soft }}>
            Ter a dom, 6h30 às 19h
          </p>
        </div>
        <div
          className="grid h-56 place-items-center rounded-3xl border-2 text-sm font-semibold"
          style={{
            borderColor: C.brown,
            backgroundImage: `repeating-linear-gradient(45deg, transparent 0 14px, rgba(58,34,21,0.06) 14px 15px)`,
          }}
        >
          📍 Mapa do Google aqui
        </div>
      </section>

      <footer
        className="py-8 text-center text-xs"
        style={{ background: C.brown, color: C.cream }}
      >
        Site demonstrativo criado por Cristine Ribeiro · marca e dados fictícios
      </footer>
    </div>
  );
}
