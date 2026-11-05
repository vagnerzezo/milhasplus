import type { LegalDocumentContent } from "@/components/legal/LegalDocument";

// Texto jurídico: o artifact é a fonte. Alterar só depois de validar com o jurídico.
export const privacidade = {
  metadata: {
    title: "Política de privacidade",
    description:
      "Entenda quais dados a Milhas Plus coleta, para que usa, com quem compartilha e como exercer seus direitos.",
  },

  document: {
    breadcrumb: [
      { label: "Início", href: "/" },
      { label: "Política de privacidade" },
    ],
    eyebrow: "DOCUMENTO LEGAL",
    title: "Política de privacidade",
    text: "Quais dados a Milhas Plus coleta, para que usa, com quem compartilha e como você pode exercer seus direitos.",
    // [PLACEHOLDER] Data de vigência a informar pelo jurídico.
    updated: "ÚLTIMA ATUALIZAÇÃO: [DD/MM/AAAA]",
    print: "Imprimir ou salvar em PDF",
    indexLabel: "Índice",
    indexTitle: "NESTA PÁGINA",
    sectionLabel: "Cláusulas",
    related: [
      { label: "Termos e condições", href: "/termos-e-condicoes" },
      { label: "Contato", href: "/contato" },
    ],
    sections: [
      {
        id: "dados-coletados",
        title: "Dados coletados",
        clauses: [
          { term: "Cadastro:", text: "Nome, CPF, e-mail, telefone." },
          {
            term: "Transações:",
            text: "Histórico de compra/intermediação de milhas e resgates.",
          },
        ],
      },
      {
        id: "finalidade",
        title: "Finalidade",
        clauses: [
          { text: "Processar transações e emitir notas fiscais." },
          { text: "Prevenção à fraude e cumprimento de obrigações legais." },
        ],
      },
      {
        id: "compartilhamento",
        title: "Compartilhamento",
        clauses: [
          {
            term: "Dados são compartilhados apenas com:",
            list: [
              "Parceiros operacionais (ex.: companhias aéreas para emissão de passagens).",
              "Autoridades fiscais, quando exigido por lei.",
            ],
          },
        ],
      },
      {
        id: "direitos",
        title: "Direitos do usuário",
        clauses: [
          // [VALIDAR] O site não tem área do cliente.
          { text: "Acessar ou retificar dados via área do cliente." },
          {
            text: "Solicitar exclusão, exceto em casos de guarda obrigatória (ex.: registros fiscais).",
          },
        ],
        cta: {
          label: "Exercer meus direitos",
          href: "/contato",
          cta: "privacidade-direitos-contato",
        },
      },
    ],
    closing: {
      before:
        "Milhas Plus — CNPJ 38.857.636/0001-73. Em caso de dúvidas sobre esta política ou sobre seus dados, fale com o nosso ",
      link: "atendimento",
      href: "/contato",
      after: ".",
    },
  } satisfies LegalDocumentContent,
} as const;
