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

// Google Design System
const GOOGLE_ELEVATION = {
  level1: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)",
  level2: "0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15)",
}

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.0, 0.0, 0.2, 1] } },
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
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mb-4">
            {t("getInTouch")} <span className="text-blue-600 dark:text-blue-400">{t("getInTouchHighlight")}</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t("contactSubtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information - 5 columns */}
          <motion.div
            className="lg:col-span-5"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card
              className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl"
              style={{ boxShadow: GOOGLE_ELEVATION.level1 }}
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-medium mb-8 text-gray-900 dark:text-white">{t("contactInformation")}</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">{t("email")}</p>
                      <a
                        href="mailto:contact@powermaps.tech"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                      >
                        contact@powermaps.tech
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">{t("phone")}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">+216 53 376 935</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">{t("location")}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{t("locationText")}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">{t("businessHours")}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{t("businessHoursTime")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form - 7 columns */}
          <motion.div
            className="lg:col-span-7"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card
              className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl"
              style={{ boxShadow: GOOGLE_ELEVATION.level1 }}
            >
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-900 dark:text-white font-medium mb-2 block text-sm">
                        {t("fullName")} *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm transition-all duration-200"
                        placeholder={t("fullNamePlaceholder")}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-900 dark:text-white font-medium mb-2 block text-sm">
                        {t("emailAddress")} *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm transition-all duration-200"
                        placeholder={t("emailPlaceholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-900 dark:text-white font-medium mb-2 block text-sm">
                      {t("subject")} *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm transition-all duration-200"
                      placeholder={t("subjectPlaceholder")}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-900 dark:text-white font-medium mb-2 block text-sm">
                      {} *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white min-h-[120px] resize-none text-sm transition-all duration-200"
                      placeholder={t("messagePlaceholder")}
                    />
                  </div>

                  {/* Status Messages */}
                  {status.type !== "idle" && (
                    <div
                      className={`flex items-center space-x-3 p-4 rounded-lg border ${
                        status.type === "success"
                          ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800"
                          : status.type === "error"
                            ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800"
                            : "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                      }`}
                    >
                      {status.type === "loading" && <Loader2 className="w-5 h-5 animate-spin flex-shrink-0" />}
                      {status.type === "success" && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                      {status.type === "error" && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                      <span className="text-sm font-medium">{status.message}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md"
                    style={{ boxShadow: GOOGLE_ELEVATION.level1 }}
                  >
                    {status.type === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
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
