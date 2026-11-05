import Link from "next/link";
import { PrintButton } from "@/components/legal/PrintButton";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export type LegalSection = {
  id: string;
  title: string;
  clauses: { term?: string; text?: string; list?: string[] }[];
  cta?: { label: string; href: string; cta: string };
};

export type LegalDocumentContent = {
  breadcrumb: { label: string; href?: string }[];
  eyebrow: string;
  title: string;
  text: string;
  updated: string;
  print: string;
  indexLabel: string;
  indexTitle: string;
  sectionLabel: string;
  related: { label: string; href: string }[];
  sections: LegalSection[];
  closing: { before: string; link: string; href: string; after: string };
};

export function LegalDocument({
  idPrefix,
  content,
}: {
  /** Prefixo das seções da página, como "termos" em termos-hero. */
  idPrefix: string;
  content: LegalDocumentContent;
}) {
  return (
    <>
      {/* Na impressão o fundo escuro some: sem trocar a cor, o texto claro ficaria ilegível. */}
      <section
        id={`${idPrefix}-hero`}
        className="on-dark bg-ink text-cream print:bg-transparent print:text-ink print:**:text-ink"
      >
        <Container className="pt-6 pb-16 md:pt-14 lg:pb-[88px] print:px-0 print:py-0">
          <div className="print:hidden">
            <Breadcrumb items={content.breadcrumb} />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
            <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-5">
              <SectionEyebrow tone="dark">{content.eyebrow}</SectionEyebrow>
              <h1 className="text-[clamp(40px,5vw,66px)] leading-[1.03] font-extrabold tracking-[-0.035em]">
                {content.title}
              </h1>
              <p className="max-w-[600px] text-lg leading-[1.65] text-muted-dark">
                {content.text}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <span className="font-mono text-xs tracking-[0.06em] text-muted-dark-soft">
                {content.updated}
              </span>
              <PrintButton label={content.print} />
            </div>
          </div>
        </Container>
      </section>

      <section id={`${idPrefix}-clausulas`} aria-label={content.sectionLabel}>
        <Container className="flex flex-col gap-10 pt-14 pb-20 lg:flex-row lg:items-start lg:gap-14 lg:pt-[72px] lg:pb-[104px] print:px-0 print:pt-6 print:pb-0">
          <nav
            aria-label={content.indexLabel}
            className="flex min-w-0 flex-col gap-1 lg:sticky lg:top-6 lg:w-[260px] lg:flex-none print:hidden"
          >
            <span className="mb-2.5 font-mono text-[11px] tracking-[0.1em] text-muted">
              {content.indexTitle}
            </span>
            {content.sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex min-h-11 items-center gap-3 rounded-xl px-3.5 py-2 text-[15px] font-semibold text-forest-400 no-underline transition-colors hover:bg-sand-soft"
              >
                <span className="font-mono text-xs text-forest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.title}
              </a>
            ))}
            <div className="mt-5 flex flex-col items-start border-t border-line-strong pt-3">
              {content.related.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <article className="flex max-w-[780px] min-w-0 flex-1 flex-col gap-4">
            {content.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-titulo`}
                className="flex scroll-mt-6 flex-col gap-[18px] rounded-[24px] border border-line bg-white p-6 md:px-9 md:py-8 print:break-inside-avoid print:border-0 print:p-0"
              >
                <h2
                  id={`${section.id}-titulo`}
                  className="flex items-center gap-3.5 text-2xl font-extrabold tracking-[-0.02em]"
                >
                  <span className="flex size-10 flex-none items-center justify-center rounded-xl bg-sun font-mono text-sm font-bold">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                {section.clauses.map((clause) => (
                  <div
                    key={clause.text ?? clause.term}
                    className="border-t border-sand-soft pt-[18px] text-[17px] leading-[1.75] text-forest-400 first-of-type:border-t-0 first-of-type:pt-0"
                  >
                    {clause.term && (
                      <strong className="block font-extrabold text-ink">
                        {clause.term}
                      </strong>
                    )}
                    {clause.text}
                    {clause.list && (
                      <ul className="mt-2 flex list-disc flex-col gap-2 pl-5">
                        {clause.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                {section.cta && (
                  <div className="print:hidden">
                    <Button
                      href={section.cta.href}
                      cta={section.cta.cta}
                      variant="dark"
                    >
                      {section.cta.label}
                    </Button>
                  </div>
                )}
              </section>
            ))}

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {content.closing.before}
              <Link
                href={content.closing.href}
                className="font-bold underline underline-offset-2"
              >
                {content.closing.link}
              </Link>
              {content.closing.after}
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
