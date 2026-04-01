const axios = require('axios');
(async () => {
  const r = await axios.get('https://www.bimedteknik.com/en/category/industrial-cable-glands');
  const html = r.data;
  const needle = '/en/product/standard-cable-glands-plastic';
  const idx = html.indexOf(needle);
  console.log('idx', idx);
  console.log(html.slice(idx-500, idx+800));
})();
