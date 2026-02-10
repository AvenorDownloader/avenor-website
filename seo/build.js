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

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
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

  // 1.5) Copy static root files & folders
  console.log("[COPY] Starting static files copy...");
  const staticFiles = [
    "index.html",
    "style.css",
    "i18n.js",
    "privacy.html",
    "terms.html",
    "refund.html",
    "thanks.html",
    "favicon.ico",
    "favicon.png",
  ];

  for (const file of staticFiles) {
    const src = path.join(root, file);
    const dst = path.join(distDir, file);
    if (fs.existsSync(src)) {
      try {
        fs.copyFileSync(src, dst);
        console.log(`[COPY] File: ${file}`);
      } catch (err) {
        console.error(`[COPY ERROR] File ${file}:`, err.message);
      }
    } else {
        console.log(`[COPY SKIP] File not found: ${file}`);
    }
  }

  const dirsToCopy = ["assets", "public"];
  for (const d of dirsToCopy) {
    const src = path.join(root, d);
    const dst = path.join(distDir, d);
    if (fs.existsSync(src)) {
      try {
        console.log(`[COPY] Copying dir ${d}...`);
        copyDirRecursive(src, dst);
        console.log(`[COPY] Dir: ${d}`);
      } catch (err) {
        console.error(`[COPY ERROR] Dir ${d}:`, err.message);
      }
    } else {
        console.log(`[COPY SKIP] Dir not found: ${d}`);
    }
  }

  const { languages, defaultLang, global, pages } = pagesCfg;

  // 1.8) Create localized index.html for language roots
  console.log("[LANG-INDEX] Generating localized index.html...");
  const indexHtmlPath = path.join(distDir, "index.html");
  if (fs.existsSync(indexHtmlPath)) {
    let indexContent = fs.readFileSync(indexHtmlPath, "utf8");

    for (const lang of languages) {
      if (lang === defaultLang) continue; // Skip default lang

      const langDir = path.join(distDir, lang);
      ensureDir(langDir);

      const langIndex = path.join(langDir, "index.html");

      // Fix relative paths to absolute
      let newContent = indexContent
        .replace(/src="i18n.js"/g, 'src="/i18n.js"')
        .replace(/href="style.css"/g, 'href="/style.css"');

      // Update lang attribute
      newContent = newContent.replace(/<html lang="[^"]*">/i, `<html lang="${lang}">`);

      // Inject script
      const script = `<script>try{localStorage.setItem("lang","${lang}");}catch(e){}</script>`;

      if (newContent.includes('src="/i18n.js"')) {
        newContent = newContent.replace('<script defer src="/i18n.js"></script>', `${script}\n    <script defer src="/i18n.js"></script>`);
      } else {
        newContent = newContent.replace('</head>', `${script}\n</head>`);
      }

      fs.writeFileSync(langIndex, newContent, "utf8");
      console.log(`[LANG-INDEX] Created dist/${lang}/index.html`);
    }
  } else {
    console.warn("[LANG-INDEX] Warning: dist/index.html not found, skipping localized index generation.");
  }

  // 2) render SEO pages
  for (const page of pages) {
    const slug = page.slug;

    for (const lang of languages) {
      // Logic: Merge defaultLang content with specific lang content
      // This ensures that if a field (like heroBadges or pricingEmbed) is missing in translation,
      // it falls back to the default language value.
      const baseContent = page.translations?.[defaultLang] || {};
      const specificContent = page.translations?.[lang] || {};
      
      // If we have absolutely no content for this page in either lang or default, skip
      if (Object.keys(baseContent).length === 0 && Object.keys(specificContent).length === 0) continue;

      const t = { ...baseContent, ...specificContent };

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
  const dstIndex = path.join(distDir, "index.html");
  const dstStyle = path.join(distDir, "style.css");

  const checks = [
    { path: sm, name: "sitemap.xml" },
    { path: rb, name: "robots.txt" },
    { path: dstIndex, name: "index.html" },
    { path: dstStyle, name: "style.css" },
  ];

  for (const c of checks) {
    if (!fs.existsSync(c.path)) {
      throw new Error(`CRITICAL: ${c.name} is missing in dist/`);
    }
  }

  console.log("✅ BUILD OK");
}

try {
  main();
} catch (e) {
  console.error("❌ BUILD FAILED:", e);
  process.exit(1);
}
