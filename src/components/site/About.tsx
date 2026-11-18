import { Clock, KeyRound, MapPin, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

/** Quando tiver a foto, salve em /public/cristine.webp e troque FOTO para "/cristine.webp". */
const FOTO: string | null = null;

const motivos = [
  {
    icon: MessageCircle,
    titulo: "Você fala direto comigo",
    texto:
      "Sem agência, sem atendente no meio. Quem conversa com você é quem faz o site.",
  },
  {
    icon: MapPin,
    titulo: "Conheço o comércio local",
    texto:
      "Moro em Recife e crio pensando em quem pesquisa e compra aqui na região.",
  },
  {
    icon: KeyRound,
    titulo: "O site é seu",
    texto:
      "Domínio e acessos ficam no seu nome. Você não fica preso a mim nem a uma plataforma.",
  },
  {
    icon: Clock,
    titulo: "Prazo por escrito",
    texto:
      "Entrega em até 10 dias depois do material, com etapas combinadas desde o início.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-12 lg:items-center">
        {/* Foto (ou espaço reservado) */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] bg-brand">
            {FOTO ? (
              <img
                src={FOTO}
                alt="Cristine Ribeiro"
                className="h-full w-full object-cover mix-blend-multiply grayscale"
              />
            ) : (
              <div className="grid h-full w-full place-items-center">
                <span className="select-none font-display text-[12rem] leading-none text-ink/90">
                  CR
                </span>
              </div>
            )}
            <span className="absolute bottom-5 left-5 rounded-full bg-ink px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
              Recife · PE
            </span>
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Sobre"
            title={
              <>
                Oi, eu sou a <span className="text-brand">Cris</span>
              </>
            }
          />
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-white/90">
            <p>
              Sou desenvolvedora web e crio sites e sistemas para pequenos
              negócios que querem sair do improviso — e parar de perder cliente
              por não ter onde mostrar o próprio trabalho.
            </p>
            <p>
              Além de programar, cuido da estratégia: o que aparece primeiro, o
              que o cliente precisa ler e onde ele clica para chamar você no
              WhatsApp.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {motivos.map(({ icon: Icon, titulo, texto }) => (
              <li
                key={titulo}
                className="rounded-2xl bg-white/[0.07] p-5 ring-1 ring-white/15"
              >
                <Icon className="h-5 w-5 text-brand" />
                <h3 className="mt-3 font-display text-2xl uppercase leading-none">
                  {titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {texto}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
