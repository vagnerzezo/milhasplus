import type { FaqItem, Step } from "@/content/landing";
import { leadCopy, type LeadFormCopy } from "@/content/lead";
import type { Cta, Reason } from "@/content/site";

export type SaleFormContent = LeadFormCopy & {
  fields: {
    programsLegend: string;
    programsHint: string;
    amount: string;
    amountPlaceholder: string;
    amountSuffix: string;
    amountHint: string;
    amountError: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailOptional: string;
    emailPlaceholder: string;
  };
  programs: string[];
};

export const negociar = {
  metadata: {
    title: "Venda suas milhas com pagamento via Pix",
    description:
      "Negocie suas milhas com segurança: valor fechado antes da transferência, atendimento humano e pagamento via Pix.",
  },

  hero: {
    breadcrumb: [
      { label: "Início", href: "/" },
      { label: "Serviços", href: "/#servicos" },
      { label: "Vender milhas" },
    ],
    // [VALIDAR] O site atual promete "até 24 horas".
    badge: { tag: "PIX", text: "Pagamento no mesmo dia da negociação" },
    title: { line1: "Venda suas milhas", line2: "e receba rápido." },
    text: "Preencha o formulário e envie pelo WhatsApp. Um dos nossos atendentes responde o mais rápido possível, com a cotação das suas milhas.",
    benefits: [
      "Valor fechado antes de você transferir",
      "Sem cadastro complicado",
      "Acompanhamento até o pagamento",
    ],
    image: {
      src: "/images/venda-milhas.webp",
      alt: "Mãos trocando notas de dinheiro",
    },
  },

  form: {
    title: "Cotar minhas milhas",
    subtitle:
      "Leva cerca de 1 minuto. Ao enviar, abrimos o WhatsApp com seus dados preenchidos. Campos com * são obrigatórios.",
    fields: {
      programsLegend: "Programa de fidelidade *",
      // [PLACEHOLDER] Livelo e Esfera vêm do site atual; confirmar a lista.
      programsHint: "[Confirmar a lista de programas comprados.]",
      amount: "Quantidade de milhas *",
      amountPlaceholder: "Ex.: 100.000",
      amountSuffix: "MILHAS",
      amountHint: "Pode ser aproximado. Confirmamos o saldo no atendimento.",
      amountError: "Informe a quantidade de milhas, como em 100.000.",
      name: "Nome completo *",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      emailOptional: "(opcional)",
      emailPlaceholder: "voce@email.com",
    },
    programs: ["LATAM Pass", "Smiles", "TudoAzul", "Livelo", "Esfera", "Outro"],
    whatsapp: leadCopy.whatsapp,
    consent: {
      ...leadCopy.consent,
      before:
        "Autorizo o contato da Milhas Plus pelos dados informados (WhatsApp e e-mail) para a negociação de milhas, de acordo com a ",
    },
    submit: "Cotar minhas milhas",
    directContact: leadCopy.directContact,
    sent: {
      ...leadCopy.sent,
      text: "Abrimos o WhatsApp com os dados das suas milhas já preenchidos. Envie a mensagem para a nossa equipe receber o pedido e responder com a cotação.",
    },
  } satisfies SaleFormContent,

  steps: {
    eyebrow: "01 — COMO FUNCIONA",
    title: { line1: "Do saldo parado ao Pix", line2: "em quatro passos." },
    text: "Você vê o valor exato que vai receber antes de qualquer transferência de pontos.",
    items: [
      {
        n: "01",
        title: "Peça sua cotação",
        // [VALIDAR] Tempo de "menos de um minuto".
        text: "Informe o programa e quantas milhas você tem. Leva menos de um minuto.",
      },
      {
        n: "02",
        title: "Receba a proposta",
        text: "Você vê o valor exato que vai receber, antes de qualquer transferência.",
      },
      {
        n: "03",
        title: "Confirme a negociação",
        text: "Nosso time orienta cada etapa no programa de fidelidade.",
      },
      {
        n: "04",
        title: "Receba via Pix",
        // [VALIDAR] O site atual promete "até 24 horas".
        text: "Pagamento via Pix no mesmo dia da negociação.",
      },
    ] satisfies Step[],
  },

  reasons: {
    eyebrow: "02 — POR QUE VENDER COM A GENTE",
    title: {
      line1: "Milhas paradas perdem valor.",
      line2: "As suas viram dinheiro.",
    },
    text: "Vender para desconhecidos é arriscado. Aqui você negocia com uma empresa registrada, com equipe e processo.",
    items: [
      {
        icon: "dollar",
        title: "Dinheiro na conta, rápido",
        // [VALIDAR] O site atual promete "até 24 horas".
        text: "Fechou a venda, recebe via Pix no mesmo dia da negociação.",
        tone: "sun",
      },
      {
        icon: "eye",
        title: "Cotação sem letra miúda",
        text: "O valor combinado antes da transferência é o valor que você recebe.",
        tone: "ink",
      },
      {
        icon: "message",
        title: "Gente de verdade",
        text: "Um atendente acompanha você do primeiro contato até o pagamento.",
        tone: "white",
      },
    ] satisfies Reason[],
    // [VALIDAR] Confirmar cadastro vigente no Cadastur.
    legal: "CNPJ 38.857.636/0001-73 · Cadastrada no Cadastur",
  },

  faq: {
    eyebrow: "03 — DÚVIDAS",
    title: "Dúvidas antes de negociar suas milhas?",
    text: "Não encontrou o que procurava? Nosso time responde no WhatsApp.",
    intent: "duvida-venda",
    cta: "negociar-faq-duvida",
    items: [
      {
        question: "Quanto tempo demora para cair o pagamento?",
        answer:
          "O pagamento é feito via Pix no mesmo dia da negociação. [Confirmar: o Sobre nós atual fala em “até 24 horas”.]",
      },
      {
        question: "Vocês vão utilizar todas as milhas da conta?",
        answer:
          "[Resposta a confirmar com a operação: se é usada apenas a quantidade negociada e como o restante do saldo fica na conta.]",
      },
      {
        question: "Tem algum risco de perder minha conta?",
        answer:
          "[Validar com o jurídico] Explicar como a negociação segue as regras dos programas de fidelidade e quais cuidados a equipe orienta.",
      },
      {
        question: "Quanto vale o meu milheiro?",
        answer:
          "Depende do programa e do volume. O valor é informado antes de qualquer transferência e não muda depois.",
      },
      {
        question: "Quais programas vocês compram?",
        answer:
          "LATAM Pass, Smiles, TudoAzul e outros. [Confirmar lista completa.]",
      },
    ] satisfies FaqItem[],
  },

  finalCta: {
    eyebrow: "VAI VIAJAR?",
    title: { line2: "Também emitimos", highlight: "a sua passagem." },
    text: "Passagens nacionais e internacionais com milhas, emitidas no seu nome, direto pela companhia aérea.",
    primary: {
      label: "Cotar uma passagem",
      intent: "passagem",
      cta: "negociar-passagem",
      href: "/comprar-milhas",
    } satisfies Cta,
  },
} as const;
