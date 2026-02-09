const fs = require("fs");
const path = require("path");
const nunjucks = require("nunjucks");

const root = process.cwd();
const seoDir = path.join(root, "seo");
const distDir = path.join(root, "dist");

const cfgPath = path.join(seoDir, "pages.json");
const pagesCfg = JSON.parse(fs.readFileSync(cfgPath, "utf8"));

nunjucks.configure(path.join(seoDir, "templates"), { autoescape: true });

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function writeFile(p, content) {
  ensureDir(path.dirname(p));
  fs.writeFileSync(p, content, "utf8");
}

function buildHreflangs(baseUrl, slug, langs, defaultLang) {
  // x-default -> defaultLang (обычно EN)
  const out = [];
  for (const l of langs) {
    const href = l === defaultLang ? `${baseUrl}/${slug}` : `${baseUrl}/${l}/${slug}`;
    out.push({ hreflang: l, href });
  }
  out.push({
    hreflang: "x-default",
    href: `${baseUrl}/${defaultLang === "en" ? "" : defaultLang + "/"}${slug}`.replace(/\/\//g, "/").replace("https:/", "https://")
  });
  return out;
}

function build() {
  // clean dist
  fs.rmSync(distDir, { recursive: true, force: true });
  ensureDir(distDir);

  const { languages, defaultLang, global, pages } = pagesCfg;

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
        global
      });

      writeFile(outFile, html);
    }
  }

  // копируем статические файлы (главная и legal) — чтобы dist был самодостаточным
  const staticFiles = [
    "index.html",
    "style.css",
    "i18n.js",
    "privacy.html",
    "terms.html",
    "refund.html",
    "thanks.html",
    "robots.txt",
    "sitemap.xml",
    "favicon.ico",
    "favicon.png"
  ];  
  for (const f of staticFiles) {
    const src = path.join(root, f);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(distDir, f));
    }
  }

  // ✅ favicons: если лежат в /public, продублируем в корень dist (нужно для /favicon.ico)
  const favCandidates = [
    path.join(root, "favicon.ico"),
    path.join(root, "favicon.png"),
    path.join(root, "public", "favicon.ico"),
    path.join(root, "public", "favicon.png"),
  ];

  for (const srcFav of favCandidates) {
    if (!fs.existsSync(srcFav)) continue;

    const base = path.basename(srcFav); // favicon.ico / favicon.png
    const dst = path.join(distDir, base);

    // перезаписываем, чтобы гарантированно было
    fs.copyFileSync(srcFav, dst);
  }

  // копируем папки assets/ и public/ если есть
  const dirsToCopy = ["assets", "public"];
  for (const d of dirsToCopy) {
    const srcDir = path.join(root, d);
    const dstDir = path.join(distDir, d);
    if (!fs.existsSync(srcDir)) continue;

    fs.cpSync(srcDir, dstDir, { recursive: true });
  }

  console.log("✅ SEO build done -> dist/");
}

build();
