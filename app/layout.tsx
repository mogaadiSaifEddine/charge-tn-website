import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "PowerMaps - EV Charging Time & CO₂ Simulator | P2P Charging Tunisia",
  description:
    "Free EV charging time simulator for 527 real car models, priced on the STEG tariff, plus a CO₂ savings calculator for Tunisia's grid. Find, reserve and pay for peer-to-peer charging across Tunisia, Morocco and Algeria.",
  keywords: [
    "EV charging time simulator",
    "EV charging calculator",
    "charging time calculator Tunisia",
    "simulateur temps de recharge",
    "temps de recharge voiture électrique",
    "STEG tariff EV charging",
    "EV charging cost Tunisia",
    "CO2 savings electric car",
    "CO2 calculator electric vehicle",
    "electric car emissions Tunisia",
    "battery charge curve",
    "DC fast charging time",
    "AC wallbox charging time",
    "EV charging",
    "electric vehicle charging",
    "charging station finder",
    "EV charging app",
    "electric car charging",
    "charging station reservation",
    "Tunisia EV charging",
    "Morocco EV charging",
    "Algeria EV charging",
    "North Africa EV",
    "global EV network",
    "electric vehicle infrastructure",
    "EV charging map",
    "charging station availability",
    "electric mobility",
    "sustainable transport",
    "green energy",
    "carbon neutral",
    "EV route planning",
    "charging station operators",
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
      "fr-FR": "/fr",
      "es-ES": "/es",
      "de-DE": "/de",
    },
  },
  openGraph: {
    title: "PowerMaps - EV Charging Time & CO₂ Simulator for Tunisia",
    description:
      "Simulate real charging times for 527 EV models on the STEG tariff, see what a session really costs, and how much CO₂ going electric saves in Tunisia.",
    url: "https://powermaps.app",
    siteName: "PowerMaps",
    images: [
      {
        url: "/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "PowerMaps - Global EV Charging Network",
      },
      {
        url: "/powermaps-logo.png",
        width: 800,
        height: 600,
        alt: "PowerMaps Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PowerMaps - EV Charging Time & CO₂ Simulator for Tunisia",
    description:
      "Real charging times for 527 EV models, real STEG pricing, and an honest CO₂ comparison on Tunisia's gas-fired grid.",
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

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PowerMaps",
              description: "Global EV charging station finder and reservation platform",
              url: "https://powermaps.app",
              logo: "https://powermaps.app/powermaps-logo.png",
              foundingDate: "2024",
              founders: [
                {
                  "@type": "Person",
                  name: "PowerMaps Team",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["English", "Arabic", "French", "Spanish", "German"],
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61578405974572",
                "https://www.linkedin.com/company/108263961/",
              ],
              areaServed: [
                {
                  "@type": "Country",
                  name: "Tunisia",
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
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "EV Charging Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "EV Charging Station Finder",
                      description: "Find electric vehicle charging stations worldwide",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Charging Station Reservation",
                      description: "Reserve charging slots in advance",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cross-Border Charging",
                      description: "Seamless charging across different countries and networks",
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
              description: "Find, reserve, and pay for EV charging stations worldwide",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
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

        {/* FAQ Schema - mirrors the visible FAQ section on the page */}
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
              ],
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
