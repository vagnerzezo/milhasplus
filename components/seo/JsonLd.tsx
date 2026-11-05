import type { FaqItem } from "@/content/landing";
import { site } from "@/content/site";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/brand/logo-mark.svg`,
        sameAs: site.footer.social
          .filter((item) => item.icon !== "message")
          .map((item) => item.href),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${WHATSAPP_NUMBER}`,
          contactType: "customer service",
          availableLanguage: "Portuguese",
        },
      }}
    />
  );
}

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}
