import { Instagram, EyeOff, PhoneOff, HelpCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cards = [
  { icon: Instagram, title: "Instagram sozinho não é suficiente", desc: "Você depende do algoritmo e perde clientes que pesquisam no Google." },
  { icon: EyeOff, title: "Visual amador passa pouca confiança", desc: "Aparência improvisada faz o cliente desistir antes de chamar." },
  { icon: PhoneOff, title: "Contato difícil reduz vendas", desc: "Se for trabalhoso falar com você, o cliente fala com o concorrente." },
  { icon: HelpCircle, title: "Falta de clareza confunde o cliente", desc: "Sem informações organizadas, dúvidas viram desistências." },
];

export function Problem() {
  return (
    <section id="problema" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="O problema"
          title={<>Seu negócio pode estar perdendo clientes por <span className="text-gradient">não ter um site profissional</span></>}
          description="Muitos clientes pesquisam antes de comprar, contratar ou chamar no WhatsApp. Se sua empresa depende apenas do Instagram, tem informações espalhadas ou não transmite confiança, você pode estar perdendo oportunidades todos os dias."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-destructive/15 text-destructive">
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
