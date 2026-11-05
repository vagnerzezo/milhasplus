import { ClipboardIcon, DollarIcon, UsersIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { Pillar, PillarIcon } from "@/content/site";

const icons: Record<PillarIcon, typeof DollarIcon> = {
  dollar: DollarIcon,
  clipboard: ClipboardIcon,
  users: UsersIcon,
};

type AboutDifferentialsProps = {
  eyebrow: string;
  title: string;
  cta: { label: string; href: string };
  pillars: Pillar[];
};

export function AboutDifferentials({
  eyebrow,
  title,
  cta,
  pillars,
}: AboutDifferentialsProps) {
  return (
    <section id="sobre-diferenciais">
      <Container className="py-20 lg:py-[120px]">
        <div className="rounded-[32px] bg-sun p-[clamp(28px,5vw,64px)]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-[18px]">
              <SectionEyebrow>{eyebrow}</SectionEyebrow>
              <h2 className="text-h2">{title}</h2>
            </div>
            <Button href={cta.href} variant="dark" withArrow>
              {cta.label}
            </Button>
          </div>

          <ul className="grid gap-y-8 border-t border-ink/20 md:grid-cols-3">
            {pillars.map((pillar) => {
              const PillarGlyph = icons[pillar.icon];
              return (
                <li key={pillar.n} className="flex flex-col gap-3 pt-8 md:pr-8">
                  <span
                    aria-hidden="true"
                    className="flex size-[52px] items-center justify-center rounded-full bg-ink text-sun"
                  >
                    <PillarGlyph size={22} />
                  </span>
                  <h3 className="mt-1.5 text-[22px] font-bold tracking-[-0.02em]">
                    {pillar.title}
                  </h3>
                  <p className="leading-relaxed text-forest-400">
                    {pillar.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
