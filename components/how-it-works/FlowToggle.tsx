"use client";

import {
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/Button";

export type FlowOption = {
  id: string;
  label: string;
  panel: ReactNode;
  ctaLabel: string;
  ctaHref: string;
  cta: string;
};

type FlowToggleProps = {
  heading: ReactNode;
  tabsLabel: string;
  flows: FlowOption[];
  note: ReactNode;
};

/**
 * Tabs no padrão WAI-ARIA, com ativação automática: setas, Home e End trocam o
 * fluxo. Os dois painéis chegam prontos do servidor; aqui só se alterna qual aparece.
 */
export function FlowToggle({
  heading,
  tabsLabel,
  flows,
  note,
}: FlowToggleProps) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const current = flows[active];

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = flows.length - 1;
    const targets: Record<string, number> = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    const next = targets[event.key];
    if (next === undefined) return;

    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <>
      <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
        <div className="min-w-0 flex-[1_1_520px]">{heading}</div>
        <div
          role="tablist"
          aria-label={tabsLabel}
          className="flex gap-1 rounded-full bg-ink p-1.5"
        >
          {flows.map((flow, index) => {
            const selected = index === active;
            return (
              <button
                key={flow.id}
                ref={(element) => {
                  tabs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${flow.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${flow.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={onKeyDown}
                className={`min-h-11 cursor-pointer rounded-full px-4 text-sm whitespace-nowrap transition-colors sm:px-5 ${
                  selected
                    ? "bg-sun font-bold text-ink"
                    : "font-semibold text-muted-dark-soft hover:text-cream"
                }`}
              >
                {flow.label}
              </button>
            );
          })}
        </div>
      </div>

      {flows.map((flow, index) => (
        <div
          key={flow.id}
          role="tabpanel"
          id={`${baseId}-panel-${flow.id}`}
          aria-labelledby={`${baseId}-tab-${flow.id}`}
          tabIndex={0}
          hidden={index !== active}
        >
          {flow.panel}
        </div>
      ))}

      <div className="mt-14 flex flex-wrap items-center justify-between gap-5 rounded-card bg-ink px-6 py-7 md:px-8">
        <div className="min-w-0 flex-[1_1_400px]">{note}</div>
        <Button href={current.ctaHref} cta={current.cta}>
          {current.ctaLabel}
        </Button>
      </div>
    </>
  );
}
