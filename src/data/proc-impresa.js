export const impresaProcedures = [
  {
    id: 'apertura-piva',
    categoryId: 'impresa',
    title: 'Apertura Partita IVA (Impresa)',
    title_en: 'Opening a VAT Number (Business)',
    subtitle: 'Avviare un\'attività commerciale o artigianale',
    subtitle_en: 'Starting a commercial or craft business',
    difficulty: 'alta',
    estimatedTime: '1-5 giorni',
    estimatedTime_en: '1-5 days',
    cost: 'Da €50 a €200+ (diritti camerali, bolli)',
    cost_en: 'From €50 to €200+ (chamber fees, stamps)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Registro Imprese', label_en: 'Business Register', url: 'https://www.registroimprese.it/' },
      { label: 'ComUnica — Starweb', label_en: 'ComUnica — Starweb', url: 'https://www.registroimprese.it/' }
    ],
    documents: ['Documento d\'identità', 'Codice Fiscale', 'PEC', 'Firma digitale', 'Modulo ComUnica compilato'],
    documents_en: ['ID document', 'Tax Code', 'PEC', 'Digital signature', 'Completed ComUnica form'],
    steps: [
      { title: 'Definisci l\'attività', title_en: 'Define the business', description: 'Scegli il codice ATECO, la forma giuridica (ditta individuale, SRL, ecc.) e il regime fiscale più adatto.', description_en: 'Choose the ATECO code, legal form (sole proprietorship, LLC, etc.), and the most suitable tax regime.', tip: 'Per le ditte individuali il regime forfettario è spesso il più conveniente.', tip_en: 'For sole proprietorships, the flat-rate scheme is often the most convenient.' },
      { title: 'Procurati PEC e firma digitale', title_en: 'Get PEC and digital signature', description: 'Obbligatori per le imprese. La PEC costa circa €5-25/anno, la firma digitale circa €30-70.', description_en: 'Mandatory for businesses. PEC costs about €5-25/year, digital signature about €30-70.', tip: null },
      { title: 'Usa la ComUnica', title_en: 'Use ComUnica', description: 'La Comunicazione Unica (ComUnica) invia contemporaneamente le pratiche a: Agenzia Entrate, INPS, INAIL e Camera di Commercio.', description_en: 'The Single Communication (ComUnica) simultaneously sends the procedures to: Revenue Agency, INPS, INAIL, and Chamber of Commerce.', tip: 'Puoi usare il portale Starweb di InfoCamere o affidarti a un commercialista.', tip_en: 'You can use the InfoCamere Starweb portal or rely on an accountant.' },
      { title: 'SCIA se necessaria', title_en: 'SCIA if required', description: 'Per attività commerciali, artigianali o somministrazione, presenta la SCIA al SUAP del Comune.', description_en: 'For commercial, craft, or food/beverage activities, submit the SCIA to the municipality\'s SUAP.', tip: null },
      { title: 'Iscrizione Camera di Commercio', title_en: 'Chamber of Commerce registration', description: 'L\'iscrizione al Registro Imprese avviene tramite ComUnica. Riceverai la visura camerale.', description_en: 'Registration with the Business Register happens via ComUnica. You will receive the chamber of commerce extract.', tip: 'Il diritto annuale alla Camera di Commercio va pagato ogni anno entro il 30 giugno.', tip_en: 'The annual Chamber of Commerce fee must be paid each year by June 30.' }
    ],
    warnings: ['La PEC e la firma digitale sono obbligatorie per tutte le imprese.', 'I contributi INPS per artigiani/commercianti hanno un minimale fisso annuo (~€4.200).'],
    warnings_en: ['PEC and digital signature are mandatory for all businesses.', 'INPS contributions for artisans/traders have a fixed annual minimum (~€4,200).'],
    relatedProcedures: ['partita-iva', 'pec', 'scia-suap']
  },
  {
    id: 'scia-suap',
    categoryId: 'impresa',
    title: 'SCIA e SUAP',
    title_en: 'SCIA and SUAP',
    subtitle: 'Segnalazione Certificata di Inizio Attività',
    subtitle_en: 'Certified Notification of Business Start',
    difficulty: 'media',
    estimatedTime: '1-3 giorni',
    estimatedTime_en: '1-3 days',
    cost: 'Diritti di segreteria variabili per Comune (€0-€100)',
    cost_en: 'Variable secretarial fees by municipality (€0-€100)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'SUAP — Sportello Unico', label_en: 'SUAP — Single Desk', url: 'https://www.impresainungiorno.gov.it/' }
    ],
    documents: ['Modulo SCIA compilato', 'Planimetria dei locali', 'Certificato di agibilità', 'Requisiti igienico-sanitari (per attività alimentari)', 'Documento d\'identità e P.IVA'],
    documents_en: ['Completed SCIA form', 'Floor plan of premises', 'Occupancy certificate', 'Health and hygiene requirements (for food businesses)', 'ID document and VAT number'],
    steps: [
      { title: 'Identifica il SUAP competente', title_en: 'Identify the relevant SUAP', description: 'Il SUAP (Sportello Unico Attività Produttive) è presso il Comune dove ha sede l\'attività. Accedi tramite impresainungiorno.gov.it.', description_en: 'The SUAP (Single Desk for Productive Activities) is at the municipality where the business is based. Access via impresainungiorno.gov.it.', tip: null },
      { title: 'Compila la SCIA', title_en: 'Fill in the SCIA', description: 'Scarica e compila il modulo SCIA specifico per la tua attività. Ogni tipo di attività ha un modulo diverso.', description_en: 'Download and fill in the SCIA form specific to your activity. Each type of activity has a different form.', tip: 'Per attività alimentari serve anche la notifica sanitaria (ex autorizzazione sanitaria).', tip_en: 'For food businesses, a health notification (formerly health authorization) is also required.' },
      { title: 'Invia telematicamente', title_en: 'Submit electronically', description: 'La SCIA va inviata esclusivamente per via telematica tramite il portale SUAP del Comune.', description_en: 'The SCIA must be submitted exclusively electronically via the municipality\'s SUAP portal.', tip: null },
      { title: 'Inizio attività', title_en: 'Business start', description: 'Con la SCIA puoi iniziare l\'attività immediatamente dalla data di presentazione. Il Comune ha 60 giorni per verificare e contestare.', description_en: 'With the SCIA you can start the business immediately from the submission date. The municipality has 60 days to verify and contest.', tip: 'Conserva la ricevuta di invio: è la tua autorizzazione provvisoria.', tip_en: 'Keep the submission receipt: it is your provisional authorization.' }
    ],
    warnings: ['La SCIA permette l\'inizio immediato dell\'attività, ma il Comune può vietarla entro 60 giorni se mancano i requisiti.'],
    warnings_en: ['SCIA allows immediate start of business, but the municipality can prohibit it within 60 days if requirements are not met.'],
    relatedProcedures: ['apertura-piva', 'partita-iva']
  },
  {
    id: 'camera-commercio',
    categoryId: 'impresa',
    title: 'Camera di Commercio',
    title_en: 'Chamber of Commerce',
    subtitle: 'Iscrizione e visura camerale',
    subtitle_en: 'Registration and chamber extract',
    difficulty: 'media',
    estimatedTime: '1-3 giorni',
    estimatedTime_en: '1-3 days',
    cost: '€18-€120 (diritto annuale variabile)',
    cost_en: '€18-€120 (variable annual fee)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Registro Imprese', label_en: 'Business Register', url: 'https://www.registroimprese.it/' },
      { label: 'Diritto annuale', label_en: 'Annual fee', url: 'https://dirittoannuale.camcom.it/' }
    ],
    documents: ['Pratica ComUnica inviata', 'PEC attiva', 'Firma digitale'],
    documents_en: ['ComUnica application submitted', 'Active PEC', 'Digital signature'],
    steps: [
      { title: 'Iscrizione tramite ComUnica', title_en: 'Registration via ComUnica', description: 'L\'iscrizione avviene automaticamente con la pratica ComUnica al momento dell\'apertura dell\'attività.', description_en: 'Registration happens automatically with the ComUnica application when opening the business.', tip: null },
      { title: 'Verifica la visura', title_en: 'Check the extract', description: 'Dopo l\'iscrizione, puoi scaricare la visura camerale dal sito registroimprese.it. La visura attesta l\'esistenza e i dati dell\'impresa.', description_en: 'After registration, you can download the chamber extract from registroimprese.it. The extract certifies the existence and data of the business.', tip: 'La visura camerale è spesso richiesta da banche, fornitori e clienti.', tip_en: 'The chamber extract is often requested by banks, suppliers, and clients.' },
      { title: 'Paga il diritto annuale', title_en: 'Pay the annual fee', description: 'Ogni anno entro il 30 giugno devi pagare il diritto camerale tramite F24. L\'importo dipende dal fatturato.', description_en: 'Every year by June 30 you must pay the chamber fee via F24. The amount depends on turnover.', tip: null }
    ],
    warnings: ['Il mancato pagamento del diritto annuale comporta sanzioni e interessi.'],
    warnings_en: ['Failure to pay the annual fee results in penalties and interest.'],
    relatedProcedures: ['apertura-piva', 'scia-suap']
  },
  {
    id: 'contratti-lavoro',
    categoryId: 'impresa',
    title: 'Contratti di Lavoro',
    title_en: 'Employment Contracts',
    subtitle: 'Tipologie e obblighi',
    subtitle_en: 'Types and obligations',
    difficulty: 'media',
    estimatedTime: 'Variabile',
    estimatedTime_en: 'Variable',
    cost: 'Variabile',
    cost_en: 'Variable',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Ministero del Lavoro', label_en: 'Ministry of Labor', url: 'https://www.lavoro.gov.it/' },
      { label: 'INPS — Rapporti di lavoro', label_en: 'INPS — Employment relationships', url: 'https://www.inps.it/' }
    ],
    documents: ['Documento d\'identità del lavoratore', 'Codice Fiscale', 'Permesso di soggiorno (per extra-UE)', 'Dati aziendali'],
    documents_en: ['Employee\'s ID document', 'Tax Code', 'Residence permit (for non-EU)', 'Company details'],
    steps: [
      { title: 'Scegli il tipo di contratto', title_en: 'Choose the contract type', description: 'Principali tipologie: tempo indeterminato, determinato, apprendistato, somministrazione, collaborazione, stage/tirocinio.', description_en: 'Main types: permanent, fixed-term, apprenticeship, temporary agency work, collaboration, internship/traineeship.', tip: 'Il contratto a tempo indeterminato offre le maggiori tutele al lavoratore.', tip_en: 'Permanent contracts offer the most protection to the employee.' },
      { title: 'Comunicazione obbligatoria', title_en: 'Mandatory notification', description: 'Il datore deve inviare la comunicazione UniLav al Centro per l\'Impiego entro il giorno precedente l\'assunzione.', description_en: 'The employer must send the UniLav communication to the Employment Center by the day before the hire.', tip: null },
      { title: 'Consegna al lavoratore', title_en: 'Handover to employee', description: 'Il lavoratore deve ricevere copia del contratto e delle condizioni di lavoro entro 5 giorni dall\'assunzione.', description_en: 'The employee must receive a copy of the contract and working conditions within 5 days of hiring.', tip: 'Dal 2022 è obbligatorio consegnare un\'informativa dettagliata sulle condizioni (D.Lgs. 104/2022).', tip_en: 'Since 2022, a detailed information notice on conditions is mandatory (Leg. Decree 104/2022).' }
    ],
    warnings: ['Il lavoro senza contratto ("in nero") è illegale e comporta pesanti sanzioni per il datore.'],
    warnings_en: ['Working without a contract ("under the table") is illegal and carries heavy penalties for the employer.'],
    relatedProcedures: ['codice-fiscale', 'naspi']
  },
  {
    id: 'naspi',
    categoryId: 'impresa',
    title: 'NASpI',
    title_en: 'NASpI',
    subtitle: 'Indennità di disoccupazione',
    subtitle_en: 'Unemployment benefit',
    difficulty: 'media',
    estimatedTime: '30-60 minuti (domanda) + 30 giorni (erogazione)',
    estimatedTime_en: '30-60 minutes (application) + 30 days (payment)',
    cost: 'Gratuito',
    cost_en: 'Free',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'INPS — NASpI', label_en: 'INPS — NASpI', url: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.nuova-prestazione-di-assicurazione-sociale-per-l-impiego-naspi--702702702702702702.nuova-prestazione-di-assicurazione-sociale-per-limpiego-naspi.html' }
    ],
    documents: ['SPID/CIE per accesso al portale INPS', 'Documenti di identità', 'Ultima busta paga', 'Lettera di licenziamento o cessazione'],
    documents_en: ['SPID/CIE to access the INPS portal', 'ID documents', 'Last payslip', 'Termination or dismissal letter'],
    steps: [
      { title: 'Verifica i requisiti', title_en: 'Check requirements', description: 'Hai diritto alla NASpI se hai perso il lavoro involontariamente (licenziamento, scadenza contratto) e hai almeno 13 settimane di contributi negli ultimi 4 anni.', description_en: 'You are entitled to NASpI if you lost your job involuntarily (dismissal, contract expiry) and have at least 13 weeks of contributions in the last 4 years.', tip: 'Le dimissioni volontarie NON danno diritto alla NASpI, salvo dimissioni per giusta causa.', tip_en: 'Voluntary resignation does NOT entitle you to NASpI, except for resignation for just cause.' },
      { title: 'Presenta la domanda', title_en: 'Submit the application', description: 'Invia la domanda online sul portale INPS (con SPID/CIE), oppure tramite un patronato. Va presentata entro 68 giorni dalla cessazione del rapporto.', description_en: 'Submit the application online on the INPS portal (with SPID/CIE), or through a patronato. Must be submitted within 68 days of termination.', tip: 'Il patronato può aiutarti gratuitamente.', tip_en: 'The patronato can help you free of charge.' },
      { title: 'Dichiarazione di disponibilità', title_en: 'Declaration of availability', description: 'Devi rendere la DID (Dichiarazione di Immediata Disponibilità al lavoro) sul portale ANPAL o tramite il Centro per l\'Impiego.', description_en: 'You must make the DID (Declaration of Immediate Availability for Work) on the ANPAL portal or through the Employment Center.', tip: null },
      { title: 'Erogazione', title_en: 'Payment', description: 'La NASpI parte dall\'8° giorno dopo la cessazione (se la domanda è tempestiva). L\'importo è circa il 75% della retribuzione media, con un tetto massimo.', description_en: 'NASpI starts from the 8th day after termination (if the application is timely). The amount is about 75% of average salary, with a maximum cap.', tip: 'La durata è pari alla metà delle settimane di contribuzione negli ultimi 4 anni (max 24 mesi).', tip_en: 'The duration is equal to half the weeks of contributions in the last 4 years (max 24 months).' }
    ],
    warnings: ['La domanda va presentata entro 68 GIORNI dalla cessazione del rapporto di lavoro.', 'Dal 4° mese l\'importo si riduce del 3% ogni mese.'],
    warnings_en: ['The application must be submitted within 68 DAYS of termination of employment.', 'From the 4th month, the amount decreases by 3% each month.'],
    relatedProcedures: ['isee', 'dichiarazione-redditi']
  },
  {
    id: 'durc',
    categoryId: 'impresa',
    title: 'DURC',
    title_en: 'DURC (Single Document of Contribution Regularity)',
    subtitle: 'Documento Unico di Regolarità Contributiva',
    subtitle_en: 'Single Document of Contribution Regularity',
    difficulty: 'facile',
    estimatedTime: '10-20 minuti (online)',
    estimatedTime_en: '10-20 minutes (online)',
    cost: 'Gratuito',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'INPS — DURC Online', label_en: 'INPS — DURC Online', url: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.durc-on-line.html' },
      { label: 'INAIL — DURC', label_en: 'INAIL — DURC', url: 'https://www.inail.it/cs/internet/attivita/prestazioni-e-servizi/durc-on-line.html' },
      { label: 'Cassa Edile', label_en: 'Construction Fund', url: 'https://www.cnce.it/' }
    ],
    documents: ['SPID/CIE per accesso al portale INPS', 'Codice Fiscale / Partita IVA dell\'impresa'],
    documents_en: ['SPID/CIE to access the INPS portal', 'Tax Code / VAT number of the company'],
    steps: [
      { title: 'Accedi al portale', title_en: 'Access the portal', description: 'Vai sul sito dell\'INPS o dell\'INAIL e accedi con SPID, CIE o CNS alla sezione DURC Online.', description_en: 'Go to the INPS or INAIL website and log in with SPID, CIE, or CNS to the DURC Online section.', tip: 'Puoi richiedere il DURC anche tramite un consulente del lavoro o un patronato.', tip_en: 'You can also request DURC through a labor consultant or patronato.' },
      { title: 'Inserisci i dati', title_en: 'Enter your data', description: 'Inserisci il tuo Codice Fiscale o Partita IVA. Il sistema verifica automaticamente la regolarità dei pagamenti INPS, INAIL e Cassa Edile.', description_en: 'Enter your Tax Code or VAT number. The system automatically verifies the regularity of INPS, INAIL, and Cassa Edile payments.', tip: 'Il DURC on-line è il più veloce. In caso di irregolarità, viene attivato un invito a regolarizzare.', tip_en: 'DURC online is the fastest. In case of irregularities, an invitation to regularize is activated.' },
      { title: 'Scarica il certificato', title_en: 'Download the certificate', description: 'Se la posizione è regolare, puoi scaricare immediatamente il DURC in formato PDF. Ha validità 120 giorni dalla data di emissione.', description_en: 'If the position is regular, you can immediately download the DURC in PDF format. It is valid for 120 days from the date of issue.', tip: 'Conserva copia digitale e cartacea. Ti servirà per appalti, lavori pubblici e agevolazioni.', tip_en: 'Keep both digital and paper copies. You will need it for tenders, public works, and benefits.' }
    ],
    warnings: ['Il DURC è obbligatorio per appalti pubblici, contributi e agevolazioni, e per la partecipazione a gare e bandi.', 'In caso di irregolarità, hai 15 giorni per regolarizzare la tua posizione.'],
    warnings_en: ['DURC is mandatory for public tenders, contributions and benefits, and participation in calls for proposals.', 'In case of irregularities, you have 15 days to regularize your position.'],
    relatedProcedures: ['apertura-piva', 'partita-iva', 'scia-suap']
  }
];
