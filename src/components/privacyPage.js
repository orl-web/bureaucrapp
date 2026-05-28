import { t, getLanguage } from '../i18n.js';
import { renderFooter } from './footer.js';

export function renderPrivacyPage(onBack) {
  const section = document.createElement('section');
  section.className = 'procedure-detail';

  const lang = getLanguage();

  const privacyContent = {
    dataController: {
      it: 'Titolare del trattamento: Bureaucrapp',
      en: 'Data Controller: Bureaucrapp',
    },
    intro: {
      it: 'Questa informativa descrive come Bureaucrapp raccoglie, utilizza e protegge i dati degli utenti.',
      en: 'This privacy notice describes how Bureaucrapp collects, uses and protects user data.',
    },
    dataCollected: {
      it: 'Dati raccolti',
      en: 'Data collected',
    },
    dataCollectedDesc: {
      it: 'Bureaucrapp non raccoglie dati personali degli utenti. Le domande inviate nella sezione Q&A di ciascuna procedura vengono salvate esclusivamente nel browser (localStorage) e non vengono trasmesse a server esterni. Non vengono utilizzati cookie di tracciamento, analytics o strumenti di profilazione.',
      en: 'Bureaucrapp does not collect personal data. Questions submitted in the Q&A section of each procedure are stored exclusively in your browser (localStorage) and are not transmitted to external servers. No tracking cookies, analytics or profiling tools are used.',
    },
    thirdParties: {
      it: 'Servizi di terze parti',
      en: 'Third-party services',
    },
    thirdPartiesDesc: {
      it: 'L\'applicazione si collega esclusivamente a siti istituzionali italiani (es. ANPR, INPS, Agenzia delle Entrate) tramite link esterni. Questi siti hanno le proprie privacy policy. Bureaucrapp non condivide alcun dato con questi servizi.',
      en: 'The application links exclusively to Italian government websites (e.g. ANPR, INPS, Agenzia delle Entrate) via external links. These sites have their own privacy policies. Bureaucrapp does not share any data with these services.',
    },
    rights: {
      it: 'Diritti dell\'interessato',
      en: 'Your rights',
    },
    rightsDesc: {
      it: 'Poiché non raccogliamo dati personali, non è necessario esercitare diritti di accesso, rettifica o cancellazione. Per qualsiasi domanda, contattaci all\'indirizzo email indicato nel piè di pagina.',
      en: 'Since we do not collect personal data, there is no need to exercise rights of access, rectification or erasure. For any questions, contact us at the email address shown in the footer.',
    },
    updateDate: {
      it: 'Ultimo aggiornamento: maggio 2026',
      en: 'Last updated: May 2026',
    },
  };

  section.innerHTML = `
    <div class="container" style="max-width:720px;padding:4rem 1rem">
      <button class="action-btn action-btn--text" data-privacy-back style="margin-bottom:1.5rem">← ${t('common.back')}</button>
      <h1 style="font-size:var(--fs-2xl);margin-bottom:1.5rem">${t('nav.privacy') || 'Privacy Policy'}</h1>
      <p style="color:var(--text-secondary);margin-bottom:0.5rem"><em>${privacyContent.updateDate[lang] || privacyContent.updateDate.en}</em></p>
      <p style="color:var(--text-secondary);margin-bottom:2rem">${privacyContent.dataController[lang] || privacyContent.dataController.en}</p>

      <h2 style="font-size:var(--fs-xl);margin-bottom:0.75rem">${privacyContent.intro[lang] || privacyContent.intro.en}</h2>
      <p style="margin-bottom:1.5rem;line-height:1.7">${privacyContent.dataCollectedDesc[lang] || privacyContent.dataCollectedDesc.en}</p>

      <h2 style="font-size:var(--fs-xl);margin-bottom:0.75rem">${privacyContent.thirdParties[lang] || privacyContent.thirdParties.en}</h2>
      <p style="margin-bottom:1.5rem;line-height:1.7">${privacyContent.thirdPartiesDesc[lang] || privacyContent.thirdPartiesDesc.en}</p>

      <h2 style="font-size:var(--fs-xl);margin-bottom:0.75rem">${privacyContent.rights[lang] || privacyContent.rights.en}</h2>
      <p style="margin-bottom:1.5rem;line-height:1.7">${privacyContent.rightsDesc[lang] || privacyContent.rightsDesc.en}</p>
    </div>
  `;

  section.querySelector('[data-privacy-back]').addEventListener('click', (e) => {
    e.preventDefault();
    onBack();
  });

  return section;
}
