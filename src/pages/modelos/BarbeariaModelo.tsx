import {
  CalendarClock,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  ArrowLeft,
  ChevronRight,
  User,
  Quote,
} from "lucide-react";
import { waLink } from "@/lib/contact";

const WHATSAPP_MSG =
  "Olá, Cristine! Vi o modelo Barbearia Premium e tenho interesse em um site nesse estilo.";

const motivos = [
  {
    titulo: "Hora marcada",
    descricao:
      "Esqueça as filas de espera. Seu horário é respeitado com pontualidade britânica.",
    icone: CalendarClock,
  },
  {
    titulo: "Ambiente premium",
    descricao:
      "Espaço climatizado com bar completo, café gourmet, cervejas artesanais e música selecionada.",
    icone: Sparkles,
  },
  {
    titulo: "Barbeiros especialistas",
    descricao:
      "Profissionais qualificados em técnicas clássicas e nas últimas tendências mundiais.",
    icone: ShieldCheck,
  },
  {
    titulo: "Produtos de ponta",
    descricao:
      "Utilizamos pomadas, óleos e produtos de cuidados masculinos das melhores marcas internacionais.",
    icone: CheckCircle2,
  },
  {
    titulo: "Agendamento instantâneo",
    descricao:
      "Reserve seu horário pelo WhatsApp de forma extremamente ágil, a qualquer hora do dia.",
    icone: MessageCircle,
  },
];

const servicos = [
  {
    nome: "Corte Masculino",
    descricao:
      "Lavagem premium, corte personalizado adaptado ao seu formato de rosto e finalização com pomada.",
    preco: "R$ 60",
    tempo: "45 min",
    tag: "Essencial",
  },
  {
    nome: "Barba Completa",
    descricao:
      "Protocolo de toalha quente, vapor de ozônio, óleos essenciais hidratantes e massagem facial relaxante.",
    preco: "R$ 50",
    tempo: "40 min",
    tag: "Relax",
  },
  {
    nome: "Combo Corte + Barba",
    descricao:
      "A experiência completa de nossa assinatura com toalha quente, alinhamento premium e desconto especial.",
    preco: "R$ 100",
    tempo: "80 min",
    tag: "Mais Procurado",
  },
  {
    nome: "Design de Sobrancelha",
    descricao:
      "Limpeza precisa e alinhamento dos fios respeitando a simetria natural do seu rosto.",
    preco: "R$ 30",
    tempo: "20 min",
    tag: "Detalhe",
  },
];

const estilos = [
  {
    nome: "Social Clássico",
    tag: "Atemporal",
    descricao:
      "Visual limpo, simétrico e sofisticado, ideal para o dia a dia corporativo e ocasiões formais.",
    designCode:
      "linear-gradient(135deg, #1A130E 0%, #35261C 50%, #4D382A 100%)",
  },
  {
    nome: "Mid Fade",
    tag: "Moderno",
    descricao:
      "Degradê médio impecável com transição suave, topo texturizado e finalização de alto contraste.",
    designCode:
      "linear-gradient(135deg, #271C15 0%, #423024 50%, #5E4535 100%)",
  },
  {
    nome: "Barba Alinhada",
    tag: "Presença",
    descricao:
      "Desenho simétrico, linhas extremamente nítidas marcadas na navalha e hidratação profunda.",
    designCode:
      "linear-gradient(135deg, #120D0A 0%, #291D16 50%, #3F2E23 100%)",
  },
  {
    nome: "Combo Premium",
    tag: "Assinatura",
    descricao:
      "Corte fade texturizado com barba completa, toalha quente e finalização com produtos importados.",
    designCode:
      "linear-gradient(135deg, #3A2B20 0%, #594232 50%, #785A45 100%)",
  },
];

const depoimentos = [
  {
    nome: "Carlos Eduardo",
    profissao: "Advogado",
    texto:
      "Ambiente excepcional. O cuidado com a toalha quente na barba e a pontualidade me conquistaram. Sem dúvidas, a melhor barbearia premium da cidade.",
  },
  {
    nome: "Thiago Mendes",
    profissao: "Empresário",
    texto:
      "Profissionais de altíssimo nível. Além de um corte de cabelo excelente, a conversa amigável e a cerveja gelada tornam a experiência única.",
  },
  {
    nome: "Marcos Vinícius",
    profissao: "Desenvolvedor",
    texto:
      "A praticidade de agendar por WhatsApp economiza muito tempo. A equipe é atenciosa e o resultado do combo corte + barba sempre supera as expectativas.",
  },
];

export function BarbeariaModelo() {
  const linkAgendamento = waLink(WHATSAPP_MSG);

  return (
    <div className="min-h-screen bg-[#0C0B0A] text-[#F3EFEA] font-sans antialiased selection:bg-[#C59B6D] selection:text-[#0C0B0A]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html, body, a, button, [role="button"], select, input, textarea {
          cursor: auto !important;
        }
        a:hover, button:hover, [role="button"]:hover, select:hover {
          cursor: pointer !important;
        }
      `,
        }}
      />

      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 border-b border-[#C59B6D]/15 bg-[#0C0B0A]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10 py-5">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-[#C59B6D] font-mono leading-none">
              NAVALHA PRIME
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#A69785]/80 mt-1.5">
              Estilo & Cuidado Masculino
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#servicos"
              className="text-xs font-bold tracking-widest text-[#A69785] hover:text-[#C59B6D] transition-colors uppercase"
            >
              Serviços
            </a>
            <a
              href="#experiencia"
              className="text-xs font-bold tracking-widest text-[#A69785] hover:text-[#C59B6D] transition-colors uppercase"
            >
              Experiência
            </a>
            <a
              href="#estilos"
              className="text-xs font-bold tracking-widest text-[#A69785] hover:text-[#C59B6D] transition-colors uppercase"
            >
              Estilos
            </a>
            <a
              href="#localizacao"
              className="text-xs font-bold tracking-widest text-[#A69785] hover:text-[#C59B6D] transition-colors uppercase"
            >
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#A69785] hover:text-[#C59B6D] transition-colors py-2.5 px-4 border border-[#A69785]/20 rounded-md hover:bg-[#A69785]/5"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Voltar ao Portfólio</span>
            </a>
            <a
              href={linkAgendamento}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#C59B6D] to-[#A07A51] hover:from-[#B8860B] hover:to-[#C59B6D] text-[#0C0B0A] font-extrabold text-xs uppercase tracking-widest px-6 py-3 rounded-md transition-all duration-300 shadow-lg shadow-[#C59B6D]/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Agendar
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO PRINCIPAL */}
      <section className="relative overflow-hidden border-b border-[#C59B6D]/10 py-12 lg:py-20">
        {/* Glow ambient background effects */}
        <div className="absolute top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#C59B6D]/5 blur-[140px]" />
        <div className="absolute bottom-1/4 left-10 -z-10 h-[500px] w-[500px] rounded-full bg-[#9C7C5D]/5 blur-[140px]" />

        {/* Fine grid overlay */}
        <div
          className="absolute inset-0 -z-20 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C59B6D 1.2px, transparent 1.2px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 sm:px-10 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 border border-[#C59B6D]/30 bg-[#C59B6D]/5 px-4.5 py-1.5 rounded-full text-xs font-bold text-[#C59B6D] tracking-widest uppercase">
              <span className="h-2 w-2 rounded-full bg-[#C59B6D] animate-pulse" />
              Barbearia Premium Navalha Prime
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[#F3EFEA] leading-[1.05] font-sans">
              Sua barbearia com{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C59B6D] via-[#E2C79E] to-[#A07A51] block sm:inline">
                presença premium.
              </span>
            </h1>

            <p className="max-w-2xl text-lg sm:text-xl leading-relaxed text-[#A69785]">
              Corte, barba e cuidado em uma experiência pensada para homens que
              valorizam estilo, pontualidade e atendimento de alto padrão.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href={linkAgendamento}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#C59B6D] to-[#A07A51] hover:from-[#B8860B] hover:to-[#C59B6D] text-[#0C0B0A] font-extrabold text-sm uppercase tracking-widest px-10 py-5 rounded-md transition-all duration-300 shadow-2xl shadow-[#C59B6D]/20 hover:-translate-y-1 active:translate-y-0 group"
              >
                Agendar agora
                <ChevronRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1.5" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center border-2 border-[#C59B6D]/30 hover:border-[#C59B6D] bg-transparent text-[#F3EFEA] hover:bg-[#C59B6D]/5 font-extrabold text-sm uppercase tracking-widest px-10 py-5 rounded-md transition-all duration-300"
              >
                Ver serviços
              </a>
            </div>
          </div>

          {/* Right Column (Premium Visual Composition) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-[#C59B6D]/25 bg-gradient-to-b from-[#1C1816] to-[#0F0D0C] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
              {/* Gold light sheen top-left */}
              <div className="absolute top-0 left-0 h-64 w-64 bg-gradient-to-br from-[#C59B6D]/25 to-transparent blur-3xl" />

              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-[#C59B6D]/15 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C59B6D]/15 text-[#C59B6D]">
                    <Scissors className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#A69785]">
                      Navalha Prime
                    </h4>
                    <p className="text-xs text-emerald-500 flex items-center gap-1.5 font-bold mt-0.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Aberto agora
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 bg-[#C59B6D]/10 border border-[#C59B6D]/25 px-3 py-1.5 rounded-md text-xs font-extrabold text-[#C59B6D]">
                  <Star className="h-4 w-4 fill-[#C59B6D] text-[#C59B6D]" />
                  4.9
                </span>
              </div>

              {/* Featured service banner */}
              <div className="relative mb-6 overflow-hidden rounded-xl border border-[#C59B6D]/20 bg-[#161311] p-6 shadow-inner">
                <div className="absolute right-4 top-4 opacity-10">
                  <Scissors className="h-20 w-20 text-[#C59B6D]" />
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C59B6D]">
                    Serviço Recomendado
                  </span>
                  <span className="bg-[#C59B6D] text-[#0C0B0A] font-extrabold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded">
                    Mais Vendido
                  </span>
                </div>
                <h3 className="mt-2 text-2xl font-extrabold text-[#F3EFEA]">
                  Corte + Barba
                </h3>
                <p className="mt-1 text-xs text-[#A69785]">
                  A experiência de alinhamento completo com toalha quente,
                  hidratação e massagem.
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-[#C59B6D]/10 pt-3">
                  <span className="text-lg font-bold text-[#C59B6D]">
                    R$ 100,00
                  </span>
                  <span className="text-[10px] font-bold text-[#A69785] bg-black/60 px-3 py-1 rounded border border-[#C59B6D]/10">
                    Salvar R$ 10
                  </span>
                </div>
              </div>

              {/* Interactive schedules simulator */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-[#F3EFEA] uppercase tracking-wider">
                    Horários Hoje
                  </span>
                  <span className="text-[10px] font-bold text-[#C59B6D] flex items-center gap-1">
                    <Clock3 className="h-3.5 w-3.5" />
                    Agendamento instantâneo
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {["09:00", "10:30", "14:00", "15:30", "17:00", "18:30"].map(
                    (hora, idx) => (
                      <div
                        key={hora}
                        className={`border rounded-lg py-3 text-center text-xs font-bold transition-all duration-300 cursor-pointer ${
                          idx === 2
                            ? "bg-[#C59B6D] border-[#C59B6D] text-[#0C0B0A] font-extrabold shadow-lg shadow-[#C59B6D]/20 scale-105"
                            : "border-[#C59B6D]/15 bg-[#161311] hover:border-[#C59B6D]/45 text-[#A69785] hover:text-[#F3EFEA] hover:scale-[1.02]"
                        }`}
                      >
                        {hora}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Background geometric outline elements to feel like a modern magazine layout */}
            <div className="absolute -bottom-5 -left-5 -z-10 h-full w-full rounded-2xl border border-[#C59B6D]/15" />
            <div className="absolute -top-5 -right-5 -z-10 h-1/2 w-1/2 rounded-2xl bg-gradient-to-tr from-transparent to-[#C59B6D]/10" />
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO CLARA/BEGE — MOTIVOS PARA ESCOLHER */}
      <section
        id="experiencia"
        className="bg-[#FAF8F5] text-[#1C1816] py-14 lg:py-16 relative"
      >
        {/* Subtle grid backdrop for editorial structure */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1C1816 1px, transparent 1px), linear-gradient(to bottom, #1C1816 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 sm:px-10 relative">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9C7C5D] block mb-3">
              Diferencial
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[#1A1513]">
              Cinco motivos para escolher a Navalha Prime.
            </h2>
            <div className="h-1.5 w-24 bg-[#9C7C5D] mt-4" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {motivos.map((item, idx) => {
              const Icon = item.icone;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] border-2 border-[#EADFCB] rounded-xl p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-[#9C7C5D]/15 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 rounded-lg bg-[#9C7C5D]/10 text-[#9C7C5D] flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1C1816] mb-3">
                      {item.titulo}
                    </h3>
                    <p className="text-sm text-[#5C534A] leading-relaxed">
                      {item.descricao}
                    </p>
                  </div>
                  <div className="pt-6 text-xs font-mono font-bold text-[#9C7C5D]/60 mt-auto">
                    0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO ESCURA — SERVIÇOS */}
      <section
        id="servicos"
        className="bg-[#0C0B0A] py-14 lg:py-16 relative border-t border-b border-[#C59B6D]/15"
      >
        {/* Background Ambient Radial Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-[#C59B6D]/3 blur-[180px]" />

        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C59B6D] block mb-3">
              Tabela de Serviços
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Seu visual sempre em dia.
            </h2>
            <p className="mt-3 text-base text-[#A69785]">
              Escolha o serviço ideal para o seu estilo e garanta um atendimento
              com excelência.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {servicos.map((servico, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border-2 border-[#C59B6D]/10 hover:border-[#C59B6D]/45 bg-[#141210] p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
              >
                {/* Visual hover effect line */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#C59B6D] transition-all duration-500 group-hover:w-full" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold text-[#C59B6D] bg-[#C59B6D]/10 border border-[#C59B6D]/20 px-3 py-1 rounded-full">
                      {servico.tempo}
                    </span>
                    <span className="text-[10px] font-bold text-[#A69785] tracking-widest uppercase bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                      {servico.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F3EFEA] mb-3 group-hover:text-[#C59B6D] transition-colors">
                    {servico.nome}
                  </h3>
                  <p className="text-sm text-[#A69785] leading-relaxed mb-8">
                    {servico.descricao}
                  </p>
                </div>

                <div className="border-t border-[#C59B6D]/10 pt-5 mt-auto">
                  <div className="flex items-baseline justify-between mb-5">
                    <span className="text-[11px] uppercase text-[#A69785] tracking-widest font-bold">
                      Investimento
                    </span>
                    <span className="text-3xl font-extrabold text-[#C59B6D]">
                      {servico.preco}
                    </span>
                  </div>
                  <a
                    href={linkAgendamento}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-transparent to-transparent hover:from-[#C59B6D] hover:to-[#A07A51] border-2 border-[#C59B6D]/30 group-hover:border-[#C59B6D] text-[#C59B6D] hover:text-[#0C0B0A] font-extrabold text-xs uppercase tracking-widest py-3.5 rounded-md transition-all duration-300"
                  >
                    Agendar Horário
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO CLARA/BEGE — ESTILOS */}
      <section
        id="estilos"
        className="bg-[#FAF8F5] text-[#1C1816] py-14 lg:py-16 relative"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9C7C5D] block mb-3">
                Galeria de Estilos
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-[#1A1513]">
                Cortes que mostram seu estilo.
              </h2>
            </div>
            <p className="mt-4 md:mt-0 text-base text-[#5C534A] max-w-sm">
              Inspire-se em alguns dos nossos cortes mais solicitados e encontre
              a referência perfeita para seu estilo.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {estilos.map((estilo, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] border-2 border-[#EADFCB] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group"
              >
                {/* CSS Visual Graphic Representation of Haircut Style */}
                <div
                  className="h-64 relative overflow-hidden flex items-center justify-center transition-transform duration-500"
                  style={{ background: estilo.designCode }}
                >
                  {/* Grid overlay inside preview */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #EFEAE2 1.5px, transparent 1.5px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Styled barbershop aesthetic layers with shapes and lines */}
                  <div className="absolute top-0 right-0 w-44 h-44 rounded-bl-full bg-gradient-to-l from-[#C59B6D]/35 to-transparent blur-md group-hover:scale-110 transition-transform duration-700" />

                  <div className="absolute top-5 left-5 w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-[10px] font-mono text-[#C59B6D] uppercase tracking-widest font-bold">
                      {estilo.tag}
                    </span>
                  </div>

                  {/* Dynamic graphic lines mimicking hair precision cutting */}
                  <div className="absolute bottom-6 left-6 right-6 h-0.5 bg-[#C59B6D]/30 rotate-6" />
                  <div className="absolute bottom-10 left-6 right-6 h-0.5 bg-[#C59B6D]/20 -rotate-3" />

                  <Scissors className="h-14 w-14 text-[#C59B6D]/45 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />

                  {/* Diagonal accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#C59B6D]" />
                </div>

                <div className="p-6 bg-[#FFFFFF]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-[#1C1816] group-hover:text-[#9C7C5D] transition-colors">
                      {estilo.nome}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#9C7C5D] bg-[#9C7C5D]/15 px-2.5 py-1 rounded">
                      {estilo.tag}
                    </span>
                  </div>
                  <p className="text-sm text-[#5C534A] leading-relaxed">
                    {estilo.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO ESCURA — DEPOIMENTOS */}
      <section className="bg-[#0C0B0A] py-14 lg:py-16 relative overflow-hidden border-b border-[#C59B6D]/15">
        {/* Background ambient gold light right side */}
        <div className="absolute -right-20 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-[#C59B6D]/3 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C59B6D] block mb-3">
              Opiniões Reais
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Quem frequenta aprova.
            </h2>
            <p className="mt-3 text-base text-[#A69785]">
              A opinião de quem vive a experiência Navalha Prime no dia a dia.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {depoimentos.map((depoimento, idx) => (
              <div
                key={idx}
                className="bg-[#141210] border-2 border-[#C59B6D]/10 rounded-xl p-8 relative flex flex-col justify-between shadow-xl hover:border-[#C59B6D]/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute -top-4 right-8 text-[#C59B6D]/20">
                  <Quote className="h-12 w-12 fill-[#C59B6D]/5" />
                </div>

                <div className="space-y-4">
                  <div className="flex gap-1 text-[#C59B6D]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4.5 w-4.5 fill-[#C59B6D] text-[#C59B6D]"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[#A69785] leading-relaxed italic">
                    "{depoimento.texto}"
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#C59B6D]/10 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#C59B6D]/15 text-[#C59B6D] flex items-center justify-center">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F3EFEA]">
                      {depoimento.nome}
                    </h4>
                    <p className="text-xs text-[#A69785]">
                      {depoimento.profissao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SEÇÃO LOCALIZAÇÃO E HORÁRIO */}
      <section
        id="localizacao"
        className="bg-[#FAF8F5] text-[#1C1816] py-14 lg:py-16 relative"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#9C7C5D] block mb-3">
                  Onde Estamos
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1A1513]">
                  Venha nos visitar.
                </h2>
                <div className="h-1.5 w-24 bg-[#9C7C5D] mt-4" />
              </div>

              <p className="text-base text-[#5C534A] leading-relaxed">
                Estamos localizados em uma área nobre de fácil acesso com
                estacionamento exclusivo e gratuito no local. Venha tomar um
                café ou cerveja gelada conosco enquanto cuidamos do seu visual.
              </p>

              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-lg bg-[#9C7C5D]/10 text-[#9C7C5D] flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1C1816] uppercase tracking-widest">
                      Endereço
                    </h4>
                    <p className="text-base text-[#5C534A] mt-1 font-semibold">
                      Rua Exemplo, 123 — Centro
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-lg bg-[#9C7C5D]/10 text-[#9C7C5D] flex items-center justify-center shrink-0 shadow-sm">
                    <Clock3 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1C1816] uppercase tracking-widest">
                      Funcionamento
                    </h4>
                    <p className="text-base text-[#5C534A] mt-1 font-semibold">
                      Segunda a sábado, das 9h às 19h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Map Visual Composition */}
            <div className="lg:col-span-7 relative w-full mt-6 lg:mt-0">
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#EADFCB] bg-[#FFFFFF] p-5 shadow-2xl">
                {/* Styled CSS Map mockup representing navigation routes */}
                <div className="relative h-80 sm:h-[400px] w-full rounded-xl bg-[#EFEAE2] overflow-hidden border border-[#E5DEC9]">
                  {/* Grid network representing streets */}
                  <div
                    className="absolute inset-0 opacity-[0.25]"
                    style={{
                      backgroundImage: `
                           linear-gradient(to right, #9C7C5D 1px, transparent 1px),
                           linear-gradient(to bottom, #9C7C5D 1px, transparent 1px)
                         `,
                      backgroundSize: "48px 48px",
                    }}
                  />

                  {/* Main diagonal avenue */}
                  <div className="absolute top-0 bottom-0 left-[35%] w-16 bg-[#F7F4F0] -rotate-12 border-l border-r border-[#E5DEC9]" />
                  {/* Cross street */}
                  <div className="absolute left-0 right-0 top-[40%] h-12 bg-[#F7F4F0] rotate-6 border-t border-b border-[#E5DEC9]" />

                  {/* Landmark spots */}
                  <div className="absolute top-[20%] right-[15%] text-[10px] font-mono text-[#9C7C5D] uppercase tracking-widest bg-[#FFFFFF] px-3 py-1 rounded border border-[#EADFCB] font-bold shadow-md">
                    Praça Central
                  </div>

                  <div className="absolute bottom-[20%] left-[10%] text-[10px] font-mono text-[#9C7C5D] uppercase tracking-widest bg-[#FFFFFF] px-3 py-1 rounded border border-[#EADFCB] font-bold shadow-md">
                    Estacionamento
                  </div>

                  {/* Navalha Prime Pin Marker */}
                  <div className="absolute left-[45%] top-[45%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                    {/* Ring Pulse Effect */}
                    <div className="absolute h-16 w-16 bg-[#9C7C5D]/25 rounded-full animate-ping" />

                    {/* Pin Pinpoint */}
                    <div className="h-10 w-10 bg-[#9C7C5D] rounded-full border-4 border-white flex items-center justify-center shadow-2xl">
                      <Scissors className="h-5 w-5 text-white" />
                    </div>

                    {/* Tooltip box */}
                    <div className="mt-3 bg-[#1C1816] text-[#EFEAE2] text-[11px] font-extrabold px-4 py-2 rounded-md shadow-2xl border-2 border-[#C59B6D]/30 whitespace-nowrap tracking-wider uppercase">
                      Navalha Prime
                    </div>
                  </div>
                </div>

                {/* Subtitle */}
                <div className="mt-5 flex items-center justify-between text-xs font-bold text-[#5C534A] uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#9C7C5D] border-2 border-white shadow-sm" />
                    Localização Exata
                  </span>
                  <span>Estacionamento Gratuito com Manobrista</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="bg-[#0C0B0A] py-16 lg:py-20 relative overflow-hidden border-t border-[#C59B6D]/15">
        {/* Glow behind container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-96 w-[800px] rounded-full bg-[#C59B6D]/5 blur-[130px]" />

        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-7">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C59B6D]">
              Agende sua Visita
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Pronto para renovar o visual?
            </h2>
            <p className="text-base sm:text-lg text-[#A69785] leading-relaxed max-w-2xl mx-auto">
              Agende seu horário e viva uma verdadeira experiência de estilo e
              bem-estar na Navalha Prime. Nossa equipe está pronta para lhe
              atender com o profissionalismo que você merece.
            </p>

            <div className="pt-6">
              <a
                href={linkAgendamento}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C59B6D] to-[#A07A51] hover:from-[#B8860B] hover:to-[#C59B6D] text-[#0C0B0A] font-extrabold px-12 py-5 rounded-md transition-all duration-300 shadow-2xl shadow-[#C59B6D]/20 hover:-translate-y-1 active:translate-y-0 text-sm uppercase tracking-widest"
              >
                <MessageCircle className="h-6 w-6 fill-[#0C0B0A]" />
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="border-t border-[#C59B6D]/10 bg-[#0C0B0A] py-14 text-sm text-[#A69785]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold tracking-[0.2em] text-[#C59B6D] font-mono block">
              NAVALHA PRIME
            </span>
            <p className="text-xs text-[#A69785]/60 mt-2 font-medium">
              Site demonstrativo criado por Cristine Ribeiro
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 font-semibold">
            <a
              href="/#portfolio"
              className="text-xs text-[#A69785] hover:text-[#C59B6D] transition-colors flex items-center gap-2 border border-[#A69785]/20 py-2 px-4 rounded-md hover:bg-[#A69785]/5"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao portfólio
            </a>
            <span className="hidden sm:inline text-[#A69785]/30">|</span>
            <p className="text-xs text-[#A69785]/50">
              © {new Date().getFullYear()} Navalha Prime. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
