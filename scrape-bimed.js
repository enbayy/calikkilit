import fs from 'node:fs/promises'
import axios from 'axios'
import * as cheerio from 'cheerio'

const BASE_URL = 'https://www.bimedteknik.com'
const MAIN_PRODUCTS_URL = `${BASE_URL}/en/category/main-products`

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

function normalizeText(s) {
  return String(s || '')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function absoluteUrl(href) {
  if (!href) return ''
  return new URL(href, BASE_URL).href
}

function slugifyTr(input) {
  const map = { ç: 'c', Ç: 'c', ğ: 'g', Ğ: 'g', ı: 'i', İ: 'i', ö: 'o', Ö: 'o', ş: 's', Ş: 's', ü: 'u', Ü: 'u' }
  return normalizeText(input)
    .replace(/[çÇğĞİıöÖşŞüÜ]/g, (m) => map[m] ?? m)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const trMap = new Map([
  ['INDUSTRIAL', 'ENDÜSTRİYEL'],
  ['HAZARDOUS', 'TEHLİKELİ ORTAM'],
  ['NEW PRODUCTS', 'YENİ ÜRÜNLER'],
  ['Cable Glands', 'Kablo Rakorları'],
  ['Cable Gland', 'Kablo Rakoru'],
  ['Conduit Fittings', 'Boru Rakorları'],
  ['Adaptors and Plugs', 'Adaptörler ve Tapalar'],
  ['Accessories', 'Aksesuarlar'],
  ['Ventilation & Drain Products', 'Havalandırma ve Drenaj Ürünleri'],
  ['Ventilation', 'Havalandırma'],
  ['Drain', 'Drenaj'],
  ['Products', 'Ürünler'],
  ['Industrial', 'Endüstriyel'],
  ['Hazardous', 'Tehlikeli Ortam'],
  ['Plastic', 'Plastik'],
  ['Brass', 'Pirinç'],
  ['Stainless Steel', 'Paslanmaz Çelik'],
  ['Metal', 'Metal'],
  ['Railway', 'Demiryolu'],
  ['Hygienic', 'Hijyenik'],
  ['High Performance', 'Yüksek Performans'],
  ['Snap-In', 'Geçmeli'],
  ['Quickfit', 'Hızlı Montaj'],
  ['Double Seal', 'Çift Contalı'],
  ['Compression Type', 'Sıkıştırma Tipi'],
  ['Protection', 'Koruma'],
  ['Flexible', 'Esnek'],
  ['Rigid', 'Sert'],
  ['Straight', 'Düz'],
  ['Bend', 'Dirsek'],
  ['Swivel', 'Döner'],
  ['Female', 'Dişi'],
  ['Locknuts', 'Kontra Somunlar'],
  ['Blind Plugs', 'Kör Tapalar'],
  ['Enlargers', 'Büyütücüler'],
  ['Reducers', 'Redüksiyonlar'],
  ['Seals', 'Contalar'],
  ['Dome Plugs', 'Kubbe Tapalar'],
  ['Gaskets', 'Conta Levhaları'],
  ['Serrated Washers', 'Tırtıklı Pullar'],
  ['Earth Tags', 'Topraklama Etiketleri'],
  ['Shrouds', 'Koruyucu Kılıflar'],
  ['Liquidtight', 'Sızdırmaz'],
  ['Barrier', 'Bariyer'],
  ['Armoured', 'Zırhlı'],
  ['Nonarmoured', 'Zırhsız'],
  ['Single Compression', 'Tek Sıkıştırmalı'],
  ['Double Compression', 'Çift Sıkıştırmalı'],
])

function translateLabel(value) {
  let text = normalizeText(value)
  for (const [en, tr] of trMap.entries()) {
    text = text.replace(new RegExp(en, 'gi'), tr)
  }
  return text
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
  if (htmlCache.has(url)) return htmlCache.get(url)
  const res = await http.get(url)
  const html = typeof res.data === 'string' ? res.data : String(res.data)
  htmlCache.set(url, html)
  await sleep(100)
  return html
}

function dedupe(arr, keyFn) {
  const seen = new Set()
  const out = []
  for (const item of arr) {
    const k = keyFn(item)
    if (!k || seen.has(k)) continue
    seen.add(k)
    out.push(item)
  }
  return out
}

async function extractFeaturedProductsByFrequency(pageUrl) {
  const html = await fetchHtml(pageUrl)
  const $ = cheerio.load(html)
  const freq = new Map()
  const firstMeta = new Map()

  $('a[href*="/en/product/"]').each((_, a) => {
    const href = $(a).attr('href')
    const nameEn = normalizeText($(a).text())
    if (!href || !nameEn) return
    const abs = absoluteUrl(href)
    freq.set(abs, (freq.get(abs) || 0) + 1)
    if (!firstMeta.has(abs)) {
      const holderLi = $(a).closest('li')
      firstMeta.set(abs, { nameEn, image: absoluteUrl(holderLi.attr('data-image-url')) })
    }
  })

  const picked = [...freq.entries()]
    .filter(([, count]) => count > 1)
    .map(([detailUrl]) => {
      const meta = firstMeta.get(detailUrl) || {}
      const nameEn = meta.nameEn || detailUrl.split('/').pop()
      return {
        name: translateLabel(nameEn),
        nameEn,
        slug: `bimed-${slugifyTr(nameEn)}`,
        detailUrl,
        image: meta.image || '',
      }
    })

  return dedupe(picked, (p) => p.detailUrl)
}

function parseTreeFromMainMenu(html) {
  const $ = cheerio.load(html)
  const mains = []
  $('li.category-dropdown').each((_, el) => {
    const mainNameEn = normalizeText($(el).children('a.menu-dropdown-link').first().text())
    if (!mainNameEn) return

    const subcategories = []
    $(el)
      .find('> ul.category-menu-listing > li.category-menu-item')
      .each((__, subEl) => {
        const subA = $(subEl).find('> a.category-menu-item-a').first()
        const subNameEn = normalizeText(subA.text())
        const subHref = subA.attr('href')
        if (!subNameEn || !subHref) return

        const products = []
        // 1) Alt menüde doğrudan veya iç içe tüm ürün linklerini topla.
        $(subEl)
          .find('ul.alt-category-menu-listing a[href*="/en/product/"]')
          .each((___, aEl) => {
            const href = $(aEl).attr('href')
            const nameEn = normalizeText($(aEl).text())
            if (!href || !nameEn) return
            const holderLi = $(aEl).closest('li')
            const image = absoluteUrl(holderLi.attr('data-image-url'))
            products.push({
              name: translateLabel(nameEn),
              nameEn,
              slug: `bimed-${slugifyTr(nameEn)}`,
              detailUrl: absoluteUrl(href),
              image,
            })
          })

        // 2) Bazı alt başlıklarda ürün yerine kategori kartı (örn. Ventilation Plug) var.
        // Ürün bulunamadıysa kategori kartlarını pseudo-product olarak ekliyoruz.
        if (products.length === 0) {
          $(subEl)
            .find('ul.alt-category-menu-listing a[href*="/en/category/"]')
            .each((___, cEl) => {
              const href = $(cEl).attr('href')
              const nameEn = normalizeText($(cEl).text())
              if (!href || !nameEn) return
              if (nameEn.toUpperCase() === 'ALL' || /back/i.test(nameEn)) return
              const holderLi = $(cEl).closest('li')
              const image = absoluteUrl(holderLi.attr('data-image-url'))
              products.push({
                name: translateLabel(nameEn),
                nameEn,
                slug: `bimed-${slugifyTr(nameEn)}`,
                detailUrl: absoluteUrl(href),
                image,
              })
            })
        }

        subcategories.push({
          name: translateLabel(subNameEn),
          nameEn: subNameEn,
          slug: `bimed-${slugifyTr(subNameEn)}`,
          url: absoluteUrl(subHref),
          products: dedupe(products, (p) => p.detailUrl),
        })
      })

    mains.push({
      name: translateLabel(mainNameEn),
      nameEn: mainNameEn,
      slug: `bimed-${slugifyTr(mainNameEn)}`,
      subcategories: dedupe(subcategories, (s) => s.slug),
    })
  })
  return dedupe(mains, (m) => m.slug)
}

async function scrapeProductDetail(detailUrl) {
  const html = await fetchHtml(detailUrl)
  const $ = cheerio.load(html)
  const pathParts = new URL(detailUrl).pathname.split('/').filter(Boolean)
  const productUrlSlug = pathParts[pathParts.length - 1] || ''

  const titleEn = normalizeText($('title').first().text())
  const metaDescription = normalizeText($('meta[name="description"]').attr('content'))

  const gallery = dedupe(
    $('#home-tab-pane img[src], .product-detail-img img[src], .swiper-slide img[src]')
      .toArray()
      .map((img) => absoluteUrl($(img).attr('src')))
      .filter((src) => src.includes('/images/') && !src.includes('/eye.png') && !src.includes('/global.png')),
    (src) => src
  )

  const docs = dedupe(
    $('a[href$=".pdf"], a[href$=".step"], a[href$=".stp"]')
      .toArray()
      .map((a) => {
        const href = absoluteUrl($(a).attr('href'))
        const name = normalizeText($(a).text())
        if (!href) return ''
        return name ? `${name} - ${href}` : href
      })
      .filter(Boolean),
    (line) => line
  )

  const tables = []
  $('.table-div.private-tab table').each((_, tableEl) => {
    const $table = $(tableEl)
    const headers = $table
      .find('thead tr th')
      .toArray()
      .map((th) => normalizeText($(th).text()))
      .filter(Boolean)

    const rows = $table
      .find('tbody tr')
      .toArray()
      .map((tr) =>
        $(tr)
          .find('td')
          .toArray()
          .map((td) => normalizeText($(td).text()))
      )
      .filter((row) => row.some(Boolean))

    if (headers.length || rows.length) {
      const rawTitle =
        normalizeText($table.closest('.table-div.private-tab').prevAll('button.tablink-1').first().text()) || 'Teknik Tablo'
      tables.push({ title: translateLabel(rawTitle), headers, rows })
    }
  })

  // Vue table'si runtime'da API'den doluyor; bu yüzden endpointleri manuel çekiyoruz.
  const dynamicTableCandidates = dedupe(
    [
      ...$('div[data-api-url]')
        .toArray()
        .map((el) => ({
          title: normalizeText($(el).closest('.table-div.private-tab').prevAll('button.tablink-1').first().text()) || 'MM',
          apiUrl: absoluteUrl($(el).attr('data-api-url')),
        })),
      ...$('a.tablink-1[href*="TableId="], a.table-private-button[href*="TableId="]')
        .toArray()
        .map((a) => {
          const href = absoluteUrl($(a).attr('href'))
          const title = normalizeText($(a).text()) || 'Teknik Tablo'
          return { title, apiUrl: href }
        }),
    ],
    (x) => `${x.title}|${x.apiUrl}`
  )

  const dynamicTables = []
  for (const candidate of dynamicTableCandidates) {
    try {
      const urlObj = new URL(candidate.apiUrl)
      const tableId = urlObj.searchParams.get('TableId')
      const type = urlObj.searchParams.get('type')
      if (!tableId || !productUrlSlug) continue

      const apiUrl = `${BASE_URL}/en/Pages/UrunDemo4?TableId=${encodeURIComponent(tableId)}&url=${encodeURIComponent(productUrlSlug)}${type ? `&type=${encodeURIComponent(type)}` : ''}`
      const res = await http.get(apiUrl)
      const data = res?.data || {}
      const columns = Array.isArray(data.columns) ? data.columns : []
      const articles = Array.isArray(data.articles) ? data.articles : []
      if (columns.length === 0 || articles.length === 0) continue

      const headers = columns
        .filter((c) => !c?.hiddenInTable)
        .map((c) => normalizeText(c.short || c.name || c.value))
        .filter(Boolean)

      const rows = articles
        .map((article) => {
          const attrs = Array.isArray(article?.attributes) ? article.attributes : []
          return columns
            .filter((c) => !c?.hiddenInTable)
            .map((c) => {
              const hit = attrs.find((a) => normalizeText(a?.short || a?.name) === normalizeText(c.short || c.name))
              return normalizeText(hit?.value || '')
            })
        })
        .filter((row) => row.some(Boolean))

      if (headers.length && rows.length) {
        dynamicTables.push({
          title: translateLabel(candidate.title || `Tablo ${tableId}`),
          headers,
          rows,
        })
      }
    } catch {
      // Endpoint başarısız olsa bile diğer tabloları işlemeye devam et.
    }
  }

  const technicalText = dedupe(
    $('.table-div.private-tab')
      .toArray()
      .map((tab) => normalizeText($(tab).text()))
      .filter(Boolean)
      .map((txt) =>
        txt
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter((l) => l && !/^\{\{|\$t\(|Zurücksetzen|Oops, there was an error|Generate Code|Get File$/i.test(l))
          .join('\n')
      )
      .filter(Boolean),
    (line) => line
  )
    .join('\n\n')
    .slice(0, 5000)

  return {
    description: translateLabel(metaDescription || titleEn),
    teknikOzellikler: technicalText,
    ekstraBilgiler: docs.join('\n'),
    gallery,
    tables: dedupe([...tables, ...dynamicTables], (t) => `${t.title}|${(t.headers || []).join('|')}`),
  }
}

async function run() {
  console.log('Bimed scraper basliyor...')
  const mainHtml = await fetchHtml(MAIN_PRODUCTS_URL)
  const tree = parseTreeFromMainMenu(mainHtml)

  // NEW PRODUCTS sayfaları menüde alt kırılım vermiyor; sayfadaki öne çıkan ürünleri doldur.
  for (const main of tree) {
    if (main.slug !== 'bimed-new-products') continue
    for (const sub of main.subcategories || []) {
      if ((sub.products || []).length > 0) continue
      try {
        const featured = await extractFeaturedProductsByFrequency(sub.url)
        if (featured.length > 0) sub.products = featured
      } catch {
        // fail-safe: boş kalabilir, akışı bozmayalım.
      }
    }
  }

  const allProducts = dedupe(
    tree.flatMap((m) => m.subcategories.flatMap((s) => s.products)),
    (p) => p.detailUrl
  )
  console.log(`Toplam urun: ${allProducts.length}`)

  const detailByUrl = new Map()
  for (let i = 0; i < allProducts.length; i++) {
    const p = allProducts[i]
    try {
      if (i > 0) await sleep(60)
      const detail = await scrapeProductDetail(p.detailUrl)
      detailByUrl.set(p.detailUrl, detail)
      console.log(`  - [${i + 1}/${allProducts.length}] ${p.nameEn}`)
    } catch (e) {
      detailByUrl.set(p.detailUrl, { description: p.name, teknikOzellikler: '', ekstraBilgiler: '', gallery: [] })
    }
  }

  const output = tree.map((main) => ({
    name: main.name,
    slug: main.slug,
    subcategories: main.subcategories.map((sub) => ({
      name: sub.name,
      slug: sub.slug,
      products: sub.products.map((p) => {
        const detail = detailByUrl.get(p.detailUrl) || {}
        return {
          name: p.name,
          slug: p.slug,
          detailUrl: p.detailUrl,
          image: p.image || detail.gallery?.[0] || '',
          description: detail.description || p.name,
          teknikOzellikler: detail.teknikOzellikler || '',
          ekstraBilgiler: detail.ekstraBilgiler || '',
          gallery: Array.isArray(detail.gallery) ? detail.gallery : [],
          tables: Array.isArray(detail.tables) ? detail.tables : [],
        }
      }),
    })),
  }))

  await fs.writeFile('bimed-products.json', JSON.stringify(output, null, 2), 'utf8')
  await fs.writeFile('public/bimed-products.json', JSON.stringify(output, null, 2), 'utf8')
  console.log('Tamamlandi: public/bimed-products.json')
}

run().catch((err) => {
  console.error('Bimed scraper hatasi:', err)
  process.exit(1)
})

