import { TELEGRAM_URL } from "@/lib/whatsapp";
import type { Cta } from "@/content/site";

export type AgencyBenefitIcon = "tag" | "zap" | "eye" | "trending";

export const agencias = {
  metadata: {
    title: "Emissão de passagens para agências de viagem",
    description:
      "Condições exclusivas e atendimento prioritário para agências de viagem: envie sua demanda pelo WhatsApp ou Telegram e emita com a Milhas Plus.",
  },

  hero: {
    breadcrumb: [{ label: "Início", href: "/" }, { label: "Agências" }],
    eyebrow: "PARA AGÊNCIAS DE VIAGEM",
    title: { line1: "Emita para seus clientes", line2: "com a Milhas Plus." },
    text: "Condições exclusivas e vantagens personalizadas para agências de viagem que querem ampliar seus resultados com o mercado de milhas.",
    primary: {
      label: "Enviar demanda no WhatsApp",
      intent: "emissao-agencia",
      cta: "agencias-hero-whatsapp",
    } satisfies Cta,
    telegram: {
      label: "Telegram",
      href: TELEGRAM_URL,
      cta: "agencias-hero-telegram",
    },
    signup: {
      text: "Ainda não é parceira?",
      label: "Cadastre sua agência",
      href: "/parceiros",
      cta: "agencias-hero-cadastro",
    },
    image: {
      src: "/images/agencias.webp",
      alt: "Mesa de agente de viagens com notebook, câmera, globo e avião em miniatura",
    },
    stat: { value: "+3 mil", label: "agências parceiras" },
  },

  benefits: {
    label: "Vantagens para agências",
    items: [
      {
        icon: "tag",
        title: "Condições especiais",
        text: "Taxas competitivas e benefícios exclusivos para agências cadastradas.",
      },
      {
        icon: "zap",
        title: "Atendimento prioritário",
        text: "Equipe dedicada para resolver suas demandas com agilidade e eficiência.",
      },
      {
        icon: "eye",
        title: "Transparência total",
        text: "Cotações claras e pagamento rápido, sem surpresas.",
      },
      {
        icon: "trending",
        title: "Oportunidades lucrativas",
        text: "Acesso às melhores negociações do mercado para sua agência e seus clientes.",
      },
    ] satisfies { icon: AgencyBenefitIcon; title: string; text: string }[],
  },

  steps: {
    eyebrow: "01 — COMO EMITIR",
    title: {
      line1: "Emitir com a Milhas Plus é mais",
      line2: "rápido do que você imagina.",
    },
    text: "Três passos, direto pelo WhatsApp ou Telegram, com atendimento prioritário para agências.",
    send: {
      tag: "PASSO 1",
      title: "Envie sua demanda",
      text: "Chame nossa equipe no WhatsApp ou no Telegram para iniciar a cotação com atendimento prioritário.",
      whatsapp: {
        label: "WhatsApp",
        intent: "emissao-agencia",
        cta: "agencias-passo-whatsapp",
      } satisfies Cta,
      telegram: {
        label: "Telegram",
        href: TELEGRAM_URL,
        cta: "agencias-passo-telegram",
      },
    },
    share: {
      tag: "PASSO 2",
      title: "Compartilhe o trecho",
      text: "Envie o print do trecho e os dados dos passageiros para analisarmos a melhor emissão.",
      // Ilustração da conversa, escondida de leitores de tela.
      chat: {
        legs: [
          ["POA", "GRU"],
          ["GRU", "POA"],
        ],
        caption: "print do trecho",
        passengers: "+ dados dos 2 passageiros",
        reply: "Recebido! Já estamos cotando.",
      },
    },
    finish: {
      tag: "PASSO 3",
      title: "Finalize com agilidade",
      text: "Aprovada a cotação, concluímos a emissão com rapidez para você atender seu cliente sem espera.",
      // Ilustração do resultado, escondida de leitores de tela.
      done: {
        title: "Emissão concluída",
        text: "Localizador enviado para a agência",
      },
    },
  },

  emission: {
    eyebrow: "02 — DADOS PARA A EMISSÃO",
    title: { line1: "O que enviar de cada passageiro." },
    text: "Copie a lista e repasse ao seu cliente. Com tudo completo, a emissão sai mais rápido.",
    copy: {
      idle: "Copiar lista",
      copied: "Lista copiada ✓",
      failed: "Não foi possível copiar",
      prefix: "Dados para emissão",
    },
    domestic: {
      title: "Voo nacional",
      items: [
        "Nome completo",
        "CPF ou RG",
        "Data de nascimento",
        "E-mail",
        "Telefone",
      ],
    },
    international: {
      title: "Voo internacional",
      items: [
        "Nome completo (igual ao passaporte)",
        "Número do passaporte",
        "Validade do passaporte",
        "Data de nascimento",
        "E-mail",
        "Telefone",
      ],
    },
  },

  payment: {
    eyebrow: "03 — PAGAMENTO",
    title: "Como é feito o pagamento?",
    pix: {
      tag: "PIX",
      title: "Pix logo após cada emissão",
      text: "O pagamento deve ser feito por Pix logo após o recebimento de cada emissão. Nossa equipe sempre envia os dados para pagamento, com o valor final e a chave Pix.",
    },
    warning: {
      title: "Atenção aos prazos:",
      // [PLACEHOLDER] Prazo de pagamento em horas.
      text: "o não pagamento ou atraso pode levar ao cancelamento do bilhete. [Informar o prazo em horas, se houver.]",
    },
  },

  finalCta: {
    eyebrow: "PRONTO PARA EMITIR?",
    title: {
      line1: "Mande a próxima demanda",
      line2: "",
      highlight: "para a gente.",
    },
    text: "Ainda não é parceira? Cadastre sua agência e fale com o nosso time.",
    primary: {
      label: "Enviar demanda",
      intent: "emissao-agencia",
      cta: "agencias-final-whatsapp",
    } satisfies Cta,
    secondary: {
      label: "Cadastrar minha agência",
      intent: "parceria",
      cta: "agencias-final-cadastro",
      href: "/parceiros",
    } satisfies Cta,
  },
} as const;
