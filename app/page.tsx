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
  Play,
  CheckCircle,
  Globe,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"

export default function ChargeTNLanding() {
  const [activeStep, setActiveStep] = useState(0)
  const [userCount, setUserCount] = useState(0)
  const [stationCount, setStationCount] = useState(0)
  const [energySaved, setEnergySaved] = useState(0)

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  // Animated counters
  useEffect(() => {
    const userTimer = setInterval(() => {
      setUserCount((prev) => (prev < 12500 ? prev + 50 : 12500))
    }, 50)

    const stationTimer = setInterval(() => {
      setStationCount((prev) => (prev < 850 ? prev + 5 : 850))
    }, 60)

    const energyTimer = setInterval(() => {
      setEnergySaved((prev) => (prev < 2400 ? prev + 25 : 2400))
    }, 40)

    return () => {
      clearInterval(userTimer)
      clearInterval(stationTimer)
      clearInterval(energyTimer)
    }
  }, [])

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Route Planning",
      description: "Navigate Tunisia's EV network effortlessly with real-time optimization",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-time Availability",
      description: "Never arrive at a busy station again with live status updates",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Universal Access",
      description: "One platform connecting all charging solutions across Tunisia",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Smart Reservations",
      description: "Book your charging slot in advance and guarantee availability",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Dynamic Pricing",
      description: "Fair, transparent pricing that benefits everyone in the network",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Universal Compatibility",
      description: "Works with all station types and charging standards",
    },
  ]

  const steps = [
    {
      title: "Discover",
      description: "Find charging options on your route",
      icon: <MapPin className="w-8 h-8" />,
    },
    {
      title: "Connect",
      description: "Book with any provider type",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Charge",
      description: "Pay and track your session",
      icon: <Zap className="w-8 h-8" />,
    },
  ]

  const providerTypes = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Gas Stations",
      description: "Attract EV customers and diversify revenue streams",
      benefit: "Up to 40% revenue increase",
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Businesses",
      description: "Monetize parking spaces and attract eco-conscious customers",
      benefit: "€500-2000/month potential",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Individuals",
      description: "Share home charging and earn passive income",
      benefit: "€200-800/month extra",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Charging Networks",
      description: "Expand reach and optimize utilization rates",
      benefit: "25% efficiency boost",
    },
  ]

  const testimonials = [
    {
      name: "Ahmed Ben Salem",
      role: "Tesla Owner, Tunis",
      content: "ChargeTN transformed my daily commute. I never worry about finding charging stations anymore.",
      rating: 5,
    },
    {
      name: "Fatima Khelifi",
      role: "Business Owner, Sfax",
      content: "Installing charging points through ChargeTN brought new customers and additional revenue to my café.",
      rating: 5,
    },
    {
      name: "Mohamed Trabelsi",
      role: "Fleet Manager, Sousse",
      content: "Managing our electric delivery fleet became effortless with ChargeTN's business solutions.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      {/* Animated Background */}
      <motion.div className="fixed inset-0 opacity-30" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d2e] via-[#0f0f0f] to-[#1a0d2e]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f5d4] rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#fee715] rounded-full blur-3xl opacity-10 animate-pulse delay-1000" />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image src="/chargetn-logo.png" alt="ChargeTN Logo" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#00f5d4] to-[#fee715] bg-clip-text text-transparent">
                ChargeTN
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-[#00f5d4] transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="hover:text-[#00f5d4] transition-colors">
                How It Works
              </a>
              <a href="#providers" className="hover:text-[#00f5d4] transition-colors">
                Providers
              </a>
              <a href="#about" className="hover:text-[#00f5d4] transition-colors">
                About
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-[#00f5d4] to-[#fee715] text-black hover:opacity-90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ y: heroY }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00f5d4] via-[#fee715] to-[#00f5d4] bg-clip-text text-transparent">
                Power Tunisia's
              </span>
              <br />
              <span className="text-white">Electric Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              The all-to-all EV charging platform where everyone can provide and access charging solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00f5d4] to-[#fee715] text-black hover:opacity-90 px-8 py-4 text-lg"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#00f5d4] text-[#00f5d4] hover:bg-[#00f5d4]/10 px-8 py-4 text-lg bg-transparent"
            >
              Become a Provider
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-[#00f5d4] mb-2">{userCount.toLocaleString()}+</div>
                <div className="text-gray-300">Active Users</div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-[#fee715] mb-2">{stationCount}+</div>
                <div className="text-gray-300">Charging Stations</div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-[#00f5d4] mb-2">{energySaved.toLocaleString()} kWh</div>
                <div className="text-gray-300">Energy Delivered</div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Tunisia Map Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 border-2 border-[#00f5d4]/30 rounded-lg relative">
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-[#fee715] rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#00f5d4] rounded-full animate-pulse delay-500" />
              <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#fee715] rounded-full animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#00f5d4] to-[#fee715] bg-clip-text text-transparent">
                Everyone is Connected
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The first all-to-all platform in MENA region connecting every participant in the EV ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {providerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 h-full group">
                  <CardContent className="p-6">
                    <div className="text-[#00f5d4] mb-4 group-hover:text-[#fee715] transition-colors">{type.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="text-[#fee715] font-semibold">{type.benefit}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionary{" "}
              <span className="bg-gradient-to-r from-[#00f5d4] to-[#fee715] bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced technology meets user-friendly design for the ultimate EV charging experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 h-full group">
                  <CardContent className="p-6">
                    <div className="text-[#00f5d4] mb-4 group-hover:text-[#fee715] transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How{" "}
              <span className="bg-gradient-to-r from-[#00f5d4] to-[#fee715] bg-clip-text text-transparent">
                It Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three simple steps to revolutionize your EV charging experience
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  viewport={{ once: true }}
                  className="flex-1"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <Card
                    className={`bg-white/5 backdrop-blur-md border-white/10 transition-all duration-300 ${
                      activeStep === index ? "bg-white/15 border-[#00f5d4]/50" : "hover:bg-white/10"
                    }`}
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-colors ${
                          activeStep === index ? "bg-[#00f5d4] text-black" : "bg-white/10 text-[#00f5d4]"
                        }`}
                      >
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00f5d4] to-[#fee715] opacity-30 -z-10" />
          </div>
        </div>
      </section>

      {/* Provider Benefits */}
      <section id="providers" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Turn Your Space into{" "}
              <span className="bg-gradient-to-r from-[#00f5d4] to-[#fee715] bg-clip-text text-transparent">Income</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of providers earning passive income while supporting Tunisia's electric future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10 p-8">
                <h3 className="text-2xl font-semibold mb-6 text-[#00f5d4]">Earnings Calculator</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Average daily sessions:</span>
                    <span className="text-[#fee715] font-semibold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average session value:</span>
                    <span className="text-[#fee715] font-semibold">€8.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Your commission (15%):</span>
                    <span className="text-[#fee715] font-semibold">€1.28</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Monthly potential:</span>
                      <span className="text-[#00f5d4]">€461</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#00f5d4] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Zero upfront costs</h4>
                  <p className="text-gray-300">We handle installation and maintenance</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#00f5d4] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">24/7 support</h4>
                  <p className="text-gray-300">Technical support and customer service</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#00f5d4] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Smart analytics</h4>
                  <p className="text-gray-300">Real-time insights and optimization</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#00f5d4] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Flexible terms</h4>
                  <p className="text-gray-300">No long-term contracts required</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-[#00f5d4] to-[#fee715] bg-clip-text text-transparent">
                Thousands
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the growing community of satisfied users and providers across Tunisia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#fee715] fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20">
              <CardContent className="p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to{" "}
                  <span className="bg-gradient-to-r from-[#00f5d4] to-[#fee715] bg-clip-text text-transparent">
                    Electrify
                  </span>{" "}
                  Tunisia?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join ChargeTN today and be part of the sustainable transportation revolution
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#00f5d4] to-[#fee715] text-black hover:opacity-90 px-8 py-4 text-lg"
                  >
                    Join ChargeTN Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#00f5d4] text-[#00f5d4] hover:bg-[#00f5d4]/10 px-8 py-4 text-lg bg-transparent"
                  >
                    Become a Provider
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Input
                      placeholder="Enter your email for updates"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 w-64"
                    />
                    <Button className="bg-[#00f5d4] text-black hover:bg-[#00f5d4]/90">Subscribe</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/chargetn-logo.png" alt="ChargeTN Logo" width={32} height={32} className="rounded" />
                <span className="text-xl font-bold bg-gradient-to-r from-[#00f5d4] to-[#fee715] bg-clip-text text-transparent">
                  ChargeTN
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Powering Tunisia's electric future through innovative charging solutions.
              </p>
              <div className="flex space-x-4">
                <Globe className="w-5 h-5 text-[#00f5d4]" />
                <TrendingUp className="w-5 h-5 text-[#fee715]" />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#00f5d4] transition-colors">
                    For Users
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00f5d4] transition-colors">
                    For Providers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00f5d4] transition-colors">
                    Route Planner
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00f5d4] transition-colors">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#00f5d4] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00f5d4] transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00f5d4] transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00f5d4] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#00f5d4] transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00f5d4] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00f5d4] transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#00f5d4] transition-colors">
                    API Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ChargeTN. All rights reserved. Made with ⚡ in Tunisia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
