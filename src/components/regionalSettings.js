import { t, getLanguage } from '../i18n.js';

const REGION_KEY = 'bureaucrapp_region';
const COMUNE_KEY = 'bureaucrapp_comune';

const REGIONI = [
  'Abruzzo', 'Basilicata', 'Calabria', 'Campania', 'Emilia-Romagna',
  'Friuli-Venezia Giulia', 'Lazio', 'Liguria', 'Lombardia', 'Marche',
  'Molise', 'Piemonte', 'Puglia', 'Sardegna', 'Sicilia', 'Toscana',
  'Trentino-Alto Adige', 'Umbria', "Valle d'Aosta", 'Veneto'
];

export function getRegion() {
  return localStorage.getItem(REGION_KEY) || '';
}

export function getComune() {
  return localStorage.getItem(COMUNE_KEY) || '';
}

export function renderRegionalSettings() {
  const region = getRegion();
  const comune = getComune();

  const container = document.createElement('div');
  container.className = 'regional-settings';

  container.innerHTML = `
    <div class="regional-settings-form">
      <label style="font-size:var(--fs-sm);color:var(--text-secondary);display:block;margin-bottom:0.25rem">${t('regional.label')}</label>
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
        <select class="filter-select" id="region-select" style="flex:1;min-width:140px">
          <option value="">${t('regional.select_region')}</option>
          ${REGIONI.map(r => `<option value="${r}" ${region === r ? 'selected' : ''}>${r}</option>`).join('')}
        </select>
        <input type="text" class="filter-select" id="comune-input" value="${comune}" placeholder="${t('regional.comune')}" style="flex:1;min-width:140px" />
      </div>
      <button class="action-btn action-btn--secondary" id="save-region" style="margin-top:0.5rem;font-size:var(--fs-sm);padding:0.25rem 0.75rem">${t('regional.save')}</button>
      <span id="region-saved-msg" style="font-size:var(--fs-xs);color:var(--accent-green);display:none;margin-left:0.5rem">✓ ${t('regional.saved')}</span>
    </div>
  `;

  container.querySelector('#save-region').addEventListener('click', () => {
    const r = container.querySelector('#region-select').value;
    const c = container.querySelector('#comune-input').value.trim();
    if (r) localStorage.setItem(REGION_KEY, r);
    if (c) localStorage.setItem(COMUNE_KEY, c);
    const msg = container.querySelector('#region-saved-msg');
    msg.style.display = 'inline';
    setTimeout(() => { msg.style.display = 'none'; }, 2000);
  });

  return container;
}
