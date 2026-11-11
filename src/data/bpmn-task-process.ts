export type BpmnLane = {
  id: string
  label: string
  /** Tailwind soft background for the lane strip */
  tone: string
  /** Accent for task borders / header chips */
  accent: string
}

export type BpmnNodeKind = "start" | "end" | "task" | "xor"

export type BpmnNode = {
  id: string
  kind: BpmnNodeKind
  laneId: string
  /** Column index left → right */
  column: number
  label: string
  subtitle?: string
}

export type BpmnEdge = {
  id: string
  source: string
  target: string
  kind?: "main" | "approve" | "reject" | "artifact"
  label?: string
}

/** Visual data object / handoff chip next to a producing task */
export type BpmnArtifactIcon =
  | "doc"
  | "figma"
  | "chart"
  | "research"
  | "database"
  | "architecture"
  | "checklist"
  | "alert"
  | "rocket"

export type BpmnArtifact = {
  id: string
  /** Task / node that produces this artifact */
  afterNodeId: string
  label: string
  icon: BpmnArtifactIcon
}

export const bpmnMeta = {
  title: "Процесс постановки задачи",
  subtitle:
    "Дорожки отделов, задачи, XOR-развилки, артефакты, ветки «одобрено / отклонено» и выходы из процесса.",
}

export const bpmnLanes: BpmnLane[] = [
  {
    id: "business",
    label: "Бизнес",
    tone: "bg-sky-50/80 dark:bg-sky-950/25",
    accent: "border-sky-300 text-sky-900 dark:border-sky-800 dark:text-sky-100",
  },
  {
    id: "product",
    label: "Product",
    tone: "bg-violet-50/70 dark:bg-violet-950/20",
    accent:
      "border-violet-300 text-violet-900 dark:border-violet-800 dark:text-violet-100",
  },
  {
    id: "design",
    label: "Design",
    tone: "bg-fuchsia-50/70 dark:bg-fuchsia-950/20",
    accent:
      "border-fuchsia-300 text-fuchsia-900 dark:border-fuchsia-800 dark:text-fuchsia-100",
  },
  {
    id: "arch-data",
    label: "Arch / Data",
    tone: "bg-emerald-50/70 dark:bg-emerald-950/20",
    accent:
      "border-emerald-300 text-emerald-900 dark:border-emerald-800 dark:text-emerald-100",
  },
  {
    id: "eng-qa",
    label: "Eng / QA",
    tone: "bg-amber-50/60 dark:bg-amber-950/20",
    accent:
      "border-amber-300 text-amber-950 dark:border-amber-800 dark:text-amber-100",
  },
  {
    id: "devops",
    label: "DevOps",
    tone: "bg-slate-50/80 dark:bg-slate-900/40",
    accent:
      "border-slate-300 text-slate-900 dark:border-slate-700 dark:text-slate-100",
  },
]

export const bpmnNodes: BpmnNode[] = [
  {
    id: "start",
    kind: "start",
    laneId: "business",
    column: 0,
    label: "Старт",
    subtitle: "Потребность",
  },
  {
    id: "need",
    kind: "task",
    laneId: "business",
    column: 1,
    label: "Сформулировать потребность",
    subtitle: "Боль, сегмент, ожидания",
  },
  {
    id: "business-case",
    kind: "task",
    laneId: "product",
    column: 2,
    label: "Собрать business case",
    subtitle: "Проблема · цель · гипотеза",
  },
  {
    id: "metrics",
    kind: "task",
    laneId: "business",
    column: 3,
    label: "Подтвердить метрики",
    subtitle: "Критерии успеха",
  },
  {
    id: "ux-research",
    kind: "task",
    laneId: "design",
    column: 4,
    label: "UX-исследование",
    subtitle: "Интервью · сценарии",
  },
  {
    id: "tech-audit",
    kind: "task",
    laneId: "arch-data",
    column: 4,
    label: "Технический аудит",
    subtitle: "Системы · ограничения",
  },
  {
    id: "hlr",
    kind: "task",
    laneId: "product",
    column: 5,
    label: "High-level требования",
    subtitle: "Scope in / out",
  },
  {
    id: "data-ready",
    kind: "task",
    laneId: "arch-data",
    column: 5,
    label: "Готовность данных",
    subtitle: "Слои · gaps · MVP",
  },
  {
    id: "concept",
    kind: "task",
    laneId: "product",
    column: 6,
    label: "Концепт решения",
    subtitle: "Варианты · процессы",
  },
  {
    id: "architecture",
    kind: "task",
    laneId: "arch-data",
    column: 6,
    label: "Архитектура",
    subtitle: "Компоненты · illustrative I/O",
  },
  {
    id: "prototype",
    kind: "task",
    laneId: "design",
    column: 7,
    label: "Прототип",
    subtitle: "Ключевой сценарий",
  },
  {
    id: "feature-xor",
    kind: "xor",
    laneId: "business",
    column: 8,
    label: "Валидация ок?",
    subtitle: "Бизнес + Product + Design",
  },
  {
    id: "exit-feature",
    kind: "end",
    laneId: "business",
    column: 9,
    label: "Выход",
    subtitle: "Отклонено",
  },
  {
    id: "full-spec",
    kind: "task",
    laneId: "product",
    column: 9,
    label: "Полное ТЗ",
    subtitle: "Истории · API · края",
  },
  {
    id: "figma",
    kind: "task",
    laneId: "design",
    column: 10,
    label: "Figma handoff",
    subtitle: "Финальные макеты",
  },
  {
    id: "backlog",
    kind: "task",
    laneId: "product",
    column: 10,
    label: "Backlog",
    subtitle: "Эпик · истории",
  },
  {
    id: "plan",
    kind: "task",
    laneId: "eng-qa",
    column: 11,
    label: "План и оценка",
    subtitle: "Спринты · зависимости",
  },
  {
    id: "estimate-risks",
    kind: "task",
    laneId: "arch-data",
    column: 12,
    label: "Оценка и риски",
    subtitle: "Capacity · блокеры",
  },
  {
    id: "approval-xor",
    kind: "xor",
    laneId: "business",
    column: 13,
    label: "Согласовано?",
    subtitle: "Go + freeze",
  },
  {
    id: "exit-approval",
    kind: "end",
    laneId: "business",
    column: 14,
    label: "Выход",
    subtitle: "Процесс остановлен",
  },
  {
    id: "handoff",
    kind: "task",
    laneId: "eng-qa",
    column: 14,
    label: "Handoff",
    subtitle: "Linear · брифинг",
  },
  {
    id: "build-qa",
    kind: "task",
    laneId: "eng-qa",
    column: 15,
    label: "Разработка и QA",
    subtitle: "Code · review · тесты",
  },
  {
    id: "release",
    kind: "task",
    laneId: "devops",
    column: 16,
    label: "Релиз и аналитика",
    subtitle: "Deploy · метрики",
  },
  {
    id: "end",
    kind: "end",
    laneId: "devops",
    column: 17,
    label: "Конец",
    subtitle: "Фича в проде",
  },
]

/** Artifacts shown as icon chips under the producing step */
export const bpmnArtifacts: BpmnArtifact[] = [
  { id: "art-request", afterNodeId: "need", label: "Запрос", icon: "doc" },
  {
    id: "art-bc",
    afterNodeId: "business-case",
    label: "Business case",
    icon: "doc",
  },
  { id: "art-metrics", afterNodeId: "metrics", label: "Метрики", icon: "chart" },
  {
    id: "art-insights",
    afterNodeId: "ux-research",
    label: "Insights",
    icon: "research",
  },
  { id: "art-audit", afterNodeId: "tech-audit", label: "Аудит", icon: "doc" },
  { id: "art-hlr", afterNodeId: "hlr", label: "HLR", icon: "doc" },
  {
    id: "art-data",
    afterNodeId: "data-ready",
    label: "Data map",
    icon: "database",
  },
  {
    id: "art-concept",
    afterNodeId: "concept",
    label: "Концепт",
    icon: "doc",
  },
  {
    id: "art-arch",
    afterNodeId: "architecture",
    label: "Архитектура",
    icon: "architecture",
  },
  {
    id: "art-proto",
    afterNodeId: "prototype",
    label: "Прототип",
    icon: "figma",
  },
  { id: "art-spec", afterNodeId: "full-spec", label: "ТЗ", icon: "doc" },
  { id: "art-figma", afterNodeId: "figma", label: "Figma", icon: "figma" },
  { id: "art-backlog", afterNodeId: "backlog", label: "Backlog", icon: "checklist" },
  { id: "art-plan", afterNodeId: "plan", label: "План", icon: "checklist" },
  {
    id: "art-risks",
    afterNodeId: "estimate-risks",
    label: "Риски",
    icon: "alert",
  },
  {
    id: "art-handoff",
    afterNodeId: "handoff",
    label: "Handoff",
    icon: "checklist",
  },
  {
    id: "art-release",
    afterNodeId: "release",
    label: "Release",
    icon: "rocket",
  },
]

export const bpmnEdges: BpmnEdge[] = [
  { id: "e-start-need", source: "start", target: "need", kind: "main" },
  {
    id: "e-need-bc",
    source: "need",
    target: "business-case",
    kind: "artifact",
  },
  {
    id: "e-bc-metrics",
    source: "business-case",
    target: "metrics",
    kind: "main",
  },
  {
    id: "e-metrics-ux",
    source: "metrics",
    target: "ux-research",
    kind: "artifact",
  },
  {
    id: "e-metrics-audit",
    source: "metrics",
    target: "tech-audit",
    kind: "main",
  },
  {
    id: "e-ux-hlr",
    source: "ux-research",
    target: "hlr",
    kind: "artifact",
  },
  {
    id: "e-audit-data",
    source: "tech-audit",
    target: "data-ready",
    kind: "main",
  },
  {
    id: "e-hlr-concept",
    source: "hlr",
    target: "concept",
    kind: "artifact",
  },
  {
    id: "e-data-concept",
    source: "data-ready",
    target: "concept",
    kind: "main",
  },
  {
    id: "e-concept-arch",
    source: "concept",
    target: "architecture",
    kind: "main",
  },
  {
    id: "e-arch-proto",
    source: "architecture",
    target: "prototype",
    kind: "artifact",
  },
  {
    id: "e-proto-xor",
    source: "prototype",
    target: "feature-xor",
    kind: "main",
    label: "На валидацию",
  },
  {
    id: "e-feature-approve",
    source: "feature-xor",
    target: "full-spec",
    kind: "approve",
    label: "Одобрено",
  },
  {
    id: "e-feature-reject",
    source: "feature-xor",
    target: "exit-feature",
    kind: "reject",
    label: "Отклонено",
  },
  {
    id: "e-spec-figma",
    source: "full-spec",
    target: "figma",
    kind: "main",
  },
  {
    id: "e-figma-backlog",
    source: "figma",
    target: "backlog",
    kind: "artifact",
  },
  {
    id: "e-backlog-plan",
    source: "backlog",
    target: "plan",
    kind: "main",
  },
  {
    id: "e-plan-risks",
    source: "plan",
    target: "estimate-risks",
    kind: "main",
  },
  {
    id: "e-risks-approval",
    source: "estimate-risks",
    target: "approval-xor",
    kind: "main",
  },
  {
    id: "e-approval-approve",
    source: "approval-xor",
    target: "handoff",
    kind: "approve",
    label: "Одобрено",
  },
  {
    id: "e-approval-reject",
    source: "approval-xor",
    target: "exit-approval",
    kind: "reject",
    label: "Отклонено",
  },
  {
    id: "e-handoff-build",
    source: "handoff",
    target: "build-qa",
    kind: "main",
  },
  {
    id: "e-build-release",
    source: "build-qa",
    target: "release",
    kind: "main",
  },
  {
    id: "e-release-end",
    source: "release",
    target: "end",
    kind: "main",
  },
]
