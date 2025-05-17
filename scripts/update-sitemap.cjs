#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://hackload.kz';
const SITEMAP_PATH = path.resolve(__dirname, '../sitemap.xml');
const NEWS_DATA_PATH = path.resolve(__dirname, '../src/data/newsData.ts');
const MAIN_FILE = path.resolve(__dirname, '../index.html');

// Extract only slug and date fields from newsData.ts
function extractNewsArticles(tsFilePath) {
  const content = fs.readFileSync(tsFilePath, 'utf8');
  const articles = [];
  // Match all objects in the array
  const objectRegex = /{[\s\S]*?slug:\s*['"`](.*?)['"`][\s\S]*?date:\s*['"`](.*?)['"`][\s\S]*?}/g;
  let match;
  while ((match = objectRegex.exec(content)) !== null) {
    articles.push({ slug: match[1], date: match[2] });
  }
  if (articles.length === 0) {
    throw new Error('No news articles found in newsData.ts');
  }
  return articles;
}

function buildUrl(loc) {
  return `${DOMAIN}${loc}`;
}

function buildSitemapEntry(loc, lastmod, changefreq = 'weekly', priority = 0.8) {
  return `
  <url>
    <loc>${buildUrl(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function getMainLastMod() {
  try {
    const { execSync } = require('child_process');
    const out = execSync(`git log -1 --format="%cI" -- "${MAIN_FILE}"`, { encoding: 'utf8' }).trim();
    return out || new Date().toISOString();
  } catch {
    return new Date().toISOString();
  }
}

function main() {
  let urls = [];

  // Main page
  urls.push(buildSitemapEntry('/', getMainLastMod(), 'daily', 1.0));

  // News articles
  const newsArticles = extractNewsArticles(NEWS_DATA_PATH);
  for (const article of newsArticles) {
    urls.push(buildSitemapEntry(`/news/${article.slug}`, article.date));
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  fs.writeFileSync(SITEMAP_PATH, sitemap.trim() + '\n', 'utf8');
  console.log('Sitemap updated:', SITEMAP_PATH);
}

main();
