// /seo/skachat-video-s-youtube/i18n.js
(function () {
  const STORAGE_KEY = "avenor_lang";
  const supported = ["ru", "en"];

  function getLang() {
    const p = (location.pathname || "/").toLowerCase();
  
    // Язык из URL: /ru/... /en/...
    const m = p.match(/^\/(ru|en)(\/|$)/);
    if (m && supported.includes(m[1])) return m[1];
  
    // fallback: localStorage
    const saved = (localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
    if (supported.includes(saved)) return saved;
  
    // fallback: по умолчанию
    return "ru";
  }
  

  function getDict(lang) {
    if (lang === "en") return window.__AV_SEO_DICT_EN || {};
    return window.__AV_SEO_DICT_RU || {};
  }

  function applyDict(dict) {
    // text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (dict[key] == null) return;
      el.innerHTML = String(dict[key]);
    });

    // meta content / any content attribute
    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
      const key = el.getAttribute("data-i18n-content");
      if (!key) return;
      if (dict[key] == null) return;
      el.setAttribute("content", String(dict[key]));
    });

    // og/twitter content (attr content)
    document.querySelectorAll("[data-i18n-og]").forEach((el) => {
      const key = el.getAttribute("data-i18n-og");
      if (!key) return;
      if (dict[key] == null) return;
      el.setAttribute("content", String(dict[key]));
    });

    // placeholder (на будущее)
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      if (dict[key] == null) return;
      el.setAttribute("placeholder", String(dict[key]));
    });

    // title attribute
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (!key) return;
      if (dict[key] == null) return;
      el.setAttribute("title", String(dict[key]));
    });

    // aria-label attribute
    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      if (!key) return;
      if (dict[key] == null) return;
      el.setAttribute("aria-label", String(dict[key]));
    });

    // title tag
    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      const key = titleEl.getAttribute("data-i18n");
      if (key && dict[key] != null) document.title = String(dict[key]);
    }

    // html lang
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

    // 1) Breadcrumbs
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
          "name": dict.yt_ld_breadcrumb_page || dict.yt_h1 || "Download",
          "item": pageUrl

        }
      ]
    });
  
    // 2) FAQ (берём существующие ключи)
    setJsonLd("ld-faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": dict.yt_q1,
          "acceptedAnswer": { "@type": "Answer", "text": dict.yt_a1 }
        },
        {
          "@type": "Question",
          "name": dict.yt_q2,
          "acceptedAnswer": { "@type": "Answer", "text": dict.yt_a2 }
        },
        {
          "@type": "Question",
          "name": dict.yt_q3,
          "acceptedAnswer": { "@type": "Answer", "text": dict.yt_a3 }
        }
      ]
    });
  
    // 3) SoftwareApplication
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


  // публичная функция на будущее (для переключателя)
  window.AVSeoSetLang = function (lang) {
    const l = String(lang || "").toLowerCase();
    if (!supported.includes(l)) return;
  
    localStorage.setItem(STORAGE_KEY, l);
  
    const dict = getDict(l);
    applyDict(dict);
  };
  

  // init
  const lang = getLang();
  const dict = getDict(lang);
  applyDict(dict);
  



    // ===== UI language switch (RU/EN) =====
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
    
        // сохраняем
        localStorage.setItem(STORAGE_KEY, v);
    
        // берём "slug" без языка
        const parts = location.pathname.split("/").filter(Boolean);
        const rest = (parts[0] && supported.includes(parts[0])) ? parts.slice(1) : parts;
    
        // редирект на правильный URL
        location.href = `/${v}/${rest.join("/")}`;
      });
    });
    
  
    syncLangButtons();


    
  
})();
