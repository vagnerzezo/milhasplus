import type { Metadata } from "next";
import { FormHero } from "@/components/forms/FormHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { ReasonsSection } from "@/components/sections/ReasonsSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { SaleForm } from "@/components/sell/SaleForm";
import { SaleStats } from "@/components/sell/SaleStats";
import { PillBadge } from "@/components/ui/PillBadge";
import { negociar } from "@/content/negociar";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  ...negociar.metadata,
  path: "/negociar-milhas",
});

export default function NegociarMilhas() {
  const { badge, ...hero } = negociar.hero;
  const { legal, ...reasons } = negociar.reasons;

  return (
    <SiteShell
      pageId="pagina-negociar-milhas"
      status={site.status}
      nav={site.nav}
      currentPath="/negociar-milhas"
      activeNav="/#servicos"
      floatIntent="vender"
    >
      <FormHero
        id="negociar-hero"
        {...hero}
        intro={<PillBadge tag={badge.tag} text={badge.text} />}
        form={<SaleForm content={negociar.form} />}
      />
      <StepsSection id="negociar-como-funciona" {...negociar.steps} />
      <ReasonsSection id="negociar-por-que-vender" {...reasons}>
        <SaleStats stats={site.stats} legal={legal} />
      </ReasonsSection>
      <Faq
        id="negociar-faq"
        {...negociar.faq}
        items={[...negociar.faq.items]}
      />
      <FinalCta id="negociar-cta" {...negociar.finalCta} withTopGap />
    </SiteShell>
  );
}
