import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { StepList } from "@/components/ui/StepList";
import type { Step } from "@/content/landing";

type StepsSectionProps = {
  /** Único no site: as rotas visitadas continuam no DOM, ocultas. */
  id: string;
  eyebrow: string;
  title: { line1: string; line2: string };
  text: string;
  items: readonly Step[];
};

export function StepsSection({
  id,
  eyebrow,
  title,
  text,
  items,
}: StepsSectionProps) {
  return (
    <section id={id} className="on-dark bg-forest text-cream">
      <Container className="py-20 lg:py-[120px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
          <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-[18px]">
            <SectionEyebrow tone="dark">{eyebrow}</SectionEyebrow>
            <h2 className="text-h2">
              {title.line1}
              <br />
              {title.line2}
            </h2>
          </div>
          <p className="max-w-[440px] flex-[1_1_360px] text-[17px] leading-[1.65] text-muted-dark">
            {text}
          </p>
        </div>
        <StepList steps={items} />
      </Container>
    </section>
  );
}
