import { categories } from '../data/categories.js';
import { getProceduresByCategory, searchProcedures, getAllProcedures } from '../data/procedures.js';
import { t, tProp, getLanguage } from '../i18n.js';
import { trackEvent } from '../analytics.js';

const STEPS = [
  { id: 'who', questionKey: 'wizard.q1' },
  { id: 'what', questionKey: 'wizard.q2' },
  { id: 'result', questionKey: '' }
];

const OPTIONS_Q1 = [
  { id: 'italian', labelKey: 'wizard.q1_it', icon: '🇮🇹', cats: ['identita', 'fisco', 'sanita', 'veicoli', 'affitti', 'agevolazioni'] },
  { id: 'eu', labelKey: 'wizard.q1_eu', icon: '🇪🇺', cats: ['identita', 'residenza', 'sanita', 'fisco', 'affitti'] },
  { id: 'non-eu', labelKey: 'wizard.q1_non_eu', icon: '🌍', cats: ['identita', 'residenza', 'sanita', 'fisco', 'affitti'] },
  { id: 'living', labelKey: 'wizard.q1_living', icon: '🏠', cats: ['residenza', 'identita', 'sanita', 'fisco', 'veicoli', 'affitti', 'impresa', 'agevolazioni'] }
];

const OPTIONS_Q2 = {
  'italian': [
    { id: 'documenti', labelKey: 'wizard.q2_docs', icon: '🪪', cats: ['identita'] },
    { id: 'taxes', labelKey: 'wizard.q2_taxes', icon: '💰', cats: ['fisco'] },
    { id: 'health', labelKey: 'wizard.q2_health', icon: '🏥', cats: ['sanita'] },
    { id: 'car', labelKey: 'wizard.q2_car', icon: '🚗', cats: ['veicoli'] },
    { id: 'rent', labelKey: 'wizard.q2_rent', icon: '🏘️', cats: ['affitti'] },
    { id: 'benefits', labelKey: 'wizard.q2_benefits', icon: '🎁', cats: ['agevolazioni'] }
  ],
  'eu': [
    { id: 'residenza', labelKey: 'wizard.q2_residenza', icon: '🏠', cats: ['residenza'] },
    { id: 'documenti', labelKey: 'wizard.q2_docs', icon: '🪪', cats: ['identita'] },
    { id: 'taxes', labelKey: 'wizard.q2_taxes', icon: '💰', cats: ['fisco'] },
    { id: 'health', labelKey: 'wizard.q2_health', icon: '🏥', cats: ['sanita'] },
    { id: 'rent', labelKey: 'wizard.q2_rent', icon: '🏘️', cats: ['affitti'] }
  ],
  'non-eu': [
    { id: 'residenza', labelKey: 'wizard.q2_residenza', icon: '🏠', cats: ['residenza'] },
    { id: 'documenti', labelKey: 'wizard.q2_docs', icon: '🪪', cats: ['identita'] },
    { id: 'taxes', labelKey: 'wizard.q2_taxes', icon: '💰', cats: ['fisco'] },
    { id: 'health', labelKey: 'wizard.q2_health', icon: '🏥', cats: ['sanita'] },
    { id: 'rent', labelKey: 'wizard.q2_rent', icon: '🏘️', cats: ['affitti'] }
  ],
  'living': [
    { id: 'documenti', labelKey: 'wizard.q2_docs', icon: '🪪', cats: ['identita'] },
    { id: 'taxes', labelKey: 'wizard.q2_taxes', icon: '💰', cats: ['fisco'] },
    { id: 'health', labelKey: 'wizard.q2_health', icon: '🏥', cats: ['sanita'] },
    { id: 'car', labelKey: 'wizard.q2_car', icon: '🚗', cats: ['veicoli'] },
    { id: 'rent', labelKey: 'wizard.q2_rent', icon: '🏘️', cats: ['affitti'] },
    { id: 'benefits', labelKey: 'wizard.q2_benefits', icon: '🎁', cats: ['agevolazioni'] },
    { id: 'business', labelKey: 'wizard.q2_business', icon: '🏢', cats: ['impresa'] }
  ]
};

export function renderWizard(onCategoryClick, onProcedureClick) {
  const section = document.createElement('section');
  section.className = 'procedure-detail';

  let state = { step: 0, who: null, what: null };

  function renderStep() {
    const inner = section.querySelector('.wizard-inner');
    if (!inner) return;

    const stepData = STEPS[state.step];

    if (state.step === 0) {
      inner.innerHTML = `
        <h2 style="font-size:var(--fs-xl);margin-bottom:0.5rem">🤖 ${t('wizard.title')}</h2>
        <p style="color:var(--text-secondary);margin-bottom:1.5rem">${t('wizard.subtitle')}</p>
        <h3 style="font-size:var(--fs-lg);margin-bottom:1rem">${t(stepData.questionKey)}</h3>
        <div class="wizard-options">
          ${OPTIONS_Q1.map(opt => `
            <button class="wizard-option" data-id="${opt.id}">
              <span class="wizard-option-icon">${opt.icon}</span>
              <span class="wizard-option-label">${t(opt.labelKey)}</span>
            </button>
          `).join('')}
        </div>
      `;

      inner.querySelectorAll('.wizard-option').forEach(btn => {
        btn.addEventListener('click', () => {
          state.who = btn.dataset.id;
          state.step = 1;
          trackEvent('wizard_step', { step: 'who', value: state.who });
          renderStep();
        });
      });
    } else if (state.step === 1) {
      const options = OPTIONS_Q2[state.who] || [];
      const catNames = options.flatMap(o => o.cats);

      inner.innerHTML = `
        <h2 style="font-size:var(--fs-xl);margin-bottom:0.5rem">🤖 ${t('wizard.title')}</h2>
        <p style="color:var(--text-secondary);margin-bottom:1.5rem">${t('wizard.subtitle')}</p>
        <div class="wizard-back">
          <button class="action-btn action-btn--text" id="wizard-back-1">← ${t('common.back')}</button>
        </div>
        <h3 style="font-size:var(--fs-lg);margin-bottom:1rem">${t(stepData.questionKey)}</h3>
        <div class="wizard-options">
          ${options.map(opt => `
            <button class="wizard-option" data-id="${opt.id}" data-cats="${opt.cats.join(',')}">
              <span class="wizard-option-icon">${opt.icon}</span>
              <span class="wizard-option-label">${t(opt.labelKey)}</span>
            </button>
          `).join('')}
        </div>
      `;

      inner.querySelector('#wizard-back-1').addEventListener('click', () => {
        state.step = 0;
        renderStep();
      });

      inner.querySelectorAll('.wizard-option').forEach(btn => {
        btn.addEventListener('click', async () => {
          state.what = btn.dataset.id;
          state.cats = btn.dataset.cats.split(',');
          state.step = 2;
          trackEvent('wizard_step', { step: 'what', value: state.what });
          await renderStep();
        });
      });
    } else if (state.step === 2) {
      renderResults(inner);
    }
  }

  async function renderResults(inner) {
    const selectedCats = state.cats || [];
    const allProcs = await getAllProcedures();
    const catDetails = selectedCats.map(c => categories.find(cat => cat.id === c)).filter(Boolean);

    const matchedProcs = allProcs.filter(p => selectedCats.includes(p.categoryId));

    inner.innerHTML = `
      <h2 style="font-size:var(--fs-xl);margin-bottom:0.5rem">🤖 ${t('wizard.title')}</h2>
      <p style="color:var(--text-secondary);margin-bottom:1.5rem">${t('wizard.subtitle')}</p>
      <div class="wizard-back">
        <button class="action-btn action-btn--text" id="wizard-back-2">← ${t('common.back')}</button>
      </div>
      <h3 style="font-size:var(--fs-lg);margin-bottom:1rem">${t('wizard.result_title')}</h3>

      <div class="wizard-results">
        ${catDetails.map(cat => {
          const procs = matchedProcs.filter(p => p.categoryId === cat.id);
          return `
            <div class="wizard-cat-group">
              <h4 style="margin-bottom:0.5rem;font-size:var(--fs-md)">
                <span style="cursor:pointer" class="wizard-cat-link" data-cat="${cat.id}">${cat.icon} ${tProp(cat, 'title')}</span>
              </h4>
              <div class="procedure-list" style="gap:0.5rem">
                ${procs.map(proc => `
                  <div class="procedure-card wizard-proc-card" data-proc="${proc.id}" style="padding:0.75rem 1rem;gap:0.75rem">
                    <div class="procedure-card-content">
                      <h3 class="procedure-card-title" style="font-size:var(--fs-sm)">${tProp(proc, 'title')}</h3>
                      <p class="procedure-card-subtitle" style="font-size:var(--fs-xs)">${tProp(proc, 'subtitle')}</p>
                    </div>
                    <span class="procedure-card-arrow" style="color:var(--text-muted)">→</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    inner.querySelector('#wizard-back-2').addEventListener('click', () => {
      state.step = 1;
      renderStep();
    });

    inner.querySelectorAll('.wizard-cat-link').forEach(el => {
      el.addEventListener('click', () => onCategoryClick(el.dataset.cat));
    });

    inner.querySelectorAll('.wizard-proc-card').forEach(el => {
      el.addEventListener('click', () => onProcedureClick(el.dataset.proc));
    });
  }

  section.innerHTML = `
    <div class="container" style="max-width:700px;padding:4rem 1rem">
      <div class="wizard-inner"></div>
    </div>
  `;

  renderStep();
  return section;
}
