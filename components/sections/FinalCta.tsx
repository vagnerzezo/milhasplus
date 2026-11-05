import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { Cta } from "@/content/site";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";

const tones = {
  ink: {
    card: "on-dark bg-ink py-[clamp(48px,7vw,96px)] text-cream",
    eyebrow: "dark",
    title: "text-[clamp(38px,5vw,68px)] leading-[1.02]",
    highlight: "text-sun",
    text: "text-muted-dark",
    button: "primary",
  },
  sun: {
    card: "bg-sun py-[clamp(48px,7vw,88px)]",
    eyebrow: "light",
    title: "text-[clamp(34px,4.4vw,56px)] leading-[1.04]",
    highlight: "",
    text: "text-forest-400",
    button: "dark",
  },
} as const;

type FinalCtaProps = {
  /** Único no site: as rotas visitadas continuam no DOM, ocultas. */
  id: string;
  eyebrow: string;
  title: { line1?: string; line2: string; highlight: string };
  text: string;
  primary: Cta;
  secondary?: Cta;
  whatsappPrefix?: string;
  whatsappCta?: string;
  /** Espaço acima do card, para quando a seção anterior tem outro fundo. */
  withTopGap?: boolean;
  tone?: keyof typeof tones;
};

export function FinalCta({
  id,
  eyebrow,
  title,
  text,
  primary,
  secondary,
  whatsappPrefix,
  whatsappCta = "final-geral",
  withTopGap = false,
  tone = "ink",
}: FinalCtaProps) {
  const colors = tones[tone];

  return (
    <section id={id} className={`mt-6 px-6 pb-6 ${withTopGap ? "pt-6" : ""}`}>
      <div className={`mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-12 rounded-cta px-[clamp(28px,6vw,80px)] ${colors.card}`}>
        <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-[22px]">
          <SectionEyebrow tone={colors.eyebrow}>{eyebrow}</SectionEyebrow>
          <h2 className={`font-extrabold tracking-[-0.035em] ${colors.title}`}>
            {title.line1 && (
              <>
                {title.line1}
                <br />
              </>
            )}
            {title.line2}{" "}
            <span className={colors.highlight}>{title.highlight}</span>
          </h2>
          <p className={`max-w-[480px] text-lg leading-relaxed ${colors.text}`}>
            {text}
          </p>
        </div>

        <div className="flex min-w-0 flex-[0_1_380px] flex-col gap-3">
          <Button
            href={primary.href ?? whatsappLink(primary.intent)}
            cta={primary.cta}
            variant={colors.button}
            size="xl"
            withArrow
            fullWidth
          >
            {primary.label}
          </Button>
          {secondary && (
            <Button
              href={secondary.href ?? whatsappLink(secondary.intent)}
              cta={secondary.cta}
              variant="secondary"
              size="lg"
              fullWidth
            >
              {secondary.label}
            </Button>
          )}
          {whatsappPrefix && (
            <a
              href={whatsappLink("geral")}
              target="_blank"
              rel="noopener noreferrer"
              data-cta={whatsappCta}
              className="flex min-h-11 items-center justify-center text-center text-[13px] text-muted-dark hover:text-cream"
            >
              {whatsappPrefix} · {WHATSAPP_DISPLAY}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
