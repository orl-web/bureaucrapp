import { categories } from '../data/categories.js';
import { getProcedureById } from '../data/procedures.js';
import { isBookmarked, toggleBookmark, shareProcedure, printProcedure, showToast } from './utils.js';
import { t, tProp, getLanguage } from '../i18n.js';
import { trackEvent } from '../analytics.js';
import { renderVideoTutorial } from './videoTutorial.js';
import { renderWaitTimes } from './waitTimes.js';
import { renderCostBreakdown } from './costCalculator.js';
import { renderDocVaultButton } from './documentVault.js';

function getProgress(procedureId) {
  try {
    const data = JSON.parse(localStorage.getItem('bureaucrapp_progress') || '{}');
    return data[procedureId] || {};
  } catch { return {}; }
}

function setProgress(procedureId, stepIndex, completed) {
  try {
    const data = JSON.parse(localStorage.getItem('bureaucrapp_progress') || '{}');
    if (!data[procedureId]) data[procedureId] = {};
    data[procedureId][stepIndex] = completed;
    localStorage.setItem('bureaucrapp_progress', JSON.stringify(data));
  } catch {}
}

function getDocChecks(procedureId) {
  try {
    const data = JSON.parse(localStorage.getItem('bureaucrapp_docs') || '{}');
    return data[procedureId] || {};
  } catch { return {}; }
}

function setDocCheck(procedureId, docIndex, checked) {
  try {
    const data = JSON.parse(localStorage.getItem('bureaucrapp_docs') || '{}');
    if (!data[procedureId]) data[procedureId] = {};
    data[procedureId][docIndex] = checked;
    localStorage.setItem('bureaucrapp_docs', JSON.stringify(data));
  } catch {}
}

function getFeedback(procedureId) {
  try {
    const data = JSON.parse(localStorage.getItem('bureaucrapp_feedback') || '{}');
    return data[procedureId];
  } catch { return null; }
}

function setFeedback(procedureId, value) {
  try {
    const data = JSON.parse(localStorage.getItem('bureaucrapp_feedback') || '{}');
    data[procedureId] = value;
    localStorage.setItem('bureaucrapp_feedback', JSON.stringify(data));
  } catch {}
}

function getQA(procedureId) {
  try {
    const data = JSON.parse(localStorage.getItem('bureaucrapp_qa') || '{}');
    return data[procedureId] || [];
  } catch { return []; }
}

function getVisitorId() {
  let id = localStorage.getItem('bureaucrapp_visitor');
  if (!id) {
    id = 'Visitatore-' + Math.random().toString(36).slice(2, 8);
    localStorage.setItem('bureaucrapp_visitor', id);
  }
  return id;
}

function canSubmitQA(procedureId) {
  try {
    const timestamps = JSON.parse(localStorage.getItem('bureaucrapp_qa_timestamps') || '{}');
    const last = timestamps[procedureId] || 0;
    if (Date.now() - last < 60000) {
      return { allowed: false, reason: t('qa.error.rate') };
    }
    return { allowed: true };
  } catch { return { allowed: true }; }
}

function markQASubmitted(procedureId) {
  try {
    const timestamps = JSON.parse(localStorage.getItem('bureaucrapp_qa_timestamps') || '{}');
    timestamps[procedureId] = Date.now();
    localStorage.setItem('bureaucrapp_qa_timestamps', JSON.stringify(timestamps));
  } catch {}
}

function validateQA(question) {
  const q = question.trim();
  if (q.length < 10) return { valid: false, reason: t('qa.error.short') };
  if (q.length > 500) return { valid: false, reason: t('qa.error.long') };
  const upper = (q.match(/[A-Z]{2,}/g) || []).join('').length;
  if (upper > q.length * 0.5) return { valid: false, reason: t('qa.error.caps') };
  if (/(.)\1{4,}/.test(q)) return { valid: false, reason: t('qa.error.spam') };
  const linkCount = (q.match(/https?:\/\//g) || []).length;
  if (linkCount > 2) return { valid: false, reason: t('qa.error.links') };
  return { valid: true };
}

function addQA(procedureId, question) {
  try {
    const data = JSON.parse(localStorage.getItem('bureaucrapp_qa') || '{}');
    if (!data[procedureId]) data[procedureId] = [];
    data[procedureId].push({
      id: Date.now(),
      author: getVisitorId(),
      question,
      answer: null,
      date: new Date().toLocaleDateString()
    });
    localStorage.setItem('bureaucrapp_qa', JSON.stringify(data));
  } catch {}
}

export async function renderProcedureDetail(procedureId, onBack, onProcedureClick, onCategoryClick) {
  const proc = await getProcedureById(procedureId);
  if (!proc) return document.createElement('div');

  const cat = categories.find(c => c.id === proc.categoryId);
  const progress = getProgress(procedureId);
  const docChecks = getDocChecks(procedureId);

  const completedSteps = Object.values(progress).filter(Boolean).length;
  const totalSteps = proc.steps.length;
  const progressPct = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

  const difficultyClass = proc.difficulty === 'facile' ? 'easy' : proc.difficulty === 'media' ? 'medium' : 'hard';

  const section = document.createElement('section');
  section.className = 'procedure-detail';

  section.innerHTML = `
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="#" id="bread-home">${t('nav.home')}</a>
        <span class="separator" aria-hidden="true">›</span>
        <a href="#" id="bread-cat">${cat ? tProp(cat, 'title') : ''}</a>
        <span class="separator" aria-hidden="true">›</span>
        <span aria-current="page">${tProp(proc, 'title')}</span>
      </nav>

      <div class="detail-header">
        <div class="detail-header-top">
          <span class="detail-icon">${cat ? cat.icon : '📄'}</span>
          <div class="detail-title-group">
            <h1 class="detail-title">${tProp(proc, 'title')}</h1>
            <p class="detail-subtitle">${tProp(proc, 'subtitle')}</p>
          </div>
        </div>
        <div class="detail-actions" role="group" aria-label="Azioni per questa guida">
          <button class="action-btn" id="btn-bookmark" aria-label="${isBookmarked(procedureId) ? t('proc.btn.bookmark.saved') : t('proc.btn.bookmark.save')}">
            <span id="bookmark-icon" aria-hidden="true">${isBookmarked(procedureId) ? '★' : '☆'}</span>
            <span id="bookmark-label">${isBookmarked(procedureId) ? t('proc.btn.bookmark.saved') : t('proc.btn.bookmark.save')}</span>
          </button>
          <button class="action-btn" id="btn-share" aria-label="${t('proc.btn.share')}">
            <span aria-hidden="true">↗</span> ${t('proc.btn.share')}
          </button>
          <button class="action-btn" id="btn-print" aria-label="${t('proc.btn.print')}">
            <span aria-hidden="true">🖨</span> ${t('proc.btn.print')}
          </button>
        </div>
      </div>

      ${(() => {
        const lastDate = new Date(proc.lastVerified + 'T00:00:00');
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        const isOutdated = lastDate < sixMonthsAgo;
        return isOutdated ? `<div class="outdated-banner">⚠️ ${t('proc.outdated_warning')}</div>` : '';
      })()}

      <div class="detail-meta">
        <div class="meta-card">
          <div class="meta-card-label">Difficoltà</div>
          <div class="meta-card-value">
            <span class="badge badge--${difficultyClass}">
              ${proc.difficulty === 'facile' ? t('proc.difficulty.easy') : proc.difficulty === 'media' ? t('proc.difficulty.medium') : t('proc.difficulty.hard')}
            </span>
          </div>
        </div>
        <div class="meta-card">
          <div class="meta-card-label">Tempo Stimato</div>
          <div class="meta-card-value">${tProp(proc, 'estimatedTime')}</div>
        </div>
        <div class="meta-card">
          <div class="meta-card-label">Costo</div>
          <div class="meta-card-value">${proc.cost === 'Gratuito' ? t('proc.cost.free') : tProp(proc, 'cost')}</div>
        </div>
        <div class="meta-card">
          <div class="meta-card-label">Ultimo Aggiornamento</div>
          <div class="meta-card-value">${proc.lastVerified}</div>
        </div>
      </div>

      <div class="detail-layout">
        <div class="detail-main">
          <div class="progress-bar-container">
            <div class="progress-bar-label">
              <span>Avanzamento</span>
              <span id="progress-text">${completedSteps}/${totalSteps} completati</span>
            </div>
            <div class="progress-bar">
              <div class="progress-bar-fill" id="progress-fill" style="width:${progressPct}%"></div>
            </div>
          </div>

          <div id="video-tutorial-container"></div>

          <div class="steps-section">
            <h2 class="steps-title">📋 Procedura passo-passo</h2>
            <div id="steps-list"></div>
          </div>

          <div id="cost-calculator-container"></div>

          <div class="feedback-section" id="feedback-section">
            <h3 class="feedback-title">${t('proc.feedback.title')}</h3>
            <div class="feedback-actions">
              <button class="feedback-btn" id="btn-feedback-yes" data-value="yes">👍 ${t('proc.feedback.yes')}</button>
              <button class="feedback-btn" id="btn-feedback-no" data-value="no">👎 ${t('proc.feedback.no')}</button>
            </div>
            <p class="feedback-thanks" id="feedback-thanks" style="display: none;">${t('proc.feedback.thanks')}</p>
          </div>

          <div class="qa-section">
            <h2 class="qa-title">💬 ${t('proc.qa.title')}</h2>
            <p class="qa-subtitle">${t('proc.qa.subtitle')}</p>

            <form class="qa-form" id="qa-form">
              <textarea id="qa-honeypot" name="website" autocomplete="off" tabindex="-1" style="position:absolute;left:-9999px;top:-9999px" aria-hidden="true"></textarea>
              <textarea id="qa-input" placeholder="${t('proc.qa.placeholder')}" required rows="3" maxlength="500"></textarea>
              <button type="submit" class="qa-submit-btn">${t('proc.qa.submit')}</button>
            </form>

            <div class="qa-list" id="qa-list"></div>
          </div>
        </div>

        <aside class="detail-sidebar">
          <div class="sidebar-card">
            <h3 class="sidebar-card-title">${t('proc.sidebar.docs')}</h3>
            <div class="docs-list" id="docs-list"></div>
            <div id="doc-vault-btn" style="margin-top:0.75rem"></div>
          </div>

          <div class="sidebar-card">
            <h3 class="sidebar-card-title">${t('proc.sidebar.links')}</h3>
            <div class="links-list" id="links-list"></div>
          </div>

          ${proc.warnings && proc.warnings.length > 0 ? `
            <div class="sidebar-card">
              <h3 class="sidebar-card-title" style="color: var(--accent-red);">${t('proc.sidebar.warnings')}</h3>
              <div class="warnings-list" id="warnings-list"></div>
            </div>
          ` : ''}

          ${proc.relatedProcedures && proc.relatedProcedures.length > 0 ? `
            <div class="sidebar-card">
              <h3 class="sidebar-card-title">${t('proc.sidebar.related')}</h3>
              <div id="related-list"></div>
            </div>
          ` : ''}

          <div id="wait-times-container"></div>

          <div class="sidebar-card">
            <button class="action-btn action-btn--secondary" id="btn-report-error" style="width:100%;justify-content:center">
              🐛 ${t('proc.report_error')}
            </button>
          </div>
        </aside>
      </div>
    </div>
  `;

  section.querySelector('#bread-home').addEventListener('click', (e) => {
    e.preventDefault();
    onBack();
  });
  section.querySelector('#bread-cat').addEventListener('click', (e) => {
    e.preventDefault();
    if (cat) onCategoryClick(cat.id);
  });

  section.querySelector('#btn-bookmark').addEventListener('click', () => {
    const nowBookmarked = toggleBookmark(procedureId);
    section.querySelector('#bookmark-icon').textContent = nowBookmarked ? '★' : '☆';
    section.querySelector('#bookmark-label').textContent = nowBookmarked ? t('proc.btn.bookmark.saved') : t('proc.btn.bookmark.save');
    section.querySelector('#btn-bookmark').classList.toggle('active', nowBookmarked);
    showToast(nowBookmarked ? '⭐ Aggiunto ai preferiti' : '✓ Rimosso dai preferiti');
    trackEvent('bookmark_toggle', { procedure_id: procedureId, bookmarked: nowBookmarked });
  });

  section.querySelector('#btn-share').addEventListener('click', () => {
    shareProcedure(proc);
    trackEvent('share_click', { procedure_id: procedureId });
  });

  section.querySelector('#btn-print').addEventListener('click', () => {
    printProcedure();
    trackEvent('print_click', { procedure_id: procedureId });
  });

  section.querySelector('#btn-report-error').addEventListener('click', () => {
    const title = encodeURIComponent(`[Segnalazione] ${tProp(proc, 'title')}`);
    const body = encodeURIComponent(
      `**Procedura**: ${tProp(proc, 'title')}\n**ID**: ${procedureId}\n**Lingua**: ${getLanguage()}\n\n**Descrivi l'errore:**\n\n`
    );
    window.open(`https://github.com/bureaucrapp/bureaucrapp/issues/new?title=${title}&body=${body}`, '_blank');
    trackEvent('report_error', { procedure_id: procedureId });
  });

  if (isBookmarked(procedureId)) {
    section.querySelector('#btn-bookmark').classList.add('active');
  }

  const stepsList = section.querySelector('#steps-list');
  proc.steps.forEach((step, i) => {
    const isCompleted = progress[i] === true;
    const stepEl = document.createElement('div');
    stepEl.className = `step ${isCompleted ? 'completed' : ''}`;

    stepEl.innerHTML = `
      <div class="step-number" aria-hidden="true">${isCompleted ? '✓' : i + 1}</div>
        <div class="step-check ${isCompleted ? 'checked' : ''}" data-step="${i}" role="checkbox" aria-checked="${isCompleted}" aria-label="${t('proc.step_check')} ${i + 1}: ${tProp(step, 'title')}" tabindex="0">
          ${isCompleted ? '✓' : ''}
        </div>
        <h3 class="step-title">${tProp(step, 'title')}</h3>
      <p class="step-desc">${tProp(step, 'description')}</p>
      ${step.tip ? `
        <div class="step-tip">
          <span class="step-tip-icon">💡</span>
          <span>${tProp(step, 'tip')}</span>
        </div>
      ` : ''}
    `;

    const check = stepEl.querySelector('.step-check');
    const toggleStep = () => {
      const nowCompleted = !progress[i];
      progress[i] = nowCompleted;
      setProgress(procedureId, i, nowCompleted);

      trackEvent('step_toggle', {
        procedure_id: procedureId,
        step_index: i,
        completed: nowCompleted
      });

      stepEl.classList.toggle('completed', nowCompleted);
      check.classList.toggle('checked', nowCompleted);
      check.innerHTML = nowCompleted ? '✓' : '';
      check.setAttribute('aria-checked', nowCompleted.toString());
      check.setAttribute('aria-label', `${nowCompleted ? t('proc.step_completed') : t('proc.step_check')} ${i + 1}: ${tProp(step, 'title')}`);
      stepEl.querySelector('.step-number').textContent = nowCompleted ? '✓' : i + 1;

      const newCompleted = Object.values(progress).filter(Boolean).length;
      const newPct = Math.round((newCompleted / totalSteps) * 100);
      section.querySelector('#progress-fill').style.width = newPct + '%';
      section.querySelector('#progress-text').textContent = `${newCompleted}/${totalSteps} completati`;
    };
    check.addEventListener('click', toggleStep);
    check.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleStep(); }
    });

    stepsList.appendChild(stepEl);
  });

  const docsList = section.querySelector('#docs-list');
  const docsArray = tProp(proc, 'documents') || proc.documents || [];
  docsArray.forEach((doc, i) => {
    const isChecked = docChecks[i] === true;
    const docEl = document.createElement('div');
    docEl.className = 'doc-item';
    docEl.innerHTML = `
      <span class="doc-check ${isChecked ? 'checked' : ''}" data-doc="${i}" role="checkbox" aria-checked="${isChecked}" aria-label="${t('proc.doc_check')}: ${doc}" tabindex="0">
        ${isChecked ? '✓' : ''}
      </span>
      <span>${doc}</span>
    `;

    const check = docEl.querySelector('.doc-check');
    const toggleDoc = () => {
      const nowChecked = !docChecks[i];
      docChecks[i] = nowChecked;
      setDocCheck(procedureId, i, nowChecked);
      trackEvent('doc_check_toggle', {
        procedure_id: procedureId,
        doc_index: i,
        checked: nowChecked
      });
      check.classList.toggle('checked', nowChecked);
      check.innerHTML = nowChecked ? '✓' : '';
      check.setAttribute('aria-checked', nowChecked.toString());
    };
    check.addEventListener('click', toggleDoc);
    check.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleDoc(); }
    });

    docsList.appendChild(docEl);
  });

  const docVaultContainer = section.querySelector('#doc-vault-btn');
  docVaultContainer.appendChild(renderDocVaultButton(procedureId, docsArray));

  const linksList = section.querySelector('#links-list');
  if (linksList) {
    const linksArray = tProp(proc, 'officialLinks') || proc.officialLinks || [];
    linksArray.forEach(link => {
      const linkEl = document.createElement('a');
      linkEl.className = 'official-link';
      linkEl.href = link.url;
      linkEl.target = '_blank';
      linkEl.rel = 'noopener noreferrer';
      linkEl.innerHTML = `
        <span class="official-link-icon">🔗</span>
        <span>${tProp(link, 'label') || link.label}</span>
      `;
      linksList.appendChild(linkEl);
    });
  }

  const warningsList = section.querySelector('#warnings-list');
  if (warningsList) {
    const warningsArray = tProp(proc, 'warnings') || proc.warnings || [];
    warningsArray.forEach(w => {
      const wEl = document.createElement('div');
      wEl.className = 'warning-item';
      wEl.innerHTML = `<span>${w}</span>`;
      warningsList.appendChild(wEl);
    });
  }

  if (proc.relatedProcedures && proc.relatedProcedures.length > 0) {
    const relatedList = section.querySelector('#related-list');
    if (relatedList) {
      for (const relId of proc.relatedProcedures) {
        const relProc = await getProcedureById(relId);
        if (!relProc) continue;
        const relCat = categories.find(c => c.id === relProc.categoryId);
        const item = document.createElement('div');
        item.className = 'related-item';
        item.innerHTML = `<span>${relCat ? relCat.icon : '📄'}</span> <span>${relProc.title}</span>`;
        item.addEventListener('click', () => onProcedureClick(relId));
        relatedList.appendChild(item);
      }
    }
  }

  const feedbackYesBtn = section.querySelector('#btn-feedback-yes');
  const feedbackNoBtn = section.querySelector('#btn-feedback-no');
  const feedbackThanks = section.querySelector('#feedback-thanks');
  const currentFeedback = getFeedback(procedureId);

  if (currentFeedback) {
    if (currentFeedback === 'yes') feedbackYesBtn.classList.add('active');
    if (currentFeedback === 'no') feedbackNoBtn.classList.add('active');
    feedbackThanks.style.display = 'block';
  }

  const handleFeedback = (val) => {
    setFeedback(procedureId, val);
    feedbackYesBtn.classList.toggle('active', val === 'yes');
    feedbackNoBtn.classList.toggle('active', val === 'no');
    feedbackThanks.style.display = 'block';
    showToast(t('proc.feedback.thanks'));
  };

  feedbackYesBtn.addEventListener('click', () => handleFeedback('yes'));
  feedbackNoBtn.addEventListener('click', () => handleFeedback('no'));

  const qaForm = section.querySelector('#qa-form');
  const qaInput = section.querySelector('#qa-input');
  const qaList = section.querySelector('#qa-list');

  const renderQA = () => {
    const questions = getQA(procedureId);
    qaList.innerHTML = '';

    if (questions.length === 0) {
      qaList.innerHTML = `<p class="qa-empty">${t('proc.qa.empty')}</p>`;
      return;
    }

    questions.forEach(q => {
      const qEl = document.createElement('div');
      qEl.className = 'qa-item';

      let answerHtml = '';
      if (q.answer) {
        answerHtml = `
          <div class="qa-answer">
            <div class="qa-answer-header"><strong>Esperto</strong> - ${q.answerDate || q.date}</div>
            <div class="qa-answer-text">${q.answer}</div>
          </div>
        `;
      } else {
        answerHtml = `<div class="qa-pending">${t('proc.qa.moderated')}</div>`;
      }

      qEl.innerHTML = `
        <div class="qa-question">
          <div class="qa-q-header"><strong>${q.author}</strong> - ${q.date}</div>
          <div class="qa-q-text">${q.question}</div>
        </div>
        ${answerHtml}
      `;
      qaList.appendChild(qEl);
    });
  };

  renderQA();

  const qaHoneypot = section.querySelector('#qa-honeypot');

  qaForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (qaHoneypot.value.trim().length > 0) {
      showToast(t('proc.qa.moderated'));
      qaForm.reset();
      return;
    }

    const rateCheck = canSubmitQA(procedureId);
    if (!rateCheck.allowed) {
      showToast(rateCheck.reason);
      return;
    }

    const val = qaInput.value.trim();
    const validation = validateQA(val);
    if (!validation.valid) {
      showToast(validation.reason);
      return;
    }

    addQA(procedureId, val);
    markQASubmitted(procedureId);
    trackEvent('qa_submit', { procedure_id: procedureId });
    qaInput.value = '';
    showToast(t('proc.qa.moderated'));
    renderQA();
  });

  const videoContainer = section.querySelector('#video-tutorial-container');
  const videoEl = renderVideoTutorial(proc);
  if (videoEl) videoContainer.appendChild(videoEl);

  const costContainer = section.querySelector('#cost-calculator-container');
  const costEl = renderCostBreakdown(proc);
  if (costEl) costContainer.appendChild(costEl);

  const waitContainer = section.querySelector('#wait-times-container');
  const waitEl = renderWaitTimes(procedureId, tProp(proc, 'title'));
  if (waitEl) waitContainer.appendChild(waitEl);

  return section;
}
