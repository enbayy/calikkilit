const axios = require('axios');
const cheerio = require('cheerio');
(async () => {
  const u = 'https://www.bimedteknik.com/en/category/ventilation-drain-products-2';
  const h = (await axios.get(u)).data;
  const $ = cheerio.load(h);
  const sels = [
    "section.pageDetailContent a[href*='/en/product/']",
    "main a[href*='/en/product/']",
    ".container a[href*='/en/product/']",
    "a[href*='/en/product/']",
  ];
  for (const s of sels) console.log(s, $(s).length);
  console.log('cat links in main', $("main a[href*='/en/category/']").length);
})();
