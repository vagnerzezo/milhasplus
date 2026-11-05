import { whatsappLink, type WhatsAppIntent } from "@/lib/whatsapp";

export type NavLink = { label: string; href: string };
export type Cta = {
  label: string;
  intent: WhatsAppIntent;
  cta: string;
  /** Página do site, quando o CTA não deve abrir o WhatsApp direto. */
  href?: string;
};
export type Stat = { value: string; label: string };
export type SocialIcon = "instagram" | "facebook" | "message";
export type SocialLink = { label: string; href: string; icon: SocialIcon };
export type PillarIcon = "dollar" | "clipboard" | "users";
export type ReasonIcon =
  "dollar" | "eye" | "message" | "tag" | "plane" | "expand";
export type Reason = {
  icon: ReasonIcon;
  title: string;
  text: string;
  tone: "sun" | "ink" | "white" | "mint";
};
export type Pillar = {
  n: string;
  icon: PillarIcon;
  title: string;
  text: string;
};

/** Conteúdo compartilhado entre as páginas. */
export const site = {
  legal: "CNPJ 38.857.636/0001-73 · Empresa cadastrada",

  /** Texto padrão da top bar. */
  status: "Pagamento via Pix no mesmo dia da negociação",

  nav: [
    { label: "Como funciona", href: "/#como-funciona" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Sobre nós", href: "/sobre-nos" },
    { label: "Dúvidas", href: "/perguntas-frequentes" },
    { label: "Agências", href: "/agencias" },
  ] satisfies NavLink[],

  headerCta: {
    label: "Vender minhas milhas",
    intent: "vender",
    cta: "header-vender",
  } satisfies Cta,

  stats: [
    { value: "+25 bi", label: "de milhas negociadas" },
    { value: "+100 mil", label: "clientes atendidos" },
    { value: "+3 mil", label: "agências parceiras" },
  ] satisfies Stat[],

  pillars: [
    {
      n: "/01",
      icon: "dollar",
      title: "Pagamento no mesmo dia",
      text: "Pix no mesmo dia da negociação.",
    },
    {
      n: "/02",
      icon: "clipboard",
      title: "Transparência nas cotações",
      text: "Valores reais desde o primeiro contato.",
    },
    {
      n: "/03",
      icon: "users",
      title: "Atendimento humanizado",
      text: "Solução rápida com um toque humano.",
    },
  ] satisfies Pillar[],

  footer: {
    description:
      "Negociamos milhas e emitimos passagens com segurança, transparência e atendimento humano.",
    // Telegram fica de fora até o link oficial ser confirmado.
    social: [
      {
        label: "Instagram @milhasplusoficial",
        href: "https://www.instagram.com/milhasplusoficial/",
        icon: "instagram",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/milhasplus.viajens",
        icon: "facebook",
      },
      {
        label: "WhatsApp",
        href: whatsappLink("geral"),
        icon: "message",
      },
    ] satisfies SocialLink[],
    columns: [
      {
        title: "Serviços",
        links: [
          { label: "Vender milhas", href: "/negociar-milhas" },
          { label: "Passagem em milhas", href: "/comprar-milhas" },
          { label: "Agências", href: "/agencias" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Sobre nós", href: "/sobre-nos" },
          { label: "Guias práticos", href: "/guias-praticos" },
          { label: "Perguntas frequentes", href: "/perguntas-frequentes" },
          { label: "Fale conosco", href: "/contato" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Termos e condições", href: "/termos-e-condicoes" },
          {
            label: "Política de privacidade",
            href: "/politica-de-privacidade",
          },
        ],
      },
    ] satisfies { title: string; links: NavLink[] }[],
    copyright:
      "© 2026 Milhas Plus — CNPJ 38.857.636/0001-73. Todos os direitos reservados.",
    // [PLACEHOLDER] Confirmar Cadastur vigente e selo do Reclame Aqui.
    seal: { src: "/brand/cadastur.svg", alt: "Cadastur" },
  },
};
