import { EyeIcon, TagIcon, TrendingIcon, ZapIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import type { AgencyBenefitIcon } from "@/content/agencias";

const icons: Record<AgencyBenefitIcon, typeof TagIcon> = {
  tag: TagIcon,
  zap: ZapIcon,
  eye: EyeIcon,
  trending: TrendingIcon,
};

type AgencyBenefitsProps = {
  label: string;
  items: readonly { icon: AgencyBenefitIcon; title: string; text: string }[];
};

export function AgencyBenefits({ label, items }: AgencyBenefitsProps) {
  return (
    <section id="agencias-vantagens" aria-label={label}>
      <Container className="relative -mt-12">
        <ul className="grid rounded-[24px] bg-white shadow-card sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const ItemIcon = icons[item.icon];
            return (
              <li
                key={item.title}
                className="flex flex-col gap-2.5 border-b border-line p-7 last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 xl:border-r xl:border-b-0 xl:last:border-r-0"
              >
                <span
                  aria-hidden="true"
                  className="flex size-11 items-center justify-center rounded-xl bg-ink text-sun"
                >
                  <ItemIcon size={20} />
                </span>
                <h2 className="text-lg font-bold tracking-[-0.01em]">
                  {item.title}
                </h2>
                <p className="text-[15px] leading-[1.55] text-muted">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
