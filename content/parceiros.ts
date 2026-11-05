import type { FaqItem, Step } from "@/content/landing";
import { leadCopy, type LeadFormCopy } from "@/content/lead";
import type { Cta, Reason } from "@/content/site";

export type PartnerFormContent = LeadFormCopy & {
  fields: {
    profileLegend: string;
    name: string;
    namePlaceholder: string;
    document: string;
    documentPlaceholder: string;
    documentError: string;
    email: string;
    emailPlaceholder: string;
    instagram: string;
    instagramOptional: string;
    instagramPlaceholder: string;
    instagramError: string;
    address: string;
    addressPlaceholder: string;
  };
  profiles: string[];
};

export const parceiros = {
  metadata: {
    title: "Parcerias para agências e agentes de viagens",
    description:
      "Agências de viagens e agentes: emita passagens com condições especiais e suporte dedicado da Milhas Plus, da seleção do voo ao pós-venda.",
  },

  hero: {
    breadcrumb: [{ label: "Início", href: "/" }, { label: "Seja parceiro" }],
    eyebrow: "B2B · PARCERIAS",
    title: { line1: "Seja parceiro", line2: "da Milhas Plus." },
    text: "Conectamos você às melhores oportunidades do mercado de milhas, com condições especiais e suporte dedicado para oferecer mais aos seus clientes.",
    stat: {
      value: "+3 mil",
      label: "agências parceiras já emitem com a Milhas Plus",
    },
    image: {
      src: "/images/parceiros.webp",
      alt: "Aperto de mãos em reunião de negócios",
    },
  },

  form: {
    title: "Quero ser parceiro",
    subtitle:
      "Ao enviar, abrimos o WhatsApp com seus dados preenchidos para a nossa equipe de parcerias. Campos com * são obrigatórios.",
    fields: {
      profileLegend: "Você é *",
      name: "Nome completo *",
      namePlaceholder: "Seu nome",
      document: "CPF ou CNPJ *",
      documentPlaceholder: "000.000.000-00",
      documentError: "Informe o CPF ou o CNPJ completo.",
      email: "E-mail *",
      emailPlaceholder: "voce@agencia.com",
      instagram: "Instagram",
      instagramOptional: "(opcional)",
      instagramPlaceholder: "suaagencia",
      instagramError: "Informe só o nome do perfil, como suaagencia.",
      address: "Endereço completo *",
      addressPlaceholder: "Rua, número, cidade/UF e CEP",
    },
    profiles: ["Agência de viagens", "Agente autônomo", "Outro negócio"],
    whatsapp: leadCopy.whatsapp,
    consent: {
      ...leadCopy.consent,
      before:
        "Autorizo o contato da Milhas Plus pelos dados informados para tratar da parceria, de acordo com a ",
    },
    submit: "Enviar dados",
    directContact: leadCopy.directContact,
    sent: {
      ...leadCopy.sent,
      text: "Abrimos o WhatsApp com os seus dados já preenchidos. Envie a mensagem para a nossa equipe de parcerias receber o cadastro e conversar sobre as condições.",
      restart: "Preencher outro cadastro",
    },
  } satisfies PartnerFormContent,

  reasons: {
    eyebrow: "01 — POR QUE SE TORNAR PARCEIRO",
    title: {
      line1: "Mais opções para seus clientes.",
      line2: "Mais suporte para o seu negócio.",
    },
    text: "Trabalhamos em estreita colaboração com diversas companhias aéreas e programas de milhagem para ampliar o que você pode oferecer.",
    items: [
      {
        icon: "tag",
        title: "Condições especiais",
        text: "Benefícios exclusivos para impulsionar o seu negócio, com tarifas atrativas para seus clientes.",
        tone: "sun",
      },
      {
        icon: "plane",
        title: "Mais opções de voos",
        text: "Colaboração com diversas companhias aéreas e programas de milhagem, com preços competitivos.",
        tone: "ink",
      },
      {
        icon: "message",
        title: "Suporte de ponta a ponta",
        text: "Equipe dedicada em todas as etapas, da seleção das melhores opções de voo ao pós-venda.",
        tone: "white",
      },
      {
        icon: "expand",
        title: "Parceria sob medida",
        text: "Abertos a oportunidades de colaboração personalizadas para as necessidades do seu negócio.",
        tone: "mint",
      },
    ] satisfies Reason[],
  },

  steps: {
    eyebrow: "02 — COMO FUNCIONA",
    title: {
      line1: "Do cadastro à primeira",
      line2: "emissão para seu cliente.",
    },
    text: "Estamos abertos a discutir oportunidades de colaboração personalizadas para as necessidades do seu negócio.",
    items: [
      {
        n: "01",
        title: "Envie seus dados",
        text: "Preencha o formulário com os dados da sua agência ou do seu negócio.",
      },
      {
        n: "02",
        title: "Conversa com o time",
        text: "Nossa equipe de parcerias entra em contato para entender seu perfil.",
      },
      {
        n: "03",
        title: "Condições alinhadas",
        text: "Apresentamos as condições da parceria. [Detalhar o que é combinado nesta etapa.]",
      },
      {
        n: "04",
        title: "Comece a emitir",
        text: "Cote e emita passagens para seus clientes com o suporte da Milhas Plus.",
      },
    ] satisfies Step[],
  },

  faq: {
    eyebrow: "03 — DÚVIDAS",
    title: "Dúvidas sobre a parceria?",
    text: "Fale direto com o nosso time pelo WhatsApp.",
    intent: "duvida-parceria",
    cta: "parceiros-faq-duvida",
    items: [
      {
        question: "Quem pode ser parceiro?",
        answer:
          "Agências de viagens, agentes autônomos e outros negócios do turismo. [Confirmar critérios de aprovação.]",
      },
      {
        question: "Preciso ter CNPJ?",
        answer:
          "Não necessariamente: o cadastro aceita CPF ou CNPJ. [Confirmar se há diferença de condições.]",
      },
      {
        question: "Quais são as condições da parceria?",
        answer:
          "[Explicar as condições: tarifas, formas de pagamento, prazos e comissionamento, se houver.]",
      },
      {
        question: "Vocês dão suporte no pós-venda?",
        answer:
          "Sim. Nossa equipe acompanha todas as etapas, desde a seleção das melhores opções de voo até o atendimento pós-venda.",
      },
    ] satisfies FaqItem[],
  },

  finalCta: {
    eyebrow: "PARCERIA SÓLIDA",
    title: { line2: "Juntos, levamos", highlight: "seus clientes mais longe." },
    text: "Valorizamos parcerias duradouras, em que os dois lados crescem juntos.",
    primary: {
      label: "Falar com o time de parcerias",
      intent: "parceria",
      cta: "parceiros-final",
    } satisfies Cta,
  },
} as const;
