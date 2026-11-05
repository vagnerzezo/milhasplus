import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // O guia de e-mails é o único disponível. Trocar pela listagem quando ela existir.
  async redirects() {
    return [
      {
        source: "/guias-praticos",
        destination: "/guias-praticos/redirecionamento-de-emails",
        permanent: false,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
