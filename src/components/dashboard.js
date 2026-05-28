import { categories } from '../data/categories.js';
import { getProcedureById, getAllProcedures } from '../data/procedures.js';
import { t, getLanguage } from '../i18n.js';
import { renderFooter } from './footer.js';

async function getStats() {
  const allProcs = await getAllProcedures();
  const bookmarks = JSON.parse(localStorage.getItem('bureaucrapp_bookmarks') || '[]');
  const progress = JSON.parse(localStorage.getItem('bureaucrapp_progress') || '{}');
  const feedback = JSON.parse(localStorage.getItem('bureaucrapp_feedback') || '{}');
  const qa = JSON.parse(localStorage.getItem('bureaucrapp_qa') || '{}');

  const totalProcedures = allProcs.length;
  const totalBookmarks = bookmarks.length;
  const bookmarkNames = (await Promise.all(bookmarks.map(async id => {
    const p = await getProcedureById(id);
    return p ? { id, title: p.title, cat: categories.find(c => c.id === p.categoryId) } : null;
  }))).filter(Boolean);

  let totalStepsCompleted = 0;
  let totalSteps = 0;
  Object.values(progress).forEach(p => {
    totalStepsCompleted += Object.values(p).filter(Boolean).length;
    totalSteps += Object.keys(p).length;
  });

  const feedbackCounts = { yes: 0, no: 0 };
  Object.values(feedback).forEach(v => { if (v === 'yes' || v === 'no') feedbackCounts[v]++; });

  const qaCount = Object.values(qa).reduce((sum, arr) => sum + arr.length, 0);

  const categoryBookmarks = {};
  bookmarkNames.forEach(({ id, cat }) => {
    const key = cat ? cat.id : 'unknown';
    if (!categoryBookmarks[key]) categoryBookmarks[key] = [];
    categoryBookmarks[key].push(id);
  });

  const topBookmarked = Object.entries(categoryBookmarks)
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 5);

  return {
    totalProcedures,
    totalBookmarks,
    bookmarkNames,
    totalStepsCompleted,
    totalSteps,
    feedbackCounts,
    qaCount,
    topBookmarked,
    allProcs
  };
}

export async function renderDashboard(onBack) {
  const stats = await getStats();
  const section = document.createElement('section');
  section.className = 'procedure-detail';

  section.innerHTML = `
    <div class="container" style="max-width:800px;padding:4rem 1rem">
      <button class="action-btn action-btn--text" data-dash-back style="margin-bottom:1.5rem">← ${t('common.back')}</button>
      <h1 style="font-size:var(--fs-2xl);margin-bottom:0.5rem">📊 ${t('dashboard.title')}</h1>
      <p style="color:var(--text-secondary);margin-bottom:2rem">${t('dashboard.subtitle')}</p>

      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:1rem;margin-bottom:2rem">
        <div class="sidebar-card stat-card" style="padding:1.25rem;text-align:center">
          <div style="font-size:2rem;font-weight:700;color:var(--accent)">${stats.totalProcedures}</div>
          <div style="font-size:0.85rem;color:var(--text-secondary)">${t('dashboard.total_guides')}</div>
        </div>
        <div class="sidebar-card stat-card" style="padding:1.25rem;text-align:center">
          <div style="font-size:2rem;font-weight:700;color:var(--accent)">${stats.totalBookmarks}</div>
          <div style="font-size:0.85rem;color:var(--text-secondary)">${t('dashboard.total_bookmarks')}</div>
        </div>
        <div class="sidebar-card stat-card" style="padding:1.25rem;text-align:center">
          <div style="font-size:2rem;font-weight:700;color:var(--accent)">${stats.totalStepsCompleted}/${stats.totalSteps}</div>
          <div style="font-size:0.85rem;color:var(--text-secondary)">${t('dashboard.steps_done')}</div>
        </div>
        <div class="sidebar-card stat-card" style="padding:1.25rem;text-align:center">
          <div style="font-size:2rem;font-weight:700;color:var(--accent)">${stats.qaCount}</div>
          <div style="font-size:0.85rem;color:var(--text-secondary)">${t('dashboard.qa_asked')}</div>
        </div>
      </div>

      <div class="sidebar-card" style="padding:1.25rem;margin-bottom:1rem">
        <h3 style="font-size:var(--fs-md);margin-bottom:0.75rem">💬 ${t('dashboard.feedback_title')}</h3>
        <div style="display:flex;gap:1.5rem;flex-wrap:wrap">
          <span>👍 ${t('proc.feedback.yes')}: <strong>${stats.feedbackCounts.yes}</strong></span>
          <span>👎 ${t('proc.feedback.no')}: <strong>${stats.feedbackCounts.no}</strong></span>
          <span style="color:var(--text-secondary)">${t('dashboard.total_responses')}: ${stats.feedbackCounts.yes + stats.feedbackCounts.no}</span>
        </div>
      </div>

      ${stats.bookmarkNames.length > 0 ? `
        <div class="sidebar-card" style="padding:1.25rem;margin-bottom:1rem">
          <h3 style="font-size:var(--fs-md);margin-bottom:0.75rem">⭐ ${t('dashboard.popular')}</h3>
          <div style="display:flex;flex-direction:column;gap:0.5rem">
            ${stats.topBookmarked.map(([catId, procs]) => {
              const cat = categories.find(c => c.id === catId);
              return `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--border)">
                  <span>${cat ? cat.icon : '📄'} ${cat ? cat.title : catId}</span>
                  <span class="badge badge--easy">${procs.length} ${t('dashboard.saved')}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}

      <div class="sidebar-card" style="padding:1.25rem;margin-bottom:1rem">
        <h3 style="font-size:var(--fs-md);margin-bottom:0.75rem">⏱ ${t('wait_times.title')}</h3>
        <p style="font-size:var(--fs-sm);color:var(--text-secondary);margin-bottom:0.5rem">${t('wait_times.desc')}</p>
      </div>

      <p style="font-size:0.8rem;color:var(--text-muted);margin-top:2rem">${t('dashboard.privacy_note')}</p>
    </div>
  `;

  section.querySelector('[data-dash-back]').addEventListener('click', (e) => {
    e.preventDefault();
    onBack();
  });

  return section;
}
