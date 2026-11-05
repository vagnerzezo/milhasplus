"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AlertIcon, CheckIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CopyButton } from "@/components/ui/CopyButton";
import type {
  Airline,
  CopySlot,
  EmailClient,
  EmailGuideContent,
} from "@/content/redirecionamento";

const copyStyle =
  "border-[1.5px] border-ink bg-white hover:bg-ink/5 min-h-11 text-[13px]";

function Toggle({
  pressed,
  onClick,
  className,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  className: string;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`cursor-pointer rounded-full transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

function CopyField({
  label,
  value,
  labels,
}: {
  label: string;
  value: string;
  labels: EmailGuideContent["copy"];
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 rounded-[14px] border border-line bg-cream px-4 py-3.5">
      <span className="block w-full font-mono text-xs tracking-[0.08em] text-muted">
        {label}
      </span>
      <code className="min-w-0 flex-[1_1_200px] font-mono text-[15px] font-bold [overflow-wrap:anywhere]">
        {value}
      </code>
      <CopyButton
        text={value}
        labels={labels}
        ariaLabel={`${labels.idle}: ${label}`}
        className={copyStyle}
      />
    </div>
  );
}

export function EmailForwardGuide({ content }: { content: EmailGuideContent }) {
  const [client, setClient] = useState<EmailClient>("gmail");
  const [step, setStep] = useState(0);
  const [airline, setAirline] = useState<Airline>("smiles");
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const shouldFocus = useRef(false);

  const { steps, name: clientName } = content.clients[client];
  const total = steps.length;
  const finished = step >= total;

  // O botão clicado some com o passo: o foco precisa ir para onde a pessoa continua.
  useEffect(() => {
    if (!shouldFocus.current) return;
    shouldFocus.current = false;
    const target = root.current?.querySelector<HTMLElement>(
      finished ? "[data-guide-done]" : `[data-guide-step="${step}"]`,
    );
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ block: "nearest" });
  }, [step, finished]);

  const goTo = (index: number) => {
    shouldFocus.current = true;
    setStep(index);
  };

  const slot = (kind: CopySlot) =>
    kind === "team" ? (
      <CopyField
        label={content.teamLabel}
        value={content.teamEmail}
        labels={content.copy}
      />
    ) : (
      <CopyField
        label={`${content.senderLabel} ${content.airlines[airline].toUpperCase()}`}
        value={content.senders[airline]}
        labels={content.copy}
      />
    );

  return (
    <section id="guia-redirecionamento" aria-label={content.sectionLabel}>
      <Container className="flex flex-col gap-10 pt-14 pb-20 lg:flex-row lg:items-start lg:pb-24">
        <div ref={root} className="flex min-w-0 flex-1 flex-col gap-5">
          <div
            role="group"
            aria-label={content.clientsLabel}
            className="flex gap-1 self-start rounded-full border border-line bg-white p-1.5"
          >
            {(Object.keys(content.clients) as EmailClient[]).map((key) => (
              <Toggle
                key={key}
                pressed={client === key}
                onClick={() => {
                  setClient(key);
                  setStep(0);
                }}
                className={`min-h-[46px] px-[26px] text-[15px] tracking-[0.04em] ${
                  client === key
                    ? "bg-ink font-extrabold text-sun"
                    : "font-bold text-muted hover:text-ink"
                }`}
              >
                {content.clients[key].name}
              </Toggle>
            ))}
          </div>

          <div className="flex items-center gap-3.5">
            <div aria-hidden="true" className="flex flex-1 gap-1.5">
              {steps.map((item, index) => (
                <span
                  key={item.title}
                  className={`h-[5px] flex-1 rounded-full ${index <= step ? "bg-sun" : "bg-line-strong"}`}
                />
              ))}
            </div>
            <span className="font-mono text-xs tracking-[0.06em] text-muted">
              {finished
                ? content.finished
                : `${content.stepWord} ${step + 1} ${content.ofWord} ${total}`}
            </span>
          </div>

          <ol className="flex flex-col gap-2.5">
            {steps.map((item, index) => {
              const active = index === step;
              const done = index < step;
              const bodyId = `${id}-${client}-${index}`;
              const usesSender =
                item.slot1 === "sender" || item.slot2 === "sender";

              return (
                <li
                  key={`${client}-${item.title}`}
                  className={`rounded-card bg-white ${active ? "border-2 border-ink shadow-card" : "border border-line"}`}
                >
                  <h2>
                    <button
                      type="button"
                      data-guide-step={index}
                      aria-expanded={active}
                      aria-controls={bodyId}
                      onClick={() => goTo(index)}
                      className="flex min-h-16 w-full cursor-pointer scroll-mt-6 items-center gap-3.5 rounded-card px-5 py-3 text-left md:px-[22px]"
                    >
                      <span
                        aria-hidden="true"
                        className={`flex size-8 flex-none items-center justify-center rounded-full text-sm font-extrabold ${
                          active
                            ? "bg-ink text-sun"
                            : done
                              ? "bg-sun"
                              : "bg-line text-muted"
                        }`}
                      >
                        {done ? "✓" : index + 1}
                      </span>
                      <span
                        className={`text-[17px] font-extrabold tracking-[-0.01em] ${active || done ? "" : "text-muted"}`}
                      >
                        {item.title}
                      </span>
                      <span className="ml-auto flex-none pl-2 text-[13px] text-muted">
                        {done
                          ? content.statusDone
                          : active
                            ? content.statusNow
                            : ""}
                      </span>
                    </button>
                  </h2>

                  {/* Os passos fechados ficam no HTML, para buscadores e para abrir sem esperar. */}
                  <div
                    id={bodyId}
                    hidden={!active}
                    className="px-5 pb-5 md:pr-[22px] md:pb-[22px] md:pl-[68px]"
                  >
                    <div className="flex flex-col gap-4 leading-[1.65] text-forest-400">
                      <p>{item.p1}</p>

                      {usesSender && (
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-bold text-ink">
                            {content.airlineLabel}
                          </span>
                          {(Object.keys(content.airlines) as Airline[]).map(
                            (key) => (
                              <Toggle
                                key={key}
                                pressed={airline === key}
                                onClick={() => setAirline(key)}
                                className={`min-h-11 border-[1.5px] px-3.5 text-[13px] text-ink ${
                                  airline === key
                                    ? "border-ink bg-sun font-extrabold"
                                    : "border-line-strong bg-white font-semibold hover:border-ink"
                                }`}
                              >
                                {content.airlines[key]}
                              </Toggle>
                            ),
                          )}
                        </div>
                      )}

                      {item.slot1 && slot(item.slot1)}
                      {item.p2 && <p>{item.p2}</p>}
                      {item.slot2 && slot(item.slot2)}

                      {item.links && (
                        <div className="flex flex-wrap gap-2.5">
                          {item.links.map((link) => (
                            <Button
                              key={link.href}
                              href={link.href}
                              cta={link.cta}
                              variant={link.secondary ? "ghost" : "primary"}
                              size="sm"
                            >
                              {link.label}
                            </Button>
                          ))}
                        </div>
                      )}

                      {item.image && (
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          width={item.image.width}
                          height={item.image.height}
                          sizes="(min-width: 1024px) 720px, 100vw"
                          className="w-full rounded-2xl border border-line"
                        />
                      )}

                      <div className="flex flex-wrap gap-2.5">
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => goTo(index - 1)}
                            className="min-h-[54px] cursor-pointer rounded-full border-[1.5px] border-line-strong bg-white px-5 text-[15px] font-bold text-ink hover:border-ink"
                          >
                            {content.back}
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => goTo(index + 1)}
                          className="min-h-[54px] flex-1 cursor-pointer rounded-full bg-ink px-6 text-[15px] font-extrabold tracking-[0.02em] whitespace-nowrap text-sun hover:bg-forest"
                        >
                          {index === total - 1 ? content.finish : content.next}
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* A região existe mesmo vazia: leitores de tela só anunciam mudanças nela assim. */}
          <div role="status">
            {finished && (
              <div
                data-guide-done
                tabIndex={-1}
                className="on-dark flex flex-wrap items-center gap-4 rounded-[22px] bg-ink px-6 py-[22px] text-cream outline-none"
              >
                <span
                  aria-hidden="true"
                  className="flex size-[52px] flex-none items-center justify-center rounded-full bg-sun text-ink"
                >
                  <CheckIcon size={24} />
                </span>
                <div className="min-w-0 flex-[1_1_260px]">
                  <strong className="block text-[19px]">
                    {content.done.title} {clientName}!
                  </strong>
                  <span className="text-[15px] text-muted-dark">
                    {content.done.text}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => goTo(0)}
                  className="min-h-[46px] cursor-pointer rounded-full border border-cream/35 px-[18px] text-sm font-semibold hover:border-cream/70"
                >
                  {content.done.restart}
                </button>
              </div>
            )}
          </div>

          <div
            role="note"
            className="flex items-start gap-3.5 rounded-[20px] border-[1.5px] border-sun-700 bg-sun-100 px-6 py-5"
          >
            <AlertIcon size={22} className="mt-0.5 flex-none" />
            <p className="text-[15px] leading-relaxed text-forest-400">
              <strong className="text-ink">{content.warning.title}</strong>
              {content.warning.before}
              <strong className="text-ink">{content.warning.strong}</strong>
              {content.warning.after}
            </p>
          </div>
        </div>

        <aside className="flex min-w-0 flex-col gap-4 lg:sticky lg:top-6 lg:w-[340px] lg:flex-none">
          <div className="flex flex-col gap-3.5 rounded-[24px] border border-line bg-white p-6">
            <strong className="text-[17px]">{content.quick.title}</strong>
            {[
              { label: content.teamLabel, value: content.teamEmail },
              ...(Object.keys(content.airlines) as Airline[]).map((key) => ({
                label: `${content.senderLabel} ${content.airlines[key].toUpperCase()}`,
                value: content.senders[key],
              })),
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1.5 border-t border-sand-soft pt-3"
              >
                <span className="font-mono text-[11px] tracking-[0.08em] text-muted">
                  {item.label}
                </span>
                <div className="flex items-center gap-2.5">
                  <code className="min-w-0 flex-1 font-mono text-[13px] font-bold [overflow-wrap:anywhere]">
                    {item.value}
                  </code>
                  <CopyButton
                    text={item.value}
                    labels={content.copy}
                    ariaLabel={`${content.copy.idle}: ${item.label}`}
                    className={copyStyle}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start gap-3 rounded-[24px] bg-sun p-6">
            <strong className="text-[17px]">{content.help.title}</strong>
            <span className="text-[15px] leading-[1.55] text-forest-400">
              {content.help.text}
            </span>
            <Button
              href={content.help.href}
              cta={content.help.cta}
              variant="dark"
              size="sm"
            >
              {content.help.link}
            </Button>
          </div>
        </aside>
      </Container>
    </section>
  );
}
