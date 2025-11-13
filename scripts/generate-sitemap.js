const fs = require('fs');
const path = require('path');

// Get current date in YYYY-MM-DD format
const currentDate = new Date().toISOString().split('T')[0];

// Define your routes with their priorities and change frequencies
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/artists', priority: '0.9', changefreq: 'weekly' },
  { path: '/info', priority: '0.8', changefreq: 'monthly' },
  { path: '/music', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/links', priority: '0.7', changefreq: 'monthly' },
  { path: '/environment', priority: '0.7', changefreq: 'monthly' },
];

const baseUrl = 'https://perfectdark909.com';

// Generate sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

routes.forEach((route) => {
  sitemap += `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
});

sitemap += `</urlset>
`;

// Write to public/sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap, 'utf8');

console.log(`✅ Sitemap generated with date: ${currentDate}`);

