import { site, type Cta } from "@/content/site";

export type HeroBadgeIcon = "shield" | "clock" | "message";
export type ValueIcon = "dollar" | "plane" | "users";
export type ValueCard = { icon: ValueIcon; title: string; text: string };
export type Step = { n: string; title: string; text: string };
export type Flow = { id: string; label: string; steps: Step[]; cta: Cta };
export type ServiceCard = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  cta: Cta;
};
export type CompareRow = { label: string; ours: string; informal: string };
export type Quote = {
  quote: string;
  name: string;
  detail?: string;
  image: string;
};
export type FaqItem = { question: string; answer: string };

export const landing = {
  topBar: {
    // [PLACEHOLDER] Horário não confirmado.
    status: "[Horário de atendimento — confirmar]",
  },

  hero: {
    badge: {
      tag: "NOVO",
      text: "Pagamento via Pix no mesmo dia da negociação",
    },
    title: {
      line1: "Negocie milhas com quem ",
      line2: "sabe do assunto",
    },
    subtitle:
      "Na MILHAS Plus, você negocie e intermedia milhas de forma rápida, segura e com os melhores preços do mercado. Intermedie suas milhas e transforme pontos em dinheiro na sua conta.",
    primaryCta: {
      label: "Cotar minhas milhas agora",
      intent: "vender",
      cta: "hero-vender",
    } satisfies Cta,
    secondaryCta: {
      label: "Quero uma passagem",
      intent: "passagem",
      cta: "hero-passagem",
    } satisfies Cta,
    badges: [
      { icon: "shield", label: "Negociação segura" },
      { icon: "clock", label: "Pix no mesmo dia" },
      { icon: "message", label: "Gente de verdade no WhatsApp" },
    ] satisfies { icon: HeroBadgeIcon; label: string }[],
    // [PLACEHOLDER] Foto provisória; a definitiva é janela do avião, asa e pôr do sol (1600×1200).
    image: { src: "/images/aviao.webp" },
    // Cartão ilustrativo: não representa uma emissão real.
    boardingPass: {
      from: { code: "POA", city: "Porto Alegre" },
      to: { code: "LIS", city: "Lisboa" },
      payment: "Milhas",
      // Sem percentual até existir um número validado.
      savings: "—",
      status: "Emitido",
    },
    pixChip: {
      title: "Pix recebido",
      text: "Venda de milhas concluída",
    },
  },

  valueProposition: {
    eyebrow: "01 — POR QUE MILHAS PLUS",
    title: {
      line1: "Pontos parados perdem valor.",
      line2: "A gente transforma em dinheiro ou em viagem.",
    },
    text: "Milhas expiram, programas mudam regras e a maioria das pessoas nunca usa tudo o que acumula. Nosso trabalho é fazer esse saldo render — com preço justo, regras claras e alguém acompanhando cada etapa.",
    cards: [
      {
        icon: "dollar",
        title: "Dinheiro na conta, rápido",
        text: "Fechou a venda, recebe via Pix. Sem esperar semanas, sem intermediários escondidos.",
      },
      {
        icon: "plane",
        title: "Passagens com milhas",
        // Sem "abaixo da tarifa pública": promessa ainda não validada.
        text: "Emitimos com milhas trechos nacionais e internacionais, no seu nome.",
      },
      {
        icon: "users",
        title: "Atendimento humanizado",
        text: "Solução rápida com um toque humano.",
      },
    ] satisfies ValueCard[],
  },

  howItWorks: {
    eyebrow: "02 — COMO FUNCIONA",
    title: { line1: "Do saldo parado ao Pix", line2: "em quatro passos." },
    tabsLabel: "Escolha o fluxo",
    flows: [
      {
        id: "vender",
        label: "Vender milhas",
        steps: [
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
            text: "Nosso time orienta cada etapa no programa de fidelidade, com segurança.",
          },
          {
            n: "04",
            title: "Receba via Pix",
            text: "Concluída a emissão, o pagamento cai direto na sua conta.",
          },
        ],
        cta: {
          label: "Cotar minhas milhas",
          intent: "vender",
          cta: "como-funciona-vender",
        },
      },
      {
        id: "comprar",
        label: "Comprar passagem",
        steps: [
          {
            n: "01",
            title: "Envie seu trecho",
            text: "Origem, destino, datas e número de passageiros.",
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
        ],
        cta: {
          label: "Cotar minha passagem",
          intent: "passagem",
          cta: "como-funciona-passagem",
        },
      },
    ] satisfies Flow[],
    note: {
      // [VALIDAÇÃO JURÍDICA] Afirmação sobre regras dos programas.
      title: "Novo no mercado de milhas?",
      text: "Programas de fidelidade permitem emitir passagens para terceiros. É isso que torna a venda de pontos possível — e segura quando feita com quem conhece as regras.",
    },
  },

  services: {
    eyebrow: "03 — SERVIÇOS",
    title: { line1: "Escolha seu caminho.", line2: "A gente cuida do resto." },
    sell: {
      id: "vender-milhas",
      eyebrow: "PARA QUEM TEM PONTOS",
      title: "Vender milhas",
      // [VALIDAR] "Cotação na hora" e lista de programas.
      text: "Compramos seus pontos LATAM Pass, Smiles, TudoAzul e outros. Cotação na hora e pagamento via Pix.",
      benefits: [
        "Sem cadastro complicado",
        "Valor fechado antes de você transferir",
        "Acompanhamento até o pagamento",
      ],
      cta: {
        label: "Fazer cotação grátis",
        intent: "vender",
        cta: "servicos-vender",
      } satisfies Cta,
      image: { src: "/images/mala-3d.webp", width: 643, height: 644 },
    },
    buy: {
      id: "comprar-passagem",
      eyebrow: "PARA QUEM VAI VIAJAR",
      title: "Comprar passagem com milhas",
      text: "Envie origem, destino e datas. Respondemos com a cotação e emitimos no seu nome.",
      cta: {
        label: "Cotar minha passagem →",
        intent: "passagem",
        cta: "servicos-passagem",
      },
    } satisfies ServiceCard,
    negotiation: {
      id: "passagem-negociacao",
      eyebrow: "PARA ECONOMIZAR AINDA MAIS",
      title: "Passagem com negociação",
      // [VALIDAR] "Você paga menos".
      text: "Use parte das suas milhas como pagamento e complemente a diferença. Você paga menos e aproveita o saldo.",
      cta: {
        label: "Simular negociação →",
        intent: "negociacao",
        cta: "servicos-negociacao",
      },
    } satisfies ServiceCard,
    agencies: {
      id: "agencias",
      eyebrow: "B2B · AGÊNCIAS DE VIAGEM",
      title: "Sua agência emitindo com tarifa de milhas.",
      // [VALIDAR] "Mais margem" e "preço melhor".
      text: "Condições e atendimento dedicados para mais de 3 mil agências parceiras. Mais margem para você, preço melhor para seu cliente.",
      cta: {
        label: "Quero ser parceiro",
        intent: "agencia",
        cta: "servicos-agencia",
      },
    } satisfies ServiceCard,
  },

  differentials: {
    eyebrow: "04 — DIFERENCIAIS",
    title: "Por que negociar com a Milhas Plus?",
    text: "Vender milhas em grupo de rede social ou para desconhecidos é arriscado. Aqui você negocia com uma empresa registrada, com equipe e processo.",
    cta: {
      label: "Falar com um especialista",
      intent: "geral",
      cta: "diferenciais-geral",
    } satisfies Cta,
    table: {
      caption: "Comparativo: Milhas Plus × venda informal",
      criterion: "Critério",
      ours: "Milhas Plus",
      // [VALIDAR COM MARKETING/JURÍDICO] Toda a coluna é afirmação comparativa.
      informal: "Venda informal",
      rows: [
        {
          label: "Empresa com CNPJ e equipe",
          ours: "Sim",
          informal: "Raramente",
        },
        {
          label: "Valor fechado antes da transferência",
          ours: "Sim",
          informal: "Depende",
        },
        {
          label: "Pagamento via Pix no mesmo dia",
          ours: "Sim",
          informal: "Incerto",
        },
        {
          label: "Acompanhamento da emissão",
          ours: "Do início ao fim",
          informal: "Não",
        },
        {
          label: "Atendimento por pessoas",
          ours: "WhatsApp e telefone",
          informal: "Variável",
        },
      ] satisfies CompareRow[],
    },
    pillars: site.pillars,
  },

  testimonials: {
    eyebrow: "05 — QUEM JÁ VOOU COM A GENTE",
    title: "Histórias reais, viagens reais.",
    // Nota informada pela empresa; sem plataforma de origem por enquanto.
    rating: { score: "5.0", stars: 5, label: "Nota 5.0 de 5 estrelas" },
    // Depoimentos do site atual. Só foram corrigidos erros de digitação.
    featured: [
      {
        quote:
          "E aí, pessoal! ✈️ Não sei vocês, mas uma das coisas que mais amo na vida é viajar, conhecer novos lugares, culturas e viver aventuras emocionantes ao redor do mundo. 💃🌍 Mas, claro, como uma boa viajante, também gosto de economizar e aproveitar ao máximo as oportunidades que surgem. E sabe qual é o meu segredo? 😏 Antes de qualquer viagem, eu faço questão de dar uma passadinha na Milhas Plus!",
        name: "Stéfani Bays",
        detail: "Digital influencer",
        image: "/images/depoimentos/stefani.webp",
      },
      {
        quote:
          "Recomendo a todos que desejam voar mais longe e gastar menos! Encontrei no Milhas Plus a solução ideal para oferecer passagens aéreas com preços acessíveis e destinos incríveis. Com a possibilidade de solicitar passagens via intermediação de milhas, meus clientes podem explorar o mundo sem comprometer o orçamento. O Milhas Plus facilitou as viagens dos meus clientes e aumentou a satisfação dos meus negócios.",
        name: "Almir Vida",
        detail: "Agente de viagens",
        image: "/images/depoimentos/almir.webp",
      },
      {
        quote:
          "Sou um policial militar no Rio de Janeiro. A rotina desafiadora da profissão me ensinou a valorizar cada momento de descanso e lazer. Foi aí que o Milhas Plus entrou em minha vida. O atendimento impecável e os preços acessíveis me proporcionaram experiências únicas. Recomendo o Milhas Plus a todos os colegas de farda que desejam voar mais longe, desligar-se do estresse e recarregar as energias, sem pesar no bolso. Uma parceria que faz toda a diferença!",
        name: "Eurico Junnior",
        detail: "Tenente da PMRJ",
        image: "/images/depoimentos/eurico.webp",
      },
    ] satisfies Quote[],
    secondary: [
      {
        quote:
          "Gostaria de agradecer a Milhas Plus pelo grande trabalho que tem feito no ramo das milhas aéreas, grande fornecedor e imenso comprador, Deus abençoe grandemente sua caminhada, em nome do senhor! Provérbios 16:3",
        name: "Cleber Fernandes",
        image: "/images/depoimentos/cleber.webp",
      },
      {
        quote:
          "Fazer parceria com a Milhas Plus foi uma das melhores decisões que tomamos! Ao longo desse período a transparência e a seriedade em todas as negociações é cada vez maior! Atendimento e resposta extremamente rápidos e eficazes! Respeito absoluto em relação aos prazos e valores dos pagamentos.",
        name: "Alethia Schmidt",
        image: "/images/depoimentos/alethia.webp",
      },
    ] satisfies Quote[],
    carousel: {
      label: "Depoimentos em destaque",
      previous: "Depoimento anterior",
      next: "Próximo depoimento",
      goTo: "Ir para o depoimento de",
      slide: "de",
    },
    team: {
      image: "/images/time-milhas.webp",
      alt: "Equipe da Milhas Plus reunida em frente a um hotel, com camisetas da empresa",
      title: "Por trás de cada emissão tem uma pessoa do nosso time.",
      text: "Nada de robô respondendo no lugar de gente. Você fala com quem entende do assunto.",
    },
  },

  faq: {
    eyebrow: "06 — DÚVIDAS FREQUENTES",
    title: "Ainda com dúvidas?",
    text: "Reunimos o que mais perguntam antes da primeira negociação. Não encontrou? Chama no WhatsApp.",
    /** Liga o JSON-LD FAQPage. Só ativar com todas as respostas validadas e sem colchetes. */
    validated: false,
    items: [
      {
        question: "Vender milhas é permitido?",
        answer:
          "[Validar com o jurídico] Os programas permitem emitir passagens para terceiros. A negociação é feita dentro dessas regras, e nosso time orienta para que sua conta continue segura.",
      },
      {
        question: "Quanto vale o meu milheiro?",
        answer:
          "Depende do programa e do volume. Peça uma cotação: o valor é informado antes de qualquer transferência e não muda depois.",
      },
      {
        question: "Em quanto tempo recebo o pagamento?",
        answer:
          "Assim que a emissão é concluída, o pagamento é enviado via Pix. [Informar prazo]",
      },
      {
        question: "Quais programas vocês compram?",
        answer: "LATAM Pass, Smiles, TudoAzul e outros. [Confirmar lista]",
      },
      {
        question: "Como compro uma passagem com vocês?",
        answer:
          "Envie origem, destino e datas. Enviamos a cotação, você aprova, e a passagem é emitida no seu nome pela própria companhia.",
      },
      {
        question: "A Milhas Plus é confiável?",
        answer:
          "Somos uma empresa registrada (CNPJ 38.857.636/0001-73), com equipe própria e mais de 100 mil clientes atendidos.",
      },
    ] satisfies FaqItem[],
  },

  finalCta: {
    eyebrow: "BOAS-VINDAS A BORDO",
    title: {
      line1: "Você pediu,",
      line2: "a Milhas Plus",
      highlight: "emitiu.",
    },
    text: "Faça sua cotação agora. Leva poucos minutos e você não assume nenhum compromisso.",
    primary: {
      label: "Cotar minhas milhas",
      intent: "vender",
      cta: "final-vender",
    } satisfies Cta,
    secondary: {
      label: "Cotar uma passagem",
      intent: "passagem",
      cta: "final-passagem",
    } satisfies Cta,
    whatsappPrefix: "ou chame no WhatsApp",
  },
};
