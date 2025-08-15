export const languages = {
  en: "English",
  ar: "العربية",
  fr: "Français",
  es: "Español",
  de: "Deutsch",
} as const

export type Language = keyof typeof languages

export const translations = {
  en: {
    // Navigation
    p2pCharging: "P2P Charging",
    forHosts: "For Hosts",
    forDrivers: "For Drivers",
    howItWorks: "How It Works",
    contact: "Contact",
    joinNetwork: "Join Network",

    // Hero Section
    heroTitle: "The Future of",
    heroTitleHighlight: "P2P EV Charging",
    heroSubtitle:
      "Connect EV drivers with private charging stations. Earn money by sharing your charger or find convenient, affordable charging anywhere.",
    startCharging: "Start Charging",
    becomeAHost: "Become a Host",

    // P2P Charging Benefits Section
    whyChooseP2P: "Why Choose",
    whyChooseP2PHighlight: "P2P Charging?",
    p2pSubtitle:
      "Peer-to-peer charging revolutionizes how we power electric vehicles, creating a decentralized network that benefits everyone.",

    // P2P Benefits
    lowerCosts: "Lower Costs",
    lowerCostsDesc: "Save up to 40% compared to public charging stations with competitive P2P rates.",
    moreLocations: "More Locations",
    moreLocationsDesc: "Access thousands of private charging points in residential areas and workplaces.",
    availability247: "24/7 Availability",
    availability247Desc: "Find charging options anytime, anywhere with our extensive host network.",
    communityDriven: "Community Driven",
    communityDrivenDesc: "Join a growing community of EV enthusiasts supporting sustainable transport.",
    securePayments: "Secure Payments",
    securePaymentsDesc: "Safe, automated transactions with built-in insurance and dispute resolution.",
    smartMatching: "Smart Matching",
    smartMatchingDesc: "AI-powered system matches you with the perfect charging solution nearby.",

    // For Hosts Section
    earnMoneyAs: "Earn Money as a",
    earnMoneyAsHighlight: "Charging Host",
    hostsSubtitle:
      "Turn your private charging station into a revenue stream. Share your charger when you're not using it.",

    // Host Benefits
    homeChargingSharing: "Home Charging Sharing",
    homeChargingSharingDesc: "List your home charger and earn passive income while you sleep or work.",
    flexibleEarnings: "Flexible Earnings",
    flexibleEarningsDesc: "Set your own rates and availability. Earn $200-800+ monthly on average.",
    usageAnalytics: "Usage Analytics",
    usageAnalyticsDesc: "Track your earnings, usage patterns, and optimize your charging schedule.",
    hostProtection: "Host Protection",
    hostProtectionDesc: "Comprehensive insurance coverage and 24/7 support for all host activities.",
    startHosting: "Start Hosting",

    // For Drivers Section
    perfectFor: "Perfect for",
    perfectForHighlight: "EV Drivers",
    driversSubtitle: "Find convenient, affordable charging options in your neighborhood and beyond.",

    // Driver Benefits
    nearbyCharging: "Nearby Charging",
    nearbyChargingDesc: "Find available chargers within walking distance of your location.",
    instantBooking: "Instant Booking",
    instantBookingDesc: "Reserve charging slots in advance or find immediate availability.",
    easyPayments: "Easy Payments",
    easyPaymentsDesc: "Seamless in-app payments with transparent pricing and receipts.",
    ratedHosts: "Rated Hosts",
    ratedHostsDesc: "Choose from verified hosts with community ratings and reviews.",

    // How It Works Section
    howP2PWorks: "How",
    howP2PWorksHighlight: "P2P Charging",
    howP2PWorksEnd: "Works",
    howItWorksSubtitle: "Simple, secure, and sustainable charging in three easy steps.",

    // Steps
    step1Title: "Find & Book",
    step1Desc: "Browse nearby charging stations, check availability, and book your slot instantly.",
    step2Title: "Charge & Pay",
    step2Desc: "Arrive at the location, plug in your EV, and let our app handle the secure payment.",
    step3Title: "Rate & Go",
    step3Desc: "Rate your experience and help build our trusted community of EV enthusiasts.",

    // P2P Revolution Section
    joinThe: "Join the",
    joinTheHighlight: "P2P Revolution",
    p2pRevolutionDesc:
      "PowerMaps is building the world's largest peer-to-peer EV charging network. By connecting private charger owners with EV drivers, we're making electric vehicle adoption easier and more affordable for everyone.",
    verifiedHosts: "Verified hosts and secure transactions",
    customerSupport: "24/7 customer support and assistance",
    growingNetwork: "Growing network across North Africa",

    // Contact Section
    getInTouch: "Get in",
    getInTouchHighlight: "Touch",
    contactSubtitle:
      "Ready to join the P2P charging revolution? Contact us to learn more about PowerMaps or become a charging host.",
    contactInformation: "Contact Information",
    email: "Email",
    phone: "Phone",
    location: "Location",
    businessHours: "Business Hours",
    businessHoursTime: "Mon-Sat: 9:00 AM - 6:00 PM",
    locationText: "Tunisia, North Africa",

    // Contact Form
    fullName: "Full Name",
    emailAddress: "Email Address",
    subject: "Subject",
    message: "Message",
    fullNamePlaceholder: "Your full name",
    emailPlaceholder: "your.email@example.com",
    subjectPlaceholder: "What's this about?",
    messagePlaceholder: "Tell us more about your inquiry...",
    sendMessage: "Send Message",
    sending: "Sending...",

    // CTA Section
    readyToJoin: "Ready to Join the",
    readyToJoinHighlight: "P2P Charging",
    readyToJoinEnd: "Network?",
    ctaSubtitle:
      "Whether you want to earn money hosting or save money charging, PowerMaps connects you to the future of EV infrastructure.",
    learnMore: "Learn More",

    // Footer
    footerTagline: "The leading P2P EV charging platform connecting drivers with private charging stations.",
    p2pChargingFooter: "P2P Charging",
    getStarted: "Get Started",
    iosApp: "iOS App",
    androidApp: "Android App",
    webPlatform: "Web Platform",
    footerCopyright: "© 2025 PowerMaps. All rights reserved. Powering the P2P EV charging revolution.",

    // Theme & Language
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    language: "Language",
  },
  ar: {
    // Navigation
    p2pCharging: "الشحن P2P",
    forHosts: "للمضيفين",
    forDrivers: "للسائقين",
    howItWorks: "كيف يعمل",
    contact: "اتصل بنا",
    joinNetwork: "انضم للشبكة",

    // Hero Section
    heroTitle: "مستقبل",
    heroTitleHighlight: "شحن السيارات الكهربائية P2P",
    heroSubtitle:
      "ربط سائقي السيارات الكهربائية بمحطات الشحن الخاصة. اكسب المال من خلال مشاركة الشاحن الخاص بك أو ابحث عن شحن مريح وبأسعار معقولة في أي مكان.",
    startCharging: "ابدأ الشحن",
    becomeAHost: "كن مضيفاً",

    // P2P Charging Benefits Section
    whyChooseP2P: "لماذا تختار",
    whyChooseP2PHighlight: "شحن P2P؟",
    p2pSubtitle:
      "الشحن من نظير إلى نظير يحدث ثورة في كيفية تشغيل السيارات الكهربائية، مما يخلق شبكة لامركزية تفيد الجميع.",

    // P2P Benefits
    lowerCosts: "تكاليف أقل",
    lowerCostsDesc: "وفر حتى 40% مقارنة بمحطات الشحن العامة مع أسعار P2P التنافسية.",
    moreLocations: "مواقع أكثر",
    moreLocationsDesc: "الوصول إلى آلاف نقاط الشحن الخاصة في المناطق السكنية وأماكن العمل.",
    availability247: "متاح 24/7",
    availability247Desc: "ابحث عن خيارات الشحن في أي وقت وفي أي مكان مع شبكة المضيفين الواسعة لدينا.",
    communityDriven: "مدفوع بالمجتمع",
    communityDrivenDesc: "انضم إلى مجتمع متنامي من عشاق السيارات الكهربائية الذين يدعمون النقل المستدام.",
    securePayments: "مدفوعات آمنة",
    securePaymentsDesc: "معاملات آمنة وآلية مع تأمين مدمج وحل النزاعات.",
    smartMatching: "مطابقة ذكية",
    smartMatchingDesc: "نظام مدعوم بالذكاء الاصطناعي يطابقك مع حل الشحن المثالي القريب منك.",

    // For Hosts Section
    earnMoneyAs: "اكسب المال كـ",
    earnMoneyAsHighlight: "مضيف شحن",
    hostsSubtitle: "حول محطة الشحن الخاصة بك إلى مصدر دخل. شارك الشاحن الخاص بك عندما لا تستخدمه.",

    // Host Benefits
    homeChargingSharing: "مشاركة الشحن المنزلي",
    homeChargingSharingDesc: "أدرج الشاحن المنزلي الخاص بك واكسب دخلاً سلبياً أثناء النوم أو العمل.",
    flexibleEarnings: "أرباح مرنة",
    flexibleEarningsDesc: "حدد أسعارك وتوفرك الخاص. اكسب 200-800 دولار+ شهرياً في المتوسط.",
    usageAnalytics: "تحليلات الاستخدام",
    usageAnalyticsDesc: "تتبع أرباحك وأنماط الاستخدام وحسّن جدول الشحن الخاص بك.",
    hostProtection: "حماية المضيف",
    hostProtectionDesc: "تغطية تأمينية شاملة ودعم على مدار الساعة لجميع أنشطة المضيف.",
    startHosting: "ابدأ الاستضافة",

    // For Drivers Section
    perfectFor: "مثالي لـ",
    perfectForHighlight: "سائقي السيارات الكهربائية",
    driversSubtitle: "ابحث عن خيارات شحن مريحة وبأسعار معقولة في حيك وما بعده.",

    // Driver Benefits
    nearbyCharging: "شحن قريب",
    nearbyChargingDesc: "ابحث عن الشواحن المتاحة على مسافة قريبة من موقعك.",
    instantBooking: "حجز فوري",
    instantBookingDesc: "احجز فترات الشحن مسبقاً أو ابحث عن التوفر الفوري.",
    easyPayments: "مدفوعات سهلة",
    easyPaymentsDesc: "مدفوعات سلسة داخل التطبيق مع أسعار شفافة وإيصالات.",
    ratedHosts: "مضيفون مقيمون",
    ratedHostsDesc: "اختر من المضيفين المعتمدين مع تقييمات ومراجعات المجتمع.",

    // How It Works Section
    howP2PWorks: "كيف يعمل",
    howP2PWorksHighlight: "شحن P2P",
    howP2PWorksEnd: "",
    howItWorksSubtitle: "شحن بسيط وآمن ومستدام في ثلاث خطوات سهلة.",

    // Steps
    step1Title: "ابحث واحجز",
    step1Desc: "تصفح محطات الشحن القريبة، تحقق من التوفر، واحجز فترتك فوراً.",
    step2Title: "اشحن وادفع",
    step2Desc: "وصل إلى الموقع، وصل سيارتك الكهربائية، ودع تطبيقنا يتعامل مع الدفع الآمن.",
    step3Title: "قيّم وانطلق",
    step3Desc: "قيّم تجربتك وساعد في بناء مجتمعنا الموثوق من عشاق السيارات الكهربائية.",

    // P2P Revolution Section
    joinThe: "انضم إلى",
    joinTheHighlight: "ثورة P2P",
    p2pRevolutionDesc:
      "PowerMaps تبني أكبر شبكة شحن للسيارات الكهربائية من نظير إلى نظير في العالم. من خلال ربط أصحاب الشواحن الخاصة بسائقي السيارات الكهربائية، نجعل اعتماد السيارات الكهربائية أسهل وأكثر تكلفة للجميع.",
    verifiedHosts: "مضيفون معتمدون ومعاملات آمنة",
    customerSupport: "دعم العملاء على مدار الساعة والمساعدة",
    growingNetwork: "شبكة متنامية عبر شمال أفريقيا",

    // Contact Section
    getInTouch: "تواصل",
    getInTouchHighlight: "معنا",
    contactSubtitle: "مستعد للانضمام إلى ثورة الشحن P2P؟ اتصل بنا لتعلم المزيد عن PowerMaps أو لتصبح مضيف شحن.",
    contactInformation: "معلومات الاتصال",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "الموقع",
    businessHours: "ساعات العمل",
    businessHoursTime: "الإثنين-السبت: 9:00 ص - 6:00 م",
    locationText: "تونس، شمال أفريقيا",

    // Contact Form
    fullName: "الاسم الكامل",
    emailAddress: "عنوان البريد الإلكتروني",
    subject: "الموضوع",
    message: "الرسالة",
    fullNamePlaceholder: "اسمك الكامل",
    emailPlaceholder: "your.email@example.com",
    subjectPlaceholder: "ما هو الموضوع؟",
    messagePlaceholder: "أخبرنا المزيد عن استفسارك...",
    sendMessage: "إرسال الرسالة",
    sending: "جاري الإرسال...",

    // CTA Section
    readyToJoin: "مستعد للانضمام إلى",
    readyToJoinHighlight: "شبكة شحن P2P؟",
    readyToJoinEnd: "",
    ctaSubtitle:
      "سواء كنت تريد كسب المال من الاستضافة أو توفير المال في الشحن، PowerMaps يربطك بمستقبل البنية التحتية للسيارات الكهربائية.",
    learnMore: "تعلم المزيد",

    // Footer
    footerTagline: "منصة الشحن P2P الرائدة للسيارات الكهربائية التي تربط السائقين بمحطات الشحن الخاصة.",
    p2pChargingFooter: "شحن P2P",
    getStarted: "ابدأ",
    iosApp: "تطبيق iOS",
    androidApp: "تطبيق Android",
    webPlatform: "منصة الويب",
    footerCopyright: "© 2025 PowerMaps. جميع الحقوق محفوظة. تشغيل ثورة شحن السيارات الكهربائية P2P.",

    // Theme & Language
    lightMode: "الوضع الفاتح",
    darkMode: "الوضع الداكن",
    language: "اللغة",
  },
  fr: {
    // Navigation
    p2pCharging: "Recharge P2P",
    forHosts: "Pour Hôtes",
    forDrivers: "Pour Conducteurs",
    howItWorks: "Comment ça marche",
    contact: "Contact",
    joinNetwork: "Rejoindre le Réseau",

    // Hero Section
    heroTitle: "L'avenir de la",
    heroTitleHighlight: "Recharge P2P de VE",
    heroSubtitle:
      "Connectez les conducteurs de VE avec des stations de recharge privées. Gagnez de l'argent en partageant votre chargeur ou trouvez une recharge pratique et abordable partout.",
    startCharging: "Commencer à Recharger",
    becomeAHost: "Devenir Hôte",

    // P2P Charging Benefits Section
    whyChooseP2P: "Pourquoi choisir la",
    whyChooseP2PHighlight: "Recharge P2P ?",
    p2pSubtitle:
      "La recharge de pair à pair révolutionne la façon dont nous alimentons les véhicules électriques, créant un réseau décentralisé qui profite à tous.",

    // P2P Benefits
    lowerCosts: "Coûts Réduits",
    lowerCostsDesc:
      "Économisez jusqu'à 40% par rapport aux stations de recharge publiques avec des tarifs P2P compétitifs.",
    moreLocations: "Plus d'Emplacements",
    moreLocationsDesc:
      "Accédez à des milliers de points de recharge privés dans les zones résidentielles et les lieux de travail.",
    availability247: "Disponibilité 24/7",
    availability247Desc: "Trouvez des options de recharge à tout moment, n'importe où avec notre vaste réseau d'hôtes.",
    communityDriven: "Communautaire",
    communityDrivenDesc: "Rejoignez une communauté croissante d'enthousiastes de VE soutenant le transport durable.",
    securePayments: "Paiements Sécurisés",
    securePaymentsDesc: "Transactions sûres et automatisées avec assurance intégrée et résolution de litiges.",
    smartMatching: "Correspondance Intelligente",
    smartMatchingDesc: "Système alimenté par IA qui vous associe à la solution de recharge parfaite à proximité.",

    // For Hosts Section
    earnMoneyAs: "Gagnez de l'argent en tant qu'",
    earnMoneyAsHighlight: "Hôte de Recharge",
    hostsSubtitle:
      "Transformez votre station de recharge privée en source de revenus. Partagez votre chargeur quand vous ne l'utilisez pas.",

    // Host Benefits
    homeChargingSharing: "Partage de Recharge Domestique",
    homeChargingSharingDesc:
      "Listez votre chargeur domestique et gagnez un revenu passif pendant que vous dormez ou travaillez.",
    flexibleEarnings: "Revenus Flexibles",
    flexibleEarningsDesc: "Fixez vos propres tarifs et disponibilité. Gagnez 200-800$+ par mois en moyenne.",
    usageAnalytics: "Analyses d'Utilisation",
    usageAnalyticsDesc: "Suivez vos revenus, modèles d'utilisation et optimisez votre planning de recharge.",
    hostProtection: "Protection Hôte",
    hostProtectionDesc: "Couverture d'assurance complète et support 24/7 pour toutes les activités d'hôte.",
    startHosting: "Commencer l'Hébergement",

    // For Drivers Section
    perfectFor: "Parfait pour les",
    perfectForHighlight: "Conducteurs de VE",
    driversSubtitle: "Trouvez des options de recharge pratiques et abordables dans votre quartier et au-delà.",

    // Driver Benefits
    nearbyCharging: "Recharge à Proximité",
    nearbyChargingDesc: "Trouvez des chargeurs disponibles à distance de marche de votre emplacement.",
    instantBooking: "Réservation Instantanée",
    instantBookingDesc: "Réservez des créneaux de recharge à l'avance ou trouvez une disponibilité immédiate.",
    easyPayments: "Paiements Faciles",
    easyPaymentsDesc: "Paiements transparents dans l'app avec tarification transparente et reçus.",
    ratedHosts: "Hôtes Évalués",
    ratedHostsDesc: "Choisissez parmi des hôtes vérifiés avec évaluations et avis de la communauté.",

    // How It Works Section
    howP2PWorks: "Comment fonctionne la",
    howP2PWorksHighlight: "Recharge P2P",
    howP2PWorksEnd: "",
    howItWorksSubtitle: "Recharge simple, sécurisée et durable en trois étapes faciles.",

    // Steps
    step1Title: "Trouver et Réserver",
    step1Desc:
      "Parcourez les stations de recharge à proximité, vérifiez la disponibilité et réservez votre créneau instantanément.",
    step2Title: "Recharger et Payer",
    step2Desc: "Arrivez à l'emplacement, branchez votre VE et laissez notre app gérer le paiement sécurisé.",
    step3Title: "Évaluer et Partir",
    step3Desc: "Évaluez votre expérience et aidez à construire notre communauté de confiance d'enthousiastes de VE.",

    // P2P Revolution Section
    joinThe: "Rejoignez la",
    joinTheHighlight: "Révolution P2P",
    p2pRevolutionDesc:
      "PowerMaps construit le plus grand réseau de recharge de VE de pair à pair au monde. En connectant les propriétaires de chargeurs privés avec les conducteurs de VE, nous rendons l'adoption des véhicules électriques plus facile et plus abordable pour tous.",
    verifiedHosts: "Hôtes vérifiés et transactions sécurisées",
    customerSupport: "Support client 24/7 et assistance",
    growingNetwork: "Réseau en croissance à travers l'Afrique du Nord",

    // Contact Section
    getInTouch: "Entrer en",
    getInTouchHighlight: "Contact",
    contactSubtitle:
      "Prêt à rejoindre la révolution de la recharge P2P ? Contactez-nous pour en savoir plus sur PowerMaps ou devenir un hôte de recharge.",
    contactInformation: "Informations de Contact",
    email: "Email",
    phone: "Téléphone",
    location: "Emplacement",
    businessHours: "Heures d'Ouverture",
    businessHoursTime: "Lun-Sam : 9h00 - 18h00",
    locationText: "Tunisie, Afrique du Nord",

    // Contact Form
    fullName: "Nom Complet",
    emailAddress: "Adresse Email",
    subject: "Sujet",
    message: "Message",
    fullNamePlaceholder: "Votre nom complet",
    emailPlaceholder: "votre.email@exemple.com",
    subjectPlaceholder: "De quoi s'agit-il ?",
    messagePlaceholder: "Parlez-nous de votre demande...",
    sendMessage: "Envoyer le Message",
    sending: "Envoi en cours...",

    // CTA Section
    readyToJoin: "Prêt à rejoindre le",
    readyToJoinHighlight: "Réseau de Recharge P2P ?",
    readyToJoinEnd: "",
    ctaSubtitle:
      "Que vous souhaitiez gagner de l'argent en hébergeant ou économiser de l'argent en rechargeant, PowerMaps vous connecte à l'avenir de l'infrastructure VE.",
    learnMore: "En Savoir Plus",

    // Footer
    footerTagline:
      "La plateforme de recharge P2P de VE leader connectant les conducteurs aux stations de recharge privées.",
    p2pChargingFooter: "Recharge P2P",
    getStarted: "Commencer",
    iosApp: "App iOS",
    androidApp: "App Android",
    webPlatform: "Plateforme Web",
    footerCopyright: "© 2025 PowerMaps. Tous droits réservés. Alimenter la révolution de la recharge P2P de VE.",

    // Theme & Language
    lightMode: "Mode Clair",
    darkMode: "Mode Sombre",
    language: "Langue",
  },
  es: {
    // Navigation
    p2pCharging: "Carga P2P",
    forHosts: "Para Anfitriones",
    forDrivers: "Para Conductores",
    howItWorks: "Cómo Funciona",
    contact: "Contacto",
    joinNetwork: "Unirse a la Red",

    // Hero Section
    heroTitle: "El futuro de la",
    heroTitleHighlight: "Carga P2P de VE",
    heroSubtitle:
      "Conecta conductores de VE con estaciones de carga privadas. Gana dinero compartiendo tu cargador o encuentra carga conveniente y asequible en cualquier lugar.",
    startCharging: "Comenzar a Cargar",
    becomeAHost: "Convertirse en Anfitrión",

    // P2P Charging Benefits Section
    whyChooseP2P: "¿Por qué elegir",
    whyChooseP2PHighlight: "Carga P2P?",
    p2pSubtitle:
      "La carga de igual a igual revoluciona cómo alimentamos los vehículos eléctricos, creando una red descentralizada que beneficia a todos.",

    // P2P Benefits
    lowerCosts: "Costos Menores",
    lowerCostsDesc: "Ahorra hasta 40% comparado con estaciones de carga públicas con tarifas P2P competitivas.",
    moreLocations: "Más Ubicaciones",
    moreLocationsDesc: "Accede a miles de puntos de carga privados en áreas residenciales y lugares de trabajo.",
    availability247: "Disponibilidad 24/7",
    availability247Desc:
      "Encuentra opciones de carga en cualquier momento, en cualquier lugar con nuestra extensa red de anfitriones.",
    communityDriven: "Impulsado por la Comunidad",
    communityDrivenDesc: "Únete a una comunidad creciente de entusiastas de VE apoyando el transporte sostenible.",
    securePayments: "Pagos Seguros",
    securePaymentsDesc: "Transacciones seguras y automatizadas con seguro integrado y resolución de disputas.",
    smartMatching: "Emparejamiento Inteligente",
    smartMatchingDesc: "Sistema impulsado por IA que te empareja con la solución de carga perfecta cerca de ti.",

    // For Hosts Section
    earnMoneyAs: "Gana dinero como",
    earnMoneyAsHighlight: "Anfitrión de Carga",
    hostsSubtitle:
      "Convierte tu estación de carga privada en una fuente de ingresos. Comparte tu cargador cuando no lo uses.",

    // Host Benefits
    homeChargingSharing: "Compartir Carga Doméstica",
    homeChargingSharingDesc: "Lista tu cargador doméstico y gana ingresos pasivos mientras duermes o trabajas.",
    flexibleEarnings: "Ganancias Flexibles",
    flexibleEarningsDesc: "Establece tus propias tarifas y disponibilidad. Gana $200-800+ mensualmente en promedio.",
    usageAnalytics: "Análisis de Uso",
    usageAnalyticsDesc: "Rastrea tus ganancias, patrones de uso y optimiza tu horario de carga.",
    hostProtection: "Protección del Anfitrión",
    hostProtectionDesc: "Cobertura de seguro integral y soporte 24/7 para todas las actividades de anfitrión.",
    startHosting: "Comenzar Hospedaje",

    // For Drivers Section
    perfectFor: "Perfecto para",
    perfectForHighlight: "Conductores de VE",
    driversSubtitle: "Encuentra opciones de carga convenientes y asequibles en tu vecindario y más allá.",

    // Driver Benefits
    nearbyCharging: "Carga Cercana",
    nearbyChargingDesc: "Encuentra cargadores disponibles a distancia caminable de tu ubicación.",
    instantBooking: "Reserva Instantánea",
    instantBookingDesc: "Reserva espacios de carga con anticipación o encuentra disponibilidad inmediata.",
    easyPayments: "Pagos Fáciles",
    easyPaymentsDesc: "Pagos fluidos en la app con precios transparentes y recibos.",
    ratedHosts: "Anfitriones Calificados",
    ratedHostsDesc: "Elige entre anfitriones verificados con calificaciones y reseñas de la comunidad.",

    // How It Works Section
    howP2PWorks: "Cómo funciona la",
    howP2PWorksHighlight: "Carga P2P",
    howP2PWorksEnd: "",
    howItWorksSubtitle: "Carga simple, segura y sostenible en tres pasos fáciles.",

    // Steps
    step1Title: "Buscar y Reservar",
    step1Desc: "Navega estaciones de carga cercanas, verifica disponibilidad y reserva tu espacio al instante.",
    step2Title: "Cargar y Pagar",
    step2Desc: "Llega a la ubicación, conecta tu VE y deja que nuestra app maneje el pago seguro.",
    step3Title: "Calificar e Irse",
    step3Desc: "Califica tu experiencia y ayuda a construir nuestra comunidad confiable de entusiastas de VE.",

    // P2P Revolution Section
    joinThe: "Únete a la",
    joinTheHighlight: "Revolución P2P",
    p2pRevolutionDesc:
      "PowerMaps está construyendo la red de carga de VE de igual a igual más grande del mundo. Al conectar propietarios de cargadores privados con conductores de VE, estamos haciendo la adopción de vehículos eléctricos más fácil y asequible para todos.",
    verifiedHosts: "Anfitriones verificados y transacciones seguras",
    customerSupport: "Soporte al cliente 24/7 y asistencia",
    growingNetwork: "Red en crecimiento a través del Norte de África",

    // Contact Section
    getInTouch: "Ponerse en",
    getInTouchHighlight: "Contacto",
    contactSubtitle:
      "¿Listo para unirte a la revolución de carga P2P? Contáctanos para aprender más sobre PowerMaps o convertirte en un anfitrión de carga.",
    contactInformation: "Información de Contacto",
    email: "Email",
    phone: "Teléfono",
    location: "Ubicación",
    businessHours: "Horario Comercial",
    businessHoursTime: "Lun-Sáb: 9:00 AM - 6:00 PM",
    locationText: "Túnez, Norte de África",

    // Contact Form
    fullName: "Nombre Completo",
    emailAddress: "Dirección de Email",
    subject: "Asunto",
    message: "Mensaje",
    fullNamePlaceholder: "Tu nombre completo",
    emailPlaceholder: "tu.email@ejemplo.com",
    subjectPlaceholder: "¿De qué se trata?",
    messagePlaceholder: "Cuéntanos más sobre tu consulta...",
    sendMessage: "Enviar Mensaje",
    sending: "Enviando...",

    // CTA Section
    readyToJoin: "¿Listo para unirte a la",
    readyToJoinHighlight: "Red de Carga P2P?",
    readyToJoinEnd: "",
    ctaSubtitle:
      "Ya sea que quieras ganar dinero hospedando o ahorrar dinero cargando, PowerMaps te conecta al futuro de la infraestructura VE.",
    learnMore: "Aprender Más",

    // Footer
    footerTagline: "La plataforma líder de carga P2P de VE conectando conductores con estaciones de carga privadas.",
    p2pChargingFooter: "Carga P2P",
    getStarted: "Comenzar",
    iosApp: "App iOS",
    androidApp: "App Android",
    webPlatform: "Plataforma Web",
    footerCopyright: "© 2025 PowerMaps. Todos los derechos reservados. Impulsando la revolución de carga P2P de VE.",

    // Theme & Language
    lightMode: "Modo Claro",
    darkMode: "Modo Oscuro",
    language: "Idioma",
  },
  de: {
    // Navigation
    p2pCharging: "P2P Laden",
    forHosts: "Für Gastgeber",
    forDrivers: "Für Fahrer",
    howItWorks: "Wie es funktioniert",
    contact: "Kontakt",
    joinNetwork: "Netzwerk beitreten",

    // Hero Section
    heroTitle: "Die Zukunft des",
    heroTitleHighlight: "P2P EV Ladens",
    heroSubtitle:
      "Verbinden Sie EV-Fahrer mit privaten Ladestationen. Verdienen Sie Geld, indem Sie Ihr Ladegerät teilen oder finden Sie bequemes, erschwingliches Laden überall.",
    startCharging: "Laden beginnen",
    becomeAHost: "Gastgeber werden",

    // P2P Charging Benefits Section
    whyChooseP2P: "Warum",
    whyChooseP2PHighlight: "P2P Laden wählen?",
    p2pSubtitle:
      "Peer-to-Peer-Laden revolutioniert, wie wir Elektrofahrzeuge antreiben und schafft ein dezentrales Netzwerk, das allen zugute kommt.",

    // P2P Benefits
    lowerCosts: "Niedrigere Kosten",
    lowerCostsDesc:
      "Sparen Sie bis zu 40% im Vergleich zu öffentlichen Ladestationen mit wettbewerbsfähigen P2P-Tarifen.",
    moreLocations: "Mehr Standorte",
    moreLocationsDesc: "Zugang zu Tausenden privater Ladepunkte in Wohngebieten und Arbeitsplätzen.",
    availability247: "24/7 Verfügbarkeit",
    availability247Desc: "Finden Sie Ladeoptionen jederzeit, überall mit unserem umfangreichen Gastgeber-Netzwerk.",
    communityDriven: "Community-getrieben",
    communityDrivenDesc:
      "Treten Sie einer wachsenden Gemeinschaft von EV-Enthusiasten bei, die nachhaltigen Transport unterstützen.",
    securePayments: "Sichere Zahlungen",
    securePaymentsDesc: "Sichere, automatisierte Transaktionen mit integrierter Versicherung und Streitbeilegung.",
    smartMatching: "Intelligente Zuordnung",
    smartMatchingDesc: "KI-gestütztes System, das Sie mit der perfekten Ladelösung in Ihrer Nähe verbindet.",

    // For Hosts Section
    earnMoneyAs: "Verdienen Sie Geld als",
    earnMoneyAsHighlight: "Lade-Gastgeber",
    hostsSubtitle:
      "Verwandeln Sie Ihre private Ladestation in eine Einnahmequelle. Teilen Sie Ihr Ladegerät, wenn Sie es nicht verwenden.",

    // Host Benefits
    homeChargingSharing: "Heimladen teilen",
    homeChargingSharingDesc:
      "Listen Sie Ihr Heimladegerät auf und verdienen Sie passives Einkommen während Sie schlafen oder arbeiten.",
    flexibleEarnings: "Flexible Einnahmen",
    flexibleEarningsDesc:
      "Setzen Sie Ihre eigenen Tarife und Verfügbarkeit. Verdienen Sie durchschnittlich $200-800+ monatlich.",
    usageAnalytics: "Nutzungsanalysen",
    usageAnalyticsDesc: "Verfolgen Sie Ihre Einnahmen, Nutzungsmuster und optimieren Sie Ihren Ladeplan.",
    hostProtection: "Gastgeber-Schutz",
    hostProtectionDesc: "Umfassende Versicherungsdeckung und 24/7-Support für alle Gastgeber-Aktivitäten.",
    startHosting: "Hosting beginnen",

    // For Drivers Section
    perfectFor: "Perfekt für",
    perfectForHighlight: "EV-Fahrer",
    driversSubtitle: "Finden Sie bequeme, erschwingliche Ladeoptionen in Ihrer Nachbarschaft und darüber hinaus.",

    // Driver Benefits
    nearbyCharging: "Nahes Laden",
    nearbyChargingDesc: "Finden Sie verfügbare Ladegeräte in Gehweite von Ihrem Standort.",
    instantBooking: "Sofortbuchung",
    instantBookingDesc: "Reservieren Sie Ladeslots im Voraus oder finden Sie sofortige Verfügbarkeit.",
    easyPayments: "Einfache Zahlungen",
    easyPaymentsDesc: "Nahtlose In-App-Zahlungen mit transparenter Preisgestaltung und Belegen.",
    ratedHosts: "Bewertete Gastgeber",
    ratedHostsDesc: "Wählen Sie aus verifizierten Gastgebern mit Community-Bewertungen und Rezensionen.",

    // How It Works Section
    howP2PWorks: "Wie",
    howP2PWorksHighlight: "P2P Laden",
    howP2PWorksEnd: "funktioniert",
    howItWorksSubtitle: "Einfaches, sicheres und nachhaltiges Laden in drei einfachen Schritten.",

    // Steps
    step1Title: "Finden & Buchen",
    step1Desc:
      "Durchsuchen Sie nahegelegene Ladestationen, prüfen Sie die Verfügbarkeit und buchen Sie Ihren Slot sofort.",
    step2Title: "Laden & Bezahlen",
    step2Desc:
      "Kommen Sie am Standort an, schließen Sie Ihr EV an und lassen Sie unsere App die sichere Zahlung abwickeln.",
    step3Title: "Bewerten & Gehen",
    step3Desc:
      "Bewerten Sie Ihre Erfahrung und helfen Sie beim Aufbau unserer vertrauenswürdigen Gemeinschaft von EV-Enthusiasten.",

    // P2P Revolution Section
    joinThe: "Treten Sie der",
    joinTheHighlight: "P2P Revolution bei",
    p2pRevolutionDesc:
      "PowerMaps baut das weltweit größte Peer-to-Peer-EV-Ladenetzwerk auf. Durch die Verbindung privater Ladegerätbesitzer mit EV-Fahrern machen wir die Einführung von Elektrofahrzeugen für alle einfacher und erschwinglicher.",
    verifiedHosts: "Verifizierte Gastgeber und sichere Transaktionen",
    customerSupport: "24/7 Kundensupport und Unterstützung",
    growingNetwork: "Wachsendes Netzwerk in Nordafrika",

    // Contact Section
    getInTouch: "In Kontakt",
    getInTouchHighlight: "treten",
    contactSubtitle:
      "Bereit, der P2P-Laderevolution beizutreten? Kontaktieren Sie uns, um mehr über PowerMaps zu erfahren oder ein Lade-Gastgeber zu werden.",
    contactInformation: "Kontaktinformationen",
    email: "E-Mail",
    phone: "Telefon",
    location: "Standort",
    businessHours: "Geschäftszeiten",
    businessHoursTime: "Mo-Sa: 9:00 - 18:00",
    locationText: "Tunesien, Nordafrika",

    // Contact Form
    fullName: "Vollständiger Name",
    emailAddress: "E-Mail-Adresse",
    subject: "Betreff",
    message: "Nachricht",
    fullNamePlaceholder: "Ihr vollständiger Name",
    emailPlaceholder: "ihre.email@beispiel.com",
    subjectPlaceholder: "Worum geht es?",
    messagePlaceholder: "Erzählen Sie uns mehr über Ihre Anfrage...",
    sendMessage: "Nachricht senden",
    sending: "Wird gesendet...",

    // CTA Section
    readyToJoin: "Bereit, dem",
    readyToJoinHighlight: "P2P-Ladenetzwerk beizutreten?",
    readyToJoinEnd: "",
    ctaSubtitle:
      "Ob Sie Geld mit Hosting verdienen oder beim Laden sparen möchten, PowerMaps verbindet Sie mit der Zukunft der EV-Infrastruktur.",
    learnMore: "Mehr erfahren",

    // Footer
    footerTagline: "Die führende P2P-EV-Ladeplattform, die Fahrer mit privaten Ladestationen verbindet.",
    p2pChargingFooter: "P2P Laden",
    getStarted: "Loslegen",
    iosApp: "iOS App",
    androidApp: "Android App",
    webPlatform: "Web-Plattform",
    footerCopyright: "© 2025 PowerMaps. Alle Rechte vorbehalten. Die P2P-EV-Laderevolution antreiben.",

    // Theme & Language
    lightMode: "Heller Modus",
    darkMode: "Dunkler Modus",
    language: "Sprache",
  },
} as const
