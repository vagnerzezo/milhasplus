import { leadCopy, type LeadFormCopy } from "@/content/lead";
import {
  TELEGRAM_DISPLAY,
  TELEGRAM_URL,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from "@/lib/whatsapp";

export type ContactFormContent = Omit<LeadFormCopy, "directContact"> & {
  fields: {
    subjectLegend: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailOptional: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    messageHint: string;
    messageError: string;
  };
  subjects: string[];
  defaultSubject: string;
  /** Assuntos que têm uma página mais adequada que esta mensagem. */
  tips: Record<
    string,
    { text: string; link: string; href: string; cta: string }
  >;
};

export type ChannelIcon = "message" | "instagram" | "telegram" | "mail";

export const contato = {
  metadata: {
    title: "Contato",
    description:
      "Fale com a equipe da Milhas Plus pelo WhatsApp, Instagram, Telegram ou e-mail e tire suas dúvidas sobre milhas e passagens.",
  },

  hero: {
    breadcrumb: [{ label: "Início", href: "/" }, { label: "Contato" }],
    eyebrow: "CONTATO",
    title: { line1: "Fale com", line2: "a gente." },
    text: "Dúvidas ou mais informações sobre nossos serviços? Nossa equipe está pronta para responder e oferecer o suporte que você precisa.",
    image: {
      src: "/images/contato.webp",
      alt: "Mascote robô da Milhas Plus usando o celular",
    },
  },

  channels: [
    {
      icon: "message",
      label: "WhatsApp",
      value: WHATSAPP_DISPLAY,
      href: whatsappLink("geral"),
      cta: "contato-canal-whatsapp",
    },
    {
      icon: "instagram",
      label: "Instagram",
      value: "@milhasplusoficial",
      href: "https://www.instagram.com/milhasplusoficial/",
      cta: "contato-canal-instagram",
    },
    {
      icon: "telegram",
      label: "Telegram",
      value: TELEGRAM_DISPLAY,
      href: TELEGRAM_URL,
      cta: "contato-canal-telegram",
    },
    {
      icon: "mail",
      label: "E-mail",
      // [VALIDAR] Endereço do site atual.
      value: "contato@milhasplus.com.br",
      href: "mailto:contato@milhasplus.com.br",
      cta: "contato-canal-email",
    },
  ] satisfies {
    icon: ChannelIcon;
    label: string;
    value: string;
    href: string;
    cta: string;
  }[],

  form: {
    title: "Enviar mensagem",
    subtitle:
      "Ao enviar, abrimos o WhatsApp com a sua mensagem preenchida. Campos com * são obrigatórios.",
    fields: {
      subjectLegend: "Assunto *",
      name: "Nome completo *",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      emailOptional: "(opcional)",
      emailPlaceholder: "voce@email.com",
      message: "Mensagem *",
      messagePlaceholder: "Conte como podemos ajudar",
      messageHint: "Até 1.000 caracteres.",
      messageError: "Escreva a sua mensagem.",
    },
    subjects: [
      "Dúvida",
      "Vender milhas",
      "Comprar passagem",
      "Parceria",
      "Outro",
    ],
    defaultSubject: "Dúvida",
    tips: {
      "Vender milhas": {
        text: "Quer cotar suas milhas? A página de venda é mais rápida.",
        link: "Ir para Vender milhas →",
        href: "/negociar-milhas",
        cta: "contato-dica-vender",
      },
      "Comprar passagem": {
        text: "Quer uma passagem? A página de cotação já pede trecho, datas e passageiros.",
        link: "Ir para Comprar passagem →",
        href: "/comprar-milhas",
        cta: "contato-dica-passagem",
      },
      Parceria: {
        text: "Para parcerias, o cadastro tem os campos que o time precisa.",
        link: "Ir para Seja parceiro →",
        href: "/parceiros",
        cta: "contato-dica-parceria",
      },
    },
    whatsapp: leadCopy.whatsapp,
    consent: {
      ...leadCopy.consent,
      before:
        "Autorizo o contato da Milhas Plus pelos dados informados para responder a esta mensagem, de acordo com a ",
    },
    submit: "Enviar mensagem",
    sent: {
      ...leadCopy.sent,
      text: "Abrimos o WhatsApp com a sua mensagem já preenchida. Envie para a nossa equipe receber e responder.",
      restart: "Enviar outra mensagem",
    },
  } satisfies ContactFormContent,

  before: {
    eyebrow: "ANTES DE ENVIAR",
    title: "Sua dúvida pode já ter resposta.",
    all: {
      label: "Ver todas as perguntas frequentes →",
      href: "/perguntas-frequentes",
      cta: "contato-faq-todas",
    },
    items: [
      {
        label: "Quanto tempo leva para receber minha passagem?",
        href: "/perguntas-frequentes#prazo-passagem",
        cta: "contato-faq-prazo",
      },
      {
        label: "Quais programas de milhas vocês aceitam?",
        href: "/perguntas-frequentes#programas",
        cta: "contato-faq-programas",
      },
      {
        label: "O pagamento pela negociação de milhas é seguro?",
        href: "/perguntas-frequentes#pagamento-seguro",
        cta: "contato-faq-pagamento",
      },
      {
        label: "A Milhas Plus cobra taxas adicionais?",
        href: "/perguntas-frequentes#taxas",
        cta: "contato-faq-taxas",
      },
    ],
  },

  company: {
    eyebrow: "DADOS DA EMPRESA",
    title: "Milhas Plus",
    text: "Negociamos milhas e emitimos passagens com segurança, transparência e atendimento humano.",
    details: [
      { label: "CNPJ", value: "38.857.636/0001-73" },
      // [VALIDAR] Confirmar cadastro vigente no Cadastur.
      { label: "REGISTRO", value: "Cadastrada no Cadastur" },
      // [PLACEHOLDER] Horário e endereço não confirmados.
      { label: "ATENDIMENTO", value: "[Horário de atendimento — confirmar]" },
      { label: "ENDEREÇO", value: "[Endereço — confirmar se será exibido]" },
    ],
  },
} as const;
