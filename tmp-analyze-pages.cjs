const axios=require('axios');
const cheerio=require('cheerio');
async function analyze(u){
 const h=(await axios.get(u)).data; const $=cheerio.load(h); const map=new Map();
 $('a[href*="/en/product/"]').each((_,a)=>{const href=$(a).attr('href'); map.set(href,(map.get(href)||0)+1)});
 const arr=[...map.entries()].sort((a,b)=>b[1]-a[1]);
 console.log('\nURL',u,'products',arr.length,'>1',arr.filter(x=>x[1]>1).length);
 console.log(arr.slice(0,20).map(([h,c])=>c+' '+h).join('\n'));
}
(async()=>{await analyze('https://www.bimedteknik.com/en/category/industrial-products');await analyze('https://www.bimedteknik.com/en/category/hazardous-product');await analyze('https://www.bimedteknik.com/en/category/ventilation-plug');await analyze('https://www.bimedteknik.com/en/category/ventilation-gland');await analyze('https://www.bimedteknik.com/en/category/drain-plugs');})();
