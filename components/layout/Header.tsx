import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Cta, NavLink } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

type HeaderProps = {
  nav: NavLink[];
  cta: Cta;
  activeHref: string;
  ariaCurrent: "page" | "true";
};

export function Header({ nav, cta, activeHref, ariaCurrent }: HeaderProps) {
  const ctaHref = whatsappLink(cta.intent);

  return (
    <header className="on-dark border-b print:hidden border-muted-dark-soft/12 bg-ink">
      <Container className="py-[18px]">
        <nav
          aria-label="Principal"
          className="flex items-center justify-between gap-4"
        >
          <Link
            href="/"
            aria-label="Milhas Plus, início"
            className="flex min-h-11 items-center rounded-[10px]"
          >
            <Logo />
          </Link>

          <ul className="hidden items-center gap-8 text-[15px] font-medium lg:flex">
            {nav.map((item) => {
              const current = item.href === activeHref;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? ariaCurrent : undefined}
                    className={`inline-flex min-h-11 items-center transition-colors ${
                      current
                        ? "font-bold text-cream underline decoration-sun decoration-2 underline-offset-8"
                        : "text-muted-dark-soft no-underline hover:text-cream"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2.5">
            <div className="hidden sm:block">
              <Button href={ctaHref} cta={cta.cta} size="sm">
                {cta.label}
              </Button>
            </div>
            <MobileMenu
              nav={nav}
              activeHref={activeHref}
              ariaCurrent={ariaCurrent}
              ctaLabel={cta.label}
              ctaHref={ctaHref}
              ctaId="menu-vender"
            />
          </div>
        </nav>
      </Container>
    </header>
  );
}
