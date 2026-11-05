import type { Step } from "@/content/landing";

/** Passos numerados para fundo escuro. */
export function StepList({ steps }: { steps: readonly Step[] }) {
  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <li key={step.n} className="flex flex-col gap-3.5 pt-8 pr-7 pb-2">
          <div aria-hidden="true" className="flex items-center gap-3">
            <span className="flex size-9 flex-none items-center justify-center rounded-full bg-sun font-mono text-[13px] font-bold text-ink">
              {step.n}
            </span>
            <span className="flex-1 border-t border-dashed border-sun/45" />
          </div>
          <h3 className="mt-2 text-[21px] font-bold tracking-[-0.02em]">
            {step.title}
          </h3>
          <p className="leading-relaxed text-muted-dark">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
