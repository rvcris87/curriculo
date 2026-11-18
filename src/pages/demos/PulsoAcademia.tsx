import "@fontsource/barlow-condensed/800-italic.css";
import "@fontsource/barlow-condensed/900-italic.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource-variable/inter";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Dumbbell,
  Flame,
  HeartPulse,
  Menu,
  Timer,
  Users,
  X,
} from "lucide-react";
import { useDemoSetup } from "./useDemoSetup";

const C = {
  blue: "#0048D6",
  blueDark: "#00319A",
  yellow: "#FCFC04",
  ink: "#001A4D",
  white: "#FFFFFF",
};

const display = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontStyle: "italic",
  fontWeight: 900,
} as const;

const modalidades = [
  {
    icon: Dumbbell,
    nome: "Musculação",
    desc: "Equipamentos novos e professor no salão o dia todo.",
  },
  {
    icon: Flame,
    nome: "Funcional",
    desc: "Aulas de 45 min em grupo, para todos os níveis.",
  },
  {
    icon: HeartPulse,
    nome: "Spinning",
    desc: "Bike com luz, música alta e muita energia.",
  },
  {
    icon: Users,
    nome: "Lutas",
    desc: "Muay thai e jiu-jitsu com faixa-preta.",
  },
];

const grade: Record<string, { h: string; aula: string; prof: string }[]> = {
  Seg: [
    { h: "06:30", aula: "Funcional", prof: "Lia" },
    { h: "12:00", aula: "Spinning", prof: "Duda" },
    { h: "18:30", aula: "Muay thai", prof: "Bruno" },
    { h: "19:30", aula: "Funcional", prof: "Lia" },
  ],
  Ter: [
    { h: "07:00", aula: "Spinning", prof: "Duda" },
    { h: "18:00", aula: "Jiu-jitsu", prof: "Marcos" },
    { h: "19:00", aula: "Funcional", prof: "Thiago" },
  ],
  Qua: [
    { h: "06:30", aula: "Funcional", prof: "Lia" },
    { h: "12:00", aula: "Spinning", prof: "Duda" },
    { h: "18:30", aula: "Muay thai", prof: "Bruno" },
  ],
  Qui: [
    { h: "07:00", aula: "Spinning", prof: "Duda" },
    { h: "18:00", aula: "Jiu-jitsu", prof: "Marcos" },
    { h: "19:30", aula: "Funcional", prof: "Thiago" },
  ],
  Sex: [
    { h: "06:30", aula: "Funcional", prof: "Lia" },
    { h: "18:00", aula: "Spinning", prof: "Duda" },
  ],
  Sáb: [
    { h: "09:00", aula: "Aulão funcional", prof: "Equipe" },
    { h: "10:30", aula: "Muay thai", prof: "Bruno" },
  ],
};

const planos = [
  {
    nome: "Básico",
    mensal: 99,
    itens: ["Musculação", "Horário livre", "Avaliação física"],
  },
  {
    nome: "Pulso",
    mensal: 149,
    destaque: true,
    itens: [
      "Musculação",
      "Todas as aulas coletivas",
      "Avaliação a cada 60 dias",
      "App de treino",
    ],
  },
  {
    nome: "Black",
    mensal: 219,
    itens: [
      "Tudo do Pulso",
      "Lutas inclusas",
      "Personal 2x por mês",
      "Leve um amigo 1x/semana",
    ],
  },
];

const brl = (n: number) =>
  n.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
const wa = (msg: string) =>
  `https://wa.me/5581900000000?text=${encodeURIComponent(msg)}`;

export function PulsoAcademia() {
  useDemoSetup("Pulso Academia — Recife", C.blue);
  const [menu, setMenu] = useState(false);
  const [dia, setDia] = useState("Seg");
  const [anual, setAnual] = useState(false);
  const [nome, setNome] = useState("");
  const [objetivo, setObjetivo] = useState("Ganhar massa");
  const [turno, setTurno] = useState("Noite");

  const preco = (m: number) => (anual ? Math.round(m * 0.8) : m);

  return (
    <div
      className="demo-root min-h-screen overflow-x-clip"
      style={
        {
          background: C.blue,
          color: C.white,
          fontFamily: "'Inter Variable', sans-serif",
          "--f-display": "'Barlow Condensed', sans-serif",
        } as React.CSSProperties
      }
    >
      {/* Nav */}
      <header className="sticky top-0 z-30" style={{ background: C.blue }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#topo"
            className="text-3xl leading-none"
            style={{ ...display, color: C.yellow }}
          >
            PULSO
          </a>
          <nav className="hidden items-center gap-7 text-xs font-bold uppercase tracking-widest md:flex">
            <a href="#modalidades">Modalidades</a>
            <a href="#aulas">Aulas</a>
            <a href="#planos">Planos</a>
          </nav>
          <a
            href="#experimental"
            className="hidden rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider md:inline-block"
            style={{ background: C.yellow, color: C.ink }}
          >
            Aula grátis
          </a>
          <button
            className="md:hidden"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
          >
            {menu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menu && (
          <div className="border-t border-white/15 px-6 py-3 md:hidden">
            {[
              ["modalidades", "Modalidades"],
              ["aulas", "Aulas"],
              ["planos", "Planos"],
              ["experimental", "Aula grátis"],
            ].map(([id, l]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenu(false)}
                className="block py-2 font-semibold"
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="topo" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 pt-6 lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-7">
            <h1
              className="uppercase leading-[0.82]"
              style={{
                ...display,
                color: C.yellow,
                fontSize: "clamp(5rem, 15vw, 12rem)",
              }}
            >
              Treine
              <br />
              no seu
              <br />
              ritmo.
            </h1>
          </div>

          {/* "Recorte": anilha + selo */}
          <div className="relative min-h-[260px] lg:col-span-5">
            <div
              className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full md:h-80 md:w-80"
              style={{
                background: `radial-gradient(circle, ${C.blue} 0 14%, ${C.ink} 15% 22%, #1d2b4f 23% 60%, ${C.ink} 61% 70%, #2a3a63 71% 100%)`,
                boxShadow: "0 40px 60px -20px rgba(0,0,0,0.5)",
              }}
            >
              <span
                className="absolute left-1/2 top-[30%] -translate-x-1/2 text-3xl tracking-widest"
                style={{ ...display, color: C.yellow }}
              >
                20 KG
              </span>
            </div>
            <div
              className="absolute right-2 top-2 grid h-28 w-28 rotate-12 place-items-center rounded-full text-center text-sm font-black uppercase leading-tight"
              style={{ background: C.yellow, color: C.ink }}
            >
              1ª aula
              <br />
              grátis
            </div>
          </div>

          <div className="relative z-10 grid gap-6 lg:col-span-12 lg:grid-cols-12 lg:items-end">
            <p className="max-w-md text-lg leading-relaxed text-white/90 lg:col-span-6">
              Academia 24h no Rosarinho com musculação, funcional, spinning e
              lutas. Sem taxa de matrícula e sem fidelidade no plano mensal.
            </p>
            <div className="flex flex-wrap gap-3 lg:col-span-6 lg:justify-end">
              <a
                href="#experimental"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold uppercase tracking-wider"
                style={{ background: C.yellow, color: C.ink }}
              >
                Agendar aula grátis <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#planos"
                className="rounded-full border-2 border-white px-7 py-[14px] text-sm font-extrabold uppercase tracking-wider"
              >
                Ver planos
              </a>
            </div>
          </div>
        </div>

        {/* Números */}
        <div style={{ background: C.yellow, color: C.ink }}>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-6 md:grid-cols-4">
            {[
              ["24H", "aberto todos os dias"],
              ["1.800", "alunos ativos"],
              ["40+", "aulas por semana"],
              ["0", "taxa de matrícula"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-5xl leading-none" style={display}>
                  {n}
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider opacity-70">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section id="modalidades" className="bg-white" style={{ color: C.ink }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2
            className="uppercase leading-none"
            style={{
              ...display,
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              color: C.blue,
            }}
          >
            Modalidades
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {modalidades.map(({ icon: Icon, nome, desc }) => (
              <div
                key={nome}
                className="group rounded-3xl p-6 transition hover:-translate-y-1"
                style={{ background: "#EEF3FF" }}
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-2xl transition group-hover:rotate-6"
                  style={{ background: C.blue, color: C.yellow }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3
                  className="mt-6 text-4xl uppercase leading-none"
                  style={display}
                >
                  {nome}
                </h3>
                <p className="mt-2 text-sm leading-relaxed opacity-75">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade de aulas */}
      <section id="aulas" style={{ background: C.blueDark }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2
              className="uppercase leading-none"
              style={{
                ...display,
                fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                color: C.yellow,
              }}
            >
              Grade de aulas
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {Object.keys(grade).map((d) => (
                <button
                  key={d}
                  onClick={() => setDia(d)}
                  className="rounded-full px-4 py-2 text-sm font-bold transition"
                  style={
                    dia === d
                      ? { background: C.yellow, color: C.ink }
                      : { background: "rgba(255,255,255,0.08)" }
                  }
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
          <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {grade[dia].map((a) => (
              <li key={a.h + a.aula} className="flex items-center gap-4 py-5">
                <span
                  className="w-24 text-4xl leading-none"
                  style={{ ...display, color: C.yellow }}
                >
                  {a.h}
                </span>
                <span
                  className="flex-1 text-2xl uppercase leading-none md:text-3xl"
                  style={display}
                >
                  {a.aula}
                </span>
                <span className="hidden items-center gap-1.5 text-sm text-white/70 sm:inline-flex">
                  <Timer className="h-4 w-4" /> 45 min · {a.prof}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="bg-white" style={{ color: C.ink }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2
              className="uppercase leading-none"
              style={{
                ...display,
                fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
                color: C.blue,
              }}
            >
              Planos
            </h2>
            <div
              className="flex items-center gap-1 rounded-full p-1"
              style={{ background: "#EEF3FF" }}
            >
              {[
                [false, "Mensal"],
                [true, "Anual −20%"],
              ].map(([v, l]) => (
                <button
                  key={String(l)}
                  onClick={() => setAnual(v as boolean)}
                  className="rounded-full px-4 py-2 text-sm font-bold transition"
                  style={
                    anual === v ? { background: C.blue, color: C.white } : {}
                  }
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {planos.map((pl) => (
              <div
                key={pl.nome}
                className="relative flex flex-col rounded-3xl p-7"
                style={
                  pl.destaque
                    ? { background: C.blue, color: C.white }
                    : { background: "#EEF3FF" }
                }
              >
                {pl.destaque && (
                  <span
                    className="absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-black uppercase"
                    style={{ background: C.yellow, color: C.ink }}
                  >
                    Mais escolhido
                  </span>
                )}
                <h3 className="text-4xl uppercase leading-none" style={display}>
                  {pl.nome}
                </h3>
                <div className="mt-4 flex items-end gap-1">
                  <span
                    className="text-6xl leading-none"
                    style={{
                      ...display,
                      color: pl.destaque ? C.yellow : C.blue,
                    }}
                  >
                    {brl(preco(pl.mensal))}
                  </span>
                  <span className="pb-1 text-sm opacity-70">/mês</span>
                </div>
                <div className="mt-1 h-5 text-xs opacity-70">
                  {anual
                    ? `${brl(preco(pl.mensal) * 12)} por ano · economia de ${brl(pl.mensal * 12 - preco(pl.mensal) * 12)}`
                    : "Sem fidelidade"}
                </div>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {pl.itens.map((it) => (
                    <li key={it} className="flex items-center gap-2.5">
                      <Check
                        className="h-4 w-4 shrink-0"
                        style={{ color: pl.destaque ? C.yellow : C.blue }}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href={wa(
                    `Olá, Pulso! Quero o plano ${pl.nome} ${anual ? "anual" : "mensal"}.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 block rounded-full py-3.5 text-center text-sm font-extrabold uppercase tracking-wider"
                  style={
                    pl.destaque
                      ? { background: C.yellow, color: C.ink }
                      : { background: C.blue, color: C.white }
                  }
                >
                  Quero esse
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aula experimental */}
      <section id="experimental">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <h2
            className="uppercase leading-[0.85]"
            style={{
              ...display,
              color: C.yellow,
              fontSize: "clamp(4rem, 10vw, 8rem)",
            }}
          >
            Sua 1ª aula
            <br />é por nossa conta
          </h2>
          <form
            className="space-y-4 rounded-3xl bg-white p-6 md:p-8"
            style={{ color: C.ink }}
            onSubmit={(e) => {
              e.preventDefault();
              window.open(
                wa(
                  `Olá, Pulso! Sou ${nome || "novo aluno"}, quero agendar a aula grátis. Objetivo: ${objetivo}. Turno: ${turno}.`,
                ),
                "_blank",
              );
            }}
          >
            <label className="block text-sm font-bold">
              Seu nome
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Como podemos te chamar?"
                className="mt-1.5 w-full rounded-xl border-2 px-4 py-3 text-sm font-normal outline-none focus:border-[#0048D6]"
                style={{ borderColor: "#DCE5FB" }}
              />
            </label>
            <label className="block text-sm font-bold">
              Objetivo
              <select
                value={objetivo}
                onChange={(e) => setObjetivo(e.target.value)}
                className="mt-1.5 w-full rounded-xl border-2 px-4 py-3 text-sm font-normal"
                style={{ borderColor: "#DCE5FB" }}
              >
                {[
                  "Ganhar massa",
                  "Emagrecer",
                  "Condicionamento",
                  "Saúde e bem-estar",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </label>
            <div className="text-sm font-bold">Melhor turno</div>
            <div className="grid grid-cols-3 gap-2">
              {["Manhã", "Tarde", "Noite"].map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTurno(t)}
                  className="rounded-xl border-2 py-2.5 text-sm font-bold transition"
                  style={
                    turno === t
                      ? {
                          background: C.blue,
                          color: C.white,
                          borderColor: C.blue,
                        }
                      : { borderColor: "#DCE5FB" }
                  }
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              className="w-full rounded-full py-4 text-sm font-extrabold uppercase tracking-wider"
              style={{ background: C.yellow, color: C.ink }}
            >
              Agendar pelo WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/15 py-8 text-center text-xs text-white/70">
        Rua Amélia, 300 — Rosarinho, Recife · Site demonstrativo criado por
        Cristine Ribeiro · dados fictícios
      </footer>
    </div>
  );
}
