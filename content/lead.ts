/** Textos comuns aos formulários que abrem o WhatsApp com os dados preenchidos. */
export type LeadFormCopy = {
  title: string;
  subtitle: string;
  whatsapp: {
    label: string;
    placeholder: string;
    hint?: string;
    error: string;
  };
  consent: { before: string; link: string; href: string; after: string };
  submit: string;
  directContact: { text: string; link: string };
  sent: { title: string; text: string; reopen: string; restart: string };
};

export const leadCopy = {
  whatsapp: {
    label: "WhatsApp *",
    placeholder: "(51) 99999-9999",
    error: "Informe o WhatsApp com DDD, como em (51) 99999-9999.",
  },
  consent: {
    link: "Política de Privacidade",
    href: "/politica-de-privacidade",
    after: ". *",
  },
  directContact: {
    text: "Prefere conversar direto?",
    link: "Chame no WhatsApp",
  },
  // Não há backend: o pedido só chega à equipe quando o cliente envia a mensagem.
  sent: {
    title: "Falta só enviar!",
    reopen: "Abrir o WhatsApp de novo",
    restart: "Fazer outra cotação",
  },
};
