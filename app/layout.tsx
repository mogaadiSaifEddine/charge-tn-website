import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "PowerMaps - Global EV Charging Station Finder & Reservation App",
  description:
    "Find, reserve, and pay for EV charging stations worldwide with PowerMaps. Real-time availability, smart reservations, and seamless cross-border charging across Tunisia, Morocco, Algeria and beyond.",
  keywords: [
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
    title: "PowerMaps - Global EV Charging Station Network",
    description:
      "Find, reserve, and pay for EV charging stations worldwide. Real-time availability, smart reservations, and seamless cross-border charging.",
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
    title: "PowerMaps - Global EV Charging Network",
    description: "Find, reserve, and pay for EV charging stations worldwide with real-time availability.",
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

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is PowerMaps?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PowerMaps is a global EV charging platform that connects electric vehicle drivers worldwide to charging stations with real-time availability, smart reservations, and seamless payments.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which countries does PowerMaps support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PowerMaps currently operates in Tunisia, Morocco, and Algeria, with rapid expansion planned across North Africa and other regions worldwide.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I reserve charging stations in advance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, PowerMaps offers smart reservations that allow you to book your charging slot in advance for guaranteed access anywhere in our network.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does PowerMaps work across different countries?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, PowerMaps provides cross-border compatibility, allowing you to seamlessly charge across different networks and countries with one universal app.",
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
