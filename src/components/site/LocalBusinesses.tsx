import { Dumbbell, Scissors, Stethoscope, Store, UtensilsCrossed, Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: Dumbbell, title: "Academias", desc: "Planos, horários, modalidades, professores, fotos, avaliações e botão para matrícula." },
  { icon: Scissors, title: "Barbearias", desc: "Serviços, preços, localização, galeria de cortes e botão para agendamento." },
  { icon: Stethoscope, title: "Clínicas e estética", desc: "Procedimentos, equipe, antes/depois, dúvidas frequentes e WhatsApp." },
  { icon: Store, title: "Lojas físicas", desc: "Produtos, promoções, localização, catálogo e contato rápido." },
  { icon: UtensilsCrossed, title: "Restaurantes e cafeterias", desc: "Cardápio, fotos, delivery, reservas e mapa." },
  { icon: Briefcase, title: "Prestadores de serviço", desc: "Página profissional para apresentar serviços, diferenciais, depoimentos e gerar orçamentos." },
];

export function LocalBusinesses() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Para quem é"
          title={<>Sites pensados para <span className="text-gradient">negócios locais</span></>}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group glass rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand/25 to-brand-3/25 text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
