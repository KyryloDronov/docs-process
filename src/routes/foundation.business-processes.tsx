import { Link, createFileRoute, notFound } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

import { ProcessSwimlanes } from "@/components/diagrams/process-swimlanes"
import {
  FoundationGuideContent,
  FoundationNextLinks,
  FoundationPage,
} from "@/components/foundation-section"
import { Card, CardContent } from "@/components/ui/card"
import { useFoundationData } from "@/hooks/use-locale-data"

export const Route = createFileRoute("/foundation/business-processes")({
  component: FoundationBusinessProcessesPage,
})

function FoundationBusinessProcessesPage() {
  const { t } = useTranslation()
  const foundation = useFoundationData()
  const guide = foundation.getFoundationGuide("business-processes")
  if (!guide) throw notFound()

  return (
    <FoundationPage
      title={guide.title}
      description={guide.short}
      crumb={guide.title}
    >
      <FoundationGuideContent
        guide={guide}
        diagram={
          <section className="space-y-3">
            <h2 className="text-lg font-semibold tracking-tight">
              {t("foundation.bpmnDiagramTitle")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("foundation.bpmnDiagramHint")}
            </p>
            <ProcessSwimlanes />
          </section>
        }
      />
      <Card className="border-sky-200 bg-sky-50/50 shadow-none dark:border-sky-900 dark:bg-sky-950/30">
        <CardContent className="space-y-2 pt-6 text-sm leading-relaxed">
          <p>{t("foundation.bpmnNextHint")}</p>
          <Link to="/" className="font-medium hover:underline">
            {t("foundation.bpmnNextLink")}
          </Link>
        </CardContent>
      </Card>
      <FoundationNextLinks currentTo="/foundation/business-processes" />
    </FoundationPage>
  )
}
