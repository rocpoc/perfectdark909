# Goals

## Goal 59: Optimize Perfect Dark For Generative AI Search

Source: Google Search Central, "Optimizing your website for generative AI features on Google Search" (last updated 2026-05-15)

### Objective

Improve Perfect Dark's visibility and usefulness in Google Search generative AI features by strengthening normal SEO fundamentals, publishing distinctive first-party content, and keeping the site easy for crawlers, users, and browser agents to understand.

### Google Guidance To Apply

- Treat generative AI search optimization as SEO, not a separate hack. AI Overviews and AI Mode are rooted in Google's core Search ranking, quality, indexing, and retrieval systems.
- Prioritize original, non-commodity, people-first content with first-hand perspective from the label, artists, events, releases, and environmental work.
- Keep pages crawlable, indexable, snippet-eligible, canonical, and technically clear.
- Use semantic HTML where it improves human and assistive-technology readability.
- Make JavaScript-rendered content accessible to Google and avoid hiding important content behind unavailable interactions.
- Improve page experience across devices, including latency, layout stability, and clear separation between main content and supporting UI.
- Use high-quality, relevant images and video with descriptive alt text and performant delivery.
- Reduce duplicate or thin URLs so crawl resources focus on pages that matter.
- Keep structured data useful but restrained; there is no special schema for generative AI search.
- Do not create `llms.txt`, AI-only markdown files, keyword-variant pages, artificial "mentions", or content rewritten only for AI systems.

### Implementation Plan

1. Technical SEO and crawlability audit

- Confirm production pages return indexable HTML and are not blocked by `robots.txt`, redirects, or client-only failure states.
- Verify canonical URLs, Open Graph/Twitter metadata, sitemap entries, and redirect behavior for `/`, `/artists`, `/info`, `/environment`, `/contact`, `/music`, `/mixer`, `/subscribe`, and external shop flows.
- Add a repeatable SEO check in the build or QA process for title, description, canonical, image alt, and JSON-LD presence.

2. Structured data cleanup

- Centralize JSON-LD generation so each page can add valid schema through the existing `SEO` component or a shared helper.
- Keep the homepage organization/music-brand data, but validate type choice and fields against Google's rich result guidelines.
- Add page-appropriate schema only where it helps: `Organization`, `BreadcrumbList`, `Person` or `MusicGroup` for artist profiles if those profiles become indexable pages, and `WebSite`/`WebPage` metadata for core pages.

3. Content upgrades for non-commodity value

- Expand `/info` into clearer sections about the label's origin, geographic footprint, curatorial perspective, event philosophy, environmental initiatives, and artist roster.
- Add first-party context to `/environment`: specific Tracks for Trees history, partner details, measurable outcomes when available, event examples, and original media.
- Turn artist modal content into crawlable artist profile URLs or server-renderable page content so artist bios, images, booking details, and EPK links are discoverable without relying on modal state.
- Add richer release/event content over time: release notes, artist quotes, behind-the-scenes context, photo/video documentation, and editorial notes that cannot be reproduced from generic web summaries.

4. Media and page experience

- Review image dimensions, `srcSet`, lazy/eager loading, alt text, and hero media weight.
- Ensure important images have descriptive alt text and decorative assets are treated appropriately.
- Use Lighthouse/PageSpeed Insights findings to improve Core Web Vitals, especially mobile loading and layout stability.
- Keep visible page structure readable, with headings and sections that match the content hierarchy.

5. Agent-friendly website checks

- Make key tasks easy through normal browser behavior: find artist booking contact, open EPK, subscribe, visit shop, listen on Bandcamp, and contact the label.
- Validate keyboard navigation, focus management, labels, and accessible names for major actions.
- Avoid requiring hover-only or audio-only cues for essential information.

6. Measurement and governance

- Verify the site in Google Search Console and submit the sitemap.
- Track indexed pages, crawl issues, search appearance, query growth, and pages receiving impressions from relevant label, artist, merch, event, and environmental queries.
- Review content additions against the "people-first, not scaled-content" rule before publishing.

### First Engineering Pass

- Add a typed SEO/JSON-LD helper so metadata and schema are consistent.
- Fix any invalid or overly generic schema currently emitted on the homepage.
- Add crawlable artist detail routes for `/artists/:artistId` instead of redirect-only or modal-only artist content.
- Add missing sitemap entries for durable public pages and exclude low-value redirect-only pages if they should not be indexed.
- Run `npm run build`, inspect generated sitemap, and run a browser check on desktop and mobile viewports.

### Progress

- Completed first technical SEO pass: shared JSON-LD support, cleaned homepage schema, crawlable artist profile routes, EPK redirect preservation, updated sitemap entries, and `noindex,follow` for redirect-only `/music`.
- Completed first media optimization pass: added responsive 600/1200px artist portrait variants, optimized Tracks for Trees and Earth First images, and wired rendered images through `srcSet`/`sizes`.
- Completed first content expansion pass: added clearer `/info` sections for what Perfect Dark does, quick facts, and internal artist roster links; expanded `/environment` with Tracks for Trees mechanics, Earth First local context, and Rave For A Reason framing.
- Added `AboutPage` structured data to `/info` and environmental `WebPage` structured data to `/environment`.
- Added automated coverage for crawlable artist profile metadata, canonical URL, and `Person` JSON-LD.

### Next Pass

- Add crawlable first-party release and event pages with release notes, artist quotes, event context, photos, and documentation.
- Validate deployed structured data and rendered routes with Google Search Console / Rich Results Test.
- Consider separating large EPK PDFs from the client build if production hosting or caching makes those assets expensive.

## Goal 60: Validate Production SEO After Deploy

### Objective

Confirm the deployed Perfect Dark site is visible to Google as intended after the generative AI search optimization pass, with rendered metadata, structured data, sitemap discovery, and mobile performance all verified through Google production tools.

### Production Checklist

- Deploy the current SEO update to production.
- Run Google Rich Results Test for `/`, `/info`, `/artists`, and several `/artists/:artistId` pages, including at least `brick`, `fauna`, and `lavender-persuasion`.
- Submit `https://perfectdark909.com/sitemap.xml` in Google Search Console.
- Use Search Console URL Inspection after deploy to confirm Google sees rendered canonical URLs, meta descriptions, robots directives, and JSON-LD on the homepage, info page, artists page, and artist detail pages.
- Run PageSpeed Insights on mobile for `/`, `/info`, `/artists`, and one representative artist detail page.
- Record any validation errors, indexing issues, mobile performance issues, or structured data warnings as follow-up fixes.

### Done When

- Rich Results Test has no blocking structured data errors on the checked pages.
- Search Console accepts the sitemap and URL Inspection shows rendered pages are indexable where intended.
- `/environment` is absent from the sitemap and resolves as `noindex,follow` if requested.
- Mobile PageSpeed/Core Web Vitals findings are reviewed and any high-priority regressions are triaged.

## Goal 61: Close Code Review Regression Items

### Objective

Complete functional, code-focused updates for the current code review findings in priority order, with regression coverage across typechecking, generated SEO artifacts, rendered route metadata, routing fallbacks, and page-load performance.

### Priority Order

1. P1: Restore standalone TypeScript validation under the current TypeScript toolchain.
2. P2: Harden known route fallbacks and true unknown-route 404 handling for static hosting.
3. P2: Improve route SEO reliability through generated, testable build artifacts and rendered metadata checks.
4. P2: Reduce homepage image delivery weight while preserving the current visual content.
5. P3: Generate sitemap and routing artifacts from shared route utilities so artist route drift is caught by tests.

### Regression Scope

- TypeScript: `npm run typecheck`.
- Unit/component: route metadata, artist detail rendering, not-found rendering, responsive image attributes, and build utility behavior.
- Build artifacts: generated `public/sitemap.xml`, `public/_redirects`, and static `404.html` behavior.
- Production build: `npm run build`.
