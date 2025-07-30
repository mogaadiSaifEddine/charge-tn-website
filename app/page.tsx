"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/hooks/use-language"
import { useEffect } from "react"
import {
  MapPin,
  Clock,
  CreditCard,
  Route,
  Languages,
  BarChart,
  DollarSign,
  ArrowRight,
  Smartphone,
  Play,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react"

// Re-defining design tokens based on the original palette and style
const SECTION_PADDING = "py-20 md:py-28"
const CONTAINER_CLASS = "max-w-7xl mx-auto px-6 lg:px-8"
const GRADIENT_TEXT =
  "bg-gradient-to-r from-electric-blue to-vivid-orange bg-clip-text text-transparent animate-gradient-x"
const PRIMARY_BUTTON_CLASS =
  "bg-transparent border-2 border-foreground text-foreground font-semibold hover:bg-foreground hover:text-background transition-colors duration-300 rounded-full px-8 py-3 text-lg shadow-lg hover:shadow-xl"
const SECONDARY_BUTTON_CLASS =
  "border-2 border-foreground/50 text-foreground/70 font-semibold hover:bg-foreground/10 hover:text-foreground transition-colors duration-300 rounded-full px-8 py-3 text-lg"
const CARD_CLASS = "bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function PowerMapsLanding() {
  const { language, t } = useLanguage()

  // Set document direction for RTL languages
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={CONTAINER_CLASS}>
          <div className="flex justify-between items-center h-20">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Image src="/powermaps-logo.png" alt="PowerMaps Logo" width={200} height={200} className="rounded-lg" />
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { key: "features", href: "#features" },
                { key: "operators", href: "#operators" },
                { key: "whyPowerMaps", href: "#global-reach" },
                { key: "sustainability", href: "#sustainability" },
              ].map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 font-medium relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {t(item.key as keyof typeof import("@/lib/i18n").translations.en)}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-electric-blue origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ThemeToggle />
              <LanguageSelector />
              <Button className={PRIMARY_BUTTON_CLASS}>{t("downloadApp")}</Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center pt-20">
        <div className={CONTAINER_CLASS}>
          <motion.div className="max-w-4xl mx-auto" variants={fadeIn} initial="initial" animate="animate">
            <motion.h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              {t("heroTitle")} <span className={GRADIENT_TEXT}>{t("heroTitleHighlight")}</span>
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              {t("heroSubtitle")}
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className={PRIMARY_BUTTON_CLASS}>
                {t("downloadTheApp")} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className={SECONDARY_BUTTON_CLASS}>
                {t("findAStation")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image: App mockup on phone + global map with EV stations */}
          <motion.div
            className="relative w-full max-w-5xl mx-auto mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/hero.jpeg?height=500&width=800"
              alt="PowerMaps App Mockup and Global Map"
              width={800}
              height={500}
              className="w-full h-auto rounded-xl shadow-2xl border border-border"
            />
          </motion.div>
        </div>
      </section>

      {/* Features for EV Users */}
      <section id="features" className={SECTION_PADDING}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("featuresTitle")} <span className={GRADIENT_TEXT}>{t("featuresHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("featuresSubtitle")}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <MapPin className="w-8 h-8 text-electric-blue" />,
                titleKey: "globalStationNetwork",
                descKey: "globalStationDesc",
              },
              {
                icon: <Clock className="w-8 h-8 text-vivid-orange" />,
                titleKey: "smartReservations",
                descKey: "smartReservationsDesc",
              },
              {
                icon: <Zap className="w-8 h-8 text-electric-blue" />,
                titleKey: "crossBorderCompatibility",
                descKey: "crossBorderDesc",
              },
              {
                icon: <CreditCard className="w-8 h-8 text-vivid-orange" />,
                titleKey: "universalPayments",
                descKey: "universalPaymentsDesc",
              },
              {
                icon: <Route className="w-8 h-8 text-electric-blue" />,
                titleKey: "internationalRoutePlanning",
                descKey: "routePlanningDesc",
              },
              {
                icon: <Languages className="w-8 h-8 text-vivid-orange" />,
                titleKey: "multiLanguageSupport",
                descKey: "multiLanguageDesc",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <Card className={CARD_CLASS}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {t(feature.titleKey as keyof typeof import("@/lib/i18n").translations.en)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(feature.descKey as keyof typeof import("@/lib/i18n").translations.en)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits for Operators */}
      <section id="operators" className={SECTION_PADDING}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("operatorsTitle")} <span className={GRADIENT_TEXT}>{t("operatorsHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("operatorsSubtitle")}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <BarChart className="w-8 h-8 text-electric-blue" />,
                titleKey: "globalAnalytics",
                descKey: "globalAnalyticsDesc",
              },
              {
                icon: <DollarSign className="w-8 h-8 text-vivid-orange" />,
                titleKey: "multiCurrencySupport",
                descKey: "multiCurrencyDesc",
              },
              {
                icon: <Users className="w-8 h-8 text-electric-blue" />,
                titleKey: "internationalCustomerBase",
                descKey: "internationalCustomerDesc",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-vivid-orange" />,
                titleKey: "marketExpansionTools",
                descKey: "marketExpansionDesc",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <Card className={CARD_CLASS}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {t(benefit.titleKey as keyof typeof import("@/lib/i18n").translations.en)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(benefit.descKey as keyof typeof import("@/lib/i18n").translations.en)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Button className={PRIMARY_BUTTON_CLASS}>
              {t("becomeAGlobalPartner")} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Global Reach */}
      <section id="global-reach" className={SECTION_PADDING}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("globalReachTitle")} <span className={GRADIENT_TEXT}>{t("globalReachHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("globalReachSubtitle")}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Globe className="w-8 h-8 text-electric-blue" />,
                titleKey: "northAfricaPioneer",
                descKey: "northAfricaDesc",
              },
              {
                icon: <Zap className="w-8 h-8 text-vivid-orange" />,
                titleKey: "crossBorderNetwork",
                descKey: "crossBorderNetworkDesc",
              },
              {
                icon: <Users className="w-8 h-8 text-electric-blue" />,
                titleKey: "growingCommunity",
                descKey: "growingCommunityDesc",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-vivid-orange" />,
                titleKey: "rapidExpansion",
                descKey: "rapidExpansionDesc",
              },
            ].map((advantage, index) => (
              <motion.div key={index} variants={itemFadeIn} className="h-full">
                <Card className={`${CARD_CLASS} h-full`}>
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="mb-4">{advantage.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {t(advantage.titleKey as keyof typeof import("@/lib/i18n").translations.en)}
                    </h3>
                    <p className="text-muted-foreground flex-grow">
                      {t(advantage.descKey as keyof typeof import("@/lib/i18n").translations.en)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section id="sustainability" className={SECTION_PADDING}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("sustainabilityTitle")} <span className={GRADIENT_TEXT}>{t("sustainabilityHighlight")}</span>{" "}
              {t("sustainabilityTitleEnd")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("sustainabilitySubtitle")}</p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t("sustainabilityMainText")}{" "}
                <span className="text-electric-blue">{t("sustainabilityHighlightText")}</span>
              </h3>
              <p className="text-lg text-muted-foreground">{t("sustainabilityDescription")}</p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/Eco-friendly.jpeg?height=400&width=600"
                alt="Global sustainability illustration"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {/*<section className={SECTION_PADDING}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("testimonialsTitle")} <span className={GRADIENT_TEXT}>{t("testimonialsHighlight")}</span>{" "}
              {t("testimonialsEnd")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("testimonialsSubtitle")}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                quoteKey: "testimonial1",
                nameKey: "testimonial1Name",
                roleKey: "testimonial1Role",
              },
              {
                quoteKey: "testimonial2",
                nameKey: "testimonial2Name",
                roleKey: "testimonial2Role",
              },
              {
                quoteKey: "testimonial3",
                nameKey: "testimonial3Name",
                roleKey: "testimonial3Role",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <Card className={CARD_CLASS}>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground italic mb-4">
                      "{t(testimonial.quoteKey as keyof typeof import("@/lib/i18n").translations.en)}"
                    </p>
                    <div className="font-semibold text-foreground">
                      {t(testimonial.nameKey as keyof typeof import("@/lib/i18n").translations.en)}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {t(testimonial.roleKey as keyof typeof import("@/lib/i18n").translations.en)}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

       Testimonials */}


      {/* Call to Action */}
      <section className={SECTION_PADDING}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t("ctaTitle")} <span className={GRADIENT_TEXT}>{t("ctaHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">{t("ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className={PRIMARY_BUTTON_CLASS}>
                {t("downloadApp")} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className={SECONDARY_BUTTON_CLASS}>
                {t("partnerWithUs")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className={CONTAINER_CLASS}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/powermaps-logo.png" alt="PowerMaps Logo" width={32} height={32} className="rounded-md" />
                <span className="text-xl font-bold text-foreground">PowerMaps</span>
              </div>
              <p className="text-muted-foreground text-sm">{t("footerTagline")}</p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61578405974572"
                  aria-label="Facebook"
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/108263961/"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h4 className="font-semibold text-foreground mb-4">{t("quickLinks")}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-electric-blue transition-colors">
                    {t("features")}
                  </a>
                </li>
                <li>
                  <a href="#operators" className="hover:text-electric-blue transition-colors">
                    {t("forOperators")}
                  </a>
                </li>
                <li>
                  <a href="#global-reach" className="hover:text-electric-blue transition-colors">
                    {t("globalReach")}
                  </a>
                </li>
                <li>
                  <a href="#sustainability" className="hover:text-electric-blue transition-colors">
                    {t("sustainability")}
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h4 className="font-semibold text-foreground mb-4">{t("downloadApp")}</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-electric-blue transition-colors"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>{t("appStore")}</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-electric-blue transition-colors"
                >
                  <Play className="w-5 h-5" />
                  <span>{t("googlePlay")}</span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center text-muted-foreground text-sm mt-12 pt-8 border-t border-border"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p>{t("footerCopyright")}</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
