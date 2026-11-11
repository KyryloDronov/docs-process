import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import commonEn from "@/locales/en/common.json"
import commonRu from "@/locales/ru/common.json"

export const supportedLngs = ["ru", "en"] as const
export type AppLanguage = (typeof supportedLngs)[number]

export function resolveAppLanguage(lng?: string): AppLanguage {
  const code = (lng ?? i18n.language ?? "ru").toLowerCase()
  return code.startsWith("en") ? "en" : "ru"
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
    fallbackLng: "ru",
    defaultNS: "common",
    ns: ["common"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "docs-sim-lng",
    },
  })

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = resolveAppLanguage(lng)
})

document.documentElement.lang = resolveAppLanguage(i18n.language)

export default i18n
