export type Niche = {
  name: string;
  niche: string;
  description: string;
  href: string;
  image: string;
  imagePosition: string;
  tags: string[];
};

export const niches: Niche[] = [
  {
    name: "Barbearia Premium",
    niche: "Barbearia",
    description:
      "Site premium para barbearia, com apresentacao dos servicos, agendamento online, depoimentos, FAQ, contato e visual sofisticado para atrair clientes.",
    href: "https://v0-site-barbeariapremiumprot.vercel.app",
    // Troque pelo screenshot real quando tiver a imagem: /portfolio/barbearia-premium.png
    image: "/portfolio/barbearia.webp",
    imagePosition: "center",
    tags: ["Landing Page", "Site Responsivo", "Design Profissional", "Conversao"],
  },
  {
    name: "Academia Fitness",
    niche: "Academia e negocios fitness",
    description:
      "Site/plataforma para academia, com foco em gestao de alunos, dashboard, agenda, relatorios, suporte e apresentacao profissional para negocios fitness.",
    href: "https://academia-protp.lovable.app",
    // Troque pelo screenshot real quando tiver a imagem: /portfolio/academia-fitness.png
    image: "/portfolio/academia.webp",
    imagePosition: "center",
    tags: ["Landing Page", "Site Responsivo", "Dashboard", "Conversao"],
  },
  {
    name: "Tavola Prime",
    niche: "Restaurante premium",
    description:
      "Site elegante para restaurante de alta gastronomia, com visual sofisticado, apresentacao da marca, experiencia premium e foco em conversao.",
    href: "https://trevolaprotop.lovable.app/",
    // Troque pelo screenshot real quando tiver a imagem: /portfolio/tavola-prime.png
    image: "/portfolio/restaurante-cafeteria.webp",
    imagePosition: "center",
    tags: ["Landing Page", "Site Responsivo", "Design Profissional", "Conversao"],
  },
];
