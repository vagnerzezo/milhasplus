import { DollarIcon, PlaneIcon, UsersIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { ValueCard, ValueIcon } from "@/content/landing";

const icons: Record<ValueIcon, typeof DollarIcon> = {
  dollar: DollarIcon,
  plane: PlaneIcon,
  users: UsersIcon,
};

type ValuePropositionProps = {
  eyebrow: string;
  title: { line1: string; line2: string };
  text: string;
  cards: ValueCard[];
};

export function ValueProposition({
  eyebrow,
  title,
  text,
  cards,
}: ValuePropositionProps) {
  return (
    <section
      id="proposta-de-valor"
      className="pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]"
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-12 pb-16">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-[18px]">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2 className="text-h2">
              {title.line1}
              <br />
              {title.line2}
            </h2>
          </div>
          <p className="max-w-[440px] flex-[1_1_360px] text-lg leading-[1.65] text-muted">
            {text}
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => {
            const CardIcon = icons[card.icon];
            return (
              <li
                key={card.title}
                className="flex flex-col gap-4 rounded-card border border-line bg-white p-8"
              >
                <span
                  aria-hidden="true"
                  className="flex size-12 items-center justify-center rounded-[14px] bg-ink text-sun"
                >
                  <CardIcon size={22} />
                </span>
                <h3 className="text-[22px] font-bold tracking-[-0.02em]">
                  {card.title}
                </h3>
                <p className="leading-relaxed text-muted">{card.text}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
