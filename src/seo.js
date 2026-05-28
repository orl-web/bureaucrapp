const SITE_URL = 'https://bureaucrapp.vercel.app/';
const SITE_NAME = 'Bureaucrapp';

const localeMap = { it: 'it-IT', en: 'en-GB', ro: 'ro-RO', sq: 'sq-AL', zh: 'zh-CN', ar: 'ar-SA' };

const defaultTitles = {
  it: 'Bureaucrapp — Guida alla Burocrazia Italiana',
  en: 'Bureaucrapp — Guide to Italian Bureaucracy',
  ro: 'Bureaucrapp — Ghidul Birocrației Italiene',
  sq: 'Bureaucrapp — Udhëzuesi i Burokracisë Italiane',
  zh: 'Bureaucrapp — 意大利官僚指南',
  ar: 'Bureaucrapp — دليل البيروقراطية الإيطالية'
};

const defaultDescriptions = {
  it: 'Bureaucrapp — La guida completa alla burocrazia italiana. Procedure passo-passo, documenti necessari, link ufficiali e aggiornamenti normativi per SPID, residenza, tasse, sanità, impresa e veicoli.',
  en: 'The complete guide to Italian bureaucracy. Step-by-step procedures, required documents, official links for SPID, residency, taxes, healthcare, business and vehicles.',
  ro: 'Ghidul complet al birocrației italiene. Proceduri pas cu pas, documente necesare, linkuri oficiale pentru SPID, reședință, taxe, sănătate, afaceri și vehicule.',
  sq: 'Udhëzuesi i plotë i burokracisë italiane. Procedura hap pas hapi, dokumentet e nevojshme, lidhje zyrtare për SPID, rezidencë, taksa, shëndetësi, biznes dhe automjete.',
  zh: '意大利官僚程序完整指南。分步操作流程、所需文件、官方链接，涵盖SPID、居住、税务、医疗、企业和车辆。',
  ar: 'الدليل الكامل للبيروقراطية الإيطالية. إجراءات خطوة بخطوة، المستندات المطلوبة، روابط رسمية لـ SPID، الإقامة، الضرائب، الصحة، الأعمال والمركبات.'
};

const ogLocaleMap = { it: 'it_IT', en: 'en_GB', ro: 'ro_RO', sq: 'sq_AL', zh: 'zh_CN', ar: 'ar_SA' };

function getLang() {
  return localStorage.getItem('bureaucrapp_lang') || 'it';
}

function langVal(obj, prop) {
  const lang = getLang();
  return obj[`${prop}_${lang}`] || obj[`${prop}_en`] || obj[prop] || '';
}

export function updateSEO(view, id, procedure, category) {
  updateMeta(view, id, procedure, category);
  updateJsonLd(view, id, procedure, category);
  updateCanonical(view, id);
}

function updateMeta(view, id, procedure, category) {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  let title, description;

  if (view === 'procedure' && procedure) {
    const t = langVal(procedure, 'title');
    const s = langVal(procedure, 'subtitle');
    title = `${t} — Guida Passo-Passo | Bureaucrapp`;
    description = s
      ? `${t}: ${s}. Documenti necessari, costi, tempi e link ufficiali.`
      : `Guida passo-passo per ${t.toLowerCase()}. Tutto quello che devi sapere su documenti, costi e procedura.`;
  } else if (view === 'category' && category) {
    const t = langVal(category, 'title');
    const d = langVal(category, 'description');
    title = `${t} — Procedure e Documenti | Bureaucrapp`;
    description = d;
  } else {
    title = defaultTitles[lang] || defaultTitles.en;
    description = defaultDescriptions[lang] || defaultDescriptions.en;
  }

  document.title = title;

  setMeta('description', description);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', ogLocaleMap[lang] || 'it_IT');
}

function setMeta(attr, valueOrAttr2, value) {
  if (value === undefined) {
    value = valueOrAttr2;
    const el = document.querySelector(`meta[name="${attr}"]`);
    if (el) el.content = value;
  } else {
    const el = document.querySelector(`meta[${attr}="${valueOrAttr2}"]`);
    if (el) el.content = value;
  }
}

function updateJsonLd(view, id, procedure, category) {
  const lang = getLang();
  const graph = [];

  graph.push({
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: defaultDescriptions[lang] || defaultDescriptions.en,
    inLanguage: ['it', 'en', 'ro', 'sq', 'zh', 'ar'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: SITE_URL + '?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  });

  graph.push({
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL
  });

  if (view === 'procedure' && procedure && category) {
    const catTitle = langVal(category, 'title');
    const procTitle = langVal(procedure, 'title');

    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: catTitle, item: `${SITE_URL}category/${category.id}` },
        { '@type': 'ListItem', position: 3, name: procTitle }
      ]
    });

    if (procedure.steps && procedure.steps.length > 0) {
      const howTo = {
        '@type': 'HowTo',
        name: procTitle,
        description: langVal(procedure, 'subtitle'),
        totalTime: toIsoDuration(procedure.estimatedTime),
        estimatedCost: parseCost(procedure.cost),
        step: procedure.steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s[`title_${lang}`] || s.title_en || s.title,
          text: s[`description_${lang}`] || s.description_en || s.description
        }))
      };
      if (howTo.totalTime === undefined) delete howTo.totalTime;
      if (howTo.estimatedCost === undefined) delete howTo.estimatedCost;
      graph.push(howTo);
    }
  } else if (view === 'category' && category) {
    const catTitle = langVal(category, 'title');
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: catTitle }
      ]
    });
  }

  const container = document.getElementById('ld-json');
  if (container) {
    container.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
  }
}

function updateCanonical(view, id) {
  let url = SITE_URL;
  if (view === 'procedure' && id) url = `${SITE_URL}procedure/${id}`;
  else if (view === 'category' && id) url = `${SITE_URL}category/${id}`;
  else if (view === 'privacy') url = `${SITE_URL}privacy`;
  else if (view === 'dashboard') url = `${SITE_URL}dashboard`;
  else if (view === 'wizard') url = `${SITE_URL}wizard`;

  const canonicalLink = document.getElementById('canonical');
  if (canonicalLink) canonicalLink.setAttribute('href', url);

  document.querySelectorAll('[id^="href-"]').forEach(el => {
    el.setAttribute('href', url);
  });

  const ogUrl = document.getElementById('og-url');
  if (ogUrl) ogUrl.setAttribute('content', url);
}

function toIsoDuration(str) {
  if (!str) return undefined;
  const m = str.match(/(\d+)/);
  if (!m) return undefined;
  const n = parseInt(m[1], 10);
  if (/min/.test(str)) return `PT${n}M`;
  if (/or[ae]/.test(str) || /hour/.test(str)) return `PT${n}H`;
  if (/giorn|day/.test(str)) return `P${n}D`;
  if (/settiman|week/.test(str)) return `P${n}W`;
  if (/mes[ei]|month/.test(str)) return `P${n}M`;
  if (/ann|year/.test(str)) return `P${n}Y`;
  return undefined;
}

function parseCost(str) {
  if (!str) return undefined;
  if (/gratuito|gratis|free|gratuite|gratuit/i.test(str)) {
    return { '@type': 'MonetaryAmount', value: 0, currency: 'EUR' };
  }
  const match = str.match(/€\s*([\d.,]+)/);
  if (match) {
    return { '@type': 'MonetaryAmount', value: parseFloat(match[1].replace(/\./g, '').replace(',', '.')), currency: 'EUR' };
  }
  return undefined;
}
