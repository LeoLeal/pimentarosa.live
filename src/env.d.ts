/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly CONTENTFUL_GRAPHQL_ENDPOINT: string;
  readonly CONTENTFUL_DELIVERY_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
  readonly CONTENTFUL_LOCALES_ENDPOINT: string;
}
