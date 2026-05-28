import { t } from '../i18n.js';
import { initAnalytics } from '../analytics.js';
import './gdprBanner.css';

const CONSENT_KEY = 'bureaucrapp_gdpr_consent';
const TELEMETRY_KEY = 'bureaucrapp_telemetry';

export function hasConsent() {
  return localStorage.getItem(CONSENT_KEY) === 'true';
}

export function setConsent() {
  localStorage.setItem(CONSENT_KEY, 'true');
  localStorage.setItem(TELEMETRY_KEY, 'true');
  initAnalytics();
  // Dispatch event so footer and other components can update
  window.dispatchEvent(new CustomEvent('consentChanged', { detail: { consent: true, telemetry: true } }));
  const banner = document.getElementById('gdpr-banner');
  if (banner) banner.remove();
}

export function renderGdprBanner() {
  if (hasConsent()) return null;

  const banner = document.createElement('div');
  banner.id = 'gdpr-banner';
  banner.className = 'gdpr-banner';
  banner.innerHTML = `
    <p>${t('gdpr.text')}</p>
    <div class="gdpr-banner-actions">
      <button class="action-btn action-btn--secondary" data-gdpr-accept>${t('gdpr.accept')}</button>
      <a href="#/privacy" class="action-btn action-btn--text" data-gdpr-more>${t('gdpr.more')}</a>
    </div>
  `;

  banner.querySelector('[data-gdpr-accept]').addEventListener('click', setConsent);

  return banner;
}
