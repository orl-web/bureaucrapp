export const residenzaProcedures = [
  {
    id: 'residenza-iscrizione',
    categoryId: 'residenza',
    title: 'Iscrizione Anagrafica',
    title_en: 'Civil Registry Enrollment',
    subtitle: 'Registrazione della residenza al Comune',
    subtitle_en: 'Residence registration at the Municipality',
    difficulty: 'media',
    estimatedTime: '1-2 ore (pratica) + fino a 45 giorni (verifica)',
    estimatedTime_en: '1-2 hours (application) + up to 45 days (verification)',
    cost: 'Gratuito',
    cost_en: 'Free',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'ANPR — Portale Anagrafe', label_en: 'ANPR — Registry Portal', url: 'https://www.anpr.interno.it/' },
      { label: 'Ministero dell\'Interno', label_en: 'Ministry of Interior', url: 'https://www.interno.gov.it' }
    ],
    documents: [
      'Documento d\'identità valido',
      'Codice Fiscale',
      'Contratto di locazione registrato o dichiarazione di ospitalità',
      'Permesso di Soggiorno o ricevuta (per cittadini extra-UE)',
      'Modulo dichiarazione di residenza'
    ],
    documents_en: [
      'Valid ID document',
      'Tax Code',
      'Registered rental contract or hospitality declaration',
      'Residence Permit or receipt (for non-EU citizens)',
      'Residence declaration form'
    ],
    steps: [
      { title: 'Verifica i requisiti', title_en: 'Check requirements', description: 'Devi avere un indirizzo dove effettivamente abiti e un titolo che lo dimostri (contratto di affitto registrato, proprietà, o ospitalità).', description_en: 'You must have an address where you actually live and a title proving it (registered rental contract, property, or hospitality).', tip: 'Per i cittadini UE basta il documento d\'identità del paese d\'origine.', tip_en: 'For EU citizens, the ID document from the country of origin is sufficient.' },
      { title: 'Vai all\'Ufficio Anagrafe', title_en: 'Go to the Registry Office', description: 'Recati all\'Ufficio Anagrafe del Comune dove risiedi. Alcuni comuni permettono la richiesta online o via PEC.', description_en: 'Go to the Registry Office of the municipality where you live. Some municipalities allow online or PEC requests.', tip: 'Controlla il sito del tuo Comune specifico per le modalità accettate.', tip_en: 'Check your specific municipality\'s website for accepted methods.' },
      { title: 'Compila e presenta la dichiarazione', title_en: 'Fill in and submit the declaration', description: 'Compila il modulo di dichiarazione di residenza e consegnalo con tutti i documenti richiesti.', description_en: 'Fill in the residence declaration form and submit it with all required documents.', tip: null },
      { title: 'Attendi la verifica', title_en: 'Wait for verification', description: 'Il Comune ha fino a 45 giorni per verificare. Un vigile urbano potrebbe venire a controllare che abiti effettivamente all\'indirizzo dichiarato.', description_en: 'The municipality has up to 45 days to verify. A local police officer may come to check you actually live at the declared address.', tip: 'Se non sei in casa durante il controllo, il vigile lascerà un avviso.', tip_en: 'If you are not home during the check, the officer will leave a notice.' },
      { title: 'Conferma', title_en: 'Confirmation', description: 'Riceverai conferma dell\'iscrizione. Da questo momento potrai richiedere il certificato di residenza e la carta d\'identità.', description_en: 'You will receive confirmation of enrollment. From this point you can request your residence certificate and ID card.', tip: null }
    ],
    warnings: ['Senza residenza non puoi ottenere la CIE, iscriverti al SSN, o accedere a molti servizi locali.'],
    warnings_en: ['Without residence you cannot obtain CIE, enroll in the SSN, or access many local services.'],
    relatedProcedures: ['cie', 'cambio-residenza', 'tessera-sanitaria']
  },
  {
    id: 'cambio-residenza',
    categoryId: 'residenza',
    title: 'Cambio di Residenza',
    title_en: 'Change of Residence',
    subtitle: 'Trasferimento tra Comuni o all\'interno dello stesso Comune',
    subtitle_en: 'Transfer between municipalities or within the same municipality',
    difficulty: 'media',
    estimatedTime: '30 min (pratica) + fino a 45 giorni (verifica)',
    estimatedTime_en: '30 min (application) + up to 45 days (verification)',
    cost: 'Gratuito',
    cost_en: 'Free',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'ANPR — Cambio residenza online', label_en: 'ANPR — Change of residence online', url: 'https://www.anpr.interno.it/' }
    ],
    documents: [
      'Documento d\'identità valido',
      'Codice Fiscale',
      'Nuovo contratto di locazione registrato o titolo di proprietà',
      'Patente di guida (per aggiornamento indirizzo)',
      'Libretto di circolazione veicoli (per aggiornamento)'
    ],
    documents_en: [
      'Valid ID document',
      'Tax Code',
      'New registered rental contract or property title',
      'Driving license (for address update)',
      'Vehicle registration document (for update)'
    ],
    steps: [
      { title: 'Comunica il cambio', title_en: 'Notify the change', description: 'Entro 20 giorni dal trasferimento, presenta la dichiarazione di cambio residenza al nuovo Comune. È possibile farlo online tramite ANPR con SPID/CIE.', description_en: 'Within 20 days of moving, submit the change of residence declaration to the new municipality. It can be done online via ANPR with SPID/CIE.', tip: 'Il cambio online tramite ANPR è il metodo più rapido.', tip_en: 'The online change via ANPR is the fastest method.' },
      { title: 'Il nuovo Comune registra', title_en: 'The new municipality registers', description: 'Il nuovo Comune accetta la dichiarazione e comunica automaticamente al vecchio Comune la cancellazione.', description_en: 'The new municipality accepts the declaration and automatically notifies the old municipality of the cancellation.', tip: null },
      { title: 'Verifica dell\'indirizzo', title_en: 'Address verification', description: 'Come per la prima iscrizione, un vigile potrebbe verificare l\'effettiva abitazione.', description_en: 'As with the initial enrollment, an officer may verify your actual residence.', tip: null },
      { title: 'Aggiorna i documenti', title_en: 'Update your documents', description: 'Aggiorna la patente (comunicazione alla Motorizzazione), il libretto di circolazione e comunica il nuovo indirizzo a banca, utenze, ecc.', description_en: 'Update your driving license (notify the Motorization), vehicle registration, and inform your bank, utilities, etc. of the new address.', tip: 'La patente si aggiorna tramite il Portale dell\'Automobilista online.', tip_en: 'The driving license can be updated via the Motorist Portal online.' }
    ],
    warnings: ['Il cambio di residenza va comunicato entro 20 giorni dal trasferimento effettivo.'],
    warnings_en: ['The change of residence must be notified within 20 days of the actual move.'],
    relatedProcedures: ['residenza-iscrizione', 'certificati-anpr']
  },
  {
    id: 'certificati-anpr',
    categoryId: 'residenza',
    title: 'Certificati ANPR Online',
    title_en: 'Online ANPR Certificates',
    subtitle: 'Certificati anagrafici gratuiti dal portale nazionale',
    subtitle_en: 'Free registry certificates from the national portal',
    difficulty: 'facile',
    estimatedTime: '5-10 minuti',
    estimatedTime_en: '5-10 minutes',
    cost: 'Gratuito',
    cost_en: 'Free',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'ANPR — Richiedi certificati', label_en: 'ANPR — Request certificates', url: 'https://www.anpr.interno.it/' }
    ],
    documents: [
      'SPID o CIE (per l\'accesso al portale)'
    ],
    documents_en: [
      'SPID or CIE (to access the portal)'
    ],
    steps: [
      { title: 'Accedi al portale ANPR', title_en: 'Access the ANPR portal', description: 'Vai su anpr.interno.it e clicca su "Accedi ai Servizi del Cittadino". Autenticati con SPID o CIE.', description_en: 'Go to anpr.interno.it and click "Access Citizen Services". Log in with SPID or CIE.', tip: null },
      { title: 'Seleziona il certificato', title_en: 'Select the certificate', description: 'Scegli il tipo di certificato: nascita, matrimonio, residenza, stato di famiglia, cittadinanza, esistenza in vita, ecc.', description_en: 'Choose the type of certificate: birth, marriage, residence, family status, citizenship, proof of life, etc.', tip: 'Puoi richiedere certificati anche per i tuoi familiari conviventi.', tip_en: 'You can also request certificates for your cohabiting family members.' },
      { title: 'Scarica il certificato', title_en: 'Download the certificate', description: 'Il certificato viene generato immediatamente in formato PDF con codice di verifica. È valido a tutti gli effetti.', description_en: 'The certificate is generated immediately in PDF format with a verification code. It is fully valid.', tip: 'I certificati ANPR sono gratuiti e non richiedono marca da bollo per gli usi consentiti.', tip_en: 'ANPR certificates are free and do not require stamp duty for permitted uses.' }
    ],
    warnings: ['I certificati hanno validità 6 mesi dalla data di rilascio.'],
    warnings_en: ['Certificates are valid for 6 months from the date of issue.'],
    relatedProcedures: ['spid', 'cie', 'residenza-iscrizione']
  },
  {
    id: 'permesso-soggiorno',
    categoryId: 'residenza',
    title: 'Permesso di Soggiorno',
    title_en: 'Residence Permit',
    subtitle: 'Permesso per cittadini extra-UE',
    subtitle_en: 'Permit for non-EU citizens',
    difficulty: 'alta',
    estimatedTime: '2-3 ore (pratica) + settimane/mesi (rilascio)',
    estimatedTime_en: '2-3 hours (application) + weeks/months (issuance)',
    cost: '€40-€100 (contributo) + €16 marca da bollo + €30 spedizione postale',
    cost_en: '€40-€100 (fee) + €16 stamp duty + €30 postal shipping',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Polizia di Stato — Immigrazione', label_en: 'State Police — Immigration', url: 'https://www.poliziadistato.it/articolo/10698/' },
      { label: 'Portale Immigrazione', label_en: 'Immigration Portal', url: 'https://www.portaleimmigrazione.it/' }
    ],
    documents: [
      'Passaporto con visto d\'ingresso',
      'Fotocopia di tutte le pagine del passaporto',
      '4 foto formato tessera',
      'Marca da bollo da €16',
      'Prova del motivo di soggiorno (contratto lavoro, iscrizione università, ecc.)',
      'Prova di alloggio',
      'Prova di mezzi economici sufficienti'
    ],
    documents_en: [
      'Passport with entry visa',
      'Photocopy of all passport pages',
      '4 passport photos',
      '€16 stamp duty',
      'Proof of reason for stay (employment contract, university enrollment, etc.)',
      'Proof of accommodation',
      'Proof of sufficient financial means'
    ],
    steps: [
      { title: 'Vai alle Poste Italiane', title_en: 'Go to the Post Office', description: 'Entro 8 giorni lavorativi dall\'ingresso, recati a un ufficio postale con "Sportello Amico" e ritira il kit per il permesso di soggiorno (busta gialla).', description_en: 'Within 8 working days of entry, go to a post office with "Sportello Amico" and collect the residence permit kit (yellow envelope).', tip: 'Non tutti gli uffici postali hanno lo Sportello Amico: verifica online.', tip_en: 'Not all post offices have Sportello Amico: check online.' },
      { title: 'Compila il kit', title_en: 'Fill in the kit', description: 'Compila i moduli contenuti nel kit con i tuoi dati personali e il motivo del soggiorno.', description_en: 'Fill in the forms in the kit with your personal details and reason for stay.', tip: 'Fatti aiutare da un patronato (CGIL, CISL, UIL) se hai dubbi sulla compilazione. Il servizio è gratuito.', tip_en: 'Get help from a patronato (CGIL, CISL, UIL) if you have doubts. The service is free.' },
      { title: 'Spedisci il kit', title_en: 'Send the kit', description: 'Torna alle Poste, consegna il kit compilato con tutti gli allegati. Paga il bollettino postale. Riceverai una ricevuta con appuntamento in Questura.', description_en: 'Return to the Post Office, submit the completed kit with all attachments, pay the postal fee. You will receive a receipt with a Police HQ appointment.', tip: '⚠️ CONSERVA LA RICEVUTA: è la tua prova di soggiorno legale mentre attendi il permesso.', tip_en: '⚠️ KEEP THE RECEIPT: it is your proof of legal stay while waiting for the permit.' },
      { title: 'Appuntamento in Questura', title_en: 'Police HQ appointment', description: 'Presentati alla Questura nella data indicata per il fotosegnalamento (impronte digitali e foto).', description_en: 'Go to the Police Headquarters on the scheduled date for fingerprinting and photo.', tip: null },
      { title: 'Ritira il permesso', title_en: 'Collect the permit', description: 'Quando il permesso è pronto, riceverai un SMS. Torna in Questura per il ritiro.', description_en: 'When the permit is ready, you will receive an SMS. Return to the Police HQ to collect it.', tip: 'I tempi di rilascio variano molto: da settimane a diversi mesi.', tip_en: 'Processing times vary greatly: from weeks to several months.' }
    ],
    warnings: [
      'La richiesta va fatta entro 8 GIORNI LAVORATIVI dall\'ingresso in Italia.',
      'La ricevuta postale è valida come documento di soggiorno temporaneo.'
    ],
    warnings_en: [
      'The application must be made within 8 WORKING DAYS of entering Italy.',
      'The post office receipt is valid as a temporary residence document.'
    ],
    relatedProcedures: ['codice-fiscale', 'residenza-iscrizione']
  },
  {
    id: 'ricongiungimento',
    categoryId: 'residenza',
    title: 'Ricongiungimento Familiare',
    title_en: 'Family Reunification',
    subtitle: 'Riunirsi con i familiari in Italia',
    subtitle_en: 'Reuniting with family members in Italy',
    difficulty: 'alta',
    estimatedTime: 'Diversi mesi',
    estimatedTime_en: 'Several months',
    cost: 'Variabile (diritti, traduzioni, visti)',
    cost_en: 'Variable (fees, translations, visas)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Ministero dell\'Interno — Ricongiungimento', label_en: 'Ministry of Interior — Family Reunification', url: 'https://www.interno.gov.it/it/temi/immigrazione-e-asilo' },
      { label: 'Sportello Unico Immigrazione', label_en: 'Single Immigration Desk', url: 'https://www.portaleimmigrazione.it/' }
    ],
    documents: [
      'Permesso di soggiorno valido (almeno 1 anno)',
      'Prova di reddito minimo (secondo tabelle INPS)',
      'Certificato di idoneità alloggiativa (dal Comune)',
      'Certificati di parentela (tradotti e legalizzati)',
      'Passaporti di tutti i familiari'
    ],
    documents_en: [
      'Valid residence permit (at least 1 year)',
      'Proof of minimum income (according to INPS tables)',
      'Certificate of housing suitability (from the municipality)',
      'Relationship certificates (translated and legalized)',
      'Passports of all family members'
    ],
    steps: [
      { title: 'Verifica i requisiti', title_en: 'Check requirements', description: 'Devi avere un permesso di soggiorno di almeno 1 anno, un reddito minimo adeguato e un alloggio idoneo.', description_en: 'You must have a residence permit of at least 1 year, adequate minimum income, and suitable housing.', tip: 'Il reddito minimo dipende dal numero di familiari da ricongiungere.', tip_en: 'The minimum income depends on the number of family members to reunite.' },
      { title: 'Presenta la domanda online', title_en: 'Submit the application online', description: 'Accedi al Portale Immigrazione e compila la domanda di nulla osta al ricongiungimento familiare.', description_en: 'Access the Immigration Portal and fill in the application for a nulla osta for family reunification.', tip: null },
      { title: 'Appuntamento allo Sportello Unico', title_en: 'Appointment at the Single Desk', description: 'Riceverai una convocazione presso lo Sportello Unico per l\'Immigrazione della tua Prefettura.', description_en: 'You will receive a summons to the Single Immigration Desk at your Prefecture.', tip: null },
      { title: 'Rilascio del nulla osta', title_en: 'Issuance of nulla osta', description: 'Se la pratica è positiva, lo Sportello Unico rilascerà il nulla osta e lo invierà al Consolato italiano nel paese del familiare.', description_en: 'If the application is successful, the Single Desk will issue the nulla osta and send it to the Italian Consulate in the family member\'s country.', tip: 'I tempi variano: da 3 a 6 mesi o più.', tip_en: 'Times vary: from 3 to 6 months or more.' },
      { title: 'Visto e ingresso', title_en: 'Visa and entry', description: 'Il familiare richiede il visto al Consolato italiano e, una volta in Italia, avvia la procedura per il proprio permesso di soggiorno.', description_en: 'The family member applies for a visa at the Italian Consulate and, once in Italy, starts the procedure for their own residence permit.', tip: null }
    ],
    warnings: ['Procedura lunga e complessa: è consigliato l\'aiuto di un patronato o avvocato specializzato.'],
    warnings_en: ['Long and complex procedure: help from a patronato or specialized lawyer is recommended.'],
    relatedProcedures: ['permesso-soggiorno', 'residenza-iscrizione']
  }
];
