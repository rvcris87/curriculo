import { useState } from "react";
import {
  CalendarCheck,
  ChevronDown,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { useDemoSetup } from "./useDemoSetup";

const C = {
  navy: "#0B2545",
  teal: "#0E9F94",
  ice: "#EEF6F8",
  soft: "#55657A",
  line: "#DCE7EC",
};

const tratamentos = [
  {
    icon: Smile,
    nome: "Clareamento",
    desc: "Consultório ou caseiro, com moldeira personalizada.",
  },
  {
    icon: Sparkles,
    nome: "Lentes e facetas",
    desc: "Planejamento digital do sorriso antes de começar.",
  },
  {
    icon: Stethoscope,
    nome: "Implantes",
    desc: "Tomografia no local e acompanhamento completo.",
  },
  {
    icon: ShieldCheck,
    nome: "Ortodontia",
    desc: "Aparelho fixo ou alinhadores transparentes.",
  },
];

const faq = [
  [
    "Vocês atendem por convênio?",
    "Sim. Atendemos Amil Dental, Bradesco Dental, OdontoPrev e SulAmérica. Para outros planos, emitimos recibo para reembolso.",
  ],
  [
    "A primeira consulta é paga?",
    "A avaliação inicial com radiografia panorâmica custa R$ 90 e o valor é abatido se você iniciar o tratamento.",
  ],
  [
    "Atendem urgência?",
    "Sim, de segunda a sábado. Chame no WhatsApp que encaixamos no mesmo dia.",
  ],
  [
    "Posso parcelar?",
    "Tratamentos acima de R$ 600 podem ser parcelados em até 12x no cartão.",
  ],
];

const dias = ["Seg 24", "Ter 25", "Qua 26", "Qui 27", "Sex 28"];
const horarios = ["08:00", "09:30", "11:00", "14:00", "15:30", "17:00"];

export function OdontoMare() {
  useDemoSetup(
    "Odonto Maré — Clínica odontológica",
    "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
    "#ffffff",
  );
  const [trat, setTrat] = useState("Avaliação");
  const [dia, setDia] = useState(dias[0]);
  const [hora, setHora] = useState<string | null>(null);
  const [aberta, setAberta] = useState<number | null>(0);

  const msg = `Olá! Quero agendar ${trat} na Odonto Maré para ${dia}${hora ? ` às ${hora}` : ""}.`;

  return (
    <div
      className="demo-root min-h-screen bg-white"
      style={
        {
          color: C.navy,
          fontFamily: "Manrope, sans-serif",
          "--f-display": "Manrope, sans-serif",
        } as React.CSSProperties
      }
    >
      <header className="border-b" style={{ borderColor: C.line }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div
              className="grid h-9 w-9 place-items-center rounded-xl text-white"
              style={{ background: C.teal }}
            >
              <Smile className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold">Odonto Maré</div>
              <div className="text-[11px]" style={{ color: C.soft }}>
                CRO-PE 0000 · Resp. técnica Dra. Ana Lima
              </div>
            </div>
          </div>
          <nav
            className="hidden gap-7 text-sm font-semibold md:flex"
            style={{ color: C.soft }}
          >
            <a href="#tratamentos">Tratamentos</a>
            <a href="#equipe">Equipe</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a
            href="#agendar"
            className="rounded-lg px-4 py-2 text-sm font-bold text-white"
            style={{ background: C.navy }}
          >
            Agendar
          </a>
        </div>
      </header>

      {/* Hero + agendamento */}
      <section style={{ background: C.ice }}>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
          <div className="self-center">
            <span
              className="rounded-full bg-white px-3 py-1 text-xs font-bold"
              style={{ color: C.teal }}
            >
              Atendimento de urgência no mesmo dia
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
              Cuidar do sorriso sem medo da cadeira.
            </h1>
            <p
              className="mt-6 max-w-md text-lg leading-relaxed"
              style={{ color: C.soft }}
            >
              Clínica completa no Pina, com tomografia no local, sedação
              consciente e horários até as 20h.
            </p>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-4">
              {[
                ["14", "anos de clínica"],
                ["6", "especialistas"],
                ["4", "convênios"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div
                    className="text-3xl font-extrabold"
                    style={{ color: C.teal }}
                  >
                    {n}
                  </div>
                  <div className="text-xs" style={{ color: C.soft }}>
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="agendar"
            className="rounded-3xl bg-white p-6 shadow-[0_20px_60px_-30px_rgba(11,37,69,0.4)] md:p-8"
          >
            <div className="flex items-center gap-2 font-extrabold">
              <CalendarCheck className="h-5 w-5" style={{ color: C.teal }} />{" "}
              Agende em 30 segundos
            </div>

            <label
              className="mt-6 block text-xs font-bold uppercase tracking-wider"
              style={{ color: C.soft }}
            >
              Tratamento
            </label>
            <select
              value={trat}
              onChange={(e) => setTrat(e.target.value)}
              className="mt-2 w-full rounded-xl border px-4 py-3 text-sm font-semibold"
              style={{ borderColor: C.line }}
            >
              {[
                "Avaliação",
                "Limpeza",
                "Clareamento",
                "Implante",
                "Ortodontia",
                "Urgência",
              ].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <div
              className="mt-5 text-xs font-bold uppercase tracking-wider"
              style={{ color: C.soft }}
            >
              Dia
            </div>
            <div className="mt-2 grid grid-cols-5 gap-2">
              {dias.map((d) => (
                <button
                  key={d}
                  onClick={() => setDia(d)}
                  className="rounded-xl border py-2.5 text-xs font-bold transition"
                  style={
                    dia === d
                      ? {
                          background: C.navy,
                          color: "#fff",
                          borderColor: C.navy,
                        }
                      : { borderColor: C.line }
                  }
                >
                  {d}
                </button>
              ))}
            </div>

            <div
              className="mt-5 text-xs font-bold uppercase tracking-wider"
              style={{ color: C.soft }}
            >
              Horário
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {horarios.map((h) => (
                <button
                  key={h}
                  onClick={() => setHora(h)}
                  className="rounded-xl border py-2.5 text-sm font-bold transition"
                  style={
                    hora === h
                      ? {
                          background: C.teal,
                          color: "#fff",
                          borderColor: C.teal,
                        }
                      : { borderColor: C.line }
                  }
                >
                  {h}
                </button>
              ))}
            </div>

            <a
              href={`https://wa.me/5581900000000?text=${encodeURIComponent(msg)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 block rounded-xl py-3.5 text-center text-sm font-extrabold text-white"
              style={{ background: C.teal }}
            >
              {hora ? `Confirmar ${dia} às ${hora}` : "Escolha um horário"}
            </a>
          </div>
        </div>
      </section>

      {/* Tratamentos */}
      <section id="tratamentos" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-extrabold md:text-4xl">Tratamentos</h2>
        <div
          className="mt-10 grid gap-px overflow-hidden rounded-3xl border sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: C.line, background: C.line }}
        >
          {tratamentos.map(({ icon: Icon, nome, desc }) => (
            <div key={nome} className="bg-white p-7">
              <Icon className="h-6 w-6" style={{ color: C.teal }} />
              <h3 className="mt-5 text-lg font-extrabold">{nome}</h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: C.soft }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
        <div
          className="mt-8 flex flex-wrap items-center gap-3 text-sm"
          style={{ color: C.soft }}
        >
          <span className="font-bold" style={{ color: C.navy }}>
            Convênios:
          </span>
          {["Amil Dental", "Bradesco Dental", "OdontoPrev", "SulAmérica"].map(
            (c) => (
              <span
                key={c}
                className="rounded-full border px-3 py-1"
                style={{ borderColor: C.line }}
              >
                {c}
              </span>
            ),
          )}
        </div>
      </section>

      {/* Equipe */}
      <section
        id="equipe"
        style={{ background: C.navy }}
        className="text-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Quem vai cuidar de você
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              ["AL", "Dra. Ana Lima", "Implantodontia"],
              ["RM", "Dr. Rafael Melo", "Ortodontia"],
              ["CS", "Dra. Carla Souza", "Estética e lentes"],
            ].map(([i, n, e]) => (
              <div
                key={n}
                className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="grid h-14 w-14 place-items-center rounded-full text-lg font-extrabold"
                  style={{ background: C.teal }}
                >
                  {i}
                </div>
                <div className="mt-4 font-extrabold">{n}</div>
                <div className="text-sm opacity-70">{e}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Dúvidas frequentes
        </h2>
        <div
          className="mt-8 divide-y rounded-2xl border"
          style={{ borderColor: C.line }}
        >
          {faq.map(([q, a], i) => (
            <div key={q} style={{ borderColor: C.line }}>
              <button
                onClick={() => setAberta(aberta === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold"
              >
                {q}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition ${aberta === i ? "rotate-180" : ""}`}
                />
              </button>
              {aberta === i && (
                <p
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: C.soft }}
                >
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer
        className="border-t py-8 text-center text-xs"
        style={{ borderColor: C.line, color: C.soft }}
      >
        Av. Herculano Bandeira, 500 — Pina, Recife · Site demonstrativo criado
        por Cristine Ribeiro · dados fictícios
      </footer>
    </div>
  );
}
