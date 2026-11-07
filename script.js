const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const languageSwitcher = document.querySelector('#language-toggle');
const languageOptions = document.querySelector('#language-options');
const languageCode = document.querySelector('#language-current');
let activeLanguage = 'sq';

const translations = {
    sq: {
        languageLabel: 'Zgjidh gjuhën', navLabel: 'Navigimi kryesor', menuOpen: 'Hap menunë', menuClose: 'Mbyll menunë', navServices: 'Çfarë bëjmë', navProcess: 'Si punojmë', navContact: 'Kontakt', navWhatsapp: 'Flasim në WhatsApp',
        heroAlt: 'Një ekip krijues që planifikon së bashku', heroEyebrow: 'Studio kreative për rritje', heroTitleOne: 'Ide të guximshme.', heroTitleTwo: 'Rritje reale.',
        heroCopy: 'I japim formë markës suaj dhe e çojmë te njerëzit e duhur, me strategji të qartë, reklama të zgjuara dhe përmbajtje që mbahet mend.', heroCta: 'Tregomë për biznesin', heroServices: 'Zbulo çfarë bëjmë', heroNote: 'Nga ideja e parë te fushata live.',
        introEyebrow: 'BizPromo.AL · Shqipëri', introTitleOne: 'Marketingu i mirë', introTitleTwo: 'nis me qartësi.', introCopy: 'Nuk ka nevojë për zhurmë më të madhe. Ka nevojë për një ide të fortë, një plan të kuptueshëm dhe punë kreative që i shërben biznesit tuaj.', introLink: 'Njihuni me mënyrën tonë të punës',
        servicesEyebrow: 'Çfarë bëjmë', servicesTitleOne: 'Nga ideja', servicesTitleTwo: 'te ndikimi.', servicesAside: 'Shërbime që lidhen mes tyre dhe punojnë për të njëjtin qëllim: ta bëjnë biznesin tuaj më të dukshëm e më të dallueshëm.',
        serviceOneTitle: 'Strategji & identitet', serviceOneCopy: 'Analizojmë markën dhe konkurrentët, përcaktojmë audiencën ideale, pozicionimin, mesazhet, tonin e komunikimit dhe drejtimin vizual.', serviceOneTag: 'Drejtimi',
        serviceTwoTitle: 'Reklama digjitale', serviceTwoCopy: 'Planifikojmë fushata në Meta Ads (Facebook dhe Instagram) dhe Google Ads: targetim, krijime reklamash, testim, optimizim dhe raportim.', serviceTwoTag: 'Shtrirja',
        serviceThreeTitle: 'Përmbajtje & video', serviceThreeCopy: 'Krijojmë kalendarë për rrjetet sociale, tekste postimesh, ide vizuale, oferta promocionale, video të shkurtra dhe video për fëmijë.', serviceThreeTag: 'Krijimtaria',
        serviceFourTitle: 'Matje & përmirësim', serviceFourCopy: 'Ndjekim shtrirjen, klikimet dhe kërkesat, përgatisim raporte të qarta dhe propozojmë çfarë të përmirësohet në fushatën e radhës.', serviceFourTag: 'Përparimi',
        processEyebrow: 'Si punojmë', processTitleOne: 'Pa mister.', processTitleTwo: 'Me metodë.', processCopy: 'Një proces i thjeshtë, që ju mban të përfshirë dhe çdo hap e lidh me objektivin tuaj.',
        stepOneTitle: 'Dëgjojmë', stepOneCopy: 'Kuptojmë biznesin, sfidat, audiencën dhe atë që doni të arrini.', stepTwoTitle: 'Planifikojmë', stepTwoCopy: 'Përcaktojmë drejtimin, mesazhin, kanalet dhe veprimet konkrete.', stepThreeTitle: 'Krijojmë & përmirësojmë', stepThreeCopy: 'Përgatisim dhe publikojmë punën, masim reagimin dhe përshtatim fushatën.',
        contactEyebrow: 'Hapi i parë', contactTitleOne: 'Ke një ide?', contactTitleTwo: 'Ta flasim.', contactCopy: 'Na trego pak për biznesin dhe çfarë dëshiron të ndryshosh. Biseda e parë nis këtu.', phoneLabel: 'Telefon / WhatsApp', emailLabel: 'Email', socialLabel: 'Rrjetet sociale',
        businessLabel: 'Emri i biznesit', businessPlaceholder: 'Si quhet biznesi juaj?', contactLabel: 'Numri i telefonit ose WhatsApp', phonePlaceholder: '+355 ...', messageLabel: 'Çfarë keni në mendje?', messagePlaceholder: 'Na tregoni shkurt për idenë tuaj...', submitLabel: 'Dërgo mesazhin', sendingLabel: 'Duke dërguar...', successMessage: 'Mesazhi u dërgua. Do t’ju kontaktojmë së shpejti.', errorMessage: 'Mesazhi nuk u dërgua. Provoni përsëri ose na telefononi.', footerTagline: 'Ide të guximshme. Rritje reale.', pageTitle: 'BizPromo.AL — Ide të guximshme. Rritje reale.', pageDescription: 'BizPromo.AL ndihmon bizneset të komunikojnë më qartë dhe të rriten me strategji, reklama dhe përmbajtje kreative.'
    },
    en: {
        languageLabel: 'Choose language', navLabel: 'Main navigation', menuOpen: 'Open menu', menuClose: 'Close menu', navServices: 'What we do', navProcess: 'Our process', navContact: 'Contact', navWhatsapp: 'Chat on WhatsApp',
        heroAlt: 'A creative team planning together', heroEyebrow: 'Creative studio for growth', heroTitleOne: 'Bold ideas.', heroTitleTwo: 'Real growth.',
        heroCopy: 'We shape your brand and connect it with the right people through clear strategy, smart advertising, and memorable content.', heroCta: 'Tell us about your business', heroServices: 'Explore our work', heroNote: 'From the first idea to a live campaign.',
        introEyebrow: 'BizPromo.AL · Albania', introTitleOne: 'Good marketing', introTitleTwo: 'starts with clarity.', introCopy: 'You do not need more noise. You need a strong idea, a clear plan, and creative work that serves your business.', introLink: 'See how we work',
        servicesEyebrow: 'What we do', servicesTitleOne: 'From idea', servicesTitleTwo: 'to impact.', servicesAside: 'Connected services, built around one goal: making your business more visible and distinctive.',
        serviceOneTitle: 'Strategy & identity', serviceOneCopy: 'We review your brand and competitors, define your ideal audience and positioning, and shape your key messages, voice, and visual direction.', serviceOneTag: 'Direction',
        serviceTwoTitle: 'Digital advertising', serviceTwoCopy: 'We plan Meta Ads (Facebook and Instagram) and Google Ads, including audience targeting, ad creative, testing, optimization, and reporting.', serviceTwoTag: 'Reach',
        serviceThreeTitle: 'Content & video', serviceThreeCopy: 'We create social media calendars, post copy, visual concepts, promotional offers, short videos, and video content for children.', serviceThreeTag: 'Creative',
        serviceFourTitle: 'Measure & improve', serviceFourCopy: 'We track reach, clicks, and inquiries, prepare clear reports, and recommend what to improve in the next campaign.', serviceFourTag: 'Progress',
        processEyebrow: 'Our process', processTitleOne: 'No mystery.', processTitleTwo: 'Just a method.', processCopy: 'A straightforward process that keeps you involved and ties every step to your goals.',
        stepOneTitle: 'Listen', stepOneCopy: 'We learn about your business, challenges, audience, and ambitions.', stepTwoTitle: 'Plan', stepTwoCopy: 'We set the direction, message, channels, and practical next steps.', stepThreeTitle: 'Create & improve', stepThreeCopy: 'We prepare and launch the work, measure its response, and refine the campaign.',
        contactEyebrow: 'Start here', contactTitleOne: 'Have an idea?', contactTitleTwo: 'Let’s talk.', contactCopy: 'Tell us a little about your business and what you want to change. The first conversation starts here.', phoneLabel: 'Phone / WhatsApp', emailLabel: 'Email', socialLabel: 'Social media',
        businessLabel: 'Business name', businessPlaceholder: 'What is your business called?', contactLabel: 'Phone number or WhatsApp', phonePlaceholder: '+355 ...', messageLabel: 'What do you have in mind?', messagePlaceholder: 'Tell us a little about your idea...', submitLabel: 'Send message', sendingLabel: 'Sending...', successMessage: 'Message sent. We’ll be in touch soon.', errorMessage: 'Message not sent. Please try again or call us.', footerTagline: 'Bold ideas. Real growth.', pageTitle: 'BizPromo.AL — Bold ideas. Real growth.', pageDescription: 'BizPromo.AL helps businesses grow with clear strategy, advertising, and creative content.'
    },
    it: {
        languageLabel: 'Scegli la lingua', navLabel: 'Navigazione principale', menuOpen: 'Apri il menu', menuClose: 'Chiudi il menu', navServices: 'Cosa facciamo', navProcess: 'Come lavoriamo', navContact: 'Contatti', navWhatsapp: 'Scrivici su WhatsApp',
        heroAlt: 'Un team creativo pianifica insieme', heroEyebrow: 'Studio creativo per la crescita', heroTitleOne: 'Idee audaci.', heroTitleTwo: 'Crescita reale.',
        heroCopy: 'Diamo forma al tuo brand e lo portiamo alle persone giuste con una strategia chiara, pubblicità intelligente e contenuti memorabili.', heroCta: 'Parlaci della tua attività', heroServices: 'Scopri i nostri servizi', heroNote: 'Dalla prima idea alla campagna online.',
        introEyebrow: 'BizPromo.AL · Albania', introTitleOne: 'Il buon marketing', introTitleTwo: 'inizia con chiarezza.', introCopy: 'Non serve fare più rumore. Serve un’idea forte, un piano chiaro e un lavoro creativo al servizio della tua attività.', introLink: 'Scopri come lavoriamo',
        servicesEyebrow: 'Cosa facciamo', servicesTitleOne: 'Dall’idea', servicesTitleTwo: 'all’impatto.', servicesAside: 'Servizi collegati tra loro, con un unico obiettivo: rendere la tua attività più visibile e riconoscibile.',
        serviceOneTitle: 'Strategia e identità', serviceOneCopy: 'Analizziamo brand e concorrenti, definiamo il pubblico ideale e il posizionamento, poi sviluppiamo messaggi, tono e direzione visiva.', serviceOneTag: 'Direzione',
        serviceTwoTitle: 'Pubblicità digitale', serviceTwoCopy: 'Pianifichiamo campagne Meta Ads (Facebook e Instagram) e Google Ads: pubblico, creatività, test, ottimizzazione e report.', serviceTwoTag: 'Copertura',
        serviceThreeTitle: 'Contenuti e video', serviceThreeCopy: 'Creiamo calendari social, testi per i post, idee visive, promozioni, video brevi e contenuti video per bambini.', serviceThreeTag: 'Creatività',
        serviceFourTitle: 'Misurazione e miglioramento', serviceFourCopy: 'Monitoriamo copertura, clic e richieste, prepariamo report chiari e indichiamo come migliorare la campagna successiva.', serviceFourTag: 'Progresso',
        processEyebrow: 'Il nostro metodo', processTitleOne: 'Niente misteri.', processTitleTwo: 'Un metodo chiaro.', processCopy: 'Un processo semplice che ti coinvolge e collega ogni fase ai tuoi obiettivi.',
        stepOneTitle: 'Ascoltiamo', stepOneCopy: 'Comprendiamo attività, sfide, pubblico e obiettivi.', stepTwoTitle: 'Pianifichiamo', stepTwoCopy: 'Definiamo direzione, messaggio, canali e azioni concrete.', stepThreeTitle: 'Creiamo e miglioriamo', stepThreeCopy: 'Prepariamo e pubblichiamo il lavoro, misuriamo la risposta e ottimizziamo la campagna.',
        contactEyebrow: 'Il primo passo', contactTitleOne: 'Hai un’idea?', contactTitleTwo: 'Parliamone.', contactCopy: 'Raccontaci la tua attività e cosa vorresti cambiare. La prima conversazione inizia qui.', phoneLabel: 'Telefono / WhatsApp', emailLabel: 'Email', socialLabel: 'Social media',
        businessLabel: 'Nome dell’attività', businessPlaceholder: 'Come si chiama la tua attività?', contactLabel: 'Telefono o WhatsApp', phonePlaceholder: '+355 ...', messageLabel: 'Cosa hai in mente?', messagePlaceholder: 'Raccontaci brevemente la tua idea...', submitLabel: 'Invia messaggio', sendingLabel: 'Invio in corso...', successMessage: 'Messaggio inviato. Ti contatteremo presto.', errorMessage: 'Invio non riuscito. Riprova o chiamaci.', footerTagline: 'Idee audaci. Crescita reale.', pageTitle: 'BizPromo.AL — Idee audaci. Crescita reale.', pageDescription: 'BizPromo.AL aiuta le aziende a crescere con strategia, pubblicità e contenuti creativi.'
    },
    de: {
        languageLabel: 'Sprache wählen', navLabel: 'Hauptnavigation', menuOpen: 'Menü öffnen', menuClose: 'Menü schließen', navServices: 'Leistungen', navProcess: 'So arbeiten wir', navContact: 'Kontakt', navWhatsapp: 'Chat auf WhatsApp',
        heroAlt: 'Ein Kreativteam plant gemeinsam', heroEyebrow: 'Kreativstudio für Wachstum', heroTitleOne: 'Mutige Ideen.', heroTitleTwo: 'Echtes Wachstum.',
        heroCopy: 'Wir entwickeln Ihre Marke weiter und erreichen die richtigen Menschen mit klarer Strategie, smarter Werbung und einprägsamen Inhalten.', heroCta: 'Erzählen Sie uns von Ihrem Geschäft', heroServices: 'Unsere Leistungen entdecken', heroNote: 'Von der ersten Idee bis zur laufenden Kampagne.',
        introEyebrow: 'BizPromo.AL · Albanien', introTitleOne: 'Gutes Marketing', introTitleTwo: 'beginnt mit Klarheit.', introCopy: 'Es braucht nicht mehr Lärm, sondern eine starke Idee, einen klaren Plan und kreative Arbeit, die Ihrem Unternehmen dient.', introLink: 'So arbeiten wir',
        servicesEyebrow: 'Unsere Leistungen', servicesTitleOne: 'Von der Idee', servicesTitleTwo: 'zur Wirkung.', servicesAside: 'Aufeinander abgestimmte Leistungen mit einem Ziel: Ihr Unternehmen sichtbarer und unverwechselbar zu machen.',
        serviceOneTitle: 'Strategie & Identität', serviceOneCopy: 'Wir analysieren Marke und Wettbewerb, definieren Zielgruppe und Positionierung und entwickeln Botschaften, Tonalität und visuelle Richtung.', serviceOneTag: 'Ausrichtung',
        serviceTwoTitle: 'Digitale Werbung', serviceTwoCopy: 'Wir planen Meta Ads (Facebook und Instagram) sowie Google Ads: Zielgruppen, Werbemittel, Tests, Optimierung und Berichte.', serviceTwoTag: 'Reichweite',
        serviceThreeTitle: 'Inhalte & Video', serviceThreeCopy: 'Wir erstellen Social-Media-Pläne, Beitragstexte, Bildideen, Angebote, Kurzvideos und Videoinhalte für Kinder.', serviceThreeTag: 'Kreativität',
        serviceFourTitle: 'Messen & verbessern', serviceFourCopy: 'Wir erfassen Reichweite, Klicks und Anfragen, erstellen klare Berichte und empfehlen Verbesserungen für die nächste Kampagne.', serviceFourTag: 'Fortschritt',
        processEyebrow: 'Unser Ablauf', processTitleOne: 'Keine Geheimnisse.', processTitleTwo: 'Ein klarer Plan.', processCopy: 'Ein einfacher Ablauf, der Sie einbezieht und jeden Schritt mit Ihren Zielen verbindet.',
        stepOneTitle: 'Zuhören', stepOneCopy: 'Wir verstehen Ihr Unternehmen, Ihre Herausforderungen, Zielgruppe und Ziele.', stepTwoTitle: 'Planen', stepTwoCopy: 'Wir legen Richtung, Botschaft, Kanäle und konkrete Maßnahmen fest.', stepThreeTitle: 'Umsetzen & verbessern', stepThreeCopy: 'Wir erstellen und veröffentlichen Inhalte, messen die Reaktion und optimieren die Kampagne.',
        contactEyebrow: 'Der erste Schritt', contactTitleOne: 'Eine Idee?', contactTitleTwo: 'Sprechen wir.', contactCopy: 'Erzählen Sie uns von Ihrem Unternehmen und davon, was Sie verändern möchten. Das erste Gespräch beginnt hier.', phoneLabel: 'Telefon / WhatsApp', emailLabel: 'E-Mail', socialLabel: 'Soziale Medien',
        businessLabel: 'Name des Unternehmens', businessPlaceholder: 'Wie heißt Ihr Unternehmen?', contactLabel: 'Telefonnummer oder WhatsApp', phonePlaceholder: '+355 ...', messageLabel: 'Was haben Sie vor?', messagePlaceholder: 'Erzählen Sie uns kurz von Ihrer Idee...', submitLabel: 'Nachricht senden', sendingLabel: 'Wird gesendet...', successMessage: 'Nachricht gesendet. Wir melden uns bald.', errorMessage: 'Nachricht nicht gesendet. Bitte erneut versuchen oder anrufen.', footerTagline: 'Mutige Ideen. Echtes Wachstum.', pageTitle: 'BizPromo.AL — Mutige Ideen. Echtes Wachstum.', pageDescription: 'BizPromo.AL unterstützt Unternehmen mit klarer Strategie, Werbung und kreativen Inhalten.'
    },
    fr: {
        languageLabel: 'Choisir la langue', navLabel: 'Navigation principale', menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu', navServices: 'Nos services', navProcess: 'Notre méthode', navContact: 'Contact', navWhatsapp: 'Écrivez-nous sur WhatsApp',
        heroAlt: 'Une équipe créative qui planifie ensemble', heroEyebrow: 'Studio créatif pour votre croissance', heroTitleOne: 'Des idées audacieuses.', heroTitleTwo: 'Une vraie croissance.',
        heroCopy: 'Nous façonnons votre marque et la rapprochons des bonnes personnes grâce à une stratégie claire, des publicités efficaces et des contenus mémorables.', heroCta: 'Parlez-nous de votre activité', heroServices: 'Découvrez nos services', heroNote: 'De la première idée à la campagne en ligne.',
        introEyebrow: 'BizPromo.AL · Albanie', introTitleOne: 'Un bon marketing', introTitleTwo: 'commence par la clarté.', introCopy: 'Inutile de faire plus de bruit. Il faut une idée forte, un plan clair et un travail créatif au service de votre activité.', introLink: 'Découvrez notre méthode',
        servicesEyebrow: 'Nos services', servicesTitleOne: 'De l’idée', servicesTitleTwo: 'à l’impact.', servicesAside: 'Des services complémentaires autour d’un même objectif : rendre votre activité plus visible et reconnaissable.',
        serviceOneTitle: 'Stratégie et identité', serviceOneCopy: 'Nous analysons votre marque et vos concurrents, définissons votre public et votre positionnement, puis vos messages et votre univers visuel.', serviceOneTag: 'Direction',
        serviceTwoTitle: 'Publicité numérique', serviceTwoCopy: 'Nous planifions des campagnes Meta Ads (Facebook et Instagram) et Google Ads : ciblage, créations, tests, optimisation et rapports.', serviceTwoTag: 'Visibilité',
        serviceThreeTitle: 'Contenus et vidéos', serviceThreeCopy: 'Nous créons des calendriers sociaux, textes de publications, concepts visuels, offres, vidéos courtes et contenus vidéo pour enfants.', serviceThreeTag: 'Créativité',
        serviceFourTitle: 'Mesure et amélioration', serviceFourCopy: 'Nous suivons portée, clics et demandes, préparons des rapports clairs et proposons des améliorations pour la prochaine campagne.', serviceFourTag: 'Progrès',
        processEyebrow: 'Notre méthode', processTitleOne: 'Sans mystère.', processTitleTwo: 'Avec méthode.', processCopy: 'Un processus simple qui vous implique et relie chaque étape à vos objectifs.',
        stepOneTitle: 'Écouter', stepOneCopy: 'Nous comprenons votre activité, vos défis, votre public et vos objectifs.', stepTwoTitle: 'Planifier', stepTwoCopy: 'Nous définissons la direction, le message, les canaux et les actions concrètes.', stepThreeTitle: 'Créer et améliorer', stepThreeCopy: 'Nous préparons et publions le travail, mesurons les réactions et ajustons la campagne.',
        contactEyebrow: 'Premier pas', contactTitleOne: 'Une idée ?', contactTitleTwo: 'Parlons-en.', contactCopy: 'Parlez-nous de votre activité et de ce que vous souhaitez changer. La première conversation commence ici.', phoneLabel: 'Téléphone / WhatsApp', emailLabel: 'E-mail', socialLabel: 'Réseaux sociaux',
        businessLabel: 'Nom de l’entreprise', businessPlaceholder: 'Comment s’appelle votre entreprise ?', contactLabel: 'Téléphone ou WhatsApp', phonePlaceholder: '+355 ...', messageLabel: 'Quelle est votre idée ?', messagePlaceholder: 'Parlez-nous brièvement de votre projet...', submitLabel: 'Envoyer le message', sendingLabel: 'Envoi en cours...', successMessage: 'Message envoyé. Nous vous contacterons bientôt.', errorMessage: 'Échec de l’envoi. Réessayez ou appelez-nous.', footerTagline: 'Des idées audacieuses. Une vraie croissance.', pageTitle: 'BizPromo.AL — Des idées audacieuses. Une vraie croissance.', pageDescription: 'BizPromo.AL aide les entreprises à se développer grâce à la stratégie, la publicité et des contenus créatifs.'
    },
    gr: {
        languageLabel: 'Επιλογή γλώσσας', navLabel: 'Κύρια πλοήγηση', menuOpen: 'Άνοιγμα μενού', menuClose: 'Κλείσιμο μενού', navServices: 'Τι κάνουμε', navProcess: 'Πώς δουλεύουμε', navContact: 'Επικοινωνία', navWhatsapp: 'Μιλήστε στο WhatsApp',
        heroAlt: 'Μια δημιουργική ομάδα σχεδιάζει μαζί', heroEyebrow: 'Δημιουργικό στούντιο ανάπτυξης', heroTitleOne: 'Τολμηρές ιδέες.', heroTitleTwo: 'Πραγματική ανάπτυξη.',
        heroCopy: 'Διαμορφώνουμε το brand σας και το φέρνουμε στους σωστούς ανθρώπους με σαφή στρατηγική, έξυπνη διαφήμιση και περιεχόμενο που μένει αξέχαστο.', heroCta: 'Πείτε μας για την επιχείρησή σας', heroServices: 'Δείτε τις υπηρεσίες μας', heroNote: 'Από την πρώτη ιδέα έως την καμπάνια.',
        introEyebrow: 'BizPromo.AL · Αλβανία', introTitleOne: 'Το καλό μάρκετινγκ', introTitleTwo: 'ξεκινά με σαφήνεια.', introCopy: 'Δεν χρειάζεται περισσότερος θόρυβος. Χρειάζεται μια δυνατή ιδέα, ένα σαφές σχέδιο και δημιουργική δουλειά που στηρίζει την επιχείρησή σας.', introLink: 'Δείτε πώς δουλεύουμε',
        servicesEyebrow: 'Τι κάνουμε', servicesTitleOne: 'Από την ιδέα', servicesTitleTwo: 'στο αποτέλεσμα.', servicesAside: 'Συνδεδεμένες υπηρεσίες με έναν στόχο: να κάνουν την επιχείρησή σας πιο ορατή και ξεχωριστή.',
        serviceOneTitle: 'Στρατηγική και ταυτότητα', serviceOneCopy: 'Αναλύουμε το brand και τον ανταγωνισμό, ορίζουμε το κοινό και τη θέση του και διαμορφώνουμε μηνύματα και οπτική κατεύθυνση.', serviceOneTag: 'Κατεύθυνση',
        serviceTwoTitle: 'Ψηφιακή διαφήμιση', serviceTwoCopy: 'Σχεδιάζουμε καμπάνιες Meta Ads (Facebook και Instagram) και Google Ads: στόχευση, δημιουργικά, δοκιμές, βελτιστοποίηση και αναφορές.', serviceTwoTag: 'Εμβέλεια',
        serviceThreeTitle: 'Περιεχόμενο και βίντεο', serviceThreeCopy: 'Δημιουργούμε πλάνα κοινωνικών δικτύων, κείμενα, οπτικές ιδέες, προσφορές, σύντομα βίντεο και βίντεο για παιδιά.', serviceThreeTag: 'Δημιουργία',
        serviceFourTitle: 'Μέτρηση και βελτίωση', serviceFourCopy: 'Παρακολουθούμε απήχηση, κλικ και αιτήματα, ετοιμάζουμε σαφείς αναφορές και προτείνουμε βελτιώσεις για την επόμενη καμπάνια.', serviceFourTag: 'Πρόοδος',
        processEyebrow: 'Η διαδικασία μας', processTitleOne: 'Χωρίς μυστήριο.', processTitleTwo: 'Με μέθοδο.', processCopy: 'Μια απλή διαδικασία που σας κρατά ενήμερους και συνδέει κάθε βήμα με τους στόχους σας.',
        stepOneTitle: 'Ακούμε', stepOneCopy: 'Κατανοούμε την επιχείρηση, τις προκλήσεις, το κοινό και τους στόχους σας.', stepTwoTitle: 'Σχεδιάζουμε', stepTwoCopy: 'Καθορίζουμε κατεύθυνση, μήνυμα, κανάλια και συγκεκριμένες ενέργειες.', stepThreeTitle: 'Δημιουργούμε και βελτιώνουμε', stepThreeCopy: 'Ετοιμάζουμε και δημοσιεύουμε το έργο, μετράμε την ανταπόκριση και προσαρμόζουμε την καμπάνια.',
        contactEyebrow: 'Το πρώτο βήμα', contactTitleOne: 'Έχετε μια ιδέα;', contactTitleTwo: 'Ας μιλήσουμε.', contactCopy: 'Πείτε μας για την επιχείρησή σας και τι θέλετε να αλλάξετε. Η πρώτη συζήτηση ξεκινά εδώ.', phoneLabel: 'Τηλέφωνο / WhatsApp', emailLabel: 'Email', socialLabel: 'Κοινωνικά δίκτυα',
        businessLabel: 'Όνομα επιχείρησης', businessPlaceholder: 'Πώς ονομάζεται η επιχείρησή σας;', contactLabel: 'Τηλέφωνο ή WhatsApp', phonePlaceholder: '+355 ...', messageLabel: 'Τι έχετε στο μυαλό σας;', messagePlaceholder: 'Πείτε μας λίγα λόγια για την ιδέα σας...', submitLabel: 'Αποστολή μηνύματος', sendingLabel: 'Αποστολή...', successMessage: 'Το μήνυμα στάλθηκε. Θα επικοινωνήσουμε σύντομα.', errorMessage: 'Η αποστολή απέτυχε. Δοκιμάστε ξανά ή καλέστε μας.', footerTagline: 'Τολμηρές ιδέες. Πραγματική ανάπτυξη.', pageTitle: 'BizPromo.AL — Τολμηρές ιδέες. Πραγματική ανάπτυξη.', pageDescription: 'Η BizPromo.AL βοηθά επιχειρήσεις να αναπτυχθούν με στρατηγική, διαφήμιση και δημιουργικό περιεχόμενο.'
    }
};

function setLanguage(language) {
    activeLanguage = translations[language] ? language : 'sq';
    const copy = translations[activeLanguage];
    document.documentElement.lang = activeLanguage === 'gr' ? 'el' : activeLanguage;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const translation = copy[element.dataset.i18n];
        if (translation) element.textContent = translation;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const translation = copy[element.dataset.i18nPlaceholder];
        if (translation) element.placeholder = translation;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const translation = copy[element.dataset.i18nAlt];
        if (translation) element.alt = translation;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const translation = copy[element.dataset.i18nAria];
        if (translation) element.setAttribute('aria-label', translation);
    });

    document.title = copy.pageTitle;
    document.querySelector('#page-description').content = copy.pageDescription;
    if (languageCode) languageCode.textContent = activeLanguage.toUpperCase();
    languageOptions?.querySelectorAll('[data-language]').forEach(option => {
        option.setAttribute('aria-pressed', String(option.dataset.language === activeLanguage));
    });
    if (menuButton) {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-label', copy[isOpen ? 'menuClose' : 'menuOpen']);
    }
}

const savedLanguage = localStorage.getItem('language') || 'sq';
setLanguage(savedLanguage);

languageSwitcher?.addEventListener('click', () => {
    const isOpen = languageSwitcher.getAttribute('aria-expanded') === 'true';
    languageSwitcher.setAttribute('aria-expanded', String(!isOpen));
    languageOptions.hidden = isOpen;
});

languageOptions?.querySelectorAll('[data-language]').forEach(option => {
    option.addEventListener('click', () => {
        setLanguage(option.dataset.language);
        localStorage.setItem('language', activeLanguage);
        languageSwitcher.setAttribute('aria-expanded', 'false');
        languageOptions.hidden = true;
        languageSwitcher.focus();
    });
});

document.addEventListener('click', event => {
    if (!event.target.closest('.language-control') && languageSwitcher) {
        languageSwitcher.setAttribute('aria-expanded', 'false');
        languageOptions.hidden = true;
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && languageSwitcher) {
        languageSwitcher.setAttribute('aria-expanded', 'false');
        languageOptions.hidden = true;
        languageSwitcher.focus();
    }
});

if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!isOpen));
        menuButton.setAttribute('aria-label', translations[activeLanguage][isOpen ? 'menuOpen' : 'menuClose']);
        navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.setAttribute('aria-label', translations[activeLanguage].menuOpen);
            navigation.classList.remove('is-open');
        });
    });
}

document.querySelector('#year').textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('js-ready');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealItems.forEach(item => revealObserver.observe(item));
}

const contactForm = document.querySelector('#contactForm');
const formStatus = document.querySelector('#form-status');

contactForm?.addEventListener('submit', async event => {
    event.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalLabel = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.textContent = translations[languageSwitcher.value].sendingLabel;
    formStatus.textContent = '';

    try {
        const response = await fetch(contactForm.action, {
            method: contactForm.method,
            body: new FormData(contactForm),
            headers: { Accept: 'application/json' }
        });

        if (!response.ok) throw new Error('Dërgimi dështoi.');

        contactForm.reset();
        formStatus.textContent = translations[languageSwitcher.value].successMessage;
    } catch (error) {
        formStatus.textContent = translations[languageSwitcher.value].errorMessage;
    } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalLabel;
    }
});
