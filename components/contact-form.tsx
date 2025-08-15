"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/hooks/use-language"
import { Mail, Phone, MapPin, Clock, Loader2, CheckCircle, AlertCircle } from "lucide-react"

const SECTION_PADDING = "py-20 md:py-28"
const CONTAINER_CLASS = "max-w-7xl mx-auto px-6 lg:px-8"
const GRADIENT_TEXT = "bg-gradient-to-r from-electric-blue to-vivid-orange bg-clip-text text-transparent"
const PRIMARY_BUTTON_CLASS =
  "bg-transparent border-2 border-foreground text-foreground font-semibold hover:bg-foreground hover:text-background transition-colors duration-300 rounded-full px-8 py-3 text-lg shadow-lg hover:shadow-xl"
const CARD_CLASS = "bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: "loading", message: t("sending") })

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: "success", message: data.message })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus({ type: "error", message: data.error })
      }
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try again." })
    }
  }

  return (
    <section id="contact" className={SECTION_PADDING}>
      <div className={CONTAINER_CLASS}>
        <motion.div
          className="text-center mb-16"
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("getInTouch")} <span className={GRADIENT_TEXT}>{t("getInTouchHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contactSubtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <Card className={CARD_CLASS}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">{t("contactInformation")}</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t("email")}</p>
                      <a
                        href="mailto:contact@powermaps.tech"
                        className="text-muted-foreground hover:text-electric-blue transition-colors"
                      >
                        contact@powermaps.tech
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-vivid-orange/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-vivid-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t("phone")}</p>
                      <p className="text-muted-foreground">+216 53 376 935</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t("location")}</p>
                      <p className="text-muted-foreground">{t("locationText")}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-vivid-orange/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-vivid-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t("businessHours")}</p>
                      <p className="text-muted-foreground">{t("businessHoursTime")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <Card className={CARD_CLASS}>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-medium">
                        {t("fullName")} *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder={t("fullNamePlaceholder")}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium">
                        {t("emailAddress")} *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder={t("emailPlaceholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground font-medium">
                      {t("subject")} *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder={t("subjectPlaceholder")}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">
                      {t("message")} *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2 min-h-[120px]"
                      placeholder={t("messagePlaceholder")}
                    />
                  </div>

                  {/* Status Messages */}
                  {status.type !== "idle" && (
                    <div
                      className={`flex items-center space-x-2 p-4 rounded-lg ${
                        status.type === "success"
                          ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                          : status.type === "error"
                            ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
                            : "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                      }`}
                    >
                      {status.type === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
                      {status.type === "success" && <CheckCircle className="w-5 h-5" />}
                      {status.type === "error" && <AlertCircle className="w-5 h-5" />}
                      <span>{status.message}</span>
                    </div>
                  )}

                  <Button type="submit" disabled={status.type === "loading"} className={PRIMARY_BUTTON_CLASS}>
                    {status.type === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        {t("sending")}
                      </>
                    ) : (
                      t("sendMessage")
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
