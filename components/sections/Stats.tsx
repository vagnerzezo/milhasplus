import { Container } from "@/components/ui/Container";
import type { Stat } from "@/content/site";

export function Stats({ id, items }: { id: string; items: Stat[] }) {
  return (
    // Sem fundo próprio: a margem negativa colapsa com a seção e um fundo cobriria o hero.
    <section id={id} aria-label="Resultados">
      <Container className="relative -mt-10">
        <dl className="grid divide-y divide-line rounded-3xl bg-white shadow-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col-reverse gap-1 px-7 py-6 lg:px-9 lg:py-8"
            >
              <dt className="text-[15px] text-muted">{item.label}</dt>
              <dd className="text-stat">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
