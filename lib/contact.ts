export type ContactRequest = {
  subject: string;
  name: string;
  whatsapp: string;
  email?: string;
  message: string;
};

export function buildContactMessage(request: ContactRequest): string {
  return [
    "Olá! Vim pelo site da Milhas Plus.",
    `Assunto: ${request.subject}`,
    `Nome: ${request.name}`,
    `WhatsApp: ${request.whatsapp}`,
    request.email && `E-mail: ${request.email}`,
    `Mensagem: ${request.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}
