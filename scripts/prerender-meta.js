const fs = require("fs");
const path = require("path");
const {
  SITE_URL,
  getRouteSeoEntries,
} = require("./seo-build-utils");

const buildDir = path.join(__dirname, "..", "build");
const indexPath = path.join(buildDir, "index.html");

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const toAbsoluteUrl = (pathOrUrl) => {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
};

const stripManagedSeo = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(/<meta\s+name="description"[\s\S]*?>\s*/i, "")
    .replace(/<meta\s+name="title"[\s\S]*?>\s*/i, "")
    .replace(/<link\s+rel="canonical"[\s\S]*?>\s*/i, "")
    .replace(/<meta\s+(?:property|name)="(?:og|twitter):[\s\S]*?>\s*/gi, "")
    .replace(/<script\s+type="application\/ld\+json"[\s\S]*?<\/script>\s*/gi, "");

const renderSeoTags = (entry) => {
  const canonicalUrl = toAbsoluteUrl(entry.canonical);
  const tags = [
    `<title>${escapeHtml(entry.title)}</title>`,
    `<meta name="title" content="${escapeHtml(entry.title)}" data-pd-seo="true" />`,
    `<meta name="description" content="${escapeHtml(entry.description)}" data-pd-seo="true" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" data-pd-seo="true" />`,
    `<meta property="og:type" content="website" data-pd-seo="true" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" data-pd-seo="true" />`,
    `<meta property="og:title" content="${escapeHtml(entry.title)}" data-pd-seo="true" />`,
    `<meta property="og:description" content="${escapeHtml(entry.description)}" data-pd-seo="true" />`,
    `<meta property="og:site_name" content="Perfect Dark" data-pd-seo="true" />`,
    `<meta name="twitter:card" content="summary_large_image" data-pd-seo="true" />`,
    `<meta name="twitter:url" content="${escapeHtml(canonicalUrl)}" data-pd-seo="true" />`,
    `<meta name="twitter:title" content="${escapeHtml(entry.title)}" data-pd-seo="true" />`,
    `<meta name="twitter:description" content="${escapeHtml(entry.description)}" data-pd-seo="true" />`,
  ];

  (entry.structuredData ?? []).forEach((item) => {
    tags.push(
      `<script type="application/ld+json" data-pd-seo-jsonld="true">${JSON.stringify(
        item
      ).replace(/</g, "\\u003c")}</script>`
    );
  });

  return tags.map((tag) => `    ${tag}`).join("\n");
};

const getOutputPath = (routePath) => {
  if (routePath === "/") {
    return indexPath;
  }

  return path.join(buildDir, routePath.slice(1), "index.html");
};

try {
  const baseHtml = fs.readFileSync(indexPath, "utf8");
  const strippedHtml = stripManagedSeo(baseHtml);
  const entries = getRouteSeoEntries();

  entries.forEach((entry) => {
    const outputPath = getOutputPath(entry.path);
    const html = strippedHtml.replace("</head>", `${renderSeoTags(entry)}\n  </head>`);

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, "utf8");
  });

  console.log(`Prerendered metadata for ${entries.length} routes`);
} catch (error) {
  console.error("Error prerendering route metadata:", error.message);
  process.exit(1);
}
