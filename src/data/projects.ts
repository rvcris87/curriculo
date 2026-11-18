/**
 * VITRINE DO PORTFÓLIO — cada projeto aparece embutido e navegável no portfólio.
 *
 * Para adicionar um site novo:
 *   1. crie a página em src/pages/demos/
 *   2. registre a rota em src/main.tsx
 *   3. adicione um item aqui com o mesmo caminho em `url`
 *
 * Também funciona com sites externos (url começando com https://), desde que o
 * site permita ser exibido dentro de outro (alguns bloqueiam).
 */

export type Project = {
  id: string;
  title: string;
  tipo: "Landing page" | "Site institucional" | "Sistema";
  nicho: string;
  description: string;
  destaques: string[];
  url: string;
};

export const projects: Project[] = [
  {
    id: "lumi",
    title: "Lumi Estética",
    tipo: "Landing page",
    nicho: "Beleza e estética",
    description:
      "Clínica de estética com visual editorial, tabela de tratamentos por categoria e agendamento de avaliação.",
    destaques: [
      "Tratamentos com filtro",
      "Preços “a partir de”",
      "Agendamento pelo WhatsApp",
    ],
    url: "/demos/lumi-estetica",
  },
  {
    id: "dom-barbearia",
    title: "Dom Barbearia",
    tipo: "Landing page",
    nicho: "Barbearia",
    description:
      "Barbearia com agendamento completo: o cliente escolhe serviço, barbeiro e horário livre, e confirma pelo WhatsApp.",
    destaques: [
      "Agenda por barbeiro",
      "Horários ocupados bloqueados",
      "Clube de assinatura",
    ],
    url: "/demos/dom-barbearia",
  },
  {
    id: "casa-miga",
    title: "Casa Miga",
    tipo: "Site institucional",
    nicho: "Alimentação",
    description:
      "Padaria artesanal com cardápio interativo: o cliente monta a sacola e envia o pedido pronto no WhatsApp.",
    destaques: [
      "Carrinho de encomendas",
      "Pedido automático no WhatsApp",
      "Horário das fornadas",
    ],
    url: "/demos/casa-miga",
  },
  {
    id: "pulso",
    title: "Pulso Academia",
    tipo: "Site institucional",
    nicho: "Academia e fitness",
    description:
      "Academia com planos mensal ou anual (o preço muda na hora), grade de aulas por dia e agendamento de aula grátis.",
    destaques: [
      "Planos mensal/anual",
      "Grade de aulas por dia",
      "Aula experimental",
    ],
    url: "/demos/pulso-academia",
  },
  {
    id: "odonto-mare",
    title: "Odonto Maré",
    tipo: "Site institucional",
    nicho: "Saúde",
    description:
      "Clínica odontológica com agendamento em 3 cliques, tratamentos, convênios, equipe e dúvidas frequentes.",
    destaques: [
      "Escolha de dia e horário",
      "Convênios e equipe",
      "Perguntas frequentes",
    ],
    url: "/demos/odonto-mare",
  },
  {
    id: "caixa-certo",
    title: "Caixa Certo",
    tipo: "Sistema",
    nicho: "Gestão para pequenos negócios",
    description:
      "Painel com login, faturamento, gráfico interativo, vendas com filtro, agenda do dia e cadastro de clientes.",
    destaques: [
      "Login e painel",
      "Gráfico interativo",
      "Vendas, agenda e clientes",
    ],
    url: "/demos/caixa-certo",
  },
];
