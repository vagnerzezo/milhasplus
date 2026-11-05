import {
  DollarIcon,
  PlaneIcon,
  RefreshIcon,
  ShieldIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { MethodIcon, MethodStep } from "@/content/sobre";

const icons: Record<MethodIcon, typeof PlaneIcon> = {
  plane: PlaneIcon,
  dollar: DollarIcon,
  shield: ShieldIcon,
  refresh: RefreshIcon,
};

type MethodologyProps = {
  eyebrow: string;
  title: { line1: string; line2: string };
  text: string;
  steps: MethodStep[];
};

export function Methodology({ eyebrow, title, text, steps }: MethodologyProps) {
  return (
    <section id="sobre-metodologia" className="on-dark bg-forest text-cream">
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

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const StepIcon = icons[step.icon];
            return (
              <li
                key={step.title}
                className="flex flex-col gap-3.5 rounded-card bg-ink p-[30px]"
              >
                <span
                  aria-hidden="true"
                  className="flex size-12 items-center justify-center rounded-[14px] bg-sun text-ink"
                >
                  <StepIcon size={22} />
                </span>
                <SectionEyebrow tone="dark">{step.audience}</SectionEyebrow>
                <h3 className="text-[21px] font-bold tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-muted-dark">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
