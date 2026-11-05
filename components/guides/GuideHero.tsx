import { ClockIcon, MailIcon, MonitorIcon } from "@/components/icons";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { redirecionamento } from "@/content/redirecionamento";

const icons = { clock: ClockIcon, mail: MailIcon, monitor: MonitorIcon };

export function GuideHero({ hero }: { hero: typeof redirecionamento.hero }) {
  return (
    <section id="guia-hero" className="on-dark bg-ink text-cream">
      <Container className="pt-6 pb-16 md:pt-14 lg:pb-[88px]">
        <Breadcrumb items={hero.breadcrumb} />
        <div className="flex max-w-[960px] flex-col gap-[22px]">
          <SectionEyebrow tone="dark">{hero.eyebrow}</SectionEyebrow>
          <h1 className="text-[clamp(38px,4.8vw,64px)] leading-[1.04] font-extrabold tracking-[-0.035em]">
            {hero.title.line1}
            <br />
            <span className="text-sun">{hero.title.line2}</span>
          </h1>
          <p className="max-w-[640px] text-lg leading-[1.65] text-muted-dark">
            {hero.text}
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {hero.chips.map((chip) => {
              const ChipIcon = icons[chip.icon];
              return (
                <li
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-3.5 py-2 text-sm text-muted-dark-soft"
                >
                  <ChipIcon size={16} className="text-sun" />
                  {chip.label}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
