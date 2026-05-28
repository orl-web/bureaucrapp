import { t } from '../i18n.js';
import { initAnalytics } from '../analytics.js';
import { renderRegionalSettings } from './regionalSettings.js';

const TELEMETRY_KEY = 'bureaucrapp_telemetry';
const CONSENT_KEY = 'bureaucrapp_gdpr_consent';

export function isTelemetryEnabled() {
  return localStorage.getItem(TELEMETRY_KEY) === 'true';
}

export function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  const telemetry = localStorage.getItem(TELEMETRY_KEY) === 'true';

  footer.innerHTML = `
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="footer-brand-name">Bureaucr<span>app</span></div>
          <p class="footer-brand-desc">
            ${t('footer.about')}
          </p>
          <div class="footer-disclaimer">
            ⚠️ Questo sito ha scopo informativo. Le informazioni sono ricavate da fonti ufficiali ma potrebbero non essere aggiornate. Consulta sempre i portali governativi per conferma.
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">${t('footer.links.title')}</h4>
          <div class="footer-links">
            <a href="https://www.agenziaentrate.gov.it" target="_blank" class="footer-link">Agenzia delle Entrate</a>
            <a href="https://www.inps.it" target="_blank" class="footer-link">INPS</a>
            <a href="https://www.anpr.interno.it" target="_blank" class="footer-link">ANPR</a>
            <a href="https://www.interno.gov.it" target="_blank" class="footer-link">Min. Interno</a>
            <a href="https://www.salute.gov.it" target="_blank" class="footer-link">Min. Salute</a>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Identità Digitale</h4>
          <div class="footer-links">
            <a href="https://www.spid.gov.it" target="_blank" class="footer-link">SPID</a>
            <a href="https://www.cartaidentita.interno.gov.it" target="_blank" class="footer-link">CIE</a>
            <a href="https://www.pagopa.gov.it" target="_blank" class="footer-link">PagoPA</a>
            <a href="https://www.impresainungiorno.gov.it" target="_blank" class="footer-link">Impresa in un giorno</a>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">${t('footer.contact.title')}</h4>
          <div class="footer-links">
            <a href="mailto:hello@bureaucrapp.it" class="footer-link">hello@bureaucrapp.it</a>
            <a href="#/wizard" class="footer-link">🤖 ${t('wizard.cta')}</a>
            <a href="#/privacy" class="footer-link">${t('nav.privacy')}</a>
            <a href="#/dashboard" class="footer-link">📊 ${t('dashboard.title')}</a>
            <a href="https://github.com/bureaucrapp" target="_blank" class="footer-link">GitHub</a>
          </div>
        </div>
      </div>

      <div class="footer-region" id="footer-region"></div>

      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Bureaucrapp — Guida alla burocrazia italiana</span>
        <span class="footer-bottom-end">
          <label class="telemetry-toggle" title="Attiva/disattiva la raccolta anonima delle statistiche di utilizzo.">
            <input type="checkbox" ${telemetry ? 'checked' : ''} id="telemetry-check" />
            <span class="telemetry-slider"></span>
            <span class="telemetry-label">${t('accessibility.analytics')}</span>
          </label>
          <label class="telemetry-toggle" title="Attiva/disattiva la modalità ad alto contrasto">
            <input type="checkbox" ${document.documentElement.classList.contains('high-contrast') ? 'checked' : ''} id="contrast-check" />
            <span class="telemetry-slider"></span>
            <span class="telemetry-label">${t('accessibility.contrast')}</span>
          </label>
          <label class="telemetry-toggle" title="Attiva/disattiva la modalità semplificata (testo più grande)">
            <input type="checkbox" ${document.documentElement.classList.contains('simplified-lang') ? 'checked' : ''} id="simplified-check" />
            <span class="telemetry-slider"></span>
            <span class="telemetry-label">${t('accessibility.simplified')}</span>
          </label>
          <span style="opacity:0.6">Dati aggiornati a maggio 2026</span>
        </span>
      </div>
    </div>
  `;

  const telemetryInput = footer.querySelector('#telemetry-check');
  if (telemetryInput) {
    telemetryInput.addEventListener('change', () => {
      const isChecked = telemetryInput.checked;
      localStorage.setItem(TELEMETRY_KEY, isChecked ? 'true' : 'false');
      if (isChecked) {
        // Turning telemetry on also implies GDPR consent
        localStorage.setItem(CONSENT_KEY, 'true');
        initAnalytics();
        const banner = document.getElementById('gdpr-banner');
        if (banner) banner.remove();
      }
      window.dispatchEvent(new CustomEvent('consentChanged', { detail: { consent: isChecked, telemetry: isChecked } }));
    });
  }

  // Contrast toggle (mutually exclusive with light mode)
  const contrastInput = footer.querySelector('#contrast-check');
  if (contrastInput) {
    contrastInput.addEventListener('change', () => {
      const on = contrastInput.checked;
      document.documentElement.classList.toggle('high-contrast', on);
      localStorage.setItem('bureaucrapp_contrast', on ? 'true' : 'false');
      if (on) {
        document.documentElement.classList.remove('light-mode');
        localStorage.setItem('bureaucrapp_light', 'false');
        const themeBtn = document.querySelector('#header-theme-btn');
        if (themeBtn) themeBtn.textContent = '🌙';
      }
    });
  }

  // Simplified language toggle
  const simplifiedInput = footer.querySelector('#simplified-check');
  if (simplifiedInput) {
    simplifiedInput.addEventListener('change', () => {
      const on = simplifiedInput.checked;
      document.documentElement.classList.toggle('simplified-lang', on);
      localStorage.setItem('bureaucrapp_simplified', on ? 'true' : 'false');
    });
  }

  // Listen for consent changes elsewhere to sync checkbox state
  const syncConsent = (e) => {
    if (telemetryInput) {
      telemetryInput.checked = e.detail.telemetry;
    }
  };
  window.addEventListener('consentChanged', syncConsent);

  // Regional settings
  const regionContainer = footer.querySelector('#footer-region');
  regionContainer.appendChild(renderRegionalSettings());
  
  return footer;
}
