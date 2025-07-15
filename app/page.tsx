
"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Zap,
  MapPin,
  Users,
  Clock,
  DollarSign,
  Shield,
  Smartphone,
  Car,
  Building,
  Home,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  TrendingUp,
  Search,
  Link,
  BatteryCharging,
} from "lucide-react"
import Image from "next/image"

// A custom hook for a subtle shimmering text effect
const useShimmer = () => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    const shimmerInterval = setInterval(() => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      setStyle({
        background: `radial-gradient(circle at ${x}% ${y}%, hsla(0, 0%, 100%, 0.4), transparent 20%)`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        transition: 'background 2s ease',
      });
    }, 2000);
    return () => clearInterval(shimmerInterval);
  }, []);
  return style;
};

// 1. Add utility for glassmorphism and gradients
const glassClass = "backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl";
const gradientBtn =
  "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:from-pink-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-pink-400 focus:outline-none";
const glowAnim = {
  boxShadow: [
    "0 0 0px #fff, 0 0 0px #a78bfa",
    "0 0 16px #fff, 0 0 32px #a78bfa",
    "0 0 0px #fff, 0 0 0px #a78bfa",
  ],
  transition: { duration: 2, repeat: Infinity, repeatType: 'loop' as const },
};


export default function ChargeTNLandingV2() {
  const [userCount, setUserCount] = useState(0)
  const [stationCount, setStationCount] = useState(0)
  const [energyDelivered, setEnergyDelivered] = useState(0)

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const shimmerStyle = useShimmer();


  // Animated counters for a more subtle feel
  useEffect(() => {
    const animateValue = (setter: any, endValue: any, duration: any) => {
      let start = 0
      const increment = endValue / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= endValue) {
          start = endValue
          clearInterval(timer)
        }
        setter(Math.floor(start))
      }, 16)
      return timer
    }

    const userTimer = animateValue(setUserCount, 12500, 2500)
    const stationTimer = animateValue(setStationCount, 850, 2800)
    const energyTimer = animateValue(setEnergyDelivered, 2400, 2000)

    return () => {
      clearInterval(userTimer)
      clearInterval(stationTimer)
      clearInterval(energyTimer)
    }
  }, [])

  const features = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: " Predictive Route Planning",
      description: "Our intelligent routing anticipates your needs, ensuring a seamless journey across Tunisia's network.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Live Network Status",
      description: "Access real-time data on station availability, preventing unnecessary stops and delays.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Unified Access Protocol",
      description: "A single, secure platform that integrates all charging providers into one cohesive ecosystem.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Guaranteed Reservations",
      description: "Secure your charging slot in advance, guaranteeing power is available the moment you arrive.",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Transparent Pricing",
      description: "A clear and dynamic pricing model ensures fairness for both drivers and providers.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Universal Compatibility",
      description: "Our system is engineered to work flawlessly with every type of EV and charging standard.",
    },
  ]

  const steps = [
    { title: "Discover", description: "Find optimal charging points", icon: <Search /> },
    { title: "Connect", description: "Interface with any provider", icon: <Link /> },
    { title: "Charge", description: "Monitor and manage your session", icon: <BatteryCharging /> },
  ]

  const testimonials = [
    {
      name: "Karim L.",
      role: "EV Enthusiast, Tunis",
      content: "ChargeTN isn't just an app; it's the nervous system for the country's EV grid. Truly revolutionary.",
    },
    {
      name: "Amina K.",
      role: "Boutique Hotel Owner, Sousse",
      content: "Integrating into the ChargeTN network was seamless. It has attracted a new, premium clientele to my business.",
    },
    {
      name: "Youssef B.",
      role: "Logistics Manager, Sfax",
      content: "The platform's efficiency in managing our electric fleet is unparalleled. It's a critical component of our operations.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans overflow-x-hidden">
      {/* Mysterious Animated Background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#020024] via-[#090979] to-[#000000]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/noise.png)' }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </motion.div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-gray-800/50 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <Image src="/chargetn-logo.png" alt="ChargeTN Logo" width={54} height={54} />
                <span className="text-xl font-semibold text-gray-200" style={shimmerStyle}>
                  ChargeTN
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-8 text-sm">
                {["Features", "Process", "Providers"].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-white transition-colors relative px-2"
                    whileHover={{ scale: 1.08 }}
                  >
                    <span>{item}</span>
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800/50">
                    Sign In
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
                  <Button className={gradientBtn}>
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-16 px-4">
          <motion.div className="text-center" style={{ y: heroY }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter drop-shadow-[0_2px_24px_rgba(99,102,241,0.25)]"
            >
              <span className="text-gray-400">The Network That Powers </span>
              <br />
              <span className="text-white bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">Tunisia's Ascent</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10"
            >
              An interconnected, all-to-all EV charging ecosystem. A new infrastructure for a new era.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
              className="flex gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" className={gradientBtn + " px-6"}>
                  Join The Network
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" variant="outline" className="border-gray-700 text-gray-400 hover:text-white hover:border-white hover:bg-white/10 px-6">
                  Become a Provider <ArrowRight className="ml-2 w-4 h-4 animate-bounce inline-block" />
                </Button>
              </motion.div>
            </motion.div>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex justify-center gap-8 md:gap-16 mt-20 text-center"
            >
              <motion.div animate={glowAnim}>
                <p className="text-3xl md:text-4xl font-semibold text-white">{userCount.toLocaleString()}+</p>
                <p className="text-sm text-gray-500">Active Users</p>
              </motion.div>
              <motion.div animate={glowAnim} transition={{ delay: 0.2 }}>
                <p className="text-3xl md:text-4xl font-semibold text-white">{stationCount}+</p>
                <p className="text-sm text-gray-500">Connected Stations</p>
              </motion.div>
              <motion.div animate={glowAnim} transition={{ delay: 0.4 }}>
                <p className="text-3xl md:text-4xl font-semibold text-white">{energyDelivered.toLocaleString()} MWh</p>
                <p className="text-sm text-gray-500">Energy Delivered</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                A More Intelligent Grid
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                Our platform is built on a foundation of cutting-edge technology designed for reliability and seamless integration.
              </p>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={glassClass + " p-6 rounded-lg border border-gray-800/80 hover:scale-105 hover:shadow-2xl transition-transform duration-300"}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div whileHover={{ rotate: 12, scale: 1.2 }} className="text-gray-400 inline-block">
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mt-2">{feature.title}</h3>
                  <p className="mt-3 text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                A Seamless Protocol
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                From discovery to payment, our process is optimized for simplicity and efficiency.
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent -translate-y-1/2 animate-pulse" />
              <motion.div
                className="grid md:grid-cols-3 gap-8 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } },
                }}
              >
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={glassClass + " hover:scale-105 transition-transform duration-300"}
                  >
                    <motion.div whileHover={{ rotate: 8, scale: 1.15 }} className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 border border-gray-700 rounded-full mb-4 text-white shadow-lg">
                      {step.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-gray-500">{step.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Providers Section */}
        <section id="providers" className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                Transform Your Assets into Revenue
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                Join the network as a provider and unlock new income streams by supplying power to the grid.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-start space-x-4">
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="inline-block">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Effortless Monetization</h4>
                    <p className="text-gray-500">Convert parking spaces or home chargers into consistent, passive revenue generators.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="inline-block">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Zero Upfront Investment</h4>
                    <p className="text-gray-500">We provide the hardware, installation, and maintenance at no cost to you.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="inline-block">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Powerful Analytics</h4>
                    <p className="text-gray-500">Gain real-time insights into usage patterns and earnings through our provider dashboard.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className={glassClass + " p-8 shadow-2xl"}>
                  <h3 className="text-xl font-semibold mb-6 text-white">Potential Earnings Calculator</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-gray-400">
                      <span>Average Daily Sessions:</span>
                      <span className="text-white font-semibold">12</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-400">
                      <span>Average Session Revenue:</span>
                      <span className="text-white font-semibold">€8.50</span>
                    </div>
                    <div className="border-t border-gray-700 pt-4 mt-4">
                      <div className="flex justify-between items-center text-xl font-bold">
                        <span className="text-gray-300">Potential Monthly Earnings:</span>
                        <span className="text-blue-400">~€3,060</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Social Proof */}
        <section className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                Validated by the Vanguard
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                Hear from the pioneers, innovators, and business leaders who are building the future with ChargeTN.
              </p>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={glassClass + " p-6 rounded-lg border border-gray-800/80 flex flex-col hover:scale-105 hover:shadow-2xl transition-transform duration-300"}
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-400 mb-6 flex-grow">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={glassClass + " py-12"}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                Initiate Your Connection
              </h2>
              <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                The future of mobility in Tunisia is being built today. Join us at the forefront of the revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" className={gradientBtn + " px-8 py-3 text-base"}>
                    Access the Network
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
                  <Button size="lg" variant="outline" className="border-gray-700 text-gray-400 hover:text-white hover:border-white hover:bg-white/10 px-8 py-3 text-base">
                    Provide Power
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <Image src="/chargetn-logo.png" alt="ChargeTN Logo" width={54} height={54} />
                  <span className="font-semibold text-gray-300">ChargeTN</span>
                </div>
                <p className="text-gray-500">Engineering the future of energy mobility.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-400 mb-4">Platform</h4>
                <ul className="space-y-3 text-gray-500">
                  <li><a href="#" className="hover:text-white transition-colors">For Users</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">For Providers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-400 mb-4">Company</h4>
                <ul className="space-y-3 text-gray-500">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-400 mb-4">Legal</h4>
                <ul className="space-y-3 text-gray-500">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800/50 text-center text-xs text-gray-600">
              <p>&copy; {new Date().getFullYear()} ChargeTN. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
