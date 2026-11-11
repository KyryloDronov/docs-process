import { Link, createFileRoute, notFound } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

import {
  FoundationGuideContent,
  FoundationNextLinks,
  FoundationPage,
} from "@/components/foundation-section"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useFoundationData } from "@/hooks/use-locale-data"

export const Route = createFileRoute("/foundation/intake")({
  component: FoundationIntakePage,
})

function FoundationIntakePage() {
  const { t } = useTranslation()
  const foundation = useFoundationData()
  const guide = foundation.getFoundationGuide("intake")
  if (!guide) throw notFound()

  return (
    <FoundationPage
      title={guide.title}
      description={guide.short}
      crumb={guide.title}
    >
      <FoundationGuideContent guide={guide} />

      <Card className="border-sky-200 bg-sky-50/50 shadow-none dark:border-sky-900 dark:bg-sky-950/30">
        <CardHeader className="gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <CardTitle className="text-base">
              {t("foundation.intakeToProcessTitle")}
            </CardTitle>
            <CardDescription className="leading-relaxed">
              {t("foundation.intakeToProcessText")}
            </CardDescription>
          </div>
          <Button
            nativeButton={false}
            className="shrink-0"
            render={
              <Link to="/process/$stepId" params={{ stepId: "problem" }} />
            }
          >
            {t("foundation.intakeToProcessLink")}
            <ArrowRight data-icon="inline-end" />
          </Button>
        </CardHeader>
      </Card>

      <FoundationNextLinks currentTo="/foundation/intake" />
    </FoundationPage>
  )
}
