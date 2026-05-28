import { news } from '../data/news.js';
import { t, tProp } from '../i18n.js';

export function renderNewsBar() {
  const section = document.createElement('section');
  section.className = 'news-section';
  section.id = 'news';

  const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));

  section.innerHTML = `
    <div class="news-header">
      <div class="news-label">
        <span class="news-pulse"></span>
        ${t('news.title')}
      </div>
    </div>
    <div class="news-grid stagger-children">
      ${sortedNews.map(item => `
        <div class="news-card">
          <div class="news-card-top">
            <span class="news-card-date">${formatDate(item.date)}</span>
            <span class="news-card-tag" data-tag="${item.tag}">${item.tag}</span>
          </div>
          <h3 class="news-card-title">${tProp(item, 'title')}</h3>
          <p class="news-card-summary">${tProp(item, 'summary')}</p>
          <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="news-card-source">
            ↗ ${item.source}
          </a>
        </div>
      `).join('')}
    </div>
  `;

  return section;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
}
