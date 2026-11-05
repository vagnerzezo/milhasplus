import { FlowToggle } from "@/components/how-it-works/FlowToggle";
import { InfoIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { StepList } from "@/components/ui/StepList";
import type { Flow } from "@/content/landing";
import { whatsappLink } from "@/lib/whatsapp";

type HowItWorksProps = {
  eyebrow: string;
  title: { line1: string; line2: string };
  tabsLabel: string;
  flows: Flow[];
  note: { title: string; text: string };
};

export function HowItWorks({
  eyebrow,
  title,
  tabsLabel,
  flows,
  note,
}: HowItWorksProps) {
  return (
    <section id="como-funciona" className="on-dark bg-forest text-cream">
      <Container className="py-20 lg:py-[120px]">
        <FlowToggle
          tabsLabel={tabsLabel}
          heading={
            <div className="flex flex-col gap-[18px]">
              <SectionEyebrow tone="dark">{eyebrow}</SectionEyebrow>
              <h2 className="text-h2">
                {title.line1}
                <br />
                {title.line2}
              </h2>
            </div>
          }
          flows={flows.map((flow) => ({
            id: flow.id,
            label: flow.label,
            panel: <StepList steps={flow.steps} />,
            ctaLabel: flow.cta.label,
            ctaHref: whatsappLink(flow.cta.intent),
            cta: flow.cta.cta,
          }))}
          note={
            <div className="flex items-start gap-4 sm:items-center">
              <span
                aria-hidden="true"
                className="flex size-11 flex-none items-center justify-center rounded-xl border border-sun/40 text-sun"
              >
                <InfoIcon size={20} />
              </span>
              <p className="leading-[1.55] text-muted-dark-soft">
                <strong className="font-bold text-cream">{note.title}</strong>{" "}
                {note.text}
              </p>
            </div>
          }
        />
      </Container>
    </section>
  );
}
