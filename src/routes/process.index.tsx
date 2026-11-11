import { createFileRoute } from "@tanstack/react-router"
import { RefreshCcw } from "lucide-react"
import { useTranslation } from "react-i18next"

import { PageHeader } from "@/components/page-header"
import { StepCard } from "@/components/step-card"
import { useProcessData } from "@/hooks/use-locale-data"

export const Route = createFileRoute("/process/")({
  component: ProcessIndexPage,
})

function ProcessIndexPage() {
  const { t } = useTranslation()
  const process = useProcessData()

  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-6 md:px-8 md:py-8">
      <PageHeader
        title={t("pages.processTitle")}
        description={t("pages.processDescription")}
        crumbs={[
          { label: t("nav.home"), to: "/" },
          { label: t("nav.processOverview"), to: "/process/overview" },
          { label: t("nav.processMap") },
        ]}
      />

      <div className="flex items-center gap-2 rounded-xl border bg-muted/40 px-4 py-3 text-sm">
        <RefreshCcw className="size-4 shrink-0 text-sky-600" />
        <span>
          {process.docsMeta.feedbackNote}: {t("pages.processFeedback")}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {process.processSteps.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </div>
    </div>
  )
}
