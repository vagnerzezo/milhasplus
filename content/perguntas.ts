import type { FaqItem } from "@/content/landing";
import { whatsappLink } from "@/lib/whatsapp";

export type FaqEntry = FaqItem & {
  /** Âncora para link direto, como /perguntas-frequentes#taxas. */
  id: string;
  link?: { label: string; href: string; cta: string };
};
export type FaqCategory = { id: string; label: string; items: FaqEntry[] };

export type FaqCenterCopy = {
  searchLabel: string;
  searchPlaceholder: string;
  filterLabel: string;
  allLabel: string;
  sectionLabel: string;
  resultOne: string;
  resultMany: string;
  empty: { title: string; text: string; link: string };
  help: { title: string; text: string; link: string };
};

const quoteTicket = {
  label: "Cotar uma passagem →",
  href: "/comprar-milhas",
};
const quoteMiles = {
  label: "Cotar minhas milhas →",
  href: "/negociar-milhas",
};

export const perguntas = {
  metadata: {
    title: "Perguntas frequentes",
    description:
      "Tire suas dúvidas sobre comprar passagens com milhas, vender milhas, pagamento e segurança na Milhas Plus.",
  },

  // Publicar o FAQPage só quando as respostas estiverem validadas, sem marcadores.
  validated: false,

  hero: {
    breadcrumb: [
      { label: "Início", href: "/" },
      { label: "Perguntas frequentes" },
    ],
    eyebrow: "CENTRAL DE DÚVIDAS",
    title: { line1: "Perguntas", line2: "frequentes." },
    text: "Tudo o que você precisa saber antes de comprar passagens ou vender suas milhas com a Milhas Plus.",
  },

  center: {
    searchLabel: "Buscar nas perguntas",
    searchPlaceholder: "Busque por pagamento, prazo…",
    filterLabel: "Filtrar por categoria",
    allLabel: "Todas",
    sectionLabel: "Perguntas por categoria",
    resultOne: "pergunta encontrada",
    resultMany: "perguntas encontradas",
    empty: {
      title: "Nenhuma pergunta encontrada.",
      text: "Tente outra palavra ou fale com a gente no WhatsApp.",
      link: "Falar no WhatsApp →",
    },
    help: {
      title: "Não encontrou sua dúvida?",
      text: "Nosso time responde no WhatsApp.",
      link: "(51) 99444-0744",
    },
  } satisfies FaqCenterCopy,

  categories: [
    {
      id: "sobre",
      label: "Sobre a Milhas Plus",
      items: [
        {
          id: "o-que-e",
          question: "O que é a Milhas Plus?",
          // [VALIDAR] Confirmar cadastro vigente no Cadastur.
          answer:
            "A Milhas Plus é uma empresa especializada na negociação de milhas, com uma alternativa para quem compra passagens e para quem vende pontos. Somos empresa registrada (CNPJ 38.857.636/0001-73), cadastrada no Cadastur, com mais de 100 mil clientes atendidos.",
          link: {
            label: "Conheça a Milhas Plus →",
            href: "/sobre-nos",
            cta: "faq-sobre",
          },
        },
        {
          id: "duvidas-processo",
          question: "E se eu tiver dúvidas durante o processo?",
          answer:
            "Você fala com pessoas de verdade do primeiro contato até a conclusão. É só chamar nosso time no WhatsApp (51) 99444-0744.",
          link: {
            label: "Falar no WhatsApp →",
            href: whatsappLink("duvida"),
            cta: "faq-processo-whatsapp",
          },
        },
      ],
    },
    {
      id: "comprar",
      label: "Comprar passagem",
      items: [
        {
          id: "como-solicitar",
          question: "Como funciona a solicitação de passagens com milhas?",
          // [VALIDAR] O site atual diz que o pagamento vem após a confirmação da passagem.
          answer:
            "Envie origem, destino, datas e número de passageiros pelo formulário ou pelo WhatsApp. Comparamos os programas, enviamos a cotação e, depois da sua aprovação e do pagamento, a passagem é emitida no seu nome, direto pela companhia aérea.",
          link: { ...quoteTicket, cta: "faq-solicitar-passagem" },
        },
        {
          id: "prazo-passagem",
          question:
            "Quanto tempo leva para receber minha passagem após a compra?",
          answer:
            "Concluída a emissão, a confirmação vem direto da companhia aérea. [Informar o prazo médio praticado.]",
          link: { ...quoteTicket, cta: "faq-prazo-passagem" },
        },
        {
          id: "destinos",
          question: "Posso solicitar passagens para qualquer destino?",
          answer:
            "Emitimos passagens nacionais e internacionais. [Confirmar: a disponibilidade depende dos programas e das companhias para o trecho e as datas.]",
          link: { ...quoteTicket, cta: "faq-destinos-passagem" },
        },
      ],
    },
    {
      id: "vender",
      label: "Vender milhas",
      items: [
        {
          id: "como-vender",
          question: "Como negociar minhas milhas com a Milhas Plus?",
          // [VALIDAR] O site atual promete "até 24 horas".
          answer:
            "Informe o programa e a quantidade de milhas pelo formulário ou pelo WhatsApp. Você recebe o valor antes de qualquer transferência, nossa equipe orienta cada etapa no programa e o pagamento é feito via Pix no mesmo dia da negociação.",
          link: { ...quoteMiles, cta: "faq-como-vender" },
        },
        {
          id: "programas",
          question: "Quais programas de milhas vocês aceitam?",
          answer:
            "LATAM Pass, Smiles, TudoAzul e outros. [Confirmar a lista completa.]",
          link: { ...quoteMiles, cta: "faq-programas" },
        },
      ],
    },
    {
      id: "seguranca",
      label: "Segurança e pagamento",
      items: [
        {
          id: "pagamento-seguro",
          question: "O pagamento pela negociação de milhas é seguro?",
          answer:
            "[Validar com o jurídico] O valor é combinado antes da transferência e o pagamento é feito via Pix, pelos canais oficiais da Milhas Plus.",
        },
        {
          id: "taxas",
          question: "A Milhas Plus cobra taxas adicionais?",
          answer:
            "[Resposta a confirmar: informar se há taxas além do valor cotado — ex.: taxas de embarque da companhia.]",
        },
        {
          id: "transacao-segura",
          question: "Como posso ter certeza de que minha transação é segura?",
          answer:
            "Você negocia com uma empresa registrada (CNPJ 38.857.636/0001-73), cadastrada no Cadastur, e uma pessoa da nossa equipe acompanha cada etapa. [Validar com o jurídico os demais cuidados a citar.]",
        },
      ],
    },
  ] satisfies FaqCategory[],

  shortcuts: {
    eyebrow: "PRÓXIMO PASSO",
    title: "Já sabe o que quer fazer?",
    items: [
      {
        eyebrow: "PARA QUEM TEM PONTOS",
        title: "Vender minhas milhas",
        action: "Cotar agora →",
        href: "/negociar-milhas",
        cta: "faq-atalho-vender",
        tone: "sun",
      },
      {
        eyebrow: "PARA QUEM VAI VIAJAR",
        title: "Comprar passagem",
        action: "Cotar minha passagem →",
        href: "/comprar-milhas",
        cta: "faq-atalho-passagem",
        tone: "ink",
      },
      {
        eyebrow: "PARA AGÊNCIAS",
        title: "Seja parceiro",
        action: "Cadastrar agência →",
        href: "/parceiros",
        cta: "faq-atalho-parceiro",
        tone: "mint",
      },
    ],
  },
} as const;
