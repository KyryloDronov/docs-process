import { createFileRoute, notFound } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

import { PlanGantt } from "@/components/diagrams/plan-gantt"
import {
  FoundationGuideContent,
  FoundationNextLinks,
  FoundationPage,
} from "@/components/foundation-section"
import { foundationRoadmapGantt as ganttEn } from "@/data/foundation-roadmap-gantt.en"
import { foundationRoadmapGantt as ganttRu } from "@/data/foundation-roadmap-gantt"
import { useAppLanguage, useFoundationData } from "@/hooks/use-locale-data"

export const Route = createFileRoute("/foundation/roadmap")({
  component: FoundationRoadmapPage,
})

function FoundationRoadmapPage() {
  const { t } = useTranslation()
  const lng = useAppLanguage()
  const foundation = useFoundationData()
  const guide = foundation.getFoundationGuide("roadmap")
  if (!guide) throw notFound()

  const gantt = lng === "en" ? ganttEn : ganttRu

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
            <div className="space-y-1">
              <h2 className="text-lg font-semibold tracking-tight">
                {t("foundation.roadmapDiagramTitle")}
              </h2>
              <p className="text-sm text-muted-foreground">
                {t("foundation.roadmapGanttHint")}
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border">
              <PlanGantt
                tasks={gantt.tasks}
                links={gantt.links}
                metaById={gantt.metaById}
                start={gantt.start}
                end={gantt.end}
                height={420}
                showHint={false}
              />
            </div>
          </section>
        }
      />
      <FoundationNextLinks currentTo="/foundation/roadmap" />
    </FoundationPage>
  )
}
