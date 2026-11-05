import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { perguntas } from "@/content/perguntas";

const tones = {
  sun: { card: "bg-sun", accent: "" },
  ink: { card: "on-dark bg-ink text-cream", accent: "text-sun" },
  mint: { card: "bg-mint", accent: "" },
} as const;

export function FaqShortcuts({
  shortcuts,
}: {
  shortcuts: typeof perguntas.shortcuts;
}) {
  return (
    <section id="perguntas-atalhos" className="border-t border-line bg-white">
      <Container className="py-20 lg:py-[104px]">
        <div className="mb-10 flex flex-col gap-[18px]">
          <SectionEyebrow>{shortcuts.eyebrow}</SectionEyebrow>
          <h2 className="text-h2">{shortcuts.title}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {shortcuts.items.map((item) => {
            const tone = tones[item.tone];
            return (
              <Link
                key={item.href}
                href={item.href}
                data-cta={item.cta}
                className={`flex flex-col gap-2.5 rounded-[24px] p-[30px] no-underline transition-transform hover:-translate-y-0.5 ${tone.card}`}
              >
                <span
                  className={`font-mono text-xs tracking-[0.1em] ${tone.accent}`}
                >
                  {item.eyebrow}
                </span>
                <strong className="text-2xl tracking-[-0.02em]">
                  {item.title}
                </strong>
                <span className={`mt-2 text-[15px] font-bold ${tone.accent}`}>
                  {item.action}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
