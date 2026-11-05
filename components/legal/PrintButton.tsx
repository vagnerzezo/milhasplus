"use client";

import { PrintIcon } from "@/components/icons";

export function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      data-cta="legal-imprimir"
      className="inline-flex min-h-12 cursor-pointer items-center gap-2.5 rounded-full border border-cream/30 px-5 text-[15px] font-semibold transition-colors hover:border-cream/70 print:hidden"
    >
      <PrintIcon size={18} />
      {label}
    </button>
  );
}
