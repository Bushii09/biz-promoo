// Kontrolli fillestar i temës para vizatimit të faqes
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Inicializo Animacionet AOS
AOS.init({
    duration: 800,
    once: false,
    mirror: true
});

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// Sistemi i përkthimeve i plotësuar me të dhënat e seksionit të statistikave
const translations = {
    sq: { 
        badge: "Agjencia #1 e Marketingut në Shqipëri",
        t1: "Ndalo shpenzimet", t2: "Fillo merr klientë", 
        sub: "Ne nuk sjellim thjesht klikime, ne sjellim klientë që blejnë produktet tuaja përmes teknologjisë dhe psikologjisë.", 
        cta: "Më gjej klientë", w: "Çfarë bëjmë ne?",
        a_h: "Analizë", a_p: "Analizojmë biznesin tuaj dhe tregun për të gjetur pikat e forta dhe dobësitë.", 
        s_h: "Strategji", s_p: "Ndërtojmë një sistem automatik që tërheq blerësit e duhur.", 
        r_h: "Rezultate", r_p: "Klientët vijnë direkt te ju. Ju vetëm mbyllni shitjet.",
        stats_badge: "Statistikat tona",
        stats_title: "Rezultate që flasin vetë",
        stats_desc: "Ne ndërtojmë marka moderne, premium dhe performancë reale për bizneset që duan të dominojnë online.",
        s1_v: "500+", s1_t: "Klientë Aktivë",
        s2_v: "3M€", s2_t: "Shitje të Gjeneruara",
        s3_v: "90%", s3_t: "Kënaqësi e Klientëve",
        s4_v: "24/7", s4_t: "Mbështetje Premium",
        c_title: "Le të rrisim biznesin tuaj sot!",
        c_sub: "Rezervoni takim falas me ekspertët tanë.",
        f_name: "Emri i Biznesit", f_phone: "WhatsApp / Tel", f_msg: "Si mund t'ju ndihmojmë?", f_btn: "Dërgo Kërkesën",
        s_btn: "Shërbimet tona",
        footer: "© 2026 BIZPROMOB. Të gjitha të drejtat e rezervuara.",
        alert_success: "Kërkesa u dërgua me sukses! Do t'ju kontaktojmë së shpejti.",
        read_more: "Lexo më shumë",
        m_cta: "Na kontaktoni për konsultim falas  →",
        a_m_title: "Analizë e Thelluar", a_m_sub: "E kuptojmë biznesin tuaj para çdo hapi tjetër",
        a_m_desc: "Analiza jonë nuk është sipërfaqësore — gërmojmë thellë tek industria, konkurrenca dhe blerësit potencialë. Rezultati: një plan veprimi i bazuar në të dhëna reale, jo në supozime.",
        a_s1_t: "Audit i Biznesit", a_s1_d: "Vlerësojmë gjendjen aktuale: çfarë po funkonon, çfarë jo dhe ku po humbasin klientët tuaj.",
        a_s2_t: "Analiza e Konkurrentëve", a_s2_d: "Zbulojmë strategzitë e konkurrentëve — pikat e forta dhe zbrazëtirat që ju mund t'i shfrytëzoni.",
        a_s3_t: "Profili i Blerësit Ideal", a_s3_d: "Identifikojmë kush janë klientët tuaj më të mirë: demografike, sjellje dhe çfarë i bind të blejnë.",
        a_s4_t: "Analiza e Tregut", a_s4_d: "Kuptojmë trendet aktuale dhe hapësirat e papërdorura ku biznesi juaj mund të rritet shpejt.",
        a_st1_v: "360°", a_st1_l: "Vështrim i plotë", a_st2_v: "48h", a_st2_l: "Raport i detajuar", a_st3_v: "100%", a_st3_l: "E personalizuar",
        s_m_title: "Strategji & Funnel Marketing", s_m_sub: "Sistemi që punon 24/7, edhe kur jeni duke fjetur",
        s_m_desc: "Ndërtojmë funnel-in e plotë të shitjes — nga kontakti i parë deri te blerja dhe rikthimi. Gjithçka automatizuar, gjithçka e testuar dhe e optimizuar për konvertim maksimal.",
        s_s1_t: "Ndërtimi i Funnel-it", s_s1_d: "Projektojmë rrugën e blerësit hap pas hapi: awareness → interes → vendim → blerje → rikthim.",
        s_s2_t: "Automatizim i Komunikimit", s_s2_d: "Email sekuenca, SMS dhe follow-up automatik që ndjekin çdo lead pa ndërhyrjen tuaj.",
        s_s3_t: "Reklama të Targetuara", s_s3_d: "Meta Ads & Google Ads të optimizuara për t'u parë nga njerëzit e duhur, në momentin e duhur.",
        s_s4_t: "Përmbajtje Bindëse", s_s4_d: "Tekste reklamash, video-kreativë dhe landing page të ndërtuar mbi psikologjinë e blerjes.",
        s_st1_v: "3×", s_st1_l: "Rritje mesatare", s_st2_v: "24/7", s_st2_l: "Sistem aktiv", s_st3_v: "30d", s_st3_l: "Setup i plotë",
        r_m_title: "Rezultate të Matshme", r_m_sub: "Çdo qindarkë e investuar ka një kthim të qartë",
        r_m_desc: "Nuk besojmë në premtime boshe. Çdo gjë matet, analizohet dhe optimizohet. Shihni saktësisht ku po shkojnë paratë tuaja dhe çfarë po sjellin ato çdo ditë.",
        r_s1_t: "Dashboard në Kohë Reale", r_s1_d: "Shihni live: sa lead keni sot, sa blenë dhe sa kushtoi çdo klient i ri i fituar.",
        r_s2_t: "KPI-të Kryesore", r_s2_d: "Ndjekim CPL (Kosto/Lead), ROAS (Kthim nga Reklamat) and LTV (Vlera e Jetës së Klientit).",
        r_s3_t: "A/B Testing i Vazhdushëm", r_s3_d: "Testojmë variante reklamash dhe faqesh çdo javë për të gjetur formulën me konvertim maksimal.",
        r_s4_t: "Raportim Javor", r_s4_d: "Takime javore ku rishikojmë progresin, diskutojmë rezultatet dhe planifikojmë hapat vijues.",
        r_st1_v: "+87%", r_st1_l: "Konvertim mesatar", r_st2_v: "2.4×", r_st2_l: "ROAS mesatar", r_st3_v: "Live", r_st3_l: "Raportim",
        cats: "REKLAMA • MARKETING • OFERTA • VIDEO PËR FËMIJË",
        n_call: "Na telefono direkt",
        n_email: "Dërgo Email zyrtar"
    },
    en: { 
        badge: "The #1 Marketing Agency in Albania",
        t1: "Stop Wasting", t2: "Start Gaining Customers", 
        sub: "We don't just bring clicks, we bring customers who buy your products through technology and psychology.", 
        cta: "Get Clients", w: "What We Do", 
        a_h: "Analysis", a_p: "We analyze your business and market to find strengths.", 
        s_h: "Strategy", s_p: "We build an automatic system that attracts the right buyers.", 
        r_h: "Results", r_p: "Clients come directly to you. You just close sales.",
        stats_badge: "Our Statistics",
        stats_title: "Results that speak for themselves",
        stats_desc: "We build modern, premium brands and real performance for businesses that want to dominate online.",
        s1_v: "500+", s1_t: "Active Clients",
        s2_v: "3M€", s2_t: "Sales Generated",
        s3_v: "90%", s3_t: "Customer Satisfaction",
        s4_v: "24/7", s4_t: "Premium Support",
        c_title: "Let's grow your business today!",
        c_sub: "Book a free meeting with our experts.",
        f_name: "Business Name", f_phone: "WhatsApp / Phone", f_msg: "How can we help you?", f_btn: "Send Request",
        s_btn: "Our Services",
        footer: "© 2026 BIZPROMOB. All rights reserved.",
        alert_success: "Request sent successfully! We will contact you soon.",
        read_more: "Read more",
        m_cta: "Contact us for a free consultation  →",
        a_m_title: "In-Depth Analysis", a_m_sub: "We understand your business before any other step",
        a_m_desc: "Our analysis is not superficial — we dig deep into the industry, competition, and potential buyers. The result: an action plan based on real data, not assumptions.",
        a_s1_t: "Business Audit", a_s1_d: "We evaluate the current state: what's working, what's not, and where you're losing customers.",
        a_s2_t: "Competitor Analysis", a_s2_d: "We uncover competitor strategies — their strengths and the gaps you can exploit.",
        a_s3_t: "Ideal Buyer Profile", a_s3_d: "We identify who your best customers are: demographics, behavior, and what triggers them to buy.",
        a_s4_t: "Market Analysis", a_s4_d: "We understand current trends and untapped spaces where your business can grow rapidly.",
        a_st1_v: "360°", a_st1_l: "Full overview", a_st2_v: "48h", a_st2_l: "Detailed report", a_st3_v: "100%", a_st3_l: "Personalized",
        s_m_title: "Strategy & Funnel Marketing", s_m_sub: "A system working 24/7, even while you sleep",
        s_m_desc: "We build the complete sales funnel — from first contact to purchase and retention. Fully automated, fully tested, and optimized for maximum conversion.",
        s_s1_t: "Funnel Building", s_s1_d: "We map the buyer's journey step-by-step: awareness → interest → decision → purchase → retention.",
        s_s2_t: "Communication Automation", s_s2_d: "Automated email sequences, SMS, and follow-ups that nurture every lead without your intervention.",
        s_s3_t: "Targeted Ads", s_s3_d: "Meta Ads & Google Ads optimized to be seen by the right people, at the exact right moment.",
        s_s4_t: "Compelling Content", s_s4_d: "Ad copies, video creatives, and landing pages built on the psychology of buying.",
        s_st1_v: "3×", s_st1_l: "Average growth", s_st2_v: "24/7", s_st2_l: "Active system", s_st3_v: "30d", s_st3_l: "Full setup",
        r_m_title: "Measurable Results", r_m_sub: "Every dime invested has a clear return",
        r_m_desc: "We don't believe in empty promises. Everything is measured, analyzed, and optimized. See exactly where your money goes and what it brings every day.",
        r_s1_t: "Real-Time Dashboard", r_s1_d: "See live: how many leads today, how many bought, and the cost of every new acquired customer.",
        r_s2_t: "Key KPIs", r_s2_d: "We track CPL (Cost per Lead), ROAS (Return on Ad Spend), and LTV (Customer Lifetime Value).",
        r_s3_t: "Continuous A/B Testing", r_s3_d: "We test ad variants and landing pages weekly to find the formula with maximum conversion.",
        r_s4_t: "Weekly Reporting", r_s4_d: "Weekly meetings where we review progress, discuss results, and plan the next steps.",
        r_st1_v: "+87%", r_st1_l: "Avg Conversion", r_st2_v: "2.4×", r_st2_l: "Avg ROAS", r_st3_v: "Live", r_st3_l: "Reporting",
        cats: "ADS • MARKETING • OFFERS • VIDEO FOR KIDS",
        n_call: "Call us directly",
        n_email: "Send official Email"
    },
    it: { 
        badge: "L'agenzia di marketing n. 1 in Albania",
        t1: "Smetti di spendere", t2: "Inizia a ottenere clienti", 
        sub: "Non portiamo solo click, portiamo clienti che acquistano i tuoi prodotti tramite tecnologia e psicologia.", 
        cta: "Trovami clienti", w: "Cosa facciamo?", 
        a_h: "Analisi", a_p: "Analizziamo la tua attività e il mercato per trovare i punti di forza.", 
        s_h: "Strategia", s_p: "Costruiamo un sistema automatico che attira gli acquirenti giusti.", 
        r_h: "Risultati", r_p: "I clienti vengono direttamente da te. Tu chiudi solo le vendite.",
        stats_badge: "Le nostre statistiche",
        stats_title: "Risultati che parlano da soli",
        stats_desc: "Costruiamo marchi moderni, premium e prestazioni reali per le aziende che vogliono dominare online.",
        s1_v: "500+", s1_t: "Clienti Attivi",
        s2_v: "3M€", s2_t: "Vendite Generate",
        s3_v: "90%", s3_t: "Soddisfazione Clienti",
        s4_v: "24/7", s4_t: "Supporto Premium",
        c_title: "Cresciamo il tuo business oggi!",
        c_sub: "Prenota un incontro gratuito con i nostri esperti.",
        f_name: "Nome Azienda", f_phone: "WhatsApp / Tel", f_msg: "Come possiamo aiutarti?", f_btn: "Invia Richiesta",
        s_btn: "I nostri servizi",
        footer: "© 2026 BIZPROMOB. Tutti i diritti riservati.",
        alert_success: "Richiesta inviata con successo! Ti contatteremo presto.",
        read_more: "Leggi di più",
        m_cta: "Contattaci per una consulenza gratuita  →",
        a_m_title: "Analisi Approfondita", a_m_sub: "Comprendiamo la tua attività prima di ogni altro passo",
        a_m_desc: "La nostra analisi non è superficiale — scaviamo a fondo nel settore, nella concorrenza e nei potenziali acquirenti. Il risultato: un piano d'azione basato su dati reali, non su supposizioni.",
        a_s1_t: "Audit Aziendale", a_s1_d: "Valutiamo lo stato attuale: cosa funziona, cosa no e dove stai perdendo clienti.",
        a_s2_t: "Analisi dei Concorrenti", a_s2_d: "Scopriamo le strategie dei concorrenti — i loro punti di forza e i divari che puoi sfruttare.",
        a_s3_t: "Profilo del Buyer Ideal", a_s3_d: "Identifichiamo chi sono i tuoi migliori clienti: demografia, comportamento e cosa li spinge a comprare.",
        a_s4_t: "Analisi di Mercato", a_s4_d: "Comprendiamo le tendenze attuali e gli spazi non sfruttati dove la tua attività può crescere rapidamente.",
        a_st1_v: "360°", a_st1_l: "Panoramica completa", a_st2_v: "48h", a_st2_l: "Report dettagliato", a_st3_v: "100%", a_st3_l: "Personalizzato",
        s_m_title: "Strategia & Marketing di Funnel", s_m_sub: "Un sistema che lavora 24/7, anche mentre dormi",
        s_m_desc: "Costruiamo il funnel di vendita completo — dal primo contatto all'acquisto e alla fidelizzazione. Completamente automatizzato, testato e ottimizzato per la massima conversione.",
        s_s1_t: "Creazione del Funnel", s_s1_d: "Mappiamo il percorso dell'acquirente passo dopo passo: consapevolezza → interesse → decisione → acquisto → fidelizzazione.",
        s_s2_t: "Automazione delle Comunicazioni", s_s2_d: "Sequenze email, SMS e follow-up automatici che coltivano ogni lead senza il tuo intervento.",
        s_s3_t: "Annunci Targettizzati", s_s3_d: "Meta Ads e Google Ads ottimizzati per essere visti dalle persone giuste, al momento esatto.",
        s_s4_t: "Contenuti Coinvolgenti", s_s4_d: "Copy degli annunci, creatività video e landing page basate sulla psicologia d'acquisto.",
        s_st1_v: "3×", s_st1_l: "Crescita media", s_st2_v: "24/7", s_st2_l: "Sistema attivo", s_st3_v: "30g", s_st3_l: "Configurazione completa",
        r_m_title: "Risultati Misurabili", r_m_sub: "Ogni centesimo investito ha un ritorno chiaro",
        r_m_desc: "Non crediamo nelle promesse vuote. Tutto viene misurato, analizzato e ottimizzato. Vedi esattamente dove vanno i tuoi soldi e cosa portano ogni giorno.",
        r_s1_t: "Dashboard in Tempo Reale", r_s1_d: "Vedi live: quanti lead oggi, quanti hanno acquistato e il costo di ogni nuovo cliente acquisito.",
        r_s2_t: "KPI Principali", r_s2_d: "Monitoriamo CPL (Costo per Lead), ROAS (Ritorno sulla spesa pubblicitaria) e LTV (Valore del ciclo di vita del cliente).",
        r_s3_t: "A/B Testing Continuo", r_s3_d: "Testiamo varianti di annunci e landing page ogni settimana per trovare la formula con la massima conversione.",
        r_s4_t: "Report Settimanale", r_s4_d: "Incontri settimanali in cui esaminiamo i progressi, discutiamo i risultati e pianifichiamo i passi successivi.",
        r_st1_v: "+87%", r_st1_l: "Conversione media", r_st2_v: "2.4×", r_st2_l: "ROAS medio", r_st3_v: "Live", r_st3_l: "Reportistica",
        cats: "ANNUNCI • MARKETING • OFFERTE • VIDEO PER BAMBINI",
        n_call: "Chiamaci direttamente",
        n_email: "Invia Email ufficiale"
    },
    de: { 
        badge: "Die Marketingagentur Nr. 1 in Albanien",
        t1: "Hör auf zu verschwenden", t2: "Fang an, Kunden zu gewinnen", 
        sub: "Wir bringen nicht nur Klicks, wir bringen Kunden, die Ihre Produkte durch Technologie und Psychologie kaufen.", 
        cta: "Kunden finden", w: "Was wir tun", 
        a_h: "Analyse", a_p: "Wir analysieren Ihr Unternehmen und den Markt.", 
        s_h: "Strategie", s_p: "Wir bauen ein automatisches System auf.", 
        r_h: "Ergebnisse", r_p: "Die Kunden kommen direkt zu Ihnen.",
        stats_badge: "Unsere Statistiken",
        stats_title: "Ergebnisse, die für sich sprechen",
        stats_desc: "Wir bauen moderne, Premium-Marken und echte Leistung für Unternehmen, die online dominieren wollen.",
        s1_v: "500+", s1_t: "Aktive Kunden",
        s2_v: "3M€", s2_t: "Generierter Umsatz",
        s3_v: "90%", s3_t: "Kundenzufriedenheit",
        s4_v: "24/7", s4_t: "Premium-Support",
        c_title: "Lassen Sie uns Ihr Geschäft ausbauen!",
        c_sub: "Buchen Sie ein kostenloses Gespräch mit unseren Experten.",
        f_name: "Firmenname", f_phone: "WhatsApp / Tel", f_msg: "Wie können wir helfen?", f_btn: "Anfrage Senden",
        s_btn: "Unsere Dienste",
        footer: "© 2026 BIZPROMOB. Alle Rechte vorbehalten.",
        alert_success: "Anfrage erfolgreich gesendet! Wir werden Sie bald kontaktieren.",
        read_more: "Mehr lesen",
        m_cta: "Kontaktieren Sie uns für eine kostenlose Beratung  →",
        a_m_title: "Tiefenanalyse", a_m_sub: "Wir verstehen Ihr Unternehmen vor jedem anderen Schritt",
        a_m_desc: "Unsere Analyse ist nicht oberflächlich — wir tauchen tief in die Branche, den Wettbewerb und die potenziellen Käufer ein. Das Ergebnis: ein Aktionsplan basierend auf echten Daten, nicht auf Vermutungen.",
        a_s1_t: "Unternehmens-Audit", a_s1_d: "Wir bewerten den aktuellen Zustand: Was funktioniert, was nicht und wo Sie Kunden verlieren.",
        a_s2_t: "Wettbewerbsanalyse", a_s2_d: "Wir decken die Strategien der Wettbewerber auf — ihre Stärken und die Lücken, die Sie nutzen können.",
        a_s3_t: "Ideales Käuferprofil", a_s3_d: "Wir identifizieren Ihre besten Kunden: Demografie, Verhalten und was sie zum Kauf bewegt.",
        a_s4_t: "Marktanalyse", a_s4_d: "Wir verstehen aktuelle Trends und ungenutzte Räume, in denen Ihr Unternehmen schnell wachsen kann.",
        a_st1_v: "360°", a_st1_l: "Vollständiger Überblick", a_st2_v: "48h", a_st2_l: "Detaillierter Bericht", a_st3_v: "100%", a_st3_l: "Personalisiert",
        s_m_title: "Strategie & Funnel-Marketing", s_m_sub: "Ein System, das rund um die Uhr arbeitet, selbst während Sie schlafen",
        s_m_desc: "Wir bauen den kompletten Verkaufstrichter auf — vom ersten Kontakt bis zum Kauf und der Kundenbindung. Vollständig automatisiert, getestet und für maximale Konvertierung optimiert.",
        s_s1_t: "Funnel-Aufbau", s_s1_d: "Wir bilden die Reise des Käufers Schritt für Schritt ab: Bewusstsein → Interesse → Entscheidung → Kauf → Bindung.",
        s_s2_t: "Kommunikationsautomatisierung", s_s2_d: "Automatisierte E-Mail-Sequenzen, SMS und Follow-ups, die jeden Lead ohne Ihr Zutun pflegen.",
        s_s3_t: "Zielgerichtete Werbung", s_s3_d: "Meta Ads & Google Ads, die so optimiert sind, dass sie von den richtigen Leuten im exakt richtigen Moment gesehen werden.",
        s_s4_t: "Überzeugende Inhalte", s_s4_d: "Werbetexte, Videokreative und Landingpages, die auf der Psychologie des Kaufens basieren.",
        s_st1_v: "3×", s_st1_l: "Durchschnittliches Wachstum", s_st2_v: "24/7", s_st2_l: "Aktives System", s_st3_v: "30t", s_st3_l: "Vollständiges Setup",
        r_m_title: "Messbare Ergebnisse", r_m_sub: "Jeder investierte Groschen hat eine klare Rendite",
        r_m_desc: "Wir glauben nicht an leere Versprechen. Alles wird gemessen, analysiert und optimiert. Sehen Sie genau, wohin Ihr Geld fließt und was es jeden Tag bringt.",
        r_s1_t: "Echtzeit-Dashboard", r_s1_d: "Sehen Sie live: Wie viele Leads heute, wie viele gekauft haben und die Kosten für jeden neu gewonnenen Kunden.",
        r_s2_t: "Wichtige KPIs", r_s2_d: "Wir verfolgen CPL (Kosten pro Lead), ROAS (Nutzen-Kosten-Verhältnis der Werbung) und LTV (Kundenlebenszeitwert).",
        r_s3_t: "Kontinuierliches A/B-Testing", r_s3_d: "Wir testen wöchentlich Werbevarianten und Landingpages, um die Formel mit der maximalen Konvertierung zu finden.",
        r_s4_t: "Wöchentliche Berichterstattung", r_s4_d: "Wöchentliche Treffen, bei denen wir den Fortschritt überprüfen, Ergebnisse besprechen und die nächsten Schritte planen.",
        r_st1_v: "+87%", r_st1_l: "Durschn. Konvertierung", r_st2_v: "2.4×", r_st2_l: "Durschn. ROAS", r_st3_v: "Live", r_st3_l: "Berichterstattung",
        cats: "WERBUNG • MARKETING • ANGEBOTE • VIDEO FÜR KINDER",
        n_call: "Rufen Sie uns direkt an",
        n_email: "Senden Sie eine offizielle E-Mail"
    },
    fr: { 
        badge: "L'agence de marketing n°1 en Albanie",
        t1: "Arrêtez de gaspiller", t2: "Gagnez des clients", 
        sub: "Nous apportons des clients qui achètent vos produits grâce à la technologie.", 
        cta: "Trouver des clients", w: "Ce que nous faisons", 
        a_h: "Analyse", a_p: "Nous analysons votre entreprise.", 
        s_h: "Stratégie", s_p: "Système automatique d'achat.", 
        r_h: "Résultats", r_p: "Les clients viennent à vous.",
        stats_badge: "Nos statistiques",
        stats_title: "Des résultats qui parlent d'eux-mêmes",
        stats_desc: "Nous construisons des marques modernes, premium et des performances réelles pour les entreprises qui veulent dominer en ligne.",
        s1_v: "500+", s1_t: "Clients Actifs",
        s2_v: "3M€", s2_t: "Ventes Générées",
        s3_v: "90%", s3_t: "Satisfaction Client",
        s4_v: "24/7", s4_t: "Support Premium",
        c_title: "Développons votre entreprise!",
        c_sub: "Réservez un rendez-vous gratuit avec nos experts.",
        f_name: "Nom de l'entreprise", f_phone: "WhatsApp / Tel", f_msg: "Comment pouvons-nous vous aider?", f_btn: "Envoyer",
        s_btn: "Nos services",
        footer: "© 2026 BIZPROMOB. Tous droits réservés.",
        alert_success: "Demande envoyée avec succès ! Nous vous contacterons bientôt.",
        read_more: "Lire plus",
        m_cta: "Contactez-nous pour une consultation gratuite  →",
        a_m_title: "Analyse Approfondie", a_m_sub: "Nous comprenons votre entreprise avant toute autre étape",
        a_m_desc: "Notre analyse n'est pas superficielle — nous creusons profondément dans l'industrie, la concurrence et les acheteurs potentiels. Le résultat : un plan d'action basé sur des données réelles, pas sur des hypothèses.",
        a_s1_t: "Audit d'Entreprise", a_s1_d: "Nous évaluons l'état actuel : ce qui fonctionne, ce qui ne fonctionne pas et où vous perdez des clients.",
        a_s2_t: "Analyse des Concurrents", a_s2_d: "Nous découvrons les stratégies des concurrents — leurs forces et les lacunes que vous pouvez exploiter.",
        a_s3_t: "Profil de l'Acheteur Idéal", a_s3_d: "Nous identifions qui sont vos meilleurs clients : données démographiques, comportement et ce qui les pousse à acheter.",
        a_s4_t: "Analyse du Marché", a_s4_d: "Nous comprenons les tendances actuelles et les espaces inexploités où votre entreprise peut croître rapidement.",
        a_st1_v: "360°", a_st1_l: "Vue d'ensemble complète", a_st2_v: "48h", a_st2_l: "Rapport détaillé", a_st3_v: "100%", a_st3_l: "Personnalisé",
        s_m_title: "Stratégie & Marketing de Tunnel", s_m_sub: "Un système qui fonctionne 24h/24, 7j/7, même pendant que vous dormez",
        s_m_desc: "Nous construisons le tunnel de vente complet — du premier contact à l'achat et à la fidélisation. Entièrement automatisé, testé et optimisé pour une conversion maximale.",
        s_s1_t: "Construction du Tunnel", s_s1_d: "Nous cartographions le parcours de l'acheteur étape par étape : notoriété → intérêt → décision → achat → fidélisation.",
        s_s2_t: "Automatisation des Communications", s_s2_d: "Séquences d'e-mails, SMS et suivis automatisés qui nourrissent chaque prospect sans votre intervention.",
        s_s3_t: "Publicités Ciblées", s_s3_d: "Meta Ads & Google Ads optimisés pour être vus par les bonnes personnes, au moment précis.",
        s_s4_t: "Contenu Convaincant", s_s4_d: "Textes publicitaires, créations vidéo et pages de destination construites sur la psychologie de l'achat.",
        s_st1_v: "3×", s_st1_l: "Croissance moyenne", s_st2_v: "24/7", s_st2_l: "Système actif", s_st3_v: "30j", s_st3_l: "Configuration complète",
        r_m_title: "Résultats Mesurables", r_m_sub: "Chaque centime investi a un retour clair",
        r_m_desc: "Nous ne croyons pas aux promesses vides. Tout est mesuré, analysé et optimisé. Voyez exactement où va votre argent et ce qu'il apporte chaque jour.",
        r_s1_t: "Tableau de Bord en Temps Réel", r_s1_d: "Voyez en direct : combien de prospects aujourd'hui, combien ont acheté et le coût de chaque nouveau client acquis.",
        r_s2_t: "Indicateurs Clés (KPI)", r_s2_d: "Nous suivons le CPL (Coût par Prospect), le ROAS (Retour sur investissement publicitaire) et la LTV (Valeur à vie du client).",
        r_s3_t: "Tests A/B Continus", r_s3_d: "Nous testons chaque semaine des variantes d'annonces et de pages de destination pour trouver la formula avec une conversion maximale.",
        r_s4_t: "Rapports Hebdomadaires", r_s4_d: "Réunions hebdomadaires où nous passons en revue les progrès, discutons des résultats et planifions les étapes suivantes.",
        r_st1_v: "+87%", r_st1_l: "Conversion moyenne", r_st2_v: "2.4×", r_st2_l: "ROAS moyen", r_st3_v: "Live", r_st3_l: "Rapports",
        cats: "PUBLICITÉ • MARKETING • OFFRES • VIDÉO POUR ENFANTS",
        n_call: "Appelez-nous directement",
        n_email: "Envoyer un e-mail officiel"
    },
    gr: { 
        badge: "Το #1 Διαφημιστικό Γραφείο στην Αλβανία",
        t1: "Σταματήστε τα έξοδα", t2: "Κερδίστε πελάτες", 
        sub: "Φέρνουμε πελάτες που αγοράζουν τα προϊόντα σας μέσω τεχνολογίας και ψυχολογίας.", 
        cta: "Βρείτε πελάτες", w: "Τι κάνουμε", 
        a_h: "Ανάλυση", a_p: "Αναλύουμε την επιχείρησή σας και την αγορά.", 
        s_h: "Στρατηγική", s_p: "Αυτόματο σύστημα πωλήσεων.", 
        r_h: "Αποτελέσματα", r_p: "Οι πελάτες έρχονται σε εσάς.",
        stats_badge: "Τα στατιστικά μας",
        stats_title: "Αποτελέσματα που μιλούν από μόνα τους",
        stats_desc: "Χτίζουμε σύγχρονα, premium brands και πραγματική απόδοση για επιχειρήσεις που θέλουν να κυριαρχήσουν στο διαδίκτυο.",
        s1_v: "500+", s1_t: "Ενεργοί Πελάτες",
        s2_v: "3M€", s2_t: "Πωλήσεις που Δημιουργήθηκαν",
        s3_v: "90%", s3_t: "Ικανοποίηση Πελατών",
        s4_v: "24/7", s4_t: "Premium Υποστήριξη",
        c_title: "Ας αναπτύξουμε την επιχείρησή σας!",
        c_sub: "Κλείστε ένα δωρεάν ραντεβού με τους ειδικούς μας.",
        f_name: "Όνομα Επιχείρησης", f_phone: "WhatsApp / Τηλ", f_msg: "Πώς μπορούμε να βοηθήσουμε;", f_btn: "Αποστολή",
        s_btn: "Οι υπηρεσίες μας",
        footer: "© 2026 BIZPROMOB. Με επιφύλαξη παντός δικαιώματος.",
        alert_success: "Το αίτημα στάλθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.",
        read_more: "Διααιβάστε περισσότερα",
        m_cta: "Επικοινωνήστε μαζί μας για δωρεάν διαβούλευση  →",
        a_m_title: "Σε Βάθος Ανάλυση", a_m_sub: "Κατανοούμε την επιχείρησή σας πριν από κάθε άλλο βήμα",
        a_m_desc: "Η ανάλυσή μας δεν είναι επιφανειακή — σκάβουμε βαθιά στον κλάδο, τον ανταγωνισμό και τους πιθανούς αγοραστές. Το αποτέλεσμα: ένα σχέδιο δράσης βασισμένο σε πραγματικά δεδομένα, όχι σε υποθέσεις.",
        a_s1_t: "Έλεγχος Επιχείρησης", a_s1_d: "Αξιολογούμε την τρέχουσα κατάσταση: τι λειτουργεί, τι όχι και πού χάνετε πελάτες.",
        a_s2_t: "Ανάλυση Ανταγωνιστών", a_s2_d: "Ανακαλύπτουμε τις στρατηγικές των ανταγωνιστών — τα δυνατά τους σημεία και τα κενά που μπορείτε να εκμεταλλευτείτε.",
        a_s3_t: "Προφίλ Ιδανικού Αγοραστή", a_s3_d: "Προσδιορίζουμε ποιοι είναι οι καλύτεροι πελάτες σας: δημογραφικά στοιχεία, συμπεριφορά και τι τους ωθεί να αγοράσουν.",
        a_s4_t: "Ανάλυση Αγοράς", a_s4_d: "Κατανοούμε τις τρέχουσες τάσεις και τους αναξιοποίητους χώρους όπου η επιχείρησή σας μπορεί να αναπτυχθεί γρήγορα.",
        a_st1_v: "360°", a_st1_l: "Πλήρης επισκόπηση", a_st2_v: "48ώ", a_st2_l: "Λεπτομερής αναφορά", a_st3_v: "100%", a_st3_l: "Εξατομικευμένη",
        s_m_title: "Στρατηγική & Funnel Marketing", s_m_sub: "Ένα σύστημα που λειτουργεί 24/7, ακόμα και όταν κοιμάστε",
        s_m_desc: "Χτίζουμε το πλήρες funnel πωλήσεων — από την πρώτη επαφή έως την αγορά και τη διατήρηση. Πλήρως αυτοματοποιημένο, δοκιμασμένο και βελτιστοποιημένο για μέγιστη μετατροπή.",
        s_s1_t: "Δημιουργία Funnel", s_s1_d: "Χαρτογραφούμε το ταξίδι του αγοραστή βήμα προς βήμα: επίγνωση → ενδιαφέρον → απόφαση → αγορά → διατήρηση.",
        s_s2_t: "Αυτοματοποίηση Επικοινωνίας", s_s2_d: "Αυτοματοποιημένες ακολουθίες email, SMS και follow-ups που φροντίζουν κάθε lead χωρίς τη δική σας παρέμβαση.",
        s_s3_t: "Στοχευμένες Διαφημίσεις", s_s3_d: "Meta Ads & Google Ads βελτιστοποιημένα ώστε να εμφανίζονται στα κατάλληλα άτομα, την κατάλληλη στιγμή.",
        s_s4_t: "Ελκυστικό Περιεχόμενο", s_s4_d: "Κείμενα διαφημίσεων, δημιουργικά βίντεο και landing pages βασισμένα στην ψυχολογία της αγοράς.",
        s_st1_v: "3×", s_st1_l: "Μέση ανάπτυξη", s_st2_v: "24/7", s_st2_l: "Ενεργό σύστημα", s_st3_v: "30ημ", s_st3_l: "Πλήρης εγκατάσταση",
        r_m_title: "Μετρήσιμα Αποτελέσματα", r_m_sub: "Κάθε δεκάρα που επενδύεται έχει μια σαφή απόδοση",
        r_m_desc: "Δεν πιστεύουμε σε κενές υποσχέσεις. Όλα μετριούνται, αναλύονται και βελτιστοποιούνται. Δείτε ακριβώς πού πάνε τα χρήματά σας και τι φέρνουν κάθε μέρα.",
        r_s1_t: "Ταμπλό σε Πραγματικό Χρόνο", r_s1_d: "Δείτε ζωντανά: πόσα leads σήμερα, πόσοι αγόρασαν και το κόστος κάθε νέου πελάτη.",
        r_s2_t: "Βασικά KPIs", r_s2_d: "Παρακολουθούμε το CPL (Κόστος ανά Lead), το ROAS (Απόδοση διαφημιστικής δαπάνης) και το LTV (Αξία κύκλου ζωής πελάτη).",
        r_s3_t: "Συνεχές A/B Testing", r_s3_d: "Δοκιμάζουμε παραλλαγές διαφημίσεων και landing pages εβδομαδιαίως για να βρούμε τη φόρμουλα με τη μέγιστη μετατροπή.",
        r_s4_t: "Εβδομαδιαία Αναφορά", r_s4_d: "Εβδομαδιαίες συναντήσεις όπου ανασκοπούμε την πρόοδο, συζητάμε τα αποτελέσματα και σχεδιάζουμε τα επόμενα βήματα.",
        r_st1_v: "+87%", r_st1_l: "Μέση Μετατροπή", r_st2_v: "2.4×", r_st2_l: "Μέσο ROAS", r_st3_v: "Live", r_st3_l: "Αναφορές",
        cats: "ΔΙΑΦΗΜΙΣΗ • MARKETING • ΠΡΟΣΦΟΡΕΣ • ΒΙΝΤΕΟ ΓΙΑ ΠΑΙΔΙΑ",
        n_call: "Καλέστε μας απευθείας",
        n_email: "Στείλτε επίσημο Email"
    }
};

function setLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

// Inicializimi i gjuhës nga memorie ose default në shqip
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'sq';
    const langSelect = document.getElementById('lang');
    if (langSelect) langSelect.value = savedLang;
    setLang(savedLang);
});

// Ndryshimi i gjuhës dhe ruajtja në memorie
document.getElementById('lang').addEventListener('change', e => {
    setLang(e.target.value);
    localStorage.setItem('lang', e.target.value);
});

// Menaxhimi i dërgimit të formës në mënyrë asinkrone (Premium AJAX Submit)
document.getElementById('contactForm')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const button = form.querySelector('button[type="submit"]');
    const originalContent = button.innerHTML;
    const currentLang = document.getElementById('lang').value || 'sq';
    
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> ...';
    
    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#3b82f6', '#9333ea', '#ffffff']
            });
            
            alert(translations[currentLang].alert_success || "Sukses!");
            form.reset();
        } else {
            alert("Gabim! Ju lutem provoni përsëri.");
        }
    } catch (error) {
        alert("Gabim rrjeti! Kontrolloni lidhjen tuaj.");
    } finally {
        button.disabled = false;
        button.innerHTML = originalContent;
    }
});
    
// Ngarkimi i faqes, aplikimi i gjuhës së ruajtur dhe preloader-i
window.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializimi i gjuhës nga kujtesa (ose default 'sq')
    const savedLang = localStorage.getItem('lang') || 'sq';
    const langSelect = document.getElementById('lang');
    if (langSelect) {
        langSelect.value = savedLang;
        setLang(savedLang);
    }

    // 2. Shiriti i progresit
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        setTimeout(() => {
            progressBar.style.width = '100%';
        }, 100);
    }
});

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 700);
        }, 1500);
    }
});


/* ═══════════════════════════════════════════
   LOGJIKA E MODALIT MULTILINGUAL (IIFE)
   ═══════════════════════════════════════════ */
(function () {

const CONFIG = {
    analiza: {
        prefix: 'a',
        g:  'linear-gradient(135deg,#1e40af,#3b82f6,#93c5fd)',
        ib: '#dbeafe', ic: '#2563eb', icon: 'fa-chart-pie',
        stepsIcon: ['fa-magnifying-glass', 'fa-users-gear', 'fa-bullseye', 'fa-chart-line']
    },
    strategji: {
        prefix: 's',
        g:  'linear-gradient(135deg,#5b21b6,#8b5cf6,#c4b5fd)',
        ib: '#ede9fe', ic: '#7c3aed', icon: 'fa-wand-magic-sparkles',
        stepsIcon: ['fa-filter', 'fa-robot', 'fa-rectangle-ad', 'fa-pen-nib']
    },
    rezultate: {
        prefix: 'r',
        g:  'linear-gradient(135deg,#064e3b,#059669,#6ee7b7)',
        ib: '#d1fae5', ic: '#059669', icon: 'fa-money-bill-trend-up',
        stepsIcon: ['fa-gauge-high', 'fa-chart-column', 'fa-flask-vial', 'fa-comments']
    }
};

function render(id) {
    const lang = document.getElementById('lang').value || 'sq';
    const t = translations[lang];
    const cfg = CONFIG[id];
    const p = cfg.prefix;

    let stepsHTML = '';
    for (let i = 1; i <= 4; i++) {
        stepsHTML += `
            <div class="svc-step">
                <div class="svc-si" style="background:${cfg.ib}">
                    <i class="fas ${cfg.stepsIcon[i-1]}" style="color:${cfg.ic};font-size:.88rem;"></i>
                </div>
                <div>
                    <p class="svc-t">${t[`${p}_s${i}_t`]}</p>
                    <p class="svc-d">${t[`${p}_s${i}_d`]}</p>
                </div>
            </div>`;
    }

    let statsHTML = '';
    for (let i = 1; i <= 3; i++) {
        statsHTML += `
            <div class="svc-stat">
                <p class="svc-sv" style="color:${cfg.ic}">${t[`${p}_st${i}_v`]}</p>
                <p class="svc-sl">${t[`${p}_st${i}_l`]}</p>
            </div>`;
    }

    return `
    <div style="background:${cfg.g};padding:1.85rem 1.7rem 2rem;position:relative;">
        <div class="svc-dh" style="width:36px;height:4px;background:rgba(255,255,255,.38);border-radius:99px;margin:0 auto 1.3rem;"></div>
        <button class="svc-close-btn" aria-label="Mbyll">
            <i class="fas fa-xmark" style="color:#fff;font-size:.88rem;pointer-events:none;"></i>
        </button>
        <div style="width:48px;height:48px;background:rgba(255,255,255,.2);border-radius:.8rem;display:flex;align-items:center;justify-content:center;margin-bottom:.8rem;">
            <i class="fas ${cfg.icon}" style="color:#fff;font-size:1.25rem;"></i>
        </div>
        <h2 style="color:#fff;font-size:clamp(1.3rem,3vw,1.7rem);font-weight:900;line-height:1.15;margin:0 0 .3rem;">${t[`${p}_m_title`]}</h2>
        <p style="color:rgba(255,255,255,.8);font-size:.875rem;margin:0;">${t[`${p}_m_sub`]}</p>
    </div>

    <div style="padding:1.5rem 1.7rem 1.85rem;">
        <p class="svc-desc">${t[`${p}_m_desc`]}</p>
        <div class="svc-grid" style="display:grid;gap:.55rem;margin-bottom:1.35rem;">${stepsHTML}</div>
        <div style="display:flex;gap:.5rem;margin-bottom:1.6rem;">${statsHTML}</div>
        <button class="svc-cta" style="background:${cfg.g};">
            ${t['m_cta']}
        </button>
    </div>`;
}

const modal = document.getElementById('svc-modal');
const body  = document.getElementById('svc-body');

function open(id) {
    body.innerHTML = render(id);
    body.querySelector('.svc-close-btn').onclick = close;
    body.querySelector('.svc-cta').onclick = () => {
        close();
        const t = document.getElementById('kontakti');
        if (t) setTimeout(() => t.scrollIntoView({ behavior: 'smooth' }), 360);
    };
    document.body.style.overflow = 'hidden';
    modal.classList.add('open');
}

function close() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

document.querySelectorAll('[data-modal]').forEach(el =>
    el.addEventListener('click', () => open(el.dataset.modal))
);

document.getElementById('svc-bd').addEventListener('click', close);
document.addEventListener('keydown', e => e.key === 'Escape' && close());

})();
