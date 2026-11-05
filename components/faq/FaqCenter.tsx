"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { SearchIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FaqDisclosure } from "@/components/ui/FaqDisclosure";
import { TextLink } from "@/components/ui/TextLink";
import type { FaqCategory, FaqCenterCopy, FaqEntry } from "@/content/perguntas";
import { whatsappLink } from "@/lib/whatsapp";

const ALL = "todas";

/** Sem acentos e em minúsculas: "prazo" e "PRÁZO" encontram o mesmo texto. */
function normalize(text: string) {
  return text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/** Inclui a categoria: quem busca "segurança" espera achar as perguntas dessa seção. */
function matches(item: FaqEntry, category: string, words: string[]) {
  const text = normalize(`${category} ${item.question} ${item.answer}`);
  return words.every((word) => text.includes(word));
}

function HelpCard({
  copy,
  cta,
  className,
}: {
  copy: FaqCenterCopy["help"];
  cta: string;
  className: string;
}) {
  return (
    <div
      className={`flex-col items-start gap-3 rounded-card bg-sun p-6 ${className}`}
    >
      <strong className="text-lg tracking-[-0.01em]">{copy.title}</strong>
      <span className="text-[15px] leading-[1.55] text-forest-400">
        {copy.text}
      </span>
      <Button href={whatsappLink("duvida")} cta={cta} variant="dark" size="sm">
        {copy.link}
      </Button>
    </div>
  );
}

type FaqCenterProps = {
  /** Título e textos do hero, que vêm prontos do servidor. */
  intro: ReactNode;
  copy: FaqCenterCopy;
  categories: readonly FaqCategory[];
};

export function FaqCenter({ intro, copy, categories }: FaqCenterProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const results = useRef<HTMLDivElement>(null);

  // Nem todo navegador abre um <details> ao chegar por uma âncora.
  useEffect(() => {
    const openFromHash = () => {
      const target = document.getElementById(
        decodeURIComponent(window.location.hash.slice(1)),
      );
      if (target instanceof HTMLDetailsElement) target.open = true;
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  const words = normalize(query).split(/\s+/).filter(Boolean);
  const countIn = (group: FaqCategory) =>
    group.items.filter((item) => matches(item, group.label, words)).length;
  const total = categories.reduce((sum, group) => sum + countIn(group), 0);
  const visible = categories.reduce(
    (sum, group) =>
      category === ALL || category === group.id ? sum + countIn(group) : sum,
    0,
  );

  const filters = [
    { id: ALL, label: copy.allLabel, count: total },
    ...categories.map((group) => ({
      id: group.id,
      label: group.label,
      count: countIn(group),
    })),
  ];

  return (
    <>
      <section id="perguntas-hero" className="on-dark bg-ink text-cream">
        <Container className="pt-6 pb-20 md:pt-14 lg:pb-[104px]">
          <div className="flex max-w-[760px] flex-col gap-[22px]">
            {intro}
            <form
              role="search"
              className="relative mt-2"
              onSubmit={(event) => {
                event.preventDefault();
                results.current?.scrollIntoView();
              }}
            >
              <label htmlFor="faq-busca" className="sr-only">
                {copy.searchLabel}
              </label>
              <SearchIcon
                size={20}
                className="pointer-events-none absolute top-1/2 left-[22px] -translate-y-1/2 text-muted"
              />
              <input
                id="faq-busca"
                type="search"
                autoComplete="off"
                enterKeyHint="search"
                placeholder={copy.searchPlaceholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="min-h-16 w-full rounded-full bg-white pr-6 pl-14 text-[17px] font-medium text-ink shadow-chip placeholder:text-muted"
              />
            </form>
          </div>
        </Container>
      </section>

      <section id="perguntas-lista" aria-label={copy.sectionLabel}>
        <Container className="flex flex-col gap-10 pt-14 pb-20 lg:flex-row lg:items-start lg:gap-12 lg:pt-[72px] lg:pb-[112px]">
          <aside className="flex min-w-0 flex-col gap-5 lg:sticky lg:top-6 lg:w-[280px] lg:flex-none">
            <div
              role="group"
              aria-label={copy.filterLabel}
              className="flex flex-wrap gap-2 lg:flex-col lg:gap-1.5"
            >
              {filters.map((filter) => {
                const selected = filter.id === category;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setCategory(filter.id)}
                    className={`flex min-h-12 cursor-pointer items-center justify-between gap-3 rounded-[14px] px-4 text-left text-[15px] transition-colors ${
                      selected
                        ? "bg-ink font-bold text-cream"
                        : "bg-sand-soft font-semibold hover:bg-sand lg:bg-transparent"
                    }`}
                  >
                    {filter.label}
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-xs ${
                        selected ? "bg-sun text-ink" : "bg-sand-soft text-muted"
                      }`}
                    >
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>
            <HelpCard
              copy={copy.help}
              cta="faq-ajuda-whatsapp"
              className="hidden lg:flex"
            />
          </aside>

          <div ref={results} className="flex min-w-0 flex-1 flex-col gap-7">
            {/* Fica sempre na página: leitores de tela só anunciam mudanças em regiões que já existem. */}
            <p role="status" className="text-sm text-muted empty:hidden">
              {words.length > 0 &&
                `${visible} ${visible === 1 ? copy.resultOne : copy.resultMany}`}
            </p>

            {/* Itens filtrados só ficam ocultos: seguem no HTML e mantêm o estado aberto. */}
            {categories.map((group) => {
              const inCategory = category === ALL || category === group.id;
              return (
                <div
                  key={group.id}
                  hidden={!inCategory || countIn(group) === 0}
                >
                  <h2 className="mb-1 border-b-2 border-ink pb-3 font-mono text-xs font-bold tracking-[0.1em] text-forest uppercase">
                    {group.label}
                  </h2>
                  {group.items.map((item) => (
                    <FaqDisclosure
                      key={item.id}
                      id={item.id}
                      question={item.question}
                      hidden={!matches(item, group.label, words)}
                    >
                      <p>{item.answer}</p>
                      {item.link && (
                        <TextLink
                          href={item.link.href}
                          cta={item.link.cta}
                          className="text-ink"
                        >
                          {item.link.label}
                        </TextLink>
                      )}
                    </FaqDisclosure>
                  ))}
                </div>
              );
            })}

            {visible === 0 && (
              <div className="flex flex-col items-center gap-2 rounded-card border border-dashed border-line-strong bg-white p-10 text-center">
                <strong className="text-xl">{copy.empty.title}</strong>
                <span className="text-muted">{copy.empty.text}</span>
                <TextLink
                  href={whatsappLink("duvida")}
                  cta="faq-vazio-whatsapp"
                  className="self-center text-ink"
                >
                  {copy.empty.link}
                </TextLink>
              </div>
            )}

            <HelpCard
              copy={copy.help}
              cta="faq-ajuda-whatsapp-mobile"
              className="flex lg:hidden"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
