import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.NODE_ENV === 'development' ? undefined : 'https://pimentarosa.live',
  base: process.env.NODE_ENV === 'development' ? undefined : '/',
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en"],
    routingStrategy: "prefix-other-locales",
  },
});
