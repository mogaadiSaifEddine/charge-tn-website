import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "PowerMaps - Borne de recharge véhicule électrique Tunisie | شحن السيارات الكهربائية تونس",
  description:
    "PowerMaps: la plateforme P2P de recharge pour véhicules électriques en Tunisie. Trouvez, réservez et partagez des bornes de recharge à Tunis, Sousse, Sfax et partout en Tunisie. منصة شحن السيارات الكهربائية في تونس - PowerMaps",
  keywords: [
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
    title: "PowerMaps - Recharge véhicule électrique en Tunisie | EV Charging Tunisia",
    description:
      "Trouvez et partagez des bornes de recharge pour véhicules électriques en Tunisie. Réseau P2P de recharge à Tunis, Sousse, Sfax. Find & share EV charging stations across Tunisia.",
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
    title: "PowerMaps - Bornes de recharge EV en Tunisie",
    description: "Trouvez, réservez et partagez des bornes de recharge pour véhicules électriques en Tunisie. Réseau P2P de recharge.",
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

        {/* FAQ Schema - Tunisia focused */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
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
