import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TopBar } from "@/components/layout/TopBar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { site, type NavLink } from "@/content/site";
import type { WhatsAppIntent } from "@/lib/whatsapp";

type SiteShellProps = {
  /** Identifica a página, como pagina-inicio. */
  pageId: string;
  status: string;
  nav: NavLink[];
  currentPath: string;
  /** Item do menu em destaque, quando a página não é o próprio destino dele. */
  activeNav?: string;
  /** Item do rodapé em destaque, quando a página não é o próprio destino dele. */
  activeFooter?: string;
  floatIntent?: WhatsAppIntent;
  children: ReactNode;
};

export function SiteShell({
  pageId,
  status,
  nav,
  currentPath,
  activeNav = currentPath,
  activeFooter = currentPath,
  floatIntent,
  children,
}: SiteShellProps) {
  return (
    <>
      <a
        href="#conteudo"
        className="on-dark sr-only z-50 rounded-full bg-sun px-5 py-3 font-bold text-ink focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:px-5 focus:py-3"
      >
        Pular para o conteúdo
      </a>
      <TopBar status={status} legal={site.legal} />
      <Header
        nav={nav}
        cta={site.headerCta}
        activeHref={activeNav}
        ariaCurrent={activeNav === currentPath ? "page" : "true"}
      />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <div id={pageId}>{children}</div>
      </main>
      <Footer {...site.footer} currentPath={activeFooter} />
      <WhatsAppFloat intent={floatIntent} />
    </>
  );
}
