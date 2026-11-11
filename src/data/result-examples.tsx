import type { ReactNode } from "react"

import { ArchitectureArtifact } from "@/components/artifacts/architecture-artifact"
import { BacklogArtifact } from "@/components/artifacts/backlog-artifact"
import { BusinessCaseArtifact } from "@/components/artifacts/business-case-artifact"
import { EstimateRisksArtifact } from "@/components/artifacts/estimate-risks-artifact"
import { FigmaHandoffArtifact } from "@/components/artifacts/figma-handoff-artifact"
import { FinalDecisionArtifact } from "@/components/artifacts/final-decision-artifact"
import { FullSpecArtifact } from "@/components/artifacts/full-spec-artifact"
import { HandoffBriefArtifact } from "@/components/artifacts/handoff-brief-artifact"
import { HlrArtifact } from "@/components/artifacts/hlr-artifact"
import { QaReportArtifact } from "@/components/artifacts/qa-report-artifact"
import { ReleaseReportArtifact } from "@/components/artifacts/release-report-artifact"
import { ResearchReportArtifact } from "@/components/artifacts/research-report-artifact"
import { SolutionConceptArtifact } from "@/components/artifacts/solution-concept-artifact"
import { TestResultsArtifact } from "@/components/artifacts/test-results-artifact"
import { UiPrototypeArtifact } from "@/components/artifacts/ui-prototype-artifact"
import { WorkPlanArtifact } from "@/components/artifacts/work-plan-artifact"

/** Examples keyed by stable artifact id (language-independent) */
export const resultExamplesByArtifactId: Record<
  string,
  {
    descriptionRu: string
    descriptionEn: string
    render: () => ReactNode
  }
> = {
  "business-case": {
    descriptionRu:
      "Один артефакт этапа 1: проблема, цель, гипотеза и discovery-сквад.",
    descriptionEn:
      "One stage-1 artifact: problem, goal, hypothesis, and discovery squad.",
    render: () => <BusinessCaseArtifact />,
  },
  "research-report": {
    descriptionRu: "Факты, touchpoints процессов и инсайты после бизнес-кейса.",
    descriptionEn:
      "Facts, process touchpoints, and insights after the business case.",
    render: () => <ResearchReportArtifact />,
  },
  hlr: {
    descriptionRu: "Что берём в концепт и что пока вне объёма.",
    descriptionEn: "What enters concept work and what stays out of scope for now.",
    render: () => <HlrArtifact />,
  },
  "solution-concept": {
    descriptionRu: "Варианты A/B/C, выбранный путь, процессы и стыки с платформой.",
    descriptionEn:
      "Options A/B/C, chosen path, processes, and platform touchpoints.",
    render: () => <SolutionConceptArtifact />,
  },
  architecture: {
    descriptionRu:
      "Компоненты, sequence и illustrative контракты (формальные API — в ТЗ).",
    descriptionEn:
      "Components, sequence, and illustrative contracts (formal APIs in the full spec).",
    render: () => <ArchitectureArtifact />,
  },
  "ui-prototype": {
    descriptionRu:
      "Кликабельный прототип рабочего места сценария до полного ТЗ.",
    descriptionEn:
      "Clickable prototype of the scenario workspace before the full spec.",
    render: () => <UiPrototypeArtifact />,
  },
  "validation-results": {
    descriptionRu:
      "Результаты валидации (не QA): пользователи + техспайк → идём в ТЗ.",
    descriptionEn:
      "Validation readout (not QA): users + tech spike → proceed to full spec.",
    render: () => <TestResultsArtifact />,
  },
  "full-spec": {
    descriptionRu:
      "Спецификация после валидации: истории, API, крайние случаи.",
    descriptionEn:
      "Specification after validation: stories, APIs, edge cases.",
    render: () => <FullSpecArtifact />,
  },
  "figma-handoff": {
    descriptionRu: "Дизайн-handoff финальных макетов для разработки.",
    descriptionEn: "Design handoff of final mocks for engineering.",
    render: () => <FigmaHandoffArtifact />,
  },
  backlog: {
    descriptionRu: "Эпик и истории, готовые к оценке на планировании.",
    descriptionEn: "Epic and stories ready for estimation in planning.",
    render: () => <BacklogArtifact />,
  },
  "work-plan": {
    descriptionRu: "Gantt, зависимости, владельцы и платформенные блокеры.",
    descriptionEn: "Gantt, dependencies, owners, and platform blockers.",
    render: () => <WorkPlanArtifact />,
  },
  "estimate-risks": {
    descriptionRu:
      "Story points, capacity, критический путь и реестр рисков.",
    descriptionEn: "Story points, capacity, critical path, and risk register.",
    render: () => <EstimateRisksArtifact />,
  },
  "final-decision": {
    descriptionRu:
      "Gate Go/No-Go: голоса, условия MVP, freeze пакета и подписи.",
    descriptionEn:
      "Go/No-Go gate: votes, MVP conditions, package freeze, and signatures.",
    render: () => <FinalDecisionArtifact />,
  },
  "handoff-brief": {
    descriptionRu: "Публикация задач в Linear и техбрифинг команды.",
    descriptionEn: "Publishing tasks in Linear and the team tech briefing.",
    render: () => <HandoffBriefArtifact />,
  },
  "qa-report": {
    descriptionRu: "QA evidence: покрытие, блокеры, готовность к релизу.",
    descriptionEn: "QA evidence: coverage, blockers, release readiness.",
    render: () => <QaReportArtifact />,
  },
  "release-report": {
    descriptionRu: "Деплой, метрики пилота и план следующей итерации.",
    descriptionEn: "Deploy, pilot metrics, and next iteration plan.",
    render: () => <ReleaseReportArtifact />,
  },
}

/** Order of result examples per step — stable ids, language-independent */
export const resultArtifactIdsByStep: Record<string, string[]> = {
  problem: ["business-case"],
  research: ["research-report", "hlr"],
  concept: ["solution-concept", "architecture"],
  prototype: ["ui-prototype", "validation-results"],
  spec: ["full-spec", "figma-handoff", "backlog"],
  planning: ["work-plan", "estimate-risks"],
  approval: ["final-decision"],
  handoff: ["handoff-brief"],
  development: ["qa-report"],
  release: ["release-report"],
}

export function getResultArtifactId(stepId: string, resultIndex: number) {
  return resultArtifactIdsByStep[stepId]?.[resultIndex]
}
