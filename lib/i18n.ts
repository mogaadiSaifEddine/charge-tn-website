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
    footerCopyright: "© 2026 PowerMaps. All rights reserved. Powering the P2P EV charging revolution.",

    // Charging Simulator
    simulator: "Simulator",
    simBadge: "Charging simulator",
    simTitle: "How long will your car",
    simTitleHighlight: "actually take to charge?",
    simSubtitle:
      "Pick your car and a charging point. The simulation runs on real manufacturer specs and models the battery charge curve, the taper, temperature and charging losses — not a kWh divided by kW.",
    simInputs: "Your session",
    simVehicle: "Vehicle",
    simVehiclePlaceholder: "Search make or model…",
    simVehicleCustom: "Other vehicle (enter specs manually)",
    simNoMatch: "No model matches this search",
    simBattery: "Usable battery (kWh)",
    simCharger: "Charging point",
    simAcGroup: "AC — home & destination charging",
    simDcGroup: "DC — fast charging",
    simChargerSocket: "domestic socket",
    simCharger1ph: "single-phase wallbox",
    simCharger3ph: "three-phase wallbox",
    simChargerDc: "DC fast charger",
    simStartSoc: "Current charge (%)",
    simTargetSoc: "Target charge (%)",
    simTemperature: "Ambient temperature",
    simPrecondition: "Battery preconditioned on the way (DC only)",
    simApplyLimit: "Limit power to the vehicle's on-board maximum",
    simPrice: "Electricity price (TND/kWh)",
    simVehicleAc: "AC max",
    simVehicleDc: "DC max",
    simArchitecture: "Architecture",
    simChemistry: "Chemistry",
    simConsumption: "Consumption",
    simNoDcPort: "No DC port",
    simResult: "Result",
    simEnergyLine: "{energy} kWh into the battery at {power} kW average.",
    simEnergyBilled: "Billed energy",
    simAvgPower: "Average power",
    simPeakPower: "Peak power",
    simVehicleLimit: "Vehicle limit",
    simRangeAdded: "Range added",
    simRatedRange: "Rated range",
    simCost: "Session cost",
    simCostPer100: "Cost per 100 km",
    simEfficiency: "Plug-to-battery efficiency",
    simCurveTitle: "Power over the session",
    simCurveSoc: "State of charge",
    simCurvePower: "Power at the plug",
    simCompareTitle: "The same session elsewhere",
    simCompareUnavailable: "no DC port",
    simInsight: "What limits this session",
    simInsightCharger: "The charging point is the limit — your car could accept more power.",
    simInsightVehicle: "Your car is the limit here. A more powerful charging point would not make this session shorter.",
    simInsightTaper: "The battery taper is the limit. Past ~70% the car slows itself down to protect the cells.",
    simInsightTemperature: "Temperature is the limit. A cold pack refuses power; preconditioning recovers most of it.",
    simInsightStalled: "At this temperature the heating draws more than this supply delivers — the car will barely charge.",
    simTaperTip: "Stopping at 80% instead of 100% saves {minutes} of this session.",
    simCalibrated: "Curve calibrated on the manufacturer's published fast-charge figure.",
    simDisclaimer:
      "Specifications for {count} models from the Open EV Data catalogue. Results are a simulation: real sessions vary by ±10-15% with pack age, cable, grid voltage and station load.",
    simLoading: "Loading vehicle catalogue…",
    simError: "Vehicle catalogue unavailable — enter your specs manually.",
    simPricing: "Electricity pricing",
    simPricingSteg: "STEG home bill (residential)",
    simPricingStegPro: "STEG bill (non-residential)",
    simPricingCustom: "Custom price per kWh",
    simMonthlyBase: "Home consumption without EV (kWh/month)",
    simEffectivePrice: "{price} TND/kWh all in",
    simPriceBreakdown: "tranche {tranche} kWh/month: {rate} millimes + {vat}% VAT + {levies} millimes of levies",
    simTrancheJumpTitle: "Tranche crossed",
    simTrancheJump:
      "This session pushes your month from the {from} kWh tranche into {to}. STEG then re-prices every kWh of the month at {rate} millimes, so this charge really costs {price} TND/kWh instead of {normal}. Charging at a host keeps your home bill in its tranche.",
    simStegNote:
      "Prices follow the STEG low-voltage tariff of 1 May 2022, plus VAT and the levies billed per kWh. STEG applies one rate to the whole month based on total consumption, so the cost shown is the difference this session makes to your bill.",

    // Fuel comparison inside the charging simulator
    simFuelTitle: "The combustion car this replaces",
    simFuelGrade: "Fuel at the pump",
    simFuelUnleaded: "Unleaded petrol",
    simFuelDiesel: "Ordinary diesel",
    simFuelDiesel50: "Diesel 50 (low sulphur)",
    simFuelConsumption: "Its consumption (L/100 km)",
    simFuelPrice: "Pump price (TND/L)",
    simFuelSavedTitle: "Saved against fuel",
    simFuelWorseTitle: "Costlier than fuel",
    simFuelSavedLine:
      "The {km} km added here cost {ev} TND of electricity. The same distance burns {litres} L of {fuel}, or {ice} TND at the pump.",
    simFuelWorseLine:
      "The {km} km added here cost {ev} TND of electricity, against {ice} TND of {fuel} for the same distance. At this price the combustion car is the cheaper one to run.",
    simFuelPer100: "{saved} TND saved per 100 km — about {annual} TND a year at {km} km.",
    simFuelNote:
      "Pump prices are the Tunisian regulated tariff of {date}: unleaded {unleaded}, ordinary diesel {diesel}, diesel 50 {diesel50} TND/L. They are editable, as is the combustion consumption — estimated 15% below the petrol figure when a diesel is selected.",

    // CO2 Simulator
    co2Nav: "CO₂ saved",
    co2Badge: "CO₂ simulator",
    co2Title: "How much CO₂ does going electric",
    co2TitleHighlight: "really save in Tunisia?",
    co2Subtitle:
      "Tunisian electricity is about 97% natural gas, so an EV here is not zero emission. This compares it honestly with the equivalent combustion car — charging losses and battery manufacturing included.",
    co2AnnualKm: "Distance driven per year (km)",
    co2EvConsumption: "EV consumption (kWh/100 km)",
    co2FuelType: "Fuel of the car it replaces",
    co2Petrol: "Petrol",
    co2Diesel: "Diesel",
    co2IceConsumption: "Its consumption (L/100 km)",
    co2Electricity: "Electricity source",
    co2GridTunisia: "Tunisian grid (gas)",
    co2GridSolar: "Rooftop solar",
    co2GridCustom: "Custom emission factor",
    co2Factor: "Emission factor (kg CO₂/kWh)",
    co2Upstream: "Include fuel and gas supply chains (well-to-tank)",
    co2FuelPrice: "Fuel price (TND/L)",
    co2ElectricityPrice: "Electricity price (TND/kWh)",
    co2CompareTitle: "Emissions per year",
    co2Electric: "Electric",
    co2EnergyLine: "{kwh} kWh drawn from the plug per year against {litres} litres of fuel.",
    co2Result: "CO₂ avoided per year",
    co2ResultWorse: "Extra CO₂ per year",
    co2SavedLine: "{percent}% less than the combustion car, once charging losses are counted.",
    co2Trees: "Trees equivalent",
    co2FuelSaved: "Fuel money saved",
    co2AnnualEnergy: "Energy per year",
    co2BreakEvenTitle: "Including battery manufacturing",
    co2BreakEven:
      "Building the {battery} kWh pack emits about {debt} kg of CO₂ up front. At this rate the electric car overtakes the combustion one after {km} km — roughly {years} years of your driving.",
    co2NeverBreakEven:
      "With these figures the electric car never repays the CO₂ of building its battery. Try a cleaner electricity source or a thirstier car to compare against.",
    co2SolarTitle: "Charging on solar",
    co2Solar:
      "Charging from a host's rooftop solar instead of the grid drops the car to {gkm} g/km and avoids {saved} kg of CO₂ a year.",
    co2Cta: "Find a charger nearby",
    co2BackToSim: "Back to charging time",
    co2Note:
      "Combustion factors: 2.31 kg CO₂ per litre of petrol, 2.68 for diesel. Battery manufacturing is counted at {battery} kg CO₂ per kWh of capacity, the middle of published estimates. The Tunisian grid factor is an estimate for a gas-dominated mix and is editable, as are all the assumptions above.",

    // FAQ
    faqBadge: "FAQ",
    faqTitle: "Questions about",
    faqTitleHighlight: "charging in Tunisia",
    faqQ1: "How long does it take to charge an electric car in Tunisia?",
    faqA1:
      "It depends on the charging point and the car, not just on the battery size. A 75 kWh Tesla Model 3 Long Range charged from 20% to 80% takes about 6 h 50 on a 7.4 kW single-phase home wallbox, about 4 h 30 on an 11 kW three-phase wallbox, and about 57 minutes on a 50 kW DC fast charger. Our simulator models the real charge curve, the taper, temperature and charging losses for 527 vehicles.",
    faqQ2: "How much does it cost to charge an electric car at home in Tunisia?",
    faqA2:
      "On the STEG low-voltage residential tariff the all-in price depends on your monthly consumption bracket: roughly 0.219 TND/kWh in the 101-200 kWh tranche, 0.264 in 201-300, 0.402 in 301-500 and 0.482 above 500 kWh, VAT and levies included. Charging a 75 kWh car from 20% to 80% draws about 49 kWh from the plug.",
    faqQ3: "Can charging an EV at home push me into a higher STEG tranche?",
    faqA3:
      "Yes, and it matters more than most people expect. STEG applies a single rate to the entire month based on total consumption, so crossing a tranche re-prices every kWh of that month. A 49 kWh charge added to a 270 kWh month costs about 57 TND \u2014 roughly 1.17 TND/kWh instead of 0.40 \u2014 because the whole month is re-billed at the higher rate. Charging at a host keeps your own bill inside its tranche.",
    faqQ4: "How much CO\u2082 does an electric car actually save in Tunisia?",
    faqA4:
      "Tunisian electricity is about 97% natural gas, so an EV here is not zero emission. A Tesla Model 3 emits around 71 g CO\u2082 per km on grid electricity against about 150 g/km for an equivalent petrol car \u2014 roughly 53% less, or 1.2 tonnes a year at 15 000 km. Charging from a host's rooftop solar instead drops it to about 6 g/km.",
    faqQ5: "Does making the battery cancel out the CO\u2082 savings?",
    faqA5:
      "No, but it delays them. Building a 75 kWh battery emits roughly 5.3 tonnes of CO\u2082 up front. On the Tunisian grid the electric car repays that after about 66 000 km \u2014 around 4.4 years at 15 000 km a year \u2014 and sooner on solar or with a smaller battery. Against a very frugal diesel the payback stretches to about 106 000 km.",
    faqQ6: "Which electric cars does the simulator cover?",
    faqA6:
      "527 versions from 63 manufacturers, using real battery capacity, AC and DC charging limits, pack voltage and cell chemistry from the Open EV Data catalogue \u2014 including models common in Tunisia such as the Dacia Spring, Renault 5 E-Tech, Peugeot e-208, BYD Dolphin and Tesla Model 3. Any car not listed can be simulated by entering its specifications manually.",
    simFindCharger: "Find a charger nearby",
    simHostCta: "Share your charger",
    simHour: "h",
    simMin: "min",

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
    footerCopyright: "© 2026 PowerMaps. جميع الحقوق محفوظة. تشغيل ثورة شحن السيارات الكهربائية P2P.",

    // Charging Simulator
    simulator: "المحاكي",
    simBadge: "محاكي الشحن",
    simTitle: "كم من الوقت تحتاج سيارتك",
    simTitleHighlight: "للشحن فعلياً؟",
    simSubtitle:
      "اختر سيارتك ونقطة الشحن. تعتمد المحاكاة على المواصفات الحقيقية من الشركات المصنّعة وتحاكي منحنى شحن البطارية وتباطؤه ودرجة الحرارة وخسائر الشحن — وليس مجرد قسمة كيلوواط ساعة على كيلوواط.",
    simInputs: "جلستك",
    simVehicle: "السيارة",
    simVehiclePlaceholder: "ابحث عن الماركة أو الطراز…",
    simVehicleCustom: "سيارة أخرى (إدخال المواصفات يدوياً)",
    simNoMatch: "لا يوجد طراز مطابق لهذا البحث",
    simBattery: "سعة البطارية المستعملة (ك.و.س)",
    simCharger: "نقطة الشحن",
    simAcGroup: "تيار متردد — الشحن المنزلي والوجهات",
    simDcGroup: "تيار مستمر — الشحن السريع",
    simChargerSocket: "مقبس منزلي",
    simCharger1ph: "شاحن حائطي أحادي الطور",
    simCharger3ph: "شاحن حائطي ثلاثي الأطوار",
    simChargerDc: "شاحن سريع بالتيار المستمر",
    simStartSoc: "الشحن الحالي (%)",
    simTargetSoc: "الشحن المطلوب (%)",
    simTemperature: "درجة الحرارة المحيطة",
    simPrecondition: "تهيئة البطارية حرارياً قبل الوصول (تيار مستمر فقط)",
    simApplyLimit: "تقييد القدرة بالحد الأقصى لشاحن السيارة الداخلي",
    simPrice: "سعر الكهرباء (دينار/ك.و.س)",
    simVehicleAc: "أقصى تيار متردد",
    simVehicleDc: "أقصى تيار مستمر",
    simArchitecture: "البنية الكهربائية",
    simChemistry: "كيمياء البطارية",
    simConsumption: "الاستهلاك",
    simNoDcPort: "لا يوجد منفذ تيار مستمر",
    simResult: "النتيجة",
    simEnergyLine: "{energy} ك.و.س إلى البطارية بمعدل قدرة {power} ك.و.",
    simEnergyBilled: "الطاقة المحتسبة",
    simAvgPower: "متوسط القدرة",
    simPeakPower: "ذروة القدرة",
    simVehicleLimit: "حد السيارة",
    simRangeAdded: "المدى المضاف",
    simRatedRange: "المدى المعتمد",
    simCost: "تكلفة الجلسة",
    simCostPer100: "التكلفة لكل 100 كم",
    simEfficiency: "الكفاءة من المقبس إلى البطارية",
    simCurveTitle: "القدرة خلال الجلسة",
    simCurveSoc: "حالة الشحن",
    simCurvePower: "القدرة عند المقبس",
    simCompareTitle: "نفس الجلسة على نقاط أخرى",
    simCompareUnavailable: "لا يوجد منفذ تيار مستمر",
    simInsight: "ما الذي يحدّ من هذه الجلسة",
    simInsightCharger: "نقطة الشحن هي الحد — سيارتك قادرة على استقبال قدرة أعلى.",
    simInsightVehicle: "سيارتك هي الحد هنا. نقطة شحن أقوى لن تقصّر هذه الجلسة.",
    simInsightTaper: "تباطؤ البطارية هو الحد. بعد حوالي 70% تخفّض السيارة القدرة تلقائياً لحماية الخلايا.",
    simInsightTemperature: "درجة الحرارة هي الحد. البطارية الباردة ترفض القدرة، والتهيئة الحرارية تستعيد معظمها.",
    simInsightStalled: "في هذه الحرارة يستهلك التدفئة أكثر مما يوفره هذا المصدر — لن تشحن السيارة تقريباً.",
    simTaperTip: "التوقف عند 80% بدل 100% يوفّر {minutes} من هذه الجلسة.",
    simCalibrated: "تمت معايرة المنحنى على الرقم الرسمي المعلن للشحن السريع.",
    simDisclaimer:
      "مواصفات {count} طراز من قاعدة بيانات Open EV Data. النتائج محاكاة: تختلف الجلسات الحقيقية بنسبة ±10-15% حسب عمر البطارية والكابل وجهد الشبكة وازدحام المحطة.",
    simLoading: "جارٍ تحميل قائمة السيارات…",
    simError: "قائمة السيارات غير متاحة — أدخل المواصفات يدوياً.",
    simPricing: "تسعير الكهرباء",
    simPricingSteg: "فاتورة الستاغ المنزلية (سكني)",
    simPricingStegPro: "فاتورة الستاغ (غير سكني)",
    simPricingCustom: "سعر مخصص لكل ك.و.س",
    simMonthlyBase: "استهلاك المنزل بدون السيارة (ك.و.س/شهر)",
    simEffectivePrice: "{price} دينار/ك.و.س شاملاً كل شيء",
    simPriceBreakdown: "الشريحة {tranche} ك.و.س/شهر: {rate} مليم + {vat}% أداء على القيمة المضافة + {levies} مليم معاليم",
    simTrancheJumpTitle: "تجاوز الشريحة",
    simTrancheJump:
      "هذه الجلسة تنقل استهلاكك الشهري من شريحة {from} ك.و.س إلى {to}. عندها تعيد الستاغ تسعير كل كيلوواط ساعة في الشهر بـ {rate} مليم، فتصبح كلفة هذه الشحنة {price} دينار/ك.و.س بدل {normal}. الشحن لدى مضيف يُبقي فاتورتك داخل شريحتها.",
    simStegNote:
      "الأسعار وفق تعريفة الستاغ للجهد المنخفض بتاريخ 1 ماي 2022، مع الأداء على القيمة المضافة والمعاليم المحتسبة لكل كيلوواط ساعة. تطبّق الستاغ سعراً واحداً على كامل الشهر حسب الاستهلاك الجملي، لذلك تمثّل الكلفة المعروضة الفارق الذي تُحدثه هذه الجلسة في فاتورتك.",

    // Fuel comparison inside the charging simulator
    simFuelTitle: "السيارة الحرارية التي تعوّضها",
    simFuelGrade: "الوقود في المحطة",
    simFuelUnleaded: "بنزين بدون رصاص",
    simFuelDiesel: "غازوال عادي",
    simFuelDiesel50: "غازوال 50 (بدون كبريت)",
    simFuelConsumption: "استهلاكها (لتر/100 كم)",
    simFuelPrice: "سعر اللتر (دينار/لتر)",
    simFuelSavedTitle: "التوفير مقابل الوقود",
    simFuelWorseTitle: "أغلى من الوقود",
    simFuelSavedLine:
      "الـ {km} كم المضافة هنا كلّفت {ev} دينار من الكهرباء. نفس المسافة تستهلك {litres} لتر من {fuel}، أي {ice} دينار في المحطة.",
    simFuelWorseLine:
      "الـ {km} كم المضافة هنا كلّفت {ev} دينار من الكهرباء، مقابل {ice} دينار من {fuel} لنفس المسافة. بهذا السعر تبقى السيارة الحرارية أقل كلفة في الاستعمال.",
    simFuelPer100: "توفير {saved} دينار لكل 100 كم — حوالي {annual} دينار في السنة عند {km} كم.",
    simFuelNote:
      "أسعار الوقود هي التعريفة التونسية المنظّمة بتاريخ {date}: بنزين بدون رصاص {unleaded}، غازوال عادي {diesel}، غازوال 50 بـ {diesel50} دينار/لتر. يمكن تعديلها، مثل استهلاك السيارة الحرارية الذي يُقدَّر أقل بـ 15٪ من قيمة البنزين عند اختيار الغازوال.",

    // CO2 Simulator
    co2Nav: "توفير الكربون",
    co2Badge: "محاكي ثاني أكسيد الكربون",
    co2Title: "كم توفّر الكهرباء فعلياً من",
    co2TitleHighlight: "الكربون في تونس؟",
    co2Subtitle:
      "الكهرباء في تونس مصدرها نحو 97% غاز طبيعي، لذا فالسيارة الكهربائية هنا ليست خالية من الانبعاثات. هذه مقارنة صادقة مع السيارة الحرارية المكافئة، وتشمل خسائر الشحن وتصنيع البطارية.",
    co2AnnualKm: "المسافة المقطوعة سنوياً (كم)",
    co2EvConsumption: "استهلاك السيارة الكهربائية (ك.و.س/100 كم)",
    co2FuelType: "وقود السيارة المستبدلة",
    co2Petrol: "بنزين",
    co2Diesel: "ديزل",
    co2IceConsumption: "استهلاكها (لتر/100 كم)",
    co2Electricity: "مصدر الكهرباء",
    co2GridTunisia: "الشبكة التونسية (غاز)",
    co2GridSolar: "ألواح شمسية على السطح",
    co2GridCustom: "معامل انبعاث مخصص",
    co2Factor: "معامل الانبعاث (كغ CO₂/ك.و.س)",
    co2Upstream: "احتساب سلاسل إنتاج الوقود والغاز",
    co2FuelPrice: "سعر الوقود (دينار/لتر)",
    co2ElectricityPrice: "سعر الكهرباء (دينار/ك.و.س)",
    co2CompareTitle: "الانبعاثات في السنة",
    co2Electric: "كهربائية",
    co2EnergyLine: "{kwh} ك.و.س مسحوبة من المقبس سنوياً مقابل {litres} لتراً من الوقود.",
    co2Result: "الكربون المتجنَّب سنوياً",
    co2ResultWorse: "كربون إضافي سنوياً",
    co2SavedLine: "أقل بنسبة {percent}% من السيارة الحرارية، بعد احتساب خسائر الشحن.",
    co2Trees: "ما يعادل من الأشجار",
    co2FuelSaved: "التوفير في الوقود",
    co2AnnualEnergy: "الطاقة سنوياً",
    co2BreakEvenTitle: "مع احتساب تصنيع البطارية",
    co2BreakEven:
      "تصنيع بطارية {battery} ك.و.س يُطلق نحو {debt} كغ من الكربون مسبقاً. بهذا المعدل تتفوق السيارة الكهربائية على الحرارية بعد {km} كم، أي نحو {years} سنة من قيادتك.",
    co2NeverBreakEven:
      "بهذه المعطيات لا تعوّض السيارة الكهربائية كربون تصنيع بطاريتها أبداً. جرّب مصدر كهرباء أنظف للمقارنة.",
    co2SolarTitle: "الشحن بالطاقة الشمسية",
    co2Solar:
      "الشحن من ألواح مضيف شمسية بدل الشبكة يخفّض السيارة إلى {gkm} غ/كم ويتجنّب {saved} كغ من الكربون سنوياً.",
    co2Cta: "ابحث عن شاحن قريب",
    co2BackToSim: "العودة إلى زمن الشحن",
    co2Note:
      "معاملات الاحتراق: 2.31 كغ كربون لكل لتر بنزين و2.68 للديزل. يُحتسب تصنيع البطارية بـ {battery} كغ كربون لكل ك.و.س من السعة، وهو وسط التقديرات المنشورة. معامل الشبكة التونسية تقدير لمزيج يغلب عليه الغاز، وهو قابل للتعديل مثل بقية الفرضيات.",

    // FAQ
    faqBadge: "\u0623\u0633\u0626\u0644\u0629 \u0634\u0627\u0626\u0639\u0629",
    faqTitle: "\u0623\u0633\u0626\u0644\u0629 \u062d\u0648\u0644",
    faqTitleHighlight: "\u0627\u0644\u0634\u062d\u0646 \u0641\u064a \u062a\u0648\u0646\u0633",
    faqQ1: "\u0643\u0645 \u0645\u0646 \u0627\u0644\u0648\u0642\u062a \u064a\u0633\u062a\u063a\u0631\u0642 \u0634\u062d\u0646 \u0633\u064a\u0627\u0631\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064a\u0629 \u0641\u064a \u062a\u0648\u0646\u0633\u061f",
    faqA1:
      "\u0630\u0644\u0643 \u064a\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u0646\u0642\u0637\u0629 \u0627\u0644\u0634\u062d\u0646 \u0648\u0639\u0644\u0649 \u0627\u0644\u0633\u064a\u0627\u0631\u0629\u060c \u0648\u0644\u064a\u0633 \u0639\u0644\u0649 \u0633\u0639\u0629 \u0627\u0644\u0628\u0637\u0627\u0631\u064a\u0629 \u0641\u0642\u0637. \u0633\u064a\u0627\u0631\u0629 \u062a\u0633\u0644\u0627 \u0645\u0648\u062f\u064a\u0644 3 \u0644\u0648\u0646\u063a \u0631\u0627\u0646\u062c \u0628\u0633\u0639\u0629 75 \u0643.\u0648.\u0633 \u062a\u062d\u062a\u0627\u062c \u0645\u0646 20% \u0625\u0644\u0649 80% \u0646\u062d\u0648 6 \u0633\u0627\u0639\u0627\u062a \u064860 \u062f\u0642\u064a\u0642\u0629 \u0639\u0644\u0649 \u0634\u0627\u062d\u0646 \u0645\u0646\u0632\u0644\u064a 7.4 \u0643.\u0648\u060c \u0648\u0646\u062d\u0648 4 \u0633\u0627\u0639\u0627\u062a \u064830 \u062f\u0642\u064a\u0642\u0629 \u0639\u0644\u0649 \u0634\u0627\u062d\u0646 11 \u0643.\u0648 \u062b\u0644\u0627\u062b\u064a \u0627\u0644\u0623\u0637\u0648\u0627\u0631\u060c \u0648\u0646\u062d\u0648 57 \u062f\u0642\u064a\u0642\u0629 \u0639\u0644\u0649 \u0634\u0627\u062d\u0646 \u0633\u0631\u064a\u0639 50 \u0643.\u0648. \u064a\u062d\u0627\u0643\u064a \u0645\u062d\u0627\u0643\u064a\u0646\u0627 \u0645\u0646\u062d\u0646\u0649 \u0627\u0644\u0634\u062d\u0646 \u0627\u0644\u062d\u0642\u064a\u0642\u064a \u0648\u0627\u0644\u062a\u0628\u0627\u0637\u0624 \u0648\u062f\u0631\u062c\u0629 \u0627\u0644\u062d\u0631\u0627\u0631\u0629 \u0648\u0627\u0644\u062e\u0633\u0627\u0626\u0631 \u0644\u0640 527 \u0637\u0631\u0627\u0632\u0627\u064b.",
    faqQ2: "\u0643\u0645 \u062a\u0643\u0644\u0641\u0629 \u0634\u062d\u0646 \u0633\u064a\u0627\u0631\u0629 \u0643\u0647\u0631\u0628\u0627\u0626\u064a\u0629 \u0641\u064a \u0627\u0644\u0645\u0646\u0632\u0644 \u0628\u062a\u0648\u0646\u0633\u061f",
    faqA2:
      "\u0648\u0641\u0642 \u062a\u0639\u0631\u064a\u0641\u0629 \u0627\u0644\u0633\u062a\u0627\u063a \u0627\u0644\u0633\u0643\u0646\u064a\u0629 \u0644\u0644\u062c\u0647\u062f \u0627\u0644\u0645\u0646\u062e\u0641\u0636\u060c \u064a\u062a\u0648\u0642\u0641 \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0634\u0627\u0645\u0644 \u0639\u0644\u0649 \u0634\u0631\u064a\u062d\u0629 \u0627\u0633\u062a\u0647\u0644\u0627\u0643\u0643 \u0627\u0644\u0634\u0647\u0631\u064a: \u0646\u062d\u0648 0.219 \u062f\u064a\u0646\u0627\u0631/\u0643.\u0648.\u0633 \u0641\u064a \u0634\u0631\u064a\u062d\u0629 101-200 \u0643.\u0648.\u0633\u060c \u06480.264 \u0641\u064a 201-300\u060c \u06480.402 \u0641\u064a 301-500\u060c \u06480.482 \u0641\u0648\u0642 500 \u0643.\u0648.\u0633\u060c \u0634\u0627\u0645\u0644\u0629 \u0627\u0644\u0623\u062f\u0627\u0621 \u0648\u0627\u0644\u0645\u0639\u0627\u0644\u064a\u0645. \u0634\u062d\u0646 \u0633\u064a\u0627\u0631\u0629 75 \u0643.\u0648.\u0633 \u0645\u0646 20% \u0625\u0644\u0649 80% \u064a\u0633\u062d\u0628 \u0646\u062d\u0648 49 \u0643.\u0648.\u0633 \u0645\u0646 \u0627\u0644\u0645\u0642\u0628\u0633.",
    faqQ3: "\u0647\u0644 \u064a\u0645\u0643\u0646 \u0644\u0644\u0634\u062d\u0646 \u0627\u0644\u0645\u0646\u0632\u0644\u064a \u0623\u0646 \u064a\u0646\u0642\u0644\u0646\u064a \u0625\u0644\u0649 \u0634\u0631\u064a\u062d\u0629 \u0623\u0639\u0644\u0649\u061f",
    faqA3:
      "\u0646\u0639\u0645\u060c \u0648\u0627\u0644\u0623\u062b\u0631 \u0623\u0643\u0628\u0631 \u0645\u0645\u0627 \u064a\u062a\u0648\u0642\u0639 \u0627\u0644\u0643\u062b\u064a\u0631\u0648\u0646. \u062a\u0637\u0628\u0651\u0642 \u0627\u0644\u0633\u062a\u0627\u063a \u0633\u0639\u0631\u0627\u064b \u0648\u0627\u062d\u062f\u0627\u064b \u0639\u0644\u0649 \u0643\u0627\u0645\u0644 \u0627\u0644\u0634\u0647\u0631 \u062d\u0633\u0628 \u0627\u0644\u0627\u0633\u062a\u0647\u0644\u0627\u0643 \u0627\u0644\u062c\u0645\u0644\u064a\u060c \u0641\u062a\u062c\u0627\u0648\u0632 \u0627\u0644\u0634\u0631\u064a\u062d\u0629 \u064a\u0639\u064a\u062f \u062a\u0633\u0639\u064a\u0631 \u0643\u0644 \u0643\u064a\u0644\u0648\u0648\u0627\u0637 \u0633\u0627\u0639\u0629 \u0641\u064a \u0627\u0644\u0634\u0647\u0631. \u0634\u062d\u0646\u0629 \u0628\u0640 49 \u0643.\u0648.\u0633 \u062a\u064f\u0636\u0627\u0641 \u0625\u0644\u0649 \u0634\u0647\u0631 \u0627\u0633\u062a\u0647\u0644\u0627\u0643\u0647 270 \u0643.\u0648.\u0633 \u062a\u0643\u0644\u0641 \u0646\u062d\u0648 57 \u062f\u064a\u0646\u0627\u0631\u0627\u064b\u060c \u0623\u064a \u0646\u062d\u0648 1.17 \u062f\u064a\u0646\u0627\u0631/\u0643.\u0648.\u0633 \u0628\u062f\u0644 0.40. \u0627\u0644\u0634\u062d\u0646 \u0644\u062f\u0649 \u0645\u0636\u064a\u0641 \u064a\u064f\u0628\u0642\u064a \u0641\u0627\u062a\u0648\u0631\u062a\u0643 \u062f\u0627\u062e\u0644 \u0634\u0631\u064a\u062d\u062a\u0647\u0627.",
    faqQ4: "\u0643\u0645 \u062a\u0648\u0641\u0651\u0631 \u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064a\u0629 \u0645\u0646 \u0627\u0644\u0643\u0631\u0628\u0648\u0646 \u0641\u0639\u0644\u064a\u0627\u064b \u0641\u064a \u062a\u0648\u0646\u0633\u061f",
    faqA4:
      "\u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0621 \u0641\u064a \u062a\u0648\u0646\u0633 \u0645\u0635\u062f\u0631\u0647\u0627 \u0646\u062d\u0648 97% \u063a\u0627\u0632 \u0637\u0628\u064a\u0639\u064a\u060c \u0644\u0630\u0627 \u0641\u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u0627\u0644\u0643\u0647\u0631\u0628\u0627\u0626\u064a\u0629 \u0644\u064a\u0633\u062a \u062e\u0627\u0644\u064a\u0629 \u0645\u0646 \u0627\u0644\u0627\u0646\u0628\u0639\u0627\u062b\u0627\u062a \u0647\u0646\u0627. \u062a\u0633\u0644\u0627 \u0645\u0648\u062f\u064a\u0644 3 \u062a\u0637\u0644\u0642 \u0646\u062d\u0648 71 \u063a\u0631\u0627\u0645 \u0643\u0631\u0628\u0648\u0646 \u0644\u0643\u0644 \u0643\u0645 \u0645\u0646 \u0643\u0647\u0631\u0628\u0627\u0621 \u0627\u0644\u0634\u0628\u0643\u0629 \u0645\u0642\u0627\u0628\u0644 \u0646\u062d\u0648 150 \u063a/\u0643\u0645 \u0644\u0633\u064a\u0627\u0631\u0629 \u0628\u0646\u0632\u064a\u0646 \u0645\u0643\u0627\u0641\u0626\u0629\u060c \u0623\u064a \u0623\u0642\u0644 \u0628\u0646\u062d\u0648 53%\u060c \u0623\u0648 1.2 \u0637\u0646 \u0633\u0646\u0648\u064a\u0627\u064b \u0639\u0646\u062f 15000 \u0643\u0645. \u0627\u0644\u0634\u062d\u0646 \u0645\u0646 \u0623\u0644\u0648\u0627\u062d \u0634\u0645\u0633\u064a\u0629 \u064a\u062e\u0641\u0636\u0647\u0627 \u0625\u0644\u0649 \u0646\u062d\u0648 6 \u063a/\u0643\u0645.",
    faqQ5: "\u0647\u0644 \u064a\u0644\u063a\u064a \u062a\u0635\u0646\u064a\u0639 \u0627\u0644\u0628\u0637\u0627\u0631\u064a\u0629 \u0647\u0630\u0627 \u0627\u0644\u062a\u0648\u0641\u064a\u0631\u061f",
    faqA5:
      "\u0644\u0627\u060c \u0644\u0643\u0646\u0647 \u064a\u0624\u062e\u0651\u0631\u0647. \u062a\u0635\u0646\u064a\u0639 \u0628\u0637\u0627\u0631\u064a\u0629 75 \u0643.\u0648.\u0633 \u064a\u0637\u0644\u0642 \u0646\u062d\u0648 5.3 \u0623\u0637\u0646\u0627\u0646 \u0645\u0646 \u0627\u0644\u0643\u0631\u0628\u0648\u0646 \u0645\u0633\u0628\u0642\u0627\u064b. \u0639\u0644\u0649 \u0627\u0644\u0634\u0628\u0643\u0629 \u0627\u0644\u062a\u0648\u0646\u0633\u064a\u0629 \u062a\u0639\u0648\u0651\u0636 \u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u0630\u0644\u0643 \u0628\u0639\u062f \u0646\u062d\u0648 66000 \u0643\u0645\u060c \u0623\u064a \u0646\u062d\u0648 4.4 \u0633\u0646\u0648\u0627\u062a \u0639\u0646\u062f 15000 \u0643\u0645 \u0633\u0646\u0648\u064a\u0627\u064b\u060c \u0648\u0623\u0633\u0631\u0639 \u0645\u0639 \u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0634\u0645\u0633\u064a\u0629 \u0623\u0648 \u0628\u0637\u0627\u0631\u064a\u0629 \u0623\u0635\u063a\u0631.",
    faqQ6: "\u0645\u0627 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u063a\u0637\u064a\u0647\u0627 \u0627\u0644\u0645\u062d\u0627\u0643\u064a\u061f",
    faqA6:
      "527 \u0625\u0635\u062f\u0627\u0631\u0627\u064b \u0645\u0646 63 \u0635\u0627\u0646\u0639\u0627\u064b\u060c \u0628\u0633\u0639\u0629 \u0628\u0637\u0627\u0631\u064a\u0629 \u062d\u0642\u064a\u0642\u064a\u0629 \u0648\u062d\u062f\u0648\u062f \u0634\u062d\u0646 \u0645\u062a\u0631\u062f\u062f \u0648\u0645\u0633\u062a\u0645\u0631 \u0648\u062c\u0647\u062f \u0627\u0644\u0628\u0637\u0627\u0631\u064a\u0629 \u0648\u0643\u064a\u0645\u064a\u0627\u0621 \u0627\u0644\u062e\u0644\u0627\u064a\u0627 \u0645\u0646 \u0642\u0627\u0639\u062f\u0629 Open EV Data \u2014 \u0645\u0646\u0647\u0627 \u0637\u0631\u0627\u0632\u0627\u062a \u0634\u0627\u0626\u0639\u0629 \u0641\u064a \u062a\u0648\u0646\u0633 \u0645\u062b\u0644 \u062f\u0627\u0686\u064a\u0627 \u0633\u0628\u0631\u064a\u0646\u063a \u0648\u0631\u064a\u0646\u0648 5 \u0648\u0628\u0698\u0648 e-208 \u0648BYD Dolphin \u0648\u062a\u0633\u0644\u0627 \u0645\u0648\u062f\u064a\u0644 3. \u0648\u064a\u0645\u0643\u0646 \u0645\u062d\u0627\u0643\u0627\u0629 \u0623\u064a \u0633\u064a\u0627\u0631\u0629 \u063a\u064a\u0631 \u0645\u062f\u0631\u062c\u0629 \u0628\u0625\u062f\u062e\u0627\u0644 \u0645\u0648\u0627\u0635\u0641\u0627\u062a\u0647\u0627 \u064a\u062f\u0648\u064a\u0627\u064b.",
    simFindCharger: "ابحث عن شاحن قريب",
    simHostCta: "شارك شاحنك",
    simHour: "س",
    simMin: "د",

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
    footerCopyright: "© 2026 PowerMaps. Tous droits réservés. Alimenter la révolution de la recharge P2P de VE.",

    // Charging Simulator
    simulator: "Simulateur",
    simBadge: "Simulateur de recharge",
    simTitle: "Combien de temps votre voiture",
    simTitleHighlight: "met-elle vraiment à recharger ?",
    simSubtitle:
      "Choisissez votre véhicule et un point de recharge. La simulation s'appuie sur les caractéristiques constructeur réelles et modélise la courbe de charge, le palier de ralentissement, la température et les pertes — pas une simple division kWh / kW.",
    simInputs: "Votre session",
    simVehicle: "Véhicule",
    simVehiclePlaceholder: "Rechercher une marque ou un modèle…",
    simVehicleCustom: "Autre véhicule (saisie manuelle)",
    simNoMatch: "Aucun modèle ne correspond à cette recherche",
    simBattery: "Capacité batterie utile (kWh)",
    simCharger: "Point de recharge",
    simAcGroup: "AC — recharge à domicile et à destination",
    simDcGroup: "DC — recharge rapide",
    simChargerSocket: "prise domestique",
    simCharger1ph: "borne monophasée",
    simCharger3ph: "borne triphasée",
    simChargerDc: "borne rapide DC",
    simStartSoc: "Niveau actuel (%)",
    simTargetSoc: "Niveau souhaité (%)",
    simTemperature: "Température extérieure",
    simPrecondition: "Batterie préconditionnée à l'arrivée (DC uniquement)",
    simApplyLimit: "Limiter la puissance selon la capacité maximale du véhicule",
    simPrice: "Prix de l'électricité (TND/kWh)",
    simVehicleAc: "AC max",
    simVehicleDc: "DC max",
    simArchitecture: "Architecture",
    simChemistry: "Chimie",
    simConsumption: "Consommation",
    simNoDcPort: "Pas de prise DC",
    simResult: "Résultat",
    simEnergyLine: "{energy} kWh dans la batterie à {power} kW de moyenne.",
    simEnergyBilled: "Énergie facturée",
    simAvgPower: "Puissance moyenne",
    simPeakPower: "Puissance maximale",
    simVehicleLimit: "Limite véhicule",
    simRangeAdded: "Autonomie ajoutée",
    simRatedRange: "Autonomie homologuée",
    simCost: "Coût de la session",
    simCostPer100: "Coût aux 100 km",
    simEfficiency: "Rendement prise-batterie",
    simCurveTitle: "Puissance pendant la session",
    simCurveSoc: "Niveau de charge",
    simCurvePower: "Puissance à la prise",
    simCompareTitle: "La même session ailleurs",
    simCompareUnavailable: "pas de prise DC",
    simInsight: "Ce qui limite cette session",
    simInsightCharger: "C'est le point de recharge qui limite — votre voiture accepterait davantage.",
    simInsightVehicle: "C'est votre voiture qui limite. Une borne plus puissante ne raccourcirait pas cette session.",
    simInsightTaper:
      "C'est le ralentissement de la batterie qui limite. Au-delà de ~70 %, la voiture réduit d'elle-même la puissance pour protéger les cellules.",
    simInsightTemperature:
      "C'est la température qui limite. Une batterie froide refuse la puissance ; le préconditionnement en récupère l'essentiel.",
    simInsightStalled:
      "À cette température, le chauffage consomme plus que cette alimentation ne fournit — la voiture ne rechargera presque pas.",
    simTaperTip: "S'arrêter à 80 % plutôt qu'à 100 % économise {minutes} sur cette session.",
    simCalibrated: "Courbe calibrée sur le temps de charge rapide publié par le constructeur.",
    simDisclaimer:
      "Caractéristiques de {count} modèles issues du catalogue Open EV Data. Les résultats sont une simulation : une session réelle varie de ±10-15 % selon l'âge de la batterie, le câble, la tension du réseau et la charge de la station.",
    simLoading: "Chargement du catalogue véhicules…",
    simError: "Catalogue indisponible — saisissez vos caractéristiques manuellement.",
    simPricing: "Tarification de l'électricité",
    simPricingSteg: "Facture STEG domestique (résidentiel)",
    simPricingStegPro: "Facture STEG (non résidentiel)",
    simPricingCustom: "Prix personnalisé au kWh",
    simMonthlyBase: "Consommation du foyer hors VE (kWh/mois)",
    simEffectivePrice: "{price} TND/kWh tout compris",
    simPriceBreakdown: "tranche {tranche} kWh/mois : {rate} millimes + {vat} % TVA + {levies} millimes de taxes",
    simTrancheJumpTitle: "Changement de tranche",
    simTrancheJump:
      "Cette session fait passer votre mois de la tranche {from} kWh à {to}. La STEG refacture alors chaque kWh du mois à {rate} millimes : cette recharge revient en réalité à {price} TND/kWh au lieu de {normal}. Recharger chez un hôte garde votre facture dans sa tranche.",
    simStegNote:
      "Prix issus du tarif STEG basse tension du 1er mai 2022, TVA et taxes au kWh comprises. La STEG applique un seul prix à tout le mois selon la consommation totale : le coût affiché est donc la différence que cette session fait sur votre facture.",

    // Fuel comparison inside the charging simulator
    simFuelTitle: "La voiture thermique remplacée",
    simFuelGrade: "Carburant à la pompe",
    simFuelUnleaded: "Essence sans plomb",
    simFuelDiesel: "Gasoil ordinaire",
    simFuelDiesel50: "Gasoil 50 (sans soufre)",
    simFuelConsumption: "Sa consommation (L/100 km)",
    simFuelPrice: "Prix à la pompe (TND/L)",
    simFuelSavedTitle: "Économie face au carburant",
    simFuelWorseTitle: "Plus cher que le carburant",
    simFuelSavedLine:
      "Les {km} km ajoutés ici coûtent {ev} TND d'électricité. La même distance brûle {litres} L de {fuel}, soit {ice} TND à la pompe.",
    simFuelWorseLine:
      "Les {km} km ajoutés ici coûtent {ev} TND d'électricité, contre {ice} TND de {fuel} pour la même distance. À ce prix, la thermique reste moins chère à l'usage.",
    simFuelPer100: "{saved} TND économisés aux 100 km — environ {annual} TND par an pour {km} km.",
    simFuelNote:
      "Les prix à la pompe correspondent au tarif réglementé tunisien du {date} : sans plomb {unleaded}, gasoil ordinaire {diesel}, gasoil 50 {diesel50} TND/L. Ils sont modifiables, tout comme la consommation thermique, estimée 15 % sous la valeur essence lorsqu'un gasoil est choisi.",

    // CO2 Simulator
    co2Nav: "CO₂ évité",
    co2Badge: "Simulateur CO₂",
    co2Title: "Combien de CO₂ l'électrique",
    co2TitleHighlight: "évite-t-il vraiment en Tunisie ?",
    co2Subtitle:
      "L'électricité tunisienne provient à environ 97 % du gaz naturel : un VE n'y est donc pas zéro émission. Voici la comparaison honnête avec la thermique équivalente, pertes de charge et fabrication de la batterie comprises.",
    co2AnnualKm: "Distance parcourue par an (km)",
    co2EvConsumption: "Consommation du VE (kWh/100 km)",
    co2FuelType: "Carburant de la voiture remplacée",
    co2Petrol: "Essence",
    co2Diesel: "Diesel",
    co2IceConsumption: "Sa consommation (L/100 km)",
    co2Electricity: "Source d'électricité",
    co2GridTunisia: "Réseau tunisien (gaz)",
    co2GridSolar: "Solaire en toiture",
    co2GridCustom: "Facteur d'émission personnalisé",
    co2Factor: "Facteur d'émission (kg CO₂/kWh)",
    co2Upstream: "Inclure les filières carburant et gaz (du puits au réservoir)",
    co2FuelPrice: "Prix du carburant (TND/L)",
    co2ElectricityPrice: "Prix de l'électricité (TND/kWh)",
    co2CompareTitle: "Émissions par an",
    co2Electric: "Électrique",
    co2EnergyLine: "{kwh} kWh tirés de la prise par an face à {litres} litres de carburant.",
    co2Result: "CO₂ évité par an",
    co2ResultWorse: "CO₂ supplémentaire par an",
    co2SavedLine: "{percent} % de moins que la thermique, pertes de charge comprises.",
    co2Trees: "Équivalent arbres",
    co2FuelSaved: "Carburant économisé",
    co2AnnualEnergy: "Énergie par an",
    co2BreakEvenTitle: "Fabrication de la batterie incluse",
    co2BreakEven:
      "Fabriquer la batterie de {battery} kWh émet environ {debt} kg de CO₂ au départ. À ce rythme, l'électrique dépasse la thermique après {km} km, soit environ {years} ans de votre usage.",
    co2NeverBreakEven:
      "Avec ces valeurs, l'électrique ne rembourse jamais le CO₂ de sa batterie. Essayez une électricité plus propre ou une thermique plus gourmande en comparaison.",
    co2SolarTitle: "Recharge solaire",
    co2Solar:
      "Recharger sur le solaire en toiture d'un hôte plutôt que sur le réseau ramène la voiture à {gkm} g/km et évite {saved} kg de CO₂ par an.",
    co2Cta: "Trouver une borne à proximité",
    co2BackToSim: "Retour au temps de recharge",
    co2Note:
      "Facteurs de combustion : 2,31 kg de CO₂ par litre d'essence, 2,68 pour le gazole. La fabrication de la batterie est comptée à {battery} kg de CO₂ par kWh de capacité, milieu des estimations publiées. Le facteur du réseau tunisien est une estimation pour un mix dominé par le gaz ; il reste modifiable, comme toutes les hypothèses ci-dessus.",

    // FAQ
    faqBadge: "FAQ",
    faqTitle: "Questions sur",
    faqTitleHighlight: "la recharge en Tunisie",
    faqQ1: "Combien de temps faut-il pour recharger une voiture \u00e9lectrique en Tunisie ?",
    faqA1:
      "Cela d\u00e9pend de la borne et de la voiture, pas seulement de la taille de la batterie. Une Tesla Model 3 Long Range de 75 kWh charg\u00e9e de 20 % \u00e0 80 % demande environ 6 h 50 sur une borne domestique monophas\u00e9e de 7,4 kW, environ 4 h 30 sur une borne triphas\u00e9e de 11 kW et environ 57 minutes sur une borne rapide DC de 50 kW. Notre simulateur mod\u00e9lise la courbe de charge r\u00e9elle, le palier de ralentissement, la temp\u00e9rature et les pertes pour 527 v\u00e9hicules.",
    faqQ2: "Combien co\u00fbte la recharge d'une voiture \u00e9lectrique \u00e0 domicile en Tunisie ?",
    faqA2:
      "Au tarif STEG basse tension r\u00e9sidentiel, le prix tout compris d\u00e9pend de votre tranche de consommation mensuelle : environ 0,219 TND/kWh dans la tranche 101-200 kWh, 0,264 en 201-300, 0,402 en 301-500 et 0,482 au-del\u00e0 de 500 kWh, TVA et taxes comprises. Recharger une voiture de 75 kWh de 20 % \u00e0 80 % consomme environ 49 kWh \u00e0 la prise.",
    faqQ3: "Recharger chez soi peut-il faire changer de tranche STEG ?",
    faqA3:
      "Oui, et l'effet est plus important qu'on ne le croit. La STEG applique un seul prix \u00e0 tout le mois selon la consommation totale : franchir une tranche refacture donc chaque kWh du mois. Une recharge de 49 kWh ajout\u00e9e \u00e0 un mois de 270 kWh co\u00fbte environ 57 TND, soit \u00e0 peu pr\u00e8s 1,17 TND/kWh au lieu de 0,40, parce que tout le mois est refactur\u00e9 au tarif sup\u00e9rieur. Recharger chez un h\u00f4te garde votre facture dans sa tranche.",
    faqQ4: "Combien de CO\u2082 une voiture \u00e9lectrique \u00e9vite-t-elle vraiment en Tunisie ?",
    faqA4:
      "L'\u00e9lectricit\u00e9 tunisienne provient \u00e0 environ 97 % du gaz naturel : un VE n'y est donc pas z\u00e9ro \u00e9mission. Une Tesla Model 3 \u00e9met environ 71 g de CO\u2082 par km sur le r\u00e9seau contre environ 150 g/km pour une thermique \u00e9quivalente, soit environ 53 % de moins, ou 1,2 tonne par an sur 15 000 km. Recharger sur le solaire en toiture d'un h\u00f4te ram\u00e8ne ce chiffre \u00e0 environ 6 g/km.",
    faqQ5: "La fabrication de la batterie annule-t-elle le gain de CO\u2082 ?",
    faqA5:
      "Non, mais elle le retarde. Fabriquer une batterie de 75 kWh \u00e9met environ 5,3 tonnes de CO\u2082 au d\u00e9part. Sur le r\u00e9seau tunisien, la voiture \u00e9lectrique rembourse cette dette apr\u00e8s environ 66 000 km, soit \u00e0 peu pr\u00e8s 4,4 ans \u00e0 raison de 15 000 km par an, et plus t\u00f4t en solaire ou avec une plus petite batterie. Face \u00e0 un diesel tr\u00e8s sobre, il faut environ 106 000 km.",
    faqQ6: "Quels v\u00e9hicules \u00e9lectriques le simulateur couvre-t-il ?",
    faqA6:
      "527 versions de 63 constructeurs, avec la capacit\u00e9 batterie r\u00e9elle, les limites de charge AC et DC, la tension du pack et la chimie des cellules issues du catalogue Open EV Data \u2014 dont des mod\u00e8les courants en Tunisie comme la Dacia Spring, la Renault 5 E-Tech, la Peugeot e-208, la BYD Dolphin et la Tesla Model 3. Tout v\u00e9hicule absent peut \u00eatre simul\u00e9 en saisissant ses caract\u00e9ristiques manuellement.",
    simFindCharger: "Trouver une borne à proximité",
    simHostCta: "Partager votre borne",
    simHour: "h",
    simMin: "min",

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
    footerCopyright: "© 2026 PowerMaps. Todos los derechos reservados. Impulsando la revolución de carga P2P de VE.",

    // Charging Simulator
    simulator: "Simulador",
    simBadge: "Simulador de carga",
    simTitle: "¿Cuánto tarda realmente",
    simTitleHighlight: "en cargar tu coche?",
    simSubtitle:
      "Elige tu vehículo y un punto de carga. La simulación parte de las especificaciones reales del fabricante y modela la curva de carga, la reducción de potencia, la temperatura y las pérdidas — no es dividir kWh entre kW.",
    simInputs: "Tu sesión",
    simVehicle: "Vehículo",
    simVehiclePlaceholder: "Buscar marca o modelo…",
    simVehicleCustom: "Otro vehículo (introducir datos manualmente)",
    simNoMatch: "Ningún modelo coincide con esta búsqueda",
    simBattery: "Batería utilizable (kWh)",
    simCharger: "Punto de carga",
    simAcGroup: "AC — carga en casa y en destino",
    simDcGroup: "DC — carga rápida",
    simChargerSocket: "enchufe doméstico",
    simCharger1ph: "wallbox monofásico",
    simCharger3ph: "wallbox trifásico",
    simChargerDc: "cargador rápido DC",
    simStartSoc: "Carga actual (%)",
    simTargetSoc: "Carga objetivo (%)",
    simTemperature: "Temperatura ambiente",
    simPrecondition: "Batería preacondicionada al llegar (solo DC)",
    simApplyLimit: "Limitar la potencia al máximo que admite el vehículo",
    simPrice: "Precio de la electricidad (TND/kWh)",
    simVehicleAc: "AC máx.",
    simVehicleDc: "DC máx.",
    simArchitecture: "Arquitectura",
    simChemistry: "Química",
    simConsumption: "Consumo",
    simNoDcPort: "Sin toma DC",
    simResult: "Resultado",
    simEnergyLine: "{energy} kWh a la batería a {power} kW de media.",
    simEnergyBilled: "Energía facturada",
    simAvgPower: "Potencia media",
    simPeakPower: "Potencia máxima",
    simVehicleLimit: "Límite del vehículo",
    simRangeAdded: "Autonomía añadida",
    simRatedRange: "Autonomía homologada",
    simCost: "Coste de la sesión",
    simCostPer100: "Coste por 100 km",
    simEfficiency: "Rendimiento enchufe-batería",
    simCurveTitle: "Potencia durante la sesión",
    simCurveSoc: "Estado de carga",
    simCurvePower: "Potencia en el enchufe",
    simCompareTitle: "La misma sesión en otros puntos",
    simCompareUnavailable: "sin toma DC",
    simInsight: "Qué limita esta sesión",
    simInsightCharger: "El punto de carga es el límite: tu coche admitiría más potencia.",
    simInsightVehicle: "Aquí el límite es tu coche. Un cargador más potente no acortaría esta sesión.",
    simInsightTaper:
      "El límite es la reducción de potencia de la batería. A partir del ~70 % el coche baja la potencia para proteger las celdas.",
    simInsightTemperature:
      "El límite es la temperatura. Una batería fría no acepta potencia; el preacondicionamiento recupera casi toda.",
    simInsightStalled:
      "A esta temperatura la calefacción consume más de lo que entrega esta toma — el coche apenas cargará.",
    simTaperTip: "Parar al 80 % en lugar del 100 % ahorra {minutes} de esta sesión.",
    simCalibrated: "Curva calibrada con el tiempo de carga rápida publicado por el fabricante.",
    simDisclaimer:
      "Especificaciones de {count} modelos del catálogo Open EV Data. Los resultados son una simulación: una sesión real varía ±10-15 % según la edad de la batería, el cable, la tensión de red y la ocupación de la estación.",
    simLoading: "Cargando catálogo de vehículos…",
    simError: "Catálogo no disponible: introduce tus datos manualmente.",
    simPricing: "Tarificación eléctrica",
    simPricingSteg: "Factura STEG doméstica (residencial)",
    simPricingStegPro: "Factura STEG (no residencial)",
    simPricingCustom: "Precio propio por kWh",
    simMonthlyBase: "Consumo del hogar sin el coche (kWh/mes)",
    simEffectivePrice: "{price} TND/kWh todo incluido",
    simPriceBreakdown: "tramo {tranche} kWh/mes: {rate} milésimas + {vat}% IVA + {levies} milésimas de tasas",
    simTrancheJumpTitle: "Cambio de tramo",
    simTrancheJump:
      "Esta sesión lleva tu mes del tramo {from} kWh al {to}. STEG vuelve a facturar cada kWh del mes a {rate} milésimas, así que esta carga cuesta en realidad {price} TND/kWh en vez de {normal}. Cargar en casa de un anfitrión mantiene tu factura en su tramo.",
    simStegNote:
      "Precios según la tarifa STEG de baja tensión del 1 de mayo de 2022, con IVA y tasas por kWh. STEG aplica un único precio a todo el mes según el consumo total: el coste mostrado es la diferencia que esta sesión provoca en tu factura.",

    // Fuel comparison inside the charging simulator
    simFuelTitle: "El coche de combustión al que sustituye",
    simFuelGrade: "Carburante en el surtidor",
    simFuelUnleaded: "Gasolina sin plomo",
    simFuelDiesel: "Gasóleo ordinario",
    simFuelDiesel50: "Gasóleo 50 (sin azufre)",
    simFuelConsumption: "Su consumo (L/100 km)",
    simFuelPrice: "Precio en el surtidor (TND/L)",
    simFuelSavedTitle: "Ahorro frente al carburante",
    simFuelWorseTitle: "Más caro que el carburante",
    simFuelSavedLine:
      "Los {km} km añadidos aquí cuestan {ev} TND de electricidad. La misma distancia consume {litres} L de {fuel}, es decir {ice} TND en el surtidor.",
    simFuelWorseLine:
      "Los {km} km añadidos aquí cuestan {ev} TND de electricidad, frente a {ice} TND de {fuel} para la misma distancia. A este precio, el coche de combustión sale más barato de usar.",
    simFuelPer100: "{saved} TND ahorrados cada 100 km — unos {annual} TND al año con {km} km.",
    simFuelNote:
      "Los precios corresponden a la tarifa regulada tunecina del {date}: sin plomo {unleaded}, gasóleo ordinario {diesel}, gasóleo 50 {diesel50} TND/L. Son editables, igual que el consumo de combustión, estimado un 15 % por debajo del valor de gasolina cuando se elige un gasóleo.",

    // CO2 Simulator
    co2Nav: "CO₂ evitado",
    co2Badge: "Simulador de CO₂",
    co2Title: "¿Cuánto CO₂ ahorra de verdad",
    co2TitleHighlight: "el coche eléctrico en Túnez?",
    co2Subtitle:
      "La electricidad tunecina procede en un 97 % del gas natural, así que aquí un eléctrico no es cero emisiones. Esta es la comparación honesta con el térmico equivalente, incluidas las pérdidas de carga y la fabricación de la batería.",
    co2AnnualKm: "Distancia recorrida al año (km)",
    co2EvConsumption: "Consumo del eléctrico (kWh/100 km)",
    co2FuelType: "Combustible del coche al que sustituye",
    co2Petrol: "Gasolina",
    co2Diesel: "Diésel",
    co2IceConsumption: "Su consumo (L/100 km)",
    co2Electricity: "Origen de la electricidad",
    co2GridTunisia: "Red tunecina (gas)",
    co2GridSolar: "Solar en tejado",
    co2GridCustom: "Factor de emisión propio",
    co2Factor: "Factor de emisión (kg CO₂/kWh)",
    co2Upstream: "Incluir las cadenas de combustible y gas (del pozo al depósito)",
    co2FuelPrice: "Precio del combustible (TND/L)",
    co2ElectricityPrice: "Precio de la electricidad (TND/kWh)",
    co2CompareTitle: "Emisiones al año",
    co2Electric: "Eléctrico",
    co2EnergyLine: "{kwh} kWh tomados del enchufe al año frente a {litres} litros de combustible.",
    co2Result: "CO₂ evitado al año",
    co2ResultWorse: "CO₂ adicional al año",
    co2SavedLine: "Un {percent} % menos que el térmico, contando las pérdidas de carga.",
    co2Trees: "Equivalente en árboles",
    co2FuelSaved: "Ahorro en combustible",
    co2AnnualEnergy: "Energía al año",
    co2BreakEvenTitle: "Con la fabricación de la batería",
    co2BreakEven:
      "Fabricar la batería de {battery} kWh emite unos {debt} kg de CO₂ por adelantado. A este ritmo el eléctrico adelanta al térmico tras {km} km, unos {years} años de tu uso.",
    co2NeverBreakEven:
      "Con estos valores el eléctrico nunca devuelve el CO₂ de fabricar su batería. Prueba una electricidad más limpia o un térmico más gastón para comparar.",
    co2SolarTitle: "Carga solar",
    co2Solar:
      "Cargar con la solar de un anfitrión en vez de la red baja el coche a {gkm} g/km y evita {saved} kg de CO₂ al año.",
    co2Cta: "Buscar un cargador cerca",
    co2BackToSim: "Volver al tiempo de carga",
    co2Note:
      "Factores de combustión: 2,31 kg de CO₂ por litro de gasolina y 2,68 para el diésel. La fabricación de la batería se cuenta a {battery} kg de CO₂ por kWh de capacidad, el punto medio de las estimaciones publicadas. El factor de la red tunecina es una estimación para un mix dominado por el gas y es editable, como todas las hipótesis anteriores.",

    // FAQ
    faqBadge: "Preguntas frecuentes",
    faqTitle: "Preguntas sobre",
    faqTitleHighlight: "la carga en T\u00fanez",
    faqQ1: "\u00bfCu\u00e1nto tarda en cargar un coche el\u00e9ctrico en T\u00fanez?",
    faqA1:
      "Depende del punto de carga y del coche, no s\u00f3lo del tama\u00f1o de la bater\u00eda. Un Tesla Model 3 Long Range de 75 kWh cargado del 20 % al 80 % tarda unas 6 h 50 en un wallbox dom\u00e9stico monof\u00e1sico de 7,4 kW, unas 4 h 30 en uno trif\u00e1sico de 11 kW y unos 57 minutos en un cargador r\u00e1pido DC de 50 kW. Nuestro simulador modela la curva de carga real, la reducci\u00f3n de potencia, la temperatura y las p\u00e9rdidas para 527 veh\u00edculos.",
    faqQ2: "\u00bfCu\u00e1nto cuesta cargar un coche el\u00e9ctrico en casa en T\u00fanez?",
    faqA2:
      "Con la tarifa residencial de baja tensi\u00f3n de STEG el precio final depende de tu tramo de consumo mensual: unos 0,219 TND/kWh en el tramo 101-200 kWh, 0,264 en 201-300, 0,402 en 301-500 y 0,482 por encima de 500 kWh, IVA y tasas incluidos. Cargar un coche de 75 kWh del 20 % al 80 % consume unos 49 kWh del enchufe.",
    faqQ3: "\u00bfCargar en casa puede subirme de tramo en STEG?",
    faqA3:
      "S\u00ed, y el efecto es mayor de lo que suele pensarse. STEG aplica un \u00fanico precio a todo el mes seg\u00fan el consumo total, as\u00ed que cruzar un tramo revaloriza cada kWh del mes. Una carga de 49 kWh sumada a un mes de 270 kWh cuesta unos 57 TND, es decir alrededor de 1,17 TND/kWh en vez de 0,40, porque se refactura el mes entero. Cargar en casa de un anfitri\u00f3n mantiene tu factura en su tramo.",
    faqQ4: "\u00bfCu\u00e1nto CO\u2082 ahorra realmente un coche el\u00e9ctrico en T\u00fanez?",
    faqA4:
      "La electricidad tunecina procede en un 97 % del gas natural, as\u00ed que aqu\u00ed un el\u00e9ctrico no es cero emisiones. Un Tesla Model 3 emite unos 71 g de CO\u2082 por km con electricidad de red frente a unos 150 g/km de un gasolina equivalente: alrededor de un 53 % menos, o 1,2 toneladas al a\u00f1o con 15 000 km. Cargar con la solar de un anfitri\u00f3n lo baja a unos 6 g/km.",
    faqQ5: "\u00bfLa fabricaci\u00f3n de la bater\u00eda anula el ahorro de CO\u2082?",
    faqA5:
      "No, pero lo retrasa. Fabricar una bater\u00eda de 75 kWh emite unas 5,3 toneladas de CO\u2082 por adelantado. Con la red tunecina el coche el\u00e9ctrico lo devuelve tras unos 66 000 km, unos 4,4 a\u00f1os a raz\u00f3n de 15 000 km al a\u00f1o, y antes con solar o con una bater\u00eda m\u00e1s peque\u00f1a. Frente a un di\u00e9sel muy sobrio hacen falta unos 106 000 km.",
    faqQ6: "\u00bfQu\u00e9 coches el\u00e9ctricos cubre el simulador?",
    faqA6:
      "527 versiones de 63 fabricantes, con capacidad de bater\u00eda real, l\u00edmites de carga AC y DC, tensi\u00f3n del pack y qu\u00edmica de las celdas del cat\u00e1logo Open EV Data, incluidos modelos habituales en T\u00fanez como el Dacia Spring, el Renault 5 E-Tech, el Peugeot e-208, el BYD Dolphin y el Tesla Model 3. Cualquier coche que no est\u00e9 en la lista puede simularse introduciendo sus datos a mano.",
    simFindCharger: "Buscar un cargador cerca",
    simHostCta: "Comparte tu cargador",
    simHour: "h",
    simMin: "min",

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
    footerCopyright: "© 2026 PowerMaps. Alle Rechte vorbehalten. Die P2P-EV-Laderevolution antreiben.",

    // Charging Simulator
    simulator: "Simulator",
    simBadge: "Ladesimulator",
    simTitle: "Wie lange lädt Ihr Auto",
    simTitleHighlight: "wirklich?",
    simSubtitle:
      "Wählen Sie Ihr Fahrzeug und einen Ladepunkt. Die Simulation nutzt echte Herstellerdaten und bildet Ladekurve, Leistungsabfall, Temperatur und Ladeverluste ab — keine simple kWh-durch-kW-Rechnung.",
    simInputs: "Ihre Ladung",
    simVehicle: "Fahrzeug",
    simVehiclePlaceholder: "Marke oder Modell suchen…",
    simVehicleCustom: "Anderes Fahrzeug (Daten manuell eingeben)",
    simNoMatch: "Kein Modell passt zu dieser Suche",
    simBattery: "Nutzbare Batterie (kWh)",
    simCharger: "Ladepunkt",
    simAcGroup: "AC — Laden zu Hause und am Ziel",
    simDcGroup: "DC — Schnellladen",
    simChargerSocket: "Haushaltssteckdose",
    simCharger1ph: "einphasige Wallbox",
    simCharger3ph: "dreiphasige Wallbox",
    simChargerDc: "DC-Schnelllader",
    simStartSoc: "Aktueller Ladestand (%)",
    simTargetSoc: "Ziel-Ladestand (%)",
    simTemperature: "Außentemperatur",
    simPrecondition: "Batterie bei Ankunft vorkonditioniert (nur DC)",
    simApplyLimit: "Leistung auf das Fahrzeugmaximum begrenzen",
    simPrice: "Strompreis (TND/kWh)",
    simVehicleAc: "AC max.",
    simVehicleDc: "DC max.",
    simArchitecture: "Architektur",
    simChemistry: "Zellchemie",
    simConsumption: "Verbrauch",
    simNoDcPort: "Kein DC-Anschluss",
    simResult: "Ergebnis",
    simEnergyLine: "{energy} kWh in die Batterie bei durchschnittlich {power} kW.",
    simEnergyBilled: "Abgerechnete Energie",
    simAvgPower: "Durchschnittsleistung",
    simPeakPower: "Spitzenleistung",
    simVehicleLimit: "Fahrzeuglimit",
    simRangeAdded: "Zusätzliche Reichweite",
    simRatedRange: "Normreichweite",
    simCost: "Kosten der Ladung",
    simCostPer100: "Kosten je 100 km",
    simEfficiency: "Wirkungsgrad Stecker-Batterie",
    simCurveTitle: "Leistung im Verlauf",
    simCurveSoc: "Ladestand",
    simCurvePower: "Leistung am Stecker",
    simCompareTitle: "Dieselbe Ladung anderswo",
    simCompareUnavailable: "kein DC-Anschluss",
    simInsight: "Was diese Ladung begrenzt",
    simInsightCharger: "Der Ladepunkt ist die Grenze — Ihr Auto könnte mehr Leistung aufnehmen.",
    simInsightVehicle: "Hier begrenzt Ihr Auto. Ein stärkerer Ladepunkt würde die Ladung nicht verkürzen.",
    simInsightTaper:
      "Der Leistungsabfall der Batterie begrenzt. Ab etwa 70 % drosselt das Auto selbst, um die Zellen zu schonen.",
    simInsightTemperature:
      "Die Temperatur begrenzt. Eine kalte Batterie nimmt kaum Leistung an; Vorkonditionieren holt das meiste zurück.",
    simInsightStalled:
      "Bei dieser Temperatur zieht die Heizung mehr, als dieser Anschluss liefert — das Auto lädt kaum.",
    simTaperTip: "Bei 80 % statt 100 % aufzuhören spart {minutes} dieser Ladung.",
    simCalibrated: "Kurve auf die veröffentlichte Schnellladezeit des Herstellers kalibriert.",
    simDisclaimer:
      "Daten zu {count} Modellen aus dem Open-EV-Data-Katalog. Die Ergebnisse sind eine Simulation: echte Ladungen weichen um ±10-15 % ab, je nach Batteriealter, Kabel, Netzspannung und Auslastung der Station.",
    simLoading: "Fahrzeugkatalog wird geladen…",
    simError: "Katalog nicht verfügbar — bitte Daten manuell eingeben.",
    simPricing: "Strompreisbildung",
    simPricingSteg: "STEG-Hausrechnung (privat)",
    simPricingStegPro: "STEG-Rechnung (gewerblich)",
    simPricingCustom: "Eigener Preis je kWh",
    simMonthlyBase: "Haushaltsverbrauch ohne E-Auto (kWh/Monat)",
    simEffectivePrice: "{price} TND/kWh inklusive allem",
    simPriceBreakdown: "Stufe {tranche} kWh/Monat: {rate} Millimes + {vat}% MwSt. + {levies} Millimes Abgaben",
    simTrancheJumpTitle: "Stufe überschritten",
    simTrancheJump:
      "Diese Ladung hebt Ihren Monat von der Stufe {from} kWh auf {to}. STEG berechnet dann jede kWh des Monats mit {rate} Millimes — die Ladung kostet damit real {price} TND/kWh statt {normal}. Laden bei einem Gastgeber hält Ihre Rechnung in ihrer Stufe.",
    simStegNote:
      "Preise nach dem STEG-Niederspannungstarif vom 1. Mai 2022, samt MwSt. und den je kWh abgerechneten Abgaben. STEG wendet je nach Gesamtverbrauch einen einzigen Preis auf den ganzen Monat an: Die angezeigten Kosten sind die Differenz, die diese Ladung auf Ihrer Rechnung ausmacht.",

    // Fuel comparison inside the charging simulator
    simFuelTitle: "Der Verbrenner, den er ersetzt",
    simFuelGrade: "Kraftstoff an der Zapfsäule",
    simFuelUnleaded: "Benzin bleifrei",
    simFuelDiesel: "Normaler Diesel",
    simFuelDiesel50: "Diesel 50 (schwefelfrei)",
    simFuelConsumption: "Sein Verbrauch (L/100 km)",
    simFuelPrice: "Preis an der Zapfsäule (TND/L)",
    simFuelSavedTitle: "Ersparnis gegenüber Kraftstoff",
    simFuelWorseTitle: "Teurer als Kraftstoff",
    simFuelSavedLine:
      "Die hier gewonnenen {km} km kosten {ev} TND Strom. Dieselbe Strecke verbrennt {litres} L {fuel}, also {ice} TND an der Zapfsäule.",
    simFuelWorseLine:
      "Die hier gewonnenen {km} km kosten {ev} TND Strom gegenüber {ice} TND {fuel} für dieselbe Strecke. Zu diesem Preis fährt der Verbrenner günstiger.",
    simFuelPer100: "{saved} TND Ersparnis je 100 km — rund {annual} TND im Jahr bei {km} km.",
    simFuelNote:
      "Die Kraftstoffpreise entsprechen dem tunesischen Regeltarif vom {date}: bleifrei {unleaded}, normaler Diesel {diesel}, Diesel 50 {diesel50} TND/L. Sie sind ebenso editierbar wie der Verbrauch des Verbrenners, der bei Dieselwahl 15 % unter dem Benzinwert angesetzt wird.",

    // CO2 Simulator
    co2Nav: "CO₂-Ersparnis",
    co2Badge: "CO₂-Simulator",
    co2Title: "Wie viel CO₂ spart ein E-Auto",
    co2TitleHighlight: "in Tunesien wirklich?",
    co2Subtitle:
      "Tunesischer Strom stammt zu rund 97 % aus Erdgas — ein E-Auto ist hier also nicht emissionsfrei. Das hier ist der ehrliche Vergleich mit dem gleichwertigen Verbrenner, inklusive Ladeverlusten und Batteriefertigung.",
    co2AnnualKm: "Fahrleistung pro Jahr (km)",
    co2EvConsumption: "Verbrauch des E-Autos (kWh/100 km)",
    co2FuelType: "Kraftstoff des ersetzten Autos",
    co2Petrol: "Benzin",
    co2Diesel: "Diesel",
    co2IceConsumption: "Dessen Verbrauch (L/100 km)",
    co2Electricity: "Stromquelle",
    co2GridTunisia: "Tunesisches Netz (Gas)",
    co2GridSolar: "Solaranlage auf dem Dach",
    co2GridCustom: "Eigener Emissionsfaktor",
    co2Factor: "Emissionsfaktor (kg CO₂/kWh)",
    co2Upstream: "Vorketten von Kraftstoff und Gas einrechnen (Well-to-Tank)",
    co2FuelPrice: "Kraftstoffpreis (TND/L)",
    co2ElectricityPrice: "Strompreis (TND/kWh)",
    co2CompareTitle: "Emissionen pro Jahr",
    co2Electric: "Elektrisch",
    co2EnergyLine: "{kwh} kWh pro Jahr aus der Steckdose gegenüber {litres} Litern Kraftstoff.",
    co2Result: "Vermiedenes CO₂ pro Jahr",
    co2ResultWorse: "Zusätzliches CO₂ pro Jahr",
    co2SavedLine: "{percent} % weniger als der Verbrenner, Ladeverluste eingerechnet.",
    co2Trees: "Entspricht Bäumen",
    co2FuelSaved: "Gesparter Kraftstoff",
    co2AnnualEnergy: "Energie pro Jahr",
    co2BreakEvenTitle: "Inklusive Batteriefertigung",
    co2BreakEven:
      "Die Fertigung des {battery}-kWh-Akkus verursacht vorab rund {debt} kg CO₂. In diesem Tempo zieht das E-Auto nach {km} km am Verbrenner vorbei — etwa {years} Jahre Ihrer Fahrleistung.",
    co2NeverBreakEven:
      "Mit diesen Werten holt das E-Auto das CO₂ seiner Batteriefertigung nie auf. Versuchen Sie es mit saubererem Strom oder einem durstigeren Verbrenner als Vergleich.",
    co2SolarTitle: "Laden mit Solarstrom",
    co2Solar:
      "Laden am Dachsolarstrom eines Gastgebers statt am Netz senkt das Auto auf {gkm} g/km und vermeidet {saved} kg CO₂ im Jahr.",
    co2Cta: "Ladepunkt in der Nähe finden",
    co2BackToSim: "Zurück zur Ladezeit",
    co2Note:
      "Verbrennungsfaktoren: 2,31 kg CO₂ je Liter Benzin, 2,68 für Diesel. Die Batteriefertigung wird mit {battery} kg CO₂ je kWh Kapazität angesetzt, der Mitte der veröffentlichten Schätzungen. Der Faktor des tunesischen Netzes ist eine Schätzung für einen gasdominierten Mix und wie alle Annahmen oben editierbar.",

    // FAQ
    faqBadge: "H\u00e4ufige Fragen",
    faqTitle: "Fragen zum",
    faqTitleHighlight: "Laden in Tunesien",
    faqQ1: "Wie lange dauert das Laden eines E-Autos in Tunesien?",
    faqA1:
      "Das h\u00e4ngt vom Ladepunkt und vom Auto ab, nicht nur von der Batteriegr\u00f6\u00dfe. Ein Tesla Model 3 Long Range mit 75 kWh braucht von 20 % auf 80 % rund 6 Std 50 an einer einphasigen 7,4-kW-Wallbox, etwa 4 Std 30 an einer dreiphasigen 11-kW-Wallbox und rund 57 Minuten an einem 50-kW-DC-Schnelllader. Unser Simulator bildet die echte Ladekurve, den Leistungsabfall, die Temperatur und die Ladeverluste f\u00fcr 527 Fahrzeuge ab.",
    faqQ2: "Was kostet das Laden eines E-Autos zu Hause in Tunesien?",
    faqA2:
      "Im STEG-Niederspannungstarif f\u00fcr Privathaushalte h\u00e4ngt der Endpreis von Ihrer monatlichen Verbrauchsstufe ab: rund 0,219 TND/kWh in der Stufe 101-200 kWh, 0,264 in 201-300, 0,402 in 301-500 und 0,482 oberhalb von 500 kWh, inklusive MwSt. und Abgaben. Ein 75-kWh-Auto von 20 % auf 80 % zu laden zieht etwa 49 kWh aus der Steckdose.",
    faqQ3: "Kann Laden zu Hause mich in eine h\u00f6here STEG-Stufe bringen?",
    faqA3:
      "Ja, und der Effekt ist gr\u00f6\u00dfer als die meisten erwarten. STEG wendet je nach Gesamtverbrauch einen einzigen Preis auf den ganzen Monat an \u2014 wer eine Stufe \u00fcberschreitet, zahlt f\u00fcr jede kWh des Monats neu. Eine Ladung von 49 kWh auf einen 270-kWh-Monat kostet rund 57 TND, also etwa 1,17 TND/kWh statt 0,40. Laden bei einem Gastgeber h\u00e4lt die eigene Rechnung in ihrer Stufe.",
    faqQ4: "Wie viel CO\u2082 spart ein E-Auto in Tunesien wirklich?",
    faqA4:
      "Tunesischer Strom stammt zu rund 97 % aus Erdgas, ein E-Auto ist hier also nicht emissionsfrei. Ein Tesla Model 3 emittiert mit Netzstrom etwa 71 g CO\u2082 pro km gegen\u00fcber rund 150 g/km bei einem vergleichbaren Benziner \u2014 etwa 53 % weniger oder 1,2 Tonnen im Jahr bei 15 000 km. Mit dem Dachsolarstrom eines Gastgebers sinkt der Wert auf etwa 6 g/km.",
    faqQ5: "Hebt die Batteriefertigung die CO\u2082-Ersparnis auf?",
    faqA5:
      "Nein, sie verz\u00f6gert sie. Die Fertigung eines 75-kWh-Akkus verursacht vorab rund 5,3 Tonnen CO\u2082. Im tunesischen Netz holt das E-Auto das nach etwa 66 000 km auf \u2014 rund 4,4 Jahre bei 15 000 km pro Jahr \u2014 mit Solarstrom oder kleinerem Akku fr\u00fcher. Gegen\u00fcber einem sehr sparsamen Diesel sind es etwa 106 000 km.",
    faqQ6: "Welche E-Autos deckt der Simulator ab?",
    faqA6:
      "527 Versionen von 63 Herstellern, mit echter Batteriekapazit\u00e4t, AC- und DC-Ladegrenzen, Pack-Spannung und Zellchemie aus dem Open-EV-Data-Katalog \u2014 darunter in Tunesien verbreitete Modelle wie Dacia Spring, Renault 5 E-Tech, Peugeot e-208, BYD Dolphin und Tesla Model 3. Jedes nicht gelistete Auto l\u00e4sst sich durch manuelle Eingabe der Daten simulieren.",
    simFindCharger: "Ladepunkt in der Nähe finden",
    simHostCta: "Eigene Wallbox teilen",
    simHour: "Std",
    simMin: "Min",

    // Theme & Language
    lightMode: "Heller Modus",
    darkMode: "Dunkler Modus",
    language: "Sprache",
  },
} as const
