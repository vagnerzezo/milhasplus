export type PartnerRequest = {
  profile: string;
  name: string;
  whatsapp: string;
  document: string;
  email: string;
  instagram?: string;
  address: string;
};

export function buildPartnerMessage(request: PartnerRequest): string {
  return [
    "Olá! Gostaria de me tornar parceiro da Milhas Plus.",
    `Perfil: ${request.profile}`,
    `Nome: ${request.name}`,
    `WhatsApp: ${request.whatsapp}`,
    `CPF/CNPJ: ${request.document}`,
    `E-mail: ${request.email}`,
    request.instagram && `Instagram: @${request.instagram}`,
    `Endereço completo: ${request.address}`,
  ]
    .filter(Boolean)
    .join("\n");
}
