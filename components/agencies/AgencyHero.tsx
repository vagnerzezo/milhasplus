import Image from "next/image";
import { TelegramIcon } from "@/components/icons";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { agencias } from "@/content/agencias";
import { whatsappLink } from "@/lib/whatsapp";

export function AgencyHero({ hero }: { hero: typeof agencias.hero }) {
  return (
    <section id="agencias-hero" className="on-dark bg-ink text-cream">
      <Container className="pt-6 pb-[112px] md:pt-14">
        <Breadcrumb items={hero.breadcrumb} />
        <div className="flex flex-wrap items-center gap-14">
          <div className="flex min-w-0 flex-[1.1_1_540px] flex-col gap-[26px]">
            <SectionEyebrow tone="dark">{hero.eyebrow}</SectionEyebrow>
            <h1 className="text-[clamp(40px,5.2vw,70px)] leading-[1.03] font-extrabold tracking-[-0.035em]">
              {hero.title.line1}
              <br />
              <span className="text-sun">{hero.title.line2}</span>
            </h1>
            <p className="max-w-[560px] text-lg leading-[1.65] text-muted-dark">
              {hero.text}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                href={whatsappLink(hero.primary.intent)}
                cta={hero.primary.cta}
                size="lg"
                withArrow
              >
                {hero.primary.label}
              </Button>
              <Button
                href={hero.telegram.href}
                cta={hero.telegram.cta}
                variant="secondary"
                size="lg"
              >
                <TelegramIcon size={18} />
                {hero.telegram.label}
              </Button>
            </div>
            <p className="flex flex-wrap items-center gap-x-1 text-sm text-muted-dark">
              {hero.signup.text}
              <TextLink
                href={hero.signup.href}
                cta={hero.signup.cta}
                className="text-sm text-sun"
              >
                {hero.signup.label}
              </TextLink>
            </p>
          </div>

          <div className="relative min-w-0 flex-[1_1_420px]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={644}
              height={644}
              sizes="(min-width: 1024px) 520px, 100vw"
              loading="eager"
              fetchPriority="high"
              className="w-full rounded-[120px_28px_120px_28px]"
            />
            <p className="absolute bottom-7 -left-4 flex flex-col gap-1 rounded-[18px] bg-sun px-5 py-4 text-ink shadow-chip">
              <span className="text-[32px] leading-none font-extrabold tracking-[-0.03em]">
                {hero.stat.value}
              </span>
              <span className="text-[13px] font-semibold">
                {hero.stat.label}
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
