import { createFileRoute, notFound } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

import { MermaidDiagram } from "@/components/diagrams/mermaid-diagram"
import {
  FoundationGuideContent,
  FoundationNextLinks,
  FoundationPage,
} from "@/components/foundation-section"
import { useFoundationData } from "@/hooks/use-locale-data"

export const Route = createFileRoute("/foundation/system-map")({
  component: FoundationSystemMapPage,
})

const systemChart = `
flowchart LR
  UI[Frontend] --> GW[API Gateway]
  GW --> S1[Domain Service A]
  GW --> S2[Domain Service B]
  S1 --> DB[(Primary DB)]
  S2 --> DB
  S1 --> MQ[[Events / Queue]]
  S2 --> MQ
`

function FoundationSystemMapPage() {
  const { t } = useTranslation()
  const foundation = useFoundationData()
  const guide = foundation.getFoundationGuide("system-map")
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
              {t("foundation.systemMapDiagramTitle")}
            </h2>
            <MermaidDiagram chart={systemChart} />
          </section>
        }
      />
      <FoundationNextLinks currentTo="/foundation/system-map" />
    </FoundationPage>
  )
}
