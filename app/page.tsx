import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Differentials } from "@/components/sections/Differentials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { FaqJsonLd, OrganizationJsonLd } from "@/components/seo/JsonLd";
import { landing } from "@/content/landing";
import { site } from "@/content/site";

// Open Graph e Twitter ficam no layout: aqui eles substituiriam o objeto inteiro.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const { eyebrow, title, text, items, validated } = landing.faq;

  return (
    <>
      <OrganizationJsonLd />
      {validated && <FaqJsonLd items={items} />}
      <SiteShell pageId="pagina-inicio" status={landing.topBar.status} nav={site.nav} currentPath="/" >
        <Hero {...landing.hero} />
        <Stats id="resultados" items={site.stats} />
        <ValueProposition {...landing.valueProposition} />
        <HowItWorks {...landing.howItWorks} />
        <Services {...landing.services} />
        <Differentials {...landing.differentials} />
        <Testimonials {...landing.testimonials} />
        <Faq id="faq" eyebrow={eyebrow} title={title} text={text} items={items}/>
        <FinalCta id="contato" {...landing.finalCta} />
      </SiteShell>
    </>
  );
}
