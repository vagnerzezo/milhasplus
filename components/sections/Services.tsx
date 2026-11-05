import Image from "next/image";
import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TextLink } from "@/components/ui/TextLink";
import type { Cta } from "@/content/site";
import type { ServiceCard } from "@/content/landing";
import { whatsappLink } from "@/lib/whatsapp";

type SellCard = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  benefits: string[];
  cta: Cta;
  image: { src: string; width: number; height: number };
};

type ServicesProps = {
  eyebrow: string;
  title: { line1: string; line2: string };
  sell: SellCard;
  buy: ServiceCard;
  negotiation: ServiceCard;
  agencies: ServiceCard;
};

export function Services({
  eyebrow,
  title,
  sell,
  buy,
  negotiation,
  agencies,
}: ServicesProps) {
  return (
    <section id="servicos">
      <Container className="py-20 lg:py-[120px]">
        <div className="mb-12 flex flex-col gap-[18px]">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="text-h2">
            {title.line1}
            <br />
            {title.line2}
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-[560fr_380fr]">
          <SellServiceCard card={sell} />
          <div className="grid min-w-0 gap-4">
            <article
              id={buy.id}
              className="on-dark flex flex-col justify-between gap-6 rounded-panel bg-ink p-8 text-cream"
            >
              <ServiceText
                card={buy}
                eyebrowTone="dark"
                textColor="text-muted-dark"
              />
              <TextLink
                href={whatsappLink(buy.cta.intent)}
                cta={buy.cta.cta}
                className="text-sun"
              >
                {buy.cta.label}
              </TextLink>
            </article>
            <article
              id={negotiation.id}
              className="flex flex-col justify-between gap-6 rounded-panel border border-line bg-white p-8"
            >
              <ServiceText card={negotiation} textColor="text-muted" />
              <TextLink
                href={whatsappLink(negotiation.cta.intent)}
                cta={negotiation.cta.cta}
              >
                {negotiation.cta.label}
              </TextLink>
            </article>
          </div>
        </div>

        <article
          id={agencies.id}
          className="mt-4 flex flex-wrap items-center justify-between gap-6 rounded-panel bg-mint px-6 py-9 md:px-10"
        >
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-2">
            <SectionEyebrow>{agencies.eyebrow}</SectionEyebrow>
            <h3 className="text-[28px] leading-tight font-extrabold tracking-[-0.02em]">
              {agencies.title}
            </h3>
            <p className="leading-relaxed text-forest-400">{agencies.text}</p>
          </div>
          <Button
            href={whatsappLink(agencies.cta.intent)}
            cta={agencies.cta.cta}
            variant="dark"
          >
            {agencies.cta.label}
          </Button>
        </article>
      </Container>
    </section>
  );
}

function SellServiceCard({ card }: { card: SellCard }) {
  return (
    <article
      id={card.id}
      className="relative flex min-w-0 flex-col justify-between gap-8 overflow-hidden rounded-panel bg-sun p-8 md:min-h-[520px] md:p-10"
    >
      {/* A largura limita o texto à área livre ao lado da mala. */}
      <div className="relative z-1 flex flex-col gap-4 md:max-w-[55%]">
        <SectionEyebrow>{card.eyebrow}</SectionEyebrow>
        <h3 className="text-[clamp(32px,3.4vw,46px)] leading-[1.02] font-extrabold tracking-[-0.03em]">
          {card.title}
        </h3>
        <p className="text-[17px] leading-relaxed">{card.text}</p>
        <ul className="mt-2 flex flex-col gap-2.5 text-[15px] font-semibold">
          {card.benefits.map((benefit) => (
            <li key={benefit} className="flex gap-2.5">
              <CheckIcon size={18} className="mt-0.5 flex-none" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-1">
        <Button
          href={whatsappLink(card.cta.intent)}
          cta={card.cta.cta}
          variant="dark"
          withArrow
        >
          {card.cta.label}
        </Button>
      </div>

      <div className="absolute -right-5 -bottom-5 hidden aspect-square w-[46%] md:block">
        <Image
          src={card.image.src}
          alt=""
          fill
          sizes="(min-width: 1240px) 340px, (min-width: 1024px) 28vw, 46vw"
          className="object-contain object-right-bottom"
        />
      </div>
    </article>
  );
}

function ServiceText({
  card,
  eyebrowTone = "light",
  textColor,
}: {
  card: ServiceCard;
  eyebrowTone?: "light" | "dark";
  textColor: string;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <SectionEyebrow tone={eyebrowTone}>{card.eyebrow}</SectionEyebrow>
      <h3 className="text-[28px] leading-tight font-extrabold tracking-[-0.02em]">
        {card.title}
      </h3>
      <p className={`leading-relaxed ${textColor}`}>{card.text}</p>
    </div>
  );
}
