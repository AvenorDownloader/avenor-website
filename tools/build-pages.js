const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "..");
const sharedDir = path.join(rootDir, "shared");
const partialsDir = path.join(sharedDir, "partials");
const configPath = path.join(sharedDir, "site.config.json");
const distDir = path.join(rootDir, "dist");

function readJson(p) {
  const raw = fs.readFileSync(p, "utf8");
  return JSON.parse(raw);
}

function flattenConfig(obj, prefix, out) {
  const base = prefix || "";
  const acc = out || {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    const nextKey = base ? base + "_" + key : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      flattenConfig(value, nextKey, acc);
    } else {
      const norm = String(nextKey)
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .toUpperCase();
      acc[norm] = String(value);
    }
  });
  return acc;
}

function buildPlaceholderMap(config) {
  const flat = flattenConfig(config);

  const macAvailable = !!config.downloads && config.downloads.macAvailable !== false;
  const macBtnTextKeyAvailable =
    (config.downloads && config.downloads.macBtnTextKeyAvailable) || "yt_btn_mac";
  const macBtnTextKeyUnavailable =
    (config.downloads && config.downloads.macBtnTextKeyUnavailable) || macBtnTextKeyAvailable;
  const macTooltipKey =
    (config.downloads && config.downloads.macTooltipKey) || "mac_unavailable_tooltip";

  flat.MAC_BTN_TEXT_KEY = macAvailable ? macBtnTextKeyAvailable : macBtnTextKeyUnavailable;
  flat.MAC_BTN_EXTRA_CLASS = macAvailable ? "" : " disabled";
  flat.MAC_DISABLED_ATTR = macAvailable ? "" : "";
  flat.MAC_TOOLTIP_ATTR = macAvailable ? "" : ' data-i18n-title="' + macTooltipKey + '"';

  if (config.pricing && config.pricing.free && config.pricing.free.amount) {
    flat.PRICING_FREE_AMOUNT = String(config.pricing.free.amount);
  }

  const prices = config.pricing || {};

  function fromPlan(planKey, field, placeholder) {
    const plan = prices[planKey] || {};
    if (plan[field] != null) {
      flat[placeholder] = String(plan[field]);
    }
  }

  fromPlan("proMonthly", "priceId", "PRICING_PRO_MONTHLY_PRICE_ID");
  fromPlan("proMonthly", "amount", "PRICING_PRO_MONTHLY_AMOUNT");

  fromPlan("proYearly", "priceId", "PRICING_PRO_YEARLY_PRICE_ID");
  fromPlan("proYearly", "old", "PRICING_PRO_YEARLY_OLD");
  fromPlan("proYearly", "amount", "PRICING_PRO_YEARLY_AMOUNT");

  fromPlan("proLifetime", "priceId", "PRICING_PRO_LIFETIME_PRICE_ID");
  fromPlan("proLifetime", "old", "PRICING_PRO_LIFETIME_OLD");
  fromPlan("proLifetime", "amount", "PRICING_PRO_LIFETIME_AMOUNT");

  fromPlan("studioMonthly", "priceId", "PRICING_STUDIO_MONTHLY_PRICE_ID");
  fromPlan("studioMonthly", "amount", "PRICING_STUDIO_MONTHLY_AMOUNT");

  fromPlan("studioYearly", "priceId", "PRICING_STUDIO_YEARLY_PRICE_ID");
  fromPlan("studioYearly", "old", "PRICING_STUDIO_YEARLY_OLD");
  fromPlan("studioYearly", "amount", "PRICING_STUDIO_YEARLY_AMOUNT");

  fromPlan("studioLifetime", "priceId", "PRICING_STUDIO_LIFETIME_PRICE_ID");
  fromPlan("studioLifetime", "old", "PRICING_STUDIO_LIFETIME_OLD");
  fromPlan("studioLifetime", "amount", "PRICING_STUDIO_LIFETIME_AMOUNT");

  return flat;
}

function loadPartialsForLang(lang) {
  const result = {};
  const langDir = path.join(partialsDir, lang);
  if (!fs.existsSync(langDir)) return result;
  const files = fs.readdirSync(langDir);
  files.forEach((name) => {
    if (!name.endsWith(".html")) return;
    const key = path.basename(name, ".html");
    const fullPath = path.join(langDir, name);
    const html = fs.readFileSync(fullPath, "utf8");
    result[key] = html;
  });
  return result;
}

function applyPartials(html, partials) {
  const re = /<!--\s*PARTIAL:([a-zA-Z0-9_-]+)\s*-->/g;
  return html.replace(re, (match, name) => {
    const key = String(name || "").trim();
    if (!key) return match;
    if (!partials[key]) return match;
    return partials[key];
  });
}

function applyPlaceholders(html, mapping) {
  const re = /\{\{([A-Z0-9_]+)\}\}/g;
  return html.replace(re, (match, key) => {
    const k = String(key || "").toUpperCase();
    if (Object.prototype.hasOwnProperty.call(mapping, k)) {
      return mapping[k];
    }
    return match;
  });
}

function shouldProcessFile(fullPath) {
  if (!fullPath.endsWith(".html")) return false;
  if (fullPath.includes(path.sep + "node_modules" + path.sep)) return false;
  if (fullPath.includes(path.sep + "shared" + path.sep)) return false;
  if (fullPath.includes(path.sep + "public" + path.sep)) return false;
  if (fullPath.includes(path.sep + "dist" + path.sep)) return false;
  return true;
}

function detectLangForFile(fullPath) {
  const norm = fullPath.split(path.sep).join(path.sep);
  return norm.includes(path.sep + "en" + path.sep) ? "en" : "ru";
}

function ensureDir(p) {
  if (fs.existsSync(p)) return;
  fs.mkdirSync(p, { recursive: true });
}

function cleanDist() {
  if (!fs.existsSync(distDir)) return;
  const rm = fs.rmSync || fs.rmdirSync;
  try {
    rm(distDir, { recursive: true, force: true });
  } catch (e) {}
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function walkAndBuild(srcDir, partialsByLang, placeholders) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  entries.forEach((entry) => {
    const srcPath = path.join(srcDir, entry.name);
    const rel = path.relative(rootDir, srcPath);
    const destPath = path.join(distDir, rel);
    if (entry.isDirectory()) {
      if (
        srcPath.includes(path.sep + "node_modules" + path.sep) ||
        srcPath.includes(path.sep + "shared" + path.sep) ||
        srcPath.includes(path.sep + "public" + path.sep) ||
        srcPath.includes(path.sep + "dist" + path.sep)
      ) {
        return;
      }
      walkAndBuild(srcPath, partialsByLang, placeholders);
    } else if (entry.isFile()) {
      if (shouldProcessFile(srcPath)) {
        const original = fs.readFileSync(srcPath, "utf8");
        const lang = detectLangForFile(srcPath);
        const partials = partialsByLang[lang] || {};
        let next = applyPartials(original, partials);
        next = applyPlaceholders(next, placeholders);
        ensureDir(path.dirname(destPath));
        fs.writeFileSync(destPath, next, "utf8");
      } else {
        copyFile(srcPath, destPath);
      }
    }
  });
}

function buildOnce() {
  const config = readJson(configPath);
  const placeholders = buildPlaceholderMap(config);
  const partialsByLang = {
    en: loadPartialsForLang("en"),
    ru: loadPartialsForLang("ru"),
  };
  cleanDist();
  ensureDir(distDir);
  walkAndBuild(rootDir, partialsByLang, placeholders);
}

function run() {
  const args = process.argv.slice(2);
  const watch = args.includes("--watch");

  buildOnce();

  if (!watch) return;

  const watched = [rootDir, partialsDir, configPath];

  watched.forEach((p) => {
    if (!fs.existsSync(p)) return;
    const stat = fs.statSync(p);
    if (stat.isFile()) {
      fs.watch(p, { persistent: true }, () => {
        buildOnce();
      });
    } else if (stat.isDirectory()) {
      fs.watch(p, { recursive: true, persistent: true }, () => {
        buildOnce();
      });
    }
  });
}

run();
