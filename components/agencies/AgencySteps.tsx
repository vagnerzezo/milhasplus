import type { ReactNode } from "react";
import { CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { agencias } from "@/content/agencias";
import { whatsappLink } from "@/lib/whatsapp";

function StepCard({
  tag,
  title,
  text,
  card,
  tagColors,
  textColor,
  children,
}: {
  tag: string;
  title: string;
  text: string;
  card: string;
  tagColors: string;
  textColor: string;
  children: ReactNode;
}) {
  return (
    <li className={`flex flex-col gap-3.5 rounded-[24px] p-8 ${card}`}>
      <span
        className={`self-start rounded-full px-3 py-1.5 font-mono text-[13px] font-bold ${tagColors}`}
      >
        {tag}
      </span>
      <h3 className="mt-1 text-[23px] font-bold tracking-[-0.02em]">{title}</h3>
      <p className={`leading-relaxed ${textColor}`}>{text}</p>
      <div className="mt-auto pt-3">{children}</div>
    </li>
  );
}

export function AgencySteps({ steps }: { steps: typeof agencias.steps }) {
  const { send, share, finish } = steps;

  return (
    <section id="agencias-como-emitir">
      <Container className="py-20 lg:py-[120px]">
        <SectionHeader
          eyebrow={steps.eyebrow}
          title={steps.title}
          text={steps.text}
        />
        <ol className="grid gap-4 lg:grid-cols-3">
          <StepCard
            tag={send.tag}
            title={send.title}
            text={send.text}
            card="border border-line bg-white"
            tagColors="bg-sun text-ink"
            textColor="text-muted"
          >
            <div className="flex flex-wrap gap-2.5">
              <Button
                href={whatsappLink(send.whatsapp.intent)}
                cta={send.whatsapp.cta}
                variant="dark"
                size="sm"
              >
                {send.whatsapp.label}
              </Button>
              <Button
                href={send.telegram.href}
                cta={send.telegram.cta}
                variant="ghost"
                size="sm"
              >
                {send.telegram.label}
              </Button>
            </div>
          </StepCard>

          <StepCard
            tag={share.tag}
            title={share.title}
            text={share.text}
            card="on-dark bg-ink text-cream"
            tagColors="bg-sun text-ink"
            textColor="text-muted-dark"
          >
            <div
              aria-hidden="true"
              className="flex flex-col gap-2 rounded-[18px] bg-forest p-3.5 text-ink"
            >
              <div className="flex w-[78%] flex-col gap-1.5 self-end rounded-[14px_14px_4px_14px] bg-mint p-2">
                {share.chat.legs.map(([from, to]) => (
                  <div
                    key={from}
                    className="flex items-center rounded-lg bg-white px-2.5 py-2 text-xs font-extrabold"
                  >
                    {from}
                    <span className="mx-2 flex-1 border-t-[1.5px] border-dashed border-dash" />
                    {to}
                  </div>
                ))}
                <span className="text-right text-[11px] text-forest-400">
                  {share.chat.caption}
                </span>
              </div>
              <div className="self-end rounded-[14px_14px_4px_14px] bg-mint px-3 py-2 text-[13px]">
                {share.chat.passengers}
              </div>
              <div className="self-start rounded-[14px_14px_14px_4px] bg-sun px-3 py-2 text-[13px] font-bold">
                {share.chat.reply}
              </div>
            </div>
          </StepCard>

          <StepCard
            tag={finish.tag}
            title={finish.title}
            text={finish.text}
            card="bg-sun"
            tagColors="bg-ink text-sun"
            textColor="text-forest-400"
          >
            <div
              aria-hidden="true"
              className="flex items-center gap-3 rounded-[18px] bg-white px-[18px] py-4"
            >
              <span className="flex size-9 flex-none items-center justify-center rounded-[10px] bg-ink text-sun">
                <CheckIcon size={18} />
              </span>
              <span>
                <strong className="block text-sm">{finish.done.title}</strong>
                <span className="text-[13px] text-muted">
                  {finish.done.text}
                </span>
              </span>
            </div>
          </StepCard>
        </ol>
      </Container>
    </section>
  );
}
