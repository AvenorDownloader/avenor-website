// seo/build.js
console.log("=== BUILD.JS START ===", __filename);

const fs = require("fs");
const path = require("path");
const nunjucks = require("nunjucks");
const { writeSitemapAndRobots } = require("./sitemap");

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function writeFile(p, content) {
  ensureDir(path.dirname(p));
  fs.writeFileSync(p, content, "utf8");
}

function buildHreflangs(baseUrl, slug, langs, defaultLang) {
  const out = [];
  for (const l of langs) {
    const href = l === defaultLang ? `${baseUrl}/${slug}` : `${baseUrl}/${l}/${slug}`;
    out.push({ hreflang: l, href });
  }
  out.push({
    hreflang: "x-default",
    href: `${baseUrl}/${defaultLang === "en" ? "" : defaultLang + "/"}${slug}`
      .replace(/\/\//g, "/")
      .replace("https:/", "https://"),
  });
  return out;
}

function main() {
  // ЖЁСТКО стабилизируем root
  const root = path.resolve(__dirname, ".."); // корень проекта
  const seoDir = __dirname;                  // .../seo
  const distDir = path.join(root, "dist");   // .../dist

  console.log("[PATH] root   =", root);
  console.log("[PATH] seoDir =", seoDir);
  console.log("[PATH] distDir=", distDir);

  // ВАЖНО: чтобы все относительные пути в других местах не “уезжали”
  process.chdir(root);
  console.log("[CWD] =", process.cwd());

  const cfgPath = path.join(seoDir, "pages.json");
  const pagesCfg = JSON.parse(fs.readFileSync(cfgPath, "utf8"));

  nunjucks.configure(path.join(seoDir, "templates"), { autoescape: true });

  // 1) clean dist
  fs.rmSync(distDir, { recursive: true, force: true });
  ensureDir(distDir);

  const { languages, defaultLang, global, pages } = pagesCfg;

  // 2) render SEO pages
  for (const page of pages) {
    const slug = page.slug;

    for (const lang of languages) {
      const t = page.translations?.[lang] || page.translations?.[defaultLang];
      if (!t) continue;

      const outDirForLang = lang === defaultLang ? distDir : path.join(distDir, lang);
      const outFile = path.join(outDirForLang, slug + ".html");

      const canonical =
        lang === defaultLang
          ? `${global.baseUrl}/${slug}`
          : `${global.baseUrl}/${lang}/${slug}`;

      const alternates = buildHreflangs(global.baseUrl, slug, languages, defaultLang);

      const html = nunjucks.render("seo-page.njk", {
        lang,
        meta: t,
        canonical,
        alternates,
        global,
      });

      writeFile(outFile, html);
    }
  }

  console.log("✅ SEO pages build done -> dist/");

  // 3) sitemap + robots (ОДИН РАЗ)
  console.log("[SITEMAP] generating into:", distDir);
  writeSitemapAndRobots({ root, distDir });
  console.log("[SITEMAP] done");

  // 4) hard check
  const sm = path.join(distDir, "sitemap.xml");
  const rb = path.join(distDir, "robots.txt");

  console.log("[CHECK] sitemap exists?", fs.existsSync(sm), sm);
  console.log("[CHECK] robots exists?", fs.existsSync(rb), rb);

  if (!fs.existsSync(sm) || !fs.existsSync(rb)) {
    throw new Error("Sitemap/robots not created in dist.");
  }

  console.log("✅ BUILD OK");
}

try {
  main();
} catch (e) {
  console.error("❌ BUILD FAILED:", e);
  process.exit(1);
}
