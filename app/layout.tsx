import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "PowerMaps - Simulateur de recharge & CO₂ | Borne de recharge véhicule électrique Tunisie",
  description:
    "Simulateur gratuit du temps de recharge pour 527 modèles de véhicules électriques, chiffré au tarif STEG, et calculateur de CO₂ pour le réseau tunisien. PowerMaps: plateforme P2P de recharge à Tunis, Sousse, Sfax et partout en Tunisie. منصة شحن السيارات الكهربائية في تونس",
  keywords: [
    "simulateur temps de recharge",
    "temps de recharge voiture électrique",
    "calculateur recharge véhicule électrique",
    "EV charging time simulator",
    "EV charging calculator Tunisia",
    "coût recharge voiture électrique Tunisie",
    "tarif STEG recharge voiture électrique",
    "prix kWh STEG",
    "CO2 voiture électrique Tunisie",
    "calculateur CO2 voiture électrique",
    "حاسبة شحن السيارات الكهربائية",
    "وقت شحن السيارة الكهربائية",
    "courbe de charge batterie",
    "temps de charge borne 11 kW",
    "temps de charge borne rapide DC",
    "EV charging Tunisia",
    "borne de recharge Tunisie",
    "شحن السيارات الكهربائية تونس",
    "recharge véhicule électrique Tunisie",
    "charging station Tunis",
    "borne recharge Tunis",
    "borne recharge Sousse",
    "borne recharge Sfax",
    "P2P charging Tunisia",
    "recharge P2P Tunisie",
    "PowerMaps Tunisie",
    "electric vehicle charging Tunisia",
    "voiture électrique Tunisie",
    "سيارة كهربائية تونس",
    "محطة شحن تونس",
    "EV charging station finder",
    "EV charging app",
    "charging station reservation",
    "Tunisia EV charging",
    "Morocco EV charging",
    "Algeria EV charging",
    "North Africa EV",
    "recharge voiture électrique Afrique du Nord",
    "electric vehicle infrastructure",
    "EV charging map",
    "sustainable transport Tunisia",
    "green energy Tunisia",
    "peer to peer charging",
    "partage borne de recharge",
    "EV route planning",
    "charging station operators",
    "réseau de recharge Tunisie",
    "شبكة شحن تونس",
  ],
  authors: [{ name: "PowerMaps Team" }],
  creator: "PowerMaps",
  publisher: "PowerMaps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://powermaps.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "ar-TN": "/ar",
      "fr-TN": "/fr",
      "fr-FR": "/fr",
      "es-ES": "/es",
      "de-DE": "/de",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Simulateur de recharge & CO₂ - PowerMaps Tunisie",
    description:
      "Combien de temps et combien coûte vraiment une recharge en Tunisie ? Simulateur sur 527 modèles réels, tarif STEG et bilan CO₂. Réseau P2P de recharge à Tunis, Sousse, Sfax.",
    url: "https://powermaps.app",
    siteName: "PowerMaps",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "PowerMaps - Réseau de recharge véhicule électrique Tunisie",
      },
      {
        url: "/powermaps-logo.png",
        width: 800,
        height: 600,
        alt: "PowerMaps Logo",
      },
    ],
    locale: "fr_TN",
    alternateLocale: ["en_US", "ar_TN", "fr_FR", "es_ES", "de_DE"],
    type: "website",
    countryName: "Tunisia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulateur de recharge & CO₂ - PowerMaps Tunisie",
    description:
      "Temps de recharge réels pour 527 modèles, coût au tarif STEG et comparaison CO₂ honnête sur le réseau tunisien au gaz.",
    images: ["/hero.jpeg"],
    creator: "@PowerMapsApp",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  classification: "Electric Vehicle Charging Network",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  applicationName: "PowerMaps",
  appleWebApp: {
    capable: true,
    title: "PowerMaps",
    statusBarStyle: "default",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "geo.region": "TN",
    "geo.placename": "Tunis, Tunisia",
    "geo.position": "36.8065;10.1815",
    "ICBM": "36.8065, 10.1815",
    "content-language": "fr-TN, ar-TN, en",
    "distribution": "global",
    "rating": "general",
    "revisit-after": "3 days",
    "og:locale:alternate": "ar_TN",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/powermaps-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/powermaps-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0066FF" />
        <meta name="msapplication-TileColor" content="#0066FF" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Tunisia & North Africa Geo Targeting */}
        <meta name="geo.region" content="TN" />
        <meta name="geo.placename" content="Tunis, Tunisia" />
        <meta name="geo.position" content="36.8065;10.1815" />
        <meta name="ICBM" content="36.8065, 10.1815" />
        <meta httpEquiv="content-language" content="fr-TN, ar-TN, en" />
        <link rel="alternate" hrefLang="fr-TN" href="https://powermaps.app/fr" />
        <link rel="alternate" hrefLang="ar-TN" href="https://powermaps.app/ar" />
        <link rel="alternate" hrefLang="en" href="https://powermaps.app/en" />
        <link rel="alternate" hrefLang="x-default" href="https://powermaps.app/" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PowerMaps",
              alternateName: ["PowerMaps Tunisie", "باور مابس تونس"],
              description: "Plateforme P2P de recharge pour véhicules électriques en Tunisie et en Afrique du Nord. منصة شحن السيارات الكهربائية في تونس.",
              url: "https://powermaps.app",
              logo: "https://powermaps.app/powermaps-logo.png",
              foundingDate: "2024",
              founders: [
                {
                  "@type": "Person",
                  name: "PowerMaps Team",
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tunis",
                addressRegion: "Tunis",
                addressCountry: "TN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["French", "Arabic", "English", "Spanish", "German"],
                areaServed: ["TN", "MA", "DZ"],
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61578405974572",
                "https://www.linkedin.com/company/108263961/",
              ],
              areaServed: [
                {
                  "@type": "Country",
                  name: "Tunisia",
                  alternateName: ["Tunisie", "تونس"],
                },
                {
                  "@type": "Country",
                  name: "Morocco",
                },
                {
                  "@type": "Country",
                  name: "Algeria",
                },
              ],
              serviceType: "Electric Vehicle Charging Network",
              knowsLanguage: ["fr", "ar", "en"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "EV Charging Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "EV Charging Station Finder",
                      description: "Trouvez des bornes de recharge pour véhicules électriques en Tunisie",
                      areaServed: { "@type": "Country", name: "Tunisia" },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Peer-to-Peer Charging",
                      description: "Partagez votre borne de recharge et gagnez de l'argent. شارك شاحنك واربح المال",
                      areaServed: { "@type": "Country", name: "Tunisia" },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Charging Station Reservation",
                      description: "Réservez des bornes de recharge à l'avance en Tunisie",
                      areaServed: { "@type": "Country", name: "Tunisia" },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cross-Border Charging",
                      description: "Recharge sans frontières entre la Tunisie, le Maroc et l'Algérie",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Mobile App Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "PowerMaps",
              operatingSystem: ["iOS", "Android"],
              applicationCategory: "UtilitiesApplication",
              description: "Trouvez, réservez et partagez des bornes de recharge pour véhicules électriques en Tunisie. Find, book and share EV charging stations in Tunisia.",
              inLanguage: ["fr", "ar", "en"],
              countryOfOrigin: {
                "@type": "Country",
                name: "Tunisia",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "TND",
                availability: "https://schema.org/InStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "1250",
              },
            }),
          }}
        />

        {/* Simulator tools */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "EV Charging Time Simulator",
                url: "https://powermaps.app/#simulator",
                applicationCategory: "UtilitiesApplication",
                operatingSystem: "Any",
                browserRequirements: "Requires JavaScript",
                inLanguage: ["en", "ar", "fr", "es", "de"],
                isAccessibleForFree: true,
                offers: { "@type": "Offer", price: "0", priceCurrency: "TND" },
                provider: { "@type": "Organization", name: "PowerMaps", url: "https://powermaps.app" },
                description:
                  "Simulates how long an electric car really takes to charge, integrating the battery charge curve, the power taper, temperature and charging losses for 527 real vehicle models, and prices the session on the Tunisian STEG low-voltage tariff.",
                featureList: [
                  "527 vehicle models with real battery, AC and DC charging specifications",
                  "Battery charge curve and taper modelling for 400 V, 800 V and LFP packs",
                  "Temperature derating and battery preconditioning",
                  "Plug-to-battery charging losses",
                  "Session cost on the STEG residential and non-residential tariff",
                  "Comparison across domestic socket, 3.7 to 22 kW AC and 50 to 350 kW DC charging points",
                ],
                citation: {
                  "@type": "CreativeWork",
                  name: "Open EV Data",
                  url: "https://github.com/electric-vehicle-data/open-ev-data",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "EV CO2 Savings Calculator",
                url: "https://powermaps.app/#co2",
                applicationCategory: "UtilitiesApplication",
                operatingSystem: "Any",
                browserRequirements: "Requires JavaScript",
                inLanguage: ["en", "ar", "fr", "es", "de"],
                isAccessibleForFree: true,
                offers: { "@type": "Offer", price: "0", priceCurrency: "TND" },
                provider: { "@type": "Organization", name: "PowerMaps", url: "https://powermaps.app" },
                description:
                  "Compares the CO2 emissions of an electric car against the equivalent petrol or diesel car on Tunisia's gas-fired grid, including charging losses, battery manufacturing and the distance needed to repay it.",
                featureList: [
                  "Grid, rooftop solar or custom electricity emission factor",
                  "Petrol and diesel combustion factors with optional well-to-tank emissions",
                  "Charging losses counted at the plug",
                  "Battery manufacturing debt and break-even distance",
                  "Annual CO2, fuel savings and tree equivalent",
                ],
              },
            ]),
          }}
        />

        {/* FAQ Schema - the first six mirror the visible FAQ section on the page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long does it take to charge an electric car in Tunisia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It depends on the charging point and the car, not just on the battery size. A 75 kWh Tesla Model 3 Long Range charged from 20% to 80% takes about 6 h 50 on a 7.4 kW single-phase home wallbox, about 4 h 30 on an 11 kW three-phase wallbox, and about 57 minutes on a 50 kW DC fast charger. Our simulator models the real charge curve, the taper, temperature and charging losses for 527 vehicles.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does it cost to charge an electric car at home in Tunisia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "On the STEG low-voltage residential tariff the all-in price depends on your monthly consumption bracket: roughly 0.219 TND/kWh in the 101-200 kWh tranche, 0.264 in 201-300, 0.402 in 301-500 and 0.482 above 500 kWh, VAT and levies included. Charging a 75 kWh car from 20% to 80% draws about 49 kWh from the plug.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can charging an EV at home push me into a higher STEG tranche?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, and it matters more than most people expect. STEG applies a single rate to the entire month based on total consumption, so crossing a tranche re-prices every kWh of that month. A 49 kWh charge added to a 270 kWh month costs about 57 TND, roughly 1.17 TND/kWh instead of 0.40, because the whole month is re-billed at the higher rate. Charging at a host keeps your own bill inside its tranche.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much CO2 does an electric car actually save in Tunisia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tunisian electricity is about 97% natural gas, so an EV here is not zero emission. A Tesla Model 3 emits around 71 g CO2 per km on grid electricity against about 150 g/km for an equivalent petrol car, roughly 53% less, or 1.2 tonnes a year at 15 000 km. Charging from a host's rooftop solar instead drops it to about 6 g/km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does making the battery cancel out the CO2 savings?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, but it delays them. Building a 75 kWh battery emits roughly 5.3 tonnes of CO2 up front. On the Tunisian grid the electric car repays that after about 66 000 km, around 4.4 years at 15 000 km a year, and sooner on solar or with a smaller battery. Against a very frugal diesel the payback stretches to about 106 000 km.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which electric cars does the simulator cover?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "527 versions from 63 manufacturers, using real battery capacity, AC and DC charging limits, pack voltage and cell chemistry from the Open EV Data catalogue, including models common in Tunisia such as the Dacia Spring, Renault 5 E-Tech, Peugeot e-208, BYD Dolphin and Tesla Model 3. Any car not listed can be simulated by entering its specifications manually.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Qu'est-ce que PowerMaps ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PowerMaps est une plateforme P2P de recharge pour véhicules électriques en Tunisie. Elle connecte les conducteurs de VE aux bornes de recharge privées avec disponibilité en temps réel, réservations intelligentes et paiements sécurisés à Tunis, Sousse, Sfax et dans toute la Tunisie.",
                  },
                },
                {
                  "@type": "Question",
                  name: "ما هو تطبيق PowerMaps؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PowerMaps هو منصة شحن نظير إلى نظير (P2P) للسيارات الكهربائية في تونس. يربط سائقي السيارات الكهربائية بمحطات الشحن الخاصة مع التوفر في الوقت الحقيقي والحجز الذكي والدفع الآمن في تونس العاصمة وسوسة وصفاقس وفي جميع أنحاء تونس.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where does PowerMaps operate in Tunisia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PowerMaps operates across Tunisia including Tunis, Sousse, Sfax, Monastir, Hammamet, Nabeul, Bizerte, and other major cities. The P2P network is expanding rapidly to cover all of Tunisia, Morocco, and Algeria.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Comment devenir hôte de recharge en Tunisie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Pour devenir hôte de recharge en Tunisie, inscrivez-vous sur PowerMaps, ajoutez votre borne de recharge privée, définissez vos tarifs et disponibilités. Vous pouvez gagner entre 200 et 800 TND par mois en partageant votre chargeur.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Où trouver des bornes de recharge pour voiture électrique en Tunisie ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Avec PowerMaps, trouvez des bornes de recharge pour véhicules électriques partout en Tunisie. Notre réseau P2P offre des milliers de points de recharge dans les zones résidentielles et les lieux de travail à Tunis, Sousse, Sfax et plus.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I reserve charging stations in advance in Tunisia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, PowerMaps offers smart reservations that allow you to book your charging slot in advance for guaranteed access at any charging station in our Tunisian network.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does PowerMaps work across borders in North Africa?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, PowerMaps provides cross-border compatibility, allowing you to seamlessly charge across Tunisia, Morocco, and Algeria with one universal app.",
                  },
                },
              ],
            }),
          }}
        />

        {/* WebSite Schema for Sitelinks Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PowerMaps",
              alternateName: ["PowerMaps Tunisie", "باور مابس"],
              url: "https://powermaps.app",
              inLanguage: ["fr", "ar", "en"],
              potentialAction: {
                "@type": "SearchAction",
                target: "https://app.powermaps.tech/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* LocalBusiness Schema for Tunisia presence */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "PowerMaps Tunisie",
              description: "Réseau de bornes de recharge pour véhicules électriques en Tunisie",
              url: "https://powermaps.app",
              logo: "https://powermaps.app/powermaps-logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tunis",
                addressRegion: "Tunis",
                addressCountry: "TN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "36.8065",
                longitude: "10.1815",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "34.0",
                  longitude: "9.0",
                },
                geoRadius: "300000",
              },
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
