"use client";

import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ArrowIcon } from "@/components/icons";
import type { GalleryCarouselCopy, GalleryPhoto } from "@/content/sobre";

type TeamCarouselProps = {
  photos: GalleryPhoto[];
  copy: GalleryCarouselCopy;
};

const arrowButton =
  "flex size-11 flex-none cursor-pointer items-center justify-center rounded-full border border-line-strong transition-colors hover:border-ink disabled:cursor-default disabled:opacity-40 disabled:hover:border-line-strong";

const subscribeToNothing = () => () => {};

function Photo({ photo }: { photo: GalleryPhoto }) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={275}
      height={345}
      sizes="275px"
      draggable={false}
      className="rounded-3xl bg-sand select-none"
    />
  );
}

/** Sem troca automática, como o carrossel de depoimentos. */
export function TeamCarousel({ photos, copy }: TeamCarouselProps) {
  // O Swiper chama `new Date()` ao renderizar, o que o prerender do cacheComponents
  // proíbe. O servidor entrega a mesma fileira de fotos, e o Swiper assume no cliente.
  const isClient = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const syncEdges = (instance: SwiperInstance) =>
    setEdges({ start: instance.isBeginning, end: instance.isEnd });

  return (
    <div className="flex flex-col gap-6">
      {isClient ? (
        <Swiper
          modules={[A11y]}
          slidesPerView="auto"
          spaceBetween={16}
          onSwiper={(instance) => {
            setSwiper(instance);
            syncEdges(instance);
          }}
          onProgress={syncEdges}
          a11y={{
            containerRoleDescriptionMessage: copy.roleDescription,
            containerMessage: copy.label,
            itemRoleDescriptionMessage: copy.slideRole,
            slideLabelMessage: `{{index}} ${copy.slideOf} {{slidesLength}}`,
          }}
          className="w-full"
        >
          {photos.map((photo) => (
            // A largura é a das fotos originais (275 × 345), para não ampliá-las.
            <SwiperSlide key={photo.src} className="w-[275px]!">
              <Photo photo={photo} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ul className="flex gap-4 overflow-hidden">
          {photos.map((photo) => (
            <li key={photo.src} className="w-[275px] flex-none">
              <Photo photo={photo} />
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-end gap-2">
        <button
          type="button"
          aria-label={copy.previous}
          disabled={edges.start}
          onClick={() => swiper?.slidePrev()}
          className={arrowButton}
        >
          <ArrowIcon size={18} className="rotate-180" />
        </button>
        <button
          type="button"
          aria-label={copy.next}
          disabled={!swiper || edges.end}
          onClick={() => swiper?.slideNext()}
          className={arrowButton}
        >
          <ArrowIcon size={18} />
        </button>
      </div>
    </div>
  );
}
