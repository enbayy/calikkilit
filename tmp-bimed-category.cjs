const axios = require('axios');
const cheerio = require('cheerio');
(async () => {
  const url = 'https://www.bimedteknik.com/en/category/industrial-cable-glands';
  const r = await axios.get(url);
  const $ = cheerio.load(r.data);
  const cards = [];
  $('a[href*="/en/product/"]').each((_, el) => {
    const a = $(el);
    const href = a.attr('href');
    const text = a.text().replace(/\s+/g,' ').trim();
    const img = a.find('img').attr('src') || a.closest('div').find('img').first().attr('src');
    cards.push({href,text,img});
  });
  console.log('cards', cards.length);
  console.log(cards.slice(0,8));
})();
