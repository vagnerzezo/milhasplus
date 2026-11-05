/** Aplica a máscara (51) 99999-9999 e descarta o 55 de números colados com DDI. */
export function formatPhone(value: string): string {
  let digits = value.replace(/\D/g, "");
  if (digits.length > 11 && digits.startsWith("55")) digits = digits.slice(2);
  digits = digits.slice(0, 11);

  if (digits.length <= 2) return digits;
  const prefixLength = digits.length <= 10 ? 4 : 5;
  const prefix = digits.slice(2, 2 + prefixLength);
  const suffix = digits.slice(2 + prefixLength);
  return `(${digits.slice(0, 2)}) ${prefix}${suffix && `-${suffix}`}`;
}

function applyMask(chars: string, sizes: number[], separators: string[]) {
  let masked = "";
  let start = 0;
  sizes.forEach((size, index) => {
    const part = chars.slice(start, start + size);
    if (part) masked += (index > 0 ? separators[index - 1] : "") + part;
    start += size;
  });
  return masked;
}

/**
 * Máscara de CPF, que vira a de CNPJ a partir do 12º caractere.
 * Aceita letras porque o CNPJ passa a ser alfanumérico.
 */
export function formatDocument(value: string): string {
  const chars = value
    .toUpperCase()
    .replace(/[^0-9A-Z]/g, "")
    .slice(0, 14);
  return chars.length <= 11 && /^\d*$/.test(chars)
    ? applyMask(chars, [3, 3, 3, 2], [".", ".", "-"])
    : applyMask(chars, [2, 3, 3, 4, 2], [".", ".", "/", "-"]);
}

const thousands = new Intl.NumberFormat("pt-BR");

/** Separa os milhares (100000 vira 100.000) e descarta o que não for número. */
export function formatThousands(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 12);
  return digits ? thousands.format(Number(digits)) : "";
}
