import { categories } from '../data/categories.js';
import { searchProcedures } from '../data/procedures.js';
import { t, tProp } from '../i18n.js';
import { trackEvent } from '../analytics.js';

export function renderHero(onCategoryClick, onProcedureClick) {
  const section = document.createElement('section');
  section.className = 'hero';
  section.id = 'hero';

  section.innerHTML = `
    <div class="container">
      <div class="hero-flag">
        <div class="hero-flag-bar"></div>
        <div class="hero-flag-bar"></div>
        <div class="hero-flag-bar"></div>
      </div>
      <div class="section-label">${t('hero.badge')}</div>
      <h1 class="hero-title">${t('hero.title')}</h1>
      <p class="hero-subtitle">${t('hero.subtitle')}</p>

      <div class="hero-search" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-label="Cerca procedure">
        <span class="hero-search-icon" aria-hidden="true">🔍</span>
        <input type="text" class="hero-search-input" id="search-input" placeholder="${t('hero.search.placeholder')}" autocomplete="off" aria-autocomplete="list" aria-controls="search-results" aria-activedescendant="" />
        <button class="hero-search-clear" id="search-clear" aria-label="Cancella ricerca">✕</button>
        <div class="search-results" id="search-results" role="listbox" aria-label="Risultati della ricerca"></div>
      </div>

      <div class="hero-pills" id="hero-pills">
        <span style="color: var(--text-muted); font-size: var(--fs-sm); align-self: center;">${t('hero.pills.popular')}</span>
        <button class="hero-pill" id="wizard-pill" style="background:var(--accent-purple);color:#fff">🤖 ${t('wizard.cta')}</button>
      </div>
    </div>
  `;

  const pillsContainer = section.querySelector('#hero-pills');
  categories.forEach(cat => {
    const pill = document.createElement('button');
    pill.className = 'hero-pill';
    pill.textContent = `${cat.icon} ${cat.title}`;
    pill.addEventListener('click', () => onCategoryClick(cat.id));
    pillsContainer.appendChild(pill);
  });

  section.querySelector('#wizard-pill').addEventListener('click', () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: { view: 'wizard' } }));
  });

  const input = section.querySelector('#search-input');
  const clearBtn = section.querySelector('#search-clear');
  const resultsContainer = section.querySelector('#search-results');
  let debounceTimer;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    const query = input.value.trim();
    clearBtn.classList.toggle('visible', query.length > 0);

    if (query.length < 2) {
      resultsContainer.classList.remove('visible');
      resultsContainer.innerHTML = '';
      return;
    }

    debounceTimer = setTimeout(async () => {
      const results = await searchProcedures(query);
      trackEvent('search', { query, results_count: results.length });
      if (results.length === 0) {
        resultsContainer.innerHTML = `
          <div style="padding: var(--space-md) var(--space-lg); color: var(--text-muted); text-align: center;">
            ${t('hero.search.no_results')} "${query}"
          </div>
        `;
      } else {
        resultsContainer.innerHTML = results.slice(0, 8).map((proc, i) => {
          const cat = categories.find(c => c.id === proc.categoryId);
          return `
            <div class="search-result-item" data-id="${proc.id}" role="option" tabindex="-1" data-index="${i}">
              <span class="search-result-icon" aria-hidden="true">${cat ? cat.icon : '📄'}</span>
              <div class="search-result-text">
                <h4>${tProp(proc, 'title')}</h4>
                <p>${tProp(proc, 'subtitle')}</p>
              </div>
            </div>
          `;
        }).join('');
      }
      resultsContainer.classList.add('visible');
      section.querySelector('.hero-search').setAttribute('aria-expanded', 'true');

      resultsContainer.querySelectorAll('.search-result-item[data-id]').forEach(item => {
        item.addEventListener('click', () => {
          const id = item.dataset.id;
          resultsContainer.classList.remove('visible');
          input.value = '';
          clearBtn.classList.remove('visible');
          trackEvent('search_click', { query, procedure_id: id });
          onProcedureClick(id);
        });
      });
    }, 200);
  });

  function hideResults() {
    resultsContainer.classList.remove('visible');
    resultsContainer.innerHTML = '';
    section.querySelector('.hero-search').setAttribute('aria-expanded', 'false');
  }

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.classList.remove('visible');
    hideResults();
    input.focus();
  });

  document.addEventListener('click', (e) => {
    if (!section.querySelector('.hero-search').contains(e.target)) {
      resultsContainer.classList.remove('visible');
      section.querySelector('.hero-search').setAttribute('aria-expanded', 'false');
    }
  });

  return section;
}
