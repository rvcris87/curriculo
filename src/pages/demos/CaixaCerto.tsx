import { useMemo, useState } from "react";
import {
  BarChart3,
  CalendarDays,
  LogOut,
  Search,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { useDemoSetup } from "./useDemoSetup";

const C = {
  bg: "#F5F5F2",
  ink: "#151515",
  soft: "#6B6B66",
  line: "#E4E4DF",
  accent: "#FF5A1F",
  green: "#13834F",
};

const brl = (n: number) =>
  n.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

// Dados fictícios determinísticos
const serie30 = Array.from({ length: 30 }, (_, i) =>
  Math.round(1800 + Math.sin(i / 3) * 450 + i * 28 + ((i * 37) % 11) * 40),
);
const serie7 = serie30.slice(-7);

const vendas = [
  {
    id: "#1048",
    cliente: "Marina Costa",
    item: "Kit skincare",
    valor: 289,
    status: "Pago",
  },
  {
    id: "#1047",
    cliente: "Pedro Alves",
    item: "Corte + barba",
    valor: 75,
    status: "Pago",
  },
  {
    id: "#1046",
    cliente: "Luana Freitas",
    item: "Bolo encomenda",
    valor: 160,
    status: "Pendente",
  },
  {
    id: "#1045",
    cliente: "Rafael Nunes",
    item: "Mensalidade",
    valor: 129,
    status: "Pago",
  },
  {
    id: "#1044",
    cliente: "Camila Rocha",
    item: "Kit skincare",
    valor: 289,
    status: "Cancelado",
  },
  {
    id: "#1043",
    cliente: "Tiago Lima",
    item: "Consultoria",
    valor: 450,
    status: "Pago",
  },
];

const agenda = [
  { h: "09:00", nome: "Marina Costa", serv: "Avaliação" },
  { h: "10:30", nome: "Pedro Alves", serv: "Retorno" },
  { h: "13:00", nome: "Luana Freitas", serv: "Entrega de encomenda" },
  { h: "15:00", nome: "Tiago Lima", serv: "Reunião" },
  { h: "17:30", nome: "Bia Santos", serv: "Primeira visita" },
];

const clientes = [
  ["Marina Costa", "12 compras", "R$ 2.340"],
  ["Tiago Lima", "8 compras", "R$ 3.600"],
  ["Pedro Alves", "21 compras", "R$ 1.575"],
  ["Camila Rocha", "3 compras", "R$ 610"],
  ["Rafael Nunes", "9 compras", "R$ 1.161"],
];

type Pagina = "Visão geral" | "Vendas" | "Agenda" | "Clientes";

const statusCor: Record<string, { bg: string; fg: string }> = {
  Pago: { bg: "#E3F4EA", fg: C.green },
  Pendente: { bg: "#FFF1D6", fg: "#9A6400" },
  Cancelado: { bg: "#FDE4E1", fg: "#B42318" },
};

export function CaixaCerto() {
  useDemoSetup(
    "Caixa Certo — Gestão para pequenos negócios",
    "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
    C.bg,
  );
  const [logado, setLogado] = useState(false);
  const [pagina, setPagina] = useState<Pagina>("Visão geral");

  const root = {
    background: C.bg,
    color: C.ink,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    "--f-display": "'Plus Jakarta Sans', sans-serif",
  } as React.CSSProperties;

  if (!logado) {
    return (
      <div
        className="demo-root grid min-h-screen place-items-center px-6"
        style={root}
      >
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-2 text-lg font-extrabold">
            <span
              className="grid h-8 w-8 place-items-center rounded-lg text-white"
              style={{ background: C.accent }}
            >
              ₢
            </span>
            Caixa Certo
          </div>
          <h1 className="mt-10 text-3xl font-extrabold tracking-tight">
            Entrar no painel
          </h1>
          <p className="mt-2 text-sm" style={{ color: C.soft }}>
            Este é um ambiente de demonstração. Os dados já estão preenchidos.
          </p>
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setLogado(true);
            }}
          >
            <label className="block text-sm font-semibold">
              E-mail
              <input
                readOnly
                value="demo@caixacerto.app"
                className="mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm"
                style={{ borderColor: C.line }}
              />
            </label>
            <label className="block text-sm font-semibold">
              Senha
              <input
                readOnly
                type="password"
                value="demonstracao"
                className="mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm"
                style={{ borderColor: C.line }}
              />
            </label>
            <button
              className="w-full rounded-xl py-3.5 text-sm font-bold text-white"
              style={{ background: C.ink }}
            >
              Entrar na demonstração
            </button>
          </form>
        </div>
      </div>
    );
  }

  const nav: { nome: Pagina; icon: typeof BarChart3 }[] = [
    { nome: "Visão geral", icon: BarChart3 },
    { nome: "Vendas", icon: ShoppingCart },
    { nome: "Agenda", icon: CalendarDays },
    { nome: "Clientes", icon: Users },
  ];

  return (
    <div className="demo-root flex min-h-screen" style={root}>
      {/* Sidebar */}
      <aside
        className="hidden w-60 shrink-0 flex-col border-r bg-white p-5 md:flex"
        style={{ borderColor: C.line }}
      >
        <div className="flex items-center gap-2 font-extrabold">
          <span
            className="grid h-8 w-8 place-items-center rounded-lg text-white"
            style={{ background: C.accent }}
          >
            ₢
          </span>
          Caixa Certo
        </div>
        <nav className="mt-10 space-y-1">
          {nav.map(({ nome, icon: Icon }) => (
            <button
              key={nome}
              onClick={() => setPagina(nome)}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition"
              style={
                pagina === nome
                  ? { background: C.ink, color: "#fff" }
                  : { color: C.soft }
              }
            >
              <Icon className="h-4 w-4" /> {nome}
            </button>
          ))}
        </nav>
        <button
          onClick={() => setLogado(false)}
          className="mt-auto flex items-center gap-3 px-3 py-2 text-sm font-semibold"
          style={{ color: C.soft }}
        >
          <LogOut className="h-4 w-4" /> Sair
        </button>
      </aside>

      <main className="min-w-0 flex-1">
        {/* Topbar */}
        <div
          className="flex items-center justify-between gap-4 border-b bg-white px-5 py-4 md:px-8"
          style={{ borderColor: C.line }}
        >
          <div>
            <div className="text-xs" style={{ color: C.soft }}>
              Ateliê Bela Vista
            </div>
            <h1 className="text-xl font-extrabold">{pagina}</h1>
          </div>
          <div
            className="hidden items-center gap-2 rounded-xl border px-3 py-2 text-sm sm:flex"
            style={{ borderColor: C.line, color: C.soft }}
          >
            <Search className="h-4 w-4" /> Buscar…
          </div>
          <div
            className="grid h-9 w-9 place-items-center rounded-full text-xs font-bold text-white"
            style={{ background: C.ink }}
          >
            BV
          </div>
        </div>

        {/* Nav mobile */}
        <div
          className="flex gap-1 overflow-x-auto border-b bg-white px-3 py-2 md:hidden"
          style={{ borderColor: C.line }}
        >
          {nav.map(({ nome }) => (
            <button
              key={nome}
              onClick={() => setPagina(nome)}
              className="shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold"
              style={
                pagina === nome
                  ? { background: C.ink, color: "#fff" }
                  : { color: C.soft }
              }
            >
              {nome}
            </button>
          ))}
        </div>

        <div className="p-5 md:p-8">
          {pagina === "Visão geral" && <Visao />}
          {pagina === "Vendas" && <TabelaVendas />}
          {pagina === "Agenda" && <Agenda />}
          {pagina === "Clientes" && <Clientes />}
        </div>
      </main>
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border bg-white p-5 ${className}`}
      style={{ borderColor: C.line }}
    >
      {children}
    </div>
  );
}

function Visao() {
  const [periodo, setPeriodo] = useState<"7d" | "30d">("30d");
  const serie = periodo === "7d" ? serie7 : serie30;
  const total = serie.reduce((a, b) => a + b, 0);

  const kpis = [
    { label: "Faturamento", valor: brl(total), delta: 12.4 },
    {
      label: "Ticket médio",
      valor: brl(total / (periodo === "7d" ? 41 : 176)),
      delta: 3.1,
    },
    { label: "Pedidos", valor: periodo === "7d" ? "41" : "176", delta: 8.7 },
    {
      label: "Cancelamentos",
      valor: periodo === "7d" ? "2" : "9",
      delta: -1.8,
    },
  ];

  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <div
          className="flex rounded-xl border bg-white p-1"
          style={{ borderColor: C.line }}
        >
          {(["7d", "30d"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriodo(p)}
              className="rounded-lg px-3 py-1.5 text-xs font-bold"
              style={
                periodo === p
                  ? { background: C.ink, color: "#fff" }
                  : { color: C.soft }
              }
            >
              Últimos {p === "7d" ? "7" : "30"} dias
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.label}>
            <div className="text-xs font-semibold" style={{ color: C.soft }}>
              {k.label}
            </div>
            <div className="mt-2 text-2xl font-extrabold tracking-tight">
              {k.valor}
            </div>
            <div
              className="mt-2 inline-flex items-center gap-1 text-xs font-bold"
              style={{ color: k.delta >= 0 ? C.green : "#B42318" }}
            >
              {k.delta >= 0 ? (
                <TrendingUp className="h-3.5 w-3.5" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5" />
              )}
              {k.delta > 0 ? "+" : ""}
              {k.delta}%
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <Card>
          <div className="flex items-center justify-between">
            <h2 className="font-extrabold">Faturamento diário</h2>
            <span className="text-xs" style={{ color: C.soft }}>
              Total {brl(total)}
            </span>
          </div>
          <AreaChart data={serie} />
        </Card>
        <Card>
          <h2 className="font-extrabold">Hoje na agenda</h2>
          <ul className="mt-4 space-y-3">
            {agenda.slice(0, 4).map((a) => (
              <li key={a.h} className="flex items-center gap-3 text-sm">
                <span className="w-12 font-bold" style={{ color: C.accent }}>
                  {a.h}
                </span>
                <div className="min-w-0">
                  <div className="truncate font-semibold">{a.nome}</div>
                  <div className="text-xs" style={{ color: C.soft }}>
                    {a.serv}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <TabelaVendas compacta />
    </div>
  );
}

function AreaChart({ data }: { data: number[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const w = 600;
  const h = 200;
  const max = Math.max(...data) * 1.1;
  const pts = useMemo(
    () =>
      data.map(
        (v, i) => [(i / (data.length - 1)) * w, h - (v / max) * h] as const,
      ),
    [data, max],
  );
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x},${y}`).join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;

  return (
    <div className="relative mt-4">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="h-52 w-full overflow-visible"
        preserveAspectRatio="none"
        onMouseLeave={() => setHover(null)}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const i = Math.round(
            ((e.clientX - r.left) / r.width) * (data.length - 1),
          );
          setHover(Math.max(0, Math.min(data.length - 1, i)));
        }}
      >
        <defs>
          <linearGradient id="cc-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={C.accent} stopOpacity="0.25" />
            <stop offset="1" stopColor={C.accent} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1="0"
            x2={w}
            y1={h * f}
            y2={h * f}
            stroke={C.line}
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <path d={area} fill="url(#cc-fill)" />
        <path
          d={line}
          fill="none"
          stroke={C.accent}
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
        {hover !== null && (
          <line
            x1={pts[hover][0]}
            x2={pts[hover][0]}
            y1="0"
            y2={h}
            stroke={C.ink}
            strokeDasharray="3 3"
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
      {hover !== null && (
        <div
          className="pointer-events-none absolute top-0 -translate-x-1/2 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white"
          style={{
            left: `${(hover / (data.length - 1)) * 100}%`,
            background: C.ink,
          }}
        >
          Dia {hover + 1}: {brl(data[hover])}
        </div>
      )}
    </div>
  );
}

function TabelaVendas({ compacta = false }: { compacta?: boolean }) {
  const [filtro, setFiltro] = useState("Todas");
  const lista = vendas.filter((v) => filtro === "Todas" || v.status === filtro);
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 pt-5">
        <h2 className="font-extrabold">
          {compacta ? "Últimas vendas" : "Todas as vendas"}
        </h2>
        {!compacta && (
          <div className="flex gap-1">
            {["Todas", "Pago", "Pendente", "Cancelado"].map((f) => (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                className="rounded-lg px-2.5 py-1 text-xs font-bold"
                style={
                  filtro === f
                    ? { background: C.ink, color: "#fff" }
                    : { color: C.soft }
                }
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[520px] text-sm">
          <thead>
            <tr className="text-left text-xs" style={{ color: C.soft }}>
              <th className="px-5 py-2 font-semibold">Pedido</th>
              <th className="px-5 py-2 font-semibold">Cliente</th>
              <th className="px-5 py-2 font-semibold">Item</th>
              <th className="px-5 py-2 font-semibold">Valor</th>
              <th className="px-5 py-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {(compacta ? lista.slice(0, 4) : lista).map((v) => (
              <tr
                key={v.id}
                className="border-t"
                style={{ borderColor: C.line }}
              >
                <td
                  className="px-5 py-3 font-mono text-xs"
                  style={{ color: C.soft }}
                >
                  {v.id}
                </td>
                <td className="px-5 py-3 font-semibold">{v.cliente}</td>
                <td className="px-5 py-3">{v.item}</td>
                <td className="px-5 py-3 font-semibold">{brl(v.valor)}</td>
                <td className="px-5 py-3">
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-bold"
                    style={{
                      background: statusCor[v.status].bg,
                      color: statusCor[v.status].fg,
                    }}
                  >
                    {v.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function Agenda() {
  const [feitos, setFeitos] = useState<string[]>([]);
  return (
    <Card>
      <h2 className="font-extrabold">Terça, 25 de novembro</h2>
      <ul className="mt-5 divide-y" style={{ borderColor: C.line }}>
        {agenda.map((a) => {
          const ok = feitos.includes(a.h);
          return (
            <li
              key={a.h}
              className="flex items-center gap-4 py-4"
              style={{ borderColor: C.line }}
            >
              <span className="w-14 font-extrabold" style={{ color: C.accent }}>
                {a.h}
              </span>
              <div className="min-w-0 flex-1">
                <div
                  className={`font-semibold ${ok ? "line-through opacity-50" : ""}`}
                >
                  {a.nome}
                </div>
                <div className="text-xs" style={{ color: C.soft }}>
                  {a.serv}
                </div>
              </div>
              <button
                onClick={() =>
                  setFeitos((f) =>
                    ok ? f.filter((x) => x !== a.h) : [...f, a.h],
                  )
                }
                className="rounded-lg border px-3 py-1.5 text-xs font-bold"
                style={
                  ok
                    ? {
                        background: C.green,
                        color: "#fff",
                        borderColor: C.green,
                      }
                    : { borderColor: C.line }
                }
              >
                {ok ? "Atendido" : "Marcar atendido"}
              </button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

function Clientes() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {clientes.map(([n, c, v]) => (
        <Card key={n}>
          <div
            className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold"
            style={{ background: "#FFE6DB", color: C.accent }}
          >
            {n
              .split(" ")
              .map((p) => p[0])
              .join("")}
          </div>
          <div className="mt-3 font-extrabold">{n}</div>
          <div className="mt-1 text-sm" style={{ color: C.soft }}>
            {c} · {v}
          </div>
        </Card>
      ))}
    </div>
  );
}
