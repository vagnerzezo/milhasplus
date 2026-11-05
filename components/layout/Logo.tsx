import Image from "next/image";

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <Image src="/brand/logo-milhas.svg" alt="" width={140} height={58} />
    </span>
  );
}
