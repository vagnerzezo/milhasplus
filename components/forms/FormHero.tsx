import Image from "next/image";
import type { ReactNode } from "react";
import { CheckIcon } from "@/components/icons";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";
import type { Stat } from "@/content/site";

type FormHeroProps = {
  /** Único no site: as rotas visitadas continuam no DOM, ocultas. */
  id: string;
  breadcrumb: readonly { label: string; href?: string }[];
  /** Selo ou eyebrow acima do título. */
  intro: ReactNode;
  title: { line1: string; line2: string };
  text: string;
  benefits?: readonly string[];
  stat?: Stat;
  /** Conteúdo próprio da página, abaixo do texto. */
  extra?: ReactNode;
  image: { src: string; alt: string };
  form: ReactNode;
};

export function FormHero({
  id,
  breadcrumb,
  intro,
  title,
  text,
  benefits,
  stat,
  extra,
  image,
  form,
}: FormHeroProps) {
  return (
    <section id={id}>
      <Container className="grid gap-x-12 pb-20 lg:grid-cols-[460fr_572fr] lg:grid-rows-[auto_1fr] lg:pb-[104px]">
        {/* A faixa escura ocupa a linha do texto, então nunca fica mais curta que ele. */}
        <div
          aria-hidden="true"
          className="relative col-span-full row-start-1 min-w-0"
        >
          <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 bg-ink" />
        </div>

        <div className="on-dark relative col-start-1 row-start-1 flex min-w-0 flex-col pt-6 pb-20 text-cream md:pt-14 lg:pb-12">
          <Breadcrumb items={breadcrumb} />
          <div className="flex flex-col gap-6">
            {intro}
            <h1 className="text-[clamp(40px,5vw,66px)] leading-[1.03] font-extrabold tracking-[-0.035em]">
              {title.line1}
              <br />
              <span className="text-sun">{title.line2}</span>
            </h1>
            <p className="max-w-[480px] text-lg leading-[1.65] text-muted-dark">
              {text}
            </p>
            {benefits && (
              <ul className="flex flex-col gap-3 text-muted-dark-soft">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <CheckIcon
                      size={20}
                      className="mt-0.5 flex-none text-sun"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            )}
            {stat && (
              <p className="flex max-w-[440px] items-center gap-4 rounded-[18px] bg-forest px-5 py-[18px]">
                <span className="flex-none text-[40px] leading-none font-extrabold tracking-[-0.03em] text-sun">
                  {stat.value}
                </span>
                <span className="text-[15px] leading-[1.45] text-muted-dark-soft">
                  {stat.label}
                </span>
              </p>
            )}
            {extra}
          </div>
        </div>

        <div className="relative -mt-12 min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-[140px]">
          {form}
        </div>

        <div className="hidden pt-6 lg:col-start-1 lg:row-start-2 lg:block">
          <Image
            src={image.src}
            alt={image.alt}
            width={420}
            height={421}
            sizes="420px"
            className="w-full max-w-[420px] rounded-[32px]"
          />
        </div>
      </Container>
    </section>
  );
}
