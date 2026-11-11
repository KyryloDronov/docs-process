/**
 * Knowledge map of the Symbiose training case:
 * where artifacts live (as in Big Tech), at which stage they are produced,
 * and where they are already integrated (roadmap, epic, pilot pack).
 */

import type { KnowledgeEntry, KnowledgeSystem } from "./knowledge-map"

export type {
  KnowledgeSystem,
  KnowledgeStatus,
  KnowledgeEntry,
} from "./knowledge-map"

export const knowledgeSystems: KnowledgeSystem[] = [
  {
    id: "notion",
    name: "Notion · Product Docs",
    short: "Notion",
    kind: "docs",
    description: "Single source of truth: cases, specs, decisions, roadmap.",
  },
  {
    id: "figma",
    name: "Figma",
    short: "Figma",
    kind: "design",
    description: "Prototypes, final mockups, and design handoff.",
  },
  {
    id: "linear",
    name: "Linear · Forest Platform",
    short: "Linear",
    kind: "tracker",
    description: "Epics, stories, sprints, delivery dependencies.",
  },
  {
    id: "miro",
    name: "Miro",
    short: "Miro",
    kind: "workshop",
    description: "Discovery, JTBD, architecture sketches from syncs.",
  },
  {
    id: "drive",
    name: "Google Drive · Pilot Pack",
    short: "Drive",
    kind: "files",
    description: "Signed PDFs, exports for stakeholders and the pilot.",
  },
  {
    id: "github",
    name: "GitHub · contracts",
    short: "GitHub",
    kind: "code",
    description: "OpenAPI / JSON Schema contracts next to the service code.",
  },
]

/** Global "shelves" where artifacts converge */
export const knowledgeHubs = [
  {
    id: "global-plan",
    title: "Global implementation plan",
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
    title: "Insurer pilot pack",
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
    title: "Business case / hypothesis",
    systemId: "notion",
    path: "Product / Initiatives / Risk-Loss / 01 Business Case",
    url: "notion.so/symbiose/risk-loss-business-case-v0-1",
    status: "ready",
    integratedInto: ["Global implementation plan"],
    note: "Initiative kickoff; linked in the roadmap as intake.",
  },

  // 2. Research
  {
    id: "km-research",
    stepId: "research",
    stepNumber: 2,
    title: "Research report",
    systemId: "notion",
    path: "Product / Discovery / Risk-Loss / Research readout v0.3",
    url: "notion.so/symbiose/risk-loss-research-v0-3",
    status: "ready",
    integratedInto: ["Global implementation plan", "Epic RISK-LOSS-MVP"],
  },
  {
    id: "km-research-board",
    stepId: "research",
    stepNumber: 2,
    title: "Discovery board (JTBD / competitors)",
    systemId: "miro",
    path: "Workshops / 2026-03 Risk-Loss discovery",
    url: "miro.com/app/board/symbiose-risk-loss-discovery",
    status: "ready",
    integratedInto: ["Research report (Notion)"],
    note: "Raw sticky notes; conclusions moved into the readout.",
  },
  {
    id: "km-hlr",
    stepId: "research",
    stepNumber: 2,
    title: "High-level requirements",
    systemId: "notion",
    path: "Product / Initiatives / Risk-Loss / 02 HLR",
    url: "notion.so/symbiose/risk-loss-hlr-v0-2",
    status: "ready",
    integratedInto: ["Global implementation plan", "Epic RISK-LOSS-MVP"],
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
    integratedInto: ["HLR", "Global implementation plan"],
    note: "Layer and methodology prerequisites — a separate Data shelf.",
  },

  // 3. Concept
  {
    id: "km-concept",
    stepId: "concept",
    stepNumber: 3,
    title: "Solution concept",
    systemId: "notion",
    path: "Product / Initiatives / Risk-Loss / 03 Concept",
    url: "notion.so/symbiose/risk-loss-concept-v1",
    status: "ready",
    integratedInto: ["Global implementation plan", "Epic RISK-LOSS-MVP"],
  },
  {
    id: "km-architecture",
    stepId: "concept",
    stepNumber: 3,
    title: "Architecture diagram",
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
    integratedInto: ["Architecture diagram (Notion)"],
  },

  // 4. Prototype
  {
    id: "km-proto",
    stepId: "prototype",
    stepNumber: 4,
    title: "UI/UX prototype",
    systemId: "figma",
    path: "Forest Platform / Risk-Loss / Prototype v0.9",
    url: "figma.com/file/symbiose-risk-loss-prototype",
    status: "ready",
    integratedInto: ["Global implementation plan", "Epic RISK-LOSS-MVP"],
  },
  {
    id: "km-test-results",
    stepId: "prototype",
    stepNumber: 4,
    title: "Test results",
    systemId: "notion",
    path: "Product / Validation / Risk-Loss prototype tests",
    url: "notion.so/symbiose/risk-loss-validation-v1",
    status: "ready",
    integratedInto: ["Global implementation plan"],
    note: "User tests + tech spike → go to the full specification.",
  },

  // 5. Spec
  {
    id: "km-tz",
    stepId: "spec",
    stepNumber: 5,
    title: "Full specification",
    systemId: "notion",
    path: "Product / Specs / Risk-Loss Full Spec v1.0",
    url: "notion.so/symbiose/risk-loss-full-spec-v1",
    status: "ready",
    integratedInto: [
      "Global implementation plan",
      "Epic RISK-LOSS-MVP",
      "Insurer pilot pack",
    ],
  },
  {
    id: "km-contracts",
    stepId: "spec",
    stepNumber: 5,
    title: "API / JSON Schema contracts",
    systemId: "github",
    path: "forest-platform/contracts/risk-loss/",
    url: "github.com/symbiose/forest-platform/tree/main/contracts/risk-loss",
    status: "ready",
    integratedInto: ["Full specification (links)", "Epic RISK-LOSS-MVP"],
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
    integratedInto: ["Epic RISK-LOSS-MVP", "Insurer pilot pack"],
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
    integratedInto: ["Epic RISK-LOSS-MVP", "Global implementation plan"],
  },

  // 6. Planning
  {
    id: "km-plan",
    stepId: "planning",
    stepNumber: 6,
    title: "Work plan (Gantt / sprints)",
    systemId: "notion",
    path: "Product / Delivery / Risk-Loss Work Plan v1.0",
    url: "notion.so/symbiose/risk-loss-work-plan-v1",
    status: "ready",
    integratedInto: [
      "Global implementation plan",
      "Epic RISK-LOSS-MVP",
      "Insurer pilot pack",
    ],
    note: "Task mirror is being prepared in Linear; Notion holds the narrative + Gantt for stakeholders.",
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
    note: "Tasks are published at handoff after sign-off.",
  },
  {
    id: "km-estimate",
    stepId: "planning",
    stepNumber: 6,
    title: "Estimate and risks",
    systemId: "notion",
    path: "Product / Delivery / Risk-Loss Estimate & Risks v1.0",
    url: "notion.so/symbiose/risk-loss-estimate-risks-v1",
    status: "ready",
    integratedInto: ["Global implementation plan", "Final decision"],
  },

  // 7. Approval
  {
    id: "km-decision",
    stepId: "approval",
    stepNumber: 7,
    title: "Final decision (Go with conditions)",
    systemId: "notion",
    path: "Product / Decisions / 2026-05-14 Risk-Loss Gate",
    url: "notion.so/symbiose/risk-loss-gate-2026-05-14",
    status: "ready",
    integratedInto: [
      "Global implementation plan",
      "Epic RISK-LOSS-MVP",
      "ADR index",
      "Insurer pilot pack",
    ],
  },
  {
    id: "km-freeze-pdf",
    stepId: "approval",
    stepNumber: 7,
    title: "Freeze + signatures (PDF export of decision record)",
    systemId: "drive",
    path: "Pilot Pack / 2026-07 / Final Decision v1.0.pdf",
    url: "drive.google.com/file/symbiose-risk-loss-final-decision-v1",
    status: "ready",
    integratedInto: ["Insurer pilot pack", "Global implementation plan"],
    note: "PDF for stakeholders; the canon is one Notion decision record (Go + freeze + signatures).",
  },
  {
    id: "km-freeze-notion",
    stepId: "approval",
    stepNumber: 7,
    title: "Freeze pack inside the final decision",
    systemId: "notion",
    path: "Product / Decisions / 2026-05-14 Risk-Loss Gate · freeze",
    url: "notion.so/symbiose/risk-loss-gate-2026-05-14",
    status: "ready",
    integratedInto: ["Epic RISK-LOSS-MVP", "Insurer pilot pack"],
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
    integratedInto: ["Sprint board S1–S3", "Freeze pack"],
    note: "Planning draft board → published after Go.",
  },

  // 9. Development
  {
    id: "km-qa",
    stepId: "development",
    stepNumber: 9,
    title: "QA report / release readiness",
    systemId: "notion",
    path: "Product / Delivery / Risk-Loss QA Report v1.0",
    url: "notion.so/symbiose/risk-loss-qa-report-v1",
    status: "ready",
    integratedInto: ["Epic RISK-LOSS-MVP", "Release report"],
    note: "Engineering tests — not the stage-4 validation readout.",
  },

  // 10. Release
  {
    id: "km-release",
    stepId: "release",
    stepNumber: 10,
    title: "Release and pilot metrics report",
    systemId: "notion",
    path: "Product / Outcomes / Risk-Loss Pilot Readout 2026-07",
    url: "notion.so/symbiose/risk-loss-pilot-readout-2026-07",
    status: "ready",
    integratedInto: ["Global implementation plan", "Insurer pilot pack"],
    note: "Closes the metrics loop from the business case.",
  },
]

export function getSystemById(id: string) {
  return knowledgeSystems.find((s) => s.id === id)
}

export function getEntriesForStep(stepId: string) {
  return knowledgeEntries.filter((e) => e.stepId === stepId)
}

/** Everything already collected by this stage, inclusive */
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
