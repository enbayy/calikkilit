const axios = require('axios');
const cheerio = require('cheerio');
(async () => {
  const u = 'https://www.bimedteknik.com/en/category/ventilation-drain-products-2';
  const h = (await axios.get(u)).data;
  const $ = cheerio.load(h);
  const map = new Map();
  $('a[href]').each((_,a)=>{const href=$(a).attr('href');if(!href) return; map.set(href,(map.get(href)||0)+1)});
  const arr=[...map.entries()].filter(([h])=>h.includes('/en/category/')||h.includes('/en/product/')).sort((a,b)=>b[1]-a[1]);
  console.log(arr.slice(0,80).map(([h,c])=>c+' '+h).join('\n'));
})();
