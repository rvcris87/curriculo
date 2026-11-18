import "@fontsource/bebas-neue";
import "@fontsource-variable/dm-sans";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Clock,
  MapPin,
  Menu,
  Scissors,
  X,
} from "lucide-react";
import { useDemoSetup } from "./useDemoSetup";

const C = {
  wine: "#65010D",
  wineDark: "#3F0008",
  cream: "#FCE7D1",
  soft: "rgba(252,231,209,0.7)",
  line: "rgba(252,231,209,0.18)",
};

const servicos = [
  {
    nome: "Corte",
    desc: "Tesoura ou máquina, lavagem e finalização",
    tempo: "40 min",
    preco: 50,
  },
  {
    nome: "Barba",
    desc: "Toalha quente, navalha e balm",
    tempo: "30 min",
    preco: 40,
  },
  {
    nome: "Corte + Barba",
    desc: "O combo mais pedido da casa",
    tempo: "70 min",
    preco: 80,
  },
  {
    nome: "Pigmentação",
    desc: "Disfarça falhas na barba ou no cabelo",
    tempo: "30 min",
    preco: 45,
  },
  {
    nome: "Sobrancelha",
    desc: "Limpeza e alinhamento na navalha",
    tempo: "15 min",
    preco: 20,
  },
];

const barbeiros = [
  { id: "rafa", nome: "Rafa", esp: "Degradê e freestyle" },
  { id: "jonas", nome: "Jonas", esp: "Barba e navalha" },
  { id: "caio", nome: "Caio", esp: "Cortes clássicos" },
];

const horarios = [
  "09:00",
  "10:00",
  "11:00",
  "13:30",
  "14:30",
  "15:30",
  "16:30",
  "18:00",
  "19:00",
];
const ocupados: Record<string, string[]> = {
  rafa: ["10:00", "14:30", "18:00"],
  jonas: ["09:00", "13:30"],
  caio: ["11:00", "15:30", "16:30", "19:00"],
};

const estilos = [
  "Low fade",
  "Mid fade",
  "Social",
  "Buzz cut",
  "Mullet",
  "Barba lenhador",
];

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const wa = (msg: string) =>
  `https://wa.me/5581900000000?text=${encodeURIComponent(msg)}`;

export function DomBarbearia() {
  useDemoSetup("Dom Barbearia — Recife", C.wine);
  const [menu, setMenu] = useState(false);
  const [servico, setServico] = useState(2);
  const [barbeiro, setBarbeiro] = useState("rafa");
  const [hora, setHora] = useState<string | null>(null);

  const s = servicos[servico];
  const b = barbeiros.find((x) => x.id === barbeiro)!;
  const msg = `Olá, Dom Barbearia! Quero agendar ${s.nome} com o ${b.nome}${hora ? ` às ${hora}` : ""} (${brl(s.preco)}).`;

  return (
    <div
      className="demo-root min-h-screen overflow-x-clip"
      style={
        {
          background: C.wine,
          color: C.cream,
          fontFamily: "'DM Sans Variable', sans-serif",
          "--f-display": "'Bebas Neue', sans-serif",
        } as React.CSSProperties
      }
    >
      {/* Nav */}
      <header
        className="sticky top-0 z-30"
        style={{
          background: "rgba(101,1,13,0.92)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#topo"
            className="flex items-center gap-2 text-2xl tracking-wider"
            style={{ fontFamily: "'Bebas Neue'" }}
          >
            <Scissors className="h-5 w-5" /> Dom
          </a>
          <nav className="hidden items-center gap-2 md:flex">
            {[
              ["#servicos", "Serviços"],
              ["#agendar", "Agendar"],
              ["#clube", "Clube"],
              ["#estilos", "Estilos"],
            ].map(([h, l]) => (
              <a
                key={h}
                href={h}
                className="rounded-full px-4 py-2 text-sm font-medium transition hover:bg-white/10"
              >
                {l}
              </a>
            ))}
          </nav>
          <a
            href="#agendar"
            className="hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold md:inline-flex"
            style={{ background: C.cream, color: C.wine }}
          >
            Agendar horário <ArrowUpRight className="h-4 w-4" />
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
          <div
            className="border-t px-6 py-3 md:hidden"
            style={{ borderColor: C.line }}
          >
            {["servicos", "agendar", "clube", "estilos"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenu(false)}
                className="block py-2 capitalize"
              >
                {id === "servicos" ? "Serviços" : id}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="topo" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-10">
          <div className="flex items-center justify-center gap-3">
            <a
              href="#servicos"
              className="rounded-full px-5 py-2 text-xs font-bold"
              style={{ background: C.cream, color: C.wine }}
            >
              Serviços
            </a>
            <a
              href="#agendar"
              className="rounded-full border-2 px-5 py-1.5 text-xs font-bold"
              style={{ borderColor: C.cream }}
            >
              Agendar
            </a>
          </div>

          <div className="relative mt-6">
            <h1
              className="select-none text-center leading-[0.8] tracking-tight"
              style={{ fontSize: "clamp(7rem, 34vw, 26rem)", color: C.cream }}
            >
              DOM
            </h1>

            {/* Selo "recortado" sobre o título */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 aspect-square h-[62%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_25px_30px_rgba(0,0,0,0.45)]"
            >
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full animate-[spin_20s_linear_infinite]"
              >
                <defs>
                  <path
                    id="domc"
                    d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                  />
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="49"
                  fill={C.wineDark}
                  stroke={C.cream}
                  strokeWidth="1.2"
                />
                <text
                  fontSize="8.5"
                  fontWeight="700"
                  letterSpacing="2.2"
                  fill={C.cream}
                >
                  <textPath href="#domc">
                    CORTE · BARBA · DESDE 2016 ·{" "}
                  </textPath>
                </text>
              </svg>
              <Scissors
                className="absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2"
                style={{ color: C.cream }}
              />
            </div>
          </div>

          <div className="mt-6 grid gap-8 md:grid-cols-3 md:items-end">
            <div>
              <h2 className="text-5xl leading-[0.9] md:text-6xl">
                Corte com
                <br />
                hora marcada
              </h2>
            </div>
            <p
              className="text-sm leading-relaxed md:text-base"
              style={{ color: C.soft }}
            >
              Barbearia no Recife Antigo com cerveja gelada, café passado na
              hora e barbeiros que escutam antes de cortar. Sem fila, sem
              pressa.
            </p>
            <div className="md:text-right">
              <div
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: C.soft }}
              >
                Escolha seu barbeiro
              </div>
              <div className="mt-3 flex gap-2 md:justify-end">
                {barbeiros.map((x) => (
                  <a
                    key={x.id}
                    href="#agendar"
                    onClick={() => setBarbeiro(x.id)}
                    className="grid h-11 w-11 place-items-center rounded-full border-2 text-sm font-bold transition hover:scale-110"
                    style={{ borderColor: C.cream }}
                    title={x.nome}
                  >
                    {x.nome[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" style={{ background: C.cream, color: C.wine }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-6xl leading-none md:text-8xl">Serviços</h2>
            <p className="max-w-xs text-sm opacity-75">
              Preço fechado, sem surpresa no caixa. Pix, cartão ou dinheiro.
            </p>
          </div>
          <ul className="mt-10 border-t-2" style={{ borderColor: C.wine }}>
            {servicos.map((x, i) => (
              <li
                key={x.nome}
                className="grid grid-cols-12 items-center gap-3 border-b-2 py-5"
                style={{ borderColor: "rgba(101,1,13,0.2)" }}
              >
                <span
                  className="col-span-2 text-3xl md:col-span-1"
                  style={{ fontFamily: "'Bebas Neue'" }}
                >
                  0{i + 1}
                </span>
                <div className="col-span-10 md:col-span-6">
                  <div
                    className="text-3xl leading-none md:text-4xl"
                    style={{ fontFamily: "'Bebas Neue'" }}
                  >
                    {x.nome}
                  </div>
                  <div className="mt-1 text-sm opacity-70">{x.desc}</div>
                </div>
                <span className="col-span-5 col-start-3 inline-flex items-center gap-1.5 text-sm opacity-70 md:col-span-2 md:col-start-auto">
                  <Clock className="h-4 w-4" /> {x.tempo}
                </span>
                <span
                  className="col-span-3 text-right text-2xl md:col-span-2"
                  style={{ fontFamily: "'Bebas Neue'" }}
                >
                  {brl(x.preco)}
                </span>
                <button
                  onClick={() => {
                    setServico(i);
                    document
                      .getElementById("agendar")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="col-span-2 col-start-11 justify-self-end rounded-full p-2 transition hover:scale-110 md:col-span-1"
                  style={{ background: C.wine, color: C.cream }}
                  aria-label={`Agendar ${x.nome}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Agendamento */}
      <section id="agendar">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_380px]">
          <div>
            <h2 className="text-6xl leading-none md:text-8xl">
              Agende em 3 toques
            </h2>

            <div className="mt-10">
              <div
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: C.soft }}
              >
                1. Serviço
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {servicos.map((x, i) => (
                  <button
                    key={x.nome}
                    onClick={() => setServico(i)}
                    className="rounded-full border-2 px-4 py-2 text-sm font-semibold transition"
                    style={
                      servico === i
                        ? {
                            background: C.cream,
                            color: C.wine,
                            borderColor: C.cream,
                          }
                        : { borderColor: C.line }
                    }
                  >
                    {x.nome}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: C.soft }}
              >
                2. Barbeiro
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {barbeiros.map((x) => (
                  <button
                    key={x.id}
                    onClick={() => {
                      setBarbeiro(x.id);
                      setHora(null);
                    }}
                    className="rounded-2xl border-2 p-4 text-left transition"
                    style={
                      barbeiro === x.id
                        ? {
                            background: C.cream,
                            color: C.wine,
                            borderColor: C.cream,
                          }
                        : { borderColor: C.line }
                    }
                  >
                    <div
                      className="text-3xl leading-none"
                      style={{ fontFamily: "'Bebas Neue'" }}
                    >
                      {x.nome}
                    </div>
                    <div className="mt-1 text-xs opacity-75">{x.esp}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: C.soft }}
              >
                3. Horário de hoje
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
                {horarios.map((h) => {
                  const ocupado = ocupados[barbeiro].includes(h);
                  return (
                    <button
                      key={h}
                      disabled={ocupado}
                      onClick={() => setHora(h)}
                      className="rounded-xl border-2 py-2.5 text-sm font-bold transition disabled:cursor-not-allowed"
                      style={
                        ocupado
                          ? {
                              borderColor: "transparent",
                              opacity: 0.3,
                              textDecoration: "line-through",
                            }
                          : hora === h
                            ? {
                                background: C.cream,
                                color: C.wine,
                                borderColor: C.cream,
                              }
                            : { borderColor: C.line }
                      }
                    >
                      {h}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Resumo */}
          <aside
            className="h-fit rounded-3xl p-6 lg:sticky lg:top-24"
            style={{ background: C.cream, color: C.wine }}
          >
            <div className="text-xs font-bold uppercase tracking-widest opacity-60">
              Seu horário
            </div>
            <div
              className="mt-3 text-5xl leading-none"
              style={{ fontFamily: "'Bebas Neue'" }}
            >
              {s.nome}
            </div>
            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="opacity-60">Barbeiro</dt>
                <dd className="font-semibold">{b.nome}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="opacity-60">Horário</dt>
                <dd className="font-semibold">{hora ?? "—"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="opacity-60">Duração</dt>
                <dd className="font-semibold">{s.tempo}</dd>
              </div>
            </dl>
            <div
              className="mt-5 flex items-end justify-between border-t-2 pt-4"
              style={{ borderColor: "rgba(101,1,13,0.2)" }}
            >
              <span className="text-sm font-semibold">Total</span>
              <span
                className="text-4xl leading-none"
                style={{ fontFamily: "'Bebas Neue'" }}
              >
                {brl(s.preco)}
              </span>
            </div>
            <a
              href={hora ? wa(msg) : undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!hora}
              className="mt-5 block rounded-full py-3.5 text-center text-sm font-bold transition"
              style={{
                background: C.wine,
                color: C.cream,
                opacity: hora ? 1 : 0.4,
                pointerEvents: hora ? "auto" : "none",
              }}
            >
              {hora ? "Confirmar no WhatsApp" : "Escolha um horário"}
            </a>
          </aside>
        </div>
      </section>

      {/* Clube */}
      <section id="clube" style={{ background: C.wineDark }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: C.soft }}
              >
                Clube Dom
              </div>
              <h2 className="mt-3 text-6xl leading-[0.9] md:text-8xl">
                Cabelo em dia
                <br />o mês todo
              </h2>
            </div>
            <div
              className="rounded-3xl border-2 p-8"
              style={{ borderColor: C.cream }}
            >
              <div className="flex items-end gap-2">
                <span
                  className="text-7xl leading-none"
                  style={{ fontFamily: "'Bebas Neue'" }}
                >
                  R$ 129
                </span>
                <span className="pb-2 text-sm" style={{ color: C.soft }}>
                  /mês
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Cortes ilimitados",
                  "2 barbas por mês",
                  "Prioridade na agenda",
                  "Cerveja ou café por conta da casa",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span
                      className="grid h-5 w-5 place-items-center rounded-full"
                      style={{ background: C.cream, color: C.wine }}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={wa("Olá! Quero entrar no Clube Dom.")}
                target="_blank"
                rel="noreferrer"
                className="mt-8 block rounded-full py-3.5 text-center text-sm font-bold"
                style={{ background: C.cream, color: C.wine }}
              >
                Quero ser do clube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Estilos */}
      <section id="estilos" style={{ background: C.cream, color: C.wine }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-6xl leading-none md:text-8xl">Estilos da casa</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {estilos.map((e, i) => (
              <div
                key={e}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
                style={{
                  background:
                    i % 2
                      ? `repeating-linear-gradient(135deg, ${C.wine} 0 2px, transparent 2px 14px), ${C.wineDark}`
                      : `radial-gradient(circle at 30% 20%, #8a0a1a, ${C.wine} 60%, ${C.wineDark})`,
                }}
              >
                <Scissors
                  className="absolute right-4 top-4 h-6 w-6 opacity-40 transition group-hover:rotate-45"
                  style={{ color: C.cream }}
                />
                <div
                  className="absolute inset-x-4 bottom-4 text-4xl leading-none md:text-5xl"
                  style={{ fontFamily: "'Bebas Neue'", color: C.cream }}
                >
                  {e}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs opacity-60">
            Aqui entram as fotos reais dos cortes da barbearia.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0" />
            <div>
              <div className="text-2xl" style={{ fontFamily: "'Bebas Neue'" }}>
                Endereço
              </div>
              <div className="text-sm" style={{ color: C.soft }}>
                Rua do Bom Jesus, 180 — Recife Antigo
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Clock className="mt-1 h-5 w-5 shrink-0" />
            <div>
              <div className="text-2xl" style={{ fontFamily: "'Bebas Neue'" }}>
                Horário
              </div>
              <div className="text-sm" style={{ color: C.soft }}>
                Ter a sáb, 9h às 20h
              </div>
            </div>
          </div>
          <a
            href={wa("Olá, Dom Barbearia!")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 self-center rounded-full py-4 text-sm font-bold"
            style={{ background: C.cream, color: C.wine }}
          >
            Chamar no WhatsApp <ArrowUpRight className="h-4 w-4" />
          </a>
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
