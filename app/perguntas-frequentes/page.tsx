import type { Metadata } from "next";
import { FaqCenter } from "@/components/faq/FaqCenter";
import { FaqShortcuts } from "@/components/faq/FaqShortcuts";
import { SiteShell } from "@/components/layout/SiteShell";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { perguntas } from "@/content/perguntas";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  ...perguntas.metadata,
  path: "/perguntas-frequentes",
});

export default function PerguntasFrequentes() {
  const { hero, categories, validated } = perguntas;

  return (
    <SiteShell
      pageId="pagina-perguntas-frequentes"
      status={site.status}
      nav={site.nav}
      currentPath="/perguntas-frequentes"
      floatIntent="duvida"
    >
      {validated && (
        <FaqJsonLd items={categories.flatMap((group) => group.items)} />
      )}
      <FaqCenter
        copy={perguntas.center}
        categories={categories}
        intro={
          <>
            <Breadcrumb items={hero.breadcrumb} />
            <SectionEyebrow tone="dark">{hero.eyebrow}</SectionEyebrow>
            <h1 className="text-[clamp(40px,5.2vw,70px)] leading-[1.03] font-extrabold tracking-[-0.035em]">
              {hero.title.line1}
              <br />
              <span className="text-sun">{hero.title.line2}</span>
            </h1>
            <p className="text-lg leading-[1.65] text-muted-dark">
              {hero.text}
            </p>
          </>
        }
      />
      <FaqShortcuts shortcuts={perguntas.shortcuts} />
    </SiteShell>
  );
}
