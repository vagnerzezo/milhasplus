import Image from "next/image";
import { StarIcon } from "@/components/icons";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { Quote } from "@/content/landing";

type TestimonialsProps = {
  eyebrow: string;
  title: string;
  rating: { score: string; stars: number; label: string };
  featured: readonly Quote[];
  secondary: readonly Quote[];
  carousel: {
    label: string;
    previous: string;
    next: string;
    goTo: string;
    slide: string;
  };
  team: { image: string; alt: string; title: string; text: string };
};

export function Testimonials({
  eyebrow,
  title,
  rating,
  featured,
  secondary,
  carousel,
  team,
}: TestimonialsProps) {
  return (
    <section id="depoimentos">
      <Container className="py-20 lg:py-[120px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-[18px]">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2 className="text-h2">{title}</h2>
          </div>
          <p
            role="img"
            aria-label={rating.label}
            className="flex items-center gap-3.5 rounded-2xl border border-line bg-white px-5 py-3.5"
          >
            <span className="text-[32px] font-extrabold tracking-[-0.03em]">
              {rating.score}
            </span>
            <span className="flex gap-0.5 text-sun">
              {Array.from({ length: rating.stars }, (_, index) => (
                <StarIcon key={index} size={20} />
              ))}
            </span>
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <TestimonialCarousel items={featured} copy={carousel} />

          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-4">
            {secondary.map((item) => (
              <figure
                key={item.name}
                className="flex flex-1 flex-col justify-between gap-5 rounded-3xl border border-line bg-white p-7"
              >
                <blockquote className="text-[17px] leading-[1.55] text-forest-400">
                  {item.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3 text-sm">
                  <Image
                    src={item.image}
                    alt=""
                    width={44}
                    height={44}
                    className="flex-none rounded-full"
                  />
                  <span>
                    <strong className="block font-bold">{item.name}</strong>
                    {item.detail && (
                      <span className="block text-muted">{item.detail}</span>
                    )}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <div className="relative min-h-[280px] min-w-0 flex-[1_1_520px] overflow-hidden rounded-panel bg-sand">
            <Image
              src={team.image}
              alt={team.alt}
              fill
              sizes="(min-width: 1024px) 700px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-[1_1_360px] flex-col justify-between gap-5 rounded-panel bg-sun p-9">
            <h3 className="text-[28px] leading-[1.15] font-extrabold tracking-[-0.02em]">
              {team.title}
            </h3>
            <p className="leading-relaxed">{team.text}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
