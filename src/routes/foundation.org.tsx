import { Link, createFileRoute, notFound } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

import { MermaidDiagram } from "@/components/diagrams/mermaid-diagram"
import {
  FoundationGuideContent,
  FoundationNextLinks,
  FoundationPage,
} from "@/components/foundation-section"
import { Card, CardContent } from "@/components/ui/card"
import { useFoundationData } from "@/hooks/use-locale-data"

export const Route = createFileRoute("/foundation/org")({
  component: FoundationOrgPage,
})

const orgChart = `
flowchart TB
  S[Leadership / Stakeholders]
  P[Product]
  D[Design]
  E[Engineering]
  Q[QA]
  O[DevOps / SRE]
  Sec[Security]
  S --> P
  S --> E
  P --> D
  E --> Q
  E --> O
  E --> Sec
`

function FoundationOrgPage() {
  const { t } = useTranslation()
  const foundation = useFoundationData()
  const guide = foundation.getFoundationGuide("org")
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
              {t("foundation.orgDiagramTitle")}
            </h2>
            <MermaidDiagram chart={orgChart} />
          </section>
        }
      />
      <Card className="border-sky-200 bg-sky-50/50 shadow-none dark:border-sky-900 dark:bg-sky-950/30">
        <CardContent className="space-y-2 pt-6 text-sm leading-relaxed">
          <p>{t("foundation.orgNextHint")}</p>
          <Link
            to="/foundation/job-descriptions"
            className="font-medium hover:underline"
          >
            {t("foundation.orgNextLink")}
          </Link>
        </CardContent>
      </Card>
      <FoundationNextLinks currentTo="/foundation/org" />
    </FoundationPage>
  )
}
