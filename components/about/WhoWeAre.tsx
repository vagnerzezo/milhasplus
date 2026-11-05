import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

type WhoWeAreProps = {
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: { src: string; alt: string };
    more: { paragraphs: string[]; image: { src: string; alt: string } };
    closing: { paragraphs: string[]; image: { src: string; alt: string } };
  };
  leader: {
    eyebrow: string;
    text: string;
    name: string;
    role: string;
    photo: { src: string; alt: string };
  };
};

export function WhoWeAre({ about, leader }: WhoWeAreProps) {
  return (
    <section id="sobre-quem-somos" className="py-20 lg:py-[120px]">
      <Container>
        <div className="flex flex-wrap items-center gap-14 pb-14">
          <div className="relative aspect-[650/600] min-w-0 flex-[0_1_650px] overflow-hidden rounded-panel bg-sand">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(min-width: 700px) 650px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
            <SectionEyebrow>{about.eyebrow}</SectionEyebrow>
            <h2 className="text-h2">{about.title}</h2>
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[17px] leading-[1.7] text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Na tela estreita a imagem sobe, para não juntar dois blocos de texto. */}
        <div className="flex flex-wrap-reverse items-center gap-14 pb-14">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
            {about.more.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[17px] leading-[1.7] text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative aspect-[650/600] min-w-0 flex-[0_1_650px] overflow-hidden rounded-panel bg-sand">
            <Image
              src={about.more.image.src}
              alt={about.more.image.alt}
              fill
              sizes="(min-width: 700px) 650px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-14 pb-14">
          <div className="relative aspect-[650/600] min-w-0 flex-[0_1_650px] overflow-hidden rounded-panel bg-sand">
            <Image
              src={about.closing.image.src}
              alt={about.closing.image.alt}
              fill
              sizes="(min-width: 700px) 650px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
            {about.closing.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[17px] leading-[1.7] text-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="on-dark flex flex-wrap items-center gap-8 rounded-panel bg-ink p-7 text-cream md:p-9">
          <Image
            src={leader.photo.src}
            alt={leader.photo.alt}
            width={140}
            height={140}
            className="size-[140px] flex-none rounded-full object-cover"
          />
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-3">
            <SectionEyebrow tone="dark">{leader.eyebrow}</SectionEyebrow>
            <p className="text-[clamp(19px,1.8vw,23px)] leading-normal font-medium">
              {leader.text}
            </p>
            <p className="text-[15px]">
              <strong className="font-extrabold">{leader.name}</strong>{" "}
              <span className="text-muted-dark">· {leader.role}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
