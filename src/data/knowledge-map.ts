/**
 * Карта знаний учебного кейса Symbiose:
 * где живут артефакты (как в Big Tech), на каком этапе собраны
 * и куда уже интегрированы (roadmap, epic, pilot pack).
 */

export type KnowledgeSystem = {
  id: string
  name: string
  short: string
  kind: "docs" | "design" | "tracker" | "workshop" | "files" | "code"
  description: string
}

export type KnowledgeStatus = "ready" | "draft" | "planned"

export type KnowledgeEntry = {
  id: string
  stepId: string
  stepNumber: number
  title: string
  systemId: string
  /** Путь / «полка» внутри сервиса */
  path: string
  /** Псевдо-ссылка для учебного примера */
  url: string
  status: KnowledgeStatus
  /** Куда уже вшито / на что ссылается */
  integratedInto: string[]
  note?: string
}

export const knowledgeSystems: KnowledgeSystem[] = [
  {
    id: "notion",
    name: "Notion · Product Docs",
    short: "Notion",
    kind: "docs",
    description: "Единый источник правды: кейсы, спеки, решения, roadmap.",
  },
  {
    id: "figma",
    name: "Figma",
    short: "Figma",
    kind: "design",
    description: "Прототипы, финальные макеты и design handoff.",
  },
  {
    id: "linear",
    name: "Linear · Forest Platform",
    short: "Linear",
    kind: "tracker",
    description: "Эпики, истории, спринты, зависимости поставки.",
  },
  {
    id: "miro",
    name: "Miro",
    short: "Miro",
    kind: "workshop",
    description: "Discovery, JTBD, архитектурные наброски на синках.",
  },
  {
    id: "drive",
    name: "Google Drive · Pilot Pack",
    short: "Drive",
    kind: "files",
    description: "Подписанные PDF, экспорт для stakeholders и пилота.",
  },
  {
    id: "github",
    name: "GitHub · contracts",
    short: "GitHub",
    kind: "code",
    description: "OpenAPI / JSON Schema контракты рядом с кодом сервисов.",
  },
]

/** Глобальные «полки», куда сходятся артефакты */
export const knowledgeHubs = [
  {
    id: "global-plan",
    title: "Глобальный план реализации",
    system: "Notion",
    path: "Product / Roadmap / 2026 H1 · Risk & Loss",
  },
  {
    id: "epic",
    title: "Epic RISK-LOSS-MVP",
    system: "Linear",
    path: "Forest Platform · Initiatives",
  },
  {
    id: "pilot-pack",
    title: "Pilot pack страховщику",
    system: "Drive",
    path: "Sales / Pilots / 2026-07 Risk-Loss",
  },
  {
    id: "adr-index",
    title: "ADR index",
    system: "Notion",
    path: "Engineering / Architecture Decisions",
  },
] as const

export const knowledgeEntries: KnowledgeEntry[] = [
  // 1. Problem
  {
    id: "km-business-case",
    stepId: "problem",
    stepNumber: 1,
    title: "Бизнес-кейс / гипотеза",
    systemId: "notion",
    path: "Product / Initiatives / Risk-Loss / 01 Business Case",
    url: "notion.so/symbiose/risk-loss-business-case-v0-1",
    status: "ready",
    integratedInto: ["Глобальный план реализации"],
    note: "Старт инициативы; ссылка в roadmap как intake.",
  },

  // 2. Research
  {
    id: "km-research",
    stepId: "research",
    stepNumber: 2,
    title: "Исследовательский отчёт",
    systemId: "notion",
    path: "Product / Discovery / Risk-Loss / Research readout v0.3",
    url: "notion.so/symbiose/risk-loss-research-v0-3",
    status: "ready",
    integratedInto: ["Глобальный план реализации", "Epic RISK-LOSS-MVP"],
  },
  {
    id: "km-research-board",
    stepId: "research",
    stepNumber: 2,
    title: "Discovery board (JTBD / конкуренты)",
    systemId: "miro",
    path: "Workshops / 2026-03 Risk-Loss discovery",
    url: "miro.com/app/board/symbiose-risk-loss-discovery",
    status: "ready",
    integratedInto: ["Исследовательский отчёт (Notion)"],
    note: "Сырые стикеры; выводы перенесены в readout.",
  },
  {
    id: "km-hlr",
    stepId: "research",
    stepNumber: 2,
    title: "High-level требования",
    systemId: "notion",
    path: "Product / Initiatives / Risk-Loss / 02 HLR",
    url: "notion.so/symbiose/risk-loss-hlr-v0-2",
    status: "ready",
    integratedInto: ["Глобальный план реализации", "Epic RISK-LOSS-MVP"],
  },
  {
    id: "km-data-ready",
    stepId: "research",
    stepNumber: 2,
    title: "Data readiness (PRE-1…3)",
    systemId: "notion",
    path: "Data / Readiness / Fire risk layers",
    url: "notion.so/symbiose/data-readiness-fire-risk",
    status: "ready",
    integratedInto: ["HLR", "Глобальный план реализации"],
    note: "Prerequisite слоёв и методики — отдельная полка Data.",
  },

  // 3. Concept
  {
    id: "km-concept",
    stepId: "concept",
    stepNumber: 3,
    title: "Концепт решения",
    systemId: "notion",
    path: "Product / Initiatives / Risk-Loss / 03 Concept",
    url: "notion.so/symbiose/risk-loss-concept-v1",
    status: "ready",
    integratedInto: ["Глобальный план реализации", "Epic RISK-LOSS-MVP"],
  },
  {
    id: "km-architecture",
    stepId: "concept",
    stepNumber: 3,
    title: "Архитектурная схема",
    systemId: "notion",
    path: "Engineering / Architecture / Risk-Loss overview",
    url: "notion.so/symbiose/risk-loss-architecture-v1",
    status: "ready",
    integratedInto: ["ADR index", "Epic RISK-LOSS-MVP"],
  },
  {
    id: "km-arch-miro",
    stepId: "concept",
    stepNumber: 3,
    title: "Architecture sync board",
    systemId: "miro",
    path: "Engineering / Syncs / Risk-Loss components",
    url: "miro.com/app/board/symbiose-risk-loss-arch",
    status: "ready",
    integratedInto: ["Архитектурная схема (Notion)"],
  },

  // 4. Prototype
  {
    id: "km-proto",
    stepId: "prototype",
    stepNumber: 4,
    title: "UI/UX-прототип",
    systemId: "figma",
    path: "Forest Platform / Risk-Loss / Prototype v0.9",
    url: "figma.com/file/symbiose-risk-loss-prototype",
    status: "ready",
    integratedInto: ["Глобальный план реализации", "Epic RISK-LOSS-MVP"],
  },
  {
    id: "km-test-results",
    stepId: "prototype",
    stepNumber: 4,
    title: "Результаты тестов",
    systemId: "notion",
    path: "Product / Validation / Risk-Loss prototype tests",
    url: "notion.so/symbiose/risk-loss-validation-v1",
    status: "ready",
    integratedInto: ["Глобальный план реализации"],
    note: "User tests + tech spike → go в полное ТЗ.",
  },

  // 5. Spec
  {
    id: "km-tz",
    stepId: "spec",
    stepNumber: 5,
    title: "Полное ТЗ",
    systemId: "notion",
    path: "Product / Specs / Risk-Loss Full Spec v1.0",
    url: "notion.so/symbiose/risk-loss-full-spec-v1",
    status: "ready",
    integratedInto: [
      "Глобальный план реализации",
      "Epic RISK-LOSS-MVP",
      "Pilot pack страховщику",
    ],
  },
  {
    id: "km-contracts",
    stepId: "spec",
    stepNumber: 5,
    title: "API / JSON Schema контракты",
    systemId: "github",
    path: "forest-platform/contracts/risk-loss/",
    url: "github.com/symbiose/forest-platform/tree/main/contracts/risk-loss",
    status: "ready",
    integratedInto: ["Полное ТЗ (ссылки)", "Epic RISK-LOSS-MVP"],
  },
  {
    id: "km-figma-handoff",
    stepId: "spec",
    stepNumber: 5,
    title: "Figma handoff",
    systemId: "figma",
    path: "Forest Platform / Risk-Loss / Handoff v1.0",
    url: "figma.com/file/symbiose-risk-loss-handoff-v1",
    status: "ready",
    integratedInto: ["Epic RISK-LOSS-MVP", "Pilot pack страховщику"],
  },
  {
    id: "km-backlog",
    stepId: "spec",
    stepNumber: 5,
    title: "Backlog (MD-* + RL-*)",
    systemId: "linear",
    path: "Epic RISK-LOSS-MVP · Stories (draft)",
    url: "linear.app/symbiose/project/risk-loss-mvp",
    status: "ready",
    integratedInto: ["Epic RISK-LOSS-MVP", "Глобальный план реализации"],
  },

  // 6. Planning
  {
    id: "km-plan",
    stepId: "planning",
    stepNumber: 6,
    title: "План работ (Gantt / спринты)",
    systemId: "notion",
    path: "Product / Delivery / Risk-Loss Work Plan v1.0",
    url: "notion.so/symbiose/risk-loss-work-plan-v1",
    status: "ready",
    integratedInto: [
      "Глобальный план реализации",
      "Epic RISK-LOSS-MVP",
      "Pilot pack страховщику",
    ],
    note: "Зеркало задач готовится в Linear; Notion — narrative + Gantt для stakeholders.",
  },
  {
    id: "km-plan-linear",
    stepId: "planning",
    stepNumber: 6,
    title: "Sprint board S1–S3",
    systemId: "linear",
    path: "Forest Platform · Cycles May–Jul 2026",
    url: "linear.app/symbiose/team/FP/cycles",
    status: "draft",
    integratedInto: ["Epic RISK-LOSS-MVP"],
    note: "Публикация задач — на handoff после подписи.",
  },
  {
    id: "km-estimate",
    stepId: "planning",
    stepNumber: 6,
    title: "Оценка и риски",
    systemId: "notion",
    path: "Product / Delivery / Risk-Loss Estimate & Risks v1.0",
    url: "notion.so/symbiose/risk-loss-estimate-risks-v1",
    status: "ready",
    integratedInto: ["Глобальный план реализации", "Финальное решение"],
  },

  // 7. Approval
  {
    id: "km-decision",
    stepId: "approval",
    stepNumber: 7,
    title: "Финальное решение (Go with conditions)",
    systemId: "notion",
    path: "Product / Decisions / 2026-05-14 Risk-Loss Gate",
    url: "notion.so/symbiose/risk-loss-gate-2026-05-14",
    status: "ready",
    integratedInto: [
      "Глобальный план реализации",
      "Epic RISK-LOSS-MVP",
      "ADR index",
      "Pilot pack страховщику",
    ],
  },
  {
    id: "km-freeze-pdf",
    stepId: "approval",
    stepNumber: 7,
    title: "Freeze + подписи (PDF export decision record)",
    systemId: "drive",
    path: "Pilot Pack / 2026-07 / Final Decision v1.0.pdf",
    url: "drive.google.com/file/symbiose-risk-loss-final-decision-v1",
    status: "ready",
    integratedInto: ["Pilot pack страховщику", "Глобальный план реализации"],
    note: "PDF для stakeholders; канон — один decision record в Notion (Go + freeze + подписи).",
  },
  {
    id: "km-freeze-notion",
    stepId: "approval",
    stepNumber: 7,
    title: "Freeze-пакет внутри финального решения",
    systemId: "notion",
    path: "Product / Decisions / 2026-05-14 Risk-Loss Gate · freeze",
    url: "notion.so/symbiose/risk-loss-gate-2026-05-14",
    status: "ready",
    integratedInto: ["Epic RISK-LOSS-MVP", "Pilot pack страховщику"],
  },

  // 8. Handoff
  {
    id: "km-handoff",
    stepId: "handoff",
    stepNumber: 8,
    title: "Handoff brief + published Linear",
    systemId: "linear",
    path: "Forest Platform · Epic RISK-LOSS-MVP · Ready for S1",
    url: "linear.app/symbiose/issue/FP-RISK-LOSS-MVP",
    status: "ready",
    integratedInto: ["Sprint board S1–S3", "Freeze-пакет"],
    note: "Draft-доска планирования → published после Go.",
  },

  // 9. Development
  {
    id: "km-qa",
    stepId: "development",
    stepNumber: 9,
    title: "QA-отчёт / release readiness",
    systemId: "notion",
    path: "Product / Delivery / Risk-Loss QA Report v1.0",
    url: "notion.so/symbiose/risk-loss-qa-report-v1",
    status: "ready",
    integratedInto: ["Epic RISK-LOSS-MVP", "Release report"],
    note: "Инженерные тесты — не путать с validation readout этапа 4.",
  },

  // 10. Release
  {
    id: "km-release",
    stepId: "release",
    stepNumber: 10,
    title: "Отчёт по релизу и метрикам пилота",
    systemId: "notion",
    path: "Product / Outcomes / Risk-Loss Pilot Readout 2026-07",
    url: "notion.so/symbiose/risk-loss-pilot-readout-2026-07",
    status: "ready",
    integratedInto: ["Глобальный план реализации", "Pilot pack страховщику"],
    note: "Закрывает петлю метрик из бизнес-кейса.",
  },
]

export function getSystemById(id: string) {
  return knowledgeSystems.find((s) => s.id === id)
}

export function getEntriesForStep(stepId: string) {
  return knowledgeEntries.filter((e) => e.stepId === stepId)
}

/** Всё, что уже собрано к этому этапу включительно */
export function getEntriesUpToStep(stepNumber: number) {
  return knowledgeEntries.filter((e) => e.stepNumber <= stepNumber)
}

export function getStepCoverage(stepNumber: number) {
  const upTo = getEntriesUpToStep(stepNumber)
  const ready = upTo.filter((e) => e.status === "ready").length
  const draft = upTo.filter((e) => e.status === "draft").length
  const planned = upTo.filter((e) => e.status === "planned").length
  return { total: upTo.length, ready, draft, planned }
}
