import { MessageIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FaqDisclosure } from "@/components/ui/FaqDisclosure";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { FaqItem } from "@/content/landing";
import {
  WHATSAPP_DISPLAY,
  whatsappLink,
  type WhatsAppIntent,
} from "@/lib/whatsapp";

type FaqProps = {
  /** Único no site: as rotas visitadas continuam no DOM, ocultas. */
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  items: FaqItem[];
  intent?: WhatsAppIntent;
  cta?: string;
};

export function Faq({
  id,
  eyebrow,
  title,
  text,
  items,
  intent = "geral",
  cta = "faq-geral",
}: FaqProps) {
  return (
    <section id={id} className="border-t border-line bg-white">
      <Container className="flex flex-wrap gap-16 py-20 lg:py-[120px]">
        <div className="flex min-w-0 flex-[1_1_340px] flex-col items-start gap-5">
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <h2 className="text-h2">{title}</h2>
          <p className="text-lg leading-[1.65] text-muted">{text}</p>
          <Button href={whatsappLink(intent)} cta={cta} variant="ghost">
            <MessageIcon size={18} />
            {WHATSAPP_DISPLAY}
          </Button>
        </div>

        <div className="min-w-0 flex-[2_1_560px] border-t border-line">
          {items.map((item) => (
            <FaqDisclosure key={item.question} question={item.question}>
              <p>{item.answer}</p>
            </FaqDisclosure>
          ))}
        </div>
      </Container>
    </section>
  );
}
