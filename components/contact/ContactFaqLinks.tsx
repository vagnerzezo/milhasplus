import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { contato } from "@/content/contato";

export function ContactFaqLinks({ before }: { before: typeof contato.before }) {
  return (
    <section id="contato-faq" className="border-t border-line bg-white">
      <Container className="flex flex-wrap gap-12 py-20 lg:py-[104px]">
        <div className="flex min-w-0 flex-[1_1_340px] flex-col items-start gap-[18px]">
          <SectionEyebrow>{before.eyebrow}</SectionEyebrow>
          <h2 className="text-h2">{before.title}</h2>
          <Link
            href={before.all.href}
            data-cta={before.all.cta}
            className="inline-flex min-h-11 items-center text-[15px] font-bold underline underline-offset-4"
          >
            {before.all.label}
          </Link>
        </div>
        <ul className="min-w-0 flex-[2_1_560px] border-t border-line">
          {before.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                data-cta={item.cta}
                className="flex min-h-[72px] items-center justify-between gap-5 border-b border-line py-3 text-lg font-bold no-underline hover:text-forest"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="flex size-9 flex-none items-center justify-center rounded-full bg-sand-soft"
                >
                  <ArrowIcon size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
