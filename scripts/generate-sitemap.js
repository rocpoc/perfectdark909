const fs = require('fs');
const path = require('path');
const {
  getArtistIds,
  getSitemapRoutes,
  renderRedirects,
  renderSitemap,
} = require('./seo-build-utils');

try {
  const artistIds = getArtistIds();
  const sitemap = renderSitemap({
    routes: getSitemapRoutes(artistIds),
  });
  const redirects = renderRedirects(artistIds);

  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const redirectsPath = path.join(__dirname, '..', 'public', '_redirects');
  
  // Ensure directory exists
  const publicDir = path.dirname(sitemapPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  fs.writeFileSync(redirectsPath, redirects, 'utf8');
  console.log('Generated sitemap and redirects');
} catch (error) {
  console.error('Error generating SEO build artifacts:', error.message);
  process.exit(1);
}
