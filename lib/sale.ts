export type SaleRequest = {
  program: string;
  amount: string;
  name: string;
  whatsapp: string;
  email?: string;
};

export function buildSaleMessage(request: SaleRequest): string {
  return [
    "Olá! Gostaria de negociar minhas milhas com a Milhas Plus.",
    `Programa de fidelidade: ${request.program}`,
    `Quantidade de milhas: ${request.amount}`,
    `Nome: ${request.name}`,
    `WhatsApp: ${request.whatsapp}`,
    request.email && `E-mail: ${request.email}`,
  ]
    .filter(Boolean)
    .join("\n");
}
