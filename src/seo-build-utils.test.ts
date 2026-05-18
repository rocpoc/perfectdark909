import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { artistData } from "./data/artists";

const require = createRequire(import.meta.url);
const {
  getArtistIds,
  getRouteSeoEntries,
  getSiteLocalDate,
  getSitemapRoutes,
  renderRedirects,
  renderSitemap,
} = require("../scripts/seo-build-utils.js");

describe("SEO build artifacts", () => {
  test("sources sitemap artist routes from artist data order", () => {
    const expectedArtistIds = artistData.map((artist) => artist.id);
    const parsedArtistIds = getArtistIds();

    expect(parsedArtistIds).toEqual(expectedArtistIds);

    const artistRoutes = getSitemapRoutes(parsedArtistIds)
      .map((route: { path: string }) => route.path)
      .filter((route: string) => route.startsWith("/artists/"));

    expect(artistRoutes).toEqual(
      expectedArtistIds.map((artistId) => `/artists/${artistId}`)
    );
  });

  test("renders sitemap without deleted or redirect-only pages", () => {
    const sitemap = renderSitemap({
      currentDate: "2026-05-17",
      routes: getSitemapRoutes(getArtistIds()),
    });

    expect(sitemap).toContain("<lastmod>2026-05-17</lastmod>");
    expect(sitemap).toContain(
      "<loc>https://perfectdark909.com/artists/lavender-persuasion</loc>"
    );
    expect(sitemap).not.toContain("/environment");
    expect(sitemap).not.toContain("/music");
    expect(sitemap).not.toContain("/shop");
  });

  test("renders known SPA fallbacks and true unknown-route 404 fallback", () => {
    const redirects = renderRedirects(getArtistIds());

    expect(redirects).toContain(
      "/artists/brick    /artists/brick/index.html    200"
    );
    expect(redirects).toContain(
      "/artists/brick/    /artists/brick/index.html    200"
    );
    expect(redirects).toContain(
      "/artists/lavender-persuasion/epk    /index.html    200"
    );
    expect(redirects).toContain(
      "/artists/lavender-persuasion/epk/    /index.html    200"
    );
    expect(redirects).toContain("/*    /404.html    404");
    expect(redirects).not.toContain("/*    /index.html   200");
    expect(redirects).not.toContain("/environment");
  });

  test("defines prerender metadata for durable crawlable routes", () => {
    const entries = getRouteSeoEntries();
    const brickEntry = entries.find(
      (entry: { path: string }) => entry.path === "/artists/brick"
    );

    expect(entries.map((entry: { path: string }) => entry.path)).toEqual(
      expect.arrayContaining(["/", "/info", "/artists", "/contact", "/mixer"])
    );
    expect(brickEntry).toMatchObject({
      title: "Brick | Perfect Dark Artist",
      canonical: "/artists/brick",
    });
    expect(brickEntry?.structuredData?.[0]).toMatchObject({
      "@type": "Person",
      name: "Brick",
    });
  });

  test("formats sitemap dates as ISO calendar dates", () => {
    expect(getSiteLocalDate(new Date("2026-05-18T00:30:00Z"))).toBe(
      "2026-05-17"
    );
  });

  test("ships a static noindex 404 page for host-level misses", () => {
    const page = readFileSync(join(process.cwd(), "public", "404.html"), "utf8");

    expect(page).toContain('name="robots" content="noindex,follow"');
    expect(page).toContain("<title>Page Not Found | Perfect Dark</title>");
  });
});
