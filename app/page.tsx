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
                { key: "p2p-charging", href: "#p2p-charging", label: "P2P Charging Solution" },
                { key: "for-hosts", href: "#for-hosts", label: "For Charging Hosts" },
                { key: "for-drivers", href: "#for-drivers", label: "For EV Drivers" },
                { key: "how-it-works", href: "#how-it-works", label: "How P2P Charging Works" },
                { key: "contact", href: "#contact", label: "Contact PowerMaps" },
              ].map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 font-medium relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  aria-label={item.label}
                >
                  {item.key === "p2p-charging"
                    ? "P2P Charging"
                    : item.key === "for-hosts"
                      ? "For Hosts"
                      : item.key === "for-drivers"
                        ? "For Drivers"
                        : item.key === "how-it-works"
                          ? "How It Works"
                          : "Contact"}
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
                onClick={() => (window.location.href = "https://app.powermaps.tech/")}
                className={PRIMARY_BUTTON_CLASS}
                aria-label="Join PowerMaps P2P Charging Network"
              >
                Join Network
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
              The Future of <span className={GRADIENT_TEXT}>P2P EV Charging</span>
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Connect EV drivers with private charging stations. Earn money by sharing your charger or find convenient,
              affordable charging anywhere.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                onClick={() => (window.location.href = "https://app.powermaps.tech/")}
                className={PRIMARY_BUTTON_CLASS}
                aria-label="Start P2P charging with PowerMaps"
              >
                Start Charging <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>

              <Button
                onClick={() => document.getElementById("for-hosts")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className={SECONDARY_BUTTON_CLASS}
                aria-label="Become a charging host"
              >
                Become a Host
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
              Why Choose <span className={GRADIENT_TEXT}>P2P Charging?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Peer-to-peer charging revolutionizes how we power electric vehicles, creating a decentralized network that
              benefits everyone.
            </p>
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
                title: "Lower Costs",
                description: "Save up to 40% compared to public charging stations with competitive P2P rates.",
              },
              {
                icon: <MapPin className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                title: "More Locations",
                description: "Access thousands of private charging points in residential areas and workplaces.",
              },
              {
                icon: <Clock className="w-8 h-8 text-electric-blue" aria-hidden="true" />,
                title: "24/7 Availability",
                description: "Find charging options anytime, anywhere with our extensive host network.",
              },
              {
                icon: <Users className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                title: "Community Driven",
                description: "Join a growing community of EV enthusiasts supporting sustainable transport.",
              },
              {
                icon: <Shield className="w-8 h-8 text-electric-blue" aria-hidden="true" />,
                title: "Secure Payments",
                description: "Safe, automated transactions with built-in insurance and dispute resolution.",
              },
              {
                icon: <Zap className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                title: "Smart Matching",
                description: "AI-powered system matches you with the perfect charging solution nearby.",
              },
            ].map((benefit, index) => (
              <motion.article key={index} variants={itemFadeIn}>
                <Card className={CARD_CLASS}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
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
              Earn Money as a <span className={GRADIENT_TEXT}>Charging Host</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Turn your private charging station into a revenue stream. Share your charger when you're not using it.
            </p>
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
                title: "Home Charging Sharing",
                description: "List your home charger and earn passive income while you sleep or work.",
              },
              {
                icon: <Wallet className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                title: "Flexible Earnings",
                description: "Set your own rates and availability. Earn $200-800+ monthly on average.",
              },
              {
                icon: <BarChart className="w-8 h-8 text-electric-blue" aria-hidden="true" />,
                title: "Usage Analytics",
                description: "Track your earnings, usage patterns, and optimize your charging schedule.",
              },
              {
                icon: <Shield className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                title: "Host Protection",
                description: "Comprehensive insurance coverage and 24/7 support for all host activities.",
              },
            ].map((benefit, index) => (
              <motion.article key={index} variants={itemFadeIn}>
                <Card className={CARD_CLASS}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
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
              Start Hosting <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
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
              Perfect for <span className={GRADIENT_TEXT}>EV Drivers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find convenient, affordable charging options in your neighborhood and beyond.
            </p>
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
                title: "Nearby Charging",
                description: "Find available chargers within walking distance of your location.",
              },
              {
                icon: <Clock className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                title: "Instant Booking",
                description: "Reserve charging slots in advance or find immediate availability.",
              },
              {
                icon: <CreditCard className="w-8 h-8 text-electric-blue" aria-hidden="true" />,
                title: "Easy Payments",
                description: "Seamless in-app payments with transparent pricing and receipts.",
              },
              {
                icon: <Star className="w-8 h-8 text-vivid-orange" aria-hidden="true" />,
                title: "Rated Hosts",
                description: "Choose from verified hosts with community ratings and reviews.",
              },
            ].map((advantage, index) => (
              <motion.article key={index} variants={itemFadeIn} className="h-full">
                <Card className={`${CARD_CLASS} h-full`}>
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="mb-4">{advantage.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{advantage.title}</h3>
                    <p className="text-muted-foreground flex-grow">{advantage.description}</p>
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
              How <span className={GRADIENT_TEXT}>P2P Charging</span> Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and sustainable charging in three easy steps.
            </p>
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
                title: "Find & Book",
                description: "Browse nearby charging stations, check availability, and book your slot instantly.",
                icon: <MapPin className="w-8 h-8 text-electric-blue" />,
              },
              {
                step: "02",
                title: "Charge & Pay",
                description: "Arrive at the location, plug in your EV, and let our app handle the secure payment.",
                icon: <Battery className="w-8 h-8 text-vivid-orange" />,
              },
              {
                step: "03",
                title: "Rate & Go",
                description: "Rate your experience and help build our trusted community of EV enthusiasts.",
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
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
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
                Join the <span className="text-electric-blue">P2P Revolution</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                PowerMaps is building the world's largest peer-to-peer EV charging network. By connecting private
                charger owners with EV drivers, we're making electric vehicle adoption easier and more affordable for
                everyone.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  Verified hosts and secure transactions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  24/7 customer support and assistance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  Growing network across North Africa
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
              Ready to Join the <span className={GRADIENT_TEXT}>P2P Charging</span> Network?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Whether you want to earn money hosting or save money charging, PowerMaps connects you to the future of EV
              infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => (window.location.href = "https://app.powermaps.tech/")}
                className={PRIMARY_BUTTON_CLASS}
                aria-label="Join PowerMaps P2P charging network"
              >
                Join Network <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className={SECONDARY_BUTTON_CLASS}
                aria-label="Learn more about P2P charging"
              >
                Learn More
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
              <p className="text-muted-foreground text-sm">
                The leading P2P EV charging platform connecting drivers with private charging stations.
              </p>
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
              <h4 className="font-semibold text-foreground mb-4">P2P Charging</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#p2p-charging" className="hover:text-electric-blue transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#for-hosts" className="hover:text-electric-blue transition-colors">
                    Become a Host
                  </a>
                </li>
                <li>
                  <a href="#for-drivers" className="hover:text-electric-blue transition-colors">
                    For Drivers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-electric-blue transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h4 className="font-semibold text-foreground mb-4">Get Started</h4>
              <div className="space-y-3">
                <a
                  href="https://app.powermaps.tech/"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-electric-blue transition-colors"
                  aria-label="Download PowerMaps from App Store"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>iOS App</span>
                </a>
                <a
                  href="https://app.powermaps.tech/"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-electric-blue transition-colors"
                  aria-label="Download PowerMaps from Google Play"
                >
                  <Play className="w-5 h-5" />
                  <span>Android App</span>
                </a>
                <a
                  href="https://app.powermaps.tech/"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-electric-blue transition-colors"
                  aria-label="Access PowerMaps web platform"
                >
                  <Globe className="w-5 h-5" />
                  <span>Web Platform</span>
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
            <p>&copy; 2024 PowerMaps. All rights reserved. Powering the P2P EV charging revolution.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
