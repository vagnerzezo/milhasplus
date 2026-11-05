import type { Cta } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

export type EmailClient = "gmail" | "outlook";
export type Airline = "smiles" | "latam";
export type CopySlot = "team" | "sender";

export type GuideStep = {
  title: string;
  p1: string;
  slot1?: CopySlot;
  p2?: string;
  slot2?: CopySlot;
  links?: { label: string; href: string; cta: string; secondary?: boolean }[];
  image?: { src: string; width: number; height: number; alt: string };
};

export type EmailGuideContent = {
  // [VALIDAR] Valores do site atual. Sem domínio da empresa no e-mail da equipe.
  teamEmail: string;
  senders: Record<Airline, string>;
  airlines: Record<Airline, string>;
  clientsLabel: string;
  clients: Record<EmailClient, { name: string; steps: GuideStep[] }>;
  sectionLabel: string;
  airlineLabel: string;
  teamLabel: string;
  senderLabel: string;
  stepWord: string;
  ofWord: string;
  finished: string;
  statusDone: string;
  statusNow: string;
  next: string;
  finish: string;
  back: string;
  copy: { idle: string; copied: string; failed: string };
  done: { title: string; text: string; restart: string };
  warning: { title: string; before: string; strong: string; after: string };
  quick: { title: string };
  help: {
    title: string;
    text: string;
    link: string;
    href: string;
    cta: string;
  };
};

// Grupo do site atual: quem entra vê os telefones dos outros participantes.
const GROUP_URL = "https://chat.whatsapp.com/G1Vx1NNVXVz0nMY41hDbZl?mode=gi_t";

export const redirecionamento = {
  metadata: {
    title: "Como redirecionar seus e-mails",
    description:
      "Guia passo a passo para configurar no Gmail ou no Outlook o encaminhamento automático dos e-mails da LATAM e da Smiles para a equipe da Milhas Plus.",
  },

  hero: {
    breadcrumb: [
      { label: "Início", href: "/" },
      { label: "Redirecionamento de e-mails" },
    ],
    eyebrow: "GUIA PRÁTICO",
    title: {
      // O caractere invisível impede a quebra de linha em "e-mails".
      line1: "Como redirecionar seus e-\u2060mails",
      line2: "para a Milhas Plus.",
    },
    text: "Configure o encaminhamento automático dos e-mails das companhias aéreas (LATAM e Smiles) diretamente para a nossa equipe.",
    chips: [
      { icon: "clock", label: "Menos de 5 minutos" },
      { icon: "mail", label: "Gmail ou Outlook" },
      { icon: "monitor", label: "Feito pelo computador" },
    ],
  },

  guide: {
    teamEmail: "redirecionamentomp@gmail.com",
    senders: {
      smiles: "transacional@comunicado.smiles.com.br",
      latam: "info@info.latam.com",
    },
    airlines: { smiles: "Smiles", latam: "LATAM" },
    clientsLabel: "Escolha seu e-mail",
    sectionLabel: "Passo a passo",
    airlineLabel: "Companhia:",
    teamLabel: "E-MAIL DA EQUIPE",
    senderLabel: "REMETENTE",
    stepWord: "PASSO",
    ofWord: "DE",
    finished: "CONCLUÍDO",
    statusDone: "Concluído",
    statusNow: "Agora",
    next: "PRÓXIMO PASSO →",
    finish: "CONCLUIR ✓",
    back: "← Voltar",
    copy: { idle: "Copiar", copied: "Copiado ✓", failed: "Não copiou" },
    done: {
      title: "Tudo configurado no",
      text: "Agora é só avisar a equipe no grupo para confirmarmos o recebimento.",
      restart: "Rever os passos",
    },
    warning: {
      title: "Atenção:",
      before:
        " verifique se as mensagens encaminhadas não estão caindo na pasta de ",
      strong: "Spam",
      after:
        ". Políticas de segurança dos provedores podem desviar e-mails mesmo com o filtro ativo.",
    },
    quick: { title: "Dados para copiar" },
    help: {
      title: "Travou em algum passo?",
      text: "Nossa equipe ajuda pelo WhatsApp.",
      link: "Falar no WhatsApp",
      href: whatsappLink("ajuda-redirecionamento"),
      cta: "guia-ajuda-whatsapp",
    },
    clients: {
      gmail: {
        name: "Gmail",
        steps: [
          {
            title: "Abrir as configurações do Gmail",
            p1: "Acesse o Gmail pelo computador em mail.google.com.",
            p2: "Clique no ícone de engrenagem, no canto superior direito, e selecione “Ver todas as configurações”.",
            links: [
              {
                label: "Abrir o Gmail ↗",
                href: "https://mail.google.com/mail/u/0/#settings/general",
                cta: "guia-gmail-abrir",
              },
            ],
            image: {
              src: "/images/guia/gmail-1.webp",
              width: 1200,
              height: 607,
              alt: "Gmail com o ícone de engrenagem e a opção Ver todas as configurações em destaque",
            },
          },
          {
            title: "Adicionar endereço de encaminhamento",
            p1: "Na aba “Encaminhamento e POP/IMAP”, clique em “Adicionar um endereço de encaminhamento” e cole o e-mail da equipe:",
            slot1: "team",
            p2: "Confirme em Próxima › Continuar › OK. O Gmail envia um link de confirmação para a nossa equipe: avise no WhatsApp antes de seguir.",
            links: [
              {
                label: "Abrir encaminhamento ↗",
                href: "https://mail.google.com/mail/u/0/#settings/fwdandpop",
                cta: "guia-gmail-encaminhamento",
              },
              {
                label: "Avisar a equipe no WhatsApp",
                href: whatsappLink("aviso-encaminhamento"),
                cta: "guia-gmail-avisar",
                secondary: true,
              },
            ],
            image: {
              src: "/images/guia/gmail-2.webp",
              width: 1200,
              height: 253,
              alt: "Configurações do Gmail com a aba Encaminhamento e POP/IMAP em destaque",
            },
          },
          {
            title: "Criar filtro por remetente",
            p1: "Depois da confirmação, vá em “Filtros e endereços bloqueados” e clique em “Criar um novo filtro”. No campo “De”, cole o e-mail da companhia:",
            slot1: "sender",
            p2: "Depois, clique em “Criar filtro”.",
            links: [
              {
                label: "Abrir filtros ↗",
                href: "https://mail.google.com/mail/u/0/#settings/filters",
                cta: "guia-gmail-filtros",
              },
            ],
            image: {
              src: "/images/guia/gmail-3.webp",
              width: 1200,
              height: 253,
              alt: "Aba Filtros e endereços bloqueados do Gmail com a opção Criar um novo filtro em destaque",
            },
          },
          {
            title: "Selecionar ações e criar o filtro",
            p1: "Marque “Encaminhar para” (com o e-mail da equipe), “Nunca enviar para spam” e “Sempre marcar como importante”.",
            p2: "Clique em “Criar filtro” e repita os passos 3 e 4 para a outra companhia.",
            image: {
              src: "/images/guia/gmail-4.webp",
              width: 1200,
              height: 681,
              alt: "Opções do filtro do Gmail com as três ações marcadas",
            },
          },
          {
            // Sem a opção "Encaminhar uma cópia": ela envia TODOS os e-mails da conta, não só os filtrados.
            title: "Finalização",
            p1: "Em “Filtros e endereços bloqueados”, confira se aparecem dois filtros, um para cada companhia.",
            p2: "Um aviso no topo do Gmail confirma que o encaminhamento está ativo (ele some em 7 dias). Não é preciso ativar “Encaminhar uma cópia” na aba “Encaminhamento e POP/IMAP”: só os e-mails das companhias são encaminhados.",
          },
        ],
      },
      outlook: {
        name: "Outlook",
        steps: [
          {
            title: "Acessar configurações e regras",
            p1: "Acesse outlook.live.com (conta pessoal) ou outlook.office.com (conta corporativa).",
            p2: "Clique na engrenagem, pesquise “Regras” e clique em “+ Adicionar nova regra”.",
            links: [
              {
                label: "Abrir o Outlook ↗",
                href: "https://outlook.live.com/mail/0/options/mail/rules",
                cta: "guia-outlook-abrir",
              },
            ],
            image: {
              src: "/images/guia/outlook-1.webp",
              width: 1200,
              height: 326,
              alt: "Outlook com o ícone de engrenagem em destaque",
            },
          },
          {
            title: "Configurar a regra de encaminhamento",
            p1: "Dê à regra o nome da companhia (SMILES ou LATAM). Na condição “De”, cole o remetente:",
            slot1: "sender",
            p2: "Na ação “Encaminhar para”, cole o e-mail da equipe:",
            slot2: "team",
            image: {
              src: "/images/guia/outlook-2.webp",
              width: 1200,
              height: 600,
              alt: "Regra do Outlook preenchida para a LATAM, com remetente e encaminhamento",
            },
          },
          {
            title: "Salvar e repetir",
            p1: "Clique em “Salvar” e repita a regra para a outra companhia.",
            p2: "Confira se aparecem duas regras na lista, uma para cada companhia.",
            image: {
              src: "/images/guia/outlook-3.webp",
              width: 1200,
              height: 651,
              alt: "Regra do Outlook preenchida para a Smiles, com o botão Salvar",
            },
          },
        ],
      },
    },
  } satisfies EmailGuideContent,

  finalCta: {
    eyebrow: "CONFIGURAÇÃO CONCLUÍDA?",
    title: { line2: "Avise a equipe no grupo.", highlight: "" },
    // [VALIDAR] O site atual fala em confirmar o link em até 2h úteis.
    text: "Configurou os filtros e concluiu todas as etapas? Entre no grupo e avise nossa equipe — confirmamos o recebimento em até 2h úteis.",
    primary: {
      label: "Entrar no grupo",
      intent: "ajuda-redirecionamento",
      cta: "guia-final-grupo",
      href: GROUP_URL,
    } satisfies Cta,
    secondary: {
      label: "Falar no WhatsApp",
      intent: "ajuda-redirecionamento",
      cta: "guia-final-whatsapp",
    } satisfies Cta,
  },
} as const;
