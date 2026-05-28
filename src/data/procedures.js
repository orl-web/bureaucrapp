const procedureIndex = {
  'codice-fiscale': 'identita', 'spid': 'identita', 'cie': 'identita', 'cns': 'identita',
  'pec': 'identita', 'passaporto': 'identita', 'cittadinanza-italiana': 'identita',
  'firma-digitale': 'identita', 'cambio-nome': 'identita', 'autocertificazione': 'identita',
  'residenza-iscrizione': 'residenza', 'cambio-residenza': 'residenza',
  'certificati-anpr': 'residenza', 'permesso-soggiorno': 'residenza',
  'ricongiungimento': 'residenza',
  'dichiarazione-redditi': 'fisco', 'isee': 'fisco', 'partita-iva': 'fisco',
  'imu-tari': 'fisco', 'bonus-detrazioni': 'fisco', 'assegno-unico': 'fisco',
  'successione': 'fisco',
  'tessera-sanitaria': 'sanita', 'iscrizione-ssn': 'sanita', 'medico-base': 'sanita',
  'esenzioni-ticket': 'sanita',
  'apertura-piva': 'impresa', 'scia-suap': 'impresa', 'camera-commercio': 'impresa',
  'contratti-lavoro': 'impresa', 'naspi': 'impresa', 'durc': 'impresa',
  'patente-guida': 'veicoli', 'bollo-auto': 'veicoli', 'passaggio-proprieta': 'veicoli',
  'revisione': 'veicoli', 'iscrizione-asi': 'veicoli',
  'contratto-locazione': 'affitti', 'registrazione-contratto': 'affitti',
  'cedolare-secca': 'affitti', 'deposito-cauzionale': 'affitti',
  'disdetta-rinnovo': 'affitti', 'affitti-brevi': 'affitti',
  'bonus-asilo-nido': 'agevolazioni', 'bonus-psicologo': 'agevolazioni',
  'ecobonus-auto': 'agevolazioni', 'carta-dedicata-a-te': 'agevolazioni'
};

import { procedureTranslations } from './procedure-translations.js';

const moduleLoaders = {
  'identita': () => import('./proc-identita.js'),
  'residenza': () => import('./proc-residenza.js'),
  'fisco': () => import('./proc-fisco.js'),
  'sanita': () => import('./proc-sanita.js'),
  'impresa': () => import('./proc-impresa.js'),
  'veicoli': () => import('./proc-veicoli.js'),
  'affitti': () => import('./proc-affitti.js'),
  'agevolazioni': () => import('./proc-agevolazioni.js')
};

const loaded = {};
let allLoaded = false;
let allProcedures = [];

function extractProcedures(mod) {
  const key = Object.keys(mod).find(k => k.endsWith('Procedures'));
  return mod[key] || [];
}

function buildSearchIndex(p) {
  const parts = [];
  function add(v) { if (v && typeof v === 'string') parts.push(v); }
  add(p.title); add(p.subtitle); add(p.title_en); add(p.subtitle_en);
  (p.steps || []).forEach(s => { add(s.title); add(s.description); add(s.tip); add(s.title_en); add(s.description_en); add(s.tip_en); });
  (p.documents || []).forEach(d => add(d));
  (p.documents_en || []).forEach(d => add(d));
  (p.warnings || []).forEach(w => add(w));
  (p.warnings_en || []).forEach(w => add(w));
  const trans = procedureTranslations[p.id];
  if (trans) {
    Object.values(trans).forEach(langMap => {
      if (langMap && typeof langMap === 'object') Object.values(langMap).forEach(v => { if (typeof v === 'string') add(v); });
    });
  }
  return parts.join(' ').toLowerCase();
}

async function loadCategory(catId) {
  if (loaded[catId]) return loaded[catId];
  const mod = await moduleLoaders[catId]();
  loaded[catId] = extractProcedures(mod);
  return loaded[catId];
}

async function loadAll() {
  if (allLoaded) return;
  const cats = Object.keys(moduleLoaders);
  const results = await Promise.all(cats.map(loadCategory));
  allProcedures = results.flat();
  allProcedures.forEach(p => { if (!p._searchIndex) p._searchIndex = buildSearchIndex(p); });
  allLoaded = true;
}

export async function getProcedureById(id) {
  const catId = procedureIndex[id];
  if (!catId) return undefined;
  await loadCategory(catId);
  return loaded[catId].find(p => p.id === id);
}

export async function getProceduresByCategory(categoryId) {
  await loadCategory(categoryId);
  return loaded[categoryId] || [];
}

export async function searchProcedures(query) {
  await loadAll();
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return allProcedures.filter(p => (p._searchIndex || '').includes(q));
}

export async function getAllProcedures() {
  await loadAll();
  return allProcedures;
}

export function getProcedureIndex() { return procedureIndex; }
