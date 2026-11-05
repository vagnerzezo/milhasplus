import type { ReactNode } from "react";
import { PlusIcon } from "@/components/icons";

type FaqDisclosureProps = {
  id?: string;
  question: string;
  hidden?: boolean;
  children: ReactNode;
};

export function FaqDisclosure({
  id,
  question,
  hidden,
  children,
}: FaqDisclosureProps) {
  return (
    <details id={id} hidden={hidden} className="group border-b border-line">
      <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 py-6 text-[19px] font-bold tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
        {question}
        <span
          aria-hidden="true"
          className="flex size-9 flex-none items-center justify-center rounded-full bg-sand-soft transition-transform duration-200 group-open:rotate-45"
        >
          <PlusIcon size={16} />
        </span>
      </summary>
      <div className="flex flex-col gap-3.5 pb-6 leading-[1.65] text-muted md:pr-14">
        {children}
      </div>
    </details>
  );
}
