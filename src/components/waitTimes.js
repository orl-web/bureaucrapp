import { t, getLanguage } from '../i18n.js';
import { showToast } from './utils.js';
import { trackEvent } from '../analytics.js';

const STORAGE_KEY = 'bureaucrapp_waittimes';

function getWaitData(procedureId) {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return data[procedureId] || [];
  } catch { return []; }
}

function addWaitEntry(procedureId, minutes) {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (!data[procedureId]) data[procedureId] = [];
    data[procedureId].push({ minutes, date: Date.now() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
}

function getAverage(entries) {
  if (entries.length === 0) return null;
  const sum = entries.reduce((a, e) => a + e.minutes, 0);
  return Math.round(sum / entries.length);
}

export function renderWaitTimes(procedureId, procTitle) {
  const entries = getWaitData(procedureId);
  const avg = getAverage(entries);

  const container = document.createElement('div');
  container.className = 'sidebar-card';

  container.innerHTML = `
    <h3 class="sidebar-card-title">⏱ ${t('wait_times.title')}</h3>
    <div class="wait-times-body">
      <div class="wait-times-average" id="wait-avg-display">
        ${avg !== null ? `
          <span class="wait-times-num">${avg}</span>
          <span class="wait-times-unit">${t('wait_times.minutes_avg')}</span>
        ` : `<span style="color:var(--text-secondary);font-size:var(--fs-sm)">${t('wait_times.no_data')}</span>`}
      </div>
      <p class="wait-times-count" style="font-size:var(--fs-xs);color:var(--text-muted)">${entries.length} ${t('wait_times.reports')}</p>
      <form class="wait-times-form" id="wait-form">
        <label style="font-size:var(--fs-sm);color:var(--text-secondary);display:block;margin-bottom:0.25rem">${t('wait_times.add')}</label>
        <div style="display:flex;gap:0.5rem">
          <input type="number" id="wait-input" min="1" max="999" placeholder="${t('wait_times.minutes')}" class="wait-times-input" required />
          <button type="submit" class="wait-times-submit">${t('wait_times.send')}</button>
        </div>
      </form>
    </div>
  `;

  const form = container.querySelector('#wait-form');
  const input = container.querySelector('#wait-input');
  const avgDisplay = container.querySelector('#wait-avg-display');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = parseInt(input.value, 10);
    if (isNaN(val) || val < 1) return;

    addWaitEntry(procedureId, val);
    trackEvent('wait_time_submit', { procedure_id: procedureId, minutes: val });
    showToast('⏱ ' + t('wait_times.thanks'));
    input.value = '';

    const newEntries = getWaitData(procedureId);
    const newAvg = getAverage(newEntries);
    if (newAvg !== null) {
      avgDisplay.innerHTML = `
        <span class="wait-times-num">${newAvg}</span>
        <span class="wait-times-unit">${t('wait_times.minutes_avg')}</span>
      `;
    }
  });

  return container;
}
