/**
 * Artifact templates by process step (English).
 * The example in the "Result" dialog is a filled-in case;
 * the template below is the structural rule it should follow.
 */

import type { ArtifactTemplate } from "./artifact-templates"

export type {
  ArtifactTemplate,
  ArtifactTemplateSection,
} from "./artifact-templates"

export const artifactTemplates: ArtifactTemplate[] = [
  {
    id: "business-case",
    title: "Business case / hypothesis",
    stepId: "problem",
    summary:
      "The single stage 1 document: why the task matters, for whom, the value hypothesis, and how we will know it worked. The problem statement lives inside the case — no separate document needed.",
    owner: "Business (draft) + Product (refinement and sign-off)",
    whenReady: [
      "The problem and the current state are described without jumping to a solution in a vacuum",
      "User segments and their needs are identified",
      "The goal, hypothesis, and value are stated explicitly",
      "There are 2–4 measurable success metrics",
      "It is recorded what the business is asking for (must-have / nice-to-have) and what the next step is for Product",
    ],
    sections: [
      {
        title: "Metadata",
        purpose: "Make clear who is handing off the task and who it is addressed to.",
        owners: ["Business"],
        include: [
          "Initiative name",
          "Status and version (draft / approved)",
          "Author, role, team",
          "Date and recipients (usually Product)",
        ],
      },
      {
        title: "Context",
        purpose: "Connect the current product with the new request.",
        owners: ["Business"],
        include: [
          "What already exists in the product",
          "What new scenario / functionality is requested",
          "What interface the business has in mind (if any)",
        ],
      },
      {
        title: "Problem",
        purpose: "Capture the pain and the current process — without jumping straight to a solution.",
        owners: ["Business", "Product"],
        include: [
          "A short problem statement",
          "How it is solved / worked around today",
          "2–4 specific pain points",
        ],
      },
      {
        title: "Target audience",
        purpose: "Don't write \"for everyone\" — name the segments.",
        owners: ["Business", "Product"],
        include: [
          "User segment",
          "Need in one sentence",
        ],
      },
      {
        title: "Goal and hypothesis",
        purpose: "Link the solution to value and test the \"if → then\" logic.",
        owners: ["Business", "Product"],
        include: [
          "Goal: what the user / product should be able to do",
          "Hypothesis: if X → metric Y, because Z",
          "Value for users and for the business",
        ],
      },
      {
        title: "How we will measure success",
        purpose: "Make the stage measurable before moving on.",
        owners: ["Business", "Product"],
        include: [
          "Metric name",
          "Target benchmark",
          "2–4 metrics, no wishlist",
        ],
      },
      {
        title: "What is needed",
        purpose: "Record the business request as the business hears it — not a full spec.",
        owners: ["Business"],
        include: [
          "Must-have",
          "Nice-to-have",
          "No API, tech stack, or full list of screens",
        ],
      },
      {
        title: "Request to Product",
        purpose: "Explicitly hand over ownership of the next step.",
        owners: ["Business"],
        include: [
          "What to do next (discovery / concept)",
          "What outcome the business needs",
        ],
      },
      {
        title: "Discovery team",
        purpose: "Staff the discovery squad by problem type before research starts.",
        owners: ["Product"],
        include: [
          "Problem type",
          "Who decides and when",
          "Who joins discovery and why",
          "Who stays out for now (delivery / QA)",
        ],
      },
    ],
  },
  {
    id: "research-report",
    title: "Research report",
    stepId: "research",
    summary:
      "A breakdown of the research: facts about users, the market, and the current product. This is an evidence document — not an interface choice and not a full spec.",
    owner: "Product leads; Design / Architecture / Business provide inputs",
    whenReady: [
      "There is a user synthesis with quotes / evidence",
      "Competitors and market position are documented",
      "The product audit shows what exists and what is missing (including forgotten modules)",
      "Data readiness for the model is assessed: ready / needs work / must be added",
      "Technical constraints and risks are named",
      "There is a recommendation on what to carry into the high-level requirements",
    ],
    sections: [
      {
        title: "Metadata and source",
        purpose: "Link the report to the business case and the readout audience.",
        owners: ["Product"],
        include: [
          "Version, date, author",
          "Link to the business case",
          "Who the readout is for",
        ],
      },
      {
        title: "Executive summary",
        purpose: "Give the conclusion in 30 seconds before the details.",
        owners: ["Product"],
        include: [
          "Main conclusion",
          "What was confirmed / what turned out broader than requested",
          "Main risk",
        ],
      },
      {
        title: "Methods",
        purpose: "Show what the conclusion is based on.",
        owners: ["Product", "Design"],
        include: [
          "Interviews / count and segments",
          "Competitive analysis",
          "Product audit and technical sync",
        ],
      },
      {
        title: "Users",
        purpose: "Capture user jobs and pain points by segment.",
        owners: ["Design", "Product"],
        include: [
          "Segment",
          "Finding",
          "Quote or evidence",
        ],
      },
      {
        title: "Competitors and market",
        purpose: "Understand what is already on offer and where our window is.",
        owners: ["Product", "Business"],
        include: [
          "Who is on the market",
          "Strengths / weaknesses",
          "Takeaway for us",
        ],
      },
      {
        title: "Product audit",
        purpose: "Check the business request against what the platform already has.",
        owners: ["Product", "Architecture"],
        include: [
          "What already exists",
          "What is missing",
          "What the business did not mention but customers need",
        ],
      },
      {
        title: "Data readiness for the model",
        purpose:
          "Before design, understand which layers are ready, what needs work, and what to do in advance.",
        owners: ["Data Analysts", "Architecture"],
        include: [
          "Layer / source",
          "What the model needs it for",
          "Status: ready / needs work / must be added",
          "Action and owner",
        ],
      },
      {
        title: "Technical findings",
        purpose: "Constraints to know before choosing a concept.",
        owners: ["Architecture", "Data Analysts"],
        include: [
          "Feasibility",
          "Data / models and integrity of the calculation",
          "Performance and access rights",
        ],
      },
      {
        title: "Insights, risks, recommendation",
        purpose: "A synthesis for deciding what goes into the high-level requirements.",
        owners: ["Product"],
        include: [
          "3–5 insights",
          "Risks",
          "Recommendation for the next artifact",
        ],
      },
    ],
  },
  {
    id: "hlr",
    title: "High-level requirements",
    stepId: "research",
    summary:
      "The decision document after research: what must be solved in the concept, what is out of scope, and which questions are still open. This is not a detailed spec.",
    owner: "Product; Architecture and Design confirm the wording is feasible",
    whenReady: [
      "The problem statement and primary persona are documented",
      "Must-have requirements are numbered and verifiable",
      "Out of scope is named explicitly",
      "Open questions are not hidden inside must-haves",
      "The next step (concept) is clear",
    ],
    sections: [
      {
        title: "Metadata and basis",
        purpose: "Show which research the document grew out of.",
        owners: ["Product"],
        include: [
          "Version and transition status",
          "Link to the research report",
          "Approval audience",
        ],
      },
      {
        title: "Problem statement",
        purpose: "One clear problem we are solving.",
        owners: ["Product"],
        include: [
          "Problem statement",
          "Primary / secondary persona",
        ],
      },
      {
        title: "Expected outcomes",
        purpose: "The result the user / business will see.",
        owners: ["Product", "Business"],
        include: [
          "2–4 measurable / observable outcomes",
        ],
      },
      {
        title: "Must-have requirements",
        purpose: "Mandatory scope for the concept and the further spec.",
        owners: ["Product"],
        include: [
          "Requirement ID",
          "Short statement of the need",
          "No interface details or API schemas",
        ],
      },
      {
        title: "Nice-to-have",
        purpose: "Important, but not a blocker for the first pass.",
        owners: ["Product"],
        include: [
          "A short list without scope creep",
        ],
      },
      {
        title: "Out of scope",
        purpose: "Protect the team from late additions made without a decision.",
        owners: ["Product", "Business"],
        include: [
          "What we are deliberately not doing now",
          "Why (briefly, if needed)",
        ],
      },
      {
        title: "Prerequisites and model output for the UI",
        purpose: "Before design, fix data dependencies and the meaning of fields on screens.",
        owners: ["Data Analysts", "Product", "Architecture"],
        include: [
          "Prerequisite work on layers / APIs",
          "What the model returns to the map / panel / report",
        ],
      },
      {
        title: "Open questions",
        purpose: "Don't disguise the unknown as a requirement.",
        owners: ["Product", "Architecture", "Data Analysts"],
        include: [
          "Billing / limits / permissions",
          "Who must answer before or during the concept",
        ],
      },
      {
        title: "Success metrics and next step",
        purpose: "Connect the requirements to business metrics and to stage 3.",
        owners: ["Product"],
        include: [
          "Success metrics",
          "Explicit transition to the concept / architecture",
        ],
      },
    ],
  },
  {
    id: "solution-concept",
    title: "Solution concept",
    stepId: "concept",
    summary:
      "Choosing the solution: options, processes, business rules, a UI brief based on the model output, and semantic I/O examples. Not a full spec.",
    owner: "Product leads; Design, Architecture, and Data Analysts provide options and constraints",
    whenReady: [
      "At least 2 options considered with pros and cons",
      "The chosen option is named explicitly and justified",
      "There is an as-is / to-be, a user flow, and a business process including failures",
      "Key surfaces and the model field brief are named",
      "There are examples of the semantic I/O contract",
      "\"Not doing\" items and trade-offs are recorded",
    ],
    sections: [
      {
        title: "Metadata and basis",
        purpose: "Link the concept to the requirements and the research.",
        owners: ["Product"],
        include: ["Version and status", "Links to requirements / report", "Audience"],
      },
      {
        title: "Summary",
        purpose: "State the chosen solution in one paragraph.",
        owners: ["Product"],
        include: ["What we are building", "For whom", "Main constraint / principle"],
      },
      {
        title: "Options and decision",
        purpose: "Show that the choice was deliberate, not just the one \"obvious\" option.",
        owners: ["Product", "Design", "Architecture"],
        include: ["2–3 options", "Pros / cons", "The choice and why"],
      },
      {
        title: "Flows and business rules",
        purpose: "Happy path plus limits, errors, and notifications before the detailed spec.",
        owners: ["Product", "Design"],
        include: [
          "User flow",
          "Business process diagram",
          "Rules for credits / limits / rejections",
        ],
      },
      {
        title: "Surfaces and model brief",
        purpose: "Connect the UI to the model output fields.",
        owners: ["Design", "Data Analysts", "Product"],
        include: ["Screens / panels", "Which model fields we show where"],
      },
      {
        title: "Semantic I/O contract",
        purpose: "JSON input/output examples before the formal OpenAPI.",
        owners: ["Data Analysts", "Architecture"],
        include: ["Model input", "Fire output", "Loss output"],
      },
      {
        title: "Trade-offs and \"not doing\"",
        purpose: "Protect the scope before the prototype and the spec.",
        owners: ["Product", "Tech Lead"],
        include: ["Key trade-offs", "What we are deliberately not doing"],
      },
    ],
  },
  {
    id: "architecture",
    title: "Architecture diagram",
    stepId: "concept",
    summary:
      "The high-level structure of the chosen concept: component diagram, sequence of operations, data contracts, risks. No low-level design of every API.",
    owner: "Architecture leads; Data Analysts and Tech Lead confirm data and delivery",
    whenReady: [
      "There is a component diagram (current vs new)",
      "There is an end-to-end sequence of operations",
      "Contracts for key data are described",
      "Risks and mitigations are recorded",
      "The next step (prototype / spike) is clear",
    ],
    sections: [
      {
        title: "Metadata and basis",
        purpose: "Tie the diagram to the chosen concept.",
        owners: ["Architecture"],
        include: ["Version", "Link to the solution concept", "Audience"],
      },
      {
        title: "Summary and principles",
        purpose: "Set the rules by which we assemble the system.",
        owners: ["Architecture"],
        include: ["Short overview", "3–5 architectural principles"],
      },
      {
        title: "Component diagram",
        purpose: "Show the building blocks of the system and what we reuse.",
        owners: ["Architecture", "Tech Lead"],
        include: [
          "Current vs new",
          "Connections between components",
          "Short list of responsibilities",
        ],
      },
      {
        title: "Sequence of operations",
        purpose: "How the scenario runs from the interface to the result.",
        owners: ["Architecture"],
        include: [
          "Sequence diagram or equivalent",
          "Main path",
        ],
      },
      {
        title: "Data contracts and entities",
        purpose: "JSON examples between services + a sketch of storage entities.",
        owners: ["Architecture", "Data Analysts"],
        include: [
          "Payload examples",
          "Entity sketch (not migrations yet)",
          "Methodology versioning",
        ],
      },
      {
        title: "Risks and open questions",
        purpose: "Don't silently carry the unknown into the prototype.",
        owners: ["Architecture", "Data Analysts", "DevOps"],
        include: ["Risk + how we mitigate it", "Open technical questions"],
      },
    ],
  },
  {
    id: "ui-prototype",
    title: "UI/UX prototype",
    stepId: "prototype",
    summary:
      "A clickable prototype of the key scenario to validate value before the full spec. Not final mockups and not production code.",
    owner: "Design leads; Product sets the criteria; Tech Lead and Data provide constraints",
    whenReady: [
      "There is a clickable prototype of the main path",
      "Screens and error states are named",
      "The prototype scope (in / out) is documented",
      "The prototype link is available to the team",
      "It is clear exactly what the tests will validate",
    ],
    sections: [
      {
        title: "Metadata and basis",
        purpose: "Link the prototype to the concept and the architecture.",
        owners: ["Design", "Product"],
        include: ["Version", "Links to the concept / diagram", "Audience"],
      },
      {
        title: "Summary and goals",
        purpose: "Why this prototype exists and what counts as a successful validation.",
        owners: ["Product", "Design"],
        include: ["Short description", "2–4 validation goals"],
      },
      {
        title: "Link and tool",
        purpose: "Where to view the prototype.",
        owners: ["Design"],
        include: ["Tool", "Link", "What is clickable"],
      },
      {
        title: "Flow and screens",
        purpose: "Show the main path and the key surfaces.",
        owners: ["Design"],
        include: [
          "Flow diagram",
          "List of screens",
          "Critical error states",
        ],
      },
      {
        title: "Prototype scope",
        purpose: "Don't mix value validation with the full release scope.",
        owners: ["Design", "Product"],
        include: ["What is in the prototype", "What was deliberately left out"],
      },
      {
        title: "Assumptions and tech notes",
        purpose: "Be honest about what was faked / simplified for the test.",
        owners: ["Design", "Tech Lead", "Data Analysts"],
        include: ["Data and number assumptions", "Spike notes"],
      },
    ],
  },
  {
    id: "validation-results",
    title: "Validation results",
    stepId: "prototype",
    summary:
      "A validation report: criteria, facts, findings, tech spike, and the decision — move to the spec, iterate, or stop.",
    owner: "Design and Product together; Tech Lead closes the spike",
    whenReady: [
      "The method and participant mix are stated",
      "Success criteria have an actual result of pass / fail",
      "Findings come with actions to take before the spec",
      "The technical check is recorded",
      "An explicit decision and a list of changes",
    ],
    sections: [
      {
        title: "Metadata and basis",
        purpose: "Tie the report to a prototype version.",
        owners: ["Design", "Product"],
        include: ["Report version", "Link to the prototype", "Co-authors"],
      },
      {
        title: "Summary",
        purpose: "The conclusion in 30 seconds.",
        owners: ["Product", "Design"],
        include: ["Main conclusion", "Go ahead or not"],
      },
      {
        title: "Method",
        purpose: "Show what the conclusion is based on.",
        owners: ["Design"],
        include: ["Participants", "Test format", "Technical check"],
      },
      {
        title: "Success criteria",
        purpose: "Compare the target with the actual result — no \"we liked it\".",
        owners: ["Product", "Design"],
        include: ["Criterion", "Target", "Actual", "Pass / fail"],
      },
      {
        title: "Findings and quotes",
        purpose: "Turn observations into actions.",
        owners: ["Design", "Product"],
        include: ["Finding", "What we are changing", "User quotes"],
      },
      {
        title: "Tech spike and decision",
        purpose: "Close out feasibility and record the next step.",
        owners: ["Tech Lead", "Product"],
        include: [
          "Spike outcome and risks",
          "Verdict",
          "Changes before detailed elaboration",
        ],
      },
    ],
  },
  {
    id: "full-spec",
    title: "Full specification",
    stepId: "spec",
    summary:
      "The specification for development: stories, acceptance criteria, features, API, edge cases, analytics, and definition of ready. Reflects the prototype findings.",
    owner: "Product leads; Design, Architecture, Data, and QA contribute sections",
    whenReady: [
      "There are stories with acceptance criteria",
      "Functional and non-functional requirements are documented",
      "API / data and edge cases are described",
      "Out of scope and open questions are named",
      "There are links to Figma and the backlog",
    ],
    sections: [
      {
        title: "Metadata and links",
        purpose: "Tie the spec to the research, the concept, and the tests.",
        owners: ["Product"],
        include: ["Version", "Basis", "Links to Figma / backlog / architecture"],
      },
      {
        title: "Goals, metrics, personas",
        purpose: "Record why we are building this and for whom.",
        owners: ["Product"],
        include: ["Goals", "Success metrics", "Personas"],
      },
      {
        title: "Stories and acceptance criteria",
        purpose: "Make the requirements verifiable.",
        owners: ["Product", "QA"],
        include: ["User story", "Acceptance criteria"],
      },
      {
        title: "Features, NFRs, API, and schemas",
        purpose: "Give the team the technical outline of the implementation.",
        owners: ["Product", "Architecture", "Data Analysts"],
        include: [
          "Functional and non-functional requirements",
          "Endpoints: method, path, request/response examples",
          "Storage schemas / entities",
        ],
      },
      {
        title: "Edge cases and out of scope",
        purpose: "Close the gaps and protect the scope.",
        owners: ["Product", "QA", "Architecture"],
        include: [
          "Limits, credits, no-loss, errors, notifications",
          "Out of scope",
          "Event analytics",
        ],
      },
      {
        title: "Open questions and readiness",
        purpose: "Don't silently carry blockers into development.",
        owners: ["Product"],
        include: ["Open questions", "Document definition-of-ready criteria"],
      },
    ],
  },
  {
    id: "figma-handoff",
    title: "Figma handoff",
    stepId: "spec",
    summary:
      "Design handoff: final mockups and states for development and QA. Does not replace the spec.",
    owner: "Design",
    whenReady: [
      "There is a link to the handoff file",
      "The main flow and key states are drawn",
      "QA notes and deviations from the prototype are clear",
    ],
    sections: [
      {
        title: "Link and version",
        purpose: "A single source of mockups for the team.",
        owners: ["Design"],
        include: ["Link", "Handoff version", "Basis"],
      },
      {
        title: "Page contents",
        purpose: "What exactly to look at in the file.",
        owners: ["Design"],
        include: ["Flow", "States", "Key panels"],
      },
      {
        title: "Notes for the team",
        purpose: "Reduce misinterpretation during development.",
        owners: ["Design", "QA"],
        include: ["Design system", "Notes for QA"],
      },
    ],
  },
  {
    id: "backlog",
    title: "Backlog",
    stepId: "spec",
    summary:
      "Decomposition of the spec into an epic and stories for estimation. Story point estimates come at the next stage.",
    owner: "Product; Tech Lead helps with slicing",
    whenReady: [
      "There is an epic with a goal",
      "Stories cover the spec's must-haves",
      "There are links to US / FR",
      "It is clear that estimation will happen during planning",
    ],
    sections: [
      {
        title: "Epic",
        purpose: "A single frame for delivering the MVP.",
        owners: ["Product"],
        include: ["ID", "Title", "Goal"],
      },
      {
        title: "Stories",
        purpose: "Slicing for estimation and sprints.",
        owners: ["Product", "Tech Lead"],
        include: ["ID", "Title", "Links to requirements"],
      },
      {
        title: "Notes",
        purpose: "Dependencies and estimation rules.",
        owners: ["Product", "Tech Lead", "Data Analysts"],
        include: ["Dependencies", "What we estimate later"],
      },
    ],
  },
  {
    id: "work-plan",
    title: "Work plan (Jira / Linear)",
    stepId: "planning",
    summary:
      "The delivery schedule: sprints, a Gantt chart with dependencies, owners, and an excerpt from the platform plan (what is ready / what blocks / workaround).",
    owner: "Tech Lead leads; Product approves scope and decisions on blockers",
    whenReady: [
      "Stories are distributed across sprints with dates and owners",
      "There is a diagram with dependencies",
      "Platform dependencies and blockers are named with workarounds",
      "Planning decisions are recorded",
      "The next step (publishing to the tracker) is clear",
    ],
    sections: [
      {
        title: "Metadata and release goal",
        purpose: "Tie the plan to the spec / backlog and to the demo / pilot date.",
        owners: ["Product", "Tech Lead"],
        include: ["Version", "Board / epic", "Release goal"],
      },
      {
        title: "Sprints",
        purpose: "The delivery time frames.",
        owners: ["Product", "Tech Lead"],
        include: ["Sprint ID", "Dates", "Sprint goal"],
      },
      {
        title: "Platform snapshot",
        purpose: "Don't plan in a vacuum: what already exists and what blocks.",
        owners: ["Tech Lead", "Architecture", "Data Analysts"],
        include: [
          "Status: ready / in progress / not ready / partial",
          "What blocks",
          "Workaround for the MVP",
        ],
      },
      {
        title: "Gantt and tasks",
        purpose: "The order of work, dependencies, and areas of responsibility.",
        owners: ["Tech Lead", "Development", "QA"],
        include: [
          "Gantt chart",
          "ID / points / owner / sprint / dates",
          "Dependencies and platform blockers",
        ],
      },
      {
        title: "Planning decisions",
        purpose: "Record deliberate trade-offs (e.g. billing).",
        owners: ["Product", "Tech Lead"],
        include: ["What we are not waiting for", "What replaces it in the MVP"],
      },
    ],
  },
  {
    id: "estimate-risks",
    title: "Estimate and risks",
    stepId: "planning",
    summary:
      "Story points, capacity, critical path, and a risk register with mitigations. A document separate from the schedule itself.",
    owner: "Tech Lead; Product and QA confirm delivery risks",
    whenReady: [
      "All stories are estimated",
      "Capacity by role is clear",
      "The critical path is named",
      "Risks with severity and mitigation are filled in",
      "Open questions are not hidden",
    ],
    sections: [
      {
        title: "Method and total",
        purpose: "How we estimated and what scope we took on.",
        owners: ["Tech Lead"],
        include: ["Estimation method", "Total SP per sprint"],
      },
      {
        title: "Capacity",
        purpose: "Match the scope against the people available.",
        owners: ["Tech Lead", "Development", "QA"],
        include: ["Role", "People", "SP / sprint"],
      },
      {
        title: "Story estimates",
        purpose: "A transparent table of estimates.",
        owners: ["Tech Lead", "Development", "Data Analysts"],
        include: ["ID", "Points", "Confidence", "Note"],
      },
      {
        title: "Critical path and risks",
        purpose: "Show where the plan breaks.",
        owners: ["Tech Lead", "Product"],
        include: ["Dependency chains", "Risk / impact / mitigation / owner"],
      },
    ],
  },
  {
    id: "final-decision",
    title: "Final decision (Go + freeze)",
    stepId: "approval",
    summary:
      "The Go/No-Go gate minutes: what we are approving, who voted, which conditions and workarounds were accepted, and what stays out of scope until the pilot.",
    owner: "PM leads; Business and the tech side confirm",
    whenReady: [
      "There is an explicit decision: Go / No-Go / Go with conditions",
      "Conditions and accepted workarounds are listed",
      "Votes of key roles are recorded",
      "The next step (handoff / rework) is clear",
      "Open questions are either closed or explicitly deferred",
    ],
    sections: [
      {
        title: "Review package",
        purpose: "What exactly was reviewed at the gate.",
        owners: ["Product"],
        include: ["List of documents and versions", "Release / pilot goal"],
      },
      {
        title: "Decision",
        purpose: "An unambiguous gate outcome.",
        owners: ["Product", "Business"],
        include: ["Go / No-Go / with conditions", "Brief rationale"],
      },
      {
        title: "Conditions and exceptions",
        purpose: "Deliberate trade-offs without which the pilot cannot start honestly.",
        owners: ["Product", "Tech Lead", "Data Analysts"],
        include: [
          "Workarounds (billing, PRE-2, allowlist)",
          "What is deliberately out of the MVP",
          "Escalation criteria",
        ],
      },
      {
        title: "Votes and comments",
        purpose: "Transparency of the approval.",
        owners: ["Product", "Architecture", "Business", "Tech Lead", "Data"],
        include: ["Role", "Verdict", "Comment"],
      },
    ],
  },
  {
    id: "handoff-brief",
    title: "Handoff brief",
    stepId: "handoff",
    summary:
      "Publish the freeze-pack tasks in Linear and run the tech briefing: ownership, links, pilot DoD.",
    owner: "Tech lead runs it; PM provides value context",
    whenReady: [
      "Tasks are published (not draft)",
      "Briefing agenda and attendees exist",
      "Freeze pack and Figma links are available to the team",
    ],
    sections: [
      {
        title: "Tracker",
        purpose: "What was published and in which status.",
        owners: ["Tech Lead", "Product"],
        include: ["Board / epic", "Task packs", "Ownership"],
      },
      {
        title: "Briefing",
        purpose: "One sync before Sprint 1.",
        owners: ["Tech Lead"],
        include: ["When", "Who", "Agenda"],
      },
      {
        title: "Links",
        purpose: "Single entry to documents.",
        owners: ["Product", "Design"],
        include: ["Notion freeze", "Figma", "Linear epic"],
      },
    ],
  },
  {
    id: "qa-report",
    title: "QA report",
    stepId: "development",
    summary:
      "Engineering tests and release readiness. Not the same as prototype validation results.",
    owner: "QA; tech lead confirms readiness",
    whenReady: [
      "Critical acceptance path covered",
      "No P0 blockers",
      "Explicit release / pilot readiness verdict",
    ],
    sections: [
      {
        title: "Coverage",
        purpose: "What was verified.",
        owners: ["QA"],
        include: ["Critical path", "Regression", "Automated tests"],
      },
      {
        title: "Open bugs",
        purpose: "What blocks / does not block.",
        owners: ["QA", "Tech Lead"],
        include: ["ID", "Severity", "Decision"],
      },
      {
        title: "Readiness",
        purpose: "Whether we can ship.",
        owners: ["QA", "Tech Lead", "Product"],
        include: ["Verdict", "Conditions"],
      },
    ],
  },
  {
    id: "release-report",
    title: "Release report",
    stepId: "release",
    summary:
      "Deploy, check business-case metrics, and plan the next iteration.",
    owner: "PM; DevOps confirms deploy",
    whenReady: [
      "Feature enabled for the target surface",
      "Business-case metrics measured or collecting",
      "Next iteration backlog exists",
    ],
    sections: [
      {
        title: "Deploy",
        purpose: "Where and how it was enabled.",
        owners: ["DevOps", "Tech Lead"],
        include: ["Environment", "Feature flag", "Monitoring"],
      },
      {
        title: "Metrics",
        purpose: "Close the stage-1 loop.",
        owners: ["Product", "Business"],
        include: ["Target", "Actual", "Comment"],
      },
      {
        title: "Next",
        purpose: "What enters the next iteration.",
        owners: ["Product"],
        include: ["Initiatives / debt list"],
      },
    ],
  },
]

export function getArtifactTemplatesForStep(stepId: string) {
  return artifactTemplates.filter((template) => template.stepId === stepId)
}