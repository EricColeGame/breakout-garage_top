export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Breakout Garage Wiki",
  shortName: "Breakout Garage",
  logoText: "BG",
  tagline: "Car Builds, Engine Tuning & Drag Racing Guides",
  description: "Breakout Garage Wiki covers car builds, engine tuning, drag racing, parts, controls, money tips, multiplayer, updates, and beginner guides for the PC Early Access racing sim.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://breakout-garage.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://breakout-garage.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3445190/",
  heroVideoId: "Gc0TyM7WARc", // Breakout Garage official Alpha gameplay showcase
  social: {
    discord: "https://discord.com/invite/KEzYRwyG4X",
    youtube: "https://www.youtube.com/@Breakout-Garage",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
