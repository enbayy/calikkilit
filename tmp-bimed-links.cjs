const axios = require('axios');
const cheerio = require('cheerio');
(async () => {
  const r = await axios.get('https://www.bimedteknik.com/en/category/main-products');
  const $ = cheerio.load(r.data);
  const hrefs = new Set();
  $('a[href]').each((_, el) => {
    const h = $(el).attr('href');
    if (h && h.includes('/en/')) hrefs.add(h);
  });
  console.log(Array.from(hrefs).slice(0, 250).join('\n'));
  console.log('count', hrefs.size);
})();
