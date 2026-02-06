(function () {
  const STORAGE_KEY = "avenor_lang";
  const supported = ["ru", "en"];

  function getLang() {
    const p = (location.pathname || "/").toLowerCase();
    let m = p.match(/^\/seo\/(ru|en)(\/|$)/);
    if (m && supported.includes(m[1])) return m[1];
    m = p.match(/^\/(ru|en)(\/|$)/);
    if (m && supported.includes(m[1])) return m[1];
    const saved = (localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
    if (supported.includes(saved)) return saved;
    return "ru";
  }

  function getDict(lang) {
    if (lang === "en") return window.__AV_SEO_DICT_EN || {};
    return window.__AV_SEO_DICT_RU || {};
  }

  function applyDict(dict) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (dict[key] == null) return;
      el.innerHTML = String(dict[key]);
    });

    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
      const key = el.getAttribute("data-i18n-content");
      if (!key) return;
      if (dict[key] == null) return;
      el.setAttribute("content", String(dict[key]));
    });

    document.querySelectorAll("[data-i18n-og]").forEach((el) => {
      const key = el.getAttribute("data-i18n-og");
      if (!key) return;
      if (dict[key] == null) return;
      el.setAttribute("content", String(dict[key]));
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      if (dict[key] == null) return;
      el.setAttribute("placeholder", String(dict[key]));
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (!key) return;
      if (dict[key] == null) return;
      el.setAttribute("title", String(dict[key]));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      if (!key) return;
      if (dict[key] == null) return;
      el.setAttribute("aria-label", String(dict[key]));
    });

    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      const key = titleEl.getAttribute("data-i18n");
      if (key && dict[key] != null) document.title = String(dict[key]);
    }

    document.documentElement.setAttribute("lang", getLang());
    const ogLocale = document.getElementById("ogLocale");
    if (ogLocale) ogLocale.setAttribute("content", getLang() === "en" ? "en_US" : "ru_RU");

    buildJsonLd(dict);
  }

  function setJsonLd(id, obj) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = JSON.stringify(obj);
  }

  function buildJsonLd(dict) {
    const homeUrl = location.origin + "/";
    const pageUrl = location.origin + location.pathname.replace(/\/$/, "");

    setJsonLd("ld-breadcrumb", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": dict.yt_ld_breadcrumb_home || "Avenor Downloader",
          "item": homeUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": dict.yt_ld_breadcrumb_page || dict.yt_h1 || "Clip",
          "item": pageUrl
        }
      ]
    });

    const faqItems = [
      { q: dict.yt_q1, a: dict.yt_a1 },
      { q: dict.yt_q2, a: dict.yt_a2 },
      { q: dict.yt_q3, a: dict.yt_a3 },
      { q: dict.yt_q4, a: dict.yt_a4 },
      { q: dict.yt_q5, a: dict.yt_a5 },
      { q: dict.yt_q6, a: dict.yt_a6 }
    ].filter((item) => item.q && item.a);

    if (faqItems.length > 0) {
      setJsonLd("ld-faq", {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        }))
      });
    }

    setJsonLd("ld-app", {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": dict.yt_ld_app_name || "Avenor Downloader",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Windows",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR"
      },
      "downloadUrl": "https://avenordownload.app/download/win",
      "url": "https://avenordownload.app/",
      "description": dict.yt_ld_app_desc || dict.yt_page_desc
    });
  }

  window.AVSeoSetLang = function (lang) {
    const l = String(lang || "").toLowerCase();
    if (!supported.includes(l)) return;
    localStorage.setItem(STORAGE_KEY, l);
    const dict = getDict(l);
    applyDict(dict);
  };

  const lang = getLang();
  const dict = getDict(lang);
  applyDict(dict);

  function syncLangButtons() {
    const cur = getLang();
    document.querySelectorAll("[data-lang-btn]").forEach((b) => {
      const v = String(b.getAttribute("data-lang-btn") || "").toLowerCase();
      b.classList.toggle("is-active", v === cur);
    });
  }

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const v = String(btn.getAttribute("data-lang-btn") || "").toLowerCase();
      if (!supported.includes(v)) return;
      localStorage.setItem(STORAGE_KEY, v);

      const parts = location.pathname.split("/").filter(Boolean);
      let restParts = parts;
      let prefix = "";
      if (parts[0] === "seo") {
        prefix = "seo";
        restParts = parts.slice(1);
      }
      if (restParts[0] && supported.includes(restParts[0])) {
        restParts = restParts.slice(1);
      }
      const rest = restParts.join("/");
      const target = prefix ? `/seo/${v}/${rest}` : `/${v}/${rest}`;
      location.href = rest ? target : (prefix ? `/seo/${v}` : `/${v}`);
    });
  });

  syncLangButtons();
})();
