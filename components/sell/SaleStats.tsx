import type { Stat } from "@/content/site";

export function SaleStats({
  stats,
  legal,
}: {
  stats: readonly Stat[];
  legal: string;
}) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 rounded-card border border-line bg-white px-8 py-7">
      <dl className="contents">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="text-[15px] text-muted">{stat.label}</dt>
            <dd className="text-[clamp(28px,2.8vw,38px)] font-extrabold tracking-[-0.03em]">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="text-sm text-muted">{legal}</p>
    </div>
  );
}
