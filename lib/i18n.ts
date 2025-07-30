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
    features: "Features",
    operators: "Operators",
    whyPowerMaps: "Why PowerMaps",
    sustainability: "Sustainability",
    downloadApp: "Download App",

    // Hero Section
    heroTitle: "Find. Reserve. Charge.",
    heroTitleHighlight: "Globally.",
    heroSubtitle:
      "PowerMaps connects EV drivers worldwide to charging stations with real-time availability, smart reservations, and seamless payments.",
    downloadTheApp: "Download the App",
    findAStation: "Find a Station",

    // Features Section
    featuresTitle: "Features for",
    featuresHighlight: "EV Users",
    featuresSubtitle: "Everything you need for a seamless charging experience, anywhere in the world.",

    // Feature Cards
    globalStationNetwork: "Global Station Network",
    globalStationDesc: "Access charging stations worldwide with real-time availability updates.",
    smartReservations: "Smart Reservations",
    smartReservationsDesc: "Book your charging slot in advance for guaranteed access anywhere.",
    crossBorderCompatibility: "Cross-Border Compatibility",
    crossBorderDesc: "Seamlessly charge across different networks and countries.",
    universalPayments: "Universal Payments",
    universalPaymentsDesc: "One app, multiple payment methods, works in any supported region.",
    internationalRoutePlanning: "International Route Planning",
    routePlanningDesc: "Plan long journeys across borders with integrated charging stops.",
    multiLanguageSupport: "Multi-language Support",
    multiLanguageDesc: "Available in local languages for seamless global experience.",

    // Operators Section
    operatorsTitle: "Benefits for",
    operatorsHighlight: "Operators",
    operatorsSubtitle: "Scale your charging business globally with PowerMaps' comprehensive platform.",

    // Operator Benefits
    globalAnalytics: "Global Analytics & Revenue Tracking",
    globalAnalyticsDesc: "Comprehensive insights across all markets with real-time revenue tracking.",
    multiCurrencySupport: "Multi-Currency Support",
    multiCurrencyDesc: "Flexible pricing in local currencies with automatic conversion and reporting.",
    internationalCustomerBase: "International Customer Base",
    internationalCustomerDesc: "Reach EV drivers from around the world traveling through your region.",
    marketExpansionTools: "Market Expansion Tools",
    marketExpansionDesc: "Scale your operations to new markets with localized support and insights.",
    becomeAGlobalPartner: "Become a Global Partner",

    // Global Reach Section
    globalReachTitle: "Our",
    globalReachHighlight: "Global Reach",
    globalReachSubtitle:
      "Expanding rapidly across regions to create the world's most comprehensive EV charging network.",

    // Global Reach Cards
    northAfricaPioneer: "North Africa Pioneer",
    northAfricaDesc: "Leading EV charging solutions across Tunisia, Morocco, and Algeria.",
    crossBorderNetwork: "Cross-Border Network",
    crossBorderNetworkDesc: "Seamless charging experience across multiple countries and regions.",
    growingCommunity: "Growing Community",
    growingCommunityDesc: "Thousands of EV drivers and operators across expanding markets.",
    rapidExpansion: "Rapid Expansion",
    rapidExpansionDesc: "Continuously adding new markets and partnerships worldwide.",

    // Sustainability Section
    sustainabilityTitle: "Our",
    sustainabilityHighlight: "Sustainability",
    sustainabilityTitleEnd: "Mission",
    sustainabilitySubtitle: "Driving a greener future globally, one charge at a time.",
    sustainabilityMainText: "Supporting global carbon reduction goals through",
    sustainabilityHighlightText: "accessible EV infrastructure",
    sustainabilityDescription:
      "PowerMaps is committed to accelerating the global transition to electric vehicles by making charging infrastructure more accessible, efficient, and user-friendly. We work with governments, businesses, and communities worldwide to build a sustainable transportation future.",

    // Testimonials Section
    testimonialsTitle: "What Our",
    testimonialsHighlight: "Global Users",
    testimonialsEnd: "Say",
    testimonialsSubtitle: "Hear from satisfied EV users and station operators around the world.",

    // Testimonials
    testimonial1:
      "PowerMaps made my international EV road trip seamless. Finding chargers across borders has never been easier!",
    testimonial1Name: "Sarah M.",
    testimonial1Role: "EV Enthusiast, Europe",
    testimonial2:
      "As a multi-location operator, PowerMaps helps me manage my charging network across different countries efficiently.",
    testimonial2Name: "Ahmed K.",
    testimonial2Role: "Charging Network Operator, MENA",
    testimonial3: "The global payment system is a game-changer. One app for all my charging needs worldwide.",
    testimonial3Name: "Maria L.",
    testimonial3Role: "Business Traveler, Americas",

    // CTA Section
    ctaTitle: "Join the",
    ctaHighlight: "Global EV Revolution",
    ctaSubtitle:
      "Whether you're an EV driver or a charging station operator, PowerMaps is your partner for sustainable mobility worldwide.",
    partnerWithUs: "Partner with Us",

    // Footer
    footerTagline: "The Global EV Charging Platform.",
    quickLinks: "Quick Links",
    forOperators: "For Operators",
    globalReach: "Global Reach",
    appStore: "App Store",
    googlePlay: "Google Play",
    footerCopyright: "© 2025 PowerMaps. All rights reserved. Connecting the world through sustainable mobility.",

    // Theme
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    language: "Language",
  },
  ar: {
    // Navigation
    features: "الميزات",
    operators: "المشغلون",
    whyPowerMaps: "لماذا PowerMaps",
    sustainability: "الاستدامة",
    downloadApp: "تحميل التطبيق",

    // Hero Section
    heroTitle: "ابحث. احجز. اشحن.",
    heroTitleHighlight: "عالمياً.",
    heroSubtitle:
      "PowerMaps يربط سائقي السيارات الكهربائية في جميع أنحاء العالم بمحطات الشحن مع التوفر في الوقت الفعلي والحجوزات الذكية والمدفوعات السلسة.",
    downloadTheApp: "تحميل التطبيق",
    findAStation: "العثور على محطة",

    // Features Section
    featuresTitle: "ميزات",
    featuresHighlight: "مستخدمي السيارات الكهربائية",
    featuresSubtitle: "كل ما تحتاجه لتجربة شحن سلسة في أي مكان في العالم.",

    // Feature Cards
    globalStationNetwork: "شبكة المحطات العالمية",
    globalStationDesc: "الوصول إلى محطات الشحن في جميع أنحاء العالم مع تحديثات التوفر في الوقت الفعلي.",
    smartReservations: "الحجوزات الذكية",
    smartReservationsDesc: "احجز فترة الشحن مسبقاً لضمان الوصول في أي مكان.",
    crossBorderCompatibility: "التوافق عبر الحدود",
    crossBorderDesc: "الشحن بسلاسة عبر الشبكات والبلدان المختلفة.",
    universalPayments: "المدفوعات العالمية",
    universalPaymentsDesc: "تطبيق واحد، طرق دفع متعددة، يعمل في أي منطقة مدعومة.",
    internationalRoutePlanning: "تخطيط الطرق الدولية",
    routePlanningDesc: "خطط للرحلات الطويلة عبر الحدود مع محطات الشحن المدمجة.",
    multiLanguageSupport: "دعم متعدد اللغات",
    multiLanguageDesc: "متوفر باللغات المحلية لتجربة عالمية سلسة.",

    // Operators Section
    operatorsTitle: "فوائد",
    operatorsHighlight: "المشغلين",
    operatorsSubtitle: "قم بتوسيع أعمال الشحن الخاصة بك عالمياً مع منصة PowerMaps الشاملة.",

    // Operator Benefits
    globalAnalytics: "التحليلات العالمية وتتبع الإيرادات",
    globalAnalyticsDesc: "رؤى شاملة عبر جميع الأسواق مع تتبع الإيرادات في الوقت الفعلي.",
    multiCurrencySupport: "دعم العملات المتعددة",
    multiCurrencyDesc: "تسعير مرن بالعملات المحلية مع التحويل التلقائي والتقارير.",
    internationalCustomerBase: "قاعدة عملاء دولية",
    internationalCustomerDesc: "الوصول إلى سائقي السيارات الكهربائية من جميع أنحاء العالم المسافرين عبر منطقتك.",
    marketExpansionTools: "أدوات توسيع السوق",
    marketExpansionDesc: "قم بتوسيع عملياتك إلى أسواق جديدة مع الدعم والرؤى المحلية.",
    becomeAGlobalPartner: "كن شريكاً عالمياً",

    // Global Reach Section
    globalReachTitle: "وصولنا",
    globalReachHighlight: "العالمي",
    globalReachSubtitle: "التوسع السريع عبر المناطق لإنشاء أشمل شبكة شحن للسيارات الكهربائية في العالم.",

    // Global Reach Cards
    northAfricaPioneer: "رائد شمال أفريقيا",
    northAfricaDesc: "حلول شحن السيارات الكهربائية الرائدة عبر تونس والمغرب والجزائر.",
    crossBorderNetwork: "شبكة عبر الحدود",
    crossBorderNetworkDesc: "تجربة شحن سلسة عبر بلدان ومناطق متعددة.",
    growingCommunity: "مجتمع متنامي",
    growingCommunityDesc: "آلاف سائقي السيارات الكهربائية والمشغلين عبر الأسواق المتوسعة.",
    rapidExpansion: "التوسع السريع",
    rapidExpansionDesc: "إضافة مستمرة لأسواق وشراكات جديدة في جميع أنحاء العالم.",

    // Sustainability Section
    sustainabilityTitle: "مهمة",
    sustainabilityHighlight: "الاستدامة",
    sustainabilityTitleEnd: "الخاصة بنا",
    sustainabilitySubtitle: "قيادة مستقبل أكثر خضرة عالمياً، شحنة واحدة في كل مرة.",
    sustainabilityMainText: "دعم أهداف تقليل الكربون العالمية من خلال",
    sustainabilityHighlightText: "البنية التحتية للسيارات الكهربائية المتاحة",
    sustainabilityDescription:
      "PowerMaps ملتزم بتسريع الانتقال العالمي إلى السيارات الكهربائية من خلال جعل البنية التحتية للشحن أكثر إتاحة وكفاءة وسهولة في الاستخدام. نحن نعمل مع الحكومات والشركات والمجتمعات في جميع أنحاء العالم لبناء مستقبل نقل مستدام.",

    // Testimonials Section
    testimonialsTitle: "ما يقوله",
    testimonialsHighlight: "مستخدمونا العالميون",
    testimonialsEnd: "",
    testimonialsSubtitle: "استمع من مستخدمي السيارات الكهربائية ومشغلي المحطات الراضين حول العالم.",

    // Testimonials
    testimonial1:
      "PowerMaps جعل رحلتي الدولية بالسيارة الكهربائية سلسة. العثور على الشواحن عبر الحدود لم يكن أسهل من أي وقت مضى!",
    testimonial1Name: "سارة م.",
    testimonial1Role: "عاشق السيارات الكهربائية، أوروبا",
    testimonial2: "كمشغل متعدد المواقع، PowerMaps يساعدني في إدارة شبكة الشحن الخاصة بي عبر بلدان مختلفة بكفاءة.",
    testimonial2Name: "أحمد ك.",
    testimonial2Role: "مشغل شبكة الشحن، الشرق الأوسط وشمال أفريقيا",
    testimonial3:
      "نظام الدفع العالمي يغير قواعد اللعبة. تطبيق واحد لجميع احتياجات الشحن الخاصة بي في جميع أنحاء العالم.",
    testimonial3Name: "ماريا ل.",
    testimonial3Role: "مسافر أعمال، الأمريكتان",

    // CTA Section
    ctaTitle: "انضم إلى",
    ctaHighlight: "ثورة السيارات الكهربائية العالمية",
    ctaSubtitle:
      "سواء كنت سائق سيارة كهربائية أو مشغل محطة شحن، PowerMaps هو شريكك للتنقل المستدام في جميع أنحاء العالم.",
    partnerWithUs: "شارك معنا",

    // Footer
    footerTagline: "منصة الشحن العالمية للسيارات الكهربائية.",
    quickLinks: "روابط سريعة",
    forOperators: "للمشغلين",
    globalReach: "الوصول العالمي",
    appStore: "متجر التطبيقات",
    googlePlay: "جوجل بلاي",
    footerCopyright: "© 2025 PowerMaps. جميع الحقوق محفوظة. ربط العالم من خلال التنقل المستدام.",

    // Theme
    lightMode: "الوضع الفاتح",
    darkMode: "الوضع الداكن",
    language: "اللغة",
  },
  fr: {
    // Navigation
    features: "Fonctionnalités",
    operators: "Opérateurs",
    whyPowerMaps: "Pourquoi PowerMaps",
    sustainability: "Durabilité",
    downloadApp: "Télécharger l'App",

    // Hero Section
    heroTitle: "Trouvez. Réservez. Rechargez.",
    heroTitleHighlight: "Mondialement.",
    heroSubtitle:
      "PowerMaps connecte les conducteurs de VE du monde entier aux stations de recharge avec disponibilité en temps réel, réservations intelligentes et paiements transparents.",
    downloadTheApp: "Télécharger l'App",
    findAStation: "Trouver une Station",

    // Features Section
    featuresTitle: "Fonctionnalités pour",
    featuresHighlight: "Utilisateurs VE",
    featuresSubtitle:
      "Tout ce dont vous avez besoin pour une expérience de recharge transparente, partout dans le monde.",

    // Feature Cards
    globalStationNetwork: "Réseau de Stations Mondial",
    globalStationDesc:
      "Accédez aux stations de recharge du monde entier avec des mises à jour de disponibilité en temps réel.",
    smartReservations: "Réservations Intelligentes",
    smartReservationsDesc: "Réservez votre créneau de recharge à l'avance pour un accès garanti partout.",
    crossBorderCompatibility: "Compatibilité Transfrontalière",
    crossBorderDesc: "Rechargez de manière transparente sur différents réseaux et pays.",
    universalPayments: "Paiements Universels",
    universalPaymentsDesc: "Une app, plusieurs méthodes de paiement, fonctionne dans toute région supportée.",
    internationalRoutePlanning: "Planification de Route Internationale",
    routePlanningDesc: "Planifiez de longs voyages transfrontaliers avec des arrêts de recharge intégrés.",
    multiLanguageSupport: "Support Multi-langues",
    multiLanguageDesc: "Disponible dans les langues locales pour une expérience mondiale transparente.",

    // Operators Section
    operatorsTitle: "Avantages pour",
    operatorsHighlight: "Opérateurs",
    operatorsSubtitle: "Développez votre activité de recharge mondialement avec la plateforme complète de PowerMaps.",

    // Operator Benefits
    globalAnalytics: "Analyses Mondiales et Suivi des Revenus",
    globalAnalyticsDesc: "Insights complets sur tous les marchés avec suivi des revenus en temps réel.",
    multiCurrencySupport: "Support Multi-devises",
    multiCurrencyDesc: "Tarification flexible en devises locales avec conversion automatique et rapports.",
    internationalCustomerBase: "Base de Clients Internationale",
    internationalCustomerDesc: "Atteignez les conducteurs de VE du monde entier voyageant dans votre région.",
    marketExpansionTools: "Outils d'Expansion de Marché",
    marketExpansionDesc: "Développez vos opérations vers de nouveaux marchés avec support et insights localisés.",
    becomeAGlobalPartner: "Devenez un Partenaire Mondial",

    // Global Reach Section
    globalReachTitle: "Notre",
    globalReachHighlight: "Portée Mondiale",
    globalReachSubtitle:
      "Expansion rapide à travers les régions pour créer le réseau de recharge VE le plus complet au monde.",

    // Global Reach Cards
    northAfricaPioneer: "Pionnier d'Afrique du Nord",
    northAfricaDesc: "Solutions de recharge VE de pointe à travers la Tunisie, le Maroc et l'Algérie.",
    crossBorderNetwork: "Réseau Transfrontalier",
    crossBorderNetworkDesc: "Expérience de recharge transparente à travers plusieurs pays et régions.",
    growingCommunity: "Communauté Croissante",
    growingCommunityDesc: "Des milliers de conducteurs VE et opérateurs à travers les marchés en expansion.",
    rapidExpansion: "Expansion Rapide",
    rapidExpansionDesc: "Ajout continu de nouveaux marchés et partenariats dans le monde entier.",

    // Sustainability Section
    sustainabilityTitle: "Notre Mission de",
    sustainabilityHighlight: "Durabilité",
    sustainabilityTitleEnd: "",
    sustainabilitySubtitle: "Conduire un avenir plus vert mondialement, une recharge à la fois.",
    sustainabilityMainText: "Soutenir les objectifs mondiaux de réduction carbone grâce à",
    sustainabilityHighlightText: "l'infrastructure VE accessible",
    sustainabilityDescription:
      "PowerMaps s'engage à accélérer la transition mondiale vers les véhicules électriques en rendant l'infrastructure de recharge plus accessible, efficace et conviviale. Nous travaillons avec les gouvernements, entreprises et communautés du monde entier pour construire un avenir de transport durable.",

    // Testimonials Section
    testimonialsTitle: "Ce que disent nos",
    testimonialsHighlight: "Utilisateurs Mondiaux",
    testimonialsEnd: "",
    testimonialsSubtitle: "Écoutez les utilisateurs VE et opérateurs de stations satisfaits du monde entier.",

    // Testimonials
    testimonial1:
      "PowerMaps a rendu mon road trip international en VE transparent. Trouver des chargeurs à travers les frontières n'a jamais été aussi facile !",
    testimonial1Name: "Sarah M.",
    testimonial1Role: "Passionnée VE, Europe",
    testimonial2:
      "En tant qu'opérateur multi-sites, PowerMaps m'aide à gérer efficacement mon réseau de recharge dans différents pays.",
    testimonial2Name: "Ahmed K.",
    testimonial2Role: "Opérateur Réseau de Recharge, MENA",
    testimonial3:
      "Le système de paiement mondial change la donne. Une app pour tous mes besoins de recharge dans le monde.",
    testimonial3Name: "Maria L.",
    testimonial3Role: "Voyageuse d'Affaires, Amériques",

    // CTA Section
    ctaTitle: "Rejoignez la",
    ctaHighlight: "Révolution VE Mondiale",
    ctaSubtitle:
      "Que vous soyez conducteur VE ou opérateur de station de recharge, PowerMaps est votre partenaire pour la mobilité durable mondiale.",
    partnerWithUs: "Partenariat avec Nous",

    // Footer
    footerTagline: "La Plateforme Mondiale de Recharge VE.",
    quickLinks: "Liens Rapides",
    forOperators: "Pour Opérateurs",
    globalReach: "Portée Mondiale",
    appStore: "App Store",
    googlePlay: "Google Play",
    footerCopyright: "© 2025 PowerMaps. Tous droits réservés. Connecter le monde grâce à la mobilité durable.",

    // Theme
    lightMode: "Mode Clair",
    darkMode: "Mode Sombre",
    language: "Langue",
  },
  es: {
    // Navigation
    features: "Características",
    operators: "Operadores",
    whyPowerMaps: "Por qué PowerMaps",
    sustainability: "Sostenibilidad",
    downloadApp: "Descargar App",

    // Hero Section
    heroTitle: "Encuentra. Reserva. Carga.",
    heroTitleHighlight: "Globalmente.",
    heroSubtitle:
      "PowerMaps conecta conductores de VE mundialmente con estaciones de carga con disponibilidad en tiempo real, reservas inteligentes y pagos fluidos.",
    downloadTheApp: "Descargar la App",
    findAStation: "Encontrar Estación",

    // Features Section
    featuresTitle: "Características para",
    featuresHighlight: "Usuarios VE",
    featuresSubtitle: "Todo lo que necesitas para una experiencia de carga fluida, en cualquier lugar del mundo.",

    // Feature Cards
    globalStationNetwork: "Red de Estaciones Global",
    globalStationDesc:
      "Accede a estaciones de carga mundialmente con actualizaciones de disponibilidad en tiempo real.",
    smartReservations: "Reservas Inteligentes",
    smartReservationsDesc: "Reserva tu slot de carga con anticipación para acceso garantizado en cualquier lugar.",
    crossBorderCompatibility: "Compatibilidad Transfronteriza",
    crossBorderDesc: "Carga sin problemas a través de diferentes redes y países.",
    universalPayments: "Pagos Universales",
    universalPaymentsDesc: "Una app, múltiples métodos de pago, funciona en cualquier región soportada.",
    internationalRoutePlanning: "Planificación de Rutas Internacionales",
    routePlanningDesc: "Planifica viajes largos a través de fronteras con paradas de carga integradas.",
    multiLanguageSupport: "Soporte Multi-idioma",
    multiLanguageDesc: "Disponible en idiomas locales para experiencia global fluida.",

    // Operators Section
    operatorsTitle: "Beneficios para",
    operatorsHighlight: "Operadores",
    operatorsSubtitle: "Escala tu negocio de carga globalmente con la plataforma integral de PowerMaps.",

    // Operator Benefits
    globalAnalytics: "Análisis Global y Seguimiento de Ingresos",
    globalAnalyticsDesc:
      "Insights integrales a través de todos los mercados con seguimiento de ingresos en tiempo real.",
    multiCurrencySupport: "Soporte Multi-moneda",
    multiCurrencyDesc: "Precios flexibles en monedas locales con conversión automática y reportes.",
    internationalCustomerBase: "Base de Clientes Internacional",
    internationalCustomerDesc: "Alcanza conductores VE de todo el mundo viajando por tu región.",
    marketExpansionTools: "Herramientas de Expansión de Mercado",
    marketExpansionDesc: "Escala tus operaciones a nuevos mercados con soporte e insights localizados.",
    becomeAGlobalPartner: "Conviértete en Socio Global",

    // Global Reach Section
    globalReachTitle: "Nuestro",
    globalReachHighlight: "Alcance Global",
    globalReachSubtitle:
      "Expandiéndose rápidamente a través de regiones para crear la red de carga VE más integral del mundo.",

    // Global Reach Cards
    northAfricaPioneer: "Pionero del Norte de África",
    northAfricaDesc: "Soluciones de carga VE líderes a través de Túnez, Marruecos y Argelia.",
    crossBorderNetwork: "Red Transfronteriza",
    crossBorderNetworkDesc: "Experiencia de carga fluida a través de múltiples países y regiones.",
    growingCommunity: "Comunidad Creciente",
    growingCommunityDesc: "Miles de conductores VE y operadores a través de mercados en expansión.",
    rapidExpansion: "Expansión Rápida",
    rapidExpansionDesc: "Agregando continuamente nuevos mercados y asociaciones mundialmente.",

    // Sustainability Section
    sustainabilityTitle: "Nuestra Misión de",
    sustainabilityHighlight: "Sostenibilidad",
    sustainabilityTitleEnd: "",
    sustainabilitySubtitle: "Impulsando un futuro más verde globalmente, una carga a la vez.",
    sustainabilityMainText: "Apoyando objetivos globales de reducción de carbono a través de",
    sustainabilityHighlightText: "infraestructura VE accesible",
    sustainabilityDescription:
      "PowerMaps está comprometido a acelerar la transición global hacia vehículos eléctricos haciendo la infraestructura de carga más accesible, eficiente y fácil de usar. Trabajamos con gobiernos, empresas y comunidades mundialmente para construir un futuro de transporte sostenible.",

    // Testimonials Section
    testimonialsTitle: "Lo que dicen nuestros",
    testimonialsHighlight: "Usuarios Globales",
    testimonialsEnd: "",
    testimonialsSubtitle: "Escucha de usuarios VE y operadores de estaciones satisfechos alrededor del mundo.",

    // Testimonials
    testimonial1:
      "PowerMaps hizo mi viaje internacional en VE fluido. ¡Encontrar cargadores a través de fronteras nunca fue más fácil!",
    testimonial1Name: "Sarah M.",
    testimonial1Role: "Entusiasta VE, Europa",
    testimonial2:
      "Como operador multi-ubicación, PowerMaps me ayuda a gestionar mi red de carga a través de diferentes países eficientemente.",
    testimonial2Name: "Ahmed K.",
    testimonial2Role: "Operador Red de Carga, MENA",
    testimonial3:
      "El sistema de pago global es revolucionario. Una app para todas mis necesidades de carga mundialmente.",
    testimonial3Name: "Maria L.",
    testimonial3Role: "Viajera de Negocios, Américas",

    // CTA Section
    ctaTitle: "Únete a la",
    ctaHighlight: "Revolución VE Global",
    ctaSubtitle:
      "Ya seas conductor VE u operador de estación de carga, PowerMaps es tu socio para movilidad sostenible mundial.",
    partnerWithUs: "Asociarse con Nosotros",

    // Footer
    footerTagline: "La Plataforma Global de Carga VE.",
    quickLinks: "Enlaces Rápidos",
    forOperators: "Para Operadores",
    globalReach: "Alcance Global",
    appStore: "App Store",
    googlePlay: "Google Play",
    footerCopyright:
      "© 2025 PowerMaps. Todos los derechos reservados. Conectando el mundo a través de movilidad sostenible.",

    // Theme
    lightMode: "Modo Claro",
    darkMode: "Modo Oscuro",
    language: "Idioma",
  },
  de: {
    // Navigation
    features: "Funktionen",
    operators: "Betreiber",
    whyPowerMaps: "Warum PowerMaps",
    sustainability: "Nachhaltigkeit",
    downloadApp: "App Herunterladen",

    // Hero Section
    heroTitle: "Finden. Reservieren. Laden.",
    heroTitleHighlight: "Weltweit.",
    heroSubtitle:
      "PowerMaps verbindet EV-Fahrer weltweit mit Ladestationen mit Echtzeit-Verfügbarkeit, intelligenten Reservierungen und nahtlosen Zahlungen.",
    downloadTheApp: "App Herunterladen",
    findAStation: "Station Finden",

    // Features Section
    featuresTitle: "Funktionen für",
    featuresHighlight: "EV-Nutzer",
    featuresSubtitle: "Alles was Sie für ein nahtloses Ladeerlebnis benötigen, überall auf der Welt.",

    // Feature Cards
    globalStationNetwork: "Globales Stationsnetzwerk",
    globalStationDesc: "Zugang zu Ladestationen weltweit mit Echtzeit-Verfügbarkeitsupdates.",
    smartReservations: "Intelligente Reservierungen",
    smartReservationsDesc: "Reservieren Sie Ihren Ladeslot im Voraus für garantierten Zugang überall.",
    crossBorderCompatibility: "Grenzüberschreitende Kompatibilität",
    crossBorderDesc: "Nahtloses Laden über verschiedene Netzwerke und Länder hinweg.",
    universalPayments: "Universelle Zahlungen",
    universalPaymentsDesc: "Eine App, mehrere Zahlungsmethoden, funktioniert in jeder unterstützten Region.",
    internationalRoutePlanning: "Internationale Routenplanung",
    routePlanningDesc: "Planen Sie lange Reisen über Grenzen hinweg mit integrierten Ladestopps.",
    multiLanguageSupport: "Mehrsprachiger Support",
    multiLanguageDesc: "Verfügbar in lokalen Sprachen für nahtlose globale Erfahrung.",

    // Operators Section
    operatorsTitle: "Vorteile für",
    operatorsHighlight: "Betreiber",
    operatorsSubtitle: "Skalieren Sie Ihr Ladegeschäft global mit PowerMaps' umfassender Plattform.",

    // Operator Benefits
    globalAnalytics: "Globale Analytik & Umsatzverfolgung",
    globalAnalyticsDesc: "Umfassende Einblicke über alle Märkte mit Echtzeit-Umsatzverfolgung.",
    multiCurrencySupport: "Multi-Währungsunterstützung",
    multiCurrencyDesc: "Flexible Preisgestaltung in lokalen Währungen mit automatischer Umrechnung und Berichten.",
    internationalCustomerBase: "Internationale Kundenbasis",
    internationalCustomerDesc: "Erreichen Sie EV-Fahrer aus aller Welt, die durch Ihre Region reisen.",
    marketExpansionTools: "Marktexpansions-Tools",
    marketExpansionDesc: "Skalieren Sie Ihre Operationen auf neue Märkte mit lokalisiertem Support und Einblicken.",
    becomeAGlobalPartner: "Werden Sie Globaler Partner",

    // Global Reach Section
    globalReachTitle: "Unsere",
    globalReachHighlight: "Globale Reichweite",
    globalReachSubtitle:
      "Schnelle Expansion über Regionen hinweg, um das weltweit umfassendste EV-Ladenetzwerk zu schaffen.",

    // Global Reach Cards
    northAfricaPioneer: "Nordafrika-Pionier",
    northAfricaDesc: "Führende EV-Ladelösungen in Tunesien, Marokko und Algerien.",
    crossBorderNetwork: "Grenzüberschreitendes Netzwerk",
    crossBorderNetworkDesc: "Nahtlose Ladeerfahrung über mehrere Länder und Regionen hinweg.",
    growingCommunity: "Wachsende Gemeinschaft",
    growingCommunityDesc: "Tausende von EV-Fahrern und Betreibern über expandierende Märkte hinweg.",
    rapidExpansion: "Schnelle Expansion",
    rapidExpansionDesc: "Kontinuierliche Hinzufügung neuer Märkte und Partnerschaften weltweit.",

    // Sustainability Section
    sustainabilityTitle: "Unsere",
    sustainabilityHighlight: "Nachhaltigkeits",
    sustainabilityTitleEnd: "Mission",
    sustainabilitySubtitle: "Eine grünere Zukunft global vorantreiben, eine Ladung nach der anderen.",
    sustainabilityMainText: "Unterstützung globaler Kohlenstoffreduktionsziele durch",
    sustainabilityHighlightText: "zugängliche EV-Infrastruktur",
    sustainabilityDescription:
      "PowerMaps ist verpflichtet, den globalen Übergang zu Elektrofahrzeugen zu beschleunigen, indem wir die Ladeinfrastruktur zugänglicher, effizienter und benutzerfreundlicher machen. Wir arbeiten mit Regierungen, Unternehmen und Gemeinden weltweit zusammen, um eine nachhaltige Transportzukunft aufzubauen.",

    // Testimonials Section
    testimonialsTitle: "Was unsere",
    testimonialsHighlight: "Globalen Nutzer",
    testimonialsEnd: "Sagen",
    testimonialsSubtitle: "Hören Sie von zufriedenen EV-Nutzern und Stationsbetreibern aus aller Welt.",

    // Testimonials
    testimonial1:
      "PowerMaps machte meine internationale EV-Roadtrip nahtlos. Ladegeräte über Grenzen hinweg zu finden war nie einfacher!",
    testimonial1Name: "Sarah M.",
    testimonial1Role: "EV-Enthusiast, Europa",
    testimonial2:
      "Als Multi-Standort-Betreiber hilft mir PowerMaps, mein Ladenetzwerk über verschiedene Länder hinweg effizient zu verwalten.",
    testimonial2Name: "Ahmed K.",
    testimonial2Role: "Ladenetzwerk-Betreiber, MENA",
    testimonial3: "Das globale Zahlungssystem ist ein Wendepunkt. Eine App für alle meine Ladebedürfnisse weltweit.",
    testimonial3Name: "Maria L.",
    testimonial3Role: "Geschäftsreisende, Amerika",

    // CTA Section
    ctaTitle: "Treten Sie der",
    ctaHighlight: "Globalen EV-Revolution",
    ctaEnd: "Bei",
    ctaSubtitle:
      "Ob Sie EV-Fahrer oder Ladestationsbetreiber sind, PowerMaps ist Ihr Partner für nachhaltige Mobilität weltweit.",
    partnerWithUs: "Partner Werden",

    // Footer
    footerTagline: "Die Globale EV-Ladeplattform.",
    quickLinks: "Schnelllinks",
    forOperators: "Für Betreiber",
    globalReach: "Globale Reichweite",
    appStore: "App Store",
    googlePlay: "Google Play",
    footerCopyright: "© 2025 PowerMaps. Alle Rechte vorbehalten. Die Welt durch nachhaltige Mobilität verbinden.",

    // Theme
    lightMode: "Heller Modus",
    darkMode: "Dunkler Modus",
    language: "Sprache",
  },
} as const
