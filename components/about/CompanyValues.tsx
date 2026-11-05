import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { CompanyValue } from "@/content/sobre";

const tones: Record<CompanyValue["tone"], string> = {
  ink: "on-dark bg-ink text-cream",
  white: "border border-line bg-white",
  mint: "bg-mint",
};

type CompanyValuesProps = {
  eyebrow: string;
  title: string;
  items: CompanyValue[];
};

export function CompanyValues({ eyebrow, title, items }: CompanyValuesProps) {
  return (
    <section id="sobre-valores">
      <Container className="py-20 lg:py-[120px]">
        <div className="mb-12 flex flex-col gap-[18px]">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="max-w-[760px] text-h2">{title}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className={`flex min-h-[260px] flex-col gap-3.5 rounded-[26px] p-8 ${tones[item.tone]}`}
            >
              <SectionEyebrow tone={item.tone === "ink" ? "dark" : "light"}>
                {item.eyebrow}
              </SectionEyebrow>
              <h3 className="text-[30px] font-extrabold tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
