import type { ComponentProps } from "react";

export function Container({ className = "", ...props }: ComponentProps<"div">) {
  return (
    <div className={`mx-auto max-w-[1240px] px-6 ${className}`} {...props} />
  );
}
