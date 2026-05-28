export const fiscoProcedures = [
  {
    id: 'dichiarazione-redditi',
    categoryId: 'fisco',
    title: 'Dichiarazione dei Redditi',
    title_en: 'Tax Return',
    subtitle: 'Modello 730 e Modello Redditi PF',
    subtitle_en: 'Form 730 and Form Redditi PF',
    difficulty: 'media',
    estimatedTime: '1-3 ore (con CAF) o 30 min (precompilata)',
    estimatedTime_en: '1-3 hours (with CAF) or 30 min (pre-filled)',
    cost: 'Gratuito (precompilata) o €30-€80 (CAF/commercialista)',
    cost_en: 'Free (pre-filled) or €30-€80 (CAF/accountant)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Agenzia Entrate — 730 Precompilato', label_en: 'Revenue Agency — Pre-filled 730', url: 'https://infoprecompilata.agenziaentrate.gov.it/' },
      { label: 'Scadenze fiscali', label_en: 'Tax deadlines', url: 'https://www1.agenziaentrate.gov.it/servizi/scadenzario/main.php' }
    ],
    documents: ['CU (Certificazione Unica) dal datore di lavoro', 'Spese sanitarie e scontrini farmacia', 'Ricevute spese detraibili (affitto, università, asilo, ecc.)', 'Dati catastali degli immobili posseduti', 'SPID/CIE per accesso al precompilato'],
    documents_en: ['CU (Single Certification) from employer', 'Healthcare expenses and pharmacy receipts', 'Receipts for deductible expenses (rent, university, daycare, etc.)', 'Cadastral data of owned properties', 'SPID/CIE to access the pre-filled form'],
    steps: [
      { title: 'Scegli la modalità', title_en: 'Choose the method', description: 'Puoi compilare il 730 precompilato online (Agenzia Entrate), rivolgerti a un CAF o a un commercialista.', description_en: 'You can fill in the pre-filled 730 online (Revenue Agency), go to a CAF, or hire an accountant.', tip: 'Il 730 precompilato è già parzialmente compilato dall\'Agenzia Entrate con i dati in suo possesso.', tip_en: 'The pre-filled 730 is already partially completed by the Revenue Agency with data it holds.' },
      { title: 'Raccogli i documenti', title_en: 'Gather documents', description: 'Raccimola CU, spese mediche, scontrini, ricevute di pagamenti detraibili dell\'anno precedente.', description_en: 'Collect your CU, medical expenses, receipts, and deductible payment receipts from the previous year.', tip: 'Le spese sanitarie sono già caricate nel precompilato grazie al Sistema Tessera Sanitaria.', tip_en: 'Healthcare expenses are already loaded into the pre-filled form via the Health Card System.' },
      { title: 'Compila o verifica', title_en: 'Fill in or verify', description: 'Se usi il precompilato, verifica i dati e aggiungi eventuali spese mancanti. Se vai al CAF, porta tutta la documentazione.', description_en: 'If using the pre-filled form, verify the data and add any missing expenses. If going to CAF, bring all documentation.', tip: 'Accettare il precompilato SENZA modifiche riduce il rischio di controlli.', tip_en: 'Accepting the pre-filled form WITHOUT changes reduces the risk of audits.' },
      { title: 'Invia', title_en: 'Submit', description: 'Invia il 730 entro la scadenza (generalmente 30 settembre). Il Modello Redditi PF ha scadenza 30 novembre.', description_en: 'Submit the 730 by the deadline (usually September 30). Form Redditi PF has a deadline of November 30.', tip: null },
      { title: 'Rimborso o pagamento', title_en: 'Refund or payment', description: 'Se hai diritto a un rimborso, lo riceverai in busta paga (730) o sul conto corrente. Se devi pagare, il conguaglio avviene in busta paga o tramite F24.', description_en: 'If entitled to a refund, you will receive it in your paycheck (730) or bank account. If you owe, the balance is deducted from your paycheck or via F24.', tip: null }
    ],
    warnings: ['Per il 2026: aliquote IRPEF a 3 scaglioni (23%, 35%, 43%).', 'Detrazioni figli a carico limitate ai figli sotto i 30 anni (salvo disabilità).'],
    warnings_en: ['For 2026: IRPEF rates at 3 brackets (23%, 35%, 43%).', 'Dependent child deductions limited to children under 30 (unless disabled).'],
    relatedProcedures: ['isee', 'codice-fiscale', 'spid']
  },
  {
    id: 'isee',
    categoryId: 'fisco',
    title: 'ISEE',
    title_en: 'ISEE',
    subtitle: 'Indicatore della Situazione Economica Equivalente',
    subtitle_en: 'Equivalent Economic Situation Indicator',
    difficulty: 'media',
    estimatedTime: '1-2 ore (CAF) o 30-45 min (online)',
    estimatedTime_en: '1-2 hours (CAF) or 30-45 min (online)',
    cost: 'Gratuito',
    cost_en: 'Free',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'INPS — ISEE', label_en: 'INPS — ISEE', url: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.isee-post-riforma-2015-50601.isee-post-riforma-2015.html' },
      { label: 'INPS — DSU precompilata', label_en: 'INPS — Pre-filled DSU', url: 'https://servizi2.inps.it/servizi/IseePrecompilato/' }
    ],
    documents: ['Documento d\'identità e codice fiscale di tutti i componenti', 'Stato di famiglia', 'Dichiarazione dei redditi dell\'anno precedente', 'Saldo e giacenza media dei conti correnti al 31/12', 'Dati su immobili e patrimonio mobiliare', 'Eventuali contratti di locazione'],
    documents_en: ['ID document and tax code of all household members', 'Family status certificate', 'Previous year\'s tax return', 'Balance and average balance of bank accounts as of 12/31', 'Data on real estate and financial assets', 'Any rental contracts'],
    steps: [
      { title: 'Raccogli i dati patrimoniali', title_en: 'Gather asset data', description: 'Procurati i saldi e le giacenze medie di tutti i conti (bancari, postali, titoli) al 31 dicembre dell\'anno precedente.', description_en: 'Get the balances and average balances of all accounts (bank, postal, securities) as of December 31 of the previous year.', tip: 'Le banche sono obbligate a fornirti la giacenza media gratuitamente.', tip_en: 'Banks are required to provide the average balance free of charge.' },
      { title: 'Compila la DSU', title_en: 'Fill in the DSU', description: 'La Dichiarazione Sostitutiva Unica (DSU) può essere compilata online sul sito INPS (precompilata) o presso un CAF.', description_en: 'The Single Substitute Declaration (DSU) can be filled in online on the INPS website (pre-filled) or at a CAF.', tip: 'La DSU precompilata INPS è già parzialmente precompilata con dati dell\'Agenzia Entrate e INPS.', tip_en: 'The INPS pre-filled DSU is already partially filled with data from the Revenue Agency and INPS.' },
      { title: 'Invia e attendi', title_en: 'Submit and wait', description: 'Dopo l\'invio, l\'INPS calcola l\'ISEE in pochi giorni. L\'attestazione sarà disponibile sul sito INPS.', description_en: 'After submission, INPS calculates the ISEE within a few days. The certificate will be available on the INPS website.', tip: null },
      { title: 'Utilizza l\'ISEE', title_en: 'Use the ISEE', description: 'L\'ISEE serve per accedere a agevolazioni: Assegno Unico, bonus sociali, mensa scolastica, università, ecc.', description_en: 'The ISEE is used to access benefits: Single Allowance, social bonuses, school meals, university, etc.', tip: null }
    ],
    warnings: ['⚠️ ISEE 2026: presentare la DSU entro il 28/02/2026 per non perdere l\'Assegno Unico. Regolarizzazione possibile fino al 30/06/2026.', 'Novità 2026: giacenze in criptovalute e valuta estera incluse nel patrimonio mobiliare.'],
    warnings_en: ['⚠️ ISEE 2026: submit the DSU by 28/02/2026 to avoid losing the Single Allowance. Regularization possible until 30/06/2026.', '2026 news: cryptocurrency and foreign currency holdings included in financial assets.'],
    relatedProcedures: ['dichiarazione-redditi', 'codice-fiscale']
  },
  {
    id: 'partita-iva',
    categoryId: 'fisco',
    title: 'Apertura Partita IVA',
    title_en: 'Opening a VAT Number',
    subtitle: 'Per liberi professionisti e freelancer',
    subtitle_en: 'For freelancers and self-employed',
    difficulty: 'media',
    estimatedTime: '30 minuti (online) o 1 ora (in ufficio)',
    estimatedTime_en: '30 minutes (online) or 1 hour (in person)',
    cost: 'Gratuito (apertura) — costi gestione annuale variabili',
    cost_en: 'Free (opening) — variable annual management costs',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Agenzia Entrate — Apertura P.IVA', label_en: 'Revenue Agency — Opening P.IVA', url: 'https://www.agenziaentrate.gov.it/portale/schede/istanze/aa9_11-apertura-variazione-chiusura-pf' },
      { label: 'Regime Forfettario', label_en: 'Flat-rate scheme', url: 'https://www.agenziaentrate.gov.it/portale/schede/istanze/aa9_11-apertura-variazione-chiusura-pf' }
    ],
    documents: ['Documento d\'identità', 'Codice Fiscale', 'Modulo AA9/12 (persone fisiche)', 'Codice ATECO dell\'attività'],
    documents_en: ['ID document', 'Tax Code', 'Form AA9/12 (individuals)', 'ATECO code of the activity'],
    steps: [
      { title: 'Scegli il regime fiscale', title_en: 'Choose the tax regime', description: 'Il regime forfettario è il più vantaggioso per chi fattura meno di €85.000/anno: aliquota al 15% (5% per i primi 5 anni di nuova attività).', description_en: 'The flat-rate scheme is the most advantageous for those invoicing under €85,000/year: 15% rate (5% for the first 5 years of new activity).', tip: 'Il regime forfettario non consente la detrazione IVA sugli acquisti.', tip_en: 'The flat-rate scheme does not allow VAT deduction on purchases.' },
      { title: 'Identifica il codice ATECO', title_en: 'Identify the ATECO code', description: 'Trova il codice ATECO corrispondente alla tua attività professionale. Determina anche la cassa previdenziale di riferimento.', description_en: 'Find the ATECO code corresponding to your professional activity. Also determine the relevant social security fund.', tip: 'Un commercialista può aiutarti a scegliere il codice ATECO più vantaggioso.', tip_en: 'An accountant can help you choose the most advantageous ATECO code.' },
      { title: 'Presenta il modulo', title_en: 'Submit the form', description: 'Compila il modulo AA9/12 e invialo telematicamente tramite il sito dell\'Agenzia Entrate, oppure presentalo di persona.', description_en: 'Fill in form AA9/12 and submit it electronically via the Revenue Agency website, or present it in person.', tip: null },
      { title: 'Iscrizione previdenziale', title_en: 'Social security enrollment', description: 'Iscriviti alla gestione separata INPS (o alla cassa professionale di appartenenza).', description_en: 'Enroll in the INPS separate management (or your professional fund).', tip: null },
      { title: 'Inizia a fatturare', title_en: 'Start invoicing', description: 'Una volta aperta la P.IVA, puoi emettere fatture. In regime forfettario, le fatture sono senza IVA con marca da bollo da €2 sopra i €77,47.', description_en: 'Once the VAT number is open, you can issue invoices. Under the flat-rate scheme, invoices are VAT-free with a €2 stamp duty above €77.47.', tip: 'Utilizza un software di fatturazione elettronica (obbligatoria).', tip_en: 'Use an electronic invoicing software (mandatory).' }
    ],
    warnings: ['La fatturazione elettronica è obbligatoria per tutti i titolari di P.IVA.', 'I contributi INPS sono dovuti anche se non fatturi nulla (per artigiani e commercianti).'],
    warnings_en: ['Electronic invoicing is mandatory for all VAT holders.', 'INPS contributions are due even if you invoice nothing (for artisans and traders).'],
    relatedProcedures: ['dichiarazione-redditi', 'pec', 'codice-fiscale']
  },
  {
    id: 'imu-tari',
    categoryId: 'fisco',
    title: 'IMU e TARI',
    title_en: 'IMU and TARI',
    subtitle: 'Tasse su immobili e rifiuti',
    subtitle_en: 'Property and waste taxes',
    difficulty: 'facile',
    estimatedTime: '30 minuti',
    estimatedTime_en: '30 minutes',
    cost: 'Variabile (dipende dal Comune e dal valore catastale)',
    cost_en: 'Variable (depends on municipality and cadastral value)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'MEF — IMU', label_en: 'MEF — IMU', url: 'https://www.finanze.gov.it/fiscalita-regionale-e-locale/imu/' },
      { label: 'Calcolo IMU', label_en: 'IMU calculator', url: 'https://www.amministrazionicomunali.it/imu/calcolo_imu.php' }
    ],
    documents: ['Dati catastali dell\'immobile', 'Modello F24 per il pagamento'],
    documents_en: ['Cadastral data of the property', 'F24 form for payment'],
    steps: [
      { title: 'Verifica se devi pagare l\'IMU', title_en: 'Check if you need to pay IMU', description: 'L\'IMU NON si paga sulla prima casa (abitazione principale) a meno che non sia di lusso (categorie A/1, A/8, A/9). Si paga su seconde case, terreni e altri immobili.', description_en: 'IMU is NOT paid on the primary residence unless it is a luxury property (categories A/1, A/8, A/9). It is paid on second homes, land, and other properties.', tip: null },
      { title: 'Calcola l\'importo', title_en: 'Calculate the amount', description: 'Usa il calcolatore IMU online o chiedi al tuo Comune. L\'importo dipende dalla rendita catastale e dalle aliquote comunali.', description_en: 'Use the online IMU calculator or ask your municipality. The amount depends on the cadastral value and municipal rates.', tip: 'Le aliquote variano da Comune a Comune: controlla le delibere comunali.', tip_en: 'Rates vary by municipality: check your municipal resolutions.' },
      { title: 'Paga tramite F24', title_en: 'Pay via F24', description: 'L\'IMU si paga in 2 rate: acconto entro il 16 giugno e saldo entro il 16 dicembre. Si può pagare in un\'unica soluzione a giugno.', description_en: 'IMU is paid in 2 installments: advance by June 16 and balance by December 16. It can be paid in a single payment in June.', tip: null },
      { title: 'TARI', title_en: 'TARI', description: 'La TARI (tassa rifiuti) viene calcolata dal Comune in base alla superficie dell\'immobile e al numero di occupanti. Il Comune invia l\'avviso di pagamento.', description_en: 'TARI (waste tax) is calculated by the municipality based on the property size and number of occupants. The municipality sends the payment notice.', tip: 'Verifica se hai diritto a riduzioni (es. compostaggio domestico, unico occupante).', tip_en: 'Check if you qualify for reductions (e.g. home composting, single occupant).' }
    ],
    warnings: ['Le scadenze IMU sono tassative: 16 giugno (acconto) e 16 dicembre (saldo).'],
    warnings_en: ['IMU deadlines are strict: June 16 (advance) and December 16 (balance).'],
    relatedProcedures: ['dichiarazione-redditi']
  },
  {
    id: 'bonus-detrazioni',
    categoryId: 'fisco',
    title: 'Bonus e Detrazioni',
    title_en: 'Bonuses and Tax Deductions',
    subtitle: 'Agevolazioni fiscali in vigore',
    subtitle_en: 'Current tax benefits',
    difficulty: 'media',
    estimatedTime: 'Variabile',
    estimatedTime_en: 'Variable',
    cost: 'Gratuito (la richiesta)',
    cost_en: 'Free (application)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Agenzia Entrate — Detrazioni', label_en: 'Revenue Agency — Deductions', url: 'https://www.agenziaentrate.gov.it/portale/home' },
      { label: 'ENEA — Bonus edilizi', label_en: 'ENEA — Construction bonuses', url: 'https://www.efficienzaenergetica.enea.it/' }
    ],
    documents: ['Fatture e ricevute di pagamento', 'Bonifici parlanti (per bonus edilizi)', 'Comunicazione ENEA (per lavori di efficientamento)'],
    documents_en: ['Invoices and payment receipts', 'Bank transfers with specific description (for construction bonuses)', 'ENEA notification (for energy efficiency work)'],
    steps: [
      { title: 'Identifica i bonus disponibili', title_en: 'Identify available bonuses', description: 'I principali bonus attivi: Bonus Ristrutturazione (50%), Ecobonus (50-65%), Bonus Mobili, Bonus Verde, Sismabonus. Le percentuali possono variare di anno in anno.', description_en: 'Main active bonuses: Renovation Bonus (50%), Ecobonus (50-65%), Furniture Bonus, Green Bonus, Earthquake Bonus. Percentages may vary year by year.', tip: 'Verifica sempre le percentuali e i limiti di spesa aggiornati sul sito dell\'Agenzia Entrate.', tip_en: 'Always check updated percentages and spending limits on the Revenue Agency website.' },
      { title: 'Rispetta i requisiti', title_en: 'Meet the requirements', description: 'Ogni bonus ha requisiti specifici: tipo di immobile, tipo di intervento, modalità di pagamento (bonifico parlante), comunicazioni obbligatorie.', description_en: 'Each bonus has specific requirements: property type, type of work, payment method (traceable bank transfer), mandatory communications.', tip: 'Il bonifico parlante deve riportare: causale con riferimento normativo, codice fiscale del beneficiario, P.IVA dell\'impresa.', tip_en: 'The traceable transfer must include: reason with legal reference, beneficiary\'s tax code, company VAT number.' },
      { title: 'Conserva la documentazione', title_en: 'Keep documentation', description: 'Conserva tutte le fatture, i bonifici, le asseverazioni tecniche e le comunicazioni ENEA per almeno 10 anni.', description_en: 'Keep all invoices, bank transfers, technical certifications, and ENEA communications for at least 10 years.', tip: null },
      { title: 'Inserisci nella dichiarazione', title_en: 'Include in your tax return', description: 'Le detrazioni vanno indicate nella dichiarazione dei redditi (730 o Modello Redditi). La detrazione viene recuperata in più anni (generalmente 10).', description_en: 'Deductions must be reported in your tax return (730 or Redditi form). The deduction is recovered over multiple years (usually 10).', tip: null }
    ],
    warnings: ['Il Superbonus 110% è terminato per la maggior parte degli interventi. Verificare eventuali proroghe.'],
    warnings_en: ['The Superbonus 110% has ended for most works. Check for any extensions.'],
    relatedProcedures: ['dichiarazione-redditi', 'imu-tari']
  },
  {
    id: 'assegno-unico',
    categoryId: 'fisco',
    title: 'Assegno Unico e Universale',
    title_en: 'Single Universal Allowance',
    subtitle: 'Sostegno economico per figli a carico',
    subtitle_en: 'Financial support for dependent children',
    difficulty: 'facile',
    estimatedTime: '30 minuti',
    estimatedTime_en: '30 minutes',
    cost: 'Gratuito',
    cost_en: 'Free',
    lastVerified: '2026-05-16',
    officialLinks: [
      { label: 'INPS - Assegno Unico', label_en: 'INPS - Single Allowance', url: 'https://www.inps.it/it/it/dettaglio-scheda.schede-servizio-strumento.schede-servizi.assegno-unico-e-universale-per-i-figli-a-carico-53396.assegno-unico-e-universale-per-i-figli-a-carico.html' }
    ],
    documents: [
      'SPID/CIE/CNS',
      'ISEE in corso di validità',
      'Codice Fiscale dei figli e dell\'altro genitore',
      'IBAN intestato al richiedente'
    ],
    documents_en: [
      'SPID/CIE/CNS',
      'Valid ISEE certificate',
      'Tax code of children and other parent',
      'IBAN in the applicant\'s name'
    ],
    steps: [
      { title: 'Richiesta ISEE', title_en: 'ISEE application', description: 'Prima di fare domanda, richiedi l\'ISEE per ottenere l\'importo corretto in base al reddito. Puoi anche fare domanda senza ISEE ma riceverai l\'importo minimo.', description_en: 'Before applying, get your ISEE to receive the correct amount based on income. You can also apply without ISEE but will receive the minimum amount.', tip: 'Ricordati di rinnovare l\'ISEE ogni anno entro febbraio, altrimenti da marzo l\'assegno scenderà all\'importo minimo.', tip_en: 'Remember to renew your ISEE every year by February, otherwise from March the allowance will drop to the minimum amount.' },
      { title: 'Presentazione domanda', title_en: 'Submit application', description: 'Accedi al portale INPS con SPID/CIE e compila la domanda per l\'Assegno Unico indicando i dati dei figli.', description_en: 'Access the INPS portal with SPID/CIE and fill in the Single Allowance application with your children\'s details.', tip: null },
      { title: 'Scelta IBAN e Ripartizione', title_en: 'Choose IBAN and split', description: 'Inserisci l\'IBAN e scegli se ricevere il 100% dell\'importo o dividerlo al 50% con l\'altro genitore.', description_en: 'Enter your IBAN and choose whether to receive 100% of the amount or split it 50% with the other parent.', tip: 'Se scegli 100%, l\'altro genitore dovrà confermare la scelta accedendo con il suo SPID.', tip_en: 'If you choose 100%, the other parent will need to confirm by logging in with their SPID.' },
      { title: 'Attesa e accredito', title_en: 'Wait and payment', description: 'La domanda viene elaborata in 30-60 giorni. I pagamenti avvengono mensilmente (di solito dal 15 al 20 del mese).', description_en: 'The application is processed in 30-60 days. Payments are made monthly (usually between the 15th and 20th of the month).', tip: null }
    ],
    warnings: ['Spetta per ogni figlio minorenne a carico e per i maggiorenni fino a 21 anni se studiano o fanno tirocinio/servizio civile.'],
    warnings_en: ['It is granted for each minor dependent child and for adults up to 21 if studying or doing internships/civil service.'],
    relatedProcedures: ['isee', 'spid']
  },
  {
    id: 'successione',
    categoryId: 'fisco',
    title: 'Dichiarazione di Successione',
    title_en: 'Inheritance Declaration',
    subtitle: 'Adempimento fiscale per il trasferimento del patrimonio',
    subtitle_en: 'Tax obligation for estate transfer',
    difficulty: 'difficile',
    estimatedTime: 'Diversi mesi per raccolta documenti, ore per la compilazione',
    estimatedTime_en: 'Several months for document collection, hours for compilation',
    cost: 'Variabile (imposte catastali, ipotecarie, bolli, parcella CAF/notaio se delegato)',
    cost_en: 'Variable (cadastral and mortgage taxes, stamps, CAF/notary fee if delegated)',
    lastVerified: '2026-05-16',
    officialLinks: [
      { label: 'Agenzia Entrate - Dichiarazione di Successione', label_en: 'Revenue Agency - Inheritance Declaration', url: 'https://www.agenziaentrate.gov.it/portale/schede/pagamenti/imposta-di-registro' }
    ],
    documents: [
      'Certificato di morte',
      'Dichiarazione sostitutiva atto di notorietà degli eredi',
      'Dichiarazione bancaria/postale di sussistenza e consistenza di debiti/crediti',
      'Testamento (se presente)',
      'Dati catastali degli immobili'
    ],
    documents_en: [
      'Death certificate',
      'Substitute declaration of notoriety by the heirs',
      'Bank/postal declaration of existence and amount of debts/credits',
      'Will (if any)',
      'Cadastral data of properties'
    ],
    steps: [
      { title: 'Raccolta documenti e attestazioni', title_en: 'Collect documents and statements', description: 'Richiedi subito a banche e poste la dichiarazione di sussistenza del defunto. Ci possono volere settimane per ottenerla.', description_en: 'Immediately request the deceased\'s statement of assets from banks and post offices. It can take weeks to obtain.', tip: 'Inizia questa fase il prima possibile, in quanto blocca tutto il resto.', tip_en: 'Start this phase as early as possible, as it blocks everything else.' },
      { title: 'Calcolo dell\'Asse Ereditario', title_en: 'Calculate the estate', description: 'Somma il valore degli immobili, contanti, investimenti, al netto dei debiti per calcolare l\'attivo ereditario.', description_en: 'Add up the value of properties, cash, and investments, minus debts, to calculate the estate assets.', tip: null },
      { title: 'Invio telematico', title_en: 'Electronic submission', description: 'La dichiarazione si presenta esclusivamente online (tramite Desktop Telematico, CAF, notaio o professionista) entro 12 mesi dalla data del decesso.', description_en: 'The declaration is submitted exclusively online (via Desktop Telematico, CAF, notary, or professional) within 12 months of the date of death.', tip: 'È fortemente consigliato farsi assistere da un CAF, notaio o commercialista vista la complessità.', tip_en: 'It is strongly recommended to get assistance from a CAF, notary, or accountant due to the complexity.' },
      { title: 'Pagamento imposte', title_en: 'Tax payment', description: 'Prima o contestualmente all\'invio, dovrai pagare le imposte ipotecarie e catastali in autoliquidazione se ci sono immobili.', description_en: 'Before or at the time of submission, you must pay mortgage and cadastral taxes via self-assessment if there are properties.', tip: null },
      { title: 'Voltura catastale', title_en: 'Cadastral update', description: 'Se hai inserito immobili, la voltura catastale avviene in automatico (salvo casi particolari) a seguito della dichiarazione telematica.', description_en: 'If you included properties, the cadastral transfer happens automatically (except in special cases) following the electronic declaration.', tip: null }
    ],
    warnings: [
      'Va presentata entro 12 mesi dalla data di apertura della successione (generalmente la data del decesso).',
      'Se l\'eredità non include immobili e ha un valore inferiore a €100.000, e gli eredi sono coniuge o parenti in linea retta, non c\'è obbligo di dichiarazione.'
    ],
    warnings_en: [
      'Must be submitted within 12 months of the opening of the inheritance (usually the date of death).',
      'If the estate does not include real estate and is worth less than €100,000, and the heirs are the spouse or direct relatives, there is no obligation to declare.'
    ],
    relatedProcedures: ['isee', 'dichiarazione-redditi']
  }
];
