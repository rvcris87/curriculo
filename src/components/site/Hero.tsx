import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

const WA_HREF = waLink(
  "Oi, Cristine! Quero um site profissional para meu negócio.",
);

/** Prints dos sites de demonstração (gerados a partir de /demos/*). */
const shots = [
  { src: "/vitrine/lumi-estetica.webp", alt: "Site Lumi Estética" },
  { src: "/vitrine/casa-miga.webp", alt: "Site Casa Miga" },
  { src: "/vitrine/odonto-mare.webp", alt: "Site Odonto Maré" },
];

function BrowserShot({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border-2 border-black/80 bg-black shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] ${className}`}
    >
      <div className="flex h-5 items-center gap-1 bg-black px-2 md:h-6">
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
      </div>
      <img
        src={src}
        alt={alt}
        width={960}
        height={600}
        className="block w-full"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-4">
        {/* Linha de status */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest text-white/80"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
            Agenda aberta para novos projetos
          </span>
          <span>Recife · PE</span>
        </motion.div>

        {/* Título gigante + prints sobrepostos */}
        <div className="relative mt-6 md:mt-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative z-0 select-none uppercase leading-[0.86] tracking-tight text-brand"
            style={{ fontSize: "clamp(4.2rem, 15.5vw, 15rem)" }}
          >
            Sites que
            <br />
            vendem.
          </motion.h1>

          {/* Desktop: prints "quebrando" o título */}
          <div
            className="pointer-events-none absolute inset-0 z-10 hidden md:block"
            aria-hidden
          >
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute -top-[4%] right-[1%] w-[30%]"
            >
              <BrowserShot {...shots[0]} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute right-[22%] top-[46%] w-[28%]"
            >
              <BrowserShot {...shots[1]} />
            </motion.div>
          </div>
        </div>

        {/* Celular: prints abaixo do título */}
        <div className="relative mt-6 h-56 md:hidden" aria-hidden>
          <BrowserShot
            {...shots[0]}
            className="absolute left-0 top-0 w-[68%] -rotate-6"
          />
          <BrowserShot
            {...shots[1]}
            className="absolute right-0 top-14 w-[68%] rotate-6"
          />
        </div>

        {/* Texto + ações */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-10 grid gap-8 pb-14 md:mt-12 md:grid-cols-12 md:items-end md:pb-20"
        >
          <p className="max-w-xl text-lg leading-relaxed text-white md:col-span-7 md:text-xl">
            Sou <strong className="font-semibold">Cristine Ribeiro</strong>,
            desenvolvedora web em Recife. Crio sites e sistemas para negócios
            locais serem encontrados — e chamados no WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <a
              id="hero-cta-whatsapp"
              href={WA_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-bold text-ink transition hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              Quero meu site
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-[14px] text-sm font-bold text-white transition hover:bg-white hover:text-ink"
            >
              Ver os sites <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = [
    "Landing pages",
    "Sites institucionais",
    "Sistemas sob medida",
    "WhatsApp integrado",
    "Feito para celular",
    "Preço claro",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden bg-brand py-4 text-ink">
      <div className="authority-marquee flex w-max gap-8">
        {row.map((t, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-8 whitespace-nowrap font-display text-2xl uppercase md:text-3xl"
          >
            {t}
            <span aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
