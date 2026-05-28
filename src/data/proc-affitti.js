export const affittiProcedures = [
  {
    id: 'contratto-locazione',
    categoryId: 'affitti',
    title: 'Contratto di Locazione',
    title_en: 'Rental Contract',
    subtitle: 'Tipologie e stipula del contratto di affitto',
    subtitle_en: 'Types and signing of rental contracts',
    difficulty: 'media',
    estimatedTime: '1-2 ore',
    estimatedTime_en: '1-2 hours',
    cost: '€67 (imposta di registro prima annualità per canone libero) + €16 marca da bollo ogni 100 righe',
    cost_en: '€67 (registration tax for first year at free rent) + €16 stamp duty every 100 lines',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Agenzia Entrate — Locazioni', label_en: 'Revenue Agency — Rentals', url: 'https://www.agenziaentrate.gov.it/portale/schede/pagamenti/imposta-di-registro/registrazione-contratti-di-locazione-fabbricati-e-affitto-terreni' },
      { label: 'Modello RLI', label_en: 'Form RLI', url: 'https://www.agenziaentrate.gov.it/portale/schede/pagamenti/imposta-di-registro/registrazione-contratti-di-locazione-fabbricati-e-affitto-terreni' }
    ],
    documents: ['Documento d\'identità di locatore e conduttore', 'Codice Fiscale di entrambi', 'Dati catastali dell\'immobile', 'APE — Attestato di Prestazione Energetica valido', 'Permesso di soggiorno (per extra-UE)'],
    documents_en: ['ID document of landlord and tenant', 'Tax Code of both parties', 'Cadastral data of the property', 'Valid EPC — Energy Performance Certificate', 'Residence permit (for non-EU)'],
    steps: [
      { title: 'Scegli il tipo di contratto', title_en: 'Choose the contract type', description: 'Principali tipologie: Canone Libero (4+4 anni), Canone Concordato (3+2 anni), Transitorio (1-18 mesi), Studenti Universitari (6-36 mesi).', description_en: 'Main types: Free Market (4+4 years), Agreed Rent (3+2 years), Temporary (1-18 months), University Students (6-36 months).', tip: 'Il contratto a canone concordato offre vantaggi fiscali sia al locatore che al conduttore.', tip_en: 'The agreed rent contract offers tax benefits to both the landlord and tenant.' },
      { title: 'Redigi il contratto', title_en: 'Draft the contract', description: 'Il contratto deve contenere: dati delle parti, descrizione immobile, canone, durata, deposito cauzionale, ripartizione spese. Deve essere allegato l\'APE.', description_en: 'The contract must include: parties\' details, property description, rent, duration, security deposit, expense allocation. The EPC must be attached.', tip: 'Usa i modelli tipo approvati dal Ministero per i contratti concordati.', tip_en: 'Use the standard forms approved by the Ministry for agreed rent contracts.' },
      { title: 'Firma e registrazione', title_en: 'Signing and registration', description: 'Entrambe le parti firmano. Il contratto va registrato entro 30 giorni dalla firma.', description_en: 'Both parties sign. The contract must be registered within 30 days of signing.', tip: null },
      { title: 'Comunica alla Questura', title_en: 'Notify the Police HQ', description: 'Il locatore deve comunicare il contratto alla Questura entro 48 ore se l\'inquilino è cittadino extra-UE (obbligo per tutti gli ospitanti di stranieri).', description_en: 'The landlord must notify the Police headquarters within 48 hours if the tenant is a non-EU citizen (obligation for all hosts of foreigners).', tip: null }
    ],
    warnings: ['L\'APE (Attestato di Prestazione Energetica) è OBBLIGATORIO come allegato del contratto.', 'Affittare senza contratto registrato è illegale e comporta pesanti sanzioni.'],
    warnings_en: ['The EPC (Energy Performance Certificate) is MANDATORY as an attachment to the contract.', 'Renting without a registered contract is illegal and carries heavy penalties.'],
    relatedProcedures: ['registrazione-contratto', 'cedolare-secca', 'deposito-cauzionale']
  },
  {
    id: 'registrazione-contratto',
    categoryId: 'affitti',
    title: 'Registrazione del Contratto',
    title_en: 'Contract Registration',
    subtitle: 'Registrazione presso l\'Agenzia delle Entrate',
    subtitle_en: 'Registration at the Revenue Agency',
    difficulty: 'media',
    estimatedTime: '30 minuti (online) o 1 ora (in ufficio)',
    estimatedTime_en: '30 minutes (online) or 1 hour (in person)',
    cost: '2% del canone annuo (imposta di registro, 50% ciascuna parte) oppure Cedolare Secca (nessuna imposta di registro)',
    cost_en: '2% of annual rent (registration tax, 50% each party) or Flat-rate tax (no registration tax)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Agenzia Entrate — RLI Web', label_en: 'Revenue Agency — RLI Web', url: 'https://www.agenziaentrate.gov.it/portale/schede/pagamenti/imposta-di-registro/registrazione-contratti-di-locazione-fabbricati-e-affitto-terreni' },
      { label: 'Software RLI desktop', label_en: 'RLI desktop software', url: 'https://www.agenziaentrate.gov.it/portale/schede/pagamenti/imposta-di-registro/registrazione-contratti-di-locazione-fabbricati-e-affitto-terreni' }
    ],
    documents: ['Modello RLI compilato', 'Copia del contratto firmato', 'Marche da bollo da €16 (se non in cedolare secca)', 'Ricevuta di pagamento imposta di registro (Modello F24 ELIDE)'],
    documents_en: ['Completed form RLI', 'Copy of signed contract', '€16 stamp duties (if not using flat-rate tax)', 'Receipt of registration tax payment (Form F24 ELIDE)'],
    steps: [
      { title: 'Compila il Modello RLI', title_en: 'Fill in Form RLI', description: 'Il Modello RLI (Registrazione Locazioni Immobiliari) va compilato con i dati del contratto, delle parti e dell\'immobile.', description_en: 'Form RLI (Real Estate Rental Registration) must be filled in with the contract, parties, and property details.', tip: null },
      { title: 'Paga l\'imposta', title_en: 'Pay the tax', description: 'Se non opti per la cedolare secca, paga l\'imposta di registro (2% del canone annuo, minimo €67) tramite Modello F24 ELIDE.', description_en: 'If you don\'t opt for the flat-rate tax, pay the registration tax (2% of annual rent, minimum €67) via Form F24 ELIDE.', tip: 'Con la cedolare secca non si pagano né imposta di registro né marca da bollo.', tip_en: 'With the flat-rate tax, neither registration tax nor stamp duty is paid.' },
      { title: 'Invia telematicamente', title_en: 'Submit electronically', description: 'Puoi registrare online tramite RLI Web (con SPID/CIE) o il software RLI desktop. In alternativa, recati in un ufficio dell\'Agenzia Entrate.', description_en: 'You can register online via RLI Web (with SPID/CIE) or the RLI desktop software. Alternatively, go to a Revenue Agency office.', tip: 'La registrazione online è il metodo più rapido e non richiede appuntamento.', tip_en: 'Online registration is the fastest method and does not require an appointment.' },
      { title: 'Conserva la ricevuta', title_en: 'Keep the receipt', description: 'Dopo la registrazione riceverai il numero di registrazione e la data. Conserva tutto per tutta la durata del contratto + 5 anni.', description_en: 'After registration you will receive the registration number and date. Keep everything for the entire contract duration + 5 years.', tip: null }
    ],
    warnings: ['Il contratto va registrato entro 30 GIORNI dalla firma.', 'La mancata registrazione rende il contratto nullo e comporta sanzioni.'],
    warnings_en: ['The contract must be registered within 30 DAYS of signing.', 'Failure to register makes the contract null and carries penalties.'],
    relatedProcedures: ['contratto-locazione', 'cedolare-secca']
  },
  {
    id: 'cedolare-secca',
    categoryId: 'affitti',
    title: 'Cedolare Secca',
    title_en: 'Flat-rate Tax (Cedolare Secca)',
    subtitle: 'Regime fiscale agevolato per locazioni',
    subtitle_en: 'Tax-advantaged regime for rentals',
    difficulty: 'facile',
    estimatedTime: '15 minuti (opzione in fase di registrazione)',
    estimatedTime_en: '15 minutes (option at registration time)',
    cost: '21% del canone (canone libero) o 10% (canone concordato)',
    cost_en: '21% of rent (free market) or 10% (agreed rent)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Agenzia Entrate — Cedolare Secca', label_en: 'Revenue Agency — Flat-rate Tax', url: 'https://www.agenziaentrate.gov.it/portale/schede/fabbricatiterreni/registrazione-di-un-nuovo-contratto/quanto-si-paga-regime-ordinario' }
    ],
    documents: ['Modello RLI con opzione cedolare secca', 'Raccomandata all\'inquilino (rinuncia aggiornamenti ISTAT)'],
    documents_en: ['Form RLI with flat-rate tax option', 'Registered letter to tenant (waiving ISTAT adjustments)'],
    steps: [
      { title: 'Verifica i requisiti', title_en: 'Check requirements', description: 'La cedolare secca è disponibile per locazioni ad uso abitativo di persone fisiche (non imprese). L\'immobile deve essere in categoria catastale A (escluso A/10).', description_en: 'The flat-rate tax is available for residential rentals by individuals (not companies). The property must be in cadastral category A (excluding A/10).', tip: null },
      { title: 'Esercita l\'opzione', title_en: 'Exercise the option', description: 'Puoi scegliere la cedolare secca al momento della registrazione del contratto (nel Modello RLI) o in dichiarazione dei redditi.', description_en: 'You can choose the flat-rate tax at the time of contract registration (in Form RLI) or in your tax return.', tip: 'Con la cedolare secca rinunci agli aggiornamenti ISTAT del canone.', tip_en: 'With the flat-rate tax you waive ISTAT rent adjustments.' },
      { title: 'Comunica all\'inquilino', title_en: 'Notify the tenant', description: 'Invia una raccomandata all\'inquilino comunicando la rinuncia agli aggiornamenti ISTAT del canone.', description_en: 'Send a registered letter to the tenant notifying the waiver of ISTAT rent adjustments.', tip: null },
      { title: 'Paga in dichiarazione', title_en: 'Pay in your tax return', description: 'L\'imposta sostitutiva (21% o 10%) si paga con la dichiarazione dei redditi, con acconto e saldo come l\'IRPEF.', description_en: 'The substitute tax (21% or 10%) is paid with your tax return, with advance and balance like IRPEF.', tip: null }
    ],
    warnings: ['Dal 2024: per gli affitti brevi, l\'aliquota sale al 26% dal secondo immobile in poi.', 'La cedolare secca sostituisce IRPEF, addizionali, imposta di registro e bollo sul contratto.'],
    warnings_en: ['From 2024: for short-term rentals, the rate rises to 26% from the second property onwards.', 'The flat-rate tax replaces IRPEF, surcharges, registration tax, and stamp duty on the contract.'],
    relatedProcedures: ['registrazione-contratto', 'dichiarazione-redditi', 'contratto-locazione']
  },
  {
    id: 'deposito-cauzionale',
    categoryId: 'affitti',
    title: 'Deposito Cauzionale',
    title_en: 'Security Deposit',
    subtitle: 'Cauzione, limiti e restituzione',
    subtitle_en: 'Deposit, limits and refund',
    difficulty: 'facile',
    estimatedTime: '—',
    estimatedTime_en: '—',
    cost: 'Max 3 mensilità di canone',
    cost_en: 'Max 3 months\' rent',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'Art. 11 L. 392/1978', label_en: 'Art. 11 Law 392/1978', url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1978-07-27;392' }
    ],
    documents: ['Contratto di locazione', 'Ricevuta del pagamento della cauzione'],
    documents_en: ['Rental contract', 'Receipt of deposit payment'],
    steps: [
      { title: 'Versamento', title_en: 'Payment', description: 'Il deposito cauzionale non può superare 3 mensilità di canone (art. 11, L. 392/1978). Viene versato alla firma del contratto.', description_en: 'The security deposit cannot exceed 3 months\' rent (Article 11, Law 392/1978). It is paid upon signing the contract.', tip: 'Fatti sempre rilasciare una ricevuta scritta del deposito.', tip_en: 'Always get a written receipt for the deposit.' },
      { title: 'Interessi legali', title_en: 'Legal interest', description: 'Il locatore deve corrispondere gli interessi legali sul deposito cauzionale alla fine di ogni anno.', description_en: 'The landlord must pay legal interest on the security deposit at the end of each year.', tip: 'In pratica gli interessi legali sono spesso trascurati, ma è un diritto dell\'inquilino.', tip_en: 'In practice, legal interest is often overlooked, but it is the tenant\'s right.' },
      { title: 'Restituzione', title_en: 'Refund', description: 'Il deposito va restituito alla fine del contratto, dedotte eventuali somme per danni all\'immobile (oltre la normale usura) o canoni non pagati.', description_en: 'The deposit must be refunded at the end of the contract, minus any amounts for damage (beyond normal wear and tear) or unpaid rent.', tip: 'Fai un verbale di consegna con foto all\'inizio e alla fine del contratto per evitare controversie.', tip_en: 'Prepare a handover report with photos at the start and end of the contract to avoid disputes.' }
    ],
    warnings: ['Il locatore NON può trattenere la cauzione per la "normale usura" dell\'immobile.', 'Se il locatore non restituisce la cauzione, il conduttore può agire legalmente.'],
    warnings_en: ['The landlord CANNOT keep the deposit for "normal wear and tear" of the property.', 'If the landlord does not refund the deposit, the tenant can take legal action.'],
    relatedProcedures: ['contratto-locazione', 'disdetta-rinnovo']
  },
  {
    id: 'disdetta-rinnovo',
    categoryId: 'affitti',
    title: 'Disdetta e Rinnovo',
    title_en: 'Termination and Renewal',
    subtitle: 'Termine e rinnovo del contratto di locazione',
    subtitle_en: 'End and renewal of rental contract',
    difficulty: 'media',
    estimatedTime: '30 minuti',
    estimatedTime_en: '30 minutes',
    cost: 'Costo raccomandata (~€5-€10)',
    cost_en: 'Registered mail cost (~€5-€10)',
    lastVerified: '2026-05-01',
    officialLinks: [
      { label: 'L. 431/1998 — Locazioni abitative', label_en: 'Law 431/1998 — Residential rentals', url: 'https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1998-12-09;431' }
    ],
    documents: ['Raccomandata A/R o PEC di disdetta', 'Contratto di locazione originale'],
    documents_en: ['Registered letter or PEC notice of termination', 'Original rental contract'],
    steps: [
      { title: 'Disdetta del conduttore', title_en: 'Tenant termination', description: 'Il conduttore può recedere in qualsiasi momento con preavviso di 6 mesi, tramite raccomandata A/R o PEC, per gravi motivi.', description_en: 'The tenant can withdraw at any time with 6 months\' notice via registered letter or PEC, for serious reasons.', tip: 'I "gravi motivi" includono: trasferimento lavorativo, perdita del lavoro, motivi di salute, ecc.', tip_en: '"Serious reasons" include: work relocation, job loss, health reasons, etc.' },
      { title: 'Disdetta del locatore', title_en: 'Landlord termination', description: 'Il locatore può dare disdetta solo alla prima scadenza (non al rinnovo automatico) e solo per motivi previsti dalla legge (uso proprio, vendita, ristrutturazione).', description_en: 'The landlord can only terminate at the first expiry (not at automatic renewal) and only for reasons provided by law (personal use, sale, renovation).', tip: 'La disdetta del locatore va inviata con almeno 6 mesi di preavviso prima della scadenza.', tip_en: 'The landlord\'s termination must be sent at least 6 months before the expiry date.' },
      { title: 'Rinnovo automatico', title_en: 'Automatic renewal', description: 'Se nessuna delle parti invia disdetta nei termini, il contratto si rinnova automaticamente: il 4+4 per altri 4 anni, il 3+2 per altri 2 anni.', description_en: 'If neither party sends a termination notice by the deadline, the contract renews automatically: 4+4 for another 4 years, 3+2 for another 2 years.', tip: null },
      { title: 'Comunicazione all\'Agenzia Entrate', title_en: 'Notification to Revenue Agency', description: 'In caso di risoluzione anticipata, va comunicata all\'Agenzia Entrate tramite Modello RLI entro 30 giorni. Se non in cedolare secca, si paga €67 di imposta.', description_en: 'In case of early termination, it must be communicated to the Revenue Agency via Form RLI within 30 days. If not on flat-rate tax, €67 tax is due.', tip: null }
    ],
    warnings: ['La disdetta va SEMPRE inviata per raccomandata A/R o PEC. Una comunicazione verbale non ha valore legale.', 'Il locatore non può mandare via l\'inquilino senza i motivi previsti dalla legge.'],
    warnings_en: ['Termination must ALWAYS be sent by registered mail or PEC. Verbal communication has no legal value.', 'The landlord cannot evict the tenant without reasons provided by law.'],
    relatedProcedures: ['contratto-locazione', 'registrazione-contratto', 'deposito-cauzionale']
  },
  {
    id: 'affitti-brevi',
    categoryId: 'affitti',
    title: 'Affitti Brevi e Turistici',
    title_en: 'Short-term and Tourist Rentals',
    subtitle: 'Locazioni fino a 30 giorni (es. Airbnb, Booking)',
    subtitle_en: 'Rentals up to 30 days (e.g. Airbnb, Booking)',
    difficulty: 'media',
    estimatedTime: 'Varie pratiche preliminari all\'avvio',
    estimatedTime_en: 'Various preliminary procedures',
    cost: 'Variabile in base agli adeguamenti richiesti',
    cost_en: 'Variable based on required adjustments',
    lastVerified: '2026-05-16',
    officialLinks: [
      { label: 'Ministero del Turismo - BDSR / CIN', label_en: 'Ministry of Tourism - BDSR / CIN', url: 'https://bdsr.ministeroturismo.gov.it/' },
      { label: 'Polizia di Stato - Alloggiati Web', label_en: 'State Police - Guests Web Portal', url: 'https://alloggiatiweb.poliziadistato.it/PortaleAlloggiati/' }
    ],
    documents: [
      'SPID o CIE', 
      'Dati Catastali dell\'Immobile', 
      'Dotazioni di sicurezza (estintori, rilevatori di gas)'
    ],
    documents_en: [
      'SPID or CIE',
      'Property cadastral data',
      'Safety equipment (fire extinguishers, gas detectors)'
    ],
    steps: [
      { title: 'Ottenimento del CIN', title_en: 'Obtain CIN', description: 'È obbligatorio richiedere il CIN (Codice Identificativo Nazionale) tramite la Banca Dati Strutture Ricettive (BDSR) del Ministero del Turismo.', description_en: 'It is mandatory to request the CIN (National Identification Code) through the Accommodation Facilities Database (BDSR) of the Ministry of Tourism.', tip: 'Il CIN deve essere esposto all\'esterno dell\'edificio e in tutti gli annunci online sulle piattaforme.', tip_en: 'The CIN must be displayed outside the building and in all online listings on platforms.' },
      { title: 'Comunicazione Alloggiati', title_en: 'Guest reporting', description: 'Registrati al portale Alloggiati Web della Questura per comunicare i dati degli ospiti entro 24 ore dal loro arrivo (o immediatamente per soggiorni di 1 giorno).', description_en: 'Register on the Police HQ\'s Alloggiati Web portal to report guest data within 24 hours of their arrival (or immediately for 1-day stays).', tip: 'Le credenziali vanno richieste alla Questura competente per territorio.', tip_en: 'Credentials must be requested from the relevant local Police Headquarters.' },
      { title: 'Tassa di Soggiorno', title_en: 'Tourist tax', description: 'Verifica le regole del tuo Comune. È quasi sempre obbligatorio riscuotere, versare la tassa di soggiorno e fare dichiarazioni periodiche.', description_en: 'Check your municipality\'s rules. It is almost always mandatory to collect, pay the tourist tax, and make periodic declarations.', tip: 'Piattaforme come Airbnb spesso la riscuotono automaticamente per conto tuo, ma devi comunque verificare eventuali obblighi dichiarativi.', tip_en: 'Platforms like Airbnb often collect it automatically on your behalf, but you should still verify any reporting obligations.' },
      { title: 'Adeguamento Sicurezza', title_en: 'Safety compliance', description: 'I locali devono essere obbligatoriamente dotati di estintori e rilevatori di gas combustibili e monossido di carbonio funzionanti.', description_en: 'The premises must be equipped with fire extinguishers and functioning gas and carbon monoxide detectors.', tip: 'Questo è un requisito essenziale introdotto con la normativa sul CIN.', tip_en: 'This is an essential requirement introduced with the CIN regulation.' },
      { title: 'Comunicazioni al Comune e ISTAT', title_en: 'Municipality and ISTAT communications', description: 'Verifica le leggi regionali: spesso è necessario inviare una comunicazione di inizio attività al Comune e comunicare periodicamente i flussi turistici per l\'ISTAT.', description_en: 'Check regional laws: it is often necessary to send a business start notification to the municipality and periodically report tourist flows to ISTAT.', tip: null }
    ],
    warnings: [
      'La durata massima dell\'affitto breve è 30 giorni: superata questa soglia, scatta l\'obbligo di registrazione del contratto all\'Agenzia delle Entrate.',
      'L\'assenza del CIN comporta sanzioni elevate e l\'oscuramento dalle piattaforme (OTA).',
      'Fiscalità: la cedolare secca al 21% si applica solo a un immobile; dal secondo immobile destinato agli affitti brevi l\'aliquota sale al 26%.'
    ],
    warnings_en: [
      'The maximum duration for short-term rentals is 30 days: beyond this threshold, the contract must be registered with the Revenue Agency.',
      'The absence of CIN results in heavy fines and removal from platforms (OTAs).',
      'Tax: the 21% flat-rate tax applies only to one property; from the second property used for short-term rentals, the rate rises to 26%.'
    ],
    relatedProcedures: ['cedolare-secca']
  }
];
