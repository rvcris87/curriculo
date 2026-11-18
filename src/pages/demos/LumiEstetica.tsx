import "@fontsource/bowlby-one";
import "@fontsource-variable/instrument-sans";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useDemoSetup } from "./useDemoSetup";

const C = {
  bg: "#FEF1CF", // creme
  ink: "#0032A8", // azul
  soft: "#4A5A8C",
  clay: "#FC3B7F", // rosa
  sage: "#0032A8",
  line: "rgba(0,50,168,0.18)",
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
  useDemoSetup("Lumi Estética — Recife", C.bg);
  const [cat, setCat] = useState<Categoria>("Facial");
  const [menu, setMenu] = useState(false);

  return (
    <div
      className="demo-root min-h-screen overflow-x-clip antialiased"
      style={
        {
          background: C.bg,
          color: C.ink,
          fontFamily: "'Instrument Sans Variable', sans-serif",
          "--f-display": "'Bowlby One', sans-serif",
        } as React.CSSProperties
      }
    >
      {/* Nav */}
      <header
        className="sticky top-0 z-20 border-b backdrop-blur-md"
        style={{ borderColor: C.line, background: "rgba(254,241,207,0.92)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#topo"
            className="text-2xl"
            style={{ fontFamily: "'Bowlby One', sans-serif" }}
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
        className="relative overflow-hidden"
        style={{ background: C.clay }}
      >
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-10 md:pt-14">
          <div
            className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: C.bg }}
          >
            <span>Estética integrativa</span>
            <span>Boa Viagem · Recife</span>
          </div>
          <h1
            className="mt-4 select-none text-center leading-[0.82] tracking-tight"
            style={{ color: C.bg, fontSize: "clamp(5.5rem, 27vw, 21rem)" }}
          >
            LUMI
          </h1>

          {/* "Recorte" sobre o título */}
          <div className="relative -mt-[9%] flex justify-center">
            <div
              className="relative h-44 w-44 rounded-full md:h-64 md:w-64"
              style={{
                background: `radial-gradient(circle at 35% 30%, #fff 0%, ${C.bg} 35%, #F8C9A8 70%, #E99A86 100%)`,
                boxShadow: `0 30px 60px -20px rgba(0,50,168,0.45)`,
              }}
            >
              <span
                className="absolute -right-6 top-6 rotate-12 rounded-full px-4 py-2 text-xs font-bold md:-right-10"
                style={{ background: C.ink, color: C.bg }}
              >
                4.9 ★ no Google
              </span>
              <span
                className="absolute -left-8 bottom-8 -rotate-6 rounded-full px-4 py-2 text-xs font-bold"
                style={{ background: C.bg, color: C.ink }}
              >
                Avaliação grátis
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
            <h2
              className="text-3xl leading-[1.05] md:text-5xl"
              style={{ color: C.bg }}
            >
              Sua pele, no tempo dela.
            </h2>
            <div>
              <p
                className="max-w-md text-base leading-relaxed"
                style={{ color: C.bg }}
              >
                Tratamentos faciais e corporais a partir de uma avaliação
                individual. Sem pacote empurrado, sem promessa milagrosa.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={wa("Olá! Quero agendar uma avaliação na Lumi.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold"
                  style={{ background: C.ink, color: C.bg }}
                >
                  Agendar avaliação <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#tratamentos"
                  className="rounded-full border-2 px-6 py-3 text-sm font-bold"
                  style={{ borderColor: C.bg, color: C.bg }}
                >
                  Ver tratamentos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa */}
      <div
        className="overflow-hidden py-4"
        style={{ background: C.ink, color: C.bg }}
      >
        <div className="flex gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-widest">
          {Array.from({ length: 3 }).flatMap((_, k) =>
            [
              "Biomédicas especializadas",
              "✦",
              "Produtos com registro Anvisa",
              "✦",
              "Avaliação sem custo",
              "✦",
              "Estacionamento próprio",
              "✦",
            ].map((t, i) => <span key={`${k}-${i}`}>{t}</span>),
          )}
        </div>
      </div>

      {/* Tratamentos */}
      <section id="tratamentos" className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-5xl md:text-7xl">Tratamentos</h2>
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
                className="col-span-10 text-lg md:col-span-7 md:text-2xl"
                style={{ fontFamily: "'Bowlby One', sans-serif" }}
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
          <h2 className="max-w-2xl text-4xl md:text-6xl">
            Tudo começa com uma <span style={{ color: C.clay }}>conversa.</span>
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
                <h3 className="mt-3 text-2xl">{t}</h3>
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
                className="text-xl leading-snug md:text-2xl"
                style={{ fontFamily: "'Bowlby One', sans-serif" }}
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
          style={{ background: C.clay, color: C.bg }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl">Agende sua avaliação</h2>
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ opacity: 0.75 }}
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
              <dt style={{ opacity: 0.75 }}>Endereço</dt>
              <dd className="mt-1">
                Rua dos Navegantes, 1200 — Boa Viagem, Recife
              </dd>
            </div>
            <div>
              <dt style={{ opacity: 0.75 }}>Horário</dt>
              <dd className="mt-1">Seg a sex, 9h–19h · Sáb, 9h–13h</dd>
            </div>
            <div>
              <dt style={{ opacity: 0.75 }}>Instagram</dt>
              <dd className="mt-1">@lumi.estetica</dd>
            </div>
            <div>
              <dt style={{ opacity: 0.75 }}>Telefone</dt>
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
