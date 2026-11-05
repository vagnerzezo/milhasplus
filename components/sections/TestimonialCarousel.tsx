"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowIcon, QuoteIcon } from "@/components/icons";
import type { Quote } from "@/content/landing";

type TestimonialCarouselProps = {
  items: readonly Quote[];
  copy: {
    label: string;
    previous: string;
    next: string;
    goTo: string;
    slide: string;
  };
};

const arrowButton =
  "flex size-11 flex-none cursor-pointer items-center justify-center rounded-full border border-cream/30 transition-colors hover:border-cream/70";

/** O deslize é o scroll nativo do navegador, sem biblioteca e sem troca automática. */
export function TestimonialCarousel({ items, copy }: TestimonialCarouselProps) {
  const [active, setActive] = useState(0);
  const track = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    const element = track.current;
    if (!element) return;
    const target = (index + items.length) % items.length;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    element.scrollTo({
      left: target * element.clientWidth,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const onScroll = () => {
    const element = track.current;
    if (!element) return;
    setActive(Math.round(element.scrollLeft / element.clientWidth));
  };

  return (
    <section
      aria-roledescription="carrossel"
      aria-label={copy.label}
      className="on-dark flex min-w-0 flex-[2_1_560px] flex-col gap-8 rounded-panel bg-ink p-7 text-cream md:p-11"
    >
      <QuoteIcon className="flex-none text-sun" />

      {/* Com foco, as setas do teclado também deslizam. */}
      <div
        ref={track}
        tabIndex={0}
        onScroll={onScroll}
        className="flex flex-1 snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <figure
            key={item.name}
            role="group"
            aria-roledescription="depoimento"
            aria-label={`${index + 1} ${copy.slide} ${items.length}`}
            className="flex w-full flex-none snap-start flex-col justify-between gap-8"
          >
            <blockquote className="text-[clamp(20px,2vw,26px)] leading-[1.45] font-medium tracking-[-0.01em]">
              {item.quote}
            </blockquote>
            <figcaption className="flex items-center gap-3.5">
              <Image
                src={item.image}
                alt=""
                width={52}
                height={52}
                className="flex-none rounded-full"
              />
              <span>
                <span className="block font-bold">{item.name}</span>
                {item.detail && (
                  <span className="block text-sm text-muted-dark">
                    {item.detail}
                  </span>
                )}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div className="-ml-3.5 flex">
          {items.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`${copy.goTo} ${item.name}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => goTo(index)}
              className="flex size-11 cursor-pointer items-center justify-center rounded-full"
            >
              <span
                aria-hidden="true"
                className={`size-2.5 rounded-full transition-colors ${index === active ? "bg-sun" : "bg-cream/30"}`}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={copy.previous}
            onClick={() => goTo(active - 1)}
            className={arrowButton}
          >
            <ArrowIcon size={18} className="rotate-180" />
          </button>
          <button
            type="button"
            aria-label={copy.next}
            onClick={() => goTo(active + 1)}
            className={arrowButton}
          >
            <ArrowIcon size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
