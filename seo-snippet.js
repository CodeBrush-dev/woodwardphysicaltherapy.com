// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.woodwardphysicaltherapy.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.woodwardphysicaltherapy.com/","title_tag":"Physical Therapy Denver & Whole Body Health | Woodward PT","meta_description":"Holistic physical therapy in Denver focusing on whole body health, pelvic floor therapy, craniosacral care and personalized plans to relieve pain and restore function."},{"page_url":"https://www.woodwardphysicaltherapy.com/patient-stories","title_tag":"Chronic Pain Treatment Denver Stories | Woodward PT","meta_description":"Read real patient stories of chronic pain treatment, pelvic floor care and neuromeningeal mobilization in Denver. Discover holistic paths to lasting relief."},{"page_url":"https://www.woodwardphysicaltherapy.com/a-b-o-u-t","title_tag":"Holistic Wellness Denver & Whole Body Health | Woodward PT","meta_description":"Meet Margaret Woodward, Denver physical therapist specializing in holistic wellness, craniosacral therapy and personalized care plans for whole body health."},{"page_url":"https://www.woodwardphysicaltherapy.com/s-e-r-v-i-c-e-s","title_tag":"Pelvic Floor & Craniosacral Therapy Denver | Woodward PT","meta_description":"Specialized rehabilitation services in Denver, including pelvic floor therapy, craniosacral therapy, neuromeningeal mobilization and personalized care plans."},{"page_url":"https://www.woodwardphysicaltherapy.com/about-5","title_tag":"Long COVID Physical Therapy Denver | Woodward PT","meta_description":"Long COVID physical therapy in Denver using craniosacral and visceral techniques to ease brain fog, fatigue and breathing issues with whole body treatment."},{"page_url":"https://www.woodwardphysicaltherapy.com/contact-4","title_tag":"Physical Therapy Denver Contact & Rehabilitation | Woodward PT","meta_description":"Contact Woodward Physical Therapy in Denver for holistic rehabilitation services, pelvic floor therapy, craniosacral treatment and personalized care plans."},{"page_url":"https://www.woodwardphysicaltherapy.com/general-5","title_tag":"Holistic Wellness Denver Resources | Woodward PT","meta_description":"Explore holistic wellness resources in Denver, including rehab, Pilates, massage, yoga and counseling referrals to support your whole body health journey."}],"keywords":["physical therapy denver","pelvic floor therapy denver","craniosacral therapy denver","chronic pain treatment denver","holistic wellness denver","neuromeningeal mobilization denver","whole body health denver","long covid physical therapy denver","personalized care plans denver","rehabilitation services denver"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "PhysicalTherapy",
  "@id": "https://www.woodwardphysicaltherapy.com/#physicaltherapy",
  "name": "Woodward Physical Therapy and Complementary Wellness",
  "url": "https://www.woodwardphysicaltherapy.com/",
  "image": "https://static.wixstatic.com/media/f58a4a_5f5a30a655744c0691026fa0c3360365%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/f58a4a_5f5a30a655744c0691026fa0c3360365%7Emv2.png",
  "logo": "https://static.wixstatic.com/media/f58a4a_5f5a30a655744c0691026fa0c3360365%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/f58a4a_5f5a30a655744c0691026fa0c3360365%7Emv2.png",
  "description": "Woodward Physical Therapy and Complementary Wellness in Denver, CO provides holistic, whole-body physical therapy, pelvic floor therapy, craniosacral therapy, visceral mobilization, neuromeningeal mobilization, and specialized care for long COVID, chronic pain, orthopedic and trauma-related conditions.",
  "telephone": "+1-720-398-6828",
  "email": "mailto:Woodwardptwellness@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7550 West Yale Avenue, Building B, Suite 200, Office # 3",
    "addressLocality": "Denver",
    "addressRegion": "CO",
    "postalCode": "80227",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.667,
    "longitude": -105.082
  },
  "areaServed": {
    "@type": "City",
    "name": "Denver"
  },
  "sameAs": [],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday"
      ],
      "opens": "08:00",
      "closes": "16:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Tuesday"
      ],
      "opens": "12:30",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Wednesday"
      ],
      "opens": "08:00",
      "closes": "16:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Thursday"
      ],
      "opens": "12:30",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Friday"
      ],
      "opens": "08:00",
      "closes": "12:30"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Check, HSA",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Physical Therapy Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Initial Evaluation",
        "price": "140",
        "priceCurrency": "USD",
        "description": "Comprehensive 75–90 minute diagnostic physical therapy evaluation focusing on unresolved symptoms, pain, and functional limitations.",
        "url": "https://www.woodwardphysicaltherapy.com/s-e-r-v-i-c-e-s"
      },
      {
        "@type": "Offer",
        "name": "Physical Therapy Follow-Up Appointment",
        "price": "125",
        "priceCurrency": "USD",
        "description": "Individually tailored 75–90 minute physical therapy follow-up session using manual therapy, education, and exercise to support ongoing healing.",
        "url": "https://www.woodwardphysicaltherapy.com/s-e-r-v-i-c-e-s"
      },
      {
        "@type": "Offer",
        "name": "Pelvic Floor Therapy",
        "description": "Pelvic floor physical therapy to address persistent low back and tailbone pain, urinary incontinence, digestive issues, abdominal and pelvic pain, and painful intercourse.",
        "url": "https://www.woodwardphysicaltherapy.com/s-e-r-v-i-c-e-s"
      },
      {
        "@type": "Offer",
        "name": "Craniosacral Therapy",
        "description": "Gentle craniosacral therapy to reduce injury-related anxiety and depression, physical and emotional stress, and improve spinal and joint mobility.",
        "url": "https://www.woodwardphysicaltherapy.com/s-e-r-v-i-c-e-s"
      },
      {
        "@type": "Offer",
        "name": "Visceral Mobilization Therapy",
        "description": "Visceral mobilization to address recurring musculoskeletal pain, biomechanical dysfunction, postural issues, and organ-related restrictions.",
        "url": "https://www.woodwardphysicaltherapy.com/s-e-r-v-i-c-e-s"
      },
      {
        "@type": "Offer",
        "name": "Long COVID Rehabilitation",
        "description": "Manual therapy-based treatment for long COVID-related fatigue, brain fog, and breathing issues through craniosacral and organ/fascial work.",
        "url": "https://www.woodwardphysicaltherapy.com/about-5"
      }
    ]
  },
  "founder": {
    "@type": "Person",
    "name": "Margaret Woodward",
    "jobTitle": "Physical Therapist",
    "description": "Margaret Woodward, M.S., P.T., C.S.T. is a physical therapist specializing in whole-body, holistic manual therapy for complex pain, pelvic floor dysfunction, craniosacral and visceral mobilization, and patients who have not responded to traditional physical therapy.",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Colorado Health Sciences Center"
    }
  },
  "foundingDate": "1994",
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Holistic and Integrated Manual Therapy",
      "description": "Orthopedic manual therapy, visceral mobilization, craniosacral therapy, neuromeningeal mobilization, nerve release techniques, fascial techniques, and scar tissue release for complex pain and dysfunction.",
      "url": "https://www.woodwardphysicaltherapy.com/s-e-r-v-i-c-e-s"
    }
  ],
  "subjectOf": [
    {
      "@type": "WebPage",
      "@id": "https://www.woodwardphysicaltherapy.com/patient-stories",
      "url": "https://www.woodwardphysicaltherapy.com/patient-stories",
      "name": "Patient Stories",
      "description": "Real patient stories illustrating Woodward Physical Therapy's approach to frozen shoulder, chronic headaches, abdominal pain, plantar fasciitis-like symptoms, persistent low back pain, postpartum pelvic pain, and upper rib pain."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.woodwardphysicaltherapy.com/a-b-o-u-t",
      "url": "https://www.woodwardphysicaltherapy.com/a-b-o-u-t",
      "name": "About Woodward Physical Therapy",
      "description": "Background on Margaret Woodward, M.S., P.T., C.S.T., her philosophy of whole-body physical therapy, and her mission to treat complex, unresolved pain conditions."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.woodwardphysicaltherapy.com/s-e-r-v-i-c-e-s",
      "url": "https://www.woodwardphysicaltherapy.com/s-e-r-v-i-c-e-s",
      "name": "Services & Pricing",
      "description": "Details of initial evaluations, follow-up physical therapy appointments, pelvic floor therapy, craniosacral therapy, visceral mobilization, trauma-related injury rehabilitation, and pricing."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.woodwardphysicaltherapy.com/about-5",
      "url": "https://www.woodwardphysicaltherapy.com/about-5",
      "name": "Long COVID",
      "description": "Information on Woodward Physical Therapy's whole-body manual therapy approach for patients with long COVID symptoms including fatigue, brain fog, and breathing issues."
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.woodwardphysicaltherapy.com/contact-4",
      "url": "https://www.woodwardphysicaltherapy.com/contact-4",
      "name": "Contact Woodward Physical Therapy",
      "description": "Contact information, hours, and directions for Woodward Physical Therapy and Complementary Wellness in Denver, Colorado."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
