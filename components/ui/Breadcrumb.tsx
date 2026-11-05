import Link from "next/link";
import { Fragment } from "react";

type BreadcrumbItem = { label: string; href?: string };

/** Para fundo escuro. O último item é a página atual. */
export function Breadcrumb({ items }: { items: readonly BreadcrumbItem[] }) {
  return (
    <nav aria-label="Você está em" className="mb-6 text-sm md:mb-10">
      <ol className="flex flex-wrap items-center gap-x-2.5 text-muted-dark">
        {items.map((item, index) => (
          <Fragment key={item.label}>
            {index > 0 && <li aria-hidden="true">/</li>}
            {item.href ? (
              <li>
                <Link
                  href={item.href}
                  className="relative inline-flex min-h-11 items-center underline after:absolute after:inset-y-0 after:-right-2 after:-left-2 after:content-[''] underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ) : (
              <li aria-current="page" className="font-semibold text-cream">
                {item.label}
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
