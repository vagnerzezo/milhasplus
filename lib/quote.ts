export type TripType = "ida-e-volta" | "somente-ida";

export type QuoteRequest = {
  trip: TripType;
  tripLabel: string;
  origin: string;
  destination: string;
  departure: string;
  returnDate?: string;
  passengers: { adults: number; children: number; infants: number };
  name: string;
  whatsapp: string;
  notes?: string;
};

/** Converte a data do input (2026-12-25) para o formato brasileiro (25/12/2026). */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
}

function plural(count: number, one: string, many: string): string {
  return `${count} ${count === 1 ? one : many}`;
}

export function buildQuoteMessage(request: QuoteRequest): string {
  const { adults, children, infants } = request.passengers;
  const passengers = [
    plural(adults, "adulto", "adultos"),
    children > 0 && plural(children, "criança", "crianças"),
    infants > 0 && plural(infants, "bebê", "bebês"),
  ]
    .filter(Boolean)
    .join(", ");

  return [
    "Olá! Gostaria de cotar uma passagem.",
    `Tipo de viagem: ${request.tripLabel}`,
    `Origem: ${request.origin}`,
    `Destino: ${request.destination}`,
    `Ida: ${formatDate(request.departure)}`,
    request.returnDate && `Volta: ${formatDate(request.returnDate)}`,
    `Passageiros: ${passengers}`,
    `Nome: ${request.name}`,
    `WhatsApp: ${request.whatsapp}`,
    request.notes && `Observações: ${request.notes}`,
  ]
    .filter(Boolean)
    .join("\n");
}
