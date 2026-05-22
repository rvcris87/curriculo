import { SectionHeader } from "./SectionHeader";
import { GraduationCap, Award, Code2 } from "lucide-react";

const tech = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Flask",
  "Supabase",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Figma",
  "Canva",
  "Chart.js",
];

export function About() {
  return (
    <section id="sobre" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Sobre"
              title={
                <>
                  Quem está por trás{" "}
                  <span className="text-gradient">dos projetos</span>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Sou Cristine Ribeiro, desenvolvedora web e estudante de Análise
                e Desenvolvimento de Sistemas. Tenho foco na criação de sites e
                sistemas funcionais para negócios reais.
              </p>
              <p>
                Meu trabalho une desenvolvimento, organização visual e
                estratégia para transformar ideias em páginas claras, bonitas e
                fáceis de usar. Tenho experiência prática com projetos usando
                Python, Flask, Supabase, PostgreSQL, HTML, CSS e JavaScript.
              </p>
              <p>
                Atualmente, meu foco é ajudar pequenos negócios a saírem do
                improviso e terem uma presença digital mais profissional.
              </p>
            </div>

            <div className="mt-10">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Tecnologias
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="card-animated skill-pop glass rounded-lg px-3 py-1.5 text-xs font-medium transition hover:bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="card-animated reveal-3d glass-strong rounded-2xl p-6 border-gradient">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/20 text-brand">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Formação</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Curso Análise e Desenvolvimento de Sistemas e sigo desenvolvendo
                projetos práticos para evoluir minhas habilidades em
                desenvolvimento web, banco de dados, design e experiência do
                usuário.
              </p>
            </div>

            <div className="card-animated reveal-3d glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-3/20 text-brand-3">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Certificados</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Cursos e certificações em desenvolvimento web, lógica de
                programação, banco de dados e design. Aprendizado contínuo
                aplicado em cada projeto.
              </p>
            </div>

            <div className="card-animated reveal-3d glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-2/20 text-brand-2">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Trajetória</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Do primeiro código até sistemas com banco de dados, dashboards e
                sites publicados — sempre com foco em entregar valor real para
                quem usa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
