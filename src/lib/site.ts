/**
 * Site configuration for multi-domain support (faustoalves.com and faustoalves.com.br).
 * Set NEXT_PUBLIC_SITE_URL in your environment to the canonical URL (e.g. https://faustoalves.com).
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://faustoalves.com";

export function getSiteUrl(): string {
  return SITE_URL.replace(/\/$/, "");
}

/** Origins allowed for API CORS (schedule, etc.) */
export const ALLOWED_ORIGINS = [
  "https://faustoalves.com",
  "https://www.faustoalves.com",
  "https://faustoalves.com.br",
  "https://www.faustoalves.com.br",
  "https://portifolio.faustoalves.com.br",
  "http://localhost:3000",
];
