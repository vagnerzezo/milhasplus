import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { contato } from "@/content/contato";

export function CompanyDetails({
  company,
}: {
  company: typeof contato.company;
}) {
  return (
    <section id="contato-empresa">
      <Container className="pt-20 pb-6 lg:pt-[104px]">
        <div className="on-dark flex flex-wrap justify-between gap-x-14 gap-y-8 rounded-[32px] bg-ink p-[clamp(28px,5vw,56px)] text-cream">
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3">
            <SectionEyebrow tone="dark">{company.eyebrow}</SectionEyebrow>
            <h2 className="text-[clamp(28px,3vw,38px)] leading-[1.1] font-extrabold tracking-[-0.03em]">
              {company.title}
            </h2>
            <p className="leading-relaxed text-muted-dark">{company.text}</p>
          </div>
          <dl className="grid min-w-0 flex-[1.4_1_480px] gap-6 sm:grid-cols-2">
            {company.details.map((detail) => (
              <div key={detail.label} className="flex flex-col gap-1.5 pt-4">
                <dt className="font-mono text-[11px] tracking-[0.1em] text-muted-dark">
                  {detail.label}
                </dt>
                <dd className="leading-normal font-bold">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
