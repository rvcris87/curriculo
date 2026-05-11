export type Niche = {
  title: string;
  desc: string;
  image: string;
  imagePosition: string;
  tags: string[];
  feedback: string;
  author: string;
};

export const niches: Niche[] = [
  {
    title: "Academias",
    desc: "Página com modalidades, horários, professores e captação direta para matrícula.",
    image: "/portfolio/academia.webp",
    imagePosition: "center",
    tags: ["WhatsApp", "Serviços", "Conversão"],
    feedback: "“Em poucas semanas começamos a receber matrículas direto pelo site.”",
    author: "Exemplo ilustrativo — academia local",
  },
  {
    title: "Barbearias",
    desc: "Catálogo de cortes, preços e botão direto para agendamento via WhatsApp.",
    image: "/portfolio/barbearia.webp",
    imagePosition: "center",
    tags: ["WhatsApp", "Serviços", "Localização"],
    feedback: "“Os clientes agora agendam sozinhos. Reduziu muito a fila no telefone.”",
    author: "Exemplo ilustrativo — barbearia",
  },
  {
    title: "Clínicas e estética",
    desc: "Apresentação de procedimentos, equipe e dúvidas frequentes com agendamento.",
    image: "/portfolio/clinica-estetica.webp",
    imagePosition: "center",
    tags: ["Serviços", "Depoimentos", "WhatsApp"],
    feedback: "“O site passou exatamente a confiança que eu queria transmitir.”",
    author: "Exemplo ilustrativo — clínica de estética",
  },
  {
    title: "Lojas físicas",
    desc: "Vitrine digital com produtos, promoções e direcionamento para a loja.",
    image: "/portfolio/loja-fisica.webp",
    imagePosition: "center",
    tags: ["Conversão", "Localização", "WhatsApp"],
    feedback: "“As pessoas chegam na loja já sabendo o que querem comprar.”",
    author: "Exemplo ilustrativo — loja física",
  },
  {
    title: "Restaurantes e cafeterias",
    desc: "Cardápio digital, fotos, reservas e link direto para delivery.",
    image: "/portfolio/restaurante-cafeteria.webp",
    imagePosition: "center",
    tags: ["Cardápio", "Localização", "Conversão"],
    feedback: "“Aumentou as reservas de fim de semana sem precisar pagar anúncio.”",
    author: "Exemplo ilustrativo — restaurante",
  },
  {
    title: "Prestadores de serviço",
    desc: "Página profissional para apresentar serviços, autoridade e gerar orçamentos.",
    image: "/portfolio/prestador-servico.webp",
    imagePosition: "center",
    tags: ["Serviços", "Depoimentos", "WhatsApp"],
    feedback: "“Finalmente tenho um site para enviar antes de fechar contrato.”",
    author: "Exemplo ilustrativo — prestador de serviço",
  },
];
