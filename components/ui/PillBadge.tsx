/** Selo para fundo escuro: etiqueta amarela seguida de uma frase curta. */
export function PillBadge({ tag, text }: { tag: string; text: string }) {
  return (
    <p className="inline-flex items-center gap-2.5 self-start rounded-3xl border border-sun/35 py-1.5 pr-3.5 pl-1.5 text-[13px] text-sun-200">
      <span className="rounded-full bg-sun px-2 py-1 font-mono text-[11px] font-bold tracking-[0.08em] text-ink">
        {tag}
      </span>
      {text}
    </p>
  );
}
