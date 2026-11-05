import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/icons";

const variants = {
  primary: "bg-sun text-ink hover:bg-sun-700",
  secondary: "border border-cream/30 text-cream hover:border-cream/70",
  dark: "bg-ink text-sun hover:bg-forest",
  ghost: "border-[1.5px] border-ink text-ink hover:bg-ink/5",
} as const;

const sizes = {
  sm: "min-h-11 px-5 text-[15px] font-bold",
  md: "min-h-13 px-6 text-[15px] font-bold",
  lg: "min-h-14 px-[26px] text-base font-bold",
  xl: "min-h-16 px-7 text-[17px] font-extrabold",
} as const;

const arrowSizes = {
  sm: "min-h-11 pl-5 pr-1.5 text-[15px] font-bold",
  md: "min-h-13 pl-6 pr-2 text-[15px] font-bold",
  lg: "min-h-14 pl-[26px] pr-2.5 text-base font-extrabold",
  xl: "min-h-16 pl-7 pr-2.5 text-[17px] font-extrabold",
} as const;

const arrowColors = {
  primary: "bg-ink text-sun",
  secondary: "bg-cream text-ink",
  dark: "bg-sun text-ink",
  ghost: "bg-ink text-cream",
} as const;

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  withArrow?: boolean;
  fullWidth?: boolean;
  /** Identificador para medição: `<secao>-<intencao>`. */
  cta?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  fullWidth = false,
  cta,
}: ButtonProps) {
  const external = href.startsWith("http");
  const shape = withArrow ? arrowSizes[size] : sizes[size];
  const layout = fullWidth
    ? `flex w-full ${withArrow ? "justify-between" : "justify-center"}`
    : "inline-flex justify-center";

  return (
    <a
      href={href}
      data-cta={cta}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`items-center gap-3 rounded-full text-center no-underline transition-colors ${layout} ${variants[variant]} ${shape}`}
    >
      {children}
      {withArrow && (
        <span
          aria-hidden="true"
          className={`flex size-[38px] flex-none items-center justify-center rounded-full ${arrowColors[variant]}`}
        >
          <ArrowIcon size={16} />
        </span>
      )}
    </a>
  );
}
