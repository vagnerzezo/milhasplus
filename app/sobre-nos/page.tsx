import type { Metadata } from "next";
import { AboutDifferentials } from "@/components/about/AboutDifferentials";
import { AboutHero } from "@/components/about/AboutHero";
import { CompanyValues } from "@/components/about/CompanyValues";
import { Methodology } from "@/components/about/Methodology";
import { TeamGallery } from "@/components/about/TeamGallery";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { SiteShell } from "@/components/layout/SiteShell";
import { FinalCta } from "@/components/sections/FinalCta";
import { Stats } from "@/components/sections/Stats";
import { site } from "@/content/site";
import { sobre } from "@/content/sobre";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  ...sobre.metadata,
  path: "/sobre-nos",
});

export default function SobreNos() {
  return (
    <SiteShell
      pageId="pagina-sobre-nos"
      status={site.status}
      nav={site.nav}
      currentPath="/sobre-nos"
    >
      <AboutHero {...sobre.hero} />
      <Stats id="sobre-resultados" items={site.stats} />
      <WhoWeAre about={sobre.about} leader={sobre.leader} />
      <Methodology {...sobre.methodology} />
      <CompanyValues {...sobre.values} />
      <TeamGallery {...sobre.gallery} />
      <AboutDifferentials {...sobre.differentials} />
      <FinalCta id="sobre-cta" {...sobre.finalCta} />
    </SiteShell>
  );
}
