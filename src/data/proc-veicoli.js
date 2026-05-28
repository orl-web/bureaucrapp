export const veicoliProcedures = [
  {
    id: 'patente-guida',
    categoryId: 'veicoli',
    title: 'Patente di Guida',
    title_en: 'Driving License',
    subtitle: 'Rilascio, rinnovo e conversione',
    subtitle_en: 'Issuance, renewal and conversion',
    difficulty: 'media',
    estimatedTime: 'Variabile (da 1 mese a 6 mesi per il rilascio)',
    estimatedTime_en: 'Variable (from 1 month to 6 months for issuance)',
    cost: '€100-€1.000+ (autoscuola, esami, bolli)',
    cost_en: '€100-€1,000+ (driving school, exams, stamps)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Portale dell\'Automobilista', label_en: 'Motorist Portal', url: 'https://www.ilportaledellautomobilista.it/' },
      { label: 'Motorizzazione Civile', label_en: 'Civil Motorization', url: 'https://www.ilportaledellautomobilista.it/web/portale-automobilista/patenti' }
    ],
    documents: ['Documento d\'identità', 'Codice Fiscale', 'Certificato medico di idoneità', '2 foto formato tessera', 'Permesso di soggiorno (per extra-UE)', 'Versamenti su c/c postale (bollettini)'],
    documents_en: ['ID document', 'Tax Code', 'Medical fitness certificate', '2 passport photos', 'Residence permit (for non-EU)', 'Postal account payments (slips)'],
    steps: [
      { title: 'Iscrizione', title_en: 'Registration', description: 'Iscriviti presso un\'autoscuola o come privatista alla Motorizzazione Civile. Paga i bollettini richiesti.', description_en: 'Register at a driving school or as a private candidate at the Civil Motorization. Pay the required postal slips.', tip: 'Da privatista risparmi ma devi organizzare tutto da solo.', tip_en: 'As a private candidate you save money but have to organize everything yourself.' },
      { title: 'Visita medica', title_en: 'Medical examination', description: 'Ottieni il certificato medico presso la ASL, un medico militare, o un medico autorizzato dalla Motorizzazione.', description_en: 'Get the medical certificate from the ASL, a military doctor, or a doctor authorized by the Motorization.', tip: 'Il certificato medico costa circa €30-€50 alla ASL.', tip_en: 'The medical certificate costs about €30-€50 at the ASL.' },
      { title: 'Esame di teoria', title_en: 'Theory exam', description: 'Prepara e sostieni l\'esame teorico (quiz a risposta multipla). Hai 6 mesi di tempo e 2 tentativi dal rilascio del foglio rosa.', description_en: 'Prepare and take the theory exam (multiple choice quiz). You have 6 months and 2 attempts from the issuance of the pink slip.', tip: 'Le app come QuizPatente sono utili per esercitarsi.', tip_en: 'Apps like QuizPatente are useful for practice.' },
      { title: 'Foglio rosa e guide', title_en: 'Pink slip and driving practice', description: 'Superato il quiz, ricevi il foglio rosa. Effettua le guide obbligatorie (almeno 6 ore con l\'autoscuola per la patente B).', description_en: 'After passing the quiz, you receive the pink slip. Complete the mandatory driving lessons (at least 6 hours with a driving school for category B).', tip: null },
      { title: 'Esame pratico', title_en: 'Practical exam', description: 'Sostieni l\'esame pratico di guida. Hai 11 mesi dal foglio rosa e 2 tentativi.', description_en: 'Take the practical driving test. You have 11 months from the pink slip and 2 attempts.', tip: null },
      { title: 'Rinnovo', title_en: 'Renewal', description: 'La patente B si rinnova ogni 10 anni fino a 50 anni, poi ogni 5 anni (50-70), ogni 3 anni (70-80), ogni 2 anni (80+). Serve visita medica.', description_en: 'Category B license is renewed every 10 years up to age 50, then every 5 years (50-70), every 3 years (70-80), every 2 years (80+). A medical exam is required.', tip: 'Il rinnovo si fa presso ASL, ACI, autoscuole abilitate o medici autorizzati.', tip_en: 'Renewal can be done at ASL, ACI, authorized driving schools, or authorized doctors.' }
    ],
    warnings: ['La patente di paesi extra-UE va convertita entro 1 anno dalla residenza in Italia (se esiste accordo bilaterale).'],
    warnings_en: ['Non-EU country licenses must be converted within 1 year of residence in Italy (if a bilateral agreement exists).'],
    relatedProcedures: ['bollo-auto', 'passaggio-proprieta']
  },
  {
    id: 'bollo-auto',
    categoryId: 'veicoli',
    title: 'Bollo Auto',
    title_en: 'Car Tax',
    subtitle: 'Tassa automobilistica regionale',
    subtitle_en: 'Regional vehicle tax',
    difficulty: 'facile',
    estimatedTime: '10-15 minuti',
    estimatedTime_en: '10-15 minutes',
    cost: 'Variabile (dipende da kW e regione)',
    cost_en: 'Variable (depends on kW and region)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'ACI — Calcolo Bollo', label_en: 'ACI — Tax Calculator', url: 'https://www.aci.it/i-servizi/guide-utili/guida-al-bollo-auto.html' },
      { label: 'PagoPA', label_en: 'PagoPA', url: 'https://www.pagopa.gov.it/' }
    ],
    documents: ['Libretto di circolazione (carta di circolazione)', 'Codice Fiscale'],
    documents_en: ['Vehicle registration document', 'Tax Code'],
    steps: [
      { title: 'Calcola l\'importo', title_en: 'Calculate the amount', description: 'Usa il calcolatore ACI online inserendo la targa del veicolo. L\'importo dipende dalla potenza (kW) e dalla classe ambientale.', description_en: 'Use the online ACI calculator by entering the vehicle license plate. The amount depends on power (kW) and environmental class.', tip: 'I veicoli elettrici sono esenti per i primi 5 anni in molte regioni.', tip_en: 'Electric vehicles are exempt for the first 5 years in many regions.' },
      { title: 'Verifica la scadenza', title_en: 'Check the deadline', description: 'Il bollo va pagato entro l\'ultimo giorno del mese successivo alla scadenza. Verifica la tua scadenza sul sito ACI.', description_en: 'The tax must be paid by the last day of the month following expiry. Check your expiry date on the ACI website.', tip: null },
      { title: 'Paga', title_en: 'Pay', description: 'Puoi pagare tramite: PagoPA, sito ACI, banca, tabaccheria, Poste Italiane, home banking.', description_en: 'You can pay via: PagoPA, ACI website, bank, tobacco shop, Post Office, home banking.', tip: 'PagoPA è il metodo più comodo: puoi pagare anche dall\'app IO.', tip_en: 'PagoPA is the most convenient method: you can also pay via the IO app.' }
    ],
    warnings: ['Il mancato pagamento del bollo comporta sanzioni crescenti e, dopo 3 anni, la possibile radiazione del veicolo.'],
    warnings_en: ['Failure to pay the car tax results in increasing penalties and, after 3 years, possible vehicle deregistration.'],
    relatedProcedures: ['patente-guida', 'revisione']
  },
  {
    id: 'passaggio-proprieta',
    categoryId: 'veicoli',
    title: 'Passaggio di Proprietà',
    title_en: 'Change of Ownership',
    subtitle: 'Trasferimento di proprietà di un veicolo',
    subtitle_en: 'Vehicle ownership transfer',
    difficulty: 'media',
    estimatedTime: '1-3 giorni',
    estimatedTime_en: '1-3 days',
    cost: '€250-€400 (ACI/PRA + Motorizzazione)',
    cost_en: '€250-€400 (ACI/PRA + Motorization)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'ACI — Passaggio proprietà', label_en: 'ACI — Change of ownership', url: 'https://www.aci.it/i-servizi/guide-utili/guida-al-passaggio-di-proprieta.html' },
      { label: 'Sportello Telematico dell\'Automobilista', label_en: 'Motorist Electronic Desk', url: 'https://www.ilportaledellautomobilista.it/' }
    ],
    documents: ['Certificato di proprietà (CDP) digitale', 'Carta di circolazione', 'Documento d\'identità di venditore e acquirente', 'Codice Fiscale di entrambi', 'Atto di vendita autenticato'],
    documents_en: ['Digital Certificate of Ownership (CDP)', 'Vehicle registration document', 'ID document of seller and buyer', 'Tax Code of both parties', 'Authenticated deed of sale'],
    steps: [
      { title: 'Autentica la firma', title_en: 'Authenticate the signature', description: 'L\'atto di vendita sul retro del Certificato di Proprietà deve essere firmato dal venditore con firma autenticata (dal notaio, dal Comune o dallo STA).', description_en: 'The deed of sale on the back of the Certificate of Ownership must be signed by the seller with an authenticated signature (by a notary, municipality, or STA).', tip: 'Lo Sportello Telematico dell\'Automobilista (STA) presso le agenzie di pratiche auto è il modo più rapido.', tip_en: 'The Motorist Electronic Desk (STA) at car practice agencies is the fastest way.' },
      { title: 'Recati allo STA', title_en: 'Go to the STA', description: 'Porta tutta la documentazione allo Sportello Telematico dell\'Automobilista (presente in agenzie ACI, agenzie pratiche auto).', description_en: 'Take all documentation to the Motorist Electronic Desk (available at ACI agencies, car practice agencies).', tip: null },
      { title: 'Paga i costi', title_en: 'Pay the costs', description: 'I costi includono: emolumenti ACI, IPT (Imposta Provinciale di Trascrizione), diritti Motorizzazione, bolli.', description_en: 'Costs include: ACI fees, IPT (Provincial Transfer Tax), Motorization fees, stamps.', tip: 'L\'IPT varia per provincia e per la potenza del veicolo. Può essere la voce più alta.', tip_en: 'IPT varies by province and vehicle power. It can be the highest cost item.' },
      { title: 'Ricevi i nuovi documenti', title_en: 'Receive new documents', description: 'Riceverai il nuovo Certificato di Proprietà digitale e la carta di circolazione aggiornata.', description_en: 'You will receive the new digital Certificate of Ownership and updated vehicle registration document.', tip: null }
    ],
    warnings: ['Il passaggio va effettuato entro 60 giorni dall\'atto di vendita, pena sanzioni.', 'Verifica sempre che il veicolo non abbia fermi amministrativi o ipoteche consultando il PRA.'],
    warnings_en: ['The transfer must be done within 60 days of the deed of sale, otherwise penalties apply.', 'Always check that the vehicle has no administrative freezes or mortgages by consulting the PRA.'],
    relatedProcedures: ['bollo-auto', 'revisione']
  },
  {
    id: 'revisione',
    categoryId: 'veicoli',
    title: 'Revisione Veicolo',
    title_en: 'Vehicle Inspection',
    subtitle: 'Controllo periodico obbligatorio',
    subtitle_en: 'Mandatory periodic check',
    difficulty: 'facile',
    estimatedTime: '30-60 minuti',
    estimatedTime_en: '30-60 minutes',
    cost: '€45 (Motorizzazione) o €65-€80 (centro autorizzato)',
    cost_en: '€45 (Motorization) or €65-€80 (authorized center)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Portale dell\'Automobilista — Revisione', label_en: 'Motorist Portal — Inspection', url: 'https://www.ilportaledellautomobilista.it/' }
    ],
    documents: ['Carta di circolazione', 'Certificato di assicurazione valido'],
    documents_en: ['Vehicle registration document', 'Valid insurance certificate'],
    steps: [
      { title: 'Verifica la scadenza', title_en: 'Check expiry', description: 'La prima revisione va fatta dopo 4 anni dall\'immatricolazione, poi ogni 2 anni. Puoi verificare la scadenza sul Portale dell\'Automobilista.', description_en: 'The first inspection must be done 4 years after registration, then every 2 years. You can check the expiry on the Motorist Portal.', tip: null },
      { title: 'Prenota', title_en: 'Book', description: 'Prenota presso la Motorizzazione Civile (più economico) o un centro revisioni autorizzato (più rapido).', description_en: 'Book at the Civil Motorization (cheaper) or an authorized inspection center (faster).', tip: 'I centri autorizzati sono generalmente più rapidi e flessibili con gli orari.', tip_en: 'Authorized centers are generally faster and more flexible with hours.' },
      { title: 'Porta il veicolo', title_en: 'Bring the vehicle', description: 'Presentati con il veicolo, la carta di circolazione e il certificato di assicurazione valido.', description_en: 'Show up with the vehicle, registration document, and valid insurance certificate.', tip: 'Assicurati che luci, freni, pneumatici e scarico siano in ordine prima della revisione.', tip_en: 'Make sure lights, brakes, tires, and exhaust are in order before the inspection.' },
      { title: 'Esito', title_en: 'Result', description: 'La revisione può essere: regolare (superata), ripetere (da rifare entro 1 mese per difetti lievi), sospesa (difetti gravi, il veicolo non può circolare fino alla riparazione).', description_en: 'The inspection result can be: passed, retest (to be redone within 1 month for minor defects), or failed (serious defects, vehicle cannot be driven until repaired).', tip: null }
    ],
    warnings: ['Circolare con revisione scaduta comporta una multa da €173 a €695 e il ritiro della carta di circolazione.'],
    warnings_en: ['Driving with an expired inspection results in a fine from €173 to €695 and withdrawal of the registration document.'],
    relatedProcedures: ['bollo-auto', 'passaggio-proprieta']
  },
  {
    id: 'iscrizione-asi',
    categoryId: 'veicoli',
    title: 'Iscrizione A.S.I.',
    title_en: 'ASI Registration',
    subtitle: 'Registrazione veicolo storico (Automotoclub Storico Italiano)',
    subtitle_en: 'Historic vehicle registration (Italian Historic Automotoclub)',
    difficulty: 'media',
    estimatedTime: '2-4 mesi',
    estimatedTime_en: '2-4 months',
    cost: '€100-€150 (quota annuale club + ASI)',
    cost_en: '€100-€150 (annual club + ASI fee)',
    lastVerified: '2026-05-16',
    officialLinks: [
      { label: 'Sito Ufficiale ASI', label_en: 'Official ASI Website', url: 'https://www.asifed.it/' }
    ],
    documents: [
      'Libretto di circolazione', 
      'Documento d\'identità', 
      'Codice Fiscale', 
      'Foto del veicolo (secondo standard ASI: 3/4 ant, 3/4 post, interni, motore, telaio)', 
      'Certificato di proprietà'
    ],
    documents_en: [
      'Vehicle registration document',
      'ID document',
      'Tax Code',
      'Vehicle photos (per ASI standard: front 3/4, rear 3/4, interior, engine, chassis)',
      'Certificate of ownership'
    ],
    steps: [
      { title: 'Iscrizione a un Club federato', title_en: 'Join a federated Club', description: 'Per iscriverti all\'ASI devi prima iscriverti a un club di veicoli storici federato ASI della tua zona.', description_en: 'To join ASI you must first join an ASI-federated historic vehicle club in your area.', tip: 'Le quote variano da club a club, ma solitamente includono già la quota ASI nazionale.', tip_en: 'Fees vary by club but usually already include the national ASI fee.' },
      { title: 'Preparazione foto', title_en: 'Photo preparation', description: 'Scatta le foto richieste del veicolo (3/4 anteriore, 3/4 posteriore, interni, motore, punzonatura numero di telaio).', description_en: 'Take the required photos of the vehicle (front 3/4, rear 3/4, interior, engine, chassis number stamping).', tip: 'Le foto devono essere nitide; il veicolo deve essere pulito e fotografato su sfondo neutro.', tip_en: 'Photos must be sharp; the vehicle must be clean and photographed against a neutral background.' },
      { title: 'Compilazione modulistica', title_en: 'Fill in forms', description: 'Compila i moduli per la richiesta del Certificato di Rilevanza Storica (CRS) forniti dal club.', description_en: 'Fill in the forms for the Certificate of Historical Relevance (CRS) provided by the club.', tip: 'Puoi richiedere assistenza alla segreteria del club per la compilazione corretta.', tip_en: 'You can ask the club secretary for assistance with correct completion.' },
      { title: 'Verifica tecnica', title_en: 'Technical verification', description: 'Il Commissario Tecnico di Club verificherà lo stato di conservazione del veicolo e la sua originalità.', description_en: 'The Club Technical Commissioner will verify the vehicle\'s state of preservation and originality.', tip: 'L\'auto deve essere in buone condizioni e conforme all\'originale (no modifiche non dell\'epoca).', tip_en: 'The car must be in good condition and true to the original (no period-incorrect modifications).' },
      { title: 'Attesa e rilascio', title_en: 'Wait and issuance', description: 'Il club invia la pratica all\'ASI. L\'attesa per il rilascio del CRS (Certificato di Rilevanza Storica) può variare da 2 a 4 mesi.', description_en: 'The club sends the application to ASI. The wait for the CRS (Certificate of Historical Relevance) can vary from 2 to 4 months.', tip: null }
    ],
    warnings: [
      'Il veicolo deve avere almeno 20 anni compiuti dalla data di costruzione o di prima immatricolazione.', 
      'Senza il CRS non si possono ottenere le agevolazioni fiscali su bollo e assicurazione previste per i veicoli storici.'
    ],
    warnings_en: [
      'The vehicle must be at least 20 years old from the date of construction or first registration.',
      'Without the CRS, you cannot obtain the tax benefits on car tax and insurance provided for historic vehicles.'
    ],
    relatedProcedures: ['bollo-auto', 'passaggio-proprieta']
  }
];
