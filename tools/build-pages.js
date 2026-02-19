const fs = require("fs");
const path = require("path");
const http = require("http");
const chokidar = require("chokidar");
const nunjucks = require("nunjucks");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const DIST = path.join(ROOT, "dist");
const TEMPLATE_DIR = path.join(SRC, "templates");
const CONTENT_DIR = path.join(SRC, "content");
const LOCALES_DIR = path.join(CONTENT_DIR, "locales");
const PAGES_JSON = path.join(CONTENT_DIR, "pages.json");
const LANGS = ["en", "ru", "es", "pt", "de", "fr", "uk"];
const PORT = 5502;
const HOST = "127.0.0.1";

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}
function removeDir(d) {
  fs.rmSync(d, { recursive: true, force: true });
}
function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const e of entries) {
    const s = path.join(src, e.name);
    const d = path.join(dest, e.name);
    if (e.isDirectory()) {
      copyDir(s, d);
    } else if (e.isFile()) {
      copyFile(s, d);
    }
  }
}
function readJson(fp) {
  return JSON.parse(fs.readFileSync(fp, "utf-8"));
}
function deepMerge(a, b) {
  if (typeof a !== "object" || a === null) return b;
  if (typeof b !== "object" || b === null) return a;
  const out = Array.isArray(a) ? a.slice() : { ...a };
  for (const k of Object.keys(b)) {
    const av = out[k];
    const bv = b[k];
    if (av && typeof av === "object" && !Array.isArray(av) && typeof bv === "object" && !Array.isArray(bv)) {
      out[k] = deepMerge(av, bv);
    } else {
      out[k] = bv;
    }
  }
  return out;
}
function loadLocales() {
  const base = readJson(path.join(LOCALES_DIR, "en.json"));
  const out = { en: base };
  for (const lang of LANGS) {
    if (lang === "en") continue;
    const fp = path.join(LOCALES_DIR, `${lang}.json`);
    if (fs.existsSync(fp)) {
      out[lang] = deepMerge(base, readJson(fp));
    } else {
      out[lang] = base;
    }
  }
  return out;
}
function renderPages() {
  ensureDir(DIST);
  const pages = readJson(PAGES_JSON);
  const env = nunjucks.configure(TEMPLATE_DIR, { autoescape: true });
  const locales = loadLocales();
  for (const page of pages) {
    for (const lang of LANGS) {
      const g = locales[lang] || locales.en;
      const overrides = (g.pages && g.pages[page.slug]) ? g.pages[page.slug] : null;
      const t = overrides ? deepMerge(g, overrides) : g;
      const langPrefix = lang === "en" ? "" : `/${lang}`;
      const outDir = lang === "en" ? path.join(DIST, page.slug) : path.join(DIST, lang, page.slug);
      ensureDir(outDir);
      const html = env.render("seo-page.njk", { t, g, page, lang, langPrefix, languages: LANGS });
      fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
    }
  }
}
function copyStatics() {
  copyDir(path.join(ROOT, "assets"), path.join(DIST, "assets"));
  copyDir(path.join(ROOT, "public"), DIST);
  if (fs.existsSync(path.join(ROOT, "style.css"))) copyFile(path.join(ROOT, "style.css"), path.join(DIST, "style.css"));
  if (fs.existsSync(path.join(ROOT, "i18n.js"))) copyFile(path.join(ROOT, "i18n.js"), path.join(DIST, "i18n.js"));
  const rootPages = ["index.html", "privacy.html", "terms.html", "thanks.html"];
  for (const p of rootPages) {
    const src = path.join(ROOT, p);
    if (fs.existsSync(src)) copyFile(src, path.join(DIST, p));
  }
}
function buildAll() {
  removeDir(DIST);
  ensureDir(DIST);
  renderPages();
  copyStatics();
  console.log("Built to", DIST);
}
function startWatch() {
  const watcher = chokidar.watch(path.join(SRC, "**/*"), { ignoreInitial: true });
  let timer = null;
  const trigger = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      try {
        buildAll();
      } catch (e) {
        console.error(e && e.stack ? e.stack : String(e));
      }
    }, 100);
  };
  watcher.on("add", trigger).on("change", trigger).on("unlink", trigger);
  return watcher;
}
function contentType(fp) {
  const ext = path.extname(fp).toLowerCase();
  if (ext === ".html") return "text/html; charset=utf-8";
  if (ext === ".css") return "text/css; charset=utf-8";
  if (ext === ".js") return "application/javascript; charset=utf-8";
  if (ext === ".json") return "application/json; charset=utf-8";
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".svg") return "image/svg+xml";
  if (ext === ".ico") return "image/x-icon";
  if (ext === ".mp4") return "video/mp4";
  if (ext === ".webm") return "video/webm";
  return "application/octet-stream";
}
function startServer() {
  const server = http.createServer((req, res) => {
    try {
      const u = new URL(req.url, `http://${HOST}:${PORT}`);
      let pathname = u.pathname;
      const parts = pathname.split("/").filter(Boolean);
      const hasExt = path.extname(pathname) !== "";
      let target;
      if (hasExt) {
        target = path.join(DIST, ...parts);
      } else {
        target = path.join(DIST, ...parts, "index.html");
      }
      if (!fs.existsSync(target)) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end("Not Found");
        return;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", contentType(target));
      const stream = fs.createReadStream(target);
      stream.pipe(res);
    } catch (e) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end("Server Error");
    }
  });
  server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
  });
  return server;
}
function parseFlags() {
  const args = process.argv.slice(2);
  return {
    watch: args.includes("--watch"),
    serve: args.includes("--serve")
  };
}
function main() {
  const flags = parseFlags();
  buildAll();
  let watcher = null;
  let server = null;
  if (flags.watch) watcher = startWatch();
  if (flags.serve) server = startServer();
  if (!flags.watch && !flags.serve) process.exit(0);
}
main();
