import { useState } from "react";
import { ArrowUpRight, Code2, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { sites, systems, type SiteProject } from "@/data/projects";
import { waLink } from "@/lib/contact";

type Filter = "todos" | "ao-vivo" | "conceito";

const filters: { id: Filter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "ao-vivo", label: "Sites ao vivo" },
  { id: "conceito", label: "Conceitos visuais" },
];

const isExternal = (url: string) => url.startsWith("http");

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("todos");
  const visible =
    filter === "todos" ? sites : sites.filter((s) => s.status === filter);

  return (
    <section id="portfolio" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Portfólio"
            title={
              <>
                Projetos que você pode{" "}
                <span className="text-gradient">abrir e navegar</span>
              </>
            }
            description="Clique em “Ver site ao vivo” para testar no seu celular ou computador. Os conceitos mostram estilos que posso adaptar para o seu negócio."
          />

          <div
            role="tablist"
            aria-label="Filtrar projetos"
            className="inline-flex shrink-0 self-start rounded-xl border border-white/[0.08] bg-white/[0.03] p-1 md:self-auto"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
                  filter === f.id
                    ? "bg-white/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((site) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>

        {/* Sistemas e outros projetos */}
        <div className="mt-20">
          <div className="flex items-center gap-3">
            <Code2 className="h-4 w-4 text-brand" />
            <h3 className="font-display text-xl font-semibold">
              Sistemas e outros projetos
            </h3>
          </div>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Além de sites, desenvolvo sistemas com login, banco de dados e
            painéis.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {systems.map((p) => {
              const Wrapper = p.href ? "a" : "div";
              return (
                <Wrapper
                  key={p.name}
                  {...(p.href
                    ? { href: p.href, target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="group flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition hover:border-white/[0.15] hover:bg-white/[0.04]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        {p.type}
                      </div>
                      <h4 className="mt-1 text-lg font-semibold">{p.name}</h4>
                    </div>
                    {p.href && (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-brand" />
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/5 px-2 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteCard({ site }: { site: SiteProject }) {
  const live = site.status === "ao-vivo" && site.liveUrl;
  const linkProps = live
    ? isExternal(site.liveUrl!)
      ? { href: site.liveUrl, target: "_blank", rel: "noreferrer" }
      : { href: site.liveUrl }
    : null;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d1016] transition duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
      {/* Imagem */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
        <img
          src={site.image}
          alt={`Prévia do site ${site.title} (${site.niche})`}
          loading="lazy"
          width={1448}
          height={1086}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />

        <span
          className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md ${
            live
              ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30"
              : "bg-black/50 text-white/70 ring-1 ring-white/15"
          }`}
        >
          {live && (
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          )}
          {live ? "Ao vivo" : "Conceito"}
        </span>

        {linkProps && (
          <a
            {...linkProps}
            aria-label={`Abrir o site ${site.title}`}
            className="absolute inset-0 grid place-items-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/45 group-hover:opacity-100 focus-visible:bg-black/45 focus-visible:opacity-100"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-black">
              Abrir site <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>
        )}
      </div>

      {/* Texto */}
      <div className="flex flex-1 flex-col p-5">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-brand">
          {site.niche}
        </div>
        <h3 className="mt-1 text-lg font-semibold text-white">{site.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {site.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {site.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.1] px-2.5 py-0.5 text-[10px] font-medium text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className={`mt-auto grid gap-2 pt-5 ${linkProps ? "grid-cols-2" : "grid-cols-1"}`}
        >
          {linkProps && (
            <a
              {...linkProps}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.15] bg-white/[0.03] px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Ver site ao vivo
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          <a
            href={waLink(
              `Olá, Cristine! Vi o projeto ${site.title} no seu portfólio e quero um site nesse estilo.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Quero um assim
          </a>
        </div>
      </div>
    </article>
  );
}
