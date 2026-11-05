import { Container } from "@/components/ui/Container";

type TopBarProps = {
  status: string;
  legal: string;
};

export function TopBar({ status, legal }: TopBarProps) {
  return (
    <div className="print:hidden bg-ink font-mono text-xs tracking-[0.06em] text-muted-dark-soft uppercase">
      <Container className="flex items-center justify-between gap-x-7 gap-y-2 py-2.5">
        <span className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="size-2 flex-none rounded-full bg-sun"
          />
          {status}
        </span>
        <span className="hidden md:inline">{legal}</span>
      </Container>
    </div>
  );
}
