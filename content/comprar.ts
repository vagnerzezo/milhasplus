import type { FaqItem, Step } from "@/content/landing";
import { leadCopy, type LeadFormCopy } from "@/content/lead";
import type { Cta } from "@/content/site";
import type { TripType } from "@/lib/quote";

export type PassengerKey = "adults" | "children" | "infants";

export type QuoteFormContent = LeadFormCopy & {
  tripLabel: string;
  trips: { id: TripType; label: string }[];
  routeLegend: string;
  fields: {
    origin: string;
    destination: string;
    airportPlaceholder: string;
    departure: string;
    returnDate: string;
    name: string;
    namePlaceholder: string;
    notes: string;
    notesOptional: string;
    notesPlaceholder: string;
  };
  passengers: {
    legend: string;
    groups: {
      key: PassengerKey;
      label: string;
      hint: string;
      noun: string;
      min: number;
    }[];
  };
  /** Sugestões do campo de aeroporto; o cliente também pode digitar livremente. */
  airports: string[];
};

export const comprar = {
  metadata: {
    title: "Cotar passagem com milhas",
    description:
      "Peça a cotação da sua passagem com milhas pelo WhatsApp. Emissão no seu nome, direto pela companhia aérea, com atendimento humano.",
  },

  hero: {
    breadcrumb: [
      { label: "Início", href: "/" },
      { label: "Serviços", href: "/#servicos" },
      { label: "Comprar passagem" },
    ],
    eyebrow: "PASSAGENS COM MILHAS",
    title: { line1: "Encontre passagens", line2: "nos melhores preços!" },
    // Não há backend: o pedido só chega à equipe quando o cliente envia a mensagem.
    text: "Preencha o formulário e envie pelo WhatsApp. Um dos nossos atendentes responde o mais rápido possível, com a cotação para a sua viagem.",
    benefits: [
      "Passagem emitida no seu nome, direto pela companhia",
      "Comparamos os programas e trazemos a melhor opção",
      "Cotação sem compromisso, com atendimento humano",
    ],
    image: {
      src: "/images/mala-3d.webp",
      alt: "Mala amarela com uma janela de avião que mostra o mar",
    },
  },

  form: {
    title: "Cotar minha passagem",
    subtitle:
      "Leva cerca de 1 minuto. Ao enviar, abrimos o WhatsApp com seus dados preenchidos. Campos com * são obrigatórios.",
    tripLabel: "Tipo de viagem",
    trips: [
      { id: "ida-e-volta", label: "Ida e volta" },
      { id: "somente-ida", label: "Somente ida" },
    ],
    routeLegend: "Trecho",
    fields: {
      origin: "Origem *",
      destination: "Destino *",
      airportPlaceholder: "Cidade ou aeroporto",
      departure: "Data de ida *",
      returnDate: "Data de volta *",
      name: "Seu nome *",
      namePlaceholder: "Como podemos te chamar?",
      notes: "Observações",
      notesOptional: "(opcional)",
      notesPlaceholder:
        "Ex.: datas flexíveis, preferência de companhia, bagagem despachada…",
    },
    passengers: {
      legend: "Passageiros *",
      groups: [
        {
          key: "adults",
          label: "Adultos",
          hint: "12 anos ou mais",
          noun: "adulto",
          min: 1,
        },
        {
          key: "children",
          label: "Crianças",
          hint: "2 a 11 anos",
          noun: "criança",
          min: 0,
        },
        {
          key: "infants",
          label: "Bebês",
          hint: "Menos de 2 anos",
          noun: "bebê",
          min: 0,
        },
      ],
    },
    whatsapp: {
      ...leadCopy.whatsapp,
      hint: "É por aqui que enviamos a cotação.",
    },
    consent: {
      ...leadCopy.consent,
      before:
        "Autorizo o contato da Milhas Plus pelo WhatsApp informado para a cotação da passagem, de acordo com a ",
    },
    submit: "Cotar agora",
    directContact: leadCopy.directContact,
    sent: {
      ...leadCopy.sent,
      text: "Abrimos o WhatsApp com os dados da sua viagem já preenchidos. Envie a mensagem para a nossa equipe receber o pedido e responder com a cotação.",
    },
    airports: [
      "São Paulo/Guarulhos, GRU - Brasil (SP)",
      "Rio de Janeiro/Galeão, GIG - Brasil (RJ)",
      "Brasília, BSB - Brasil (DF)",
      "Belo Horizonte/Confins, CNF - Brasil (MG)",
      "Salvador, SSA - Brasil (BA)",
      "Recife, REC - Brasil (PE)",
      "Fortaleza, FOR - Brasil (CE)",
      "Manaus, MAO - Brasil (AM)",
      "Porto Alegre, POA - Brasil (RS)",
      "Curitiba, CWB - Brasil (PR)",
      "Florianópolis, FLN - Brasil (SC)",
      "Goiânia, GYN - Brasil (GO)",
      "Campo Grande, CGR - Brasil (MS)",
      "Cuiabá, CGB - Brasil (MT)",
      "São Luís, SLZ - Brasil (MA)",
      "Teresina, THE - Brasil (PI)",
      "Natal, NAT - Brasil (RN)",
      "João Pessoa, JPA - Brasil (PB)",
      "Maceió, MCZ - Brasil (AL)",
      "Aracaju, AJU - Brasil (SE)",
      "Vitória, VIX - Brasil (ES)",
      "Palmas, PMW - Brasil (TO)",
      "Porto Velho, PVH - Brasil (RO)",
      "Rio Branco, RBR - Brasil (AC)",
      "Macapá, MCP - Brasil (AP)",
      "Boa Vista, BVB - Brasil (RR)",
      "Foz do Iguaçu, IGU - Brasil (PR)",
      "Miami, MIA - Estados Unidos",
      "Orlando, MCO - Estados Unidos",
      "Nova York/JFK, JFK - Estados Unidos",
      "Lisboa, LIS - Portugal",
      "Madrid, MAD - Espanha",
      "Paris/Charles de Gaulle, CDG - França",
      "Londres/Heathrow, LHR - Reino Unido",
      "Buenos Aires/Ezeiza, EZE - Argentina",
      "Santiago, SCL - Chile",
      "Lima, LIM - Peru",
      "Bogotá, BOG - Colômbia",
      "Cidade do México, MEX - México",
      "Toronto, YYZ - Canadá",
      "Dubai, DXB - Emirados Árabes",
      "Doha, DOH - Catar",
      "Istambul, IST - Turquia",
    ],
  } satisfies QuoteFormContent,

  steps: {
    eyebrow: "01 — COMO FUNCIONA",
    title: { line1: "Do formulário ao embarque", line2: "em quatro passos." },
    text: "Você só aprova o valor depois de ver a cotação. Até lá, nenhum compromisso.",
    items: [
      {
        n: "01",
        title: "Envie seu trecho",
        text: "Origem, destino, datas e número de passageiros pelo formulário.",
      },
      {
        n: "02",
        title: "Receba a cotação",
        text: "Comparamos programas e te mostramos a melhor opção em milhas.",
      },
      {
        n: "03",
        title: "Aprove e pague",
        text: "Você aprova o valor e paga pelos canais oficiais da empresa.",
      },
      {
        n: "04",
        title: "Embarque",
        text: "A passagem é emitida no seu nome, direto pela companhia aérea.",
      },
    ] satisfies Step[],
  },

  options: {
    eyebrow: "02 — FORMAS DE EMITIR",
    title: "Com milhas da Milhas Plus ou com as suas.",
    items: [
      {
        eyebrow: "PASSAGEM EM MILHAS",
        title: "Você não precisa ter milhas",
        text: "Emitimos a passagem com milhas e você paga em reais. A passagem sai no seu nome, direto pela companhia aérea.",
        tone: "ink",
      },
      {
        eyebrow: "PASSAGEM COM NEGOCIAÇÃO",
        title: "Use parte das suas milhas",
        text: "Tem saldo, mas não o suficiente? Use parte das suas milhas como pagamento e complemente a diferença. Informe o programa e o saldo nas observações.",
        tone: "sun",
      },
    ] as {
      eyebrow: string;
      title: string;
      text: string;
      tone: "ink" | "sun";
    }[],
  },

  faq: {
    eyebrow: "03 — DÚVIDAS ANTES DE VIAJAR",
    title: "Dúvidas antes de viajar?",
    text: "Não encontrou o que procurava? Nosso time responde no WhatsApp.",
    intent: "duvida-passagem",
    cta: "comprar-faq-duvida",
    items: [
      {
        question: "Eu recebo a passagem na hora?",
        answer:
          "Depois da aprovação e do pagamento, a passagem é emitida e a confirmação vem direto da companhia aérea. [Confirmar prazo praticado.]",
      },
      {
        question: "Essa passagem é oficial da companhia?",
        answer:
          "Sim. A passagem é emitida no seu nome, diretamente no sistema da companhia aérea, e pode ser consultada no site ou app dela com o localizador.",
      },
      {
        question: "Como funciona a bagagem?",
        answer:
          "[Explicar a regra de bagagem: segue a tarifa emitida pelo programa; informar como incluir bagagem despachada.]",
      },
      {
        question: "Preciso ter milhas para comprar?",
        answer:
          "Não. Emitimos com milhas e você paga em reais. Se tiver saldo, também dá para usar parte das suas milhas na passagem com negociação.",
      },
      {
        question: "Posso remarcar ou cancelar?",
        answer:
          "[Explicar a política de remarcação e cancelamento conforme a regra do programa usado na emissão.]",
      },
    ] satisfies FaqItem[],
  },

  finalCta: {
    eyebrow: "TEM MILHAS PARADAS?",
    title: { line2: "Você também pode", highlight: "vender as suas." },
    text: "Cotação transparente e pagamento via Pix no mesmo dia da negociação.",
    primary: {
      label: "Cotar minhas milhas",
      intent: "vender",
      cta: "comprar-vender",
      href: "/negociar-milhas",
    } satisfies Cta,
  },
} as const;
