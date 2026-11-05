"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import type { NavLink } from "@/content/site";

type MobileMenuProps = {
  nav: NavLink[];
  activeHref: string;
  ariaCurrent: "page" | "true";
  ctaLabel: string;
  ctaHref: string;
  ctaId: string;
};

/**
 * Usa <dialog> nativo: showModal() já prende o foco, fecha com Esc,
 * torna o fundo inerte e devolve o foco ao botão que abriu.
 */
export function MobileMenu({
  nav,
  activeHref,
  ariaCurrent,
  ctaLabel,
  ctaHref,
  ctaId,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogId = useId();

  const close = () => dialogRef.current?.close();

  useEffect(() => {
    // Ao girar a tela ou redimensionar para desktop, o menu deixa de existir.
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) dialogRef.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Abrir menu"
        aria-expanded={open}
        aria-controls={dialogId}
        aria-haspopup="dialog"
        onClick={() => {
          dialogRef.current?.showModal();
          setOpen(true);
        }}
        className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-cream/30 text-cream"
      >
        <MenuIcon size={20} />
      </button>

      <dialog
        ref={dialogRef}
        id={dialogId}
        aria-label="Menu"
        onClose={() => setOpen(false)}
        className="on-dark m-0 h-dvh max-h-none w-full max-w-none bg-ink p-6 text-cream"
      >
        <div className="flex h-full flex-col gap-8">
          <div className="flex justify-end">
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={close}
              className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-cream/30 text-cream"
            >
              <CloseIcon size={20} />
            </button>
          </div>

          <ul className="flex flex-col">
            {nav.map((item) => (
              <li
                key={item.href}
                className="border-b border-muted-dark-soft/12"
              >
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={
                    item.href === activeHref ? ariaCurrent : undefined
                  }
                  className={`flex min-h-14 items-center text-xl font-bold no-underline ${
                    item.href === activeHref ? "text-sun" : "text-cream"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button href={ctaHref} cta={ctaId} size="lg" fullWidth>
            {ctaLabel}
          </Button>
        </div>
      </dialog>
    </div>
  );
}
