const axios = require('axios');
const cheerio = require('cheerio');
(async () => {
  const url='https://www.bimedteknik.com/en/product/standard-cable-glands-plastic';
  const r=await axios.get(url);
  const $=cheerio.load(r.data);
  const title=$('h1,h2').first().text().trim();
  const og=$('meta[property="og:image"]').attr('content');
  const imgs=$('img[src]').toArray().map(el=>$(el).attr('src')).filter(Boolean);
  console.log('title',title);
  console.log('og',og);
  console.log('img candidates',imgs.filter(i=>i.includes('/images/')).slice(0,15));
  const text=$('main').text().replace(/\s+/g,' ').trim();
  console.log('text sample',text.slice(0,500));
})();
