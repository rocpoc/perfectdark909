const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const SITE_URL = "https://perfectdark909.com";
const ROOT_DIR = path.join(__dirname, "..");
const DEFAULT_ARTISTS_FILE = path.join(ROOT_DIR, "src", "data", "artists.ts");
const DEFAULT_OG_IMAGE = "/images/optimized/film-hero.jpg";

const CORE_SITEMAP_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/artists", priority: "0.9", changefreq: "weekly" },
  { path: "/info", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
];

const CORE_SPA_ROUTES = [
  "/artist-cards",
  "/artists",
  "/contact",
  "/info",
  "/sms-opt-in",
];

const REDIRECT_ROUTES = [
  { from: "/music", to: "https://perfectdark909.bandcamp.com", status: 301 },
  { from: "/shop", to: "https://shop.perfectdark909.com", status: 301 },
];

const ARTIST_PUBLIC_IMAGE_OVERRIDES = {
  "freeman-713": "/images/artists/freeman-headshot.jpg",
};

const toAbsoluteUrl = (pathOrUrl) => {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return `${SITE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
};

const getPublicArtistImage = (artistId) => {
  const candidates = [
    ARTIST_PUBLIC_IMAGE_OVERRIDES[artistId],
    `/images/artists/${artistId}-headshot.jpg`,
  ].filter(Boolean);

  return candidates.find((candidate) =>
    fs.existsSync(path.join(ROOT_DIR, "public", candidate.slice(1)))
  );
};

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

const getArrayProperty = (node, propertyName) => {
  const property = node.properties.find((item) => {
    if (!ts.isPropertyAssignment(item)) return false;
    return getPropertyName(item.name) === propertyName;
  });

  if (
    !property ||
    !ts.isPropertyAssignment(property) ||
    !ts.isArrayLiteralExpression(property.initializer)
  ) {
    return undefined;
  }

  return property.initializer;
};

const getSocialLinksProperty = (node) => {
  const socialLinks = getArrayProperty(node, "socialLinks");
  if (!socialLinks) return [];

  return socialLinks.elements
    .filter(ts.isObjectLiteralExpression)
    .map((linkNode) => getStringProperty(linkNode, "url"))
    .filter((url) => url && url !== "#");
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
    .map((artistNode) => {
      const id = getStringProperty(artistNode, "id");

      return {
        id,
        name: getStringProperty(artistNode, "name"),
        basedIn: getStringProperty(artistNode, "basedIn"),
        setType: getStringProperty(artistNode, "setType"),
        bio: getStringProperty(artistNode, "bio"),
        image: id ? getPublicArtistImage(id) : undefined,
        sameAs: getSocialLinksProperty(artistNode),
      };
    })
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
  "/sms-opt-in",
];

const getRouteSeoEntries = (artistProfiles = getArtistProfiles()) => {
  const artistEntries = artistProfiles.map((artist) => ({
    path: `/artists/${artist.id}`,
    title: `${artist.name} | Perfect Dark Artist`,
    description: makeArtistDescription(artist),
    canonical: `/artists/${artist.id}`,
    ogImage: artist.image || DEFAULT_OG_IMAGE,
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
        ...(artist.image ? { image: toAbsoluteUrl(artist.image) } : {}),
        ...(artist.sameAs?.length > 0 ? { sameAs: artist.sameAs } : {}),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Artists",
            item: `${SITE_URL}/artists`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: artist.name,
            item: `${SITE_URL}/artists/${artist.id}`,
          },
        ],
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
      ogImage: DEFAULT_OG_IMAGE,
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
      ogImage: DEFAULT_OG_IMAGE,
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
      ogImage: DEFAULT_OG_IMAGE,
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
      ogImage: DEFAULT_OG_IMAGE,
    },
    {
      path: "/sms-opt-in",
      title: "SMS Opt-In | Perfect Dark",
      description:
        "Perfect Dark SMS opt-in proof-of-consent page for event address messages.",
      canonical: "/sms-opt-in",
      robots: "noindex,follow",
      ogImage: DEFAULT_OG_IMAGE,
    },
  ];
};

const renderSitemap = ({
  routes = getSitemapRoutes(),
  baseUrl = SITE_URL,
  currentDate,
} = {}) => {
  const entries = routes
    .map((route) => {
      const lastmod = route.lastmod || currentDate;
      const lastmodLine = lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : "";

      return `  <url>
    <loc>${baseUrl}${route.path}</loc>
${lastmodLine}    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
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
    .flatMap((route) => {
      const target = prerenderedRoutePaths.has(route)
        ? `${route}/index.html`
        : "/index.html";

      return [
        `${route}/    ${route}    301`,
        `${route}    ${target}    200`,
      ];
    });
  const externalRedirectLines = REDIRECT_ROUTES.flatMap((route) => [
    `${route.from}/    ${route.to}    ${route.status}`,
    `${route.from}    ${route.to}    ${route.status}`,
  ]);

  return [
    ...externalRedirectLines,
    "/subscribe/    /subscribe    301",
    "/subscribe    /subscribe/index.html    200",
    ...routeLines,
    "/*    /404.html    404",
    "",
  ].join("\n");
};

module.exports = {
  DEFAULT_ARTISTS_FILE,
  DEFAULT_OG_IMAGE,
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
