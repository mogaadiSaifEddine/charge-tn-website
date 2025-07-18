"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import {
  Zap,
  MapPin,
  Users,
  Clock,
  DollarSign,
  Shield,
  ArrowRight,
  CheckCircle,
  Search,
  Link,
  BatteryCharging,
  Star,
  Globe,
  TrendingUp,
  Smartphone,
  Play,
} from "lucide-react"
import Image from "next/image"

// Enhanced design tokens with modern animations
const SECTION_PADDING = "py-24 lg:py-32"
const CONTAINER_CLASS = "max-w-7xl mx-auto px-6 lg:px-8"
const GLASS_CARD =
  "backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl hover:bg-white/10 transition-all duration-500 hover:border-primary/30 hover:shadow-primary/10"
const GRADIENT_TEXT =
  "bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x"
const GRADIENT_BUTTON =
  "bg-gradient-to-r from-primary to-secondary text-black font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary/25"

// Particle System Component
const ParticleSystem = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      color: string
      velocity: { x: number; y: number }
      life: number
    }>
  >([])

  useEffect(() => {
    const createParticle = (id: number) => ({
      id,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      color: Math.random() > 0.5 ? "#FCA311" : "#E5E5E5", // Using specific HEX for particles for distinct visual
      velocity: {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
      },
      life: Math.random() * 100 + 50,
    })

    const initialParticles = Array.from({ length: 50 }, (_, i) => createParticle(i))
    setParticles(initialParticles)

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            life: particle.life - 1,
          }))
          .filter((particle) => particle.life > 0)
          .concat(Math.random() > 0.7 ? [createParticle(Date.now())] : []),
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life / 100,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Morphing Shape Component
const MorphingShape = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        borderRadius: [
          "60% 40% 30% 70%/60% 30% 70% 40%",
          "30% 60% 70% 40%/50% 60% 30% 60%",
          "50% 40% 60% 30%/70% 50% 40% 60%",
          "60% 40% 30% 70%/60% 30% 70% 40%",
        ],
        rotate: [0, 90, 180, 270, 360],
        scale: [1, 1.1, 0.9, 1.05, 1],
      }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}

// Advanced Counter with spring animation
const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    if (isInView) {
      springValue.set(end)
    }
  }, [isInView, end, springValue])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setCount(Math.floor(latest))
    })
  }, [springValue])

  return <div ref={ref}>{count.toLocaleString()}</div>
}

// Magnetic Button Component
const MagneticButton = ({ children, className, ...props }: any) => {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set((e.clientX - centerX) * 0.1)
      y.set((e.clientY - centerY) * 0.1)
    },
    [x, y],
  )

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}

// Text reveal animation
const TextReveal = ({ children, className }: { children: string; className?: string }) => {
  const words = children.split(" ")

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.8,
            delay: i * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

// Scroll-triggered reveal animation
const ScrollReveal = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Floating elements
const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export default function ChargeTNLanding() {
  const [userCount, setUserCount] = useState(0)
  const [stationCount, setStationCount] = useState(0)
  const [energyDelivered, setEnergyDelivered] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const opacityProgress = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Predictive Route Planning",
      description:
        "AI-powered routing that anticipates your needs and optimizes your journey across Tunisia's charging network.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-time Network Status",
      description: "Live data on station availability, queue times, and charging speeds to eliminate uncertainty.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Universal Access Protocol",
      description: "One platform connecting all charging providers into a seamless, integrated ecosystem.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Guaranteed Reservations",
      description: "Reserve your charging slot in advance with guaranteed availability when you arrive.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Dynamic Pricing",
      description: "Transparent, fair pricing that adapts to demand while benefiting both users and providers.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Universal Compatibility",
      description: "Works seamlessly with all EV models and charging standards across the market.",
    },
  ]

  const steps = [
    {
      title: "Discover",
      description: "Find optimal charging points along your route",
      icon: <Search className="w-8 h-8" />,
    },
    {
      title: "Connect",
      description: "Seamlessly interface with any provider",
      icon: <Link className="w-8 h-8" />,
    },
    {
      title: "Charge",
      description: "Monitor and manage your charging session",
      icon: <BatteryCharging className="w-8 h-8" />,
    },
  ]

  const testimonials = [
    {
      name: "Ahmed Ben Salem",
      role: "Tesla Owner, Tunis",
      content: "PowerMaps transformed my daily commute. I never worry about finding charging stations anymore.",
      rating: 5,
    },
    {
      name: "Fatima Khelifi",
      role: "Business Owner, Sfax",
      content: "Installing charging points through PowerMaps brought new customers and additional revenue to my café.",
      rating: 5,
    },
    {
      name: "Mohamed Trabelsi",
      role: "Fleet Manager, Sousse",
      content: "Managing our electric delivery fleet became effortless with PowerMaps's business solutions.",
      rating: 5,
    },
  ]

  const providerBenefits = [
    {
      title: "Zero Investment Required",
      description: "We handle all hardware, installation, and maintenance costs",
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
    },
    {
      title: "24/7 Technical Support",
      description: "Round-the-clock assistance and monitoring for all providers",
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
    },
    {
      title: "Advanced Analytics",
      description: "Real-time insights into usage patterns and revenue optimization",
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
    },
    {
      title: "Flexible Partnership",
      description: "No long-term contracts, scale up or down as needed",
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
    },
  ]

  return (
    <div className="min-h-screen bg-oxford-blue text-white overflow-x-hidden">
      {/* Particle System */}
      <ParticleSystem />

      {/* Enhanced Animated Background */}
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-oxford-blue to-oxford-blue" />

        {/* Morphing shapes */}
        <MorphingShape className="top-1/4 left-1/4 w-96 h-96 bg-primary opacity-20 blur-3xl" />
        <MorphingShape className="bottom-1/4 right-1/4 w-96 h-96 bg-secondary opacity-15 blur-3xl" />

        {/* Interactive cursor glow */}
        <motion.div
          className="fixed w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full pointer-events-none z-10"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      </motion.div>

      <div className="relative z-10">
        {/* Enhanced Navigation */}
        <motion.nav
          className="fixed top-0 w-full z-50 backdrop-blur-xl bg-oxford-blue/80 border-b border-white/10"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={CONTAINER_CLASS}>
            <div className="flex justify-between items-center h-20">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <FloatingElement>
                  <Image src="/powermaps-logo.png" alt="PowerMaps Logo" width={48} height={48} className="rounded-xl" />
                </FloatingElement>
                <motion.span
                  className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  PowerMaps
                </motion.span>
              </motion.div>

              <div className="hidden md:flex items-center space-x-8">
                {["Features", "How It Works", "Providers", "About"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium relative"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {item}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                  Sign In
                </Button>
                <MagneticButton className={GRADIENT_BUTTON}>Get Started</MagneticButton>
              </motion.div>
            </div>
          </div>
        </motion.nav>

        {/* Enhanced Hero Section with Advanced Animations */}
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
          <div className={CONTAINER_CLASS}>
            <motion.div
              className="text-center max-w-5xl mx-auto relative z-10"
              style={{ y: heroY, scale: scaleProgress, opacity: opacityProgress }}
            >
              {/* Animated Background Elements */}
              <motion.div
                className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/15 rounded-full blur-2xl"
                animate={{
                  scale: [1, 0.8, 1.2, 1],
                  rotate: [360, 180, 0],
                  x: [0, -40, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Main Title with Complex Animation */}
              <motion.div
                className="text-6xl md:text-8xl font-bold mb-8 leading-tight relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {/* First Line - Letter by Letter Animation */}
                <motion.div className="text-platinum block mb-4 overflow-hidden">
                  {"Power Tunisia's".split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{
                        opacity: 0,
                        y: 100,
                        rotateX: -90,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.05,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="inline-block"
                      style={{ transformOrigin: "bottom" }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Second Line - Word Morphing Effect */}
                <motion.div className="relative">
                  <motion.span
                    className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
                    initial={{
                      opacity: 0,
                      scale: 0.3,
                      rotateY: -180,
                      filter: "blur(20px)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      filter: "blur(0px)",
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 1.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      backgroundPosition: {
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      },
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      backgroundSize: "200% 200%",
                    }}
                  >
                    Electric Future
                  </motion.span>

                  {/* Glowing Effect Behind Text */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-30 blur-2xl"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.2, 1],
                      opacity: [0, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      delay: 1.5,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>

                {/* Floating Decorative Elements */}
                <motion.div
                  className="absolute top-0 right-0 w-4 h-4 bg-primary rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-6 h-6 bg-secondary rounded-full"
                  animate={{
                    y: [0, 15, 0],
                    x: [0, -15, 0],
                    scale: [1, 0.8, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2.5,
                  }}
                />
              </motion.div>

              {/* Subtitle with Typewriter Effect */}
              <motion.div
                className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.8, delay: 2.5 }}
              >
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1, delay: 2.8 }}>
                  {"The all-to-all EV charging platform where everyone can provide and access charging solutions"
                    .split("")
                    .map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.05,
                          delay: 2.8 + i * 0.02,
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                </motion.p>
              </motion.div>

              {/* Buttons with Staggered Entrance */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -50, rotateY: -45 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 4.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <MagneticButton size="lg" className={GRADIENT_BUTTON + " px-8 py-4 text-lg"}>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      Start Your Journey
                    </motion.span>
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                        rotate: [0, 15, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 0.1,
                      }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                  </MagneticButton>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50, rotateY: 45 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 4.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <MagneticButton
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
                  >
                    Become a Provider
                  </MagneticButton>
                </motion.div>
              </motion.div>

              {/* Enhanced Stats with Complex Animations */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 4.8 }}
              >
                {[
                  { value: 12500, label: "Active Users", color: "text-primary", suffix: "+", icon: "👥" },
                  { value: 850, label: "Charging Stations", color: "text-secondary", suffix: "+", icon: "⚡" },
                  { value: 2400, label: "Energy Delivered", color: "text-primary", suffix: " kWh", icon: "🔋" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 100,
                      rotateX: -90,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 5 + index * 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                  >
                    <FloatingElement delay={index * 0.2}>
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          rotateY: 10,
                          boxShadow: "0 25px 50px -12px rgba(252, 163, 17, 0.25)",
                        }}
                        className={GLASS_CARD + " group cursor-pointer relative overflow-hidden"}
                      >
                        {/* Card Background Animation */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"
                          initial={{ scale: 0, rotate: 45 }}
                          whileHover={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6 }}
                        />

                        <CardContent className="p-8 text-center relative z-10">
                          {/* Floating Icon */}
                          <motion.div
                            className="text-2xl mb-4"
                            animate={{
                              y: [0, -5, 0],
                              rotate: [0, 5, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: index * 0.5,
                            }}
                          >
                            {stat.icon}
                          </motion.div>

                          {/* Animated Counter */}
                          <motion.div className={`text-4xl font-bold mb-2 ${stat.color}`} whileHover={{ scale: 1.1 }}>
                            <AnimatedCounter end={stat.value} />
                            <motion.span
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 6 + index * 0.2 }}
                            >
                              {stat.suffix}
                            </motion.span>
                          </motion.div>

                          {/* Label with Slide-in Effect */}
                          <motion.div
                            className="text-gray-400 text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 6.2 + index * 0.2 }}
                          >
                            {stat.label}
                          </motion.div>

                          {/* Hover Glow Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </CardContent>
                      </motion.div>
                    </FloatingElement>
                  </motion.div>
                ))}
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 6.5, duration: 0.8 }}
              >
                <motion.div
                  className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
                  whileHover={{ borderColor: "rgba(252, 163, 17, 1)" }}
                >
                  <motion.div
                    className="w-1 h-3 bg-primary rounded-full mt-2"
                    animate={{
                      y: [0, 12, 0],
                      opacity: [1, 0.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section id="features" className={SECTION_PADDING}>
          <div className={CONTAINER_CLASS}>
            <ScrollReveal className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Revolutionary <span className={GRADIENT_TEXT}>Features</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Advanced technology meets user-friendly design for the ultimate EV charging experience
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal key={index}>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      z: 50,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={GLASS_CARD + " group cursor-pointer h-full"}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <CardContent className="p-8 h-full flex flex-col">
                      <motion.div
                        className="text-primary mb-6 group-hover:text-secondary transition-colors duration-300"
                        whileHover={{
                          scale: 1.2,
                          rotate: 360,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed flex-grow">{feature.description}</p>
                    </CardContent>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced How It Works */}
        <section id="how-it-works" className={SECTION_PADDING}>
          <div className={CONTAINER_CLASS}>
            <ScrollReveal className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                How <span className={GRADIENT_TEXT}>It Works</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Three simple steps to revolutionize your EV charging experience
              </p>
            </ScrollReveal>

            <div className="relative">
              {/* Animated Connection Line */}
              <motion.div
                className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 transform -translate-y-1/2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {steps.map((step, index) => (
                  <ScrollReveal key={index}>
                    <motion.div
                      className="text-center relative"
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className={GLASS_CARD + " group hover:scale-105 transition-all duration-500"}
                        whileHover={{
                          boxShadow: "0 25px 50px -12px rgba(252, 163, 17, 0.25)",
                          borderColor: "rgba(252, 163, 17, 0.5)",
                        }}
                      >
                        <CardContent className="p-10">
                          <motion.div
                            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-8 text-black shadow-lg group-hover:shadow-xl group-hover:shadow-primary/25 transition-all duration-300"
                            whileHover={{
                              scale: 1.1,
                              rotate: [0, -10, 10, 0],
                            }}
                            transition={{ duration: 0.6 }}
                          >
                            {step.icon}
                          </motion.div>
                          <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                          <p className="text-gray-400 leading-relaxed">{step.description}</p>
                        </CardContent>
                      </motion.div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Providers Section */}
        <section id="providers" className={SECTION_PADDING}>
          <div className={CONTAINER_CLASS}>
            <ScrollReveal className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Turn Your Space into <span className={GRADIENT_TEXT}>Income</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Join thousands of providers earning passive income while supporting Tunisia's electric future
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="space-y-8">
                  {providerBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-6"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {benefit.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{benefit.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                  }}
                  className={GLASS_CARD}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <CardContent className="p-10">
                    <h3 className="text-2xl font-semibold mb-8 text-primary">Earnings Calculator</h3>
                    <div className="space-y-6">
                      {[
                        { label: "Average daily sessions:", value: "12", color: "text-secondary" },
                        { label: "Average session value:", value: "TND 8.50", color: "text-secondary" },
                        { label: "Your commission (15%):", value: "TND 1.28", color: "text-secondary" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-between items-center"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-gray-400">{item.label}</span>
                          <motion.span className={`${item.color} font-semibold text-lg`} whileHover={{ scale: 1.1 }}>
                            {item.value}
                          </motion.span>
                        </motion.div>
                      ))}
                      <motion.div
                        className="border-t border-white/20 pt-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center text-2xl font-bold">
                          <span className="text-white">Monthly potential:</span>
                          <motion.span
                            className={GRADIENT_TEXT}
                            animate={{
                              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                          >
                            TND 461
                          </motion.span>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Enhanced Social Proof */}
        <section className={SECTION_PADDING}>
          <div className={CONTAINER_CLASS}>
            <ScrollReveal className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Trusted by <span className={GRADIENT_TEXT}>Thousands</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Join the growing community of satisfied users and providers across Tunisia
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index}>
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      z: 50,
                    }}
                    className={GLASS_CARD + " group cursor-pointer h-full"}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <CardContent className="p-8 h-full flex flex-col">
                      <motion.div
                        className="flex mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                          >
                            <Star className="w-5 h-5 text-primary fill-current" />
                          </motion.div>
                        ))}
                      </motion.div>
                      <p className="text-gray-400 mb-8 leading-relaxed text-lg flex-grow">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                        <div className="text-gray-500">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className={SECTION_PADDING}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <motion.div whileHover={{ scale: 1.02 }} className={GLASS_CARD + " text-center"}>
                <CardContent className="p-16">
                  <motion.h2
                    className="text-5xl md:text-6xl font-bold mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Ready to <span className={GRADIENT_TEXT}>Electrify</span> Tunisia?
                  </motion.h2>
                  <motion.p
                    className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Join PowerMaps today and be part of the sustainable transportation revolution
                  </motion.p>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <MagneticButton size="lg" className={GRADIENT_BUTTON + " px-10 py-4 text-lg"}>
                      Join PowerMaps Today
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </MagneticButton>
                    <MagneticButton
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 px-10 py-4 text-lg bg-transparent"
                    >
                      Become a Provider
                    </MagneticButton>
                  </motion.div>

                  <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-4">
                      <FloatingElement>
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-primary/30">
                          <Smartphone className="w-6 h-6 text-primary" />
                        </div>
                      </FloatingElement>
                      <FloatingElement delay={0.2}>
                        <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center border border-primary/30">
                          <Play className="w-6 h-6 text-primary" />
                        </div>
                      </FloatingElement>
                    </div>
                    <div className="text-gray-400">
                      <p>Download our mobile app</p>
                    </div>
                  </motion.div>
                </CardContent>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="border-t border-platinum/10 bg-black/50">
          <div className={CONTAINER_CLASS}>
            <div className="py-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <ScrollReveal>
                  <div className="md:col-span-1">
                    <motion.div className="flex items-center space-x-4 mb-6" whileHover={{ scale: 1.05 }}>
                      <FloatingElement>
                        <Image
                          src="/powermaps-logo.png"
                          alt="PowerMaps Logo"
                          width={40}
                          height={40}
                          className="rounded-lg"
                        />
                      </FloatingElement>
                      <span className="text-xl font-bold text-white">PowerMaps</span>
                    </motion.div>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      Powering Tunisia's electric future through innovative charging solutions.
                    </p>
                    <div className="flex space-x-4">
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.6 }}>
                        <Globe className="w-5 h-5 text-primary" />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.6 }}>
                        <TrendingUp className="w-5 h-5 text-secondary" />
                      </motion.div>
                    </div>
                  </div>
                </ScrollReveal>

                {[
                  {
                    title: "Platform",
                    links: ["For Users", "For Providers", "Route Planner", "Mobile App"],
                  },
                  {
                    title: "Company",
                    links: ["About Us", "Careers", "Press", "Contact"],
                  },
                  {
                    title: "Support",
                    links: ["Help Center", "Privacy Policy", "Terms of Service", "API Docs"],
                  },
                ].map((section, sectionIndex) => (
                  <ScrollReveal key={sectionIndex}>
                    <div>
                      <h4 className="font-semibold text-white mb-6 text-lg">{section.title}</h4>
                      <ul className="space-y-4">
                        {section.links.map((link, linkIndex) => (
                          <motion.li
                            key={link}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: linkIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <motion.a
                              href="#"
                              className="text-gray-400 hover:text-primary transition-colors duration-300"
                              whileHover={{ x: 5 }}
                            >
                              {link}
                            </motion.a>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <motion.div
                className="border-t border-platinum/10 mt-16 pt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-400">&copy; 2024 PowerMaps. All rights reserved. Made with ⚡ in Tunisia.</p>
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
