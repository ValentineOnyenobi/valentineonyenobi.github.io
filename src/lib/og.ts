// Shared social-sharing (Open Graph / Twitter) metadata for all routes.
// The live site is served from GitHub Pages.
export const SITE_URL = "https://valentineonyenobi.github.io";

// Custom 1200x630 portfolio OG image, served from public/ so it lives on the
// same domain as the site (deep navy + teal branding).
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

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
