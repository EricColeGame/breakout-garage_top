import { defineRouting } from "next-intl/routing";

export const locales = ["en", "ja", "ko", "es"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});
