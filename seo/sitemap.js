// seo/sitemap.js
const fs = require("fs");
const path = require("path");

function escXml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function ensureNoSlashEnd(s) {
  return String(s || "").replace(/\/+$/, "");
}

function isoDate(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

function loadPagesJson(root) {
  const p = path.join(root, "seo", "pages.json");
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function inferLangs(pagesData) {
  // 1) explicit global.langs / global.languages
  const g = pagesData.global || {};
  const langs =
    g.langs ||
    g.languages ||
    g.supportedLangs ||
    g.supported_languages ||
    null;

  if (Array.isArray(langs) && langs.length) return langs.map(String);

  // 2) infer from first page translations keys
  const pages = pagesData.pages || [];
  const first = pages[0];
  const keys =
    first && first.translations && typeof first.translations === "object"
      ? Object.keys(first.translations)
      : [];

  if (keys.length) return keys;

  // 3) fallback
  return ["en", "ru", "es", "pt", "de", "fr", "uk"];
}

function inferDefaultLang(pagesData) {
  const g = pagesData.global || {};
  return String(g.defaultLang || g.default_lang || "en");
}

function getBaseUrl(pagesData) {
  const g = pagesData.global || {};
  const base =
    g.baseUrl ||
    g.base_url ||
    "https://avenordownload.app"; // fallback
  return ensureNoSlashEnd(base);
}

function buildPathForLang(slug, lang, defaultLang) {
  // Clean URLs: /slug, /ru/slug (без .html)
  const cleanSlug = String(slug).replace(/^\/+/, "").replace(/\/+$/, "");
  if (!cleanSlug) return "/";
  if (lang === defaultLang) return `/${cleanSlug}`;
  return `/${lang}/${cleanSlug}`;
}

function generateSitemapXml({ baseUrl, urls }) {
  const today = isoDate();

  const body = urls
    .map((u) => {
      const loc = escXml(baseUrl + u);
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

function generateRobotsTxt({ baseUrl }) {
  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;
}

function unique(arr) {
  return [...new Set(arr)];
}

function buildAllUrls(pagesData) {
  const pages = pagesData.pages || [];
  const langs = inferLangs(pagesData);
  const defaultLang = inferDefaultLang(pagesData);

  // Включим и “общие” страницы (по желанию можно расширять)
  const staticRoutes = [
    "/",              // главная
    "/privacy",       // cleanUrl -> privacy.html
    "/terms",
    "/refund",
    "/thanks"
  ];

  const urls = [];

  // статические: только в default (обычно EN). Если хочешь — можно размножить на языки позже.
  urls.push(...staticRoutes);

  // SEO страницы: для каждого языка своя ссылка
  for (const p of pages) {
    const slug = p.slug;
    if (!slug) continue;

    for (const lang of langs) {
      // генерим URL только если есть перевод для этого языка
      const has =
        p.translations &&
        p.translations[lang] &&
        (p.translations[lang].title || p.translations[lang].h1);

      if (!has) continue;

      urls.push(buildPathForLang(slug, lang, defaultLang));
    }
  }

  return unique(urls);
}


function writeSitemapAndRobots({ root, distDir }) {
  console.log("[SITEMAP] CALLED", new Error().stack.split("\n")[2]);
  console.log("[SITEMAP] writing to", distDir);
  const pagesData = loadPagesJson(root);
  const baseUrl = getBaseUrl(pagesData);

  const urls = buildAllUrls(pagesData);

  fs.mkdirSync(distDir, { recursive: true });

  const sitemapXml = generateSitemapXml({ baseUrl, urls });
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml, "utf8");

  const robotsTxt = generateRobotsTxt({ baseUrl });
  fs.writeFileSync(path.join(distDir, "robots.txt"), robotsTxt, "utf8");

  console.log("[SITEMAP] wrote:", path.join(distDir, "sitemap.xml"));
  console.log("[SITEMAP] wrote:", path.join(distDir, "robots.txt"));

}

module.exports = { writeSitemapAndRobots };
