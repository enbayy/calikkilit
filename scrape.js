import fs from "node:fs/promises";
import axios from "axios";
import * as cheerio from "cheerio";

const BASE_URL = "https://www.atoskilit.com";
const HOME_URL = `${BASE_URL}/`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function slugifyTr(input) {
  const map = {
    ç: "c",
    Ç: "c",
    ğ: "g",
    Ğ: "g",
    ı: "i",
    İ: "i",
    ö: "o",
    Ö: "o",
    ş: "s",
    Ş: "s",
    ü: "u",
    Ü: "u",
  };

  return String(input || "")
    .trim()
    .replace(/[çÇğĞİıöÖşŞüÜ]/g, (m) => map[m] ?? m)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeText(s) {
  return String(s || "")
    .replace(/\u00a0/g, " ")
    .replace(/\s+\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const http = axios.create({
  timeout: 30000,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.7,en;q=0.5",
  },
});

const htmlCache = new Map();
async function fetchHtml(url) {
  const key = url;
  if (htmlCache.has(key)) return htmlCache.get(key);

  let lastErr;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await http.get(url);
      const data = typeof res.data === "string" ? res.data : String(res.data);
      htmlCache.set(key, data);
      await sleep(150);
      return data;
    } catch (err) {
      lastErr = err;
      await sleep(500 * attempt);
    }
  }
  throw lastErr;
}

function uniqueBy(arr, getKey) {
  const seen = new Set();
  const out = [];
  for (const item of arr) {
    const key = getKey(item);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

function absoluteUrl(href) {
  if (!href) return "";
  return new URL(href, BASE_URL).href;
}

function isPagespCategoryHref(href) {
  return typeof href === "string" && /^\/Pagesp\/7\/\d+\//i.test(href);
}

function isDetailsHref(href) {
  return typeof href === "string" && /^\/details\/\d+\//i.test(href);
}

function extractListingProducts($) {
  const products = [];

  $("article.blog-post").each((_, article) => {
    const $a = $(article).find('a[href^="/details/"]').first();
    const detailHref = $a.attr("href");
    if (!detailHref || !isDetailsHref(detailHref)) return;

    const detailUrl = absoluteUrl(detailHref);
    const nameFromH3 = $(article).find("h3 a").first().text();
    const nameFromTitle = $a.attr("title");
    const name =
      normalizeText(nameFromH3) || normalizeText(nameFromTitle) || normalizeText($a.text());

    if (!name || !detailUrl) return;

    products.push({
      name,
      slug: slugifyTr(name),
      detailUrl,
      // detail sayfasından doldurulacak alanlar:
      description: "",
      teknikOzellikler: "",
      ekstraBilgiler: "",
      image: "",
    });
  });

  return uniqueBy(products, (p) => p.detailUrl);
}

function extractPaginationUrls($, startUrl) {
  const start = new URL(startUrl);
  const parts = start.pathname.split("/").filter(Boolean); // ['Pagesp','7','1015','slug']
  const subId = parts[2]; // 1015
  const currentPrefix = subId ? `/Pagesp/7/${subId}/` : "";

  const hrefs = [];
  $("a[href]").each((_, a) => {
    const href = $(a).attr("href");
    if (!href) return;

    const hrefLower = href.toLowerCase();
    const isSameCat = currentPrefix && hrefLower.includes(currentPrefix.toLowerCase());
    if (!isSameCat) return;

    const looksLikePagination =
      hrefLower.includes("page=") ||
      hrefLower.includes("sayfa=") ||
      hrefLower.includes("page/") ||
      hrefLower.includes("sayfa/") ||
      /\bpage\b/.test(hrefLower) ||
      /\bsayfa\b/.test(hrefLower);

    if (!looksLikePagination) return;

    hrefs.push(absoluteUrl(href));
  });

  // Sayfalandırma bulunamazsa tek sayfada kalırız.
  return uniqueBy(hrefs.filter(Boolean), (u) => u);
}

async function scrapeListingAllPages(startUrl) {
  const queue = [startUrl];
  const visited = new Set();
  const productsByUrl = new Map();

  while (queue.length) {
    const url = queue.shift();
    if (visited.has(url)) continue;
    visited.add(url);

    console.log(`  - Liste sayfası: ${url}`);
    let html;
    try {
      html = await fetchHtml(url);
    } catch (err) {
      console.log(`    ! Liste sayfası çekilemedi: ${url} (${err.message})`);
      continue;
    }

    const $ = cheerio.load(html);
    const pageProducts = extractListingProducts($);
    console.log(`    - Ürün kartı: ${pageProducts.length}`);
    for (const p of pageProducts) {
      if (!p.detailUrl) continue;
      if (!productsByUrl.has(p.detailUrl)) productsByUrl.set(p.detailUrl, p);
    }

    // Pagination varsa takip et; yoksa boş döner.
    const paginationUrls = extractPaginationUrls($, url);
    for (const nextUrl of paginationUrls) {
      if (!visited.has(nextUrl)) queue.push(nextUrl);
    }
  }

  return Array.from(productsByUrl.values());
}

const TECH_HEADING_KEYS = [
  "malzeme",
  "teknik",
  "özellik",
  "ölçü",
  "boyut",
  "ağırlık",
  "din-",
  "din ",
];

function looksTechnicalText(labelText, text) {
  const l = (labelText || "").toLowerCase();
  const t = (text || "").toLowerCase();
  if (!l && !t) return false;
  if (TECH_HEADING_KEYS.some((k) => l.includes(k))) return true;
  if (TECH_HEADING_KEYS.some((k) => t.includes(k))) return true;
  if (t.includes("din-en") || t.includes("din-")) return true;
  return false;
}

async function scrapeProductDetail(detailUrl) {
  console.log(`      * Detay: ${detailUrl}`);
  const html = await fetchHtml(detailUrl);
  const $ = cheerio.load(html);

  const name =
    normalizeText($('span.new-price').first().text()) ||
    normalizeText($("h1").first().text()) ||
    normalizeText($("title").text());

  const description = normalizeText(
    `${$("#pInfo").text()}\n${$("#pDetails").text()}`
  );

  const teknikParts = [];
  const extraParts = [];

  $("#pInfo")
    .find("p")
    .each((_, p) => {
      const $p = $(p);
      const strong = normalizeText($p.find("strong").first().text());
      const txt = normalizeText($p.text());
      if (!txt) return;
      if (looksTechnicalText(strong, txt)) teknikParts.push(txt);
      else extraParts.push(txt);
    });

  // Teknik dokümanlar (PDF / STEP) pDetails içinde.
  $("#pDetails")
    .find('a[target="_blank"][href]')
    .each((_, a) => {
      const $a = $(a);
      const fileName = normalizeText($a.text());
      const href = absoluteUrl($a.attr("href"));
      if (!href || !fileName) return;
      teknikParts.push(`${fileName} - ${href}`);
    });

  return {
    name,
    slug: slugifyTr(name),
    detailUrl,
    description,
    teknikOzellikler: normalizeText(teknikParts.join("\n")),
    ekstraBilgiler: normalizeText(extraParts.join("\n")),
    image: "",
  };
}

async function mapWithConcurrency(items, limit, mapper) {
  const out = [];
  let idx = 0;

  const workers = new Array(Math.max(1, limit)).fill(null).map(async () => {
    while (idx < items.length) {
      const myIdx = idx++;
      out[myIdx] = await mapper(items[myIdx], myIdx);
    }
  });

  await Promise.allSettled(workers);
  return out.filter(Boolean);
}

async function discoverMainAndLeafSubcategories() {
  const html = await fetchHtml(HOME_URL);
  const $ = cheerio.load(html);

  const menu = $("#mbmcpebul_table");
  if (!menu.length) {
    throw new Error("Menü bulunamadı: #mbmcpebul_table");
  }

  const menuAnchors = menu
    .find('a[href^="/Pagesp/7/"][title]')
    .toArray()
    .map((el) => {
      const href = $(el).attr("href") || "";
      const title = normalizeText($(el).attr("title"));
      const depth = $(el).parents("ul").length;
      return { el, href, title, depth };
    })
    .filter((x) => isPagespCategoryHref(x.href) && x.title);

  const mainDepth = Math.min(...menuAnchors.map((x) => x.depth));
  const mainAnchors = menuAnchors.filter((x) => x.depth === mainDepth);

  const mainCategories = [];
  for (const main of mainAnchors) {
    const mainUrl = absoluteUrl(main.href);
    const mainName = main.title;

    const mainLi = $(main.el).closest("li");

    // Main'in altında görünen alt kategori anchor'larını sırayla topla.
    // Bazıları `href="#"` olabiliyor; onları da yakalayıp boşluklardan ID türetmeye çalışacağız.
    const titleAnchors = mainLi
      .find("a[title]")
      .toArray()
      .map((el) => {
        const href = $(el).attr("href") || "";
        const title = normalizeText($(el).attr("title"));
        const depth = $(el).parents("ul").length;
        return { el, href, title, depth };
      })
      .filter((x) => x.title && x.title.length > 0 && x.depth > main.depth);

    // Alt kategoriler menü ağacında main’in hemen bir seviye altındadır.
    // Bazı leaf sayfalarda boş `<ul><a href="#"></a></ul>` placeholder’ı olabildiği için
    // “child ul yok” varsayımı güvenilir olmuyor. Depth tabanlı seçiyoruz.
    const subDepths = titleAnchors.map((c) => c.depth);
    const subDepth = subDepths.length ? Math.min(...subDepths) : null;

    const subAnchorsAtDepth = subDepth
      ? titleAnchors.filter((c) => c.depth === subDepth && c.href !== main.href)
      : [];

    const knownIdFromHref = (href) => {
      const m = href.match(/^\/Pagesp\/7\/(\d+)\//i);
      return m ? Number(m[1]) : null;
    };

    const slugFromHref = (href) => {
      const parts = href.split("/").filter(Boolean); // ['Pagesp','7','<id>','<slug>']
      return parts.length >= 4 ? parts[3] : null;
    };

    // Bilinen alt kategori URL'leri + `href="#"` olanları ID boşluklarından türetip test et.
    const inferredSubs = [];
    let lastKnownId = null;
    let missingCounter = 0;

    // Belirlenen depth'teki anchor'lar HTML dokümanında zaten sırayla geliyor.
    for (const a of subAnchorsAtDepth) {
      const href = a.href || "";
      const knownId = isPagespCategoryHref(href) ? knownIdFromHref(href) : null;

      if (knownId) {
        lastKnownId = knownId;
        missingCounter = 0;

        inferredSubs.push({
          name: a.title,
          slug: slugFromHref(href) || slugifyTr(a.title),
          products: [],
          _url: absoluteUrl(href),
        });
        continue;
      }

      // `href="#"` tarzı anchor'lar için ID boşluğundan türetmeye çalışıyoruz.
      if (lastKnownId == null) continue;

      missingCounter += 1;
      const inferredId = lastKnownId + missingCounter;
      const inferredSlug = slugifyTr(a.title);
      if (!inferredSlug) continue;

      const candidateUrl = absoluteUrl(`/Pagesp/7/${inferredId}/${inferredSlug}`);
      try {
        const testHtml = await fetchHtml(candidateUrl);
        const testDom = cheerio.load(testHtml);
        const testProducts = extractListingProducts(testDom);

        // Sadece gerçek ürün listeleyen sayfaları ekle.
        if (!testProducts || testProducts.length === 0) continue;

        inferredSubs.push({
          name: a.title,
          slug: inferredSlug,
          products: [],
          _url: candidateUrl,
        });
      } catch {
        // Tahmin ettiğimiz URL varsa ama ürün yoksa ekleme.
      }
    }

    const uniqueSub = uniqueBy(inferredSubs, (s) => s._url);

    mainCategories.push({
      name: mainName,
      slug: slugifyTr(mainName),
      subcategories: uniqueSub.map((s) => ({
        name: s.name,
        slug: s.slug,
        products: [],
        _url: s._url,
      })),
      _url: mainUrl,
    });
  }

  return mainCategories;
}

async function run() {
  console.log("AtosKilıt scraper başlıyor...");

  let existingData = null;
  let existingSubProductMap = new Map();
  let globalSeenProducts = new Set();

  try {
    const existingText = await fs.readFile("products.json", "utf-8");
    existingData = JSON.parse(existingText);
  } catch {
    // İlk çalıştırma olabilir.
  }

  if (existingData && Array.isArray(existingData)) {
    for (const cat of existingData) {
      for (const sub of cat.subcategories || []) {
        const key = `${cat.slug}::${sub.slug}`;
        existingSubProductMap.set(key, sub.products || []);
        for (const p of sub.products || []) {
          if (p?.detailUrl) globalSeenProducts.add(p.detailUrl);
        }
      }
    }
  }

  const categories = await discoverMainAndLeafSubcategories();
  console.log(`Ana kategori sayısı: ${categories.length}`);

  // Global fiyat: detayları çekerken aynı ürün tekrar gelmesin.
  for (let ci = 0; ci < categories.length; ci++) {
    const cat = categories[ci];
    console.log(`\n[${ci + 1}/${categories.length}] Ana kategori: ${cat.name}`);

    for (let si = 0; si < cat.subcategories.length; si++) {
      const sub = cat.subcategories[si];
      console.log(`  - Alt kategori: ${sub.name}`);

      const key = `${cat.slug}::${sub.slug}`;
      if (existingSubProductMap.has(key) && (existingSubProductMap.get(key) || []).length > 0) {
        sub.products = existingSubProductMap.get(key);
        console.log(`    - Mevcut veri bulundu, atlandı (${sub.products.length} ürün)`);
        continue;
      }

      const listingUrl = sub._url;
      let products = [];
      try {
        products = await scrapeListingAllPages(listingUrl);
      } catch (err) {
        console.log(`    ! Liste kazıma hatası: ${listingUrl} (${err.message})`);
      }

      products = products.filter((p) => p.name && p.detailUrl && !globalSeenProducts.has(p.detailUrl));
      for (const p of products) globalSeenProducts.add(p.detailUrl);

      console.log(`    - Detay çekilecek ürün: ${products.length}`);

      // Detayları eşzamanlı çek (siteyi yormamak için limitli)
      const detailed = await mapWithConcurrency(products, 5, async (p, idx) => {
        try {
          const detail = await scrapeProductDetail(p.detailUrl);
          console.log(`        - (${idx + 1}/${products.length}) ${detail.name}`);
          return { ...p, ...detail };
        } catch (err) {
          console.log(`        ! Ürün detay hatası: ${p.detailUrl} (${err.message})`);
          return null;
        }
      });

      // Boş ürünleri alma
      const cleaned = detailed.filter((p) => p && p.name && p.detailUrl);
      sub.products = cleaned.map(({ _url, ...rest }) => rest);
    }
  }

  // Sadece istenen alanlar kalacak şekilde temizle.
  for (const cat of categories) {
    delete cat._url;
    for (const sub of cat.subcategories) {
      delete sub._url;
      for (const product of sub.products) {
        delete product._url;
      }
    }
  }

  await fs.writeFile(
    "products.json",
    JSON.stringify(categories, null, 2),
    "utf-8"
  );
  console.log("\n✅ Tamamlandı: `products.json` oluşturuldu.");
}

run().catch((err) => {
  console.error("❌ Scraper çalıştırma hatası:", err);
  process.exit(1);
});

