import { Fragment } from "react";
import {
  InstagramIcon,
  MailIcon,
  MessageIcon,
  TelegramIcon,
} from "@/components/icons";
import type { ChannelIcon } from "@/content/contato";

const icons: Record<ChannelIcon, typeof MailIcon> = {
  message: MessageIcon,
  instagram: InstagramIcon,
  telegram: TelegramIcon,
  mail: MailIcon,
};

type ContactChannelsProps = {
  channels: readonly {
    icon: ChannelIcon;
    label: string;
    value: string;
    href: string;
    cta: string;
  }[];
};

export function ContactChannels({ channels }: ContactChannelsProps) {
  return (
    <ul className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      {channels.map((channel) => {
        const ChannelGlyph = icons[channel.icon];
        return (
          <li key={channel.label} className="flex min-w-0">
            <a
              href={channel.href}
              data-cta={channel.cta}
              {...(channel.href.startsWith("http") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="flex min-w-0 flex-1 items-center gap-3.5 rounded-[18px] border border-muted-dark-soft/14 bg-forest p-4 no-underline transition-colors hover:border-muted-dark-soft/40"
            >
              <span
                aria-hidden="true"
                className="flex size-[42px] flex-none items-center justify-center rounded-xl bg-sun text-ink"
              >
                <ChannelGlyph size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] text-muted-dark">
                  {channel.label}
                </span>
                {/* Quebra logo após a arroba, para o e-mail não partir no meio do domínio. */}
                <strong className="block text-[15px] [overflow-wrap:anywhere]">
                  {channel.value.split(/(?<=@)/).map((part, index) => (
                    <Fragment key={part}>
                      {index > 0 && <wbr />}
                      {part}
                    </Fragment>
                  ))}
                </strong>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
