/**
 * PORTFÓLIO — edite aqui para adicionar, remover ou trocar projetos.
 *
 * status:
 *   "ao-vivo"  → tem link público; aparece o botão "Ver site ao vivo"
 *   "conceito" → só a imagem; aparece apenas "Quero um site assim"
 *
 * Imagens ficam em /public/portfolio/ (formato .webp, proporção 4:3).
 */

export type SiteProject = {
  id: string;
  title: string;
  niche: string;
  description: string;
  image: string;
  status: "ao-vivo" | "conceito";
  liveUrl?: string;
  tags: string[];
};

export const sites: SiteProject[] = [
  {
    id: "barbearia",
    title: "Navalha Prime",
    niche: "Barbearia",
    description:
      "Site completo com serviços e preços, experiência do cliente, depoimentos e agendamento direto pelo WhatsApp.",
    image: "/portfolio/barbearia-navalha-prime.webp",
    status: "ao-vivo",
    liveUrl: "/modelos/barbearia",
    tags: ["Agendamento", "Serviços", "WhatsApp"],
  },
  {
    id: "academia",
    title: "Academia Fitness",
    niche: "Academia",
    description:
      "Plataforma para academia com modalidades, planos, equipe e área de gestão de alunos com dashboard.",
    image: "/portfolio/academia.webp",
    status: "ao-vivo",
    liveUrl: "https://academia-protp.lovable.app",
    tags: ["Planos", "Dashboard", "Matrícula"],
  },
  {
    id: "restaurante",
    title: "Tavola Prime",
    niche: "Restaurante",
    description:
      "Site elegante para restaurante com cardápio em destaque, reservas e apresentação da experiência da casa.",
    image: "/portfolio/restaurante-cafeteria.webp",
    status: "ao-vivo",
    liveUrl: "https://trevolaprotop.lovable.app/",
    tags: ["Cardápio", "Reservas", "Delivery"],
  },
  {
    id: "clinica",
    title: "Clínica Estética",
    niche: "Saúde e beleza",
    description:
      "Visual leve e sofisticado com procedimentos, antes e depois, equipe e agendamento de avaliação.",
    image: "/portfolio/clinica-estetica.webp",
    status: "conceito",
    tags: ["Procedimentos", "Avaliação", "Confiança"],
  },
  {
    id: "loja",
    title: "Loja de Moda",
    niche: "Varejo",
    description:
      "Vitrine de produtos, promoções e categorias, com localização da loja e atendimento pelo WhatsApp.",
    image: "/portfolio/loja-fisica.webp",
    status: "conceito",
    tags: ["Vitrine", "Promoções", "Localização"],
  },
  {
    id: "servicos",
    title: "Consultoria & Serviços",
    niche: "Prestador de serviço",
    description:
      "Estrutura institucional com serviços, diferenciais, depoimentos e pedido de orçamento rápido.",
    image: "/portfolio/prestador-servico.webp",
    status: "conceito",
    tags: ["Institucional", "Orçamento", "Depoimentos"],
  },
];

export type SystemProject = {
  name: string;
  type: string;
  description: string;
  tech: string[];
  /** Coloque o link público quando tiver (deploy ou GitHub). */
  href?: string;
};

export const systems: SystemProject[] = [
  {
    name: "GranaSimples",
    type: "Sistema de finanças pessoais",
    description:
      "Login, dashboard, transações, categorias, metas, gastos fixos e gráficos com insights financeiros.",
    tech: ["Python", "Flask", "PostgreSQL", "Supabase", "Chart.js"],
  },
  {
    name: "Site de Casamento",
    type: "Site para evento",
    description:
      "Confirmação de presença, lista de presentes com PIX, galeria, fotos dos convidados e painel admin.",
    tech: ["Supabase", "RSVP", "Upload", "JavaScript"],
  },
  {
    name: "Smykker RR",
    type: "Marca e presença digital",
    description:
      "Identidade visual, catálogo, conteúdo para Instagram e estratégia digital para loja de perfumes e beleza.",
    tech: ["Branding", "Catálogo", "Instagram"],
  },
];
