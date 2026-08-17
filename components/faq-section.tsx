"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import type { translations } from "@/lib/i18n"
import { ChevronDown, HelpCircle } from "lucide-react"

const EASE: [number, number, number, number] = [0.0, 0.0, 0.2, 1]

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
}

type Key = keyof typeof translations.en

/**
 * The answers here are the ones the two simulators compute, written out as
 * text. Search engines and answer engines cannot run the simulator, so the
 * numbers only reach them if they exist as crawlable content — which is also
 * what makes the FAQ structured data in the layout legitimate.
 */
const QUESTIONS: { q: Key; a: Key }[] = [
  { q: "faqQ1", a: "faqA1" },
  { q: "faqQ2", a: "faqA2" },
  { q: "faqQ3", a: "faqA3" },
  { q: "faqQ4", a: "faqA4" },
  { q: "faqQ5", a: "faqA5" },
  { q: "faqQ6", a: "faqA6" },
]

export function FaqSection() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="py-16 md:py-24 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              <HelpCircle className="w-4 h-4 mr-2" />
              {t("faqBadge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 dark:text-white mb-4">
            {t("faqTitle")} <span className="text-blue-600 dark:text-blue-400">{t("faqTitleHighlight")}</span>
          </h2>
        </motion.div>

        <motion.div
          className="space-y-3"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {QUESTIONS.map(({ q, a }, index) => (
            <details
              key={q}
              open={index === 0}
              className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-4 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                <h3 className="text-base font-medium">{t(q)}</h3>
                <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 -mt-1">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{t(a)}</p>
              </div>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
