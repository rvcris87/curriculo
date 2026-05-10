import { Code2, Database, Globe, Rocket } from "lucide-react";

const items = [
  { icon: Rocket, title: "Projetos reais entregues", desc: "Sistemas e sites publicados, do conceito ao deploy." },
  { icon: Code2, title: "Experiência prática", desc: "Desenvolvimento web completo, do front ao back." },
  { icon: Database, title: "Python, Flask & Supabase", desc: "Stack moderna para sites e sistemas com banco de dados." },
  { icon: Globe, title: "Foco em negócios locais", desc: "Sites pensados para gerar contato e vendas no digital." },
];

export function Authority() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="glass rounded-2xl p-5 transition hover:bg-white/[0.06]"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand/30 to-brand-3/30 text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-sm font-semibold">{it.title}</div>
              <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
