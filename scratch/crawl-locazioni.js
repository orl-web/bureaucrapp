const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function crawl() {
  const url = 'https://www.agenziaentrate.gov.it/portale/cittadini/registrazione-contratti-atti';
  console.log(`Fetching ${url} to extract sub-links...`);

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': USER_AGENT }
    });
    if (!res.ok) {
      console.error(`Failed to fetch page: ${res.status}`);
      return;
    }
    const html = await res.text();
    console.log(`Page fetched. Length: ${html.length} bytes.`);

    const regex = /href="([^"]+)"/g;
    let match;
    const links = new Set();
    while ((match = regex.exec(html)) !== null) {
      const link = match[1];
      if (link.includes('/portale/')) {
        links.add(link);
      }
    }

    console.log('\n--- FOUND LINKS ---');
    Array.from(links).sort().forEach(l => {
      console.log(l);
    });

  } catch (err) {
    console.error('Error crawling:', err.message);
  }
}

crawl();
