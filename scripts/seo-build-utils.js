const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const SITE_URL = "https://perfectdark909.com";
const ROOT_DIR = path.join(__dirname, "..");
const DEFAULT_ARTISTS_FILE = path.join(ROOT_DIR, "src", "data", "artists.ts");

const CORE_SITEMAP_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/artists", priority: "0.9", changefreq: "weekly" },
  { path: "/info", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/mixer", priority: "0.6", changefreq: "monthly" },
];

const CORE_SPA_ROUTES = [
  "/artist-cards",
  "/artists",
  "/contact",
  "/info",
  "/mixer",
  "/music",
  "/shop",
  "/sms-opt-in",
];

const getSiteLocalDate = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .formatToParts(date)
    .reduce((result, part) => {
      if (part.type !== "literal") {
        result[part.type] = part.value;
      }
      return result;
    }, {});

  return `${parts.year}-${parts.month}-${parts.day}`;
};

const getPropertyName = (name) => {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name)) {
    return name.text;
  }

  return undefined;
};

const getStringProperty = (node, propertyName) => {
  const property = node.properties.find((item) => {
    if (!ts.isPropertyAssignment(item)) return false;
    return getPropertyName(item.name) === propertyName;
  });

  if (!property || !ts.isPropertyAssignment(property)) {
    return undefined;
  }

  return ts.isStringLiteral(property.initializer)
    ? property.initializer.text
    : undefined;
};

const findArtistArray = (sourceFile) => {
  let artistArray;

  const visit = (node) => {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === "artistData" &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      artistArray = node.initializer;
      return;
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return artistArray;
};

const getArtistProfiles = (artistsFile = DEFAULT_ARTISTS_FILE) => {
  const source = fs.readFileSync(artistsFile, "utf8");
  const sourceFile = ts.createSourceFile(
    artistsFile,
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );
  const artistArray = findArtistArray(sourceFile);

  if (!artistArray) {
    throw new Error(`Could not find artistData array in ${artistsFile}`);
  }

  const artistProfiles = artistArray.elements
    .filter(ts.isObjectLiteralExpression)
    .map((artistNode) => ({
      id: getStringProperty(artistNode, "id"),
      name: getStringProperty(artistNode, "name"),
      basedIn: getStringProperty(artistNode, "basedIn"),
      setType: getStringProperty(artistNode, "setType"),
      bio: getStringProperty(artistNode, "bio"),
    }))
    .filter((artist) => artist.id && artist.name);

  if (artistProfiles.length === 0) {
    throw new Error(`No artist IDs found in ${artistsFile}`);
  }

  return artistProfiles;
};

const getArtistIds = (artistsFile = DEFAULT_ARTISTS_FILE) =>
  getArtistProfiles(artistsFile).map((artist) => artist.id);

const getSitemapRoutes = (artistIds = getArtistIds()) => {
  const artistRoutes = artistIds.map((artistId) => ({
    path: `/artists/${artistId}`,
    priority: "0.8",
    changefreq: "monthly",
  }));

  return [
    ...CORE_SITEMAP_ROUTES.slice(0, 2),
    ...artistRoutes,
    ...CORE_SITEMAP_ROUTES.slice(2),
  ];
};

const getSpaFallbackRoutes = (artistIds = getArtistIds()) => {
  const artistRoutes = artistIds.flatMap((artistId) => [
    `/artists/${artistId}`,
    `/artists/${artistId}/epk`,
  ]);

  return [...new Set([...CORE_SPA_ROUTES, ...artistRoutes])].sort();
};

const makeArtistDescription = (artist) => {
  const description = `${artist.name} is a Perfect Dark artist based in ${artist.basedIn}. ${artist.bio}`;

  if (description.length <= 155) {
    return description;
  }

  return `${description.slice(0, 152).trim()}...`;
};

const getPrerenderedRoutePaths = (artistIds = getArtistIds()) => [
  "/",
  "/artists",
  ...artistIds.map((artistId) => `/artists/${artistId}`),
  "/info",
  "/contact",
  "/mixer",
];

const getRouteSeoEntries = (artistProfiles = getArtistProfiles()) => {
  const artistEntries = artistProfiles.map((artist) => ({
    path: `/artists/${artist.id}`,
    title: `${artist.name} | Perfect Dark Artist`,
    description: makeArtistDescription(artist),
    canonical: `/artists/${artist.id}`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: artist.name,
        description: artist.bio,
        url: `${SITE_URL}/artists/${artist.id}`,
        jobTitle: artist.setType,
        homeLocation: {
          "@type": "Place",
          name: artist.basedIn,
        },
        memberOf: {
          "@type": "Organization",
          name: "Perfect Dark",
          url: SITE_URL,
        },
      },
    ],
  }));

  return [
    {
      path: "/",
      title: "Perfect Dark | Electronic Music Label & Collective",
      description:
        "Perfect Dark is a record label, clothing brand, and artist collective.",
      canonical: "/",
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Perfect Dark",
          alternateName: "Perfect Dark 909",
          url: SITE_URL,
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Perfect Dark",
          url: SITE_URL,
        },
      ],
    },
    {
      path: "/artists",
      title: "Artists | Perfect Dark | California Techno Label",
      description:
        "Discover artists on Perfect Dark, a California techno label featuring Freeman 713, Fauna, Brick, Provider, and more. West Coast electronic music.",
      canonical: "/artists",
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Perfect Dark Artists",
          url: `${SITE_URL}/artists`,
        },
      ],
    },
    ...artistEntries,
    {
      path: "/info",
      title: "Info | Perfect Dark | Electronic Music Label California",
      description:
        "Learn about Perfect Dark, a California-based electronic music label, clothing brand, event collective, and climate-minded creative project.",
      canonical: "/info",
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Perfect Dark",
          url: `${SITE_URL}/info`,
        },
      ],
    },
    {
      path: "/contact",
      title: "Contact | Perfect Dark | Booking & Demo Submissions",
      description:
        "Contact Perfect Dark for booking inquiries, demos, collaborations, and order support.",
      canonical: "/contact",
    },
    {
      path: "/mixer",
      title: "Audio Mixer | Perfect Dark",
      description:
        "Use the Perfect Dark browser audio mixer to blend label stems in sync.",
      canonical: "/mixer",
    },
  ];
};

const renderSitemap = ({
  routes = getSitemapRoutes(),
  baseUrl = SITE_URL,
  currentDate = getSiteLocalDate(),
} = {}) => {
  const entries = routes
    .map(
      (route) => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
};

const renderRedirects = (artistIds = getArtistIds()) => {
  const prerenderedRoutePaths = new Set(getPrerenderedRoutePaths(artistIds));
  const routeLines = getSpaFallbackRoutes(artistIds)
    .flatMap((route) => (route.endsWith("/") ? [route] : [route, `${route}/`]))
    .map((route) => {
      const normalizedRoute = route.endsWith("/") ? route.slice(0, -1) : route;
      const target = prerenderedRoutePaths.has(normalizedRoute)
        ? `${normalizedRoute}/index.html`
        : "/index.html";

      return `${route}    ${target}    200`;
    });

  return [
    "/subscribe    /subscribe/index.html    200",
    "/subscribe/    /subscribe/index.html    200",
    ...routeLines,
    "/*    /404.html    404",
    "",
  ].join("\n");
};

module.exports = {
  DEFAULT_ARTISTS_FILE,
  SITE_URL,
  getArtistIds,
  getArtistProfiles,
  getPrerenderedRoutePaths,
  getRouteSeoEntries,
  getSiteLocalDate,
  getSitemapRoutes,
  getSpaFallbackRoutes,
  renderRedirects,
  renderSitemap,
};
