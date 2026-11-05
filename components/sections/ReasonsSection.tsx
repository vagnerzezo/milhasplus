import type { ReactNode } from "react";
import {
  DollarIcon,
  ExpandIcon,
  EyeIcon,
  MessageIcon,
  PlaneIcon,
  TagIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Reason, ReasonIcon } from "@/content/site";

const icons: Record<ReasonIcon, typeof DollarIcon> = {
  dollar: DollarIcon,
  eye: EyeIcon,
  message: MessageIcon,
  tag: TagIcon,
  plane: PlaneIcon,
  expand: ExpandIcon,
};

const tones: Record<Reason["tone"], { card: string; icon: string }> = {
  sun: { card: "bg-sun", icon: "bg-ink text-sun" },
  ink: { card: "on-dark bg-ink text-cream", icon: "bg-sun text-ink" },
  white: { card: "border border-line bg-white", icon: "bg-ink text-sun" },
  mint: { card: "bg-mint", icon: "bg-ink text-sun" },
};

type ReasonsSectionProps = {
  /** Único no site: as rotas visitadas continuam no DOM, ocultas. */
  id: string;
  eyebrow: string;
  title: { line1: string; line2: string };
  text: string;
  items: readonly Reason[];
  /** Reduz o espaço acima, para quando a seção anterior tem o mesmo fundo. */
  flushTop?: boolean;
  /** Conteúdo abaixo dos cards. */
  children?: ReactNode;
};

export function ReasonsSection({
  id,
  eyebrow,
  title,
  text,
  items,
  flushTop = false,
  children,
}: ReasonsSectionProps) {
  return (
    <section id={id}>
      <Container
        className={`pb-20 lg:pb-[120px] ${flushTop ? "pt-6" : "pt-20 lg:pt-[120px]"}`}
      >
        <SectionHeader eyebrow={eyebrow} title={title} text={text} />

        <div
          className={`grid gap-4 ${items.length === 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3"}`}
        >
          {items.map((item) => {
            const ItemIcon = icons[item.icon];
            const tone = tones[item.tone];
            return (
              <article
                key={item.title}
                className={`flex flex-col gap-4 rounded-card p-8 ${tone.card}`}
              >
                <span
                  aria-hidden="true"
                  className={`flex size-12 items-center justify-center rounded-[14px] ${tone.icon}`}
                >
                  <ItemIcon size={22} />
                </span>
                <h3 className="text-[22px] font-bold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="leading-relaxed">{item.text}</p>
              </article>
            );
          })}
        </div>

        {children}
      </Container>
    </section>
  );
}
