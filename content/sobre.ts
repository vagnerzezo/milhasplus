import { site, type Cta } from "@/content/site";

export type TrustIcon = "shield" | "building" | "message";
export type MethodIcon = "plane" | "dollar" | "shield" | "refresh";
export type MethodStep = {
  icon: MethodIcon;
  audience: string;
  title: string;
  text: string;
};
export type CompanyValue = {
  eyebrow: string;
  title: string;
  text: string;
  tone: "ink" | "white" | "mint";
};
export type GalleryPhoto = { src: string; alt: string };
export type GalleryCarouselCopy = {
  label: string;
  roleDescription: string;
  slideRole: string;
  slideOf: string;
  previous: string;
  next: string;
};

export const sobre = {
  metadata: {
    title: "Quem somos e nossa metodologia",
    description:
      "Conheça a história, a equipe e a metodologia da Milhas Plus para negociar milhas com segurança.",
  },

  hero: {
    breadcrumb: { home: "Início", current: "Sobre nós" },
    eyebrow: "SOBRE NÓS",
    title: {
      line1: "Conheça a Milhas Plus",
      line2: "e a nossa metodologia.",
    },
    text: "A Milhas Plus é uma empresa especializada na negociação de milhas, oferecendo uma alternativa valiosa tanto para quem compra quanto para quem vende. Nosso grande diferencial é a agilidade no processo.",
    badges: [
      { icon: "shield", label: "Empresa com CNPJ" },
      // [VALIDAR] Confirmar cadastro vigente no Cadastur.
      { icon: "building", label: "Cadastrada no Cadastur" },
      { icon: "message", label: "Atendimento humano" },
    ] satisfies { icon: TrustIcon; label: string }[],
  },

  about: {
    eyebrow: "01 — QUEM SOMOS",
    title: "Gente apaixonada por viagens e especialista em milhas.",
    paragraphs: [
      "A Milhas PLUS é uma empresa especializada na negociação de milhas, oferecendo uma alternativa valiosa tanto para quem compra quanto para quem vende. Nosso grande diferencial é a agilidade no processo: quem compra passagens aéreas recebe a confirmação imediata da companhia aérea, enquanto quem vende suas milhas acumuladas pode contar com o pagamento realizado em até 24 horas após a conclusão da negociação. Garantimos 100% de segurança em todas as transações.",
    ],
    image: {
      src: "/images/time-plus.webp",
      alt: "Equipe da Milhas Plus reunida em frente ao Hotel Jequitimar, com camisetas da empresa",
    },
    more: {
      paragraphs: [
        "Nossa equipe é composta por profissionais dedicados, que compartilham uma paixão por viagens e um profundo conhecimento dos programas de fidelidade. Trabalhamos em conjunto para garantir que nossos clientes tenham acesso às melhores opções disponíveis no mercado.",
        "Acreditamos que um atendimento excepcional e personalizado é fundamental. Cada viagem é única e as necessidades dos nossos clientes variam, por isso estamos sempre prontos para oferecer orientação especializada e encontrar as opções de voos que melhor atendam às preferências de cada um.",
        "Estamos constantemente atualizados sobre as novidades do setor de milhas aéreas e programas de fidelidade, o que nos permite oferecer um serviço confiável e uma experiência de compra tranquila em nosso site. Valorizamos cada cliente e nos esforçamos para que sua jornada conosco seja sempre satisfatória.",
      ],
      image: {
        src: "/images/palestra.webp",
        alt: "Equipe da Milhas Plus sentada em um auditório, acompanhando uma palestra",
      },
    },
    closing: {
      paragraphs: [
        "Explore nosso site e descubra como é fácil adquirir passagens aéreas utilizando milhas acumuladas por terceiros. Estamos aqui para ajudar você a economizar em suas viagens e proporcionar uma experiência agradável do início ao fim.",
        "Agradecemos pela confiança depositada em nossa empresa e esperamos ser parte de suas próximas aventuras, tornando suas viagens ainda mais memoráveis. Estamos à disposição para esclarecer quaisquer dúvidas e garantir que você tenha uma experiência positiva ao viajar conosco.",
      ],
      image: {
        src: "/images/grupo.webp",
        alt: "Equipe da Milhas Plus de camisetas pretas, com os braços erguidos em uma atividade na praia",
      },
    },
  },

  leader: {
    eyebrow: "À FRENTE DA MILHAS PLUS",
    // Texto em terceira pessoa, vindo do site atual: é uma apresentação, não uma citação.
    text: "Um profissional com anos de experiência e habilidade em negociações no setor de milhas. Sua expertise é fundamental para oferecermos as melhores opções de passagens aéreas, sempre buscando maximizar os benefícios para nossos clientes.",
    name: "Gunnar Ferreira",
    role: "CEO",
    photo: {
      src: "/images/gunnar.webp",
      alt: "Gunnar Ferreira, CEO da Milhas Plus",
    },
  },

  methodology: {
    eyebrow: "02 — NOSSA METODOLOGIA",
    title: {
      line1: "Agilidade para quem compra.",
      line2: "Segurança para quem vende.",
    },
    text: "Um processo pensado para que cada lado da negociação saiba exatamente o que acontece — e quando.",
    steps: [
      {
        icon: "plane",
        audience: "PARA QUEM COMPRA",
        title: "Confirmação imediata",
        // [VALIDAR] Promessa de confirmação imediata.
        text: "Quem compra passagens recebe a confirmação imediata da companhia aérea.",
      },
      {
        icon: "dollar",
        audience: "PARA QUEM VENDE",
        title: "Pagamento rápido",
        // [PLACEHOLDER] O site atual diz "até 24h"; a landing nova diz "mesmo dia".
        text: "Quem vende suas milhas recebe o pagamento logo após a conclusão da negociação. [Alinhar prazo: “até 24h” × “mesmo dia”.]",
      },
      {
        icon: "shield",
        audience: "EM TODA NEGOCIAÇÃO",
        title: "Segurança nas transações",
        // [VALIDAÇÃO JURÍDICA] Afirmação sobre regras dos programas.
        text: "Processo acompanhado pela nossa equipe em cada etapa, dentro das regras dos programas de fidelidade.",
      },
      {
        icon: "refresh",
        audience: "SEMPRE",
        title: "Atualização constante",
        text: "Acompanhamos as novidades do setor e dos programas para oferecer as melhores opções do mercado.",
      },
    ] satisfies MethodStep[],
  },

  values: {
    eyebrow: "03 — MISSÃO, VISÃO E VALORES",
    title: "O que guia cada negociação.",
    // [PLACEHOLDER] Textos do post “Missão, Visão & Valores” do Instagram; não existem no site atual.
    items: [
      {
        eyebrow: "/MISSÃO",
        title: "Missão",
        text: "[Texto da missão — usar o do post “Missão, Visão & Valores” do Instagram.]",
        tone: "ink",
      },
      {
        eyebrow: "/VISÃO",
        title: "Visão",
        text: "[Texto da visão — usar o do post “Missão, Visão & Valores” do Instagram.]",
        tone: "white",
      },
      {
        eyebrow: "/VALORES",
        title: "Valores",
        text: "[Valores da empresa — usar o do post “Missão, Visão & Valores” do Instagram.]",
        tone: "mint",
      },
    ] satisfies CompanyValue[],
  },

  gallery: {
    eyebrow: "04 — NOSSO TIME",
    title: {
      line1: "Por trás de cada emissão,",
      line2: "uma pessoa do nosso time.",
    },
    text: "Estamos constantemente atualizados sobre as novidades do setor de milhas aéreas e dos programas de fidelidade — o que nos permite oferecer um serviço confiável do início ao fim.",
    photos: [
      {
        src: "/sobre/img-01.webp",
        alt: "Painel do evento Conexão Milhas Plus 2026 em um salão com mesas preparadas",
      },
      {
        src: "/sobre/img-02.webp",
        alt: "Integrante da equipe falando ao microfone durante um evento da Milhas Plus",
      },
      {
        src: "/sobre/img-03.webp",
        alt: "Integrantes da equipe com camisas polo da Milhas Plus conversando em um evento",
      },
      {
        src: "/sobre/img-04.webp",
        alt: "Integrantes da equipe sorrindo em uma conversa, com camisas pretas da Milhas Plus",
      },
      {
        src: "/sobre/img-05.webp",
        alt: "Participantes conversando com bebidas nas mãos em um evento",
      },
      {
        src: "/sobre/img-06.webp",
        alt: "Equipe da Milhas Plus reunida em um auditório, em frente a um telão com a marca",
      },
      {
        src: "/sobre/img-07.webp",
        alt: "Integrantes da equipe conversando de pé em um evento",
      },
      {
        src: "/sobre/img-08.webp",
        alt: "Equipe da Milhas Plus reunida no convés de uma escuna vermelha, com o mar e a mata ao fundo",
      },
      {
        src: "/sobre/img-09.webp",
        alt: "Quatro integrantes da equipe abraçados no convés de uma escuna",
      },
      {
        src: "/sobre/img-10.webp",
        alt: "Equipe da Milhas Plus em uma atividade na areia da praia",
      },
    ] satisfies GalleryPhoto[],
    carousel: {
      label: "Fotos da equipe Milhas Plus",
      roleDescription: "carrossel",
      slideRole: "foto",
      slideOf: "de",
      previous: "Foto anterior",
      next: "Próxima foto",
    } satisfies GalleryCarouselCopy,
  },

  differentials: {
    eyebrow: "05 — DIFERENCIAIS",
    title: "Por que negociar com a Milhas Plus?",
    cta: { label: "Ver como funciona", href: "/#como-funciona" },
    pillars: site.pillars,
  },

  finalCta: {
    eyebrow: "OBRIGADO PELA CONFIANÇA",
    title: {
      line1: "Queremos fazer parte",
      line2: "das suas",
      highlight: "próximas aventuras.",
    },
    text: "Estamos à disposição para esclarecer qualquer dúvida e garantir que você tenha uma experiência positiva ao viajar com a gente.",
    primary: {
      label: "Cotar minhas milhas",
      intent: "vender",
      cta: "sobre-vender",
    } satisfies Cta,
    secondary: {
      label: "Cotar uma passagem",
      intent: "passagem",
      cta: "sobre-passagem",
    } satisfies Cta,
    whatsappPrefix: "ou chame no WhatsApp",
    whatsappCta: "sobre-geral",
  },
};
