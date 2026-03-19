import * as cheerio from 'cheerio'

const url = process.argv[2]
if (!url) {
  console.error('Usage: node scripts/check-atos-imgs.mjs <detailUrl>')
  process.exit(1)
}

const res = await fetch(url)
const html = await res.text()
const $c = cheerio.load(html)

const imgs = []
$c('img[src]').each((_, el) => {
  const src = $c(el).attr('src')
  if (src) imgs.push(src)
})

const uniq = [...new Set(imgs)]
console.log('status', res.status)
console.log('imgCount', uniq.length)
console.log('first20', uniq.slice(0, 20))

