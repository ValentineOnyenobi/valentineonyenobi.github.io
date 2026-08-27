// Shared social-sharing (Open Graph / Twitter) metadata for all routes.
export const SITE_URL = "https://valentineonyenobi.lovable.app";

// Custom 1200x630 portfolio OG image hosted on the CDN (deep navy + teal branding).
export const OG_IMAGE_URL = `${SITE_URL}/__l5e/assets-v1/019ec988-cbac-4f36-a5bf-53b2b6ffb10c/og-image.png`;

/**
 * Per-route social tags: canonical og:url plus the custom preview image for
 * both Open Graph and Twitter/X cards. Spread into a route's head() meta array.
 */
export function socialMeta(path: string) {
  return [
    { property: "og:url", content: `${SITE_URL}${path}` },
    { property: "og:image", content: OG_IMAGE_URL },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:image", content: OG_IMAGE_URL },
  ];
}
