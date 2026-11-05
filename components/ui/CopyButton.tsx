"use client";

import { useEffect, useRef, useState } from "react";

type CopyState = "idle" | "copied" | "failed";

type CopyButtonProps = {
  text: string;
  labels: Record<CopyState, string>;
  className: string;
  /** Nome para leitores de tela, quando vários botões têm o mesmo texto. */
  ariaLabel?: string;
};

export function CopyButton({
  text,
  labels,
  className,
  ariaLabel,
}: CopyButtonProps) {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    let result: CopyState = "copied";
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // O navegador pode bloquear a área de transferência; a lista segue visível para copiar à mão.
      result = "failed";
    }
    setState(result);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2500);
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={state === "idle" ? ariaLabel : undefined}
        className={`min-h-11 flex-none cursor-pointer rounded-full px-[18px] text-sm font-bold transition-colors ${className}`}
      >
        {labels[state]}
      </button>
      <span role="status" className="sr-only">
        {state === "idle" ? "" : labels[state]}
      </span>
    </>
  );
}
