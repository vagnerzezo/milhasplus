import { CheckIcon, GlobeIcon, PlaneIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { CopyButton } from "@/components/ui/CopyButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { agencias } from "@/content/agencias";

const tones = {
  light: {
    card: "border border-line bg-cream",
    icon: "bg-ink text-sun",
    button: "border-[1.5px] border-ink hover:bg-ink/5",
    item: "border-line-strong text-forest-400",
  },
  dark: {
    card: "on-dark bg-ink text-cream",
    icon: "bg-sun text-ink",
    button: "border border-cream/35 hover:border-cream/70",
    item: "border-muted-dark-soft/15 text-muted-dark-soft",
  },
} as const;

type EmissionContent = typeof agencias.emission;

function PassengerList({
  list,
  copy,
  tone,
  Icon,
}: {
  list: EmissionContent["domestic"] | EmissionContent["international"];
  copy: EmissionContent["copy"];
  tone: keyof typeof tones;
  Icon: typeof PlaneIcon;
}) {
  const colors = tones[tone];
  const copyText = [
    `${copy.prefix} — ${list.title}:`,
    ...list.items.map((item) => `- ${item}`),
  ].join("\n");

  return (
    <article
      className={`flex flex-col gap-5 rounded-[24px] p-8 ${colors.card}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <span
            aria-hidden="true"
            className={`flex size-12 flex-none items-center justify-center rounded-[14px] ${colors.icon}`}
          >
            <Icon size={22} />
          </span>
          <h3 className="text-2xl font-bold tracking-[-0.02em]">
            {list.title}
          </h3>
        </div>
        <CopyButton text={copyText} labels={copy} className={colors.button} />
      </div>
      <ul className="flex flex-col">
        {list.items.map((item) => (
          <li
            key={item}
            className={`flex items-center gap-3 border-b py-[13px] font-medium ${colors.item}`}
          >
            <CheckIcon size={18} className="flex-none" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function EmissionData({ emission }: { emission: EmissionContent }) {
  return (
    <section
      id="agencias-dados-emissao"
      className="border-y border-line bg-white"
    >
      <Container className="py-20 lg:py-[120px]">
        <SectionHeader
          eyebrow={emission.eyebrow}
          title={emission.title}
          text={emission.text}
        />
        <div className="grid gap-4 md:grid-cols-2">
          <PassengerList
            list={emission.domestic}
            copy={emission.copy}
            tone="light"
            Icon={PlaneIcon}
          />
          <PassengerList
            list={emission.international}
            copy={emission.copy}
            tone="dark"
            Icon={GlobeIcon}
          />
        </div>
      </Container>
    </section>
  );
}
