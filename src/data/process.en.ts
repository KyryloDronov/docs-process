import type {
  Artifact,
  InitiativeLevel,
  Participant,
  Principle,
  ProcessStep,
} from "./process"

export type {
  StepInvolvement,
  ProcessStep,
  Artifact,
  Participant,
  Principle,
  InitiativeLevel,
} from "./process"

export const docsMeta = {
  title: "From idea to a measurable result in production",
  subtitle:
    "Product Development Lifecycle: after Intake — from hypothesis to release and impact. Stage depth depends on initiative level (L1–L3).",
  feedbackNote:
    "Feedback at every stage · Discovery for the next initiative can run in parallel with Delivery of the current one",
  intakeNote:
    "Every idea first goes through Intake (company foundation): Reject / Park / Discovery. These 10 stages are the path of an initiative already admitted into Discovery or Delivery.",
}

/** Three complexity levels — so a small bug does not run the full lifecycle */
export const initiativeLevels: InitiativeLevel[] = [
  {
    id: "L1",
    title: "L1 · Small Change",
    subtitle: "Lightweight",
    when: "Bugfixes, small UI, tech debt without new business logic",
    process: [
      "Short description + acceptance",
      "Estimate",
      "Build and QA",
      "Release (no full Discovery / Go-No-Go)",
    ],
    note: "Stages 1–7 are not required. DRI is usually the Tech Lead or the area owner.",
  },
  {
    id: "L2",
    title: "L2 · Feature",
    subtitle: "Standard",
    when: "New functionality inside an existing product",
    process: [
      "Lightweight Discovery (problem → concept, prototype if needed)",
      "Spec / Figma / backlog",
      "Plan and light Go",
      "Delivery + Impact",
    ],
    note: "Full cycle is possible, but without a heavy gate and without three architecture options “for show”.",
  },
  {
    id: "L3",
    title: "L3 · Initiative",
    subtitle: "Full lifecycle",
    when: "New modules, billing, AI/models, major integrations, architecture change",
    process: [
      "Intake → full Discovery",
      "Prototype and validation",
      "PRD/spec + architecture",
      "Formal Go/No-Go",
      "Delivery, ops readiness, Impact (Scale / Iterate / Pivot / Sunset)",
    ],
    note: "The Risk & Loss case in this app is an L3 example.",
  },
]

export const processSteps: ProcessStep[] = [
  {
    id: "problem",
    number: 1,
    title: "Understanding the problem and goal",
    subtitle: "Why it is needed and what value it will bring",
    color: "bg-sky-600",
    colorSoft: "bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-900",
    whatWeDo: [
      "Analyze the business goal and success metrics",
      "Document the current process and user pain points",
      "Formulate the value hypothesis",
      "Staff the discovery team for research by problem type (not “everyone by default”)",
    ],
    // One artifact: the problem statement is a section inside the case, not a separate document
    result: ["Business case / hypothesis"],
    involved: [
      {
        participantId: "business",
        does: [
          "Articulates the customer need and pain",
          "Provides commercial context and expectations",
          "Proposes draft success metrics",
        ],
      },
      {
        participantId: "pm",
        does: [
          "Clarifies the problem and value",
          "Assembles the business case / hypothesis",
          "Defines the discovery squad by problem type",
          "Prepares the transition to research",
        ],
      },
    ],
    driParticipantId: "pm",
    exitCriteria: [
      "Problem and value hypothesis are captured without jumping into detailed solution",
      "Success metrics are draft but measurable",
      "Discovery squad is staffed by problem type",
      "Intake already decided Discovery (not a raw “just build it” ask)",
    ],
    appliesToLevels: ["L2", "L3"],
  },
  {
    id: "research",
    number: 2,
    title: "Research and analysis",
    subtitle: "Gathering facts: users, market, technology",
    color: "bg-emerald-600",
    colorSoft:
      "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-900",
    whatWeDo: [
      "The discovery squad (staffed in stage 1) runs the research",
      "User interviews and jobs-to-be-done analysis",
      "Competitor and market analysis",
      "Audit of the current product and technical constraints",
      "Map touchpoints with existing processes: billing, notifications, reports, demos",
      "Data readiness audit: what the model needs vs. what exists / needs rework / must be done upfront",
      "Synthesis of insights, risks, and gaps in the business request",
      "Capturing high-level requirements, prerequisites, and the meaning of model output for design",
    ],
    // Two Big Tech artifacts: evidence (readout) and decision (HLR) — not merged into one document
    result: ["Research report", "High-level requirements"],
    involved: [
      {
        participantId: "pm",
        does: [
          "Leads discovery and insight synthesis",
          "Captures high-level requirements",
        ],
      },
      {
        participantId: "designer",
        does: [
          "Interviews and UX research",
          "Scenario and pain-point map",
        ],
      },
      {
        participantId: "architect",
        does: [
          "Audit of current systems and integrations",
          "Assessment of technical constraints",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Readiness table for model layers and inputs",
          "Captures gaps and prerequisites before MVP",
        ],
      },
      {
        participantId: "business",
        does: [
          "Provides access to customers and experts",
          "Confirms segment priorities",
        ],
      },
    ],
    driParticipantId: "pm",
    exitCriteria: [
      "Evidence report exists separately from high-level requirements",
      "Touchpoints with billing / notify / reports / data are understood",
      "Gaps and prerequisites are named before concept",
    ],
    appliesToLevels: ["L2", "L3"],
  },
  {
    id: "concept",
    number: 3,
    title: "Concept and solution",
    subtitle: "Solution options and high-level architecture",
    color: "bg-violet-600",
    colorSoft:
      "bg-violet-50 text-violet-800 border-violet-200 dark:bg-violet-950/40 dark:text-violet-200 dark:border-violet-900",
    whatWeDo: [
      "Generate 2–3 solution options with different scope",
      "Draw as-is / to-be and how the feature plugs into platform processes (billing, notifications, reports)",
      "Work out the UX concept of key surfaces and what model output means for design",
      "Draw high-level architecture: components, sequence, illustrative I/O (formal APIs come in the full spec)",
      "Document trade-offs, risks, and the chosen option",
    ],
    // Product concept + architecture — two artifacts, like readout + HLR
    result: ["Solution concept", "Architecture diagram"],
    involved: [
      {
        participantId: "pm",
        does: [
          "Compares options by value and scope",
          "Documents the chosen concept",
        ],
      },
      {
        participantId: "designer",
        does: [
          "User flow and as-is / to-be diagrams",
          "How the feature plugs into billing, notifications, reports",
          "UX concept of key surfaces",
        ],
      },
      {
        participantId: "architect",
        does: [
          "High-level architecture and integrations",
          "Platform trade-offs",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Model input/output contract for the UI and report",
          "Loss methodology and versioning",
        ],
      },
      {
        participantId: "tech-lead",
        does: [
          "Assesses feasibility for the team",
          "Delivery risks",
        ],
      },
    ],
    driParticipantId: "pm",
    exitCriteria: [
      "One solution option is chosen with explicit trade-offs",
      "As-is/to-be and platform-process plugs are documented",
      "High-level architecture is enough for prototype (not full OpenAPI)",
    ],
    appliesToLevels: ["L2", "L3"],
  },
  {
    id: "prototype",
    number: 4,
    title: "Prototype and validation",
    subtitle: "Quickly testing the idea with users and on the technical side",
    color: "bg-cyan-600",
    colorSoft:
      "bg-cyan-50 text-cyan-800 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-200 dark:border-cyan-900",
    whatWeDo: [
      "Build a clickable UI/UX prototype of the key scenario",
      "Prepare validation scenarios and success criteria",
      "Run user tests with target segments",
      "Verify technical feasibility (spike if needed)",
      "Document conclusions: proceed, iterate, or change approach",
    ],
    // Two artifacts: the prototype itself and the validation readout (not stage-9 QA)
    result: ["UI/UX prototype", "Validation results"],
    involved: [
      {
        participantId: "designer",
        does: [
          "Builds the UI/UX prototype",
          "Runs user tests",
        ],
      },
      {
        participantId: "pm",
        does: [
          "Validation success criteria",
          "Decision: proceed / iterate",
        ],
      },
      {
        participantId: "tech-lead",
        does: [
          "Spike / feasibility check",
          "Feedback on technical risks",
        ],
      },
      {
        participantId: "business",
        does: [
          "Takes part in the prototype demo",
          "Gives feedback from the customer side",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Checks that metrics and figures are clear on the prototype",
          "Clarifies data assumptions for validation",
        ],
      },
    ],
    driParticipantId: "designer",
    exitCriteria: [
      "Critical-path prototype is validated with users or the target segment",
      "Validation readout exists: proceed / iterate / stop",
      "Tech spike closed the key feasibility risk (if any)",
    ],
    appliesToLevels: ["L2", "L3"],
  },
  {
    id: "spec",
    number: 5,
    title: "Detailed elaboration",
    subtitle: "Turning the concept into a full specification and backlog",
    color: "bg-amber-500",
    colorSoft:
      "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-900",
    whatWeDo: [
      "Assemble the full specification: stories, acceptance criteria, edge cases",
      "Define API endpoints, request/response examples, and storage schemas",
      "Describe permissions, billing/limits, notifications, and non-functional requirements",
      "Finalize mockups and share the design link",
      "Decompose the scope into a backlog for planning",
      "Working review with roles (align, not a gate) — formal Go/No-Go happens at approval",
    ],
    result: ["Full specification", "Figma handoff", "Backlog"],
    involved: [
      {
        participantId: "pm",
        does: [
          "Stories and acceptance criteria",
          "Assembles the specification and backlog",
        ],
      },
      {
        participantId: "designer",
        does: [
          "Final mockups and scenarios",
          "Figma link and handoff",
        ],
      },
      {
        participantId: "architect",
        does: [
          "API, data models, edge cases",
          "Technical requirements",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Spec of data inputs/outputs and calculations",
          "Data and metric quality criteria",
        ],
      },
      {
        participantId: "qa",
        does: [
          "Input on test scenarios",
          "Review of acceptance criteria",
        ],
      },
    ],
    driParticipantId: "pm",
    exitCriteria: [
      "Spec + Figma + backlog cover must-have MVP",
      "Acceptance criteria are testable",
      "Working role review is done (not the formal Go yet)",
    ],
    appliesToLevels: ["L2", "L3"],
  },
  {
    id: "planning",
    number: 6,
    title: "Planning and estimation",
    subtitle: "Engineering commitment: cost, dependencies, risks, MVP cut",
    color: "bg-pink-600",
    colorSoft:
      "bg-pink-50 text-pink-800 border-pink-200 dark:bg-pink-950/40 dark:text-pink-200 dark:border-pink-900",
    whatWeDo: [
      "Estimate stories in story points and distribute them across sprints",
      "Build a plan with dependencies: what comes after what and who owns it",
      "Cross-check with the platform: what already exists, what blocks (billing, layers, notifications)",
      "Define workarounds for external blockers so the MVP doesn't wait on everything",
      "Calculate capacity, risks, and the critical path to the demo/pilot",
    ],
    result: ["Work plan (Jira / Linear)", "Estimate and risks"],
    involved: [
      {
        participantId: "pm",
        does: [
          "Sprint priorities and scope",
          "Decisions on blockers and workarounds",
        ],
      },
      {
        participantId: "tech-lead",
        does: [
          "Decomposition, estimates, Gantt dependencies",
          "Critical path and technical risks",
        ],
      },
      {
        participantId: "developers",
        does: [
          "Task estimation",
          "Clarifying scope and code dependencies",
        ],
      },
      {
        participantId: "qa",
        does: [
          "Estimates testing workload",
          "Input on quality and regression risks",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Estimates data/prerequisite work",
          "Layer and methodology status as plan blockers",
        ],
      },
      {
        participantId: "designer",
        does: [
          "Confirms handoff readiness for sprints",
          "Buffer for state revisions after estimation",
        ],
      },
    ],
    driParticipantId: "tech-lead",
    exitCriteria: [
      "Estimate, capacity, dependencies, and critical path exist",
      "Platform blockers and workarounds are named",
      "Engineering commitment: what MVP truly includes (not a date promise to business)",
    ],
    appliesToLevels: ["L1", "L2", "L3"],
  },
  {
    id: "approval",
    number: 7,
    title: "Approval",
    subtitle: "Investment Go/No-Go: value, risks, resources — not a re-estimate",
    color: "bg-teal-600",
    colorSoft:
      "bg-teal-50 text-teal-800 border-teal-200 dark:bg-teal-950/40 dark:text-teal-200 dark:border-teal-900",
    whatWeDo: [
      "Assemble the gate package: specification, Figma, backlog, plan, estimate, and risks",
      "Review with the architect, tech lead, and data team: model → pipeline → UI/backend",
      "Align with the business on scope, pilot value, and deliberate workarounds (billing, PRE-2)",
      "Lightweight security / legal check: pilot data, disclaimer of the €/ha methodology",
      "Record Go/No-Go, MVP conditions, version freeze, and signatures in one decision record",
    ],
    result: ["Final decision (Go + freeze)"],
    involved: [
      {
        participantId: "pm",
        does: [
          "Runs the gate and agenda",
          "Records the decision, conditions, and open questions",
        ],
      },
      {
        participantId: "business",
        does: [
          "Approves scope and pilot value",
          "Accepts workarounds (soft limit, season without weather data)",
        ],
      },
      {
        participantId: "architect",
        does: [
          "Technical review of architecture and contracts",
          "Confirms that platform blockers are accounted for",
        ],
      },
      {
        participantId: "tech-lead",
        does: [
          "Confirms estimates, plan, and capacity",
          "Team readiness for Sprint 1 (model)",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Confirms model/pipeline readiness to start MD-*",
          "Loss methodology disclaimer and PRE status",
        ],
      },
    ],
    driParticipantId: "pm",
    exitCriteria: [
      "Go / No-Go / Go with conditions is recorded",
      "Package freeze and signatures are captured",
      "Investment decision: value, risks, and resources are acceptable",
    ],
    appliesToLevels: ["L2", "L3"],
  },
  {
    id: "handoff",
    number: 8,
    title: "Handoff to the team",
    subtitle: "Tasks in the tracker and technical briefing",
    color: "bg-blue-800",
    colorSoft:
      "bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-950/40 dark:text-blue-200 dark:border-blue-900",
    whatWeDo: [
      "Publish the freeze-pack tasks in Linear (draft → published)",
      "Hold a technical briefing: spec, Figma, contracts, pilot DoD",
      "Assign ownership and answer the team's questions",
    ],
    result: ["Handoff brief (Linear + briefing)"],
    involved: [
      {
        participantId: "pm",
        does: [
          "Publishes tasks and context",
          "Answers questions about value",
        ],
      },
      {
        participantId: "tech-lead",
        does: [
          "Technical briefing",
          "Assigns task ownership",
        ],
      },
      {
        participantId: "developers",
        does: [
          "Read the specification and mockups",
          "Clarify unclear points",
        ],
      },
      {
        participantId: "designer",
        does: [
          "Hands over mockups and guidelines",
          "Answers UX questions",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Hand over data specs and methodologies",
          "Answer questions about calculations and metrics",
        ],
      },
    ],
    driParticipantId: "tech-lead",
    exitCriteria: [
      "Tasks are published in the tracker with ownership",
      "Team completed briefing and knows DoR / DoD",
      "Freeze-pack links are available",
    ],
    appliesToLevels: ["L1", "L2", "L3"],
  },
  {
    id: "development",
    number: 9,
    title: "Development and testing",
    subtitle: "Implementation, QA, and operational readiness before release",
    color: "bg-indigo-600",
    colorSoft:
      "bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-200 dark:border-indigo-900",
    whatWeDo: [
      "Implement the feature per the specification and DoD",
      "Perform code review and write automated tests",
      "Run QA (engineering tests — not prototype validation) and fix bugs",
      "Close operational readiness: monitoring/alerts, feature flags, rollback, migrations, security light-check",
    ],
    result: ["QA report / release readiness"],
    involved: [
      {
        participantId: "developers",
        does: [
          "Implementation per the specification",
          "Code review and automated tests",
        ],
      },
      {
        participantId: "qa",
        does: [
          "Test cases and verification",
          "Bugs and regressions",
        ],
      },
      {
        participantId: "tech-lead",
        does: [
          "Review and quality",
          "Unblocking the team",
        ],
      },
      {
        participantId: "pm",
        does: [
          "Requirements clarification",
          "Acceptance against criteria",
        ],
      },
      {
        participantId: "data-analysts",
        does: [
          "Implementation of data / model parts",
          "Quality check of calculations and metrics",
        ],
      },
    ],
    driParticipantId: "tech-lead",
    exitCriteria: [
      "Code meets DoD; review and automated tests are green on the critical path",
      "QA has no P0 blockers",
      "Operational readiness: monitoring/alerts, flags, rollback, migrations — checked or explicitly N/A",
    ],
    appliesToLevels: ["L1", "L2", "L3"],
  },
  {
    id: "release",
    number: 10,
    title: "Release and analytics",
    subtitle: "Deploy + Impact: not the end — the start of the next cycle",
    color: "bg-green-700",
    colorSoft:
      "bg-green-50 text-green-800 border-green-200 dark:bg-green-950/40 dark:text-green-200 dark:border-green-900",
    whatWeDo: [
      "Deploy and enable the feature (pilot/rollout), smoke tests, and error monitoring",
      "Check success metrics from the business case; metrics owner is PM (+ business)",
      "Record the Impact decision: Scale / Iterate / Pivot / Sunset and next iteration",
    ],
    result: ["Release and metrics report"],
    involved: [
      {
        participantId: "devops",
        does: [
          "Deployment and infrastructure",
          "Monitoring and alerts",
        ],
      },
      {
        participantId: "pm",
        does: [
          "Tracks success metrics",
          "Collects feedback and next steps",
        ],
      },
      {
        participantId: "developers",
        does: [
          "Release support",
          "Hotfixes when needed",
        ],
      },
      {
        participantId: "business",
        does: [
          "Evaluates business impact",
          "Gives feedback from the market",
        ],
      },
    ],
    driParticipantId: "pm",
    exitCriteria: [
      "Feature is in the target surface (pilot/prod) with monitoring",
      "Business-case metrics are measured or collecting; metrics owner is named",
      "Impact decision is recorded: Scale / Iterate / Pivot / Sunset",
    ],
    appliesToLevels: ["L1", "L2", "L3"],
  },
]

export const artifacts: Artifact[] = [
  {
    id: "business-case",
    title: "Business case and goals",
    description: "Value hypothesis, success metrics, and problem statement.",
    fromStepId: "problem",
  },
  {
    id: "research-report",
    title: "Research report",
    description:
      "Discovery readout: users, competitors, product and technical audit, insights.",
    fromStepId: "research",
  },
  {
    id: "hlr",
    title: "High-level requirements",
    description:
      "What goes into the concept: must-have needs, boundaries, open questions.",
    fromStepId: "research",
  },
  {
    id: "solution-concept",
    title: "Solution concept",
    description:
      "The chosen product option: UX scenario, scope, and trade-offs.",
    fromStepId: "concept",
  },
  {
    id: "architecture",
    title: "Architecture diagram",
    description:
      "High-level components, sequence, and illustrative I/O; formal APIs belong in the full spec.",
    fromStepId: "concept",
  },
  {
    id: "ui-prototype",
    title: "UI/UX prototype",
    description: "Clickable prototype of the key scenario and screen surfaces.",
    fromStepId: "prototype",
  },
  {
    id: "validation-results",
    title: "Validation results",
    description:
      "Validation readout: users and tech spike before the full spec (not QA).",
    fromStepId: "prototype",
  },
  {
    id: "full-spec",
    title: "Full specification",
    description:
      "Specification: stories, acceptance criteria, API, data, edge cases.",
    fromStepId: "spec",
  },
  {
    id: "figma-handoff",
    title: "Figma handoff",
    description: "Final mockups and design handoff for development.",
    fromStepId: "spec",
  },
  {
    id: "backlog",
    title: "Backlog",
    description: "Epic and stories ready for estimation and planning.",
    fromStepId: "spec",
  },
  {
    id: "work-plan",
    title: "Work plan (Jira / Linear)",
    description:
      "Schedule with dependencies, owners, and an excerpt of the platform plan.",
    fromStepId: "planning",
  },
  {
    id: "estimate-risks",
    title: "Estimate and risks",
    description:
      "Story points, capacity, critical path, blockers, and workarounds.",
    fromStepId: "planning",
  },
  {
    id: "final-decision",
    title: "Final decision (Go + freeze)",
    description:
      "Go/No-Go, MVP conditions, document version freeze, and signature matrix.",
    fromStepId: "approval",
  },
  {
    id: "handoff-brief",
    title: "Handoff brief",
    description:
      "Published Linear tasks, freeze-pack links, and the tech briefing.",
    fromStepId: "handoff",
  },
  {
    id: "qa-report",
    title: "QA report",
    description: "Test coverage, blockers, and release readiness.",
    fromStepId: "development",
  },
  {
    id: "release-report",
    title: "Release report",
    description: "Deploy, pilot metrics, and next iteration plan.",
    fromStepId: "release",
  },
]

export const participants: Participant[] = [
  {
    id: "pm",
    title: "Product Manager",
    responsibilities: [
      "Product vision",
      "Prioritization",
      "Business liaison",
      "Success metrics",
    ],
  },
  {
    id: "designer",
    title: "UX/UI Designer",
    responsibilities: [
      "Research",
      "Prototypes and mockups",
      "Design system",
      "User scenarios",
    ],
  },
  {
    id: "architect",
    title: "Architect",
    responsibilities: [
      "Architecture",
      "Technical decisions",
      "System quality",
      "Trade-offs and risks",
    ],
  },
  {
    id: "data-analysts",
    title: "Data Analysts / Models",
    responsibilities: [
      "Models and calculation methodologies",
      "Data and layer quality",
      "Results validation",
      "Assumptions documentation",
    ],
  },
  {
    id: "tech-lead",
    title: "Tech Lead / Team Lead",
    responsibilities: [
      "Task estimation",
      "Team coordination",
      "Code review",
      "Technical briefing",
    ],
  },
  {
    id: "developers",
    title: "Developers",
    responsibilities: [
      "Implementation",
      "Code review",
      "Tests",
      "Code documentation",
    ],
  },
  {
    id: "qa",
    title: "QA / Tester",
    responsibilities: [
      "Test cases",
      "Quality assurance",
      "Bugs and regressions",
      "Acceptance criteria",
    ],
  },
  {
    id: "devops",
    title: "DevOps / SRE",
    responsibilities: [
      "Deployment",
      "Infrastructure",
      "Monitoring",
      "CI/CD and reliability",
    ],
  },
  {
    id: "business",
    title: "Business / Stakeholders",
    responsibilities: [
      "Approval",
      "Prioritization",
      "Metrics and KPIs",
      "Feedback",
    ],
  },
]

export const principles: Principle[] = [
  {
    id: "user",
    title: "User focus",
    description: "Real problems and real metrics, not wishlist items.",
  },
  {
    id: "data",
    title: "Data and analytics",
    description: "Decisions are based on facts, research, and numbers.",
  },
  {
    id: "transparency",
    title: "Transparency and communication",
    description: "Everyone sees the context, status, and reasons behind decisions.",
  },
  {
    id: "iteration",
    title: "Iteration",
    description: "Quick validation, MVPs, and continuous improvement.",
  },
  {
    id: "quality",
    title: "Quality",
    description: "Tests, reviews, security, and a clear Definition of Done.",
  },
  {
    id: "automation",
    title: "Automation",
    description: "CI/CD, monitoring, and DevOps as part of the process.",
  },
  {
    id: "priority",
    title: "Honest priorities",
    description: "Higher value means higher in the backlog. Focus on what matters.",
  },
]

export function getStepById(id: string) {
  return processSteps.find((step) => step.id === id)
}

export function getParticipantById(id: string) {
  return participants.find((participant) => participant.id === id)
}

export function getStepNeighbors(id: string) {
  const index = processSteps.findIndex((step) => step.id === id)
  if (index === -1) return { prev: undefined, next: undefined }
  return {
    prev: processSteps[index - 1],
    next: processSteps[index + 1],
  }
}
