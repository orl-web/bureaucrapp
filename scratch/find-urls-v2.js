// Tester for paths

const candidates = [
  // 1. Tessera Sanitaria / Codice Fiscale
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/tessera-sanitaria/scheda-informativa-tessera-sanitaria',
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/tessera-sanitaria/scheda',
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/richiesta-ts-cf/scheda-informativa-richiesta-ts-cf',
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/richiesta-ts-cf/scheda',
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/codice-fiscale-persone-fisiche/scheda-informativa-cf-persone-fisiche',
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/codice-fiscale-persone-fisiche/scheda',
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/richiesta-ts/scheda-informativa-richiesta-ts',
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/aa4-8/scheda-informativa-aa48',
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/aa4-8/scheda',
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/aa4-8/modello-e-istruzioni-aa48',
  
  // 2. INPS ISEE
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.portale-unico-isee.html',
  'https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.portale-unico-isee.html',
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.isee-post-riforma-2015.html',
  'https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.isee-post-riforma-2015.html',
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.50601.html',
  
  // 3. Partita IVA / Regime Forfetario
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/apertura-partita-iva-persone-fisiche/scheda-informativa-apertura-piva-pf',
  'https://www.agenziaentrate.gov.it/portale/schede/istanze/apertura-partita-iva-persone-fisiche/scheda',
  'https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/regime-forfetario/scheda-informativa-regime-forfetario',
  'https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/regime-forfetario/scheda',
  
  // 4. IMU e TARI
  'https://www.finanze.gov.it/it/fiscalita-regionale-e-locale/imposta-municipale-propria-imu/',
  'https://www.finanze.gov.it/it/fiscalita-regionale-e-locale/imu-imposta-municipale-propria/',
  
  // 5. Assegno Unico
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.assegno-unico-e-universale-per-i-figli-a-carico.html',
  'https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.assegno-unico-e-universale-per-i-figli-a-carico.html',
  
  // 6. NASPI
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.naspi-nuova-assicurazione-sociale-per-l-impiego.html',
  'https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.naspi-nuova-assicurazione-sociale-per-l-impiego.html',
  
  // 7. Patente di guida
  'https://www.mit.gov.it/argomenti/patenti',
  'https://www.mit.gov.it/temi/patenti',
  'https://www.mit.gov.it/it/argomenti/patenti',
  
  // 8. Revisione Veicolo
  'https://www.ilportaledellautomobilista.it/web/portale-automobilista/patenti',
  'https://www.ilportaledellautomobilista.it/web/portale-automobilista/revisioni',
  
  // 9. Contratto di Locazione & Registrazione & RLI
  'https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-contratto-beni-immobili/scheda-informativa-registrazione-contratti',
  'https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-contratto-beni-immobili/scheda',
  'https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-contratto-beni-immobili/modello-rli-registrazione-contratti',
  'https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-contratto-beni-immobili/sw-compilazione-rli-registrazione-contratti',
  
  // 10. Bonus nido / psicologo
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.bonus-nido.html',
  'https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.bonus-nido.html',
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.bonus-psicologo.html',
  'https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.bonus-psicologo.html',
  'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.contributo-sessioni-psicoterapia-bonus-psicologo.html',
  'https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.contributo-sessioni-psicoterapia-bonus-psicologo.html'
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
  console.log('Testing candidates v2...');
  for (const url of candidates) {
    await checkUrl(url);
  }
}

run();
