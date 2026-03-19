import fs from 'node:fs/promises'
import axios from 'axios'
import * as cheerio from 'cheerio'

const BASE_URL = 'https://www.guneskilit.com'

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
      await sleep(120)
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
      const my = idx++
      out[my] = await mapper(items[my], my)
    }
  })
  await Promise.allSettled(workers)
  return out.filter(Boolean)
}

function extractListingProducts(root) {
  const products = []

  root('a.eael-grid-post-link[href]').each((_, a) => {
    const href = root(a).attr('href')
    const code = normalizeText(root(a).text())
    if (!href || !code) return

    const card = root(a).closest('.eael-grid-post-holder')
    const imgSrc = card.find('img[src]').first().attr('src')
    const cardText = normalizeText(card.text()).replace(/\s+/g, ' ').trim()
    const title = cardText.replace(new RegExp(`^${code}\\s*`, 'i'), '').trim()

    const name = title ? `${code} ${title}` : code

    products.push({
      code,
      title,
      name,
      slug: slugifyTr(name),
      detailUrl: absoluteUrl(href),
      image: imgSrc ? absoluteUrl(imgSrc) : '',
      description: '',
      teknikOzellikler: '',
      ekstraBilgiler: '',
    })
  })

  return uniqueBy(products, (p) => p.detailUrl)
}

async function scrapeCategory(url) {
  const html = await fetchHtml(url)
  const root = cheerio.load(html)
  const listing = extractListingProducts(root)
  return listing
}

async function scrapeProductDetail(detailUrl) {
  const html = await fetchHtml(detailUrl)
  const root = cheerio.load(html)

  const pageTitle = normalizeText(root('title').text()).replace(/\s*–\s*Güneş Kilit\s*$/i, '').trim()
  const taxonomy = normalizeText(root('.wpr-post-info-taxonomy').first().text())

  const imgs = root('img[src]')
    .toArray()
    .map((el) => root(el).attr('src'))
    .filter(Boolean)
    .filter((s) => s.includes('/wp-content/uploads/') && !s.includes('logolar'))

  const uniqImgs = Array.from(new Set(imgs)).slice(0, 8)

  // Ürün detay içerikleri: farklı sayfalarda "MALZEME DETAYLARI" h4/h5/p olarak gelebiliyor.
  let malzemeDetaylari = ''
  let teknikCizimUrl = ''
  let digerBilgiler = ''

  const containerCandidates = root('.elementor-widget-container')
    .toArray()
    .map((el) => root(el))
    .filter((c) => {
      const t = normalizeText(c.text()).toLowerCase()
      return t.includes('malzeme detay') || t.includes('minimum sipariş') || t.includes('koli miktarı') || t.includes('teknik çizim')
    })

  const container = containerCandidates.length ? containerCandidates[0] : null

  if (container) {
    const linesMalzeme = []
    const linesOther = []
    let inMalzeme = false
    let sawMalzemeHeading = false
    let inTeknik = false
    let ignore = false

    const nodes = container.find('h3,h4,h5,p,img,li').toArray()
    for (const el of nodes) {
      const tag = String(el.tagName || '').toLowerCase()
      const text = normalizeText(root(el).text())

      if (/sormak\s*istedikleriniz/i.test(text) || /^hakkımızda$/i.test(text)) {
        ignore = true
      }
      if (ignore) continue
      if (/^©/i.test(text)) continue

      const isMalzemeHeading = /malzeme\s*detay/i.test(text)
      const isTeknikHeading = /^teknik\s*çizim$/i.test(text)

      if (tag === 'h3' && text) {
        // ürün adı gibi; diğer bilgileri kirletmesin
        continue
      }

      if ((tag === 'h4' || tag === 'h5' || tag === 'p') && isTeknikHeading) {
        inTeknik = true
        inMalzeme = false
        continue
      }

      if ((tag === 'h4' || tag === 'h5') && isMalzemeHeading) {
        sawMalzemeHeading = true
        inMalzeme = true
        inTeknik = false
        linesMalzeme.push('MALZEME DETAYLARI')
        continue
      }

      if (tag === 'img') {
        const src = root(el).attr('src')
        if (inTeknik && src && !teknikCizimUrl) {
          teknikCizimUrl = absoluteUrl(src)
        }
        continue
      }

      if (!text) continue

      // Malzeme bölümünde: hem "GÖVDE" başlıkları hem de "KOVAN: ..." satırları gelir.
      if (inMalzeme) {
        if (/minimum\s*sipariş|koli\s*miktarı/i.test(text)) {
          linesOther.push(text)
          continue
        }
        linesMalzeme.push(text)
        continue
      }

      // Malzeme başlığı yoksa ama malzeme satırları ":" içeriyor olabilir; bu durumda malzeme olarak alalım.
      if (!sawMalzemeHeading && /:\s*/.test(text) && /(zamak|çelik|polyamide|pa6|din-en|kauçuk)/i.test(text)) {
        linesMalzeme.push(text)
        continue
      }

      // Diğer bilgiler (min sipariş, koli miktarı, vs.)
      if (/minimum\s*sipariş|koli\s*miktarı/i.test(text)) {
        linesOther.push(text)
        continue
      }
    }

    malzemeDetaylari = normalizeText(linesMalzeme.join('\n'))
    digerBilgiler = normalizeText(linesOther.join('\n'))
  }

  return {
    // Bu alanları UI'da artık göstermeyeceğiz; ama boş bırakmak yerine saklayalım.
    description: normalizeText([taxonomy ? `Kategori: ${taxonomy}` : '', pageTitle ? `Ürün: ${pageTitle}` : ''].filter(Boolean).join('\n')),
    teknikOzellikler: '',
    ekstraBilgiler: uniqImgs.length ? `Görseller:\n${uniqImgs.join('\n')}` : '',
    malzemeDetaylari,
    teknikCizimUrl,
    digerBilgiler,
  }
}

async function main() {
  console.log('Güneş Kilit scraper başlıyor...')

  const input = [
    { name: 'Kollu Kilitler', url: 'https://www.guneskilit.com/category/kollu-kilitler/' },
    { name: 'Çeyrek Dönüşlü Kilitler', url: 'https://www.guneskilit.com/category/ceyrek-donuslu-kilitler/' },
    { name: 'Menteşeler', url: 'https://www.guneskilit.com/category/menteseler/' },
    { name: 'Contalar', url: 'https://www.guneskilit.com/category/contalar/' },
    { name: 'Trafo ve Kabin Kilitleri', url: 'https://www.guneskilit.com/category/trafo-ve-kabin-kilitleri/' },
    { name: 'Dolap Kilitleri', url: 'https://www.guneskilit.com/category/dolap-kilitleri/' },
    { name: 'Mobilya ve Çelik Eşya', url: 'https://www.guneskilit.com/category/mobilya-ve-celik-esya/' },
    { name: 'Aksesuarlar', url: 'https://www.guneskilit.com/category/aksesuarlar/' },
    { name: 'Diğer Ürünler', url: 'https://www.guneskilit.com/category/diger-urunler/' },
  ]

  const maxProductsPerCategory = process.env.MAX_PRODUCTS ? Number(process.env.MAX_PRODUCTS) : null

  const categories = []

  for (const cat of input) {
    console.log(`\n=== ${cat.name} ===`)
    let products = await scrapeCategory(cat.url)
    if (maxProductsPerCategory) products = products.slice(0, maxProductsPerCategory)
    console.log(`- Liste ürün: ${products.length}`)

    const detailed = await mapWithConcurrency(products, 6, async (p, idx) => {
      try {
        if (idx > 0) await sleep(80)
        const d = await scrapeProductDetail(p.detailUrl)
        return { ...p, ...d }
      } catch (err) {
        console.log(`  ! Detay hata: ${p.detailUrl} (${err.message})`)
        return p
      }
    })

    categories.push({
      name: cat.name,
      slug: `gunes-${slugifyTr(cat.name)}`,
      subcategories: [
        {
          name: cat.name,
          slug: `gunes-${slugifyTr(cat.name)}`,
          products: detailed,
        },
      ],
    })
  }

  await fs.writeFile('gunes-products.json', JSON.stringify(categories, null, 2), 'utf8')
  await fs.writeFile('public/gunes-products.json', JSON.stringify(categories, null, 2), 'utf8')
  console.log('\n✅ Tamamlandı: `public/gunes-products.json` oluşturuldu.')
}

main().catch((err) => {
  console.error('❌ Güneş scraper hatası:', err)
  process.exit(1)
})

