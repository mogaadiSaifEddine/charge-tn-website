"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/hooks/use-language"
import { useEffect } from "react"
import {
  MapPin,
  Clock,
  CreditCard,
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
  Home,
  Wallet,
  Shield,
  Battery,
  Star,
  CheckCircle,
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
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={CONTAINER_CLASS}>
          <div className="flex justify-between items-center h-20">
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="/powermaps-logo.png"
                alt="PowerMaps - P2P EV Charging Network Logo"
                width={200}
                height={200}
                className="rounded-lg"
                priority
              />
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { key: "p2pCharging", href: "#p2p-charging" },
                { key: "forHosts", href: "#for-hosts" },
                { key: "forDrivers", href: "#for-drivers" },
                { key: "howItWorks", href: "#how-it-works" },
                { key: "contact", href: "#contact" },
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
              <Button
                onClick={() => (window.location.href = "https://app.powermaps.tech/auth/register")}
                className={PRIMARY_BUTTON_CLASS}
                aria-label="Join PowerMaps P2P Charging Network"
              >
                {t("joinNetwork")}
              </Button>
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
              <Button
                onClick={() => (window.location.href = "https://app.powermaps.tech/")}
                className={PRIMARY_BUTTON_CLASS}
                aria-label="Start P2P charging with PowerMaps"
              >
                {t("startCharging")} <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>

              <Button
                onClick={() => document.getElementById("for-hosts")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className={SECONDARY_BUTTON_CLASS}
                aria-label="Become a charging host"
              >
                {t("becomeAHost")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image: P2P charging concept */}
          <motion.div
            className="relative w-full max-w-5xl mx-auto mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/hero.jpeg"
              alt="PowerMaps P2P charging network connecting EV drivers with private charging stations"
              width={800}
              height={500}
              className="w-full h-auto rounded-xl shadow-2xl border border-border"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            />
          </motion.div>
        </div>
      </section>

      {/* P2P Charging Benefits */}
      <section id="p2p-charging" className={SECTION_PADDING}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("whyChooseP2P")} <span className={GRADIENT_TEXT}>{t("whyChooseP2PHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("p2pSubtitle")}</p>
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
                icon: <DollarSign className="w-8 h-8 text-electric-blue" aria-hidden="true" />,
                titleKey: "lowerCosts",
                descKey: "lowerCostsDesc",
              },
              {
                icon: <MapPin className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                titleKey: "moreLocations",
                descKey: "moreLocationsDesc",
              },
              {
                icon: <Clock className="w-8 h-8 text-electric-blue" aria-hidden="true" />,
                titleKey: "availability247",
                descKey: "availability247Desc",
              },
              {
                icon: <Users className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                titleKey: "communityDriven",
                descKey: "communityDrivenDesc",
              },
              {
                icon: <Shield className="w-8 h-8 text-electric-blue" aria-hidden="true" />,
                titleKey: "securePayments",
                descKey: "securePaymentsDesc",
              },
              {
                icon: <Zap className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                titleKey: "smartMatching",
                descKey: "smartMatchingDesc",
              },
            ].map((benefit, index) => (
              <motion.article key={index} variants={itemFadeIn}>
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
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* For Charging Hosts */}
      <section id="for-hosts" className={SECTION_PADDING}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("earnMoneyAs")} <span className={GRADIENT_TEXT}>{t("earnMoneyAsHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("hostsSubtitle")}</p>
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
                icon: <Home className="w-8 h-8 text-electric-blue" aria-hidden="true" />,
                titleKey: "homeChargingSharing",
                descKey: "homeChargingSharingDesc",
              },
              {
                icon: <Wallet className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                titleKey: "flexibleEarnings",
                descKey: "flexibleEarningsDesc",
              },
              {
                icon: <BarChart className="w-8 h-8 text-electric-blue" aria-hidden="true" />,
                titleKey: "usageAnalytics",
                descKey: "usageAnalyticsDesc",
              },
              {
                icon: <Shield className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                titleKey: "hostProtection",
                descKey: "hostProtectionDesc",
              },
            ].map((benefit, index) => (
              <motion.article key={index} variants={itemFadeIn}>
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
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Button
              onClick={() => (window.location.href = "https://app.powermaps.tech/")}
              className={PRIMARY_BUTTON_CLASS}
              aria-label="Start hosting charging sessions with PowerMaps"
            >
              {t("startHosting")} <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* For EV Drivers */}
      <section id="for-drivers" className={SECTION_PADDING}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("perfectFor")} <span className={GRADIENT_TEXT}>{t("perfectForHighlight")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("driversSubtitle")}</p>
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
                icon: <MapPin className="w-8 h-8 text-electric-blue" aria-hidden="true" />,
                titleKey: "nearbyCharging",
                descKey: "nearbyChargingDesc",
              },
              {
                icon: <Clock className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                titleKey: "instantBooking",
                descKey: "instantBookingDesc",
              },
              {
                icon: <CreditCard className="w-8 h-8 text-electric-blue" aria-hidden="true" />,
                titleKey: "easyPayments",
                descKey: "easyPaymentsDesc",
              },
              {
                icon: <Star className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                titleKey: "ratedHosts",
                descKey: "ratedHostsDesc",
              },
            ].map((advantage, index) => (
              <motion.article key={index} variants={itemFadeIn} className="h-full">
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
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className={SECTION_PADDING}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("howP2PWorks")} <span className={GRADIENT_TEXT}>{t("howP2PWorksHighlight")}</span>{" "}
              {t("howP2PWorksEnd")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("howItWorksSubtitle")}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                titleKey: "step1Title",
                descKey: "step1Desc",
                icon: <MapPin className="w-8 h-8 text-electric-blue" />,
              },
              {
                step: "02",
                titleKey: "step2Title",
                descKey: "step2Desc",
                icon: <Battery className="w-8 h-8 text-vivid-orange" />,
              },
              {
                step: "03",
                titleKey: "step3Title",
                descKey: "step3Desc",
                icon: <CheckCircle className="w-8 h-8 text-electric-blue" />,
              },
            ].map((step, index) => (
              <motion.article key={index} variants={itemFadeIn}>
                <Card className={CARD_CLASS}>
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-vivid-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {t(step.titleKey as keyof typeof import("@/lib/i18n").translations.en)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(step.descKey as keyof typeof import("@/lib/i18n").translations.en)}
                    </p>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
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
                {t("joinThe")} <span className="text-electric-blue">{t("joinTheHighlight")}</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6">{t("p2pRevolutionDesc")}</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  {t("verifiedHosts")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  {t("customerSupport")}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  {t("growingNetwork")}
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/Eco-friendly.jpeg"
                alt="P2P EV charging network promoting sustainable transportation and community sharing"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

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
              {t("readyToJoin")} <span className={GRADIENT_TEXT}>{t("readyToJoinHighlight")}</span>{" "}
              {t("readyToJoinEnd")}
            </h2>
            <p className="text-lg text-muted-foreground mb-10">{t("ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => (window.location.href = "https://app.powermaps.tech/")}
                className={PRIMARY_BUTTON_CLASS}
                aria-label="Join PowerMaps P2P charging network"
              >
                {t("joinNetwork")} <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className={SECONDARY_BUTTON_CLASS}
                aria-label="Learn more about P2P charging"
              >
                {t("learnMore")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12" role="contentinfo">
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
                  aria-label="Follow PowerMaps on Facebook"
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  aria-label="Follow PowerMaps on Twitter"
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  aria-label="Follow PowerMaps on Instagram"
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/108263961/"
                  aria-label="Connect with PowerMaps on LinkedIn"
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h4 className="font-semibold text-foreground mb-4">{t("p2pChargingFooter")}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#p2p-charging" className="hover:text-electric-blue transition-colors">
                    {t("howItWorks")}
                  </a>
                </li>
                <li>
                  <a href="#for-hosts" className="hover:text-electric-blue transition-colors">
                    {t("forHosts")}
                  </a>
                </li>
                <li>
                  <a href="#for-drivers" className="hover:text-electric-blue transition-colors">
                    {t("forDrivers")}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-electric-blue transition-colors">
                    {t("contact")}
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h4 className="font-semibold text-foreground mb-4">{t("getStarted")}</h4>
              <div className="space-y-3">
                <a
                  href="https://app.powermaps.tech/"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-electric-blue transition-colors"
                  aria-label="Download PowerMaps from App Store"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>{t("iosApp")}</span>
                </a>
                <a
                  href="https://app.powermaps.tech/"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-electric-blue transition-colors"
                  aria-label="Download PowerMaps from Google Play"
                >
                  <Play className="w-5 h-5" />
                  <span>{t("androidApp")}</span>
                </a>
                <a
                  href="https://app.powermaps.tech/"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-electric-blue transition-colors"
                  aria-label="Access PowerMaps web platform"
                >
                  <Globe className="w-5 h-5" />
                  <span>{t("webPlatform")}</span>
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
