import fs from 'node:fs/promises'
import axios from 'axios'
import * as cheerio from 'cheerio'

const BASE_URL = 'https://www.atoskilit.com'

const PRODUCTS_FILE = 'products.json'
const PUBLIC_ATOS_FILE = 'public/atos-products.json'

const http = axios.create({
  timeout: 30000,
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.7,en-US;q=0.5',
  },
})

async function fetchHtml(url) {
  const res = await http.get(url)
  return typeof res.data === 'string' ? res.data : String(res.data)
}

function pickProductImageUrl($) {
  const imgSrcs = []
  $('img[src]').each((_, el) => {
    const src = $(el).attr('src')
    if (!src) return
    imgSrcs.push(src)
  })

  const uniq = [...new Set(imgSrcs)]

  // Atos sayfalarında gerçek görsel genelde `/images/product/...` altında.
  const productImgs = uniq.filter((s) => s.startsWith('/images/product/'))
  if (!productImgs.length) {
    // Bazı sayfalarda ürün görseli `/images/product/` yerine direkt `ortaresim2.jpg` gibi
    // genel bir alan altında gelebiliyor. Bu durumda ikonları hariç tutup ilk görseli al.
    const globalIgnore = new Set([
      '/images/map.jpg',
      '/images/flag.png',
      '/images/logo.png',
      '/images/basket.png',
      '/images/Ru.png',
      '/images/fr.png',
      '/images/Es.png',
      '/images/ar.png',
    ])

    const bestFallback = uniq.find((s) => !globalIgnore.has(s))
    return bestFallback ? new URL(bestFallback, BASE_URL).href : ''
  }

  // Önce thumbs olmayan (tam) görseli tercih et.
  const best = productImgs.find((s) => !s.includes('/thumbs/')) || productImgs[0]
  return new URL(best, BASE_URL).href
}

async function mapWithConcurrency(items, concurrency, worker) {
  const results = new Array(items.length)
  let nextIndex = 0

  async function runner() {
    while (nextIndex < items.length) {
      const i = nextIndex++
      results[i] = await worker(items[i], i)
    }
  }

  const runners = Array.from({ length: concurrency }, () => runner())
  await Promise.all(runners)
  return results
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function main() {
  const productsRaw = await fs.readFile(PRODUCTS_FILE, 'utf8')
  const products = JSON.parse(productsRaw)

  // Tüm ürünleri indeksli şekilde flatten et.
  const targets = []
  for (let mainIdx = 0; mainIdx < products.length; mainIdx++) {
    const main = products[mainIdx]
    for (let subIdx = 0; subIdx < (main.subcategories || []).length; subIdx++) {
      const sub = main.subcategories[subIdx]
      for (let prodIdx = 0; prodIdx < (sub.products || []).length; prodIdx++) {
        const p = sub.products[prodIdx]
        if (!p.detailUrl) continue
        if (p.image && String(p.image).trim().length > 0) continue
        targets.push({ mainIdx, subIdx, prodIdx, detailUrl: p.detailUrl })
      }
    }
  }

  console.log(`Toplam ürün: ${targets.length} (image boş olanlar)`)
  if (!targets.length) {
    console.log('Güncellenecek görsel yok.')
    return
  }

  let done = 0
  const concurrency = 5

  await mapWithConcurrency(targets, concurrency, async (t, idx) => {
    // Fazla hızlı istek atmayı azaltmak için küçük bekleme
    if (idx > 0) await sleep(120)

    const html = await fetchHtml(t.detailUrl)
    const $ = cheerio.load(html)
    const imageUrl = pickProductImageUrl($)

    if (imageUrl) {
      products[t.mainIdx].subcategories[t.subIdx].products[t.prodIdx].image = imageUrl
    }

    done++
    if (done % 10 === 0) {
      console.log(`İlerleme: ${done}/${targets.length}`)
      await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf8')
    }
  })

  // Final yaz
  await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf8')
  await fs.writeFile(PUBLIC_ATOS_FILE, JSON.stringify(products, null, 2), 'utf8')

  console.log('✅ Atos görselleri dolduruldu.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

