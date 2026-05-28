import { getBookmarks } from './utils.js';
import { getProcedureById } from '../data/procedures.js';
import { categories } from '../data/categories.js';
import { t, tProp } from '../i18n.js';

export async function renderFavorites(onProcedureClick) {
  const bookmarks = getBookmarks();
  if (bookmarks.length === 0) return null;

  const section = document.createElement('section');
  section.className = 'favorites-section';
  section.id = 'favorites';

  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-label">${t('favorites.label')}</div>
        <h2 class="section-title">${t('favorites.title')}</h2>
      </div>
      <div class="favorites-grid stagger-children" id="favorites-grid"></div>
    </div>
  `;

  const grid = section.querySelector('#favorites-grid');

  for (const procId of bookmarks) {
    const proc = await getProcedureById(procId);
    if (!proc) continue;
    const cat = categories.find(c => c.id === proc.categoryId);

    const card = document.createElement('div');
    card.className = 'favorite-card';
    card.style.setProperty('--card-color', cat ? cat.color : '#F5A623');

    card.innerHTML = `
      <span class="favorite-card-icon">${cat ? cat.icon : '📄'}</span>
      <div class="favorite-card-content">
        <h3 class="favorite-card-title">${tProp(proc, 'title')}</h3>
        <p class="favorite-card-sub">${tProp(proc, 'subtitle')}</p>
      </div>
      <span class="favorite-card-arrow">→</span>
    `;

    card.addEventListener('click', () => onProcedureClick(procId));
    grid.appendChild(card);
  }

  return section;
}
