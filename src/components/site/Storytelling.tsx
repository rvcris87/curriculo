import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  AlertTriangle, 
  CheckCircle, 
  Shield, 
  MessageSquare, 
  Smartphone, 
  Globe, 
  Award,
  ChevronRight
} from "lucide-react";

interface DotProps {
  index: number;
  scrollYProgress: any;
  onClick: () => void;
}

function Dot({ index, scrollYProgress, onClick }: DotProps) {
  const dotScale = useTransform(
    scrollYProgress,
    [0, index * 0.25 - 0.05, index * 0.25, (index + 1) * 0.25, (index + 1) * 0.25 + 0.05, 1],
    [0.8, 0.8, 1.25, 1.25, 0.8, 0.8]
  );
  
  const dotColor = useTransform(
    scrollYProgress,
    [index * 0.25 - 0.05, index * 0.25, (index + 1) * 0.25, (index + 1) * 0.25 + 0.05],
    ["rgba(255,255,255,0.2)", "rgba(14,165,233,1)", "rgba(14,165,233,1)", "rgba(255,255,255,0.2)"]
  );

  return (
    <motion.div
      style={{ scale: dotScale, backgroundColor: dotColor }}
      className="h-3.5 w-3.5 rounded-full z-10 border border-black cursor-pointer shadow-glow transition-all duration-300"
      onClick={onClick}
    />
  );
}

export function Storytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background huge typography parallax
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  
  // Scene-specific opacities for desktop
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.22, 0.27], [1, 1, 0]);
  const scene2Opacity = useTransform(scrollYProgress, [0.22, 0.27, 0.48, 0.53], [0, 1, 1, 0]);
  const scene3Opacity = useTransform(scrollYProgress, [0.48, 0.53, 0.73, 0.78], [0, 1, 1, 0]);
  const scene4Opacity = useTransform(scrollYProgress, [0.73, 0.78, 1], [0, 1, 1]);

  // Parallax translation transforms
  const yScene1 = useTransform(scrollYProgress, [0, 0.25], ["0px", "-50px"]);
  const yScene2 = useTransform(scrollYProgress, [0.22, 0.5], ["50px", "0px"]);
  const yScene3 = useTransform(scrollYProgress, [0.48, 0.75], ["50px", "0px"]);
  const yScene4 = useTransform(scrollYProgress, [0.73, 1], ["50px", "0px"]);

  // Visual component rotations and scales
  const mockScale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.95, 1, 1.02, 1.05, 1.1]);
  const mockRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-4, 0, 4]);

  const scenes = [
    {
      id: 1,
      tag: "O Cenário Comum",
      title: "Antes, o cliente chegava e ficava em dúvida.",
      text: "Informações espalhadas, ausência de site, pouco contexto sobre serviços e dificuldade para entrar em contato.",
      bgWord: "ANTES",
      color: "text-red-400"
    },
    {
      id: 2,
      tag: "A Transformação",
      title: "Depois, tudo fica claro em poucos segundos.",
      text: "Serviços, diferenciais, fotos, localização e WhatsApp organizados em uma página profissional.",
      bgWord: "CLAREZA",
      color: "text-brand"
    },
    {
      id: 3,
      tag: "O Diferencial",
      title: "Seu negócio passa mais confiança.",
      text: "Um site bem feito valoriza sua marca antes mesmo do primeiro atendimento.",
      bgWord: "VALOR",
      color: "text-amber-400"
    },
    {
      id: 4,
      tag: "A Conversão",
      title: "O caminho até o WhatsApp fica mais direto.",
      text: "Botões estratégicos conduzem o visitante para pedir orçamento, agendar ou tirar dúvidas.",
      bgWord: "CONTATO",
      color: "text-[#25D366]"
    }
  ];

  return (
    <div 
      ref={containerRef} 
      id="storytelling" 
      className="relative w-full bg-gradient-to-b from-transparent via-black/10 to-transparent"
      style={{ position: "relative" }}
    >
      {/* Mobile Layout */}
      {isMobile ? (
        <div className="py-16 px-4 bg-black/20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <span className="text-xs font-semibold text-brand uppercase tracking-widest">
                Jornada Digital
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
                Da presença improvisada à marca profissional
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Veja a diferença que um site planejado faz na percepção do seu cliente.
              </p>
            </div>

            <div className="space-y-12">
              {scenes.map((scene, index) => (
                <motion.div
                  key={scene.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl border border-white/5 p-6 space-y-4 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4 text-xs font-bold text-white/5 text-[4rem] select-none pointer-events-none font-display">
                    0{scene.id}
                  </div>
                  
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-muted-foreground">
                    {scene.tag}
                  </span>
                  
                  <h3 className="text-xl font-bold">{scene.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{scene.text}</p>
                  
                  <div className="mt-4 pt-4 border-t border-white/5">
                    {scene.id === 1 && <MobileVisualScene1 />}
                    {scene.id === 2 && <MobileVisualScene2 />}
                    {scene.id === 3 && <MobileVisualScene3 />}
                    {scene.id === 4 && <MobileVisualScene4 />}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Desktop Layout */
        <div className="relative h-[280vh] w-full">
          <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
            
            {/* Parallax Background Huge Text */}
            <div className="absolute inset-x-0 top-1/3 text-center pointer-events-none select-none z-0">
              {scenes.map((scene, i) => {
                const op = i === 0 ? scene1Opacity : i === 1 ? scene2Opacity : i === 2 ? scene3Opacity : scene4Opacity;
                return (
                  <motion.div
                    key={scene.id}
                    style={{ opacity: op }}
                    className="absolute inset-x-0 top-0 text-[11rem] font-bold text-white/[0.02] font-display tracking-widest leading-none"
                  >
                    {scene.bgWord}
                  </motion.div>
                );
              })}
            </div>

            {/* Main Content Grid */}
            <div className="relative z-10 mx-auto max-w-7xl px-8 w-full grid grid-cols-12 gap-8 items-center h-full">
              
              {/* Left Column: Progress Indicators and Rotating Text Copy */}
              <div className="col-span-5 flex gap-8 items-center h-full py-20 relative">
                
                {/* Immersive Vertical Progress Bar */}
                <div className="flex flex-col items-center justify-between h-[300px] w-4 relative">
                  <div className="absolute top-0 bottom-0 w-[2px] bg-white/5 rounded-full" />
                  
                  {/* Dynamic scroll progress fill */}
                  <motion.div 
                    style={{ 
                      scaleY: scrollYProgress, 
                      transformOrigin: "top" 
                    }} 
                    className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand to-brand-3 rounded-full"
                  />
                  
                  {scenes.map((scene, i) => (
                    <Dot
                      key={scene.id}
                      index={i}
                      scrollYProgress={scrollYProgress}
                      onClick={() => {
                        if (!containerRef.current) return;
                        const elementTop = containerRef.current.offsetTop;
                        const elementHeight = containerRef.current.clientHeight;
                        const scrollPosition = elementTop + (elementHeight * (i / 3.2));
                        window.scrollTo({
                          top: scrollPosition,
                          behavior: "smooth"
                        });
                      }}
                    />
                  ))}
                </div>

                {/* Stories Stack */}
                <div className="flex-1 relative h-60">
                  
                  {/* Scene 1 Copy */}
                  <motion.div 
                    style={{ opacity: scene1Opacity, y: yScene1 }} 
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">
                      {scenes[0].tag}
                    </span>
                    <h3 className="mt-3 text-3xl font-bold leading-tight font-display">
                      {scenes[0].title}
                    </h3>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                      {scenes[0].text}
                    </p>
                  </motion.div>

                  {/* Scene 2 Copy */}
                  <motion.div 
                    style={{ opacity: scene2Opacity, y: yScene2 }} 
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <span className="text-xs font-semibold text-brand uppercase tracking-widest">
                      {scenes[1].tag}
                    </span>
                    <h3 className="mt-3 text-3xl font-bold leading-tight font-display">
                      {scenes[1].title}
                    </h3>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                      {scenes[1].text}
                    </p>
                  </motion.div>

                  {/* Scene 3 Copy */}
                  <motion.div 
                    style={{ opacity: scene3Opacity, y: yScene3 }} 
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                      {scenes[2].tag}
                    </span>
                    <h3 className="mt-3 text-3xl font-bold leading-tight font-display">
                      {scenes[2].title}
                    </h3>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                      {scenes[2].text}
                    </p>
                  </motion.div>

                  {/* Scene 4 Copy */}
                  <motion.div 
                    style={{ opacity: scene4Opacity, y: yScene4 }} 
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <span className="text-xs font-semibold text-[#25D366] uppercase tracking-widest">
                      {scenes[3].tag}
                    </span>
                    <h3 className="mt-3 text-3xl font-bold leading-tight font-display">
                      {scenes[3].title}
                    </h3>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                      {scenes[3].text}
                    </p>
                  </motion.div>

                </div>
              </div>

              {/* Right Column: Visual Stage */}
              <div className="col-span-7 h-full flex items-center justify-center relative">
                <motion.div
                  style={{ scale: mockScale, rotate: mockRotate }}
                  className="relative w-[480px] aspect-[4/3] rounded-2xl glass-strong border-gradient p-1 card-shadow overflow-hidden transition-all duration-300"
                >
                  <div className="absolute -inset-10 -z-10 bg-white/[0.02] blur-xl" />

                  <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.02] px-4 py-3">
                    <div className="h-2 w-2 rounded-full bg-white/10" />
                    <div className="h-2 w-2 rounded-full bg-white/10" />
                    <div className="h-2 w-2 rounded-full bg-white/10" />
                    <div className="ml-3 flex-1 rounded bg-white/5 h-4 flex items-center px-3">
                      <span className="text-[8px] text-white/20 select-none">
                        meusiteprofissional.com.br
                      </span>
                    </div>
                  </div>

                  <div className="relative w-full h-[calc(100%-40px)] bg-black/40 overflow-hidden">
                    
                    {/* SCENE 1 VISUAL */}
                    <motion.div 
                      style={{ opacity: scene1Opacity }}
                      className="absolute inset-0 p-6 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="h-3 w-20 rounded bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                            <span className="text-[7px] text-red-400 font-bold">ERRO 404</span>
                          </div>
                          <AlertTriangle className="h-4 w-4 text-red-500/60 animate-pulse" />
                        </div>
                        
                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                          <div className="h-2 w-16 rounded bg-white/10" />
                          <div className="space-y-1">
                            <div className="h-1.5 w-full rounded bg-white/5" />
                            <div className="h-1.5 w-5/6 rounded bg-white/5" />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-12 rounded-lg bg-white/[0.01] border border-white/5 flex flex-col items-center justify-center">
                            <div className="h-1 w-6 rounded bg-white/10" />
                          </div>
                          <div className="h-12 rounded-lg bg-white/[0.01] border border-white/5 flex flex-col items-center justify-center">
                            <div className="h-1 w-8 rounded bg-white/10" />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-2 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <div className="h-6 w-6 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 text-[10px] font-bold">!</div>
                        <p className="text-[8px] text-red-400/80 font-medium">Informações desatualizadas e link quebrado no perfil.</p>
                      </div>
                    </motion.div>

                    {/* SCENE 2 VISUAL */}
                    <motion.div 
                      style={{ opacity: scene2Opacity }}
                      className="absolute inset-0 p-6 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="h-2.5 w-12 rounded bg-brand/20" />
                          <div className="flex gap-2">
                            <div className="h-1.5 w-6 rounded bg-white/10" />
                            <div className="h-1.5 w-6 rounded bg-white/10" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 items-center">
                          <div className="space-y-2">
                            <div className="h-3 w-16 rounded bg-brand/20" />
                            <div className="h-5 w-full rounded bg-white/10" />
                            <div className="space-y-1">
                              <div className="h-1.5 w-full rounded bg-white/5" />
                              <div className="h-1.5 w-4/5 rounded bg-white/5" />
                            </div>
                          </div>
                          <div className="aspect-[4/3] rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-brand-3/5" />
                            <Smartphone className="h-5 w-5 text-brand/40" />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-white/5 pt-3">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle className="h-3 w-3 text-brand" />
                          <span className="text-[8px] text-muted-foreground font-medium">Identidade organizada</span>
                        </div>
                        <div className="h-5 w-16 rounded bg-brand/20 border border-brand/30 flex items-center justify-center">
                          <span className="text-[7px] text-brand font-bold">Ver Serviços</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* SCENE 3 VISUAL */}
                    <motion.div 
                      style={{ opacity: scene3Opacity }}
                      className="absolute inset-0 p-6 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                            <Shield className="h-2.5 w-2.5 text-amber-400" />
                          </div>
                          <span className="text-[10px] font-bold text-amber-400">Presença Confiança</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 rounded-xl bg-white/[0.02] border border-amber-400/20 shadow-lg space-y-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/[0.03] to-transparent" />
                            <Globe className="h-4 w-4 text-amber-400/80" />
                            <div className="text-[9px] font-bold text-foreground">Domínio Próprio</div>
                            <div className="text-[7px] text-muted-foreground">Sua marca com site .com.br</div>
                          </div>

                          <div className="p-3 rounded-xl bg-white/[0.02] border border-brand/20 shadow-lg space-y-2 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.03] to-transparent" />
                            <Award className="h-4 w-4 text-brand/80" />
                            <div className="text-[9px] font-bold text-foreground">Design Exclusivo</div>
                            <div className="text-[7px] text-muted-foreground">Não usamos modelos genéricos</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-400/5 border border-amber-400/10 flex items-center justify-between">
                        <div className="text-[8px] text-amber-400/90 font-medium">Percepção de valor multiplicada pelo design premium.</div>
                        <div className="h-4 w-4 rounded-full bg-amber-400/15 flex items-center justify-center">
                          <ChevronRight className="h-2.5 w-2.5 text-amber-400" />
                        </div>
                      </div>
                    </motion.div>

                    {/* SCENE 4 VISUAL */}
                    <motion.div 
                      style={{ opacity: scene4Opacity }}
                      className="absolute inset-0 p-6 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                          <div className="space-y-1">
                            <div className="text-[8px] text-muted-foreground">Interesse do Cliente</div>
                            <div className="text-[10px] font-bold">"Quero agendar horário"</div>
                          </div>
                          <div className="px-3 py-1.5 rounded-lg bg-[#25D366] text-black text-[9px] font-bold flex items-center gap-1 shadow-lg shadow-[#25D366]/20 animate-pulse">
                            <MessageSquare className="h-3 w-3 fill-black" />
                            Agendar via WhatsApp
                          </div>
                        </div>

                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="p-3.5 rounded-xl bg-white/[0.04] border border-[#25D366]/30 max-w-[80%] ml-auto space-y-1 relative"
                        >
                          <div className="absolute top-0 right-0 w-2 h-2 bg-[#25D366] rounded-full translate-x-1/2 -translate-y-1/2" />
                          <div className="text-[8px] text-[#25D366] font-semibold">Mensagem pré-preenchida</div>
                          <p className="text-[9px] text-foreground font-medium leading-normal">
                            "Oi! Vi seu site e gostaria de solicitar um orçamento para o meu negócio."
                          </p>
                        </motion.div>
                      </div>

                      <div className="flex items-center gap-2 p-2.5 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl">
                        <div className="h-6 w-6 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                          <MessageSquare className="h-3 w-3 text-[#25D366] fill-[#25D366]" />
                        </div>
                        <div className="text-[8px] text-[#25D366]/80 font-medium">Contatos prontos e qualificados chegando direto no seu celular.</div>
                      </div>
                    </motion.div>

                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Micro visuals for Mobile scroll display ─── */

function MobileVisualScene1() {
  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center gap-2 text-red-400">
        <AlertTriangle className="h-4 w-4" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Perda de Clientes</span>
      </div>
      <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/10 text-xs text-red-300">
        ❌ Link quebrado no Instagram ou página com erros 404.<br/>
        ❌ Informações desorganizadas desanimam o cliente.<br/>
        ❌ Nenhuma facilidade para tirar dúvidas rápido.
      </div>
    </div>
  );
}

function MobileVisualScene2() {
  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center gap-2 text-brand">
        <CheckCircle className="h-4 w-4" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Tudo em um só lugar</span>
      </div>
      <div className="p-3 rounded-lg bg-brand/5 border border-brand/10 text-xs text-brand-foreground/90">
        ✓ Serviços, fotos, preços e localização estruturados.<br/>
        ✓ Design limpo e moderno focado em leitura no celular.<br/>
        ✓ Menus rápidos facilitam navegar pelos nichos do negócio.
      </div>
    </div>
  );
}

function MobileVisualScene3() {
  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center gap-2 text-amber-400">
        <Shield className="h-4 w-4" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Credibilidade Instantânea</span>
      </div>
      <div className="p-3 rounded-lg bg-amber-400/5 border border-amber-400/10 text-xs text-amber-200">
        ★ Domínio profissional (.com.br) gera segurança.<br/>
        ★ Elementos visuais premium reforçam o valor do seu trabalho.<br/>
        ★ Detalhes que diferenciam seu negócio de amadores.
      </div>
    </div>
  );
}

function MobileVisualScene4() {
  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center gap-2 text-[#25D366]">
        <MessageSquare className="h-4 w-4 text-[#25D366]" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Mais Vendas</span>
      </div>
      <div className="p-3 rounded-lg bg-[#25D366]/5 border border-[#25D366]/10 text-xs text-emerald-300">
        ➔ Botões de WhatsApp flutuantes e chamadas claras (CTAs).<br/>
        ➔ Links rápidos que abrem mensagens com o assunto correto.<br/>
        ➔ Contatos qualificados chegando direto no seu WhatsApp.
      </div>
    </div>
  );
}
