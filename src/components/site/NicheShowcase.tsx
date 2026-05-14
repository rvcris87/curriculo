import { ArrowUpRight, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { niches } from "@/data/niches";
import { waLink } from "@/lib/contact";

export function NicheShowcase() {
  return (
    <section id="modelos-de-sites" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Projetos para nichos"
          title={
            <>
              Modelos de sites que <span className="text-gradient">desenvolvo</span>
            </>
          }
          description="Uma vitrine visual com modelos prontos para inspirar negocios locais que precisam de presenca digital elegante, responsiva e focada em conversao."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {niches.map((project) => (
            <article
              key={project.name}
              className="group relative flex min-h-full flex-col overflow-hidden rounded-3xl glass card-shadow ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:ring-brand-2/40 hover:shadow-[0_32px_90px_-42px_rgba(56,189,248,0.55)]"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver projeto ${project.name}`}
                className="relative block aspect-[16/11] overflow-hidden bg-surface"
              >
                <img
                  src={project.image}
                  alt={`Mockup do site ${project.name}`}
                  width={1200}
                  height={825}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  style={{ objectPosition: project.imagePosition }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-brand-2/30 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-2 backdrop-blur">
                  {project.niche}
                </div>
                <div className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-foreground backdrop-blur transition group-hover:bg-brand-2 group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </a>

              <div className="flex flex-1 flex-col p-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {project.niche}
                  </div>
                  <h3 className="mt-1 text-2xl font-bold">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto grid gap-2 pt-6 sm:grid-cols-2">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-foreground transition hover:border-brand-2/50 hover:bg-white/[0.08] hover:text-brand-2"
                  >
                    Ver projeto
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={waLink(
                      `Ola, Cristine! Vi o modelo ${project.name} no seu portfolio e quero um site assim.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-2 px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Quero um site assim
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
