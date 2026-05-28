import { categories } from '../data/categories.js';
import { getProceduresByCategory } from '../data/procedures.js';
import { t, tProp } from '../i18n.js';

export async function renderCategoryGrid(onCategoryClick) {
  const section = document.createElement('section');
  section.className = 'categories-section';
  section.id = 'categories';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-label">${t('home.categories.label')}</div>
        <h2 class="section-title" id="categories">${t('home.categories.title')}</h2>
        <p class="section-subtitle">${t('home.categories.subtitle')}</p>
      </div>
      <div class="category-grid stagger-children" id="category-grid"></div>
    </div>
  `;

  const grid = section.querySelector('#category-grid');

  for (const cat of categories) {
    const procs = await getProceduresByCategory(cat.id);
    const card = document.createElement('div');
    card.className = 'category-card';
    card.style.setProperty('--card-gradient', cat.gradient);
    card.style.setProperty('--card-color', cat.color);

    card.innerHTML = `
      <div class="category-card-content">
        <h3 class="category-card-title">${tProp(cat, 'title')}</h3>
        <p class="category-card-desc">${tProp(cat, 'description')}</p>
      </div>
      <div class="category-card-footer">
        <span class="category-card-count">${procs.length} procedure</span>
        <span class="category-card-arrow">→</span>
      </div>
    `;

    card.addEventListener('click', () => onCategoryClick(cat.id));
    grid.appendChild(card);
  }

  return section;
}

function renderProcedureList(list, procs, cat, onProcedureClick, filters) {
  list.innerHTML = '';

  let filtered = [...procs];

  if (filters.difficulty !== 'all') {
    filtered = filtered.filter(p => p.difficulty === filters.difficulty);
  }

  if (filters.cost === 'free') {
    filtered = filtered.filter(p => p.cost === 'Gratuito');
  } else if (filters.cost === 'paid') {
    filtered = filtered.filter(p => p.cost !== 'Gratuito');
  }

  if (filters.sort === 'alpha') {
    filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
  } else if (filters.sort === 'difficulty') {
    const order = { facile: 0, media: 1, difficile: 2 };
    filtered.sort((a, b) => (order[a.difficulty] || 0) - (order[b.difficulty] || 0));
  }

  if (filtered.length === 0) {
    list.innerHTML = `<p class="procedure-list-empty" style="text-align:center;padding:2rem;color:var(--text-secondary)">${t('filter.no_results')}</p>`;
    return;
  }

  filtered.forEach(proc => {
    const difficultyClass = proc.difficulty === 'facile' ? 'easy' : proc.difficulty === 'media' ? 'medium' : 'hard';
    const difficultyLabel = proc.difficulty.charAt(0).toUpperCase() + proc.difficulty.slice(1);

    const card = document.createElement('div');
    card.className = 'procedure-card';
    card.innerHTML = `
      <div class="procedure-card-icon" style="background:${cat.gradient}; opacity: 0.9;">
        ${cat.icon}
      </div>
      <div class="procedure-card-content">
        <h3 class="procedure-card-title">${tProp(proc, 'title')}</h3>
        <p class="procedure-card-subtitle">${tProp(proc, 'subtitle')}</p>
      </div>
      <div class="procedure-card-meta">
        <span class="badge badge--${difficultyClass}">${difficultyLabel}</span>
        ${proc.cost === 'Gratuito' ? `<span class="badge badge--free">${t('proc.cost.free')}</span>` : ''}
      </div>
    `;

    card.addEventListener('click', () => onProcedureClick(proc.id));
    list.appendChild(card);
  });
}

export async function renderCategoryDetail(categoryId, onProcedureClick, onBack) {
  const cat = categories.find(c => c.id === categoryId);
  const procs = await getProceduresByCategory(categoryId);

  const filters = { difficulty: 'all', cost: 'all', sort: 'default' };

  const section = document.createElement('section');
  section.className = 'procedure-detail';

  section.innerHTML = `
    <div class="container">
      <div class="back-button" id="back-btn">
        <span>←</span> ${t('common.back')}
      </div>

      <div class="section-header" style="text-align: left;">
        <div class="section-label">${cat.icon} ${tProp(cat, 'title')}</div>
        <h2 class="section-title">${tProp(cat, 'title')}</h2>
        <p class="section-subtitle">${tProp(cat, 'description')}</p>
      </div>

      <div class="filter-bar">
        <select class="filter-select" id="filter-difficulty">
          <option value="all">${t('filter.difficulty_all')}</option>
          <option value="facile">${t('proc.difficulty.easy')}</option>
          <option value="media">${t('proc.difficulty.medium')}</option>
          <option value="difficile">${t('proc.difficulty.hard')}</option>
        </select>
        <select class="filter-select" id="filter-cost">
          <option value="all">${t('filter.cost_all')}</option>
          <option value="free">${t('proc.cost.free')}</option>
          <option value="paid">${t('filter.cost_paid')}</option>
        </select>
        <select class="filter-select" id="filter-sort">
          <option value="default">${t('filter.sort_default')}</option>
          <option value="alpha">${t('filter.sort_alpha')}</option>
          <option value="difficulty">${t('filter.sort_difficulty')}</option>
        </select>
      </div>

      <div class="procedure-list stagger-children" id="procedure-list"></div>
    </div>
  `;

  section.querySelector('#back-btn').addEventListener('click', onBack);

  const list = section.querySelector('#procedure-list');
  renderProcedureList(list, procs, cat, onProcedureClick, filters);

  section.querySelector('#filter-difficulty').addEventListener('change', (e) => {
    filters.difficulty = e.target.value;
    renderProcedureList(list, procs, cat, onProcedureClick, filters);
  });

  section.querySelector('#filter-cost').addEventListener('change', (e) => {
    filters.cost = e.target.value;
    renderProcedureList(list, procs, cat, onProcedureClick, filters);
  });

  section.querySelector('#filter-sort').addEventListener('change', (e) => {
    filters.sort = e.target.value;
    renderProcedureList(list, procs, cat, onProcedureClick, filters);
  });

  return section;
}
