import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Hand,
  MessageCircle,
  Monitor,
  MousePointerClick,
  Smartphone,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { projects, type Project } from "@/data/projects";
import { waLink } from "@/lib/contact";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Portfólio"
          title={
            <>
              Navegue pelos sites{" "}
              <span className="text-gradient">aqui mesmo</span>
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
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/70 transition hover:border-white/30 hover:text-white"
            >
              <span className="mr-2 font-mono text-white/35">
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
  const frameRef = useRef<HTMLDivElement>(null);

  // Ao sair da tela, trava de novo o site embutido (evita "prender" a rolagem).
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
            <span className="font-mono text-sm text-brand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {p.tipo} · {p.nicho}
            </span>
          </div>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {p.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {p.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {p.destaques.map((d) => (
              <li
                key={d}
                className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-white/70"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-2 lg:col-span-5 lg:justify-end">
          <div
            className="hidden rounded-full border border-white/10 p-1 md:flex"
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
                    ? "bg-white text-black"
                    : "text-white/60 hover:text-white"
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
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
          >
            Abrir em tela cheia <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={waLink(
              `Olá, Cristine! Vi o projeto ${p.title} no seu portfólio e quero um site nesse estilo.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Quero um assim
          </a>
        </div>
      </div>

      {/* Site embutido */}
      <div
        ref={frameRef}
        onMouseLeave={() => setActive(false)}
        className={`relative mx-auto mt-8 overflow-hidden border border-white/[0.1] bg-[#0d1016] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] transition-all duration-500 ${
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
          <iframe
            src={p.url}
            title={`Site ${p.title}`}
            loading="lazy"
            className="h-full w-full border-0"
            style={{ pointerEvents: active ? "auto" : "none" }}
          />

          {/* Trava: evita que a rolagem da página fique presa dentro do site */}
          {!active && (
            <button
              onClick={() => setActive(true)}
              aria-label={`Navegar no site ${p.title}`}
              className="group absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/45 via-transparent to-transparent pb-8 transition hover:from-black/55"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-black/80 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur-md transition group-hover:scale-105">
                <MousePointerClick className="hidden h-4 w-4 md:block" />
                <Hand className="h-4 w-4 md:hidden" />
                Clique para navegar no site
              </span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
