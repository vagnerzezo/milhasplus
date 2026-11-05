import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  cta?: string;
  className?: string;
};

export function TextLink({
  href,
  children,
  cta,
  className = "",
}: TextLinkProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      data-cta={cta}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`inline-flex min-h-11 items-center self-start text-[15px] font-bold underline underline-offset-4 ${className}`}
    >
      {children}
    </a>
  );
}
