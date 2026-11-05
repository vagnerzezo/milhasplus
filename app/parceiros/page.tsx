import type { Metadata } from "next";
import { FormHero } from "@/components/forms/FormHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { PartnerForm } from "@/components/partners/PartnerForm";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { ReasonsSection } from "@/components/sections/ReasonsSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { parceiros } from "@/content/parceiros";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  ...parceiros.metadata,
  path: "/parceiros",
});

export default function Parceiros() {
  const { eyebrow, ...hero } = parceiros.hero;

  return (
    <SiteShell
      pageId="pagina-parceiros"
      status={site.status}
      nav={site.nav}
      currentPath="/parceiros"
      activeNav="/agencias"
      floatIntent="parceria"
    >
      <FormHero
        id="parceiros-hero"
        {...hero}
        intro={<SectionEyebrow tone="dark">{eyebrow}</SectionEyebrow>}
        form={<PartnerForm content={parceiros.form} />}
      />
      <ReasonsSection
        id="parceiros-beneficios"
        {...parceiros.reasons}
        flushTop
      />
      <StepsSection id="parceiros-como-funciona" {...parceiros.steps} />
      <Faq
        id="parceiros-faq"
        {...parceiros.faq}
        items={[...parceiros.faq.items]}
      />
      <FinalCta
        id="parceiros-cta"
        {...parceiros.finalCta}
        tone="sun"
        withTopGap
      />
    </SiteShell>
  );
}
