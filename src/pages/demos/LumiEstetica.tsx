import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useDemoSetup } from "./useDemoSetup";

const C = {
  bg: "#F4EFE9",
  ink: "#2B2422",
  soft: "#6E625D",
  clay: "#B98D7A",
  sage: "#7C8B76",
  line: "rgba(43,36,34,0.14)",
};

const tratamentos = {
  Facial: [
    { nome: "Limpeza de pele profunda", tempo: "70 min", preco: "R$ 180" },
    { nome: "Peeling de diamante", tempo: "50 min", preco: "R$ 220" },
    { nome: "Microagulhamento", tempo: "60 min", preco: "R$ 390" },
    {
      nome: "Hidratação com ácido hialurônico",
      tempo: "45 min",
      preco: "R$ 160",
    },
  ],
  Corporal: [
    { nome: "Drenagem linfática", tempo: "60 min", preco: "R$ 140" },
    { nome: "Massagem modeladora", tempo: "60 min", preco: "R$ 150" },
    { nome: "Radiofrequência corporal", tempo: "40 min", preco: "R$ 210" },
  ],
  Laser: [
    { nome: "Depilação a laser — axilas", tempo: "15 min", preco: "R$ 99" },
    { nome: "Depilação a laser — pernas", tempo: "40 min", preco: "R$ 290" },
    { nome: "Laser para manchas", tempo: "30 min", preco: "R$ 350" },
  ],
} as const;

type Categoria = keyof typeof tratamentos;

const wa = (msg: string) =>
  `https://wa.me/5581900000000?text=${encodeURIComponent(msg)}`;

export function LumiEstetica() {
  useDemoSetup(
    "Lumi Estética — Recife",
    "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;1,9..144,300&family=Instrument+Sans:wght@400;500;600&display=swap",
    C.bg,
  );
  const [cat, setCat] = useState<Categoria>("Facial");
  const [menu, setMenu] = useState(false);

  return (
    <div
      className="demo-root min-h-screen antialiased"
      style={
        {
          background: C.bg,
          color: C.ink,
          fontFamily: "'Instrument Sans', sans-serif",
          "--f-display": "'Fraunces', serif",
        } as React.CSSProperties
      }
    >
      {/* Nav */}
      <header
        className="sticky top-0 z-20 border-b backdrop-blur-md"
        style={{ borderColor: C.line, background: "rgba(244,239,233,0.85)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#topo"
            className="text-2xl italic"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            lumi<span style={{ color: C.clay }}>.</span>
          </a>
          <nav
            className="hidden items-center gap-8 text-sm md:flex"
            style={{ color: C.soft }}
          >
            <a href="#tratamentos" className="hover:opacity-60">
              Tratamentos
            </a>
            <a href="#avaliacao" className="hover:opacity-60">
              Avaliação
            </a>
            <a href="#depoimentos" className="hover:opacity-60">
              Depoimentos
            </a>
            <a href="#contato" className="hover:opacity-60">
              Contato
            </a>
          </nav>
          <a
            href={wa("Olá! Quero agendar uma avaliação na Lumi.")}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full px-5 py-2.5 text-sm font-medium text-white md:inline-flex"
            style={{ background: C.ink }}
          >
            Agendar avaliação
          </a>
          <button
            className="md:hidden"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
          >
            {menu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menu && (
          <div
            className="border-t px-6 py-4 md:hidden"
            style={{ borderColor: C.line }}
          >
            {["tratamentos", "avaliacao", "depoimentos", "contato"].map(
              (id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenu(false)}
                  className="block py-2 capitalize"
                >
                  {id === "avaliacao" ? "Avaliação" : id}
                </a>
              ),
            )}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="topo"
        className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-14 md:grid-cols-12 md:pt-20"
      >
        <div className="md:col-span-7">
          <p
            className="text-xs uppercase tracking-[0.25em]"
            style={{ color: C.sage }}
          >
            Estética integrativa · Boa Viagem
          </p>
          <h1 className="mt-6 text-5xl font-light leading-[1.02] md:text-7xl">
            Sua pele,
            <br />
            <em style={{ color: C.clay }}>no tempo dela.</em>
          </h1>
          <p
            className="mt-8 max-w-md text-base leading-relaxed"
            style={{ color: C.soft }}
          >
            Tratamentos faciais e corporais pensados a partir de uma avaliação
            individual. Sem pacote empurrado, sem promessa milagrosa.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={wa("Olá! Quero agendar uma avaliação na Lumi.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white"
              style={{ background: C.ink }}
            >
              Agendar avaliação gratuita <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#tratamentos"
              className="text-sm underline underline-offset-4"
            >
              Ver tratamentos
            </a>
          </div>
        </div>

        {/* Composição visual */}
        <div className="relative h-[380px] md:col-span-5 md:h-auto">
          <div
            className="absolute right-0 top-0 h-[85%] w-[72%] rounded-t-full"
            style={{
              background: `linear-gradient(160deg, #E7D3C7, ${C.clay})`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 h-[55%] w-[52%] rounded-t-full"
            style={{
              background: `linear-gradient(160deg, #C9D1C2, ${C.sage})`,
            }}
          />
          <div
            className="absolute bottom-6 right-4 rounded-2xl bg-white/85 px-5 py-4 shadow-sm backdrop-blur"
            style={{ color: C.ink }}
          >
            <div className="text-3xl" style={{ fontFamily: "Fraunces, serif" }}>
              4.9<span className="text-base">/5</span>
            </div>
            <div className="text-xs" style={{ color: C.soft }}>
              312 avaliações no Google
            </div>
          </div>
        </div>
      </section>

      {/* Faixa */}
      <div className="border-y py-5" style={{ borderColor: C.line }}>
        <div
          className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6 text-sm"
          style={{ color: C.soft }}
        >
          <span>Biomédicas especializadas</span>
          <span>Produtos com registro Anvisa</span>
          <span>Avaliação sem custo</span>
          <span>Estacionamento próprio</span>
        </div>
      </div>

      {/* Tratamentos */}
      <section id="tratamentos" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-light md:text-5xl">Tratamentos</h2>
          <div className="flex gap-2">
            {(Object.keys(tratamentos) as Categoria[]).map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className="rounded-full border px-5 py-2 text-sm transition"
                style={
                  cat === c
                    ? { background: C.ink, color: "#fff", borderColor: C.ink }
                    : { borderColor: C.line, color: C.soft }
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-12 border-t" style={{ borderColor: C.line }}>
          {tratamentos[cat].map((t, i) => (
            <li
              key={t.nome}
              className="group grid grid-cols-12 items-baseline gap-4 border-b py-6"
              style={{ borderColor: C.line }}
            >
              <span
                className="col-span-2 text-sm md:col-span-1"
                style={{ color: C.clay }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="col-span-10 text-xl font-light md:col-span-7 md:text-2xl"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                {t.nome}
              </span>
              <span
                className="col-span-6 col-start-3 text-sm md:col-span-2 md:col-start-auto"
                style={{ color: C.soft }}
              >
                {t.tempo}
              </span>
              <span className="col-span-4 text-right text-sm md:col-span-2">
                a partir de {t.preco}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Avaliação */}
      <section id="avaliacao" style={{ background: C.ink, color: C.bg }}>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="max-w-xl text-4xl font-light md:text-5xl">
            Tudo começa com uma <em style={{ color: C.clay }}>conversa.</em>
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              [
                "Escuta",
                "Você conta o que incomoda, sua rotina e o que já tentou.",
              ],
              [
                "Análise",
                "Avaliamos sua pele com dermatoscópio e definimos prioridades.",
              ],
              [
                "Plano",
                "Você recebe um plano por escrito, com etapas e valores claros.",
              ],
            ].map(([t, d], i) => (
              <div
                key={t}
                className="border-t pt-6"
                style={{ borderColor: "rgba(244,239,233,0.2)" }}
              >
                <div className="text-sm" style={{ color: C.clay }}>
                  0{i + 1}
                </div>
                <h3 className="mt-3 text-2xl font-light">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          {[
            [
              "Fui para uma limpeza e saí com um plano que fez sentido pro meu bolso. Em três meses minha pele mudou.",
              "Mariana A.",
            ],
            [
              "O atendimento é calmo, ninguém tenta te vender pacote. Explicaram cada etapa do tratamento.",
              "Juliana P.",
            ],
          ].map(([q, a]) => (
            <figure key={a}>
              <blockquote
                className="text-2xl font-light leading-snug md:text-3xl"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                “{q}”
              </blockquote>
              <figcaption className="mt-6 text-sm" style={{ color: C.soft }}>
                — {a}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto max-w-6xl px-6 pb-24">
        <div
          className="grid gap-10 rounded-[2rem] p-10 md:grid-cols-2 md:p-14"
          style={{ background: "#EADFD6" }}
        >
          <div>
            <h2 className="text-4xl font-light">Agende sua avaliação</h2>
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: C.soft }}
            >
              Respondemos pelo WhatsApp em até 1 hora no horário de atendimento.
            </p>
            <a
              href={wa("Olá! Quero agendar uma avaliação na Lumi.")}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white"
              style={{ background: C.ink }}
            >
              Chamar no WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <dl className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt style={{ color: C.soft }}>Endereço</dt>
              <dd className="mt-1">
                Rua dos Navegantes, 1200 — Boa Viagem, Recife
              </dd>
            </div>
            <div>
              <dt style={{ color: C.soft }}>Horário</dt>
              <dd className="mt-1">Seg a sex, 9h–19h · Sáb, 9h–13h</dd>
            </div>
            <div>
              <dt style={{ color: C.soft }}>Instagram</dt>
              <dd className="mt-1">@lumi.estetica</dd>
            </div>
            <div>
              <dt style={{ color: C.soft }}>Telefone</dt>
              <dd className="mt-1">(81) 90000-0000</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer
        className="border-t py-8 text-center text-xs"
        style={{ borderColor: C.line, color: C.soft }}
      >
        Site demonstrativo criado por Cristine Ribeiro · marca e dados fictícios
      </footer>
    </div>
  );
}
