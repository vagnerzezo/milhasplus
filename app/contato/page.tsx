import type { Metadata } from "next";
import { CompanyDetails } from "@/components/contact/CompanyDetails";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactFaqLinks } from "@/components/contact/ContactFaqLinks";
import { ContactForm } from "@/components/contact/ContactForm";
import { FormHero } from "@/components/forms/FormHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { contato } from "@/content/contato";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  ...contato.metadata,
  path: "/contato",
});

export default function Contato() {
  const { eyebrow, ...hero } = contato.hero;

  return (
    <SiteShell
      pageId="pagina-contato"
      status={site.status}
      nav={site.nav}
      currentPath="/contato"
    >
      <FormHero
        id="contato-hero"
        {...hero}
        intro={<SectionEyebrow tone="dark">{eyebrow}</SectionEyebrow>}
        extra={<ContactChannels channels={contato.channels} />}
        form={<ContactForm content={contato.form} />}
      />
      <ContactFaqLinks before={contato.before} />
      <CompanyDetails company={contato.company} />
    </SiteShell>
  );
}
