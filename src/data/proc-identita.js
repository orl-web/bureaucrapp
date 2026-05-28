export const identitaProcedures = [
  {
    id: 'codice-fiscale',
    categoryId: 'identita',
    title: 'Codice Fiscale',
    title_en: 'Tax Code (Codice Fiscale)',
    subtitle: 'Richiesta, recupero e correzione',
    subtitle_en: 'Request, recovery and correction',
    difficulty: 'facile',
    estimatedTime: '15-30 minuti',
    cost: 'Gratuito',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Agenzia delle Entrate', label_en: 'Revenue Agency', url: 'https://www.agenziaentrate.gov.it/portale/codice-fiscale-e-tessera-sanitaria' },
      { label: 'Modulo AA4/8', label_en: 'Form AA4/8', url: 'https://www.agenziaentrate.gov.it/portale/codice-fiscale-e-tessera-sanitaria/modello-e-istruzioni' }
    ],
    documents: [
      'Documento d\'identità valido (passaporto o carta d\'identità)',
      'Modulo AA4/8 compilato (disponibile online o in ufficio)'
    ],
    documents_en: [
      'Valid ID document (passport or ID card)',
      'Completed form AA4/8 (available online or at the office)'
    ],
    steps: [
      { title: 'Prepara i documenti', title_en: 'Prepare your documents', description: 'Procurati un documento d\'identità valido e scarica il modulo AA4/8 dal sito dell\'Agenzia delle Entrate.', description_en: 'Get a valid ID document and download form AA4/8 from the Revenue Agency website.', tip: 'Il modulo è disponibile anche direttamente in ufficio.', tip_en: 'The form is also available directly at the office.' },
      { title: 'Recati all\'Agenzia delle Entrate', title_en: 'Go to the Revenue Agency', description: 'Vai all\'ufficio dell\'Agenzia delle Entrate più vicino alla tua residenza. Non serve appuntamento per questa operazione.', description_en: 'Go to the nearest Revenue Agency office to your residence. No appointment is needed for this operation.', tip: 'Verifica gli orari di apertura sul sito dell\'Agenzia delle Entrate della tua provincia.', tip_en: 'Check opening hours on the Revenue Agency website for your province.' },
      { title: 'Presenta la richiesta', title_en: 'Submit the request', description: 'Consegna il modulo AA4/8 compilato e il documento d\'identità allo sportello.', description_en: 'Hand in the completed form AA4/8 and your ID document at the counter.', tip: null },
      { title: 'Ricevi il codice fiscale', title_en: 'Receive the tax code', description: 'Il codice fiscale viene rilasciato immediatamente su un tesserino provvisorio. La tessera sanitaria plastificata arriverà per posta entro qualche settimana.', description_en: 'The tax code is issued immediately on a temporary card. The plastic health card will arrive by mail within a few weeks.', tip: 'Per chi è all\'estero: è possibile richiederlo tramite il Consolato italiano.', tip_en: 'For those abroad: it can be requested through the Italian Consulate.' }
    ],
    warnings: ['Il codice fiscale è indispensabile per quasi ogni operazione in Italia: contratti, banca, lavoro, sanità.'],
    warnings_en: ['The tax code is essential for almost every operation in Italy: contracts, banking, work, healthcare.'],
    relatedProcedures: ['spid', 'tessera-sanitaria']
  },
  {
    id: 'spid',
    categoryId: 'identita',
    title: 'SPID',
    title_en: 'SPID (Digital Identity)',
    subtitle: 'Sistema Pubblico di Identità Digitale',
    subtitle_en: 'Public Digital Identity System',
    difficulty: 'media',
    estimatedTime: '30-60 minuti',
    estimatedTime_en: '30-60 minutes',
    cost: 'Gratuito (alcuni provider richiedono pagamento per riconoscimento)',
    cost_en: 'Free (some providers charge for identity verification)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Sito ufficiale SPID', url: 'https://www.spid.gov.it/' },
      { label: 'Elenco Identity Provider', url: 'https://www.spid.gov.it/cos-e-spid/come-attivare-spid/' }
    ],
    documents: [
      'Documento d\'identità italiano valido (CIE o passaporto)',
      'Codice Fiscale o Tessera Sanitaria',
      'Indirizzo email personale',
      'Numero di cellulare italiano'
    ],
    documents_en: [
      'Valid Italian ID document (CIE or passport)',
      'Tax Code (Codice Fiscale) or Health Card',
      'Personal email address',
      'Italian mobile phone number'
    ],
    steps: [
      { title: 'Scegli un Identity Provider', title_en: 'Choose an Identity Provider', description: 'Vai su spid.gov.it e scegli tra i provider autorizzati: Poste Italiane, Aruba, InfoCert, Namirial, TIM, ecc.', description_en: 'Go to spid.gov.it and choose from authorized providers: Poste Italiane, Aruba, InfoCert, Namirial, TIM, etc.', tip: 'Poste Italiane è il più utilizzato e offre riconoscimento gratuito in ufficio postale.', tip_en: 'Poste Italiane is the most used and offers free verification at post offices.' },
      { title: 'Registrati sul sito del provider', title_en: 'Register on the provider\'s site', description: 'Inserisci i tuoi dati personali, email e numero di cellulare sul sito del provider scelto.', description_en: 'Enter your personal details, email, and mobile number on the chosen provider\'s website.', tip: null },
      { title: 'Verifica la tua identità', title_en: 'Verify your identity', description: 'Completa il riconoscimento tramite una delle modalità disponibili: di persona (ufficio postale, tabaccherie abilitate), via webcam, CIE, CNS o firma digitale.', description_en: 'Complete verification through one of the available methods: in person (post office, authorized tobacconists), via webcam, CIE, CNS, or digital signature.', tip: 'Il riconoscimento via CIE è il più veloce: bastano la CIE e l\'app del provider.', tip_en: 'Verification via CIE is the fastest: you just need your CIE and the provider\'s app.' },
      { title: 'Attiva le credenziali', title_en: 'Activate credentials', description: 'Riceverai username e password. Configura l\'autenticazione a due fattori (OTP via SMS o app).', description_en: 'You will receive a username and password. Set up two-factor authentication (OTP via SMS or app).', tip: 'Conserva le credenziali in un posto sicuro. SPID ha 3 livelli di sicurezza.', tip_en: 'Keep your credentials in a safe place. SPID has 3 security levels.' },
      { title: 'Accedi ai servizi', title_en: 'Access services', description: 'Usa SPID per accedere a tutti i portali della PA: INPS, Agenzia Entrate, ANPR, Fascicolo Sanitario e migliaia di altri.', description_en: 'Use SPID to access all PA portals: INPS, Revenue Agency, ANPR, Electronic Health Record, and thousands of others.', tip: null }
    ],
    warnings: [
      'Serve un documento italiano valido: i cittadini stranieri devono prima ottenere la CIE dal Comune.',
      'SPID Livello 2 è richiesto dalla maggior parte dei servizi pubblici.'
    ],
    warnings_en: [
      'A valid Italian document is required: foreign citizens must first obtain a CIE from the Municipality.',
      'SPID Level 2 is required by most public services.'
    ],
    relatedProcedures: ['cie', 'codice-fiscale']
  },
  {
    id: 'cie',
    categoryId: 'identita',
    title: 'CIE — Carta d\'Identità Elettronica',
    title_en: 'CIE — Electronic Identity Card',
    subtitle: 'Richiesta, rinnovo e scadenze',
    subtitle_en: 'Request, renewal and deadlines',
    difficulty: 'facile',
    estimatedTime: '15 min in Comune + 6 giorni lavorativi per consegna',
    cost: '€22,21 (diritti fissi + segreteria)',
    costBreakdown: [
      { label: 'Diritti fissi', label_en: 'Fixed fees', amount: 18.79 },
      { label: 'Diritti di segreteria', label_en: 'Administrative fees', amount: 3.42 },
      { label: 'Spedizione a domicilio (opzionale)', label_en: 'Home delivery (optional)', amount: 7.50, optional: true }
    ],
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Ministero dell\'Interno — CIE', label_en: 'Ministry of Interior — CIE', url: 'https://www.cartaidentita.interno.gov.it/' },
      { label: 'Prenotazione appuntamento', label_en: 'Book an appointment', url: 'https://www.prenotazionicie.interno.gov.it/' }
    ],
    documents: [
      'Fototessera recente (formato digitale o cartaceo)',
      'Codice Fiscale o Tessera Sanitaria',
      'Vecchia carta d\'identità (se rinnovo)',
      'Denuncia di smarrimento/furto (se sostituzione)'
    ],
    documents_en: [
      'Recent passport photo (digital or paper format)',
      'Tax Code or Health Card',
      'Old ID card (if renewal)',
      'Police report of loss/theft (if replacement)'
    ],
    steps: [
      { title: 'Prenota l\'appuntamento', title_en: 'Book an appointment', description: 'Vai su prenotazionicie.interno.gov.it e prenota un appuntamento presso il tuo Comune. In alternativa, chiama l\'Ufficio Anagrafe.', description_en: 'Go to prenotazionicie.interno.gov.it and book an appointment at your municipality. Alternatively, call the Registry Office.', tip: 'In molti comuni i tempi di attesa sono lunghi: prenota con anticipo, soprattutto prima dell\'estate!', tip_en: 'In many municipalities waiting times are long: book in advance, especially before summer!' },
      { title: 'Recati al Comune', title_en: 'Go to the municipality', description: 'Presentati all\'appuntamento con la documentazione richiesta e la fototessera.', description_en: 'Show up for the appointment with the required documents and passport photo.', tip: 'Porta anche il consenso di entrambi i genitori per i minorenni.', tip_en: 'Also bring consent from both parents for minors.' },
      { title: 'Rilascio impronte e dati', title_en: 'Fingerprints and data collection', description: 'L\'operatore acquisirà le tue impronte digitali e i dati biometrici. Riceverai una ricevuta con il numero della pratica.', description_en: 'The operator will collect your fingerprints and biometric data. You will receive a receipt with the application number.', tip: null },
      { title: 'Ricevi la CIE', title_en: 'Receive the CIE', description: 'La CIE viene spedita all\'indirizzo di residenza entro 6 giorni lavorativi tramite lettera raccomandata. Riceverai anche i codici PIN e PUK.', description_en: 'The CIE is shipped to your residence address within 6 working days via registered mail. You will also receive PIN and PUK codes.', tip: 'Conserva PIN e PUK: servono per l\'uso digitale della CIE (accesso ai servizi online).', tip_en: 'Keep PIN and PUK safe: they are needed for digital use of CIE (access to online services).' }
    ],
    warnings: [
      '⚠️ DAL 3 AGOSTO 2026: le carte d\'identità cartacee cesseranno di essere valide. Passa alla CIE prima di quella data!',
      'Dal 30 luglio 2026, le CIE per over 70 avranno validità illimitata.'
    ],
    warnings_en: [
      '⚠️ FROM AUGUST 3, 2026: paper ID cards will no longer be valid. Switch to CIE before that date!',
      'From July 30, 2026, CIE for over-70s will have unlimited validity.'
    ],
    relatedProcedures: ['spid', 'residenza-iscrizione']
  },
  {
    id: 'cns',
    categoryId: 'identita',
    title: 'CNS — Carta Nazionale dei Servizi',
    title_en: 'CNS — National Services Card',
    subtitle: 'Smart card per accesso ai servizi PA',
    subtitle_en: 'Smart card for access to public administration services',
    difficulty: 'facile',
    estimatedTime: '30 minuti',
    cost: 'Variabile (dipende dalla Camera di Commercio o provider)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'AgID — CNS', label_en: 'AgID — CNS', url: 'https://www.agid.gov.it/it/piattaforme/carta-nazionale-servizi' }
    ],
    documents: [
      'Documento d\'identità valido',
      'Codice Fiscale'
    ],
    documents_en: [
      'Valid ID document',
      'Tax Code'
    ],
    steps: [
      { title: 'Richiedi la CNS', title_en: 'Request the CNS', description: 'La CNS può essere richiesta presso la Camera di Commercio (per imprenditori) o presso un ente certificatore autorizzato.', description_en: 'The CNS can be requested at the Chamber of Commerce (for entrepreneurs) or at an authorized certification body.', tip: 'La Tessera Sanitaria con microchip funge già da CNS se attivata.', tip_en: 'The Health Card with microchip already functions as CNS if activated.' },
      { title: 'Attiva la CNS', title_en: 'Activate the CNS', description: 'Se hai una Tessera Sanitaria con chip, puoi attivarla come CNS presso gli sportelli ASL o le farmacie abilitate della tua regione.', description_en: 'If you have a chip-enabled Health Card, you can activate it as CNS at ASL offices or authorized pharmacies in your region.', tip: 'Servono un lettore di smart card e i driver installati sul PC.', tip_en: 'You need a smart card reader and drivers installed on your PC.' },
      { title: 'Usa la CNS', title_en: 'Use the CNS', description: 'Inserisci la CNS nel lettore e accedi ai portali della PA che accettano CNS come metodo di autenticazione.', description_en: 'Insert the CNS into the reader and access public administration portals that accept CNS as an authentication method.', tip: 'La CIE e SPID stanno progressivamente sostituendo la CNS come metodo di accesso.', tip_en: 'CIE and SPID are progressively replacing CNS as an access method.' }
    ],
    warnings: ['La CNS è in fase di progressiva sostituzione da parte di SPID e CIE.'],
    warnings_en: ['CNS is being progressively replaced by SPID and CIE.'],
    relatedProcedures: ['spid', 'cie', 'tessera-sanitaria']
  },
  {
    id: 'pec',
    categoryId: 'identita',
    title: 'PEC — Posta Elettronica Certificata',
    title_en: 'PEC — Certified Electronic Mail',
    subtitle: 'Email con valore legale',
    subtitle_en: 'Email with legal value',
    difficulty: 'facile',
    estimatedTime: '15-20 minuti',
    cost: 'Da €5 a €25/anno (dipende dal provider)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'AgID — Elenco gestori PEC', label_en: 'AgID — List of PEC providers', url: 'https://www.agid.gov.it/it/piattaforme/posta-elettronica-certificata' }
    ],
    documents: [
      'Documento d\'identità valido',
      'Codice Fiscale'
    ],
    documents_en: [
      'Valid ID document',
      'Tax Code'
    ],
    steps: [
      { title: 'Scegli un gestore PEC', title_en: 'Choose a PEC provider', description: 'Scegli tra i gestori autorizzati: Aruba, Legalmail (InfoCert), Poste Italiane, Register, ecc.', description_en: 'Choose from authorized providers: Aruba, Legalmail (InfoCert), Poste Italiane, Register, etc.', tip: 'Aruba offre la PEC a partire da circa €5/anno, una delle opzioni più economiche.', tip_en: 'Aruba offers PEC starting at about €5/year, one of the cheapest options.' },
      { title: 'Registrati e paga', title_en: 'Register and pay', description: 'Crea un account sul sito del gestore, scegli l\'indirizzo PEC desiderato e completa il pagamento.', description_en: 'Create an account on the provider\'s site, choose your desired PEC address, and complete payment.', tip: null },
      { title: 'Verifica la tua identità', title_en: 'Verify your identity', description: 'Il gestore potrebbe richiedere l\'upload di un documento d\'identità o il riconoscimento online.', description_en: 'The provider may require uploading an ID document or online identity verification.', tip: null },
      { title: 'Attiva e utilizza', title_en: 'Activate and use', description: 'Riceverai le credenziali di accesso. Puoi usare la PEC via webmail o configurarla su un client di posta (IMAP/SMTP).', description_en: 'You will receive login credentials. You can use PEC via webmail or set it up on an email client (IMAP/SMTP).', tip: 'La PEC ha valore legale equivalente alla raccomandata con ricevuta di ritorno.', tip_en: 'PEC has the same legal value as registered mail with return receipt.' }
    ],
    warnings: [
      'La PEC è obbligatoria per imprese, professionisti iscritti ad albi e pubbliche amministrazioni.',
      'I messaggi PEC hanno validità legale solo se inviati tra caselle PEC.'
    ],
    warnings_en: [
      'PEC is mandatory for businesses, registered professionals, and public administrations.',
      'PEC messages have legal validity only when sent between PEC addresses.'
    ],
    relatedProcedures: ['codice-fiscale']
  },
  {
    id: 'passaporto',
    categoryId: 'identita',
    title: 'Passaporto Elettronico',
    title_en: 'Electronic Passport',
    subtitle: 'Rilascio e rinnovo del passaporto',
    subtitle_en: 'Passport issuance and renewal',
    difficulty: 'media',
    estimatedTime: '2-4 settimane',
    cost: '€116 (€42.50 bollettino + €73.50 marca da bollo)',
    lastVerified: '2026-05-16',
    officialLinks: [
      { label: 'Polizia di Stato - Passaporto', label_en: 'State Police - Passport', url: 'https://www.poliziadistato.it/articolo/10301' },
      { label: 'Agenda Passaporto', label_en: 'Passport Booking', url: 'https://passaportonline.poliziadistato.it/' }
    ],
    costBreakdown: [
      { label: 'Bollettino postale', label_en: 'Postal slip', amount: 42.50 },
      { label: 'Marca da bollo', label_en: 'Stamp duty', amount: 73.50 },
      { label: 'Spedizione a domicilio (opzionale)', label_en: 'Home delivery (optional)', amount: 15.00, optional: true }
    ],
    documents: [
      'Documento di identità valido',
      '2 fototessere identiche e recenti',
      'Ricevuta pagamento bollettino postale da €42,50',
      'Contributo amministrativo da €73,50 (marca da bollo)',
      'Vecchio passaporto (se rinnovo)'
    ],
    documents_en: [
      'Valid ID document',
      '2 identical recent passport photos',
      'Receipt of €42.50 postal payment',
      '€73.50 administrative fee (stamp duty)',
      'Old passport (if renewal)'
    ],
    steps: [
      { title: 'Prenotazione online', title_en: 'Online booking', description: 'Registrati sul portale Agenda Passaporto con SPID o CIE e prenota un appuntamento presso la Questura o Commissariato.', description_en: 'Register on the Passport Booking portal with SPID or CIE and book an appointment at the Police Headquarters.', tip: 'A causa dell\'alta richiesta, spesso è difficile trovare posti. Controlla il sito alle prime ore del mattino.', tip_en: 'Due to high demand, slots are often hard to find. Check the site early in the morning.' },
      { title: 'Pagamenti', title_en: 'Payments', description: 'Paga il bollettino postale premarcato e acquista la marca da bollo in tabaccheria prima dell\'appuntamento.', description_en: 'Pay the pre-printed postal slip and buy the stamp duty at a tobacco shop before your appointment.', tip: null },
      { title: 'Appuntamento', title_en: 'Appointment', description: 'Recati in Questura all\'orario stabilito per la consegna dei documenti, l\'acquisizione delle impronte digitali e della firma.', description_en: 'Go to the Police Headquarters at the scheduled time to submit documents, provide fingerprints, and sign.', tip: null },
      { title: 'Ritiro', title_en: 'Collection', description: 'Il passaporto potrà essere ritirato di persona (o da un delegato) oppure si può richiedere la spedizione a domicilio tramite Poste Italiane (con costo aggiuntivo).', description_en: 'The passport can be collected in person (or by a delegate) or delivered by Poste Italiane (with additional fee).', tip: null }
    ],
    warnings: ['Per i minori serve l\'assenso di entrambi i genitori, anche se separati o divorziati.'],
    warnings_en: ['For minors, consent from both parents is required, even if separated or divorced.'],
    relatedProcedures: ['cie', 'spid']
  },
  {
    id: 'cittadinanza-italiana',
    categoryId: 'identita',
    title: 'Cittadinanza Italiana',
    title_en: 'Italian Citizenship',
    subtitle: 'Richiesta di cittadinanza per residenza o matrimonio',
    subtitle_en: 'Citizenship application by residence or marriage',
    difficulty: 'difficile',
    estimatedTime: '2-4 anni',
    cost: '€250 (contributo fisso) + costo documenti e traduzioni',
    lastVerified: '2026-05-16',
    costBreakdown: [
      { label: 'Contributo fisso (art. 9-bis comma 1)', label_en: 'Fixed contribution (art. 9-bis para 1)', amount: 250.00 },
      { label: 'Traduzioni documenti (stima)', label_en: 'Document translations (estimate)', amount: 150.00, optional: true },
      { label: 'Legalizzazioni / Apostille (stima)', label_en: 'Legalizations / Apostille (estimate)', amount: 80.00, optional: true }
    ],
    officialLinks: [
      { label: 'Ministero dell\'Interno - Cittadinanza', label_en: 'Ministry of Interior - Citizenship', url: 'https://portaleservizi.dlci.interno.it/AliCittadinanza/ali/home.htm' }
    ],
    documents: [
      'Estratto dell\'atto di nascita tradotto e legalizzato',
      'Certificato penale del paese di origine',
      'Ricevuta del pagamento da €250',
      'Certificato di conoscenza della lingua italiana (B1) - se richiesto',
      'Modello ISEE o dichiarazione redditi (per naturalizzazione)'
    ],
    documents_en: [
      'Extract of birth certificate, translated and legalized',
      'Police certificate from country of origin',
      'Receipt of €250 payment',
      'Italian language certificate (B1) - if required',
      'ISEE or tax return (for naturalization)'
    ],
    steps: [
      { title: 'Verifica dei requisiti', title_en: 'Check requirements', description: 'Servono 10 anni di residenza ininterrotta per i cittadini extra-UE (4 per UE), reddito sufficiente o matrimonio con cittadino italiano (dopo 2/3 anni).', description_en: '10 years of continuous residence for non-EU citizens (4 for EU), sufficient income, or marriage to an Italian citizen (after 2/3 years).', tip: 'Per la residenza, si conta l\'iscrizione anagrafica: non ci devono essere "buchi".', tip_en: 'For residence, it counts from registry enrollment: there must be no gaps.' },
      { title: 'Preparazione documenti', title_en: 'Prepare documents', description: 'Ottieni certificati di nascita e penali dal tuo paese. Devi farli tradurre e legalizzare (o apostillare).', description_en: 'Obtain birth and police certificates from your country. You need to have them translated and legalized (or apostilled).', tip: 'Questi documenti hanno una scadenza (solitamente 6 mesi), quindi raccoglili per ultimi.', tip_en: 'These documents have an expiry date (usually 6 months), so collect them last.' },
      { title: 'Invio della domanda', title_en: 'Submit the application', description: 'Carica tutti i documenti sul portale del Ministero dell\'Interno utilizzando SPID o CIE.', description_en: 'Upload all documents on the Ministry of Interior portal using SPID or CIE.', tip: null },
      { title: 'Attesa e convocazione', title_en: 'Wait and summons', description: 'Il Ministero o la Prefettura valuteranno la pratica. Verrai convocato per mostrare gli originali.', description_en: 'The Ministry or Prefecture will evaluate your application. You will be summoned to show the originals.', tip: 'Le tempistiche legali massime sono di norma 2-3 anni ma possono protrarsi.', tip_en: 'Maximum legal processing times are normally 2-3 years but can be extended.' },
      { title: 'Giuramento', title_en: 'Oath', description: 'Dopo l\'approvazione e la notifica del decreto, avrai 6 mesi di tempo per prestare giuramento in Comune.', description_en: 'After approval and notification of the decree, you have 6 months to take the oath at the municipality.', tip: null }
    ],
    warnings: ['Il livello B1 di italiano è obbligatorio per le richieste per matrimonio e per residenza (con alcune esenzioni).'],
    warnings_en: ['Italian B1 level is mandatory for applications by marriage and residence (with some exemptions).'],
    relatedProcedures: ['spid', 'isee']
  },
  {
    id: 'firma-digitale',
    categoryId: 'identita',
    title: 'Firma Digitale',
    title_en: 'Digital Signature',
    subtitle: 'Acquisto e attivazione firma qualificata',
    subtitle_en: 'Purchase and activation of qualified signature',
    difficulty: 'facile',
    estimatedTime: '1 giorno',
    cost: 'Da €30 a €70 a seconda del provider e del dispositivo',
    costBreakdown: [
      { label: 'Smart Card + lettore (Aruba)', label_en: 'Smart Card + reader (Aruba)', amount: 45.00, optional: true },
      { label: 'Token USB (InfoCert)', label_en: 'USB Token (InfoCert)', amount: 55.00, optional: true },
      { label: 'Firma Remota annuale (Namirial)', label_en: 'Remote Signature yearly (Namirial)', amount: 35.00, optional: true }
    ],
    lastVerified: '2026-05-16',
    officialLinks: [
      { label: 'AgID - Prestatori Fiduciari', label_en: 'AgID - Trust Service Providers', url: 'https://www.agid.gov.it/it/piattaforme/firma-elettronica-qualificata' }
    ],
    documents: [
      'Documento di identità (o SPID/CIE per riconoscimento rapido)',
      'Codice Fiscale'
    ],
    documents_en: [
      'ID document (or SPID/CIE for quick verification)',
      'Tax Code'
    ],
    steps: [
      { title: 'Scegliere il formato', title_en: 'Choose the format', description: 'Decidi se vuoi una Smart Card (serve lettore), un Token USB, o la Firma Remota (utilizzabile tramite App e OTP).', description_en: 'Decide whether you want a Smart Card (needs reader), a USB Token, or Remote Signature (usable via App and OTP).', tip: 'La Firma Remota è la più comoda se usi spesso smartphone o tablet.', tip_en: 'Remote Signature is the most convenient if you often use smartphones or tablets.' },
      { title: 'Scegliere il fornitore', title_en: 'Choose the provider', description: 'Acquista la firma da provider certificati come Aruba, InfoCert, Namirial, Poste Italiane, o presso la Camera di Commercio.', description_en: 'Purchase the signature from certified providers such as Aruba, InfoCert, Namirial, Poste Italiane, or at the Chamber of Commerce.', tip: null },
      { title: 'Riconoscimento', title_en: 'Identity verification', description: 'Per attivare la firma devi confermare la tua identità: puoi farlo online con SPID/CIE, via webcam con operatore o di persona.', description_en: 'To activate the signature you must confirm your identity: online with SPID/CIE, via webcam with an operator, or in person.', tip: 'L\'attivazione tramite SPID è immediata e senza costi aggiuntivi di video-riconoscimento.', tip_en: 'Activation via SPID is immediate with no additional video-verification costs.' },
      { title: 'Attivazione e utilizzo', title_en: 'Activation and use', description: 'Segui le istruzioni per impostare il PIN. Scarica i software (es. ArubaSign o GoSign) per firmare i documenti PDF in formato PAdES o CAdES.', description_en: 'Follow the instructions to set your PIN. Download software (e.g. ArubaSign or GoSign) to sign PDF documents in PAdES or CAdES format.', tip: null }
    ],
    warnings: ['La firma digitale qualificata ha lo stesso valore legale di una firma autografa su carta.'],
    warnings_en: ['The qualified digital signature has the same legal value as a handwritten signature on paper.'],
    relatedProcedures: ['spid', 'pec']
  },
  {
    id: 'cambio-nome',
    categoryId: 'identita',
    title: 'Cambio Nome o Cognome',
    title_en: 'Name or Surname Change',
    subtitle: 'Procedura per la modifica di nome e/o cognome',
    subtitle_en: 'Procedure for changing first name and/or surname',
    difficulty: 'media',
    estimatedTime: '3-6 mesi',
    estimatedTime_en: '3-6 months',
    cost: 'Da €200 a €500 (imposta di bollo + spese legali)',
    cost_en: 'From €200 to €500 (stamp duty + legal fees)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Prefettura - Cambio nome', label_en: 'Prefecture - Name change', url: 'https://www.prefettura.it/cambio_nome' },
      { label: 'Normativa di riferimento', label_en: 'Reference legislation', url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.regio:1942-03-26;267!vig=2017-12-07' }
    ],
    documents: [
      'Richiesta motivata al Prefetto della provincia di residenza',
      'Documento d\'identità valido',
      'Codice Fiscale',
      'Certificato di nascita integrale (rilasciato dal Comune di nascita)',
      'Certificato di residenza storica',
      'Marca da bollo da €16,00 (per ogni copia del decreto)',
      'Eventuali documenti a supporto della richiesta'
    ],
    documents_en: [
      'Reasoned request to the Prefect of the province of residence',
      'Valid ID document',
      'Tax Code',
      'Full birth certificate (issued by the municipality of birth)',
      'Historical residence certificate',
      '€16.00 stamp duty (for each copy of the decree)',
      'Any supporting documents',
      'Proof of publication in the municipal register'
    ],
    steps: [
      { title: 'Prepara la documentazione', title_en: 'Prepare documentation', description: 'Raccogli i documenti necessari e scrivi una richiesta motivata al Prefetto spiegando le ragioni del cambio nome (es. nome ridicolo, motivi culturali/religiosi, rettifica).', description_en: 'Gather required documents and write a reasoned request to the Prefect explaining the reasons for the name change (e.g. ridiculous name, cultural/religious reasons, correction).', tip: 'Motivazioni valide: nomi ridicoli o vergognosi, motivi politici/religiosi, rettifica di errori anagrafici.', tip_en: 'Valid reasons: ridiculous or shameful names, political/religious reasons, correction of registry errors.' },
      { title: 'Presenta la domanda in Prefettura', title_en: 'Submit the request at the Prefecture', description: 'Consegna la domanda e i documenti all\'Ufficio Territoriale del Governo (Prefettura) della provincia di residenza.', description_en: 'Submit the application and documents to the Territorial Office of the Government (Prefecture) of the province of residence.', tip: 'Puoi presentare la domanda anche tramite un avvocato.', tip_en: 'You can also submit the application through a lawyer.' },
      { title: 'Pubblicazione e notifica', title_en: 'Publication and notification', description: 'Il Prefetto autorizza la pubblicazione dell\'istanza all\'Albo Pretorio del Comune per 30 giorni. La richiesta viene notificata anche ai familiari.', description_en: 'The Prefect authorizes the publication of the application in the Municipal Register for 30 days. The request is also notified to family members.', tip: 'I familiari possono opporsi entro 30 giorni dalla notifica.', tip_en: 'Family members can object within 30 days of notification.' },
      { title: 'Decreto e trascrizione', title_en: 'Decree and transcription', description: 'Se non ci sono opposizioni, il Prefetto emette il decreto di cambio nome. Trascrivilo presso il Comune di nascita e il Comune di residenza.', description_en: 'If there are no objections, the Prefect issues the name change decree. Transcribe it at the municipality of birth and the municipality of residence.', tip: 'Richiedi almeno 3 copie autentiche del decreto: una per te, una per il Comune, una per eventuali altre pratiche.', tip_en: 'Request at least 3 certified copies of the decree: one for you, one for the municipality, one for any other procedures.' },
      { title: 'Aggiorna documenti', title_en: 'Update documents', description: 'Richiedi la nuova Carta d\'Identità, aggiorna Codice Fiscale, passaporto, patente e comunica il cambio a banche, assicurazioni, INPS e altri enti.', description_en: 'Request a new ID card, update Tax Code, passport, driving license, and notify banks, insurance companies, INPS and other agencies.', tip: 'L\'Agenzia delle Entrate aggiorna automaticamente il Codice Fiscale dopo la comunicazione del Comune.', tip_en: 'The Revenue Agency automatically updates the Tax Code after the municipality notifies them.' }
    ],
    warnings: ['Il procedimento può richiedere dai 3 ai 6 mesi. In caso di opposizione familiare, potrebbe sfociare in un procedimento giudiziario che allunga ulteriormente i tempi.', 'Il cambio nome non è possibile per motivi fiscali o per eludere obblighi di legge.'],
    warnings_en: ['The process can take 3 to 6 months. In case of family opposition, it may turn into a judicial proceeding, further extending the timeline.', 'Name change is not possible for tax reasons or to evade legal obligations.'],
    relatedProcedures: ['cie', 'codice-fiscale', 'cambio-residenza']
  },
  {
    id: 'autocertificazione',
    categoryId: 'identita',
    title: 'Autocertificazione (DPR 445/2000)',
    title_en: 'Self-Certification (DPR 445/2000)',
    subtitle: 'Dichiarazione sostitutiva di certificazione e di atto notorio',
    subtitle_en: 'Substitute declaration of certification and sworn statement',
    difficulty: 'facile',
    estimatedTime: '5-10 minuti',
    estimatedTime_en: '5-10 minutes',
    cost: 'Gratuito',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Normattiva — DPR 445/2000', label_en: 'Normattiva — DPR 445/2000', url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2000-12-28;445' },
      { label: 'Modello autocertificazione (Ag. Entrate)', label_en: 'Self-certification form (Revenue Agency)', url: 'https://www.agenziaentrate.gov.it/portale/codice-fiscale-e-tessera-sanitaria/modello-e-istruzioni' }
    ],
    documents: ['Documento d\'identità valido'],
    documents_en: ['Valid ID document'],
    steps: [
      { title: 'Scarica il modulo', title_en: 'Download the form', description: 'Scarica il modello di dichiarazione sostitutiva di certificazione dal sito dell\'Agenzia delle Entrate o crea il tuo documento.', description_en: 'Download the substitute declaration of certification form from the Revenue Agency website or create your own document.', tip: 'Non serve il notaio: l\'autocertificazione ha lo stesso valore legale di un certificato ufficiale.', tip_en: 'No notary needed: self-certification has the same legal value as an official certificate.' },
      { title: 'Compila la dichiarazione', title_en: 'Fill in the declaration', description: 'Indica i tuoi dati anagrafici e dichiara, sotto la tua responsabilità, i fatti, stati e qualità che intendi certificare (es. residenza, stato di famiglia, cittadinanza, ecc.).', description_en: 'Enter your personal details and declare, under your own responsibility, the facts, statuses, and qualities you intend to certify (e.g. residence, family status, citizenship, etc.).', tip: 'Puoi autocertificare: nascita, residenza, cittadinanza, stato civile, titolo di studio, iscrizione ad albi, reddito, ecc.', tip_en: 'You can self-certify: birth, residence, citizenship, marital status, education, professional registrations, income, etc.' },
      { title: 'Allega copia del documento', title_en: 'Attach a copy of your ID', description: 'Allega una copia fronte/retro del tuo documento d\'identità valido. La firma non va autenticata se la dichiarazione è presentata a un ente pubblico.', description_en: 'Attach a front/back copy of your valid ID document. The signature does not need to be authenticated if the declaration is submitted to a public body.', tip: 'Se presenti la dichiarazione a privati (es. banca, assicurazione), potrebbe essere richiesta la firma autenticata.', tip_en: 'If submitting to private entities (e.g. bank, insurance), an authenticated signature may be required.' },
      { title: 'Invia o consegna', title_en: 'Submit or deliver', description: 'Consegna a mano, invia via PEC, email ordinaria o attraverso il portale dell\'ente destinatario.', description_en: 'Deliver in person, send via PEC, regular email, or through the recipient entity\'s portal.', tip: 'La PEC è il metodo più rapido e tracciabile per inviare autocertificazioni.', tip_en: 'PEC is the fastest and most traceable method for sending self-certifications.' }
    ],
    warnings: ['Dichiarazioni false sono punite penalmente (art. 76 DPR 445/2000).', 'L\'autocertificazione non può essere usata per certificati medici, sanitari o per diritti personalissimi.', 'Non può essere utilizzata quando la legge richiede espressamente un certificato originale.'],
    warnings_en: ['False declarations are criminally punishable (art. 76 DPR 445/2000).', 'Self-certification cannot be used for medical/health certificates or highly personal rights.', 'Cannot be used when the law expressly requires an original certificate.'],
    relatedProcedures: ['spid', 'codice-fiscale', 'cambio-residenza']
  }
];
