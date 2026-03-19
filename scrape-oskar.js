import fs from 'node:fs/promises'
import axios from 'axios'
import * as cheerio from 'cheerio'

const BASE_URL = 'https://www.istanbulkilit.com'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function normalizeText(s) {
  return String(s || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function slugifyTr(input) {
  const map = {
    ç: 'c',
    Ç: 'c',
    ğ: 'g',
    Ğ: 'g',
    ı: 'i',
    İ: 'i',
    ö: 'o',
    Ö: 'o',
    ş: 's',
    Ş: 's',
    ü: 'u',
    Ü: 'u',
  }

  return normalizeText(input)
    .replace(/[çÇğĞİıöÖşŞüÜ]/g, (m) => map[m] ?? m)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function absoluteUrl(href) {
  if (!href) return ''
  return new URL(href, BASE_URL).href
}

function escapeRegExp(s) {
  return String(s || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function isKtHrefForSlug(href, urlSlug) {
  if (!href || !urlSlug) return false
  const h = String(href).toLowerCase()
  const s = String(urlSlug).toLowerCase()
  // `/slug,KT_123.html` gibi tam eşleşme arıyoruz (slug başka slug'ın içinde geçmesin).
  const re = new RegExp(`(^|/)${escapeRegExp(s)},kt_\\d+\\.html$`, 'i')
  return re.test(h)
}

const http = axios.create({
  timeout: 30000,
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.7,en-US;q=0.5',
  },
})

const htmlCache = new Map()
async function fetchHtml(url) {
  const key = url
  if (htmlCache.has(key)) return htmlCache.get(key)
  let lastErr
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await http.get(url)
      const data = typeof res.data === 'string' ? res.data : String(res.data)
      htmlCache.set(key, data)
      await sleep(150)
      return data
    } catch (err) {
      lastErr = err
      await sleep(500 * attempt)
    }
  }
  throw lastErr
}

function uniqueBy(arr, getKey) {
  const seen = new Set()
  const out = []
  for (const item of arr) {
    const key = getKey(item)
    if (!key || seen.has(key)) continue
    seen.add(key)
    out.push(item)
  }
  return out
}

async function mapWithConcurrency(items, limit, mapper) {
  const out = new Array(items.length)
  let idx = 0

  const workers = new Array(Math.max(1, limit)).fill(null).map(async () => {
    while (idx < items.length) {
      const myIdx = idx++
      out[myIdx] = await mapper(items[myIdx], myIdx)
    }
  })

  await Promise.allSettled(workers)
  return out.filter(Boolean)
}

function extractListingProducts(root) {
  const products = []

  root('a[href]').each((_, a) => {
    const href = root(a).attr('href')
    if (!href) return
    // IstanbulKilits ürün detay linkleri: /... ,PD_1234.html
    if (!/,\s*PD_\d+\.html/i.test(href)) return

    const rawName = normalizeText(root(a).text())
    // Bazı kartlarda kod satırı alt satıra düşüyor; ürün kartı başlığı için tek satır yapalım.
    const name = rawName.replace(/\s*\n\s*/g, ' ').trim()
    if (!name) return

    // Kart görselini (listing) yakalamaya çalış.
    let image = ''
    const $a = root(a)
    const imgSrc =
      $a.find('img[src]').first().attr('src') ||
      $a.closest('div,li,td').find('img[src]').first().attr('src') ||
      $a.parent().find('img[src]').first().attr('src')

    if (imgSrc) image = absoluteUrl(imgSrc)

    products.push({
      name,
      slug: slugifyTr(name),
      detailUrl: absoluteUrl(href),
      image,
    })
  })

  // Aynı ürünün farklı sayfada tekrar gelmesini engelle.
  return uniqueBy(products, (p) => p.detailUrl)
}

function extractPaginationUrls(root, currentUrl) {
  const urls = []
  const base = new URL(currentUrl)

  root('a[href]').each((_, a) => {
    const href = root(a).attr('href')
    if (!href) return
    const low = href.toLowerCase()
    if (low.includes('?sayfa=') || low.includes('?page=')) {
      urls.push(new URL(href, base).href)
    }
  })

  return uniqueBy(urls, (u) => u)
}

function cleanLines(text) {
  return normalizeText(text)
    .split('\n')
    .map((l) => normalizeText(l))
    .filter(Boolean)
}

function removeLinesContaining(text, patterns) {
  const lines = normalizeText(text).split(/\r?\n/)
  const out = lines.filter((l) => {
    const ll = normalizeText(l).toLowerCase()
    return !patterns.some((p) => ll.includes(p.toLowerCase()))
  })
  return normalizeText(out.join('\n'))
}

async function scrapeProductDetail(detailUrl) {
  const html = await fetchHtml(detailUrl)
  const root = cheerio.load(html)

  // Liste sayfasında adı genelde doğru geliyor; burada da #yarim1 içinden tekrar çekmeye çalışıyoruz.
  const yarim1 = root('#yarim1')

  let codeFromPage = ''
  let nameFromPage = ''
  let description = ''
  let teknikOzellikler = ''
  let ekstraBilgiler = ''
  let image = ''

  if (yarim1.length) {
    const infoText = yarim1.text().replace(/\s+/g, ' ').trim()
    const mCode = infoText.match(/Ürün\s*Kod\s*:\s*(.+?)(Ürün\s*Adı\s*:|$)/i)
    if (mCode?.[1]) codeFromPage = normalizeText(mCode[1])
    const mName = infoText.match(/Ürün\s*Adı\s*:\s*(.+?)(Ürün\s*Kod\s*:|$)/i)
    if (mName?.[1]) nameFromPage = normalizeText(mName[1])
  }

  // Sekmeler: Açıklama / Teknik Detay / Sipariş
  const descriptionTab = root('[data-pws-tab-name="Açıklama"]').first()
  const teknikTab = root('[data-pws-tab-name="Teknik Detay"]').first()
  const siparisTab = root('[data-pws-tab-name="Sipariş"]').first()

  description = descriptionTab.length ? normalizeText(descriptionTab.text()) : ''
  // Teknik Detay çoğu zaman resim içeriyor; metin boş kalabiliyor.
  teknikOzellikler = teknikTab.length ? normalizeText(teknikTab.text()) : ''
  ekstraBilgiler = siparisTab.length ? normalizeText(siparisTab.text()) : ''

  const teknikImg = teknikTab.find('img[src]').first().attr('src')
  // Detay sayfasında teknik görsel (genelde büyük) var; ama UI'da "Teknik Görsel" istemiyoruz.
  // Bu yüzden teknik görsel URL'ini kaydetmiyoruz.
  void teknikImg

  // Not: Ürün kartında (listing) görseli kullanmak istiyoruz; burada `image` alanını ezmiyoruz.

  // Gereksiz satırları temizle.
  description = removeLinesContaining(description, ['ürün kod', 'ürün adı'])

  const teknikLines = cleanLines(teknikOzellikler)
  teknikOzellikler = normalizeText(teknikLines.join('\n'))

  return {
    description,
    teknikOzellikler,
    ekstraBilgiler,
  }
}

async function scrapeListingAllPages(startUrl, { maxProducts = null } = {}) {
  const queue = [startUrl]
  const visited = new Set()
  const productsByUrl = new Map()

  while (queue.length) {
    const url = queue.shift()
    if (visited.has(url)) continue
    visited.add(url)

    console.log(`  - Liste sayfası: ${url}`)
    let html
    try {
      html = await fetchHtml(url)
    } catch (err) {
      console.log(`    ! Liste çekilemedi: ${url} (${err.message})`)
      continue
    }

    const root = cheerio.load(html)
    const pageProducts = extractListingProducts(root)
    console.log(`    - Ürün kartı: ${pageProducts.length}`)

    for (const p of pageProducts) {
      if (!p.detailUrl) continue
      if (!productsByUrl.has(p.detailUrl)) productsByUrl.set(p.detailUrl, p)
    }

    if (maxProducts && productsByUrl.size >= maxProducts) break

    const paginationUrls = extractPaginationUrls(root, url)
    for (const nextUrl of paginationUrls) {
      if (!visited.has(nextUrl)) queue.push(nextUrl)
    }
  }

  return Array.from(productsByUrl.values()).slice(0, maxProducts ?? undefined)
}

async function discoverSubcategoryPage(mainUrl, expectedSubSlugs) {
  const html = await fetchHtml(mainUrl)
  const root = cheerio.load(html)

  const hrefBySlug = new Map()
  root('a[href]').each((_, a) => {
    const href = root(a).attr('href')
    if (!href) return
    for (const s of expectedSubSlugs) {
      if (isKtHrefForSlug(href, s)) {
        if (!hrefBySlug.has(s)) hrefBySlug.set(s, href)
      }
    }
  })

  return hrefBySlug
}

async function findKtHrefOnPage(pageUrl, urlSlug) {
  const html = await fetchHtml(pageUrl)
  const root = cheerio.load(html)
  let found = ''
  root('a[href]').each((_, a) => {
    if (found) return
    const href = root(a).attr('href')
    if (!href) return
    if (isKtHrefForSlug(href, urlSlug)) {
      found = href
    }
  })
  return found
}

async function main() {
  const maxProductsPerSubcategory = process.env.MAX_PRODUCTS
    ? Number(process.env.MAX_PRODUCTS)
    : null

  console.log('Oskar scraper başlıyor...')

  const config = [
    {
      groupTitle: 'KİLİTLER',
      mainUrl: `${BASE_URL}/kilitler,KT_1.html`,
      subcategories: [
        {
          title: 'Kollu Kilitler Ve Aksesuarlar',
          urlSlug: 'kollu-kilitler-ve-aksesuarlar',
          slug: 'oskar-kollu-kilitler-ve-aksesuarlar',
          // Bu sayfa ürün listelemez; UI'da alt başlık kartlarını göstermek için container olarak kalır.
          isContainer: true,
        },
        {
          title: 'İspanyolet Sistemli Kollu Pano Kilitleri',
          urlSlug: 'ispanyolet-sistemli-kollu-pano-kilitleri',
          slug: 'oskar-ispanyolet-sistemli-kollu-pano-kilitleri',
          parentSlug: 'oskar-kollu-kilitler-ve-aksesuarlar',
        },
        {
          title: 'Kollu Pano Kilitleri',
          urlSlug: 'kollu-pano-kilitleri',
          slug: 'oskar-kollu-pano-kilitleri',
          parentSlug: 'oskar-kollu-kilitler-ve-aksesuarlar',
        },
        {
          title: 'ispanyolet Çubuklar Ve Aksesuarları',
          urlSlug: 'ispanyolet-cubuklar-ve-aksesuarlari',
          slug: 'oskar-ispanyolet-cubuklar-ve-aksesuarlari',
          parentSlug: 'oskar-kollu-kilitler-ve-aksesuarlar',
        },
        {
          title: 'Anahtarlar',
          urlSlug: 'anahtarlar',
          slug: 'oskar-anahtarlar',
          parentSlug: 'oskar-kollu-kilitler-ve-aksesuarlar',
        },
        { title: 'Kabin Kilitleri', urlSlug: 'kabin-kilitleri', slug: 'oskar-kabin-kilitleri' },
        { title: 'Çeyrek Dönüşlü Kitler', urlSlug: 'ceyrek-donuslu-kiltler', slug: 'oskar-ceyrek-donuslu-kiltler' },
        { title: 'Çekmece ve Dolap Kilitleri', urlSlug: 'cekmece-ve-dolap-kilitleri', slug: 'oskar-cekmece-ve-dolap-kilitleri' },
        { title: 'Çeşitli Kilitler', urlSlug: 'cesitli-kilitler', slug: 'oskar-cesitli-kilitler' },
      ],
    },
    {
      groupTitle: 'MENTEŞELER',
      mainUrl: `${BASE_URL}/menteseler,KT_266.html`,
      subcategories: [
        { title: 'Kenar Menteşeler', urlSlug: 'kenar-menteseler', slug: 'oskar-kenar-menteseler' },
        { title: 'Köşe Menteşeler', urlSlug: 'kose-menteseler', slug: 'oskar-kose-menteseler' },
        { title: 'Gizli Pano Menteşeleri', urlSlug: 'gizli-pano-menteseleri', slug: 'oskar-gizli-pano-menteseleri' },
        { title: 'Yaprak Menteşeler', urlSlug: 'yaprak-menteseler', slug: 'oskar-yaprak-menteseler' },
      ],
    },
    {
      groupTitle: 'AKSESUARLAR',
      mainUrl: `${BASE_URL}/aksesuarlar,KT_268.html`,
      subcategories: [
        { title: 'Pano Aksesuarları', urlSlug: 'pano-aksesuarlari', slug: 'oskar-pano-aksesuarlari' },
        { title: 'Contalar', urlSlug: 'contalar', slug: 'oskar-contalar' },
      ],
    },
    {
      groupTitle: 'PASLANMAZ ÇELİK ÜRÜNLER',
      mainUrl: `${BASE_URL}/paslanmaz-celik-urunler,KT_337.html`,
      subcategories: [{ title: 'PASLANMAZ ÇELİK ÜRÜNLER', urlSlug: 'paslanmaz-celik-urunler', slug: 'oskar-paslanmaz-celik-urunler', direct: true }],
    },
  ]

  const oskarCategories = []

  for (const mainCat of config) {
    console.log(`\n=== ${mainCat.groupTitle} ===`)
    const expectedSubSlugs = mainCat.subcategories.map((s) => s.urlSlug)
    const hrefBySlug = mainCat.subcategories.some((s) => !s.direct)
      ? await discoverSubcategoryPage(mainCat.mainUrl, expectedSubSlugs)
      : new Map()

    const oskarSubcategories = []

    for (const sub of mainCat.subcategories) {
      let subPageHref = sub.direct ? `${mainCat.mainUrl}` : hrefBySlug.get(sub.urlSlug)

      // Bazı alt başlıklar (örn. Kollu Kilitler...) kendi sayfasında değil,
      // parent (container) KT sayfasının altında listeleniyor.
      if (!subPageHref && sub.parentSlug) {
        const parent = mainCat.subcategories.find((s) => s.slug === sub.parentSlug)
        const parentHref = parent ? hrefBySlug.get(parent.urlSlug) : null
        const parentUrl = parentHref ? absoluteUrl(parentHref) : null
        if (parentUrl) {
          subPageHref = await findKtHrefOnPage(parentUrl, sub.urlSlug)
        }
      }

      if (!subPageHref) {
        console.log(`  ! Alt sayfa bulunamadı: ${sub.title} (urlSlug=${sub.urlSlug})`)
        continue
      }

      const subPageUrl = sub.direct ? subPageHref : absoluteUrl(subPageHref)

      console.log(`\n  - Alt kategori: ${sub.title}`)
      let listingProducts = []

      if (sub.isContainer) {
        listingProducts = []
      } else {
        listingProducts = await scrapeListingAllPages(subPageUrl, {
          maxProducts: maxProductsPerSubcategory,
        })
      }

      console.log(`  - Detay çekilecek ürün: ${listingProducts.length}`)
      const detailed = await mapWithConcurrency(listingProducts, 5, async (p, idx) => {
        try {
          // küçük bekleme: siteyi yormamak için
          if (idx > 0) await sleep(80)
          const detail = await scrapeProductDetail(p.detailUrl)
          return { ...p, ...detail }
        } catch (err) {
          console.log(`    ! Detay hatası: ${p.detailUrl} (${err.message})`)
          return null
        }
      })

      const cleaned = detailed.filter(Boolean)

      oskarSubcategories.push({
        name: sub.title,
        slug: sub.slug,
        parentSlug: sub.parentSlug,
        products: cleaned,
      })
    }

    oskarCategories.push({
      name: mainCat.groupTitle,
      slug: slugifyTr(mainCat.groupTitle),
      subcategories: oskarSubcategories,
    })
  }

  // Dosya yazımı
  const out = oskarCategories
  await fs.writeFile('oskar-products.json', JSON.stringify(out, null, 2), 'utf8')
  await fs.writeFile('public/oskar-products.json', JSON.stringify(out, null, 2), 'utf8')
  console.log('✅ Tamamlandı: `public/oskar-products.json` oluşturuldu.')
}

main().catch((err) => {
  console.error('❌ Oskar scraper hatası:', err)
  process.exit(1)
})

