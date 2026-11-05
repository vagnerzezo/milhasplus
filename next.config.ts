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
        destination: "/redirecionamento-de-emails",
        permanent: false,
      },
      // URL antiga do guia.
      {
        source: "/guias-praticos/redirecionamento-de-emails",
        destination: "/redirecionamento-de-emails",
        permanent: true,
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
