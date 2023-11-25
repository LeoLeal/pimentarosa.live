import { defineConfig } from "astro/config";

export default defineConfig({
  site: 'https://pimentarosa.live',
  base: '/',
  experimental: {
    i18n: {
      defaultLocale: "pt-BR",
      locales: ["pt-BR", "en"],
      routingStrategy: "prefix-other-locales",
    },
  },
});
