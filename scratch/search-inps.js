const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function searchInps(query) {
  // Let's call the INPS search endpoint
  // Usually the search URL is https://www.inps.it/it/it/ricerca.html?cerca=...
  // Let's fetch it and see if we can find links in the HTML
  const url = `https://www.inps.it/it/it/ricerca.html?cerca=${encodeURIComponent(query)}`;
  console.log(`Searching INPS for "${query}" using ${url}...`);

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': USER_AGENT }
    });
    if (!res.ok) {
      console.error(`Search failed: ${res.status}`);
      return;
    }
    const html = await res.text();
    console.log(`Results fetched. Length: ${html.length} bytes.`);

    // Look for links matching "dettaglio-scheda"
    const regex = /href="([^"]+)"/g;
    let match;
    const links = new Set();
    while ((match = regex.exec(html)) !== null) {
      const link = match[1];
      if (link.includes('dettaglio-scheda')) {
        links.add(link);
      }
    }

    console.log(`\n--- FOUND LINKS FOR "${query}" ---`);
    Array.from(links).sort().forEach(l => {
      console.log(l);
    });

  } catch (err) {
    console.error('Error searching:', err.message);
  }
}

async function run() {
  await searchInps('isee');
  console.log('\n=========================================\n');
  await searchInps('naspi');
  console.log('\n=========================================\n');
  await searchInps('assegno unico');
}

run();
