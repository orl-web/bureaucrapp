// wait, we don't need node-fetch, we can use global fetch in Node 22

const candidates = [
  // Codice Fiscale
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/codice-fiscale-persone-fisiche/come-si-chiede-cf-cittadini-italiani',
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/codice-fiscale-persone-fisiche/scheda-informativa-cf-persone-fisiche',
  'https://www.agenziaentrate.gov.it/portale/web/guest/schede/istanze/richiesta-ts/come-si-chiede-cf',
  'https://www.agenziaentrate.gov.it/portale/web/guest/schede/istanze/aa4-8',
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/codice-fiscale-persone-fisiche/modello-e-istruzioni-cf-persone-fisiche',
  
  // Ricongiungimento
  'https://www.interno.gov.it/it/temi/immigrazione-e-asilo/ricongiungimento-familiare',
  'https://www.interno.gov.it/it/servizi/ricongiungimento-familiare',
  'https://www.interno.gov.it/it/temi/immigrazione-e-asilo/modalita-dingresso/ricongiungimento-familiare',

  // Scadenze
  'https://www.agenziaentrate.gov.it/portale/scadenze',
  'https://www.agenziaentrate.gov.it/portale/web/guest/scadenze',

  // ISEE
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50601.html',
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.isee.html',
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.isee-post-riforma-2015.html',

  // Partita IVA
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/apertura-partita-iva-persone-fisiche/come-si-chiede-piva-pf',
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/apertura-partita-iva-persone-fisiche',
  'https://www.agenziaentrate.gov.it/portale/web/guest/schede/istanze/apertura-partita-iva',
  'https://www.agenziaentrate.gov.it/portale/regime-forfetario-le-regole-generali',
  'https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/regime-forfetario',

  // IMU e TARI
  'https://www.finanze.gov.it/it/fiscalita-regionale-e-locale/imu-imposta-municipale-propria/',
  'https://www.finanze.gov.it/it/fiscalita-regionale-e-locale/imu/',

  // Bonus e agevolazioni
  'https://www.agenziaentrate.gov.it/portale/schede/agevolazioni',
  'https://www.agenziaentrate.gov.it/portale/aree-tematiche/agevolazioni',

  // Assegno Unico
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.assegno-unico-e-universale-per-i-figli-a-carico.html',
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.53396.html',

  // Successione
  'https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione/scheda-informativa-successione',
  'https://www.agenziaentrate.gov.it/portale/schede/dichiarazioni/dichiarazione-di-successione',

  // Tessera Sanitaria
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/tessera-sanitaria',
  
  // NASPI
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.naspi-nuova-assicurazione-sociale-per-l-impiego.html',
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.naspi.html',

  // Patente
  'https://www.mit.gov.it/temi/patenti',
  'https://www.mit.gov.it/it/temi/patenti',
  'https://www.mit.gov.it/documentazione/patenti',

  // Revisione
  'https://www.ilportaledellautomobilista.it/web/portale-automobilista/verifica-revisione',
  'https://www.ilportaledellautomobilista.it/web/portale-automobilista/verifica-ultima-revisione',

  // Contratto locazione & RLI
  'https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-contratto-beni-immobili/registrazione-contratto-beni-immobili',
  'https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-contratto-beni-immobili/modello-e-istruzioni-registrazione-beni-immobili',
  'https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-contratto-beni-immobili/sw-compilazione-rli-registrazione-beni-immobili',
  'https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/cedolare-secca/scheda-informativa-cedolare-secca',

  // Bonus nido / psicologo
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.bonus-asilo-nido.html',
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.contributo-sessioni-psicoterapia-bonus-psicologo.html'
];

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function checkUrl(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'User-Agent': USER_AGENT },
      redirect: 'follow',
      signal: AbortSignal.timeout(5000)
    });
    console.log(`[${response.status}] ${url}`);
  } catch (err) {
    console.log(`[ERR: ${err.message}] ${url}`);
  }
}

async function run() {
  console.log('Testing candidates...');
  for (const url of candidates) {
    await checkUrl(url);
  }
}

run();
