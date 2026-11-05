import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

type QuoteOption = {
  eyebrow: string;
  title: string;
  text: string;
  tone: "ink" | "sun";
};

type QuoteOptionsProps = {
  eyebrow: string;
  title: string;
  items: readonly QuoteOption[];
};

export function QuoteOptions({ eyebrow, title, items }: QuoteOptionsProps) {
  return (
    <section id="comprar-opcoes">
      <Container className="py-20 lg:py-[120px]">
        <div className="mb-12 flex flex-col gap-[18px]">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="max-w-[760px] text-h2">{title}</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => {
            const dark = item.tone === "ink";
            return (
              <article
                key={item.title}
                className={`flex flex-col gap-3.5 rounded-panel p-9 ${
                  dark ? "on-dark bg-ink text-cream" : "bg-sun"
                }`}
              >
                <SectionEyebrow tone={dark ? "dark" : "light"}>
                  {item.eyebrow}
                </SectionEyebrow>
                <h3 className="text-[28px] leading-tight font-extrabold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p
                  className={`leading-relaxed ${dark ? "text-muted-dark" : ""}`}
                >
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
