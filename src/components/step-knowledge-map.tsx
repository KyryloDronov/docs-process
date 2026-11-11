import { useTranslation } from "react-i18next"

import { ArtifactRoadmap } from "@/components/artifact-roadmap"

type StepKnowledgeMapProps = {
  stepId: string
  stepNumber: number
  stepTitle: string
}

export function StepKnowledgeMap({
  stepNumber,
  stepTitle,
}: StepKnowledgeMapProps) {
  const { t } = useTranslation()

  return (
    <section className="space-y-3 rounded-2xl border px-3 py-4 md:px-4">
      <div className="space-y-0.5 px-1">
        <h2 className="text-sm font-semibold tracking-tight">
          {t("roadmap.title", { step: stepTitle })}
        </h2>
        <p className="text-xs text-muted-foreground">{t("roadmap.hint")}</p>
      </div>
      <ArtifactRoadmap focusStepNumber={stepNumber} />
    </section>
  )
}
