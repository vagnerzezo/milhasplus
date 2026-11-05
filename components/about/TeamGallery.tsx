import { TeamCarousel } from "@/components/about/TeamCarousel";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import type { GalleryCarouselCopy, GalleryPhoto } from "@/content/sobre";

type TeamGalleryProps = {
  eyebrow: string;
  title: { line1: string; line2: string };
  text: string;
  photos: GalleryPhoto[];
  carousel: GalleryCarouselCopy;
};

export function TeamGallery({
  eyebrow,
  title,
  text,
  photos,
  carousel,
}: TeamGalleryProps) {
  return (
    <section id="sobre-equipe" className="border-y border-line bg-white">
      <Container className="py-20 lg:py-[120px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-[18px]">
            <SectionEyebrow>{eyebrow}</SectionEyebrow>
            <h2 className="text-h2">
              {title.line1}
              <br />
              {title.line2}
            </h2>
          </div>
          <p className="max-w-[440px] flex-[1_1_360px] text-[17px] leading-[1.7] text-muted">
            {text}
          </p>
        </div>

        <TeamCarousel photos={photos} copy={carousel} />
      </Container>
    </section>
  );
}
