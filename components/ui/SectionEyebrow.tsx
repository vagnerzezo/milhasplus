import type { ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
  tone?: "light" | "dark";
};

/** `tone` é o fundo em que o texto aparece. */
export function SectionEyebrow({
  children,
  tone = "light",
}: SectionEyebrowProps) {
  return (
    <p
      className={`font-mono text-xs tracking-[0.1em] uppercase ${tone === "dark" ? "text-sun" : "text-forest"}`}
    >
      {children}
    </p>
  );
}
