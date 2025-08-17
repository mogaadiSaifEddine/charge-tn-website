"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"
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
  Menu,
  X,
  Search,
  Mail,
  Phone,
} from "lucide-react"

// Google Maps Platform Design System
const GOOGLE_COLORS = {
  primary: "#1a73e8",
  primaryHover: "#1557b0",
  secondary: "#34a853",
  surface: "#ffffff",
  background: "#f8f9fa",
  textPrimary: "#202124",
  textSecondary: "#5f6368",
  border: "#dadce0",
  borderHover: "#bdc1c6",
}

const GOOGLE_SPACING = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
}

const GOOGLE_ELEVATION = {
  level1: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)",
  level2: "0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15)",
  level3: "0 4px 8px 3px rgba(60,64,67,.15), 0 1px 3px rgba(60,64,67,.3)",
}

// Animation variants matching Google's motion design
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.0, 0.0, 0.2, 1] } },
}

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
}

const itemFadeIn = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.0, 0.0, 0.2, 1] } },
}

export default function PowerMapsLanding() {
  const { language, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Set document direction for RTL languages
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  return (
    <div
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white"
      style={{ fontFamily: "Google Sans, Roboto, Arial, sans-serif" }}
    >
      {/* Google-style Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white dark:bg-black shadow-sm border-b border-gray-200 dark:border-gray-800"
            : "bg-white/95 dark:bg-black/95 backdrop-blur-sm"
        }`}
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.0, 0.0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Google style */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <Image src="/powermaps-logo.png" alt="PowerMaps" width={32} height={32} className="rounded-lg" priority />
              <span className="text-xl font-normal text-gray-900 dark:text-white">PowerMaps</span>
            </motion.div>

            {/* Desktop Navigation - Google style */}
            <div className="hidden lg:flex items-center space-x-8">
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
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 px-1 relative group"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                >
                  {t(item.key as keyof typeof import("@/lib/i18n").translations.en)}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </motion.a>
              ))}
            </div>

            {/* Right side controls - Google style */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <ThemeToggle />
              <LanguageSelector />
              <Button
                onClick={() => (window.location.href = "https://app.powermaps.tech/auth/register")}
                className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                style={{ boxShadow: GOOGLE_ELEVATION.level1 }}
              >
                {t("joinNetwork")}
              </Button>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-gray-200 dark:border-gray-800 py-4 bg-white dark:bg-black"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col space-y-4">
                {[
                  { key: "p2pCharging", href: "#p2p-charging" },
                  { key: "forHosts", href: "#for-hosts" },
                  { key: "forDrivers", href: "#for-drivers" },
                  { key: "howItWorks", href: "#how-it-works" },
                  { key: "contact", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(item.key as keyof typeof import("@/lib/i18n").translations.en)}
                  </a>
                ))}
                <Button
                  onClick={() => (window.location.href = "https://app.powermaps.tech/auth/register")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 w-fit mt-2"
                >
                  {t("joinNetwork")}
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section - Google Maps Platform style */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left content - 7 columns */}
            <motion.div className="lg:col-span-7" variants={fadeInUp} initial="initial" animate="animate">
              <motion.div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  <Zap className="w-4 h-4 mr-2" />
                  P2P Charging Network
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 dark:text-white mb-6 leading-tight"
                style={{ fontFamily: "Google Sans Display, Google Sans, Roboto, Arial, sans-serif" }}
              >
                {t("heroTitle")} <span className="text-blue-600 dark:text-blue-400">{t("heroTitleHighlight")}</span>
              </motion.h1>

              <motion.p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                {t("heroSubtitle")}
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  onClick={() => (window.location.href = "https://app.powermaps.tech/")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-base font-medium transition-all duration-200 inline-flex items-center justify-center shadow-sm hover:shadow-md"
                  style={{ boxShadow: GOOGLE_ELEVATION.level1 }}
                >
                  {t("startCharging")} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  onClick={() => document.getElementById("for-hosts")?.scrollIntoView({ behavior: "smooth" })}
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-500 px-8 py-3 rounded-lg text-base font-medium transition-all duration-200"
                >
                  {t("becomeAHost")}
                </Button>
              </motion.div>

              {/* Trust indicators - Google style */}
              <motion.div
                className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
                  Verified hosts
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                  Secure payments
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-purple-600 dark:text-purple-400 mr-2" />
                  Growing community
                </div>
              </motion.div>
            </motion.div>

            {/* Right content - 5 columns */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.0, 0.0, 0.2, 1] }}
            >
              <div className="relative">
                <div
                  className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900"
                  style={{ boxShadow: GOOGLE_ELEVATION.level3 }}
                >
                  <Image
                    src="/hero.jpeg"
                    alt="PowerMaps P2P charging network"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Floating stats card - Google style */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  style={{ boxShadow: GOOGLE_ELEVATION.level2 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">1,000+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Active hosts</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Google Cards style */}
      <section id="p2p-charging" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mb-4">
              {t("whyChooseP2P")} <span className="text-blue-600 dark:text-blue-400">{t("whyChooseP2PHighlight")}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("p2pSubtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />,
                titleKey: "lowerCosts",
                descKey: "lowerCostsDesc",
                color: "green",
              },
              {
                icon: <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
                titleKey: "moreLocations",
                descKey: "moreLocationsDesc",
                color: "blue",
              },
              {
                icon: <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
                titleKey: "availability247",
                descKey: "availability247Desc",
                color: "purple",
              },
              {
                icon: <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
                titleKey: "communityDriven",
                descKey: "communityDrivenDesc",
                color: "orange",
              },
              {
                icon: <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />,
                titleKey: "securePayments",
                descKey: "securePaymentsDesc",
                color: "red",
              },
              {
                icon: <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
                titleKey: "smartMatching",
                descKey: "smartMatchingDesc",
                color: "yellow",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <Card
                  className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 rounded-xl group cursor-pointer"
                  style={{ boxShadow: GOOGLE_ELEVATION.level1 }}
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 bg-${benefit.color}-50 dark:bg-${benefit.color}-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                    >
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                      {t(benefit.titleKey as keyof typeof import("@/lib/i18n").translations.en)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      {t(benefit.descKey as keyof typeof import("@/lib/i18n").translations.en)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* For Hosts Section - Google style with image */}
      <section id="for-hosts" className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content - 7 columns */}
            <motion.div
              className="lg:col-span-7"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
                  <Home className="w-4 h-4 mr-2" />
                  For Hosts
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mb-4">
                {t("earnMoneyAs")} <span className="text-blue-600 dark:text-blue-400">{t("earnMoneyAsHighlight")}</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{t("hostsSubtitle")}</p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: <Home className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                    titleKey: "homeChargingSharing",
                    descKey: "homeChargingSharingDesc",
                  },
                  {
                    icon: <Wallet className="w-5 h-5 text-green-600 dark:text-green-400" />,
                    titleKey: "flexibleEarnings",
                    descKey: "flexibleEarningsDesc",
                  },
                  {
                    icon: <BarChart className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
                    titleKey: "usageAnalytics",
                    descKey: "usageAnalyticsDesc",
                  },
                  {
                    icon: <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />,
                    titleKey: "hostProtection",
                    descKey: "hostProtectionDesc",
                  },
                ].map((benefit, index) => (
                  <motion.div key={index} variants={itemFadeIn} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gray-50 dark:bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                        {t(benefit.titleKey as keyof typeof import("@/lib/i18n").translations.en)}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {t(benefit.descKey as keyof typeof import("@/lib/i18n").translations.en)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <Button
                onClick={() => (window.location.href = "https://app.powermaps.tech/")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-base font-medium transition-all duration-200 inline-flex items-center shadow-sm hover:shadow-md"
                style={{ boxShadow: GOOGLE_ELEVATION.level1 }}
              >
                {t("startHosting")} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Image - 5 columns */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1] }}
            >
              <div
                className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900"
                style={{ boxShadow: GOOGLE_ELEVATION.level2 }}
              >
                <Image
                  src="/Eco-friendly.jpeg"
                  alt="Become a charging host"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Drivers Section - Compact Google style */}
      <section id="for-drivers" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                <Battery className="w-4 h-4 mr-2" />
                For Drivers
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mb-4">
              {t("perfectFor")} <span className="text-blue-600 dark:text-blue-400">{t("perfectForHighlight")}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("driversSubtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
                titleKey: "nearbyCharging",
                descKey: "nearbyChargingDesc",
              },
              {
                icon: <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />,
                titleKey: "instantBooking",
                descKey: "instantBookingDesc",
              },
              {
                icon: <CreditCard className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
                titleKey: "easyPayments",
                descKey: "easyPaymentsDesc",
              },
              {
                icon: <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
                titleKey: "ratedHosts",
                descKey: "ratedHostsDesc",
              },
            ].map((advantage, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <Card
                  className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 rounded-xl p-6 text-center group"
                  style={{ boxShadow: GOOGLE_ELEVATION.level1 }}
                >
                  <div className="w-10 h-10 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    {advantage.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {t(advantage.titleKey as keyof typeof import("@/lib/i18n").translations.en)}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t(advantage.descKey as keyof typeof import("@/lib/i18n").translations.en)}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works - Google step-by-step style */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mb-4">
              {t("howP2PWorks")} <span className="text-blue-600 dark:text-blue-400">{t("howP2PWorksHighlight")}</span>{" "}
              {t("howP2PWorksEnd")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("howItWorksSubtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: "1",
                titleKey: "step1Title",
                descKey: "step1Desc",
                icon: <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
                color: "blue",
              },
              {
                step: "2",
                titleKey: "step2Title",
                descKey: "step2Desc",
                icon: <Battery className="w-6 h-6 text-green-600 dark:text-green-400" />,
                color: "green",
              },
              {
                step: "3",
                titleKey: "step3Title",
                descKey: "step3Desc",
                icon: <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
                color: "purple",
              },
            ].map((step, index) => (
              <motion.div key={index} variants={itemFadeIn} className="text-center">
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-${step.color}-600 dark:bg-${step.color}-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-medium shadow-lg`}
                  >
                    {step.step}
                  </div>
                  <div
                    className={`w-12 h-12 bg-${step.color}-50 dark:bg-${step.color}-900/30 rounded-full flex items-center justify-center mx-auto`}
                  >
                    {step.icon}
                  </div>

                  {/* Connection line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 transform translate-x-8" />
                  )}
                </div>

                <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">
                  {t(step.titleKey as keyof typeof import("@/lib/i18n").translations.en)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t(step.descKey as keyof typeof import("@/lib/i18n").translations.en)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* CTA Section - Google style */}
      <section className="py-16 md:py-24 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-6">
              {t("readyToJoin")} {t("readyToJoinHighlight")} {t("readyToJoinEnd")}
            </h2>
            <p className="text-lg text-blue-100 dark:text-white mb-8 max-w-2xl mx-auto leading-relaxed">
              {t("ctaSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => (window.location.href = "https://app.powermaps.tech/")}
                className="bg-white text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-100 px-8 py-3 rounded-lg text-base font-medium transition-all duration-200 inline-flex items-center justify-center shadow-sm hover:shadow-md"
              >
                {t("joinNetwork")} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-lg text-base font-medium transition-all duration-200"
              >
                {t("learnMore")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Google style */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/powermaps-logo.png" alt="PowerMaps" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-normal text-white">PowerMaps</span>
              </div>
              <p className="text-gray-400 dark:text-gray-300 text-sm mb-6 leading-relaxed max-w-xs">
                {t("footerTagline")}
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61578405974572" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/108263961/" },
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 dark:text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800 transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* P2P Charging */}
            <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h4 className="font-medium mb-4 text-white">{t("p2pChargingFooter")}</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { key: "howItWorks", href: "#how-it-works" },
                  { key: "forHosts", href: "#for-hosts" },
                  { key: "forDrivers", href: "#for-drivers" },
                  { key: "contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {t(item.key as keyof typeof import("@/lib/i18n").translations.en)}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Get Started */}
            <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h4 className="font-medium mb-4 text-white">{t("getStarted")}</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { key: "iosApp", icon: Smartphone },
                  { key: "androidApp", icon: Play },
                  { key: "webPlatform", icon: Globe },
                ].map(({ key, icon: Icon }) => (
                  <li key={key}>
                    <a
                      href="https://app.powermaps.tech/"
                      className="flex items-center space-x-2 text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{t(key as keyof typeof import("@/lib/i18n").translations.en)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h4 className="font-medium mb-4 text-white">{t("contact")}</h4>
              <div className="space-y-3 text-sm text-gray-400 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@powermaps.tech</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+216 53 376 935</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{t("locationText")}</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="text-gray-400 dark:text-gray-300 text-sm">{t("footerCopyright")}</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
