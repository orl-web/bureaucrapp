import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, '..', 'src', 'data');

function extractLinks(fileContent) {
  const links = [];
  const linkRegex = /url:\s*'(https?:\/\/[^']+)'/g;
  let match;
  while ((match = linkRegex.exec(fileContent)) !== null) {
    links.push(match[1]);
  }
  return links;
}

function checkUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const opts = {
      timeout: 10000,
      headers: { 'User-Agent': 'Bureaucrapp-Link-Verifier/1.0' },
      rejectUnauthorized: false
    };
    const req = client.get(url, opts, (res) => {
      const status = res.statusCode;
      if (status >= 200 && status < 400) {
        resolve({ url, status, ok: true });
      } else if (status === 403) {
        resolve({ url, status, ok: true, warning: '403 Forbidden (bot block, likely reachable by users)' });
      } else {
        resolve({ url, status, ok: false });
      }
      res.resume();
    });
    req.on('error', (err) => {
      resolve({ url, status: null, ok: false, error: err.message });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ url, status: null, ok: false, error: 'timeout' });
    });
  });
}

async function main() {
  const files = fs.readdirSync(DATA_DIR).filter(f => f.startsWith('proc-') && f.endsWith('.js'));
  let allLinks = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf-8');
    const links = extractLinks(content);
    allLinks.push(...links.map(l => ({ file, url: l })));
  }

  console.log(`Found ${allLinks.length} links across ${files.length} files.\n`);

  let broken = 0;
  let checked = 0;

  for (const { file, url } of allLinks) {
    checked++;
    const result = await checkUrl(url);
    const status = result.ok ? '✓' : '✗';
    console.log(`[${status}] (${checked}/${allLinks.length}) ${url}`);
    if (result.warning) {
      console.log(`         File: ${file}, ${result.warning}`);
    } else if (!result.ok) {
      broken++;
      console.log(`         File: ${file}, Status: ${result.status || result.error}`);
    }
  }

  console.log(`\nDone. ${allLinks.length - broken}/${allLinks.length} OK, ${broken} broken.`);
  process.exit(broken > 0 ? 1 : 0);
}

main();
