export const sanitaProcedures = [
  {
    id: 'tessera-sanitaria',
    categoryId: 'sanita',
    title: 'Tessera Sanitaria',
    title_en: 'Health Card',
    subtitle: 'Richiesta, rinnovo e TEAM',
    subtitle_en: 'Request, renewal and TEAM',
    difficulty: 'facile',
    estimatedTime: '15-30 minuti + 10-15 giorni per la spedizione',
    estimatedTime_en: '15-30 minutes + 10-15 days for delivery',
    cost: 'Gratuito',
    cost_en: 'Free',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Sistema Tessera Sanitaria', label_en: 'Health Card System', url: 'https://sistemats1.sanita.finanze.it/portale/tessera-sanitaria' },
      { label: 'Agenzia Entrate — TS', label_en: 'Revenue Agency — Health Card', url: 'https://www.agenziaentrate.gov.it/portale/codice-fiscale-e-tessera-sanitaria' }
    ],
    documents: ['Codice Fiscale', 'Documento d\'identità valido'],
    documents_en: ['Tax Code', 'Valid ID document'],
    steps: [
      { title: 'Verifica la scadenza', title_en: 'Check expiry date', description: 'La tessera sanitaria viene inviata automaticamente dall\'Agenzia Entrate prima della scadenza. Se non la ricevi, puoi richiederla.', description_en: 'The health card is sent automatically by the Revenue Agency before expiry. If you don\'t receive it, you can request it.', tip: 'La tessera ha anche la funzione di codice fiscale e, se dotata di chip, di CNS.', tip_en: 'The card also serves as a tax code and, if chip-enabled, as a CNS.' },
      { title: 'Richiedi online o in ufficio', title_en: 'Request online or in person', description: 'Puoi richiedere il rinnovo/duplicato online sul sito dell\'Agenzia Entrate (area riservata) o recandoti in un ufficio dell\'Agenzia.', description_en: 'You can request renewal/duplicate online on the Revenue Agency website (restricted area) or by visiting a Revenue Agency office.', tip: null },
      { title: 'TEAM', title_en: 'TEAM', description: 'Il retro della tessera sanitaria è la TEAM (Tessera Europea Assicurazione Malattia), valida per assistenza sanitaria in tutti i paesi UE/SEE e Svizzera.', description_en: 'The back of the health card is the TEAM (European Health Insurance Card), valid for healthcare in all EU/EEA countries and Switzerland.', tip: 'Porta sempre la TEAM quando viaggi in Europa: ti dà diritto alle cure del sistema sanitario locale.', tip_en: 'Always carry TEAM when traveling in Europe: it entitles you to local healthcare system treatment.' }
    ],
    warnings: ['La tessera sanitaria è indispensabile per accedere alle prestazioni del SSN.'],
    warnings_en: ['The health card is essential for accessing SSN healthcare services.'],
    relatedProcedures: ['codice-fiscale', 'iscrizione-ssn', 'cns']
  },
  {
    id: 'iscrizione-ssn',
    categoryId: 'sanita',
    title: 'Iscrizione al SSN',
    title_en: 'SSN Enrollment',
    subtitle: 'Servizio Sanitario Nazionale',
    subtitle_en: 'National Health Service',
    difficulty: 'facile',
    estimatedTime: '30-60 minuti',
    estimatedTime_en: '30-60 minutes',
    cost: 'Gratuito',
    cost_en: 'Free',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Ministero della Salute — SSN', label_en: 'Ministry of Health — SSN', url: 'https://www.salute.gov.it/portale/lea/dettaglioContenutiLea.jsp?lingua=italiano&id=4693' }
    ],
    documents: ['Documento d\'identità', 'Codice Fiscale / Tessera Sanitaria', 'Certificato di residenza o autocertificazione', 'Permesso di soggiorno (per extra-UE)', 'Attestato di diritto dal paese d\'origine (per cittadini UE: modello S1)'],
    documents_en: ['ID document', 'Tax Code / Health Card', 'Residence certificate or self-certification', 'Residence permit (for non-EU)', 'Proof of entitlement from country of origin (for EU citizens: form S1)'],
    steps: [
      { title: 'Verifica il diritto all\'iscrizione', title_en: 'Check enrollment eligibility', description: 'Hanno diritto all\'iscrizione obbligatoria: cittadini italiani residenti, cittadini UE con lavoro o residenza, cittadini extra-UE con permesso di soggiorno.', description_en: 'The following are entitled to mandatory enrollment: resident Italian citizens, EU citizens with work or residence, non-EU citizens with a residence permit.', tip: null },
      { title: 'Recati alla ASL', title_en: 'Go to the ASL', description: 'Vai allo sportello anagrafe sanitaria della ASL competente per il tuo territorio di residenza.', description_en: 'Go to the health registry office of the ASL responsible for your area of residence.', tip: 'Alcune ASL permettono la prenotazione online.', tip_en: 'Some ASLs allow online booking.' },
      { title: 'Presenta i documenti', title_en: 'Submit documents', description: 'Consegna i documenti richiesti. L\'iscrizione è immediata: ti verrà assegnato un codice sanitario.', description_en: 'Submit the required documents. Enrollment is immediate: you will be assigned a health code.', tip: null },
      { title: 'Scegli il medico di base', title_en: 'Choose your GP', description: 'Al momento dell\'iscrizione potrai scegliere il tuo medico di medicina generale (medico di base) dall\'elenco disponibile.', description_en: 'At the time of enrollment you can choose your general practitioner (GP) from the available list.', tip: 'Scegli un medico vicino a casa tua: le visite domiciliari sono un tuo diritto.', tip_en: 'Choose a doctor near your home: home visits are your right.' }
    ],
    warnings: ['Senza iscrizione al SSN pagherai tutte le prestazioni sanitarie come privato.'],
    warnings_en: ['Without SSN enrollment you will pay for all healthcare services as a private patient.'],
    relatedProcedures: ['tessera-sanitaria', 'medico-base', 'residenza-iscrizione']
  },
  {
    id: 'medico-base',
    categoryId: 'sanita',
    title: 'Medico di Base',
    title_en: 'General Practitioner',
    subtitle: 'Scelta e cambio del medico di famiglia',
    subtitle_en: 'Choosing and changing your family doctor',
    difficulty: 'facile',
    estimatedTime: '15-30 minuti',
    estimatedTime_en: '15-30 minutes',
    cost: 'Gratuito',
    cost_en: 'Free',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Fascicolo Sanitario Elettronico', label_en: 'Electronic Health Record', url: 'https://www.fascicolosanitario.gov.it/' }
    ],
    documents: ['Tessera Sanitaria', 'Documento d\'identità'],
    documents_en: ['Health Card', 'ID document'],
    steps: [
      { title: 'Consulta l\'elenco medici', title_en: 'Check the doctor list', description: 'L\'elenco dei medici disponibili è consultabile sul sito della tua ASL o direttamente allo sportello.', description_en: 'The list of available doctors can be viewed on your ASL website or directly at the counter.', tip: 'Puoi scegliere un medico solo nel tuo distretto sanitario di residenza.', tip_en: 'You can only choose a doctor in your residence health district.' },
      { title: 'Scegli o cambia medico', title_en: 'Choose or change doctor', description: 'Per la prima scelta o per cambiare medico, recati allo sportello anagrafe della ASL. Alcune regioni permettono il cambio online.', description_en: 'For the first choice or to change doctors, go to the ASL registry office. Some regions allow online changes.', tip: 'In alcune regioni (es. Lombardia, Emilia-Romagna) il cambio è possibile tramite il Fascicolo Sanitario Elettronico.', tip_en: 'In some regions (e.g. Lombardy, Emilia-Romagna) the change is possible via the Electronic Health Record.' },
      { title: 'Conferma', title_en: 'Confirm', description: 'La scelta è immediata. Da quel momento il medico scelto è il tuo riferimento per visite, ricette e impegnative.', description_en: 'The choice is immediate. From that moment, the chosen doctor is your reference for visits, prescriptions, and referrals.', tip: null }
    ],
    warnings: ['Ogni medico ha un tetto massimo di pazienti (circa 1.500). Se il medico che vuoi è "completo", dovrai sceglierne un altro.'],
    warnings_en: ['Each doctor has a maximum number of patients (about 1,500). If your chosen doctor is full, you will need to choose another.'],
    relatedProcedures: ['iscrizione-ssn', 'tessera-sanitaria', 'esenzioni-ticket']
  },
  {
    id: 'esenzioni-ticket',
    categoryId: 'sanita',
    title: 'Esenzioni Ticket Sanitario',
    title_en: 'Healthcare Ticket Exemptions',
    subtitle: 'Esonero dal pagamento delle prestazioni SSN',
    subtitle_en: 'Exemption from SSN service fees',
    difficulty: 'facile',
    estimatedTime: '30 minuti',
    estimatedTime_en: '30 minutes',
    cost: 'Gratuito',
    cost_en: 'Free',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Ministero della Salute — Esenzioni', label_en: 'Ministry of Health — Exemptions', url: 'https://www.salute.gov.it/portale/esenzioni/dettaglioContenutiEsenzioni.jsp?lingua=italiano&id=1019' }
    ],
    documents: ['Tessera Sanitaria', 'Certificazione della patologia (per esenzione per malattia)', 'ISEE (per esenzione per reddito)', 'Certificato di invalidità (se applicabile)'],
    documents_en: ['Health Card', 'Medical condition certification (for medical exemption)', 'ISEE (for income-based exemption)', 'Disability certificate (if applicable)'],
    steps: [
      { title: 'Verifica il diritto', title_en: 'Check eligibility', description: 'Le esenzioni sono per: reddito basso, età (<6 o >65 con ISEE basso), disoccupazione, patologie croniche, invalidità, gravidanza, diagnosi precoce tumori.', description_en: 'Exemptions are for: low income, age (<6 or >65 with low ISEE), unemployment, chronic conditions, disability, pregnancy, early cancer diagnosis.', tip: null },
      { title: 'Richiedi l\'esenzione', title_en: 'Apply for exemption', description: 'Per esenzione per reddito: autocertificazione alla ASL o online. Per patologia: il medico specialista certifica e la ASL rilascia il codice di esenzione.', description_en: 'For income exemption: self-certification at the ASL or online. For medical conditions: the specialist certifies and the ASL issues the exemption code.', tip: 'Il codice di esenzione va comunicato al medico di base per le ricette.', tip_en: 'The exemption code must be communicated to your GP for prescriptions.' },
      { title: 'Utilizza l\'esenzione', title_en: 'Use the exemption', description: 'Con il codice di esenzione, le prestazioni sanitarie correlate saranno gratuite o a costo ridotto.', description_en: 'With the exemption code, related healthcare services will be free or at a reduced cost.', tip: 'L\'esenzione per reddito va rinnovata ogni anno.', tip_en: 'Income-based exemption must be renewed every year.' }
    ],
    warnings: ['L\'esenzione per reddito scade il 31 marzo di ogni anno e va rinnovata.'],
    warnings_en: ['Income-based exemption expires on March 31 each year and must be renewed.'],
    relatedProcedures: ['iscrizione-ssn', 'isee', 'medico-base']
  }
];
