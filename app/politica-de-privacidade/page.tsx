import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { privacidade } from "@/content/privacidade";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  ...privacidade.metadata,
  path: "/politica-de-privacidade",
});

export default function PoliticaDePrivacidade() {
  return (
    <SiteShell
      pageId="pagina-politica-de-privacidade"
      status={site.status}
      nav={site.nav}
      currentPath="/politica-de-privacidade"
    >
      <LegalDocument idPrefix="privacidade" content={privacidade.document} />
    </SiteShell>
  );
}
