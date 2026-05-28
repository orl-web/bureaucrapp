const CONSENT_KEY = 'bureaucrapp_gdpr_consent';
const TELEMETRY_KEY = 'bureaucrapp_telemetry';

let initialized = false;

// Helper to check if both GDPR consent and telemetry are enabled
export function isAnalyticsAllowed() {
  return localStorage.getItem(CONSENT_KEY) === 'true' && localStorage.getItem(TELEMETRY_KEY) === 'true';
}

// Initialize analytics script dynamically based on consent
export function initAnalytics() {
  if (initialized) return;
  if (!isAnalyticsAllowed()) return;

  const gaId = import.meta.env.VITE_GA_ID;
  const vercelId = import.meta.env.VITE_VERCEL_ANALYTICS_ID;

  // 1. Google Analytics 4 (if VITE_GA_ID is set)
  if (gaId) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', gaId, {
      anonymize_ip: true,
      send_page_view: false // We will track manually on routing
    });
    console.log('[Analytics] GA4 Initialized with ID:', gaId);
  }

  // 2. Vercel Analytics (if VITE_VERCEL_ANALYTICS_ID is set or we are running on Vercel)
  if (vercelId || window.location.hostname.endsWith('.vercel.app')) {
    const script = document.createElement('script');
    script.defer = true;
    script.src = '/_vercel/insights/script.js';
    script.setAttribute('data-sdks', 'vercel-analytics');
    document.head.appendChild(script);
    console.log('[Analytics] Vercel Analytics script injected.');
  }

  initialized = true;
}

// Track page views
export function trackPageView(view, id = null) {
  if (!isAnalyticsAllowed()) return;
  initAnalytics(); // ensure initialized

  const path = id ? `/${view}/${id}` : `/${view}`;
  const title = id ? `Bureaucrapp - ${view} (${id})` : `Bureaucrapp - ${view}`;

  if (window.gtag) {
    const gaId = import.meta.env.VITE_GA_ID;
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
      send_to: gaId
    });
  }

  if (window.va) {
    window.va('event', 'page_view', { path });
  }

  if (import.meta.env.DEV) {
    console.log(`[Analytics] PageView: ${path} (${title})`);
  }
}

// Track custom events
export function trackEvent(name, params = {}) {
  if (!isAnalyticsAllowed()) return;
  initAnalytics(); // ensure initialized

  if (window.gtag) {
    window.gtag('event', name, params);
  }

  if (window.va) {
    window.va('event', name, params);
  }

  if (import.meta.env.DEV) {
    console.log(`[Analytics] Event: ${name}`, params);
  }
}
