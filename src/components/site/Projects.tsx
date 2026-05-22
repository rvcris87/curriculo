import {
  ArrowUpRight,
  LineChart,
  HeartHandshake,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    name: "GranaSimples",
    type: "Sistema financeiro web",
    icon: LineChart,
    accent: "from-brand/30 to-brand-2/30",
    description:
      "Sistema criado para controle de finanças pessoais, com dashboard, transações, metas, categorias, gráficos e integração com banco de dados.",
    proves:
      "Capacidade de criar sistemas completos, com login, dados dinâmicos, organização financeira e painel visual.",
    tech: [
      "Flask",
      "Python",
      "PostgreSQL",
      "Supabase",
      "JavaScript",
      "Chart.js",
    ],
  },
  {
    name: "Site de Casamento",
    type: "Site personalizado para evento",
    icon: HeartHandshake,
    accent: "from-brand-3/30 to-brand/20",
    description:
      "Página completa para casamento, com confirmação de presença, lista de presentes, galeria, upload de fotos dos convidados e integração com banco de dados.",
    proves:
      "Capacidade de criar sites personalizados, bonitos, funcionais e com recursos reais para o usuário final.",
    tech: [
      "Flask",
      "Supabase",
      "RSVP",
      "Upload de imagens",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    name: "StudyTrack",
    type: "Aplicação para organização de estudos",
    icon: BookOpen,
    accent: "from-brand-2/30 to-brand-3/20",
    description:
      "Sistema voltado para acompanhamento de rotina, progresso e organização pessoal.",
    proves:
      "Capacidade de criar aplicações úteis, organizadas e com foco em experiência do usuário.",
    tech: ["Flask", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Smykker RR",
    type: "Presença digital para loja online",
    icon: Sparkles,
    accent: "from-brand/20 to-brand-3/30",
    description:
      "Projeto de comunicação visual, organização de catálogo, branding e estratégia digital para uma loja de perfumes, acessórios e produtos de beleza.",
    proves: "Visão de marca, estética, conteúdo e posicionamento digital.",
    tech: [
      "Branding",
      "Catálogo",
      "Instagram",
      "Design comercial",
      "Estratégia digital",
    ],
  },
];

export function Projects() {
  return (
    <section id="projetos" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Projetos"
          title={
            <>
              Estudos de caso e{" "}
              <span className="text-gradient">projetos reais</span>
            </>
          }
          description="Cada projeto resolve um problema concreto. Veja o que está por trás da execução."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="card-animated project-depth-card group relative glass rounded-3xl p-7 card-shadow transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="project-layer project-layer-back flex items-start justify-between gap-4">
                <div
                  className={`project-mockup-image grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${p.accent} text-foreground`}
                >
                  <p.icon className="h-6 w-6" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </div>

              <div className="project-layer project-layer-mid mt-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {p.type}
                </div>
                <h3 className="mt-1 text-2xl font-bold">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="project-layer project-layer-front mt-5 rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                  O que esse projeto mostra
                </div>
                <p className="mt-1 text-sm text-foreground/90">{p.proves}</p>
              </div>

              <div className="project-layer project-layer-front mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Transition to next section */}
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="h-16 w-px bg-gradient-to-b from-brand/0 via-brand/30 to-brand/0 mb-6" />
          <p className="text-sm font-medium text-brand uppercase tracking-widest max-w-sm mx-auto">
            Gostou dos resultados?
          </p>
        </div>
      </div>
    </section>
  );
}
