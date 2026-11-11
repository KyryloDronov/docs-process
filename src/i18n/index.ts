import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import commonEn from "@/locales/en/common.json"
import commonRu from "@/locales/ru/common.json"

export const supportedLngs = ["en", "ru"] as const
export type AppLanguage = (typeof supportedLngs)[number]

export function resolveAppLanguage(lng?: string): AppLanguage {
  const code = (lng ?? i18n.language ?? "en").toLowerCase()
  return code.startsWith("ru") ? "ru" : "en"
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { common: commonRu },
      en: { common: commonEn },
    },
    supportedLngs: [...supportedLngs],
    fallbackLng: "en",
    defaultNS: "common",
    ns: ["common"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "docs-sim-language",
    },
  })

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = resolveAppLanguage(lng)
})

document.documentElement.lang = resolveAppLanguage(i18n.language)

export default i18n
