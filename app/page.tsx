"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Clock,
  CreditCard,
  Route,
  Languages,
  BarChart,
  DollarSign,
  Bell,
  MessageSquare,
  ArrowRight,
  Smartphone,
  Play,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  Zap,
  Leaf,
  CheckCircle,
  Users,
  TrendingUp,
} from "lucide-react"

// Re-defining design tokens based on the original palette and style
const SECTION_PADDING = "py-20 md:py-28"
const CONTAINER_CLASS = "max-w-7xl mx-auto px-6 lg:px-8"
const GRADIENT_TEXT =
  "bg-gradient-to-r from-electricc-blue to-vivid-orangee bg-clip-text text-transparent animate-gradient-x"
const PRIMARY_BUTTON_CLASS =
  "bg-transparent text-black font-semibold hover:bg-electric-blue/90 transition-colors duration-300 rounded-full px-8 py-3 text-lg shadow-lg hover:shadow-xl hover:shadow-electric-blue/25"
const SECONDARY_BUTTON_CLASS =
  "border  font-semibold hover:bg-electric-blue/10 transition-colors duration-300 rounded-full px-8 py-3 text-lg"
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
  return (
    <div className="min-h-screen bg-oxford-blue text-platinum overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-oxford-blue/80 backdrop-blur-md border-b border-platinum/10"
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
              {/* <span className="text-2xl font-bold text-platinum">PowerMaps</span> */}
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {["Features", "Operators", "Why PowerMaps", "Sustainability"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-platinum/70 hover:text-electric-blue transition-colors duration-300 font-medium relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {item}
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
              <Button className={PRIMARY_BUTTON_CLASS}>Download App</Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center pt-20 bg-gradient-to-br from-oxford-blue to-gray-900">
        <div className={CONTAINER_CLASS}>
          <motion.div className="max-w-4xl mx-auto" variants={fadeIn} initial="initial" animate="animate">
            <motion.h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Find. Reserve. Charge. <span className={GRADIENT_TEXT}>Globally.</span>
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-platinum/80 mb-10 max-w-3xl mx-auto">
              PowerMaps connects EV drivers worldwide to charging stations with real-time availability, smart reservations, and seamless payments.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button className={PRIMARY_BUTTON_CLASS}>
                Download the App <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className={SECONDARY_BUTTON_CLASS}>
                Find a Station
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
              className="w-full h-auto rounded-xl shadow-2xl border border-platinum/20"
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
              Features for <span className={GRADIENT_TEXT}>EV Users</span>
            </h2>
            <p className="text-lg text-platinum/80 max-w-2xl mx-auto">
              Everything you need for a seamless charging experience, anywhere in the world.
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
                icon: <MapPin className="w-8 h-8 text-electric-blue" />,
                title: "Global Station Network",
                description: "Access charging stations worldwide with real-time availability updates.",
              },
              {
                icon: <Clock className="w-8 h-8 text-vivid-orange" />,
                title: "Smart Reservations",
                description: "Book your charging slot in advance for guaranteed access anywhere.",
              },
              {
                icon: <Zap className="w-8 h-8 text-electric-blue" />,
                title: "Cross-Border Compatibility",
                description: "Seamlessly charge across different networks and countries.",
              },
              {
                icon: <CreditCard className="w-8 h-8 text-vivid-orange" />,
                title: "Universal Payments",
                description: "One app, multiple payment methods, works in any supported region.",
              },
              {
                icon: <Route className="w-8 h-8 text-electric-blue" />,
                title: "International Route Planning",
                description: "Plan long journeys across borders with integrated charging stops.",
              },
              {
                icon: <Languages className="w-8 h-8 text-vivid-orange" />,
                title: "Multi-language Support",
                description: "Available in local languages for seamless global experience.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <Card className={CARD_CLASS}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-platinum">{feature.title}</h3>
                    <p className="text-platinum/70">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits for Operators */}
      <section id="operators" className={`${SECTION_PADDING} bg-gray-900`}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-balck md:text-5xl font-bold mb-4">
              Benefits for <span className={GRADIENT_TEXT}>Operators</span>
            </h2>
            <p className="text-lg text-platinum/80 max-w-2xl mx-auto">
              Scale your charging business globally with PowerMaps' comprehensive platform.
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
                icon: <BarChart className="w-8 h-8 text-electric-blue" />,
                title: "Global Analytics & Revenue Tracking",
                description: "Comprehensive insights across all markets with real-time revenue tracking.",
              },
              {
                icon: <DollarSign className="w-8 h-8 text-vivid-orange" />,
                title: "Multi-Currency Support",
                description: "Flexible pricing in local currencies with automatic conversion and reporting.",
              },
              {
                icon: <Users className="w-8 h-8 text-electric-blue" />,
                title: "International Customer Base",
                description: "Reach EV drivers from around the world traveling through your region.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-vivid-orange" />,
                title: "Market Expansion Tools",
                description: "Scale your operations to new markets with localized support and insights.",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <Card className={CARD_CLASS}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-platinum">{benefit.title}</h3>
                    <p className="text-platinum/70">{benefit.description}</p>
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
              Become a Global Partner <ArrowRight className="ml-2 w-5 h-5" />
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
              Our <span className={GRADIENT_TEXT}>Global Reach</span>
            </h2>
            <p className="text-lg text-platinum/80 max-w-2xl mx-auto">
              Expanding rapidly across regions to create the world's most comprehensive EV charging network.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Globe className="w-8 h-8 text-electric-blue" />,
                title: "North Africa Pioneer",
                description: "Leading EV charging solutions across Tunisia, Morocco, and Algeria.",
              },
              {
                icon: <Zap className="w-8 h-8 text-vivid-orange" />,
                title: "Cross-Border Network",
                description: "Seamless charging experience across multiple countries and regions.",
              },
              {
                icon: <Users className="w-8 h-8 text-electric-blue" />,
                title: "Growing Community",
                description: "Thousands of EV drivers and operators across expanding markets.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-vivid-orange" />,
                title: "Rapid Expansion",
                description: "Continuously adding new markets and partnerships worldwide.",
              },
            ].map((advantage, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <Card className={CARD_CLASS}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-4">{advantage.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-platinum">{advantage.title}</h3>
                    <p className="text-platinum/70">{advantage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section id="sustainability" className={`${SECTION_PADDING} bg-gray-900`}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className={GRADIENT_TEXT}>Sustainability</span> Mission
            </h2>
            <p className="text-lg text-platinum/80 max-w-2xl mx-auto">
              Driving a greener future globally, one charge at a time.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-12"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-platinum">
                Supporting global carbon reduction goals through <span className="text-electric-blue">accessible EV infrastructure</span>
              </h3>
              <p className="text-lg text-platinum/80">
                PowerMaps is committed to accelerating the global transition to electric vehicles by making charging infrastructure more accessible, efficient, and user-friendly. We work with governments, businesses, and communities worldwide to build a sustainable transportation future.
              </p>
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
      <section className={SECTION_PADDING}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className={GRADIENT_TEXT}>Global Users</span> Say
            </h2>
            <p className="text-lg text-platinum/80 max-w-2xl mx-auto">
              Hear from satisfied EV users and station operators around the world.
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
                quote: "PowerMaps made my international EV road trip seamless. Finding chargers across borders has never been easier!",
                name: "Sarah M.",
                role: "EV Enthusiast, Europe",
              },
              {
                quote: "As a multi-location operator, PowerMaps helps me manage my charging network across different countries efficiently.",
                name: "Ahmed K.",
                role: "Charging Network Operator, MENA",
              },
              {
                quote: "The global payment system is a game-changer. One app for all my charging needs worldwide.",
                name: "Maria L.",
                role: "Business Traveler, Americas",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <Card className={CARD_CLASS}>
                  <CardContent className="p-6">
                    <p className="text-platinum/70 italic mb-4">"{testimonial.quote}"</p>
                    <div className="font-semibold text-platinum">{testimonial.name}</div>
                    <div className="text-platinum/50 text-sm">{testimonial.role}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`${SECTION_PADDING} bg-electric-blue/10`}>
        <div className={CONTAINER_CLASS}>
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-platinum">
              Join the <span className={GRADIENT_TEXT}>Global EV Revolution</span>
            </h2>
            <p className="text-lg text-platinum/80 mb-10">
              Whether you're an EV driver or a charging station operator, PowerMaps is your partner for sustainable mobility worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className={PRIMARY_BUTTON_CLASS}>
                Download App <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className={SECONDARY_BUTTON_CLASS}>
                Partner with Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-oxford-blue border-t border-platinum/10 py-12">
        <div className={CONTAINER_CLASS}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/powermaps-logo.png" alt="PowerMaps Logo" width={32} height={32} className="rounded-md" />
                <span className="text-xl font-bold text-platinum">PowerMaps</span>
              </div>
              <p className="text-platinum/70 text-sm">The Global EV Charging Platform.</p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61578405974572"
                  aria-label="Facebook"
                  className="text-platinum/70 hover:text-electric-blue transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-platinum/70 hover:text-electric-blue transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-platinum/70 hover:text-electric-blue transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/108263961/"
                  aria-label="LinkedIn"
                  className="text-platinum/70 hover:text-electric-blue transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h4 className="font-semibold text-platinum mb-4">Quick Links</h4>
              <ul className="space-y-2 text-platinum/70">
                <li>
                  <a href="#features" className="hover:text-electric-blue transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#operators" className="hover:text-electric-blue transition-colors">
                    For Operators
                  </a>
                </li>
                <li>
                  <a href="#global-reach" className="hover:text-electric-blue transition-colors">
                    Global Reach
                  </a>
                </li>
                <li>
                  <a href="#sustainability" className="hover:text-electric-blue transition-colors">
                    Sustainability
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h4 className="font-semibold text-platinum mb-4">Download App</h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center space-x-2 text-platinum/70 hover:text-electric-blue transition-colors"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>App Store</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-platinum/70 hover:text-electric-blue transition-colors"
                >
                  <Play className="w-5 h-5" />
                  <span>Google Play</span>
                </a>
              </div>
            </motion.div>

            {/* <motion.div variants={itemFadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <h4 className="font-semibold text-platinum mb-4">Contact Us</h4>
              <p className="text-platinum/70 mb-2">Email: info@powermaps.com</p>
              <p className="text-platinum/70 mb-4">Phone: +1 (555) 123-4567</p>
              <h4 className="font-semibold text-platinum mb-4">Language</h4>
              <select className="bg-card border border-platinum/20 rounded-md px-3 py-2 text-platinum/70 focus:ring-electric-blue focus:border-electric-blue">
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
              </select>
            </motion.div> */}
          </div>

          <motion.div
            className="text-center text-platinum/50 text-sm mt-12 pt-8 border-t border-platinum/10"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p>&copy; 2024 PowerMaps. All rights reserved. Connecting the world through sustainable mobility.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}