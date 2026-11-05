import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { Cta, Pillar } from "@/content/site";
import type { CompareRow } from "@/content/landing";
import { whatsappLink } from "@/lib/whatsapp";

type DifferentialsProps = {
  eyebrow: string;
  title: string;
  text: string;
  cta: Cta;
  table: {
    caption: string;
    criterion: string;
    ours: string;
    informal: string;
    rows: CompareRow[];
  };
  pillars: Pillar[];
};

export function Differentials({
  eyebrow,
  title,
  text,
  cta,
  table,
  pillars,
}: DifferentialsProps) {
  return (
    <section id="diferenciais" className="border-y border-line bg-white">
      <Container className="flex flex-wrap gap-16 py-20 lg:py-[120px]">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col items-start gap-5">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="text-h2">{title}</h2>
          <p className="text-lg leading-[1.65] text-muted">{text}</p>
          <div className="mt-2">
            <Button href={whatsappLink(cta.intent)} cta={cta.cta}>
              {cta.label}
            </Button>
          </div>
        </div>

        {/* tabIndex: a rolagem horizontal precisa funcionar também pelo teclado. */}
        <div
          role="region"
          aria-label={table.caption}
          tabIndex={0}
          className="min-w-0 flex-[1_1_560px] overflow-x-auto"
        >
          <table className="w-full min-w-[520px] border-collapse text-[15px]">
            <caption className="pb-3.5 text-left font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
              {table.caption}
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-b border-line px-3 py-4 text-left font-semibold text-muted"
                >
                  <span className="sr-only">{table.criterion}</span>
                </th>
                <th
                  scope="col"
                  className="rounded-t-2xl bg-ink px-3 py-4 text-center font-extrabold text-sun"
                >
                  {table.ours}
                </th>
                <th
                  scope="col"
                  className="border-b border-line px-3 py-4 text-center font-semibold text-muted"
                >
                  {table.informal}
                </th>
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="border-b border-line px-3 py-[18px] text-left font-semibold"
                  >
                    {row.label}
                  </th>
                  <td className="border-b border-muted-dark-soft/15 bg-forest px-3 py-[18px] text-center font-bold text-cream">
                    {row.ours}
                  </td>
                  <td className="border-b border-line px-3 py-[18px] text-center text-muted">
                    {row.informal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

      <Container className="pb-20 lg:pb-[120px]">
        <ul className="grid gap-y-8 border-t border-line sm:grid-cols-3">
          {pillars.map((pillar) => (
            <li key={pillar.n} className="flex flex-col gap-2.5 pt-9 pr-8">
              <span
                aria-hidden="true"
                className="font-mono text-xs text-forest"
              >
                {pillar.n}
              </span>
              <h3 className="text-[22px] font-bold tracking-[-0.02em]">
                {pillar.title}
              </h3>
              <p className="leading-relaxed text-muted">{pillar.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
