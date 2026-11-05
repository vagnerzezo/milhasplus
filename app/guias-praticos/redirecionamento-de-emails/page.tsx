import type { Metadata } from "next";
import { EmailForwardGuide } from "@/components/guides/EmailForwardGuide";
import { GuideHero } from "@/components/guides/GuideHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { FinalCta } from "@/components/sections/FinalCta";
import { redirecionamento } from "@/content/redirecionamento";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  ...redirecionamento.metadata,
  path: "/guias-praticos/redirecionamento-de-emails",
});

export default function RedirecionamentoDeEmails() {
  return (
    <SiteShell
      pageId="pagina-guia-redirecionamento"
      status={site.status}
      nav={site.nav}
      currentPath="/guias-praticos/redirecionamento-de-emails"
      activeFooter="/guias-praticos"
      floatIntent="ajuda-redirecionamento"
    >
      <GuideHero hero={redirecionamento.hero} />
      <EmailForwardGuide content={redirecionamento.guide} />
      <FinalCta id="guia-cta" {...redirecionamento.finalCta} />
    </SiteShell>
  );
}
