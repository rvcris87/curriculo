import { Sparkles, Smartphone, MessageCircle, Type, LayoutGrid } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cards = [
  { icon: Sparkles, title: "Design moderno", desc: "Visual atual e elegante, alinhado com a identidade da sua marca." },
  { icon: Smartphone, title: "Site responsivo", desc: "Funciona perfeitamente no celular, tablet e desktop." },
  { icon: MessageCircle, title: "WhatsApp em destaque", desc: "Botões estratégicos para o cliente falar com você em um clique." },
  { icon: Type, title: "Textos estratégicos", desc: "Copy comercial que apresenta valor e leva à ação." },
  { icon: LayoutGrid, title: "Organização dos serviços", desc: "Tudo claro, fácil de navegar e fácil de entender." },
];

export function Solution() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="A solução"
          title={<>Eu crio sites que ajudam sua empresa a <span className="text-gradient">parecer mais profissional</span> e ser mais fácil de contratar</>}
          description="Seu site pode funcionar como uma vitrine digital completa: apresenta seus serviços, mostra seus diferenciais, organiza suas informações e leva o visitante direto para o contato."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`glass rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/[0.06] ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand/30 to-brand-2/30 text-brand">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
