import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Hand,
  MessageCircle,
  Monitor,
  Smartphone,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { projects, type Project } from "@/data/projects";
import { waLink } from "@/lib/contact";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative scroll-mt-24 bg-gray py-20 text-ink md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Portfólio"
          tone="light"
          title={
            <>
              Navegue pelos sites{" "}
              <span className="text-background">aqui mesmo</span>
            </>
          }
          description="Cada projeto abaixo é um site funcionando. Clique dentro da tela para navegar, testar os botões e ver a versão de celular."
        />

        {/* Índice */}
        <nav className="mt-10 flex flex-wrap gap-2" aria-label="Projetos">
          {projects.map((p, i) => (
            <a
              key={p.id}
              href={`#projeto-${p.id}`}
              className="rounded-full border-2 border-ink/15 px-4 py-2 text-xs font-semibold text-ink/80 transition hover:border-background hover:bg-background hover:text-white"
            >
              <span className="mr-2 font-mono text-background">
                {String(i + 1).padStart(2, "0")}
              </span>
              {p.title}
            </a>
          ))}
        </nav>

        <div className="mt-16 space-y-28 md:space-y-36">
          {projects.map((p, i) => (
            <EmbeddedProject key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EmbeddedProject({
  project: p,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [active, setActive] = useState(false);
  const [touch, setTouch] = useState(false);
  const [fullHeight, setFullHeight] = useState<number | null>(null);
  const activeRef = useRef(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    setTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  // Ao sair da tela, o site volta a deixar a rolagem para o portfólio.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => !e.isIntersecting && setActive(false),
      {
        threshold: 0.15,
      },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Desktop: quando o mouse sai da moldura, a rolagem volta para o portfólio.
  useEffect(() => {
    if (!active || touch) return;
    const onMove = (e: PointerEvent) => {
      const r = iframeRef.current?.getBoundingClientRect();
      if (!r) return;
      const inside =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;
      if (!inside) setActive(false);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [active, touch]);

  // Desktop: cliques funcionam sempre; a roda do mouse só rola o site depois do primeiro clique nele.
  const onIframeLoad = () => {
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return; // site externo: sem controle, comportamento padrão do navegador
    doc.addEventListener("pointerdown", () => setActive(true));

    // Celular: o site embutido ganha a altura total e quem rola é a moldura em volta.
    // (Navegadores móveis nem sempre entregam o deslizar do dedo para dentro de um iframe.)
    if (window.matchMedia("(hover: none)").matches) {
      const measure = () => setFullHeight(doc.documentElement.scrollHeight);
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(doc.body);
    }

    doc.addEventListener(
      "wheel",
      (e) => {
        if (activeRef.current) return;
        e.preventDefault();
        const factor =
          e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
        window.scrollBy({ top: e.deltaY * factor, left: 0 });
      },
      { passive: false },
    );
  };

  const external = p.url.startsWith("http");
  const shownUrl = external
    ? new URL(p.url).host + new URL(p.url).pathname
    : `${window.location.host}${p.url}`;

  return (
    <article id={`projeto-${p.id}`} className="scroll-mt-28">
      {/* Cabeçalho do projeto */}
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm font-bold text-background">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
              {p.tipo} · {p.nicho}
            </span>
          </div>
          <h3 className="mt-3 font-display text-5xl uppercase leading-none tracking-tight text-ink md:text-7xl">
            {p.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/75 md:text-base">
            {p.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {p.destaques.map((d) => (
              <li
                key={d}
                className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-ink/80"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-2 lg:col-span-5 lg:justify-end">
          <div
            className="hidden rounded-full border-2 border-ink/15 p-1 md:flex"
            role="group"
            aria-label="Visualização"
          >
            {(
              [
                ["desktop", Monitor, "Computador"],
                ["mobile", Smartphone, "Celular"],
              ] as const
            ).map(([d, Icon, label]) => (
              <button
                key={d}
                onClick={() => setDevice(d)}
                aria-pressed={device === d}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  device === d
                    ? "bg-ink text-white"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                <Icon className="h-3.5 w-3.5" /> {label}
              </button>
            ))}
          </div>
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-4 py-2 text-xs font-bold text-ink transition hover:bg-ink hover:text-white"
          >
            Abrir em tela cheia <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={waLink(
              `Olá, Cristine! Vi o projeto ${p.title} no seu portfólio e quero um site nesse estilo.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-background px-4 py-2.5 text-xs font-bold text-white transition hover:scale-[1.03]"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Quero um assim
          </a>
        </div>
      </div>

      {/* Site embutido */}
      <div
        ref={frameRef}
        className={`relative mx-auto mt-8 overflow-hidden border-2 border-ink bg-ink shadow-[0_40px_80px_-40px_rgba(42,5,96,0.6)] transition-all duration-500 ${
          device === "mobile"
            ? "max-w-[400px] rounded-[2.2rem] p-2.5"
            : "max-w-none rounded-2xl"
        }`}
      >
        {device === "desktop" ? (
          <div className="flex h-10 items-center gap-2 border-b border-white/[0.06] bg-white/[0.03] px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
            <span className="mx-auto max-w-[60%] truncate rounded-md bg-white/[0.06] px-4 py-1 font-mono text-[11px] text-white/45">
              {shownUrl}
            </span>
          </div>
        ) : (
          <div className="mx-auto mb-2 h-1.5 w-20 rounded-full bg-white/15" />
        )}

        <div
          className={`relative overflow-hidden bg-white ${
            device === "mobile"
              ? "h-[720px] rounded-[1.6rem]"
              : "h-[70vh] min-h-[460px] md:h-[680px]"
          }`}
        >
          <div
            className="h-full w-full"
            style={{
              overflowY: touch && active ? "auto" : "hidden",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <iframe
              ref={iframeRef}
              src={p.url}
              title={`Site ${p.title}`}
              loading="lazy"
              onLoad={onIframeLoad}
              scrolling={touch && fullHeight ? "no" : undefined}
              className="block w-full border-0"
              style={{
                height: touch && fullHeight ? `${fullHeight}px` : "100%",
                pointerEvents: touch && !active ? "none" : "auto",
              }}
            />
          </div>

          {/* Desktop: aviso discreto de como rolar dentro do site */}
          {!touch && (
            <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/75 px-3 py-1.5 text-[11px] font-semibold text-white ring-1 ring-white/15 backdrop-blur-md transition">
              {active
                ? "Rolando dentro do site"
                : "Clique no site para rolar dentro dele"}
            </div>
          )}

          {/* Celular: toque para liberar o site (evita prender a rolagem da página) */}
          {touch && !active && (
            <button
              onClick={() => setActive(true)}
              aria-label={`Navegar no site ${p.title}`}
              className="absolute inset-0 grid place-items-center bg-black/25"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-black/85 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15">
                <Hand className="h-4 w-4" />
                Toque para navegar
              </span>
            </button>
          )}
          {touch && active && (
            <button
              onClick={() => setActive(false)}
              className="absolute right-3 top-3 rounded-full bg-black/85 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15"
            >
              Sair do site
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
