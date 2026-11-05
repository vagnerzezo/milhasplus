import Image from "next/image";
import {
  CheckIcon,
  ClockIcon,
  MessageIcon,
  PlaneIcon,
  ShieldIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PillBadge } from "@/components/ui/PillBadge";
import type { Cta } from "@/content/site";
import type { HeroBadgeIcon } from "@/content/landing";
import { whatsappLink } from "@/lib/whatsapp";

const badgeIcons: Record<HeroBadgeIcon, typeof ShieldIcon> = {
  shield: ShieldIcon,
  clock: ClockIcon,
  message: MessageIcon,
};

type Airport = { code: string; city: string };

type BoardingPassData = {
  from: Airport;
  to: Airport;
  payment: string;
  savings: string;
  status: string;
};

type HeroProps = {
  badge: { tag: string; text: string };
  title: { line1: string; line2: string };
  subtitle: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  badges: { icon: HeroBadgeIcon; label: string }[];
  image: { src: string };
  boardingPass: BoardingPassData;
  pixChip: { title: string; text: string };
};

export function Hero({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  badges,
  image,
  boardingPass,
  pixChip,
}: HeroProps) {
  return (
    <section id="hero" className="on-dark bg-ink text-cream">
      <Container className="grid items-center gap-14 pt-12 pb-24 md:pt-[72px] lg:grid-cols-[520fr_440fr]">
        <div className="flex min-w-0 flex-col gap-7">
          <h1 className="text-h1">
            {title.line1}
            <br />
            <span className="text-sun">{title.line2}</span>
          </h1>

          <p className="max-w-[540px] text-[19px] leading-relaxed text-muted-dark">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              href={whatsappLink(primaryCta.intent)}
              cta={primaryCta.cta}
              size="lg"
              withArrow
            >
              {primaryCta.label}
            </Button>
            <Button
              href={whatsappLink(secondaryCta.intent)}
              cta={secondaryCta.cta}
              variant="secondary"
              size="lg"
            >
              {secondaryCta.label}
            </Button>
          </div>

          <ul className="flex flex-wrap gap-x-7 gap-y-3 pt-2 text-sm text-muted-dark">
            {badges.map((item) => {
              const BadgeIcon = badgeIcons[item.icon];
              return (
                <li key={item.label} className="flex items-center gap-2">
                  <BadgeIcon size={18} className="flex-none text-sun" />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>

        <HeroVisual image={image} pass={boardingPass} pixChip={pixChip} />
      </Container>
    </section>
  );
}

function HeroVisual({
  image,
  pass,
  pixChip,
}: Pick<HeroProps, "image" | "pixChip"> & { pass: BoardingPassData }) {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-[440px] min-w-0 md:min-h-[520px]"
    >
      <div className="absolute inset-[0_0_60px_0] overflow-hidden rounded-panel bg-forest-600 sm:left-10">
        <Image
          src={image.src}
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1240px) 480px, (min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      </div>

      <BoardingPass pass={pass} />

      <div className="absolute right-[18px] bottom-[216px] hidden items-center gap-3 rounded-2xl bg-sun px-[18px] py-3.5 text-ink shadow-chip md:flex">
        <span className="flex size-9 items-center justify-center rounded-[10px] bg-ink text-sun">
          <CheckIcon size={18} />
        </span>
        <div>
          <div className="text-[13px] font-extrabold">{pixChip.title}</div>
          <div className="text-xs">{pixChip.text}</div>
        </div>
      </div>
    </div>
  );
}

function BoardingPass({ pass }: { pass: BoardingPassData }) {
  return (
    <div className="absolute bottom-0 left-0 w-[min(380px,92%)] overflow-hidden rounded-[20px] bg-cream text-ink shadow-pass">
      <div className="flex flex-col gap-4 px-[22px] pt-5 pb-[18px]">
        <div className="flex justify-between font-mono text-[11px] tracking-[0.08em] text-muted">
          <span>CARTÃO DE EMBARQUE</span>
          <span>MP · 2026</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <AirportCode airport={pass.from} />
          <div className="flex flex-1 items-center gap-1.5 text-forest">
            <span className="flex-1 border-t-2 border-dashed border-dash" />
            <PlaneIcon size={22} className="flex-none" />
            <span className="flex-1 border-t-2 border-dashed border-dash" />
          </div>
          <AirportCode airport={pass.to} alignEnd />
        </div>
      </div>

      <div className="mx-3.5 border-t-2 border-dashed border-dash-soft" />

      <dl className="grid grid-cols-3 gap-2 px-[22px] pt-4 pb-5 text-xs">
        <PassField label="PAGAMENTO">{pass.payment}</PassField>
        <PassField label="ECONOMIA">{pass.savings}</PassField>
        <PassField label="STATUS">
          <span className="flex items-center gap-1.5">
            <span className="size-[7px] rounded-full bg-success" />
            {pass.status}
          </span>
        </PassField>
      </dl>
    </div>
  );
}

function AirportCode({
  airport,
  alignEnd = false,
}: {
  airport: Airport;
  alignEnd?: boolean;
}) {
  return (
    <div className={alignEnd ? "text-right" : undefined}>
      <div className="text-[40px] leading-none font-extrabold tracking-[-0.03em]">
        {airport.code}
      </div>
      <div className="mt-1 text-xs text-muted">{airport.city}</div>
    </div>
  );
}

function PassField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="font-mono text-[10px] tracking-[0.08em] text-muted">
        {label}
      </dt>
      <dd className="mt-1 font-bold">{children}</dd>
    </div>
  );
}
