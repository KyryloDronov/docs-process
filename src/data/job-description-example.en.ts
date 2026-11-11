/** Big Tech–style job description example: Mid Frontend */

export const midFrontendJobDescriptionEn = {
  id: "jd-frontend-mid",
  title: "Job description",
  role: "Frontend Engineer",
  level: "Mid (L4 / IC3)",
  team: "Forest Platform · Client Applications",
  company: "Symbiose",
  reportsTo: "Tech Lead · Client Applications",
  location: "Hybrid · Paris / remote EU",
  status: "Active",
  version: "v1.2",
  updatedAt: "2026-03-01",
  owner: "People Partner + Tech Lead (document owners)",
  mission:
    "Build a reliable, clear, and fast client experience for the forest monitoring platform: maps, scenarios, reports, and analyst workspaces. A Mid Frontend owns UI features end-to-end — from design/spec to production — without waiting for the Tech Lead to design every detail.",
  outcomes: [
    "The user scenario ships in production against acceptance criteria and team DoD",
    "UI is predictable in error/empty/loading states; no silent breaks on the critical path",
    "Changes include tests, review, and a clear rollout (flag / phased when risky)",
    "Tech debt in the owned area does not grow unnoticed: it is logged and planned",
  ],
  responsibilities: [
    {
      title: "Feature delivery",
      items: [
        "Implements UI from Figma handoff + full spec: stories, states, edge cases",
        "Clarifies ambiguity with Design / PM / Backend before mid-sprint, not on the last day",
        "Writes maintainable code: components, hooks, routes, client API contracts",
        "Takes work to Done: review, QA fixes, post-release watch for their area",
      ],
    },
    {
      title: "Quality and engineering",
      items: [
        "Covers the critical path with unit/integration or e2e as agreed by the team",
        "Owns baseline a11y, map/list performance, and bundle hygiene in their changes",
        "Does code review: blocks clear regressions, suggests simpler — not “rewrite everything”",
        "Reproduces and fixes bugs in their area; escalates cross-team blockers to the Tech Lead",
      ],
    },
    {
      title: "Product partnership",
      items: [
        "Gives UI feasibility feedback in concept/prototype",
        "Checks that acceptance criteria are testable in the interface during detailed design",
        "At handoff, understands task ownership and dependencies (billing, notify, reports)",
        "After release, watches metrics/errors for their feature and proposes next iteration",
      ],
    },
  ],
  decisionRights: [
    "Implementation choices inside the agreed design and frontend architecture (patterns, file structure, local state)",
    "Reject a merge that breaks DoD, tests, or clearly regresses the critical UX path",
    "Propose scope simplification at estimation if UI risk breaks the sprint — escalate to PM + Tech Lead",
    "Toggle their feature flag per runbook (when access is granted)",
  ],
  notResponsible: [
    "Final product scope and priority (PM)",
    "Visual system and final mocks (Design) — Mid influences, does not approve brand",
    "Backend/API contracts as source of truth (Backend / Architect) — Mid consumes and flags gaps",
    "Production infra, platform CI, clusters (DevOps) — Mid owns client code and client-side error monitoring",
    "Hiring and performance reviews of other engineers (Tech Lead / Manager)",
  ],
  collaborators: [
    {
      role: "Product Manager",
      how: "Clarifies acceptance, scope trade-offs, demos, bug vs enhancement",
    },
    {
      role: "Design",
      how: "Handoff, states, a11y/UX questions; escalates spec ↔ mock mismatches",
    },
    {
      role: "Backend / Architect",
      how: "API contracts, errors, pagination, payload perf; joint spikes",
    },
    {
      role: "QA",
      how: "Critical path, regressions, reproduce; does not dump all testing onto QA",
    },
    {
      role: "Tech Lead",
      how: "Standards, hard trade-offs, cross-team blockers, leveling",
    },
  ],
  competencies: [
    {
      area: "Frontend craft",
      level: "Solid mid",
      expect:
        "React/TypeScript, state, forms, routing, API work, baseline perf and a11y. Can read an unfamiliar module and extend it safely.",
    },
    {
      area: "Product sense",
      level: "Sufficient",
      expect:
        "Reads the spec and mocks as a contract. Understands happy path and failures. Does not ship “easier for the coder” if it breaks the user scenario.",
    },
    {
      area: "Ownership",
      level: "Expected",
      expect:
        "Carries the feature to production. Does not stop at “code in PR”. Surfaces blockers proactively.",
    },
    {
      area: "Communication",
      level: "Expected",
      expect:
        "Clear PRs, status, and risks. Argues with reasons, not rank. Documents non-standard decisions briefly.",
    },
  ],
  successMetrics: [
    "Timely delivery of owned stories without hidden “90% done”",
    "Low reopen rate on bugs in their area after QA / pilot",
    "Review quality: useful comments without toxic nitpicking",
    "Predictability: mid-level estimates land within team norms",
    "Growth: over 2–3 quarters, clear movement toward Senior (broader system, fewer escalations)",
  ],
  ladder: {
    vsJunior: [
      "Junior needs task slicing and frequent solution review; Mid slices work and proposes the approach",
      "Junior closes screen pieces; Mid closes a full scenario with states and integration",
    ],
    vsSenior: [
      "Senior sets frontend standards, leads hard cross-team initiatives, and unloads the Tech Lead",
      "Mid executes and improves in their area; Senior shapes client-layer architecture and mentors",
    ],
  },
  processTouchpoints: [
    {
      stage: "Concept / prototype",
      does: "UI feasibility, complexity risks, sanity on states",
    },
    {
      stage: "Detailed design",
      does: "Checks acceptance and edge cases for UI implementability",
    },
    {
      stage: "Planning",
      does: "Estimates FE stories and API/design dependencies",
    },
    {
      stage: "Handoff → build",
      does: "Owns tasks, implements, reviews, partners with QA",
    },
    {
      stage: "Release and analytics",
      does: "Supports their feature release, watches client errors, ships fixes",
    },
  ],
  onboarding: [
    {
      window: "30 days",
      focus:
        "Environment, design system, UI domain map, first small bugfix/PR in production",
    },
    {
      window: "60 days",
      focus:
        "Independent mid-size story in the current epic; confident review of peer PRs",
    },
    {
      window: "90 days",
      focus:
        "End-to-end ownership of a sprint feature: from spec clarification to release and follow-up",
    },
  ],
  reviewCadence:
    "1:1 with Tech Lead every 1–2 weeks; formal performance cycle per company policy; JD reviewed on level change or product-area change.",
}
