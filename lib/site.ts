export const SITE_URL = "https://milhasplus.com.br";
export const SITE_NAME = "Milhas Plus";
export const SITE_TITLE =
  "Milhas Plus | Venda suas milhas ou emita passagens com milhas";
export const SITE_DESCRIPTION =
  "Venda seus pontos com cotação transparente e Pix no mesmo dia da negociação, ou emita passagens nacionais e internacionais com milhas, no seu nome.";

export const sharedSocialImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Milhas Plus: suas milhas valem dinheiro. A gente prova isso hoje.",
};

/** O metadata de uma página substitui o objeto inteiro: repita isto ao definir `openGraph`. */
export const sharedOpenGraph = {
  type: "website" as const,
  locale: "pt_BR",
  siteName: SITE_NAME,
  images: [sharedSocialImage],
};
