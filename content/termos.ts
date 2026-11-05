import type { LegalDocumentContent } from "@/components/legal/LegalDocument";

// Texto jurídico: o artifact é a fonte. Alterar só depois de validar com o jurídico.
export const termos = {
  metadata: {
    title: "Termos e condições",
    description:
      "Consulte os termos e condições dos serviços de negociação e intermediação de milhas e do resgate de produtos da Milhas Plus.",
  },

  document: {
    breadcrumb: [
      { label: "Início", href: "/" },
      { label: "Termos e condições" },
    ],
    eyebrow: "DOCUMENTO LEGAL",
    title: "Termos e condições",
    text: "Regras que valem para a compra e a venda de milhas e para o resgate de produtos com a Milhas Plus.",
    // [PLACEHOLDER] Data de vigência a informar pelo jurídico.
    updated: "ÚLTIMA ATUALIZAÇÃO: [DD/MM/AAAA]",
    print: "Imprimir ou salvar em PDF",
    indexLabel: "Índice",
    indexTitle: "NESTA PÁGINA",
    sectionLabel: "Cláusulas",
    related: [
      { label: "Política de privacidade", href: "/politica-de-privacidade" },
      { label: "Perguntas frequentes", href: "/perguntas-frequentes" },
    ],
    sections: [
      {
        id: "definicoes",
        title: "Definições",
        clauses: [
          {
            term: "Milhas PLUS:",
            text: "Plataforma de negociação (intermediação e negociação) de milhas aéreas e pontos de programas de fidelidade.",
          },
          {
            term: "Produtos:",
            text: "Passagens aéreas, pacotes de viagem, hospedagens, aluguel de carros e outros serviços disponíveis para resgate com milhas.",
          },
        ],
      },
      {
        id: "transacoes",
        title: "Transações",
        clauses: [
          {
            term: "Compra de Milhas:",
            text: "O cliente adquire milhas para resgate de produtos, conforme disponibilidade e tabela de preços vigente.",
          },
          {
            term: "Venda de Milhas:",
            text: "A Milhas PLUS atua como intermediária na comercialização de milhas de clientes, seguindo regras específicas (ex.: taxas e prazo de liquidação).",
          },
        ],
      },
      {
        id: "responsabilidades",
        title: "Responsabilidades",
        clauses: [
          {
            text: "A Milhas PLUS não é responsável por alterações em políticas de programas de fidelidade (ex.: mudanças nas cotações pelas companhias aéreas).",
          },
          {
            text: "O resgate de produtos está sujeito à disponibilidade dos parceiros (companhias aéreas, redes hoteleiras, etc.).",
          },
        ],
      },
      {
        id: "cancelamentos",
        title: "Cancelamentos e reembolsos",
        clauses: [
          {
            text: "Transações de compra/venda são irreversíveis, exceto em casos de falha técnica comprovada.",
          },
          {
            text: "Produtos resgatados com milhas seguem as políticas de cancelamento dos fornecedores (multas podem aplicar).",
          },
        ],
      },
      {
        id: "disputas",
        title: "Disputas",
        clauses: [
          {
            text: "Contatar o SAC em até 48 horas após a transação para solicitar revisão.",
          },
        ],
        cta: {
          label: "Falar com o atendimento",
          href: "/contato",
          cta: "termos-disputas-contato",
        },
      },
    ],
    closing: {
      before:
        "Milhas Plus — CNPJ 38.857.636/0001-73. Em caso de dúvidas sobre estes termos, fale com o nosso ",
      link: "atendimento",
      href: "/contato",
      after: ".",
    },
  } satisfies LegalDocumentContent,
} as const;
