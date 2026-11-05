import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

type SectionHeaderProps = {
  eyebrow: string;
  title: { line1: string; line2?: string };
  text: string;
};

/** Título à esquerda e texto de apoio à direita, para fundo claro. */
export function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
      <div className="flex min-w-0 flex-[1_1_820px] flex-col gap-[18px]">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h2 className="text-h2">
          {title.line1}
          {title.line2 && (
            <>
              <br />
              {title.line2}
            </>
          )}
        </h2>
      </div>
      <p className="max-w-[340px] flex-[1_1_300px] text-[17px] leading-[1.65] text-muted">
        {text}
      </p>
    </div>
  );
}
