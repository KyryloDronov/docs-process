import type { FoundationGuide, FoundationNavItem } from "./foundation"

export type {
  FoundationNavItem,
  FoundationSection,
  FoundationGuide,
} from "./foundation"

export const foundationMeta = {
  title: "Company Foundation",
  subtitle:
    "The groundwork before taking on large tasks: who we are, what we are building, how people and the system are organized, what the overall plan is, and which rules count as the norm.",
}

export const foundationNav: FoundationNavItem[] = [
  {
    to: "/foundation",
    label: "Why a foundation is needed",
    description: "The order of foundational documents and how they connect to the task process.",
  },
  {
    to: "/foundation/org",
    label: "Org structure",
    description: "Teams, roles, areas of responsibility, and escalations.",
  },
  {
    to: "/foundation/job-descriptions",
    label: "Job descriptions",
    description: "What each role does, its authority, expectations, and outcomes.",
  },
  {
    to: "/foundation/decision-rights",
    label: "Decision rights",
    description: "Who finally decides on scope, timeline, budget, and risk.",
  },
  {
    to: "/foundation/product",
    label: "Product and goals",
    description: "Vision, users, goals, metrics, and priorities.",
  },
  {
    to: "/foundation/intake",
    label: "Intake and prioritization",
    description: "How work enters the process: what we take and what we decline.",
  },
  {
    to: "/foundation/roadmap",
    label: "Implementation plan",
    description: "Roadmap, dependencies, and delivery order.",
  },
  {
    to: "/foundation/system-map",
    label: "System map",
    description: "Modules, services, integrations, and owners.",
  },
  {
    to: "/foundation/data-ownership",
    label: "Data ownership",
    description: "Owners of domains, layers, models, quality, and access.",
  },
  {
    to: "/foundation/business-processes",
    label: "Business processes",
    description: "Department swimlanes, tasks, artifacts, and gates — how work flows.",
  },
  {
    to: "/foundation/glossary",
    label: "Glossary",
    description: "A shared domain language: terms without ambiguity.",
  },
  {
    to: "/foundation/engineering",
    label: "Engineering baseline",
    description: "DoD, quality, environments, releases, and security.",
  },
  {
    to: "/foundation/compliance",
    label: "Legal and data vendors",
    description: "Licenses, DPAs, geospatial data, satellites, and external suppliers.",
  },
]

export const foundationOrder = [
  {
    step: 1,
    title: "Org structure",
    purpose: "Understand teams, domains, and areas of responsibility.",
  },
  {
    step: 2,
    title: "Job descriptions",
    purpose: "Document responsibilities and expectations for each role.",
  },
  {
    step: 3,
    title: "Decision rights",
    purpose: "Explicitly define who approves scope, timeline, budget, and risk.",
  },
  {
    step: 4,
    title: "Product and goals",
    purpose: "Define what we are building and what outcome counts as success.",
  },
  {
    step: 5,
    title: "Intake and prioritization",
    purpose: "Describe how requests enter the process and how they are selected.",
  },
  {
    step: 6,
    title: "System map + glossary",
    purpose: "Describe the landscape and a shared domain language.",
  },
  {
    step: 7,
    title: "Data ownership",
    purpose: "Assign owners for layers, models, data quality, and access.",
  },
  {
    step: 8,
    title: "Engineering baseline + compliance",
    purpose: "Set delivery quality and rules for data vendors / legal constraints.",
  },
  {
    step: 9,
    title: "Implementation plan",
    purpose: "Line up initiatives and dependencies on a shared horizon.",
  },
  {
    step: 10,
    title: "Business processes",
    purpose: "Show who does what on the path from need to release.",
  },
  {
    step: 11,
    title: "Task definition process",
    purpose: "Only after the foundation — detailed specs, DoR, and development.",
  },
]

export const foundationGuides: FoundationGuide[] = [
  {
    id: "org",
    to: "/foundation/org",
    title: "Org structure",
    short: "Who is responsible for what and where to go with a question.",
    what: "A document describing teams, roles, boundaries of responsibility, and escalation rules. It is not an HR chart for its own sake, but a working map of decision-making.",
    why: [
      "Without clear owners, tasks get stuck between teams.",
      "People don't know whom to call for review or who can say \"no\" to a release.",
      "New employees and contractors get up to speed faster.",
    ],
    when: "Created at the very start of the company or product line and updated when teams, domains, or the decision-making process change.",
    stage:
      "Stage 0 — before Discovery of large features. After that it is maintained continuously, not \"written once and forgotten\".",
    how: [
      "List the teams and the domains they own.",
      "Describe the key roles: Product, Design, Eng, QA, DevOps/SRE, Security.",
      "Record who makes product and architectural decisions.",
      "Describe blocker escalation and mandatory syncs.",
      "Specify where decisions are recorded: wiki, ADR, tracker.",
    ],
    contains: [
      {
        title: "Teams and domains",
        items: [
          "List of teams and their areas of responsibility",
          "Boundaries between product and platform teams",
          "Shared areas and rules of joint ownership",
        ],
      },
      {
        title: "Roles and authority",
        items: [
          "Who approves scope and priorities",
          "Who approves architecture",
          "Who can block a release",
        ],
      },
      {
        title: "Communication",
        items: [
          "Where to post about a cross-team blocker",
          "Which meetings are mandatory",
          "How the outcome of a decision is recorded",
        ],
      },
    ],
    doneWhen: [
      "Any employee can say who owns a domain",
      "It is clear whom to call for product and technical review",
      "There is a clear escalation path",
    ],
    antiPatterns: [
      "An org chart with only names and no areas of responsibility",
      "All decisions go \"through one person\", but this is not described anywhere",
      "Teams change while the document is not updated",
      "Role names exist, but there are no job descriptions with authority",
    ],
  },
  {
    id: "job-descriptions",
    to: "/foundation/job-descriptions",
    title: "Job descriptions",
    short: "What exactly a role does, what authority it has, and what outcome it is accountable for.",
    what: "Formal descriptions per role: responsibilities, decision scope, interaction with other roles, and criteria for good work. The org structure shows \"who sits where\"; job descriptions show \"what a person must do and what they are accountable for\".",
    why: [
      "Without them, roles exist in name only: \"we have a Product person\", but it is unclear what they must cover.",
      "Removes the \"that's not my job\" and \"why wasn't I invited\" disputes.",
      "Needed for onboarding, performance evaluation, hiring, and assigning responsibility in the task process.",
      "Helps avoid dumping product decisions on developers and vice versa.",
    ],
    when: "Right after the org structure, as soon as key roles are defined. Updated when responsibilities change, when hiring for a new role, or when the process changes.",
    stage:
      "Stage 0–1 of the foundation: after the org structure and before actively defining large tasks. Without job descriptions, the review and DoR process will run on \"habit\" rather than on agreement.",
    how: [
      "Take the list of roles from the org structure.",
      "For each role, describe the mission and the main outcome.",
      "Record regular responsibilities and decision areas.",
      "Separately state what the role does NOT do.",
      "Describe who the role works with and whom it escalates to.",
      "Add quality criteria / expectations for the probation period and for regular work.",
    ],
    contains: [
      {
        title: "Description framework",
        items: [
          "Role title and role purpose",
          "Key responsibilities",
          "Authority and decision-making rights",
          "What the role is NOT responsible for",
          "Who it works with and which processes it takes part in",
          "Expected artifacts / outcomes",
          "Success criteria",
        ],
      },
      {
        title: "Minimum set of roles",
        items: [
          "Product Manager / Owner",
          "UX/UI Designer",
          "Tech Lead / Architect",
          "Backend / Frontend Developer",
          "Data Analysts / Models",
          "QA Engineer",
          "DevOps / SRE",
          "If needed: Security, Support",
        ],
      },
      {
        title: "Link to the process",
        items: [
          "At which stages of task definition the role is required",
          "What the role checks during review",
          "When the role can block moving forward",
        ],
      },
    ],
    doneWhen: [
      "Key roles have up-to-date descriptions",
      "It is clear who makes product, design, and technical decisions",
      "A new employee can understand expectations without oral legends",
      "In disputes about areas of responsibility, there is something to refer to",
    ],
    antiPatterns: [
      "One long generic \"department responsibilities\" sheet without roles",
      "Descriptions exist only for HR and nobody on the team uses them",
      "Responsibilities are described, but authority is not",
      "Everything is lumped into \"helps the team\" without a concrete outcome",
    ],
  },
  {
    id: "decision-rights",
    to: "/foundation/decision-rights",
    title: "Decision rights",
    short: "Who finally decides on scope, timeline, budget, and risk.",
    what: "An explicit decision matrix: which decision types exist, who proposes, who consults, who approves, and who is informed. It complements org structure and job descriptions where otherwise everyone \"just figures it out\".",
    why: [
      "Without it, scope and timeline disputes are settled by voice volume, not by rule.",
      "Releases and budgets stall while it is unclear who can say yes/no.",
      "Removes dependence on one informal boss.",
    ],
    when: "Right after org structure and job descriptions. Updated when roles change, new gates appear, or funding model changes.",
    stage:
      "Foundation stage 0–1. Must exist before major initiatives and regular intake/planning.",
    how: [
      "List decision types: product, scope, architecture, timeline, budget, risk, release, compliance.",
      "For each type define: who proposes, who consults, who approves.",
      "Separately document veto rights and escalation conditions.",
      "Link the matrix to gates in the task process.",
      "Describe where the decision outcome is recorded.",
    ],
    contains: [
      {
        title: "Decision types",
        items: [
          "Scope / initiative priority",
          "Timeline and capacity",
          "Budget and external spend",
          "Architecture and breaking changes",
          "Risk / release go-no-go",
          "Legal / compliance exceptions",
        ],
      },
      {
        title: "Role matrix",
        items: [
          "Propose / Consult / Approve / Inform",
          "Who may veto",
          "Where to escalate on conflict",
        ],
      },
      {
        title: "Recording",
        items: [
          "Where the decision is written: ADR, gate protocol, tracker",
          "Validity period and when it is reviewed",
        ],
      },
    ],
    doneWhen: [
      "For any disputed decision the approver is clear",
      "There is an escalation path without hunting for blame",
      "Process gates reference this matrix",
    ],
    antiPatterns: [
      "All decisions go \"through the CEO\", but that is nowhere written",
      "A matrix exists, but the team decides differently",
      "Authority is described only in vague job-description phrases",
    ],
  },
  {
    id: "product",
    to: "/foundation/product",
    title: "Product and goals",
    short: "What we are building, for whom, and what outcome counts as success.",
    what: "A short but mandatory document about the product: audience, value, goals, metrics, and prioritization principles. This is the context from which initiatives and tasks are later born.",
    why: [
      "Otherwise teams optimize local features rather than outcomes.",
      "Without goals, it is hard to tell which task to take and what to turn down.",
      "Specifications without product context turn into a wish list.",
    ],
    when: "Formed at the start of a product or a new product line. Reviewed on a quarterly/half-year horizon or when the strategy changes.",
    stage:
      "Stage 0–1. Must exist before detailed planning of large initiatives and before writing large specs.",
    how: [
      "Describe the user problem and the product's value.",
      "Define user segments.",
      "Formulate business and product goals for the horizon.",
      "Choose a North Star and supporting metrics.",
      "Describe prioritization criteria and explicit constraints.",
    ],
    contains: [
      {
        title: "Product",
        items: [
          "Who the product is for and what problem it solves",
          "Key value scenarios",
          "Product boundaries: what we deliberately do not do",
        ],
      },
      {
        title: "Goals and metrics",
        items: [
          "Quarterly / yearly goals",
          "Outcomes, not just a list of features",
          "How we measure success",
        ],
      },
      {
        title: "Priorities",
        items: [
          "What matters now / later / won't do",
          "Rules for choosing between initiatives",
          "Constraints: compliance, SLA, resources",
        ],
      },
    ],
    doneWhen: [
      "The team answers the question \"why does the product exist\" the same way",
      "There are measurable goals and priorities",
      "It is possible to explain why one initiative matters more than another",
    ],
    antiPatterns: [
      "Just a list of features without goals and metrics",
      "Goals like \"make it better\" with no way to verify",
      "The document is written once a year and not used in decisions",
    ],
  },
  {
    id: "intake",
    to: "/foundation/intake",
    title: "Intake and prioritization",
    short: "How a request enters the process and by which rules it is accepted or declined.",
    what: "Entry rules for work: where requests come from, what minimum is required for review, who filters, how initiatives are compared, and what \"we are not taking this\" means. It connects product/goals to the implementation plan and the task process.",
    why: [
      "Otherwise everything enters the process and the roadmap stops being a plan.",
      "Teams spend discovery on requests that are clearly off strategy.",
      "Business understands why one idea waits while another moves forward.",
    ],
    when: "After Product and goals, before filling the implementation plan in detail. Updated when strategy, request channels, or capacity change.",
    stage:
      "Foundation stage 1. Must work before mass task framing, otherwise intake stays oral.",
    how: [
      "Describe intake channels: business, customer, internal debt, incident.",
      "Define the minimum request pack: problem, segment, expected outcome.",
      "Decide who does primary triage and in what SLA.",
      "Document prioritization criteria and explicit decline / defer reasons.",
      "Describe where a request goes next: discovery, horizon backlog, declined.",
    ],
    contains: [
      {
        title: "Entry",
        items: [
          "Channels and request form",
          "Minimum fields for review",
          "Primary response SLA",
        ],
      },
      {
        title: "Selection",
        items: [
          "Score / comparison criteria for initiatives",
          "Link to product goals",
          "What we never take without an exception",
        ],
      },
      {
        title: "Outputs",
        items: [
          "Into the implementation plan",
          "Into discovery / research",
          "Declined / deferred with a reason",
        ],
      },
    ],
    doneWhen: [
      "Any request can be traced as accepted, deferred, or declined — and why",
      "The team does not start work outside intake",
      "Priorities are explained through goals, not pressure",
    ],
    antiPatterns: [
      "Everything goes straight to engineering \"by phone call\"",
      "Priority = who asked loudest",
      "Declines are not recorded — ideas keep coming back",
    ],
  },
  {
    id: "roadmap",
    to: "/foundation/roadmap",
    title: "Implementation plan with dependencies",
    short: "The order of large initiatives and what depends on what.",
    what: "A roadmap at the initiative/epic level: what we plan over the horizon, in what order, and which dependencies block a start or a release.",
    why: [
      "Otherwise teams start features that don't yet have a platform foundation.",
      "Dependencies surface too late — after the spec is already written.",
      "The business sees a realistic order of value delivery.",
    ],
    when: "Assembled after the product/goals and the current system landscape are understood. Updated regularly (usually once per sprint/month at the status level and once per quarter at the horizon level).",
    stage:
      "Stage 1–2 of the foundation. Before a specific large feature is defined in detail, the plan should already show that feature's place and its dependencies.",
    how: [
      "Gather large initiatives, not small tickets.",
      "For each, state the outcome and current status.",
      "Draw the dependencies: team, technical, external.",
      "Define the delivery order and slippage risks.",
      "Record the criteria for when an initiative can start.",
    ],
    contains: [
      {
        title: "Initiatives",
        items: [
          "Theme / epic and expected outcome",
          "Status: discovery / design / delivery / done",
          "Initiative owner",
        ],
      },
      {
        title: "Dependencies",
        items: [
          "Cross-team blockers",
          "Technical prerequisites",
          "External dependencies: vendors, legal, integrations",
        ],
      },
      {
        title: "Delivery order",
        items: [
          "What must come first and why",
          "Critical path",
          "What can be done in parallel",
        ],
      },
    ],
    doneWhen: [
      "It is clear which initiatives are on the horizon and in what order",
      "Dependencies are visible before development starts",
      "It is possible to answer why feature B doesn't start before A",
    ],
    antiPatterns: [
      "A roadmap as a wish list without dependencies",
      "A plan that exists only in one manager's head",
      "Mixing strategic initiatives and small bugs in one list without levels",
    ],
  },
  {
    id: "system-map",
    to: "/foundation/system-map",
    title: "System map",
    short: "How the product is technically structured at a high level.",
    what: "An up-to-date diagram of modules/services, key data flows, integrations, and owners. It is a map of the terrain for any new initiative.",
    why: [
      "Otherwise a feature concept is written in isolation from the real architecture.",
      "Teams reinvent what already exists.",
      "It is immediately visible which services a change will affect and whom to call.",
    ],
    when: "The first version appears as soon as there is a working product or a clear target landscape. After that the map lives alongside the architecture: updated when services appear/are removed and when ownership changes.",
    stage:
      "Stage 0–1 of the foundation and continuously in maintenance. Before the Technical Design of any large feature, the map must be sufficiently up to date.",
    how: [
      "List the main modules and their responsibilities.",
      "Mark the source of truth for key entities.",
      "Show critical integrations and data flows.",
      "Specify the owning team of each important component.",
      "Add rules for changing shared layers.",
    ],
    contains: [
      {
        title: "Landscape",
        items: [
          "Services / modules and their purpose",
          "Main user and system flows",
          "External systems",
        ],
      },
      {
        title: "Data and ownership",
        items: [
          "Where the source of truth for entities is stored",
          "Which team owns the service",
          "Whom to notify about breaking changes",
        ],
      },
    ],
    doneWhen: [
      "It is possible to quickly see where a new feature plugs in",
      "The owner of each critical component is clear",
      "No late-stage surprise of \"this service already does half of it\"",
    ],
    antiPatterns: [
      "A beautiful diagram from a year ago",
      "A map without owners",
      "Detail down to every class instead of a clear landscape",
    ],
  },
  {
    id: "data-ownership",
    to: "/foundation/data-ownership",
    title: "Data ownership",
    short: "Who owns domains, layers, models, data quality, and access.",
    what: "A data-ownership registry: domain entities and layers, source of truth, quality owner, who grants access, and who owns pipelines/models. For a forest-monitoring platform this is a foundation piece next to the system map.",
    why: [
      "Otherwise layers and models are ownerless — quality drops and incidents have no owner.",
      "New features cannot tell whether a data contract may be changed.",
      "Access and sensitive geospatial data become a gray zone.",
    ],
    when: "After the first system map and when key entities/layers appear. Updated when new sources, models, or owning teams appear.",
    stage:
      "Foundation stage 1, before major data/ML initiatives and before Technical Design of layer-dependent features.",
    how: [
      "List data domains: parcels, layers, scenes, models, reports, billing.",
      "For each, define source of truth and owning team.",
      "Separately assign a quality owner and an access owner.",
      "Describe how to request a schema change or a new source.",
      "Link the registry to the system map and compliance.",
    ],
    contains: [
      {
        title: "Domain registry",
        items: [
          "Entity / layer / model",
          "Source of truth",
          "Owning team and contact",
        ],
      },
      {
        title: "Quality and access",
        items: [
          "Who owns freshness / completeness",
          "Who grants and revokes access",
          "Data sensitivity classification",
        ],
      },
      {
        title: "Changes",
        items: [
          "How a breaking change is proposed",
          "Whom to notify",
          "Where the data contract is recorded",
        ],
      },
    ],
    doneWhen: [
      "Every critical layer/model has an owner",
      "It is clear whom to call on a data-quality issue",
      "Changing a data contract has an explicit process",
    ],
    antiPatterns: [
      "Owner is \"everyone\" or \"platform\" with no concrete team",
      "A system map exists, but data has no ownership",
      "Anyone can grant access with no record",
    ],
  },
  {
    id: "glossary",
    to: "/foundation/glossary",
    title: "Glossary",
    short: "A shared language for business, product, and engineering.",
    what: "A dictionary of key domain terms: entities, statuses, roles, and prohibited/deprecated names. It ensures the same entity isn't called by three different names in specs, the UI, and the API.",
    why: [
      "Reduces ambiguity in requirements and contracts.",
      "Speeds up onboarding.",
      "Reduces rework caused by \"we meant something else\".",
    ],
    when: "Starts as soon as domain entities appear. Extended with each new large initiative when new concepts arise.",
    stage:
      "Stage 0 and continuously. Especially critical before Specification and API design.",
    how: [
      "Collect the terms that already cause disputes.",
      "Give each a short definition and usage context.",
      "Record the statuses and lifecycles of entities.",
      "Mark deprecated terms and what to replace them with.",
      "Link the glossary to specifications and the data schema.",
    ],
    contains: [
      {
        title: "Entities",
        items: [
          "Name and definition",
          "Synonyms that are prohibited",
          "Relationships with other entities",
        ],
      },
      {
        title: "Statuses and rules",
        items: [
          "Allowed statuses",
          "Transitions between statuses",
          "Business meaning of each status",
        ],
      },
    ],
    doneWhen: [
      "Product, Design, and Eng use the same terms",
      "New specs reference the glossary rather than inventing names",
      "The API and UI don't diverge in the meaning of entities",
    ],
    antiPatterns: [
      "A 200-line glossary without usage examples",
      "Terms only for the business, while the code uses different names without a mapping",
      "No owner of the dictionary — nobody updates it",
    ],
  },
  {
    id: "business-processes",
    to: "/foundation/business-processes",
    title: "Business processes",
    short: "A work map by department swimlanes: tasks, outputs, and approval points.",
    what: "A company end-to-end process description in BPMN-lite: swimlanes (department lanes), activities, artifacts on transitions, and gates. It does not replace the detailed task-framing process — it shows who hands off to whom and when.",
    why: [
      "New people can see their lane and where work is handed off.",
      "Fewer gray zones between Business, Product, Design, and Eng.",
      "Gates and artifacts become explicit instead of tribal knowledge.",
    ],
    when: "Appears after org structure and roles, once participants are clear. Updated when handoffs change or new required artifacts appear.",
    stage:
      "Foundation stage before the detailed task-framing process. Then maintained alongside the org structure.",
    how: [
      "Define lanes by department / ownership zone, not by every person.",
      "Lay out key tasks left to right over time.",
      "Label artifacts on transitions (what is handed off next).",
      "Mark gates where an explicit go / no-go is required.",
      "Reconcile the diagram with the real task-framing process and update when they diverge.",
    ],
    contains: [
      {
        title: "Lanes",
        items: [
          "Departments / functions (Business, Product, Design, Arch/Data, Eng/QA, DevOps)",
          "Who owns the lane",
          "Where lanes intersect",
        ],
      },
      {
        title: "Activities and outputs",
        items: [
          "Tasks on the lane",
          "Artifacts on the edges",
          "Process start and end",
        ],
      },
      {
        title: "Checkpoints",
        items: [
          "Feature gate",
          "Approval gate before handoff",
          "Conditions to move on",
        ],
      },
    ],
    doneWhen: [
      "Any participant can point to their lane and handoff",
      "Gates and required artifacts are visible on the diagram",
      "The diagram matches the current task-framing process",
    ],
    antiPatterns: [
      "A lane per employee instead of per department",
      "A diagram without artifacts — unclear what is handed off",
      "A gate exists in real life but is missing from the map",
      "Pretty BPMN that nobody reconciles with reality",
    ],
  },
  {
    id: "engineering",
    to: "/foundation/engineering",
    title: "Engineering baseline",
    short: "Default rules for quality, delivery, and security.",
    what: "A set of engineering agreements that apply to all tasks: Definition of Done, tests, review, environments, release, monitoring, and basic security.",
    why: [
      "No need to write \"tests and review are required\" in every ticket again.",
      "Reduces chaos in delivery and incidents.",
      "Provides a consistent level of quality across teams.",
    ],
    when: "Formed at the start of the engineering organization and refined as it grows. For a new team — before mass feature development.",
    stage:
      "Stage 0 of the foundation. Then used continuously as the backdrop for DoR/DoD and the release process.",
    how: [
      "Describe the Definition of Done.",
      "Record the minimum for tests, review, and CI.",
      "Describe the environments and the release model.",
      "Define baseline observability requirements.",
      "Describe the security baseline and who approves risky changes.",
    ],
    contains: [
      {
        title: "Quality",
        items: [
          "Team DoD",
          "Code review rules",
          "Minimum of automated tests / manual checks",
        ],
      },
      {
        title: "Delivery",
        items: [
          "local / staging / production",
          "How we roll out and how we roll back",
          "What must be in monitoring",
        ],
      },
      {
        title: "Security",
        items: [
          "AuthN / AuthZ by default",
          "Secrets and sensitive data",
          "When a security review is needed",
        ],
      },
    ],
    doneWhen: [
      "The team understands \"done\" the same way",
      "The release path and rollback are described",
      "Baseline security expectations don't have to be reinvented every time",
    ],
    antiPatterns: [
      "A DoD on paper that nobody checks",
      "Different unwritten rules in each team",
      "Security only \"after an incident\"",
    ],
  },
  {
    id: "compliance",
    to: "/foundation/compliance",
    title: "Legal and data vendors",
    short: "Licenses, DPAs, geospatial data, satellites, and rules for external suppliers.",
    what: "Baseline legal/compliance rules for a SaaS that uses external data: which sources may be used, which contracts are mandatory, where data may be stored, and what cannot leave the perimeter without review. Complements the engineering baseline and data ownership.",
    why: [
      "Satellite and geospatial data are almost always constrained by license and territory.",
      "Without DPAs/contracts a product cannot honestly run a customer pilot.",
      "Otherwise teams learn about a ban only after the spec is written.",
    ],
    when: "As soon as external data sources or customer-data pilots appear. Reviewed for each new vendor, country/region, or data type.",
    stage:
      "Foundation stage 1 next to the engineering baseline. Before major integrations and before a public pilot.",
    how: [
      "List vendors and data types: satellites, weather, cadastre, customer exports.",
      "For each, record license, territory, term, and resale/derived-data limits.",
      "Describe mandatory documents: DPA, NDA, pilot package.",
      "Set storage, deletion, and access rules for sensitive data.",
      "Define who approves a new vendor and an exception to the rules.",
    ],
    contains: [
      {
        title: "Vendors and sources",
        items: [
          "Supplier and data type",
          "License / contract / term",
          "Usage restrictions",
        ],
      },
      {
        title: "Compliance minimum",
        items: [
          "DPA and personal-data processing, if any",
          "Geospatial data and territorial limits",
          "Where data may be stored and for how long",
        ],
      },
      {
        title: "Exception process",
        items: [
          "Who approves a new vendor",
          "What to do when a license expires",
          "How risk is recorded if an exception is taken",
        ],
      },
    ],
    doneWhen: [
      "The team knows which sources a feature may use",
      "A new vendor is not connected without a legal check",
      "A customer-data pilot has a clear document pack",
    ],
    antiPatterns: [
      "\"We already downloaded the data — we'll sort the license later\"",
      "Compliance lives only in one lawyer's head",
      "No vendor registry and no contract end dates",
    ],
  },
]

export function getFoundationGuide(id: string) {
  return foundationGuides.find((guide) => guide.id === id)
}
