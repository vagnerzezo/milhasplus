import type { Metadata } from "next";
import { AgencyBenefits } from "@/components/agencies/AgencyBenefits";
import { AgencyHero } from "@/components/agencies/AgencyHero";
import { AgencyPayment } from "@/components/agencies/AgencyPayment";
import { AgencySteps } from "@/components/agencies/AgencySteps";
import { EmissionData } from "@/components/agencies/EmissionData";
import { SiteShell } from "@/components/layout/SiteShell";
import { FinalCta } from "@/components/sections/FinalCta";
import { agencias } from "@/content/agencias";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  ...agencias.metadata,
  path: "/agencias",
});

export default function Agencias() {
  return (
    <SiteShell
      pageId="pagina-agencias"
      status={site.status}
      nav={site.nav}
      currentPath="/agencias"
      floatIntent="emissao-agencia"
    >
      <AgencyHero hero={agencias.hero} />
      <AgencyBenefits {...agencias.benefits} />
      <AgencySteps steps={agencias.steps} />
      <EmissionData emission={agencias.emission} />
      <AgencyPayment payment={agencias.payment} />
      <FinalCta id="agencias-cta" {...agencias.finalCta} />
    </SiteShell>
  );
}
