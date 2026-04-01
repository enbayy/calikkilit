const axios = require('axios');
(async () => {
  const html=(await axios.get('https://www.bimedteknik.com/en/product/standard-cable-glands-plastic')).data;
  const k='Standard Cable Glands, Plastic';
  const i=html.indexOf(k);
  console.log(html.slice(i-700,i+1200));
})();
