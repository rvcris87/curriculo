import { SectionHeader } from "./SectionHeader";

const steps = [
  { n: "01", title: "Diagnóstico", desc: "Entendo seu negócio, público, serviços e objetivo do site." },
  { n: "02", title: "Estratégia", desc: "Organizo a estrutura da página, textos, seções e chamadas para ação." },
  { n: "03", title: "Design", desc: "Crio uma identidade visual moderna e alinhada com sua marca." },
  { n: "04", title: "Desenvolvimento", desc: "Transformo a ideia em um site funcional, responsivo e rápido." },
  { n: "05", title: "Entrega", desc: "Faço os testes finais, publico o site e explico como usar." },
];

export function Method() {
  return (
    <section id="metodo" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Método"
          title={<>Como funciona <span className="text-gradient">o processo</span></>}
          description="Um caminho claro do briefing à publicação — sem improviso e sem retrabalho."
        />

        <div className="relative mt-14">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand/40 via-brand-3/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-6">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`relative grid items-center gap-4 md:grid-cols-2 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6">
                    <div className="text-xs font-bold tracking-widest text-brand">{s.n}</div>
                    <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2">
                  <div className="grid h-12 w-12 place-items-center rounded-full glass-strong border-gradient text-sm font-bold text-brand">
                    {s.n}
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
