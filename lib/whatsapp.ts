export const WHATSAPP_NUMBER = "5551994440744";
export const WHATSAPP_DISPLAY = "(51) 99444-0744";
// [VALIDAR] Link do site atual; é uma conta pessoal, não um canal da empresa.
export const TELEGRAM_URL = "https://t.me/gunnarsfer";
export const TELEGRAM_DISPLAY = "@gunnarsfer";

export type WhatsAppIntent =
  | "vender"
  | "passagem"
  | "negociacao"
  | "agencia"
  | "geral"
  | "duvida-passagem"
  | "duvida-venda"
  | "parceria"
  | "duvida-parceria"
  | "emissao-agencia"
  | "duvida"
  | "ajuda-redirecionamento"
  | "aviso-encaminhamento";

const messages: Record<WhatsAppIntent, string> = {
  vender: "Olá! Quero cotar a venda das minhas milhas.",
  passagem: "Olá! Quero cotar uma passagem com milhas.",
  negociacao: "Olá! Quero simular uma passagem com negociação de milhas.",
  agencia:
    "Olá! Tenho uma agência de viagens e quero ser parceiro da Milhas Plus.",
  geral: "Olá! Quero falar com a Milhas Plus.",
  "duvida-passagem": "Olá! Tenho uma dúvida sobre passagem com milhas.",
  "duvida-venda": "Olá! Tenho uma dúvida sobre venda de milhas.",
  parceria: "Olá! Quero ser parceiro da Milhas Plus.",
  "duvida-parceria": "Olá! Tenho uma dúvida sobre parceria.",
  "emissao-agencia": "Olá! Sou agência e quero cotar uma emissão.",
  duvida: "Olá! Tenho uma dúvida.",
  "ajuda-redirecionamento":
    "Olá! Preciso de ajuda com o redirecionamento de e-mails.",
  "aviso-encaminhamento": "Olá! Adicionei o e-mail de encaminhamento no Gmail.",
};

export function whatsappTextLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function whatsappLink(intent: WhatsAppIntent): string {
  return whatsappTextLink(messages[intent]);
}
