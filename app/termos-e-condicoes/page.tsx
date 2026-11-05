import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { site } from "@/content/site";
import { termos } from "@/content/termos";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  ...termos.metadata,
  path: "/termos-e-condicoes",
});

export default function TermosECondicoes() {
  return (
    <SiteShell
      pageId="pagina-termos-e-condicoes"
      status={site.status}
      nav={site.nav}
      currentPath="/termos-e-condicoes"
    >
      <LegalDocument idPrefix="termos" content={termos.document} />
    </SiteShell>
  );
}
