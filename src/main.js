import './styles/index.css';
import './styles/hero.css';
import './styles/cards.css';
import './styles/procedure.css';
import './styles/news.css';

import { renderHero } from './components/hero.js';
import { renderCategoryGrid, renderCategoryDetail } from './components/categoryGrid.js';
import { renderProcedureDetail } from './components/procedureDetail.js';
import { renderNewsBar } from './components/newsBar.js';
import { renderFooter } from './components/footer.js';
import { renderFavorites } from './components/favorites.js';
import { renderGdprBanner } from './components/gdprBanner.js';
import { renderPrivacyPage } from './components/privacyPage.js';
import { renderDashboard } from './components/dashboard.js';
import { renderWizard } from './components/wizard.js';
import { categories } from './data/categories.js';
import { getProcedureById, searchProcedures } from './data/procedures.js';
import { getLanguage, setLanguage, t, tProp } from './i18n.js';
import { initAnalytics, trackPageView } from './analytics.js';
import { updateSEO } from './seo.js';

let currentView = 'home';
let currentCategoryId = null;
let currentProcedureId = null;

const app = document.querySelector('#app');
const ariaLive = document.querySelector('#aria-live');

function announce(message) {
  if (ariaLive) {
    ariaLive.textContent = '';
    requestAnimationFrame(() => { ariaLive.textContent = message; });
  }
}

function focusHeading() {
  const h1 = app.querySelector('h1');
  if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus(); return; }
  const h2 = app.querySelector('h2');
  if (h2) { h2.setAttribute('tabindex', '-1'); h2.focus(); }
}

function setAriaCurrent() {
  document.querySelectorAll('[aria-current]').forEach(el => el.removeAttribute('aria-current'));
  const view = currentView;
  if (view === 'home') {
    const link = document.querySelector('[data-nav="home"]');
    if (link) link.setAttribute('aria-current', 'page');
  }
}

function createHeader() {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.id = 'site-header';
  header.setAttribute('role', 'banner');

  header.innerHTML = `
    <div class="header-logo" id="header-logo" tabindex="0" aria-label="Torna alla home page">
      <span>📋</span> Bureaucr<span>app</span>
    </div>
    <div class="header-search" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-label="Cerca procedure">
      <span class="header-search-icon" aria-hidden="true">🔍</span>
      <input type="text" class="header-search-input" id="header-search-input" placeholder="${t('hero.search.placeholder')}" autocomplete="off" aria-autocomplete="list" aria-controls="header-search-results" aria-activedescendant="" />
      <button class="header-search-clear" id="header-search-clear" aria-label="Cancella ricerca">✕</button>
      <div class="header-search-results" id="header-search-results" role="listbox" aria-label="Risultati della ricerca"></div>
    </div>
    <nav class="header-nav" role="navigation" aria-label="Navigazione principale">
      <a href="#/" class="header-nav-link active" data-nav="home">${t('nav.home')}</a>
      <a href="#/" class="header-nav-link" data-nav="categories">${t('nav.categories')}</a>
      <a href="#/" class="header-nav-link" data-nav="news">${t('nav.news')}</a>
      <select class="lang-toggle" id="lang-toggle" aria-label="Cambia lingua">
        <option value="it" ${getLanguage() === 'it' ? 'selected' : ''}>🇮🇹 IT</option>
        <option value="en" ${getLanguage() === 'en' ? 'selected' : ''}>🇬🇧 EN</option>
        <option value="ro" ${getLanguage() === 'ro' ? 'selected' : ''}>🇷🇴 RO</option>
        <option value="sq" ${getLanguage() === 'sq' ? 'selected' : ''}>🇦🇱 SQ</option>
        <option value="zh" ${getLanguage() === 'zh' ? 'selected' : ''}>🇨🇳 ZH</option>
        <option value="ar" ${getLanguage() === 'ar' ? 'selected' : ''}>🇸🇦 AR</option>
      </select>
    </nav>
    <button class="header-theme-btn" id="header-theme-btn" aria-label="Alterna tema chiaro/scuro" title="Alterna tema chiaro/scuro">
      ${document.documentElement.classList.contains('light-mode') ? '☀️' : '🌙'}
    </button>
    <button class="header-hamburger" id="hamburger-btn" aria-label="Apri menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  `;

  const overlay = document.createElement('div');
  overlay.className = 'mobile-nav-overlay';
  overlay.id = 'mobile-nav-overlay';
  overlay.innerHTML = `
    <a href="#/" class="mobile-nav-link" data-nav="home">🏠 ${t('nav.home')}</a>
    <a href="#/" class="mobile-nav-link" data-nav="categories">📂 ${t('nav.categories')}</a>
    <a href="#/" class="mobile-nav-link" data-nav="news">📰 ${t('nav.news')}</a>
    <select class="mobile-lang-toggle" id="mobile-lang-toggle">
      <option value="it" ${getLanguage() === 'it' ? 'selected' : ''}>🇮🇹 Italiano</option>
      <option value="en" ${getLanguage() === 'en' ? 'selected' : ''}>🇬🇧 English</option>
      <option value="ro" ${getLanguage() === 'ro' ? 'selected' : ''}>🇷🇴 Română</option>
      <option value="sq" ${getLanguage() === 'sq' ? 'selected' : ''}>🇦🇱 Shqip</option>
      <option value="zh" ${getLanguage() === 'zh' ? 'selected' : ''}>🇨🇳 中文</option>
      <option value="ar" ${getLanguage() === 'ar' ? 'selected' : ''}>🇸🇦 العربية</option>
    </select>
  `;

  const hamburger = header.querySelector('#hamburger-btn');

  function toggleMobileMenu() {
    const isOpen = overlay.classList.contains('visible');
    overlay.classList.toggle('visible');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  hamburger.addEventListener('click', toggleMobileMenu);

  // Header search logic
  const headerSearchInput = header.querySelector('#header-search-input');
  const headerSearchClear = header.querySelector('#header-search-clear');
  const headerSearchResults = header.querySelector('#header-search-results');
  let headerSearchTimer;

  headerSearchInput.addEventListener('input', () => {
    clearTimeout(headerSearchTimer);
    const query = headerSearchInput.value.trim();
    headerSearchClear.classList.toggle('visible', query.length > 0);

    if (query.length < 2) {
      headerSearchResults.classList.remove('visible');
      headerSearchResults.innerHTML = '';
      header.querySelector('.header-search').setAttribute('aria-expanded', 'false');
      return;
    }

    headerSearchTimer = setTimeout(async () => {
      const results = await searchProcedures(query);
      if (results.length === 0) {
        headerSearchResults.innerHTML = `<div class="header-search-empty">${t('hero.search.no_results')} "${query}"</div>`;
      } else {
        headerSearchResults.innerHTML = results.slice(0, 8).map((proc, i) => {
          const cat = categories.find(c => c.id === proc.categoryId);
          return `<div class="header-search-result" data-id="${proc.id}" role="option" tabindex="-1" data-index="${i}">
            <span class="header-search-result-icon">${cat ? cat.icon : '📄'}</span>
            <div class="header-search-result-text"><strong>${tProp(proc, 'title')}</strong><span>${tProp(proc, 'subtitle')}</span></div>
          </div>`;
        }).join('');
      }
      headerSearchResults.classList.add('visible');
      header.querySelector('.header-search').setAttribute('aria-expanded', 'true');

      headerSearchResults.querySelectorAll('.header-search-result[data-id]').forEach(item => {
        item.addEventListener('click', () => {
          const id = item.dataset.id;
          headerSearchResults.classList.remove('visible');
          headerSearchInput.value = '';
          headerSearchClear.classList.remove('visible');
          navigateTo('procedure', id);
        });
      });
    }, 200);
  });

  function hideHeaderSearch() {
    headerSearchResults.classList.remove('visible');
    headerSearchResults.innerHTML = '';
    header.querySelector('.header-search').setAttribute('aria-expanded', 'false');
  }

  headerSearchClear.addEventListener('click', () => {
    headerSearchInput.value = '';
    headerSearchClear.classList.remove('visible');
    hideHeaderSearch();
    headerSearchInput.focus();
  });

  document.addEventListener('click', (e) => {
    if (!header.querySelector('.header-search')?.contains(e.target)) {
      headerSearchResults.classList.remove('visible');
      header.querySelector('.header-search').setAttribute('aria-expanded', 'false');
    }
  });

  // Theme toggle button
  const themeBtn = header.querySelector('#header-theme-btn');
  themeBtn.addEventListener('click', () => {
    const on = document.documentElement.classList.toggle('light-mode');
    localStorage.setItem('bureaucrapp_light', on ? 'true' : 'false');
    themeBtn.textContent = on ? '☀️' : '🌙';
    if (on) {
      document.documentElement.classList.remove('high-contrast');
      localStorage.setItem('bureaucrapp_contrast', 'false');
      const contrastInput = document.querySelector('#contrast-check');
      if (contrastInput) contrastInput.checked = false;
    }
  });

  overlay.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.nav;
      toggleMobileMenu();
      if (target === 'home') {
        navigateTo('home');
      } else if (target === 'categories') {
        navigateTo('home');
        setTimeout(() => {
          document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (target === 'news') {
        navigateTo('home');
        setTimeout(() => {
          document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    });
  });

  header.querySelector('#header-logo').addEventListener('click', (e) => {
    e.preventDefault();
    if (overlay.classList.contains('visible')) toggleMobileMenu();
    navigateTo('home');
  });

  header.querySelectorAll('.header-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.nav;
      if (target === 'home') {
        navigateTo('home');
      } else if (target === 'categories') {
        navigateTo('home');
        setTimeout(() => {
          document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (target === 'news') {
        navigateTo('home');
        setTimeout(() => {
          document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    });
  });

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  const handleLangToggle = (e) => {
    setLanguage(e.target.value);
  };

  header.querySelector('#lang-toggle').addEventListener('change', handleLangToggle);
  overlay.querySelector('#mobile-lang-toggle').addEventListener('change', (e) => {
    handleLangToggle(e);
    toggleMobileMenu();
  });

  header._mobileOverlay = overlay;
  return header;
}

function getRouteFromHash() {
  const hash = window.location.hash || '#/';
  const parts = hash.replace('#/', '').split('/');

  if (parts[0] === 'category' && parts[1]) {
    return { view: 'category', id: parts[1] };
  } else if (parts[0] === 'procedure' && parts[1]) {
    return { view: 'procedure', id: parts[1] };
  } else if (parts[0] === 'privacy') {
    return { view: 'privacy', id: null };
  } else if (parts[0] === 'dashboard') {
    return { view: 'dashboard', id: null };
  } else if (parts[0] === 'wizard') {
    return { view: 'wizard', id: null };
  }
  return { view: 'home', id: null };
}

function setHash(view, id) {
  let hash = '#/';
  if (view === 'category' && id) {
    hash = `#/category/${id}`;
  } else if (view === 'procedure' && id) {
    hash = `#/procedure/${id}`;
  } else if (view === 'privacy') {
    hash = '#/privacy';
  } else if (view === 'dashboard') {
    hash = '#/dashboard';
  } else if (view === 'wizard') {
    hash = '#/wizard';
  }
  if (window.location.hash !== hash) {
    history.pushState(null, '', hash);
  }
}

async function navigateTo(view, id, skipHashUpdate, restoreScroll) {
  if (!skipHashUpdate) {
    try {
      history.replaceState({ ...history.state, scrollY: window.scrollY }, '');
    } catch {}
  }

  currentView = view;

  if (view === 'home') {
    currentCategoryId = null;
    currentProcedureId = null;
    if (!skipHashUpdate) setHash('home');
    await renderHome();
  } else if (view === 'category') {
    currentCategoryId = id;
    currentProcedureId = null;
    if (!skipHashUpdate) setHash('category', id);
    await renderCategory(id);
  } else if (view === 'procedure') {
    currentProcedureId = id;
    if (!skipHashUpdate) setHash('procedure', id);
    await renderProcedure(id);
  } else if (view === 'privacy') {
    currentCategoryId = null;
    currentProcedureId = null;
    if (!skipHashUpdate) setHash('privacy');
    renderPrivacy();
  } else if (view === 'dashboard') {
    currentCategoryId = null;
    currentProcedureId = null;
    if (!skipHashUpdate) setHash('dashboard');
    await renderDash();
  } else if (view === 'wizard') {
    currentCategoryId = null;
    currentProcedureId = null;
    if (!skipHashUpdate) setHash('wizard');
    renderWizardView();
  }

  if (restoreScroll && history.state?.scrollY) {
    requestAnimationFrame(() => window.scrollTo(0, history.state.scrollY));
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  updateNavLinks();
  setAriaCurrent();
  requestAnimationFrame(focusHeading);
  const viewNames = { home: t('nav.home'), category: t('nav.categories'), procedure: '', privacy: t('nav.privacy') };
  if (view !== 'procedure') announce(`${viewNames[view] || ''} ${t('common.loaded')}`);

  const routeProc = view === 'procedure' ? await getProcedureById(id).catch(() => null) : null;
  const routeCat = view === 'category'
    ? categories.find(c => c.id === id)
    : routeProc ? categories.find(c => c.id === routeProc.categoryId) : null;
  updateSEO(view, id, routeProc, routeCat);

  trackPageView(view, id);
}

function updateNavLinks() {
  document.querySelectorAll('.header-nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.nav === 'home' && currentView === 'home');
  });
}

function animateContent() {
  const content = app.querySelector('.hero, .procedure-detail, .categories-section');
  if (content) content.classList.add('view-enter');
}

const newsTickerItems = [
  { it: '🛴 Targa obbligatoria per monopattini elettrici dal 31-05-2026', en: '🛴 Mandatory license plate for e-scooters from 31-05-2026' },
  { it: '📄 Nuovo formato carta d\'identità elettronica (CIE) dal 01-06-2026', en: '📄 New electronic ID card (CIE) format from 01-06-2026' },
  { it: '💰 L’IMU 2026 scade il 16 giugno — calcola e paga online', en: '💰 IMU 2026 deadline June 16 — calculate and pay online' },
  { it: '🚗 Revisione auto: obbligo controllo emissioni per Euro 4 da luglio', en: '🚗 Car inspection: mandatory emission check for Euro 4 from July' }
];

function renderNewsTicker() {
  const ticker = document.createElement('div');
  ticker.className = 'news-ticker';
  ticker.id = 'news-ticker';
  const lang = getLanguage();
  const baseLang = ['it', 'en'].includes(lang) ? lang : 'en';
  ticker.innerHTML = `
    <div class="news-ticker-track">
      ${newsTickerItems.map(item => `<span class="news-ticker-item">${item[baseLang]}</span>`).join('')}
    </div>
  `;
  return ticker;
}

function appendHeader() {
  const header = createHeader();
  app.appendChild(header);
  if (header._mobileOverlay) app.appendChild(header._mobileOverlay);
  app.appendChild(renderNewsTicker());
}

async function renderHome() {
  app.innerHTML = '';
  appendHeader();
  const hero = renderHero(
    (catId) => navigateTo('category', catId),
    (procId) => navigateTo('procedure', procId)
  );
  app.appendChild(hero);
  const favSection = await renderFavorites((procId) => navigateTo('procedure', procId));
  if (favSection) app.appendChild(favSection);
  const grid = await renderCategoryGrid((catId) => navigateTo('category', catId));
  app.appendChild(grid);
  app.appendChild(renderNewsBar());
  app.appendChild(renderFooter());
  const gdpr = renderGdprBanner();
  if (gdpr) document.body.appendChild(gdpr);
  animateContent();
}

function renderNotFound(type, id) {
  app.innerHTML = '';
  appendHeader();
  const section = document.createElement('section');
  section.className = 'procedure-detail';
  section.innerHTML = `
    <div class="container" style="text-align:center;padding:6rem 0">
      <div style="font-size:4rem;margin-bottom:1rem">🔍</div>
      <h2 style="font-size:var(--fs-2xl);margin-bottom:0.5rem">${t('common.not_found_title') || 'Pagina non trovata'}</h2>
      <p style="color:var(--text-secondary);margin-bottom:2rem">${t('common.not_found_desc') || 'La procedura o categoria richiesta non esiste.'}</p>
      <button class="action-btn" onclick="window.location.hash='#/'">← ${t('common.back')}</button>
    </div>
  `;
  app.appendChild(section);
  app.appendChild(renderFooter());
  animateContent();
}

async function renderCategory(categoryId) {
  const catExists = categories.some(c => c.id === categoryId);
  if (!catExists) { renderNotFound('category', categoryId); return; }

  app.innerHTML = '';
  appendHeader();
  const detail = await renderCategoryDetail(
    categoryId,
    (procId) => navigateTo('procedure', procId),
    () => navigateTo('home')
  );
  app.appendChild(detail);
  app.appendChild(renderFooter());
  animateContent();
}

async function renderProcedure(procedureId) {
  const proc = await getProcedureById(procedureId);
  if (!proc) { renderNotFound('procedure', procedureId); return; }

  app.innerHTML = '';
  appendHeader();
  const detail = await renderProcedureDetail(
    procedureId,
    () => navigateTo('home'),
    (procId) => navigateTo('procedure', procId),
    (catId) => navigateTo('category', catId)
  );
  app.appendChild(detail);
  app.appendChild(renderFooter());
  animateContent();
}

function renderPrivacy() {
  app.innerHTML = '';
  appendHeader();
  app.appendChild(renderPrivacyPage(() => navigateTo('home')));
  app.appendChild(renderFooter());
  animateContent();
}

async function renderDash() {
  app.innerHTML = '';
  appendHeader();
  const dash = await renderDashboard(() => navigateTo('home'));
  app.appendChild(dash);
  app.appendChild(renderFooter());
  animateContent();
}

function renderWizardView() {
  app.innerHTML = '';
  appendHeader();
  app.appendChild(renderWizard(
    (catId) => navigateTo('category', catId),
    (procId) => navigateTo('procedure', procId)
  ));
  app.appendChild(renderFooter());
  animateContent();
}

window.addEventListener('popstate', () => {
  const route = getRouteFromHash();
  navigateTo(route.view, route.id, true, true);
});

if (localStorage.getItem('bureaucrapp_light') === 'true') {
  document.documentElement.classList.add('light-mode');
}
if (localStorage.getItem('bureaucrapp_contrast') === 'true') {
  document.documentElement.classList.add('high-contrast');
}
if (localStorage.getItem('bureaucrapp_simplified') === 'true') {
  document.documentElement.classList.add('simplified-lang');
}

initAnalytics();
const initialRoute = getRouteFromHash();
navigateTo(initialRoute.view, initialRoute.id, true);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => {
      console.log('SW registration failed: ', err);
    });
  });
}

window.addEventListener('languageChanged', () => {
  navigateTo(currentView, currentView === 'category' ? currentCategoryId : currentProcedureId, true);
});


