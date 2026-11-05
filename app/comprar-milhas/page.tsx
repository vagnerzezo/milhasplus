import type { Metadata } from "next";
import { FormHero } from "@/components/forms/FormHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { QuoteOptions } from "@/components/quote/QuoteOptions";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { StepsSection } from "@/components/sections/StepsSection";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { comprar } from "@/content/comprar";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  ...comprar.metadata,
  path: "/comprar-milhas",
});

export default function ComprarMilhas() {
  const { eyebrow, ...hero } = comprar.hero;

  return (
    <SiteShell
      pageId="pagina-comprar-milhas"
      status={site.status}
      nav={site.nav}
      currentPath="/comprar-milhas"
      activeNav="/#servicos"
      floatIntent="passagem"
    >
      <FormHero
        id="comprar-hero"
        {...hero}
        intro={<SectionEyebrow tone="dark">{eyebrow}</SectionEyebrow>}
        form={<QuoteForm content={comprar.form} />}
      />
      <StepsSection id="comprar-como-funciona" {...comprar.steps} />
      <QuoteOptions {...comprar.options} />
      <Faq id="comprar-faq" {...comprar.faq} items={[...comprar.faq.items]} />
      <FinalCta id="comprar-cta" {...comprar.finalCta} withTopGap />
    </SiteShell>
  );
}
