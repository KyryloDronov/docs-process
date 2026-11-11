import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"
import { resolveAppLanguage, type AppLanguage } from "@/i18n"
import { cn } from "@/lib/utils"

const options: { code: AppLanguage; labelKey: "language.ru" | "language.en" }[] =
  [
    { code: "ru", labelKey: "language.ru" },
    { code: "en", labelKey: "language.en" },
  ]

export function LanguageSwitcher({ className }: { className?: string }) {
  const { t, i18n } = useTranslation()
  const current = resolveAppLanguage(i18n.language)

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-lg border bg-background p-0.5",
        className
      )}
      role="group"
      aria-label={t("language.label")}
    >
      {options.map((option) => (
        <Button
          key={option.code}
          type="button"
          size="sm"
          variant={current === option.code ? "secondary" : "ghost"}
          className="h-7 px-2 text-xs"
          onClick={() => {
            void i18n.changeLanguage(option.code)
          }}
        >
          {t(option.labelKey)}
        </Button>
      ))}
    </div>
  )
}
