import Image from "next/image";
import { BuildingIcon, MessageIcon, ShieldIcon } from "@/components/icons";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { TrustIcon } from "@/content/sobre";

const icons: Record<TrustIcon, typeof ShieldIcon> = {
  shield: ShieldIcon,
  building: BuildingIcon,
  message: MessageIcon,
};

type AboutHeroProps = {
  breadcrumb: { home: string; current: string };
  eyebrow: string;
  title: { line1: string; line2: string };
  text: string;
  badges: { icon: TrustIcon; label: string }[];
};

export function AboutHero({
  breadcrumb,
  eyebrow,
  title,
  text,
  badges,
}: AboutHeroProps) {
  return (
    <section id="sobre-hero" className="on-dark bg-ink text-cream">
      <Container className="pt-6 pb-24 md:pt-14 md:pb-[104px]">
        <Breadcrumb
          items={[
            { label: breadcrumb.home, href: "/" },
            { label: breadcrumb.current },
          ]}
        />

        <div className="flex flex-wrap items-center gap-14">
          <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-[26px]">
            <SectionEyebrow tone="dark">{eyebrow}</SectionEyebrow>
            <h1 className="text-[clamp(42px,5.4vw,72px)] leading-[1.03] font-extrabold tracking-[-0.035em]">
              {title.line1}
              <br />
              <span className="text-sun">{title.line2}</span>
            </h1>
            <p className="max-w-[600px] text-[19px] leading-[1.65] text-muted-dark">
              {text}
            </p>
            <ul className="flex flex-wrap gap-x-7 gap-y-3 pt-1 text-sm text-muted-dark">
              {badges.map((badge) => {
                const BadgeIcon = icons[badge.icon];
                return (
                  <li key={badge.label} className="flex items-center gap-2">
                    <BadgeIcon size={18} className="flex-none text-sun" />
                    {badge.label}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hidden flex-[0_1_380px] justify-center md:flex">
            <Image
              src="/brand/logo-mark.svg"
              alt=""
              width={340}
              height={340}
              className="w-full max-w-[340px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
