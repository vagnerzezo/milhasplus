import type { Metadata } from "next";
import { sharedOpenGraph, sharedSocialImage, SITE_NAME } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

/**
 * Metadata de páginas internas. O Next substitui `openGraph` e `twitter` inteiros,
 * sem mesclar com os do layout, então a imagem social precisa ser repetida aqui.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...sharedOpenGraph,
      title: socialTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [sharedSocialImage],
    },
  };
}
