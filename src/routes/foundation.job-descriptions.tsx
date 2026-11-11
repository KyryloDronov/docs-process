import { useState } from "react"
import { createFileRoute, notFound } from "@tanstack/react-router"
import { Eye } from "lucide-react"
import { useTranslation } from "react-i18next"

import { MermaidDiagram } from "@/components/diagrams/mermaid-diagram"
import { MidFrontendJdExample } from "@/components/foundation/mid-frontend-jd-example"
import {
  FoundationGuideContent,
  FoundationNextLinks,
  FoundationPage,
} from "@/components/foundation-section"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useAppLanguage, useFoundationData } from "@/hooks/use-locale-data"

export const Route = createFileRoute("/foundation/job-descriptions")({
  component: FoundationJobDescriptionsPage,
})

const rolesChartRu = `
flowchart LR
  O[Оргструктура] --> J[Должностные инструкции]
  J --> P[Product]
  J --> D[Design]
  J --> T[Tech Lead]
  J --> Dev[Developers]
  J --> Q[QA]
  J --> Ops[DevOps / SRE]
`

const rolesChartEn = `
flowchart LR
  O[Org structure] --> J[Job descriptions]
  J --> P[Product]
  J --> D[Design]
  J --> T[Tech Lead]
  J --> Dev[Developers]
  J --> Q[QA]
  J --> Ops[DevOps / SRE]
`

function FoundationJobDescriptionsPage() {
  const { t } = useTranslation()
  const lng = useAppLanguage()
  const foundation = useFoundationData()
  const [exampleOpen, setExampleOpen] = useState(false)
  const guide = foundation.getFoundationGuide("job-descriptions")
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
              {t("foundation.jobDescriptionsDiagramTitle")}
            </h2>
            <MermaidDiagram chart={lng === "en" ? rolesChartEn : rolesChartRu} />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("foundation.jobDescriptionsDiagramNote")}
            </p>
          </section>
        }
      />

      <Card className="border-sky-200 bg-sky-50/50 shadow-none dark:border-sky-900 dark:bg-sky-950/30">
        <CardHeader className="gap-2">
          <CardTitle className="text-base">
            {t("foundation.jdExampleCardTitle")}
          </CardTitle>
          <CardDescription className="leading-relaxed">
            {t("foundation.jdExampleCardText")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button type="button" onClick={() => setExampleOpen(true)}>
            <Eye className="size-4" />
            {t("foundation.jdExampleButton")}
          </Button>
        </CardContent>
      </Card>

      <Dialog open={exampleOpen} onOpenChange={setExampleOpen}>
        <DialogContent className="flex max-h-[90vh] w-[min(1280px,calc(100%-1.5rem))] max-w-none flex-col gap-4 overflow-hidden p-4 sm:max-w-none md:p-6">
          <DialogHeader className="shrink-0 pr-8 text-left">
            <DialogTitle>{t("foundation.jdExampleDialogTitle")}</DialogTitle>
            <DialogDescription>
              {t("foundation.jdExampleDialogHint")}
            </DialogDescription>
          </DialogHeader>
          <div className="min-h-0 min-w-0 flex-1 overflow-y-auto">
            <MidFrontendJdExample />
          </div>
        </DialogContent>
      </Dialog>

      <FoundationNextLinks currentTo="/foundation/job-descriptions" />
    </FoundationPage>
  )
}
