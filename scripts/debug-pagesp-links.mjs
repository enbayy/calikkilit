const urls = [
  "https://www.atoskilit.com/Pagesp/7/1014/aksesuarlar",
  "https://www.atoskilit.com/Pagesp/7/1011/menteseler",
];

const hrefRegex = /href=['"]((?:\/Pagesp\/7\/\d+\/)[^'"]+)['"]/g;

for (const url of urls) {
  const t = await (await fetch(url)).text();
  const hrefMatches = [...t.matchAll(hrefRegex)].map((m) => m[1]);
  const uniq = [...new Set(hrefMatches)];
  uniq.sort((a, b) => a.localeCompare(b));

  console.log("\nURL:", url);
  console.log("Unique /Pagesp/7/... links:", uniq.length);
  console.log("First 30:", uniq.slice(0, 30));
  console.log("Last 10:", uniq.slice(-10));
}

