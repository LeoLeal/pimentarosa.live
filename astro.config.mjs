import { defineConfig } from "astro/config";

export default defineConfig({
  experimental: {
    i18n: {
      defaultLocale: "pt-BR",
      locales: ["pt-BR", "en"],
      routingStrategy: "prefix-other-locales",
    },
  },
});
