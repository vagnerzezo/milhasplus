import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, MessageIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import type { NavLink, SocialIcon, SocialLink } from "@/content/site";

const socialIcons: Record<SocialIcon, typeof MessageIcon> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  message: MessageIcon,
};

type FooterProps = {
  description: string;
  social: SocialLink[];
  columns: { title: string; links: NavLink[] }[];
  copyright: string;
  seal: { src: string; alt: string };
  currentPath: string;
};

export function Footer({
  description,
  social,
  columns,
  copyright,
  seal,
  currentPath,
}: FooterProps) {
  return (
    <footer className="print:hidden bg-cream">
      <Container className="pt-[72px] pb-24 md:pb-8">
        <div className="flex flex-wrap justify-between gap-12 border-b border-line-strong pb-12">
          <div className="flex max-w-[360px] flex-[1_1_300px] flex-col gap-4">
            <Image
              src="/brand/logo.svg"
              alt="Milhas Plus"
              width={140}
              height={58}
            />
            <p className="text-[15px] leading-relaxed text-muted">
              {description}
            </p>
            <ul className="flex gap-2">
              {social.map((item) => {
                const SocialGlyph = socialIcons[item.icon];
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="flex size-11 items-center justify-center rounded-xl border border-line-strong text-ink transition-colors hover:bg-sand"
                    >
                      <SocialGlyph size={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-wrap gap-12">
            {columns.map((column) => (
              <nav
                key={column.title}
                aria-labelledby={`rodape-${column.title}`}
                className="min-w-[150px]"
              >
                <h2
                  id={`rodape-${column.title}`}
                  className="mb-3 font-mono text-[11px] font-normal tracking-[0.1em] text-muted uppercase"
                >
                  {column.title}
                </h2>
                <ul className="flex flex-col">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        aria-current={
                          link.href === currentPath ? "page" : undefined
                        }
                        className={`flex min-h-11 items-center text-[15px] text-ink no-underline hover:underline ${
                          link.href === currentPath ? "font-bold" : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-[13px] text-muted">
          <span>{copyright}</span>
          <Image src={seal.src} alt={seal.alt} width={96} height={24} />
        </div>
      </Container>
    </footer>
  );
}
