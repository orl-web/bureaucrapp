export const agevolazioniProcedures = [
  {
    id: 'bonus-asilo-nido',
    categoryId: 'agevolazioni',
    title: 'Bonus Asilo Nido',
    title_en: 'Nursery Bonus',
    subtitle: 'Contributo per il pagamento delle rette',
    subtitle_en: 'Contribution for nursery fees',
    difficulty: 'facile',
    estimatedTime: '30 minuti per la domanda',
    estimatedTime_en: '30 minutes for application',
    cost: 'Gratuito',
    cost_en: 'Free',
    lastVerified: '2026-05-16',
    officialLinks: [
      { label: 'INPS - Bonus Nido', label_en: 'INPS - Nursery Bonus', url: 'https://www.inps.it/prestazioni-servizi/bonus-asilo-nido-e-forme-di-supporto-presso-la-propria-abitazione' }
    ],
    documents: [
      'SPID/CIE/CNS',
      'ISEE Minorenni in corso di validità',
      'Fatture o ricevute di pagamento delle rette',
      'Documento di iscrizione all\'asilo'
    ],
    documents_en: [
      'SPID/CIE/CNS',
      'Valid ISEE Minors certificate',
      'Invoices or receipts of fee payments',
      'Nursery enrollment document'
    ],
    steps: [
      { title: 'Richiesta ISEE Minorenni', title_en: 'Request ISEE Minors', description: 'Assicurati di avere un ISEE Minorenni valido per ottenere l\'importo massimo (fino a 3.600€ annui per ISEE bassi e dal secondo figlio).', description_en: 'Make sure you have a valid ISEE Minors to get the maximum amount (up to €3,600 per year for low ISEE and from the second child).', tip: 'Senza ISEE, avrai diritto solo all\'importo minimo di 1.500€ annui.', tip_en: 'Without ISEE, you will only be entitled to the minimum amount of €1,500 per year.' },
      { title: 'Domanda online', title_en: 'Online application', description: 'Accedi al portale INPS e compila la domanda indicando i mesi di frequenza previsti e l\'IBAN per il rimborso.', description_en: 'Access the INPS portal and fill in the application indicating the expected months of attendance and the IBAN for reimbursement.', tip: 'La domanda va presentata dal genitore che paga materialmente la retta.', tip_en: 'The application must be submitted by the parent who actually pays the fee.' },
      { title: 'Allegare le fatture', title_en: 'Attach invoices', description: 'Ogni mese (o a fine ciclo), dovrai allegare sul portale INPS la fattura/ricevuta di pagamento della retta del mese corrispondente.', description_en: 'Every month (or at the end of the cycle), you must upload the invoice/receipt of the corresponding month\'s fee payment on the INPS portal.', tip: 'Le ricevute devono riportare chiaramente il nome del bambino e il mese di riferimento.', tip_en: 'Receipts must clearly show the child\'s name and reference month.' },
      { title: 'Rimborso', title_en: 'Reimbursement', description: 'L\'INPS erogherà il rimborso direttamente sull\'IBAN indicato, in genere entro 30-60 giorni dall\'allegazione della fattura.', description_en: 'INPS will pay the reimbursement directly to the indicated IBAN, usually within 30-60 days of attaching the invoice.', tip: null }
    ],
    warnings: ['Il bonus è erogabile fino all\'esaurimento dei fondi stanziati annualmente: conviene fare la domanda a inizio anno (gennaio/febbraio).'],
    warnings_en: ['The bonus is paid until annual funds are exhausted: it is advisable to apply early in the year (January/February).'],
    relatedProcedures: ['isee', 'spid', 'assegno-unico']
  },
  {
    id: 'bonus-psicologo',
    categoryId: 'agevolazioni',
    title: 'Bonus Psicologo',
    title_en: 'Psychologist Bonus',
    subtitle: 'Contributo per sessioni di psicoterapia',
    subtitle_en: 'Contribution for psychotherapy sessions',
    difficulty: 'media',
    estimatedTime: '15 minuti per la richiesta',
    estimatedTime_en: '15 minutes for application',
    cost: 'Gratuito',
    cost_en: 'Free',
    lastVerified: '2026-05-16',
    officialLinks: [
      { label: 'INPS - Bonus Psicologo', label_en: 'INPS - Psychologist Bonus', url: 'https://www.inps.it/prestazioni-servizi/contributo-per-sostenere-le-spese-relative-a-sessioni-di-psicoterapia-bonus-psicologo' }
    ],
    documents: [
      'SPID/CIE/CNS',
      'ISEE ordinario o corrente (inferiore a 50.000€)'
    ],
    documents_en: [
      'SPID/CIE/CNS',
      'Ordinary or current ISEE (below €50,000)'
    ],
    steps: [
      { title: 'Verifica dei requisiti', title_en: 'Check requirements', description: 'Per accedere serve la residenza in Italia e un ISEE inferiore a 50.000 euro.', description_en: 'To qualify you need residence in Italy and an ISEE below €50,000.', tip: 'Il contributo massimo è di 1.500€ per ISEE sotto i 15.000€, decrescente per fasce superiori.', tip_en: 'The maximum contribution is €1,500 for ISEE under €15,000, decreasing for higher brackets.' },
      { title: 'Invio della domanda', title_en: 'Submit application', description: 'La domanda si invia esclusivamente online sul sito INPS durante la finestra temporale di apertura del bando (solitamente annunciata con circolare).', description_en: 'The application is submitted exclusively online on the INPS website during the call opening window (usually announced with a circular).', tip: 'Il bando resta aperto circa 30-60 giorni, tieni d\'occhio il sito INPS.', tip_en: 'The call remains open for about 30-60 days, keep an eye on the INPS website.' },
      { title: 'Attesa della graduatoria', title_en: 'Wait for ranking', description: 'Le domande vengono accolte in base a una graduatoria che privilegia gli ISEE più bassi e l\'ordine di arrivo.', description_en: 'Applications are accepted based on a ranking that favors lower ISEE and submission order.', tip: 'Non si tratta di un click-day puro, ma l\'ISEE basso è il criterio primario.', tip_en: 'It is not a pure click-day, but low ISEE is the primary criterion.' },
      { title: 'Utilizzo del codice univoco', title_en: 'Use the unique code', description: 'Se ammesso, riceverai un Codice Univoco. Consegnalo al tuo psicologo (che deve essere aderente all\'iniziativa sul portale CNOP) al momento della seduta.', description_en: 'If accepted, you will receive a Unique Code. Give it to your psychologist (who must be registered on the CNOP portal) at the time of the session.', tip: 'Il codice ha una validità massima (es. 270 giorni). Se non lo usi, i fondi tornano a disposizione di altri.', tip_en: 'The code has a maximum validity (e.g. 270 days). If unused, funds become available to others.' }
    ],
    warnings: ['I fondi sono limitati e non coprono tutte le domande. L\'ISEE basso è fondamentale per scalare la graduatoria.'],
    warnings_en: ['Funds are limited and do not cover all applications. A low ISEE is essential to climb the ranking.'],
    relatedProcedures: ['isee', 'spid']
  },
  {
    id: 'ecobonus-auto',
    categoryId: 'agevolazioni',
    title: 'Ecobonus Auto',
    title_en: 'Car Ecobonus',
    subtitle: 'Incentivi statali per acquisto veicoli non inquinanti',
    subtitle_en: 'Government incentives for purchasing low-emission vehicles',
    difficulty: 'facile',
    estimatedTime: 'Gestito direttamente dal concessionario',
    estimatedTime_en: 'Handled directly by the dealership',
    cost: 'Sconto diretto sul prezzo d\'acquisto',
    cost_en: 'Direct discount on purchase price',
    lastVerified: '2026-05-16',
    officialLinks: [
      { label: 'MISE - Ecobonus', label_en: 'MISE - Ecobonus', url: 'https://ecobonus.mise.gov.it/' }
    ],
    documents: [
      'Documento d\'identità',
      'Codice Fiscale',
      'ISEE (se inferiore a 30.000€ per la maggiorazione)',
      'Documenti del veicolo da rottamare (se presente)'
    ],
    documents_en: [
      'ID document',
      'Tax Code',
      'ISEE (if below €30,000 for the bonus increase)',
      'Documents of the vehicle to be scrapped (if any)'
    ],
    steps: [
      { title: 'Scelta del veicolo', title_en: 'Choose the vehicle', description: 'Scegli un\'auto (elettrica, ibrida plug-in o endotermica a basse emissioni) che rientri nei limiti di prezzo e di emissioni previsti dal decreto.', description_en: 'Choose a car (electric, plug-in hybrid, or low-emission internal combustion) that falls within the price and emission limits set by the decree.', tip: 'Il limite di prezzo (IVA esclusa) varia a seconda della fascia di emissioni.', tip_en: 'The price limit (VAT excluded) varies by emission bracket.' },
      { title: 'Verifica ISEE e Rottamazione', title_en: 'Check ISEE and scrappage', description: 'Verifica se hai un ISEE < 30.000€ (per ottenere fino a 11.000€ su elettriche) e se hai un\'auto vecchia (Euro 0-4) da rottamare intestata da almeno 12 mesi.', description_en: 'Check if your ISEE is below €30,000 (to get up to €11,000 on electric cars) and if you have an old car (Euro 0-4) to scrap registered for at least 12 months.', tip: 'Rottamare un\'auto vecchia (Euro 0-2) dà l\'incentivo massimo.', tip_en: 'Scrapping an old car (Euro 0-2) gives the maximum incentive.' },
      { title: 'Prenotazione incentivo', title_en: 'Incentive booking', description: 'Il concessionario si occupa di tutto: inserisce la prenotazione sul portale del Ministero e scala l\'importo direttamente dal prezzo finale.', description_en: 'The dealership handles everything: enters the booking on the Ministry portal and deducts the amount directly from the final price.', tip: 'Assicurati che il concessionario abbia i fondi disponibili prima di firmare il contratto.', tip_en: 'Make sure the dealership has available funds before signing the contract.' },
      { title: 'Immatricolazione', title_en: 'Registration', description: 'Il veicolo deve essere immatricolato entro 270 giorni dalla prenotazione dell\'incentivo da parte del concessionario.', description_en: 'The vehicle must be registered within 270 days of the incentive booking by the dealership.', tip: null }
    ],
    warnings: [
      'I fondi per le auto endotermiche (fascia 61-135 g/km) spesso si esauriscono in pochissime ore dall\'apertura del portale!',
      'Il veicolo acquistato con incentivo non può essere venduto prima di 12 mesi (persone fisiche) o 24 mesi (persone giuridiche).'
    ],
    warnings_en: [
      'Funds for internal combustion cars (61-135 g/km bracket) often run out within hours of the portal opening!',
      'A vehicle purchased with an incentive cannot be sold before 12 months (individuals) or 24 months (legal entities).'
    ],
    relatedProcedures: ['isee', 'passaggio-proprieta']
  },
  {
    id: 'carta-dedicata-a-te',
    categoryId: 'agevolazioni',
    title: 'Carta Dedicata a Te',
    title_en: 'Card Dedicated to You',
    subtitle: 'Contributo per beni alimentari e trasporti',
    subtitle_en: 'Contribution for food and transport',
    difficulty: 'facile',
    estimatedTime: 'Automatica (ritiro in Posta 15 min)',
    estimatedTime_en: 'Automatic (collection at Post Office 15 min)',
    cost: 'Gratuito',
    cost_en: 'Free',
    lastVerified: '2026-05-16',
    officialLinks: [
      { label: 'Ministero Agricoltura - Carta Dedicata a Te', label_en: 'Ministry of Agriculture - Card Dedicated to You', url: 'https://www.politicheagricole.it/' }
    ],
    documents: [
      'Documento d\'identità',
      'Lettera di notifica del Comune',
      'ISEE Ordinario valido'
    ],
    documents_en: [
      'ID document',
      'Notification letter from the municipality',
      'Valid Ordinary ISEE'
    ],
    steps: [
      { title: 'Nessuna domanda necessaria', title_en: 'No application needed', description: 'La carta NON si richiede. I beneficiari vengono selezionati automaticamente dall\'INPS tra i nuclei familiari con ISEE inferiore a 15.000 euro e almeno 3 componenti.', description_en: 'The card is NOT applied for. Beneficiaries are automatically selected by INPS among households with an ISEE below €15,000 and at least 3 members.', tip: 'Avere l\'ISEE in corso di validità (calcolato nei primi mesi dell\'anno) è il requisito fondamentale.', tip_en: 'Having a valid ISEE (calculated in the first months of the year) is the fundamental requirement.' },
      { title: 'Attesa della comunicazione', title_en: 'Wait for notification', description: 'Se rientri tra i beneficiari, il tuo Comune di residenza ti invierà una lettera o un SMS con le istruzioni e il codice per il ritiro.', description_en: 'If you are among the beneficiaries, your municipality will send you a letter or SMS with instructions and the collection code.', tip: 'Puoi anche controllare le graduatorie (pubblicate in forma anonima con numero protocollo DSU) sul sito del tuo Comune.', tip_en: 'You can also check the rankings (published anonymously with DSU protocol number) on your municipality\'s website.' },
      { title: 'Ritiro in Posta', title_en: 'Collection at Post Office', description: 'Recati presso un ufficio di Poste Italiane con la lettera del Comune e il documento d\'identità per ritirare la prepagata (Postepay).', description_en: 'Go to a Poste Italiane office with the municipality letter and your ID document to collect the prepaid card (Postepay).', tip: null },
      { title: 'Effettuare il primo acquisto', title_en: 'Make the first purchase', description: 'Attenzione: per attivare definitivamente la carta, devi effettuare almeno un acquisto entro la data limite stabilita dal decreto (solitamente inizio autunno), altrimenti i fondi verranno ritirati.', description_en: 'Warning: to permanently activate the card, you must make at least one purchase by the deadline set by the decree (usually early autumn), otherwise the funds will be withdrawn.', tip: 'La carta può essere usata solo in supermercati aderenti per beni alimentari di prima necessità, carburanti o abbonamenti mezzi pubblici.', tip_en: 'The card can only be used at participating supermarkets for essential food items, fuel, or public transport passes.' }
    ],
    warnings: ['Sono esclusi coloro che percepiscono già l\'Assegno di Inclusione (ADI) o altre forme di sostegno al reddito statale.'],
    warnings_en: ['Those already receiving the Inclusion Allowance (ADI) or other state income support are excluded.'],
    relatedProcedures: ['isee']
  }
];
