/**
 * English locale for Symbiose training case.
 *
 * End-to-end training case: a satellite data / forest model platform (France).
 * In the early stages the business deliberately frames the task incompletely —
 * the gaps are closed during research, specs and review.
 *
 * Artifact texts are written as realistic example documents.
 */

export const caseStudyMeta = {
  company: "Symbiose Management",
  product: "France Forest Monitoring Platform",
  productContext:
    "A new request — a fire risk and loss scenario built on top of this data.",
  initiative: "Fire Risk Model and Loss Estimation",
}

/** Real draft from the business — no training comments inside */
export const businessCaseArtifact = {
  id: "business-case",
  title: "Business Case / Hypothesis",
  status: "Draft",
  version: "v0.1",
  date: "2026-03-12",
  author: {
    name: "Marie Dupont",
    role: "Business Sponsor / Commercial Lead",
    team: "Sales & Partnerships",
  },
  recipients: ["Product Manager", "Head of Product"],
  context:
    "We already have a forest monitoring platform for France: satellite layers and models (pollution, tree species composition, stand condition). We want to add a new scenario: the user selects a forest zone and a start date/season — the system calculates how a fire would spread and shows the monetary losses. The main interface we need is a widget with a fire spread player and the loss amount.",
  problem: {
    summary:
      "Customers (forestry companies, insurers, municipalities) cannot quickly estimate the losses and damage a potential fire would cause in a specific forest zone.",
    today:
      "Today the platform has satellite layers and forest condition models, but no \"what happens if a fire starts here\" scenario with a monetary loss estimate.",
    pain: [
      "Negotiations drag on: the customer asks us to \"estimate the risk and damage\", and we respond with generic maps and no scenario.",
      "Competitors are starting to sell risk and loss scenarios — we look like \"data only\" rather than a solution.",
      "Internal sales demos lack a visual widget that plays back the spread.",
    ],
  },
  users: [
    {
      segment: "Insurance analysts",
      need: "Estimate potential damage for a zone and period",
    },
    {
      segment: "Forestry companies",
      need: "Understand risk and potential losses to plan protection",
    },
    {
      segment: "Municipalities / civil protection",
      need: "Quickly show a fire scenario on the map",
    },
  ],
  goal: "Give the user a tool: specify a forest zone and a moment (year / season / date) — and get a calculation of fire spread and monetary losses.",
  hypothesis:
    "If we add an interactive widget with a fire spread player and loss estimate, pilot conversion and retention of large customers will grow, because the product will start answering \"how much will we lose\", not just \"what can be seen from the satellite\".",
  value: {
    forUser: "A fast risk and damage scenario without a separate study.",
    forBusiness:
      "Platform differentiation, stronger demos, and potentially a new paid \"Risk and Loss\" module.",
  },
  successMetrics: [
    {
      name: "Pilots with the risk module",
      target: "≥ 5 pilots per quarter after release",
    },
    {
      name: "Demo → next step",
      target: "20% increase in demo→pilot conversion in the insurance segment",
    },
    {
      name: "Widget usage",
      target: "Active users run ≥ 3 scenarios per week",
    },
  ],
  requestedSolution: {
    mustHave: [
      "The user selects a forest zone on the map",
      "The user specifies a year / season / start date",
      "The system calculates fire spread and monetary losses",
      "A widget with a player: how the fire spreads over time",
      "Display of losses (money) depending on zone and scenario",
    ],
    niceToHave: [
      "A nice \"news-style\" animation",
      "Ability to quickly show it on a call with a customer",
    ],
  },
  askToProduct:
    "We ask Product to analyze the task, confirm the value, and prepare the next step. We need a module that can be shown to customers in demos.",
  /** Big Tech: discovery staffing is decided after problem framing — by problem type */
  discoverySquad: {
    note: "The research team is staffed at the end of \"Problem and goal\", before research starts. Composition follows the problem type — not a fixed \"standard cast for every feature\".",
    problemType:
      "New map scenario + data/loss model + paid module (credits, notifications, reports)",
    decidedBy: "Product Manager",
    decidedAt: "End of stage 1 → entry into research",
    members: [
      {
        role: "Product Manager",
        why: "Leads discovery, insight synthesis, and high-level requirements",
      },
      {
        role: "Design",
        why: "UX is unknown: interviews, scenario and pain-point map",
      },
      {
        role: "Data Analysts",
        why: "Need layers, €/ha methodology, and data readiness before MVP",
      },
      {
        role: "Architecture",
        why: "New compute service and joins to map, billing, notifications",
      },
      {
        role: "Business Sponsor",
        why: "Customer access and segment priorities",
      },
    ],
    notNeededYet: [
      {
        role: "Full engineering team",
        why: "Estimate and delivery come after concept and planning",
      },
      {
        role: "QA",
        why: "Joins detailed design and development",
      },
    ],
  },
}

/** Research report after stage 1 — facts, not a solution */
export const researchReportArtifact = {
  id: "research-report",
  title: "Research Report",
  status: "Ready for review",
  version: "v0.3",
  date: "2026-03-28",
  author: {
    name: "Camille Bernard",
    role: "Product Manager",
    team: "Forest Platform",
  },
  recipients: [
    "Head of Product",
    "Design",
    "Architecture",
    "Data Analysts",
    "Sales & Partnerships",
  ],
  sourceCase: "Business Case v0.1 — Fire Risk Model and Loss Estimation",
  summary:
    "Customers need a \"zone + date → spread + loss in euros\" scenario. The player widget is confirmed as the core of the demo, but a widget alone is not enough: we also need scenario saving, export and report extensions. The data audit showed: species and height/age are ready; the cadastre needs rework; the moisture proxy and the €/ha table are prerequisites before MVP. Without a model output contract, the report and loss panel design would be guesswork.",
  methods: [
    "6 interviews: 2 insurance analysts, 2 forest managers, 1 municipality, 1 internal sales",
    "Review of 4 competitors / similar products with risk and loss scenarios",
    "Platform audit: layers, models, reporting module, access rights",
    "Touchpoint map with existing processes: billing, notifications, reports, demos",
    "Data readiness audit with data analysts: what the model needs vs. what we have",
    "Technical sync with architecture on fire spread and loss estimation",
  ],
  users: [
    {
      segment: "Insurance analysts",
      finding:
        "They need a quick \"what if\" for a polygon and season, plus a damage figure for underwriting discussions. The player is useful in demos, but without scenario saving and report export its value drops.",
      quote:
        "The map is nice, but I need a number and the ability to put the scenario into a file for the committee.",
    },
    {
      segment: "Forestry companies",
      finding:
        "They look at species, stand condition and the protection zone. They want to understand where the fire will go and what they will lose, not just that \"there is a risk\".",
      quote:
        "If a fire starts near this road — which compartments and what damage within a week?",
    },
    {
      segment: "Municipalities / civil protection",
      finding:
        "They need a simple way to present a scenario at a meeting. Complex analytics are secondary; a clear timeline and the affected area matter most.",
      quote: "Show me in 2 minutes: from where, to where, how much.",
    },
  ],
  competitors: [
    {
      name: "Competitor A — risk scenario studio",
      note: "Has a spread player and loss estimation. Weaker on French forest layers.",
    },
    {
      name: "Competitor B — insurance loss map",
      note: "Strong on the euro model for insurance, weak player interface, little forest context.",
    },
    {
      name: "Conclusion",
      note: "The market already sells \"scenario + money\". Our advantage is our own forest layers and models; the gap is the lack of an end-to-end risk scenario and reporting.",
    },
  ],
  productAudit: [
    {
      area: "Satellite layers and forest models",
      status: "Available",
      note: "Species, condition, pollution — can be reused as scenario inputs.",
    },
    {
      area: "Spread / risk engine",
      status: "Not in the product",
      note: "A new model or integration is needed; there is currently no user scenario.",
    },
    {
      area: "Map widgets",
      status: "Partial",
      note: "The map and layers exist; there is no scenario player or timeline.",
    },
    {
      area: "Reporting module",
      status: "Available, not covered in the request",
      note: "The business did not mention reports. Customers expect scenario and loss export into existing reports.",
    },
  ],
  /**
   * During research — map of touchpoints with existing processes.
   * Full as-is / to-be and rules (credits, notify) are drawn at concept.
   */
  processTouchpoints: {
    note: "The feature does not live in a vacuum: during research we capture which existing platform processes it will touch. To-be diagrams and rules come at the Concept stage.",
    items: [
      {
        process: "Demos and sales",
        asIs: "Show map layers without a scenario and € amount — long follow-up after the demo",
        impact: "Need a scenario with player and loss as the demo core",
      },
      {
        process: "Billing / quotas",
        asIs: "Tenant has a credit balance; the risk module is not connected",
        impact: "Running a simulation must deduct a credit; on error — refund",
      },
      {
        process: "Notifications",
        asIs: "In-app + email already exist for monitoring alerts",
        impact: "Reuse the channel for \"scenario calculation ready\" + deep link",
      },
      {
        process: "Reports",
        asIs: "Reporting module exists; no risk scenarios in it",
        impact: "Scenario card and loss table go into existing reports",
      },
    ],
    asIsSketchChart: `flowchart LR
  Sales["Demo: layers only"] --> Gap["No scenario and €"]
  Gap --> Slow["Long follow-up thread"]
  Bill["Credit billing"] -.->|not connected| Gap
  Notif["Platform notifications"] -.->|unused| Gap
  Rep["Reports"] -.->|no scenario| Gap`,
  },
  /** Model input audit: what exists / needs rework / must be done upfront */
  dataReadiness: [
    {
      layer: "Tree species composition",
      neededFor: "Fuel class and loss breakdown by species",
      status: "Ready",
      action: "Use as is",
      owner: "Data Analysts",
      note: "Coverage of the pilot regions in France is sufficient for v1.",
    },
    {
      layer: "Stand height and age",
      neededFor: "Biomass proxy and value class",
      status: "Ready",
      action: "Use as is",
      owner: "Data Analysts",
      note: "Raster/vector available; aligns with the species layer.",
    },
    {
      layer: "Stand condition",
      neededFor: "Spread risk adjustment",
      status: "Ready",
      action: "Use as is",
      owner: "Data Analysts",
      note: "Already in the monitoring platform.",
    },
    {
      layer: "Cadastre / administrative boundaries",
      neededFor: "Zone selection and \"this is forest\" validation",
      status: "Needs rework",
      action: "Finish the layer API before MVP",
      owner: "Platform / Architecture",
      note: "The layer exists, but it does not return land_cover and the forest share within a polygon — without this we cannot properly reject a click on a road/field.",
    },
    {
      layer: "Moisture proxy / weather for the date",
      neededFor: "Scenario start on the selected date/season",
      status: "Needs to be added",
      action: "Prerequisite: new source or integration",
      owner: "Data Analysts",
      note: "The product has no ready layer for an arbitrary date. Without it the model will only give an \"average season\".",
    },
    {
      layer: "€/ha table by stand class",
      neededFor: "Loss panel and report table",
      status: "Needs to be added",
      action: "Prerequisite: methodology v1 + versioning",
      owner: "Data + Business",
      note: "Without an approved table the UI must not show \"magic\" euros.",
    },
  ],
  techFindings: [
    "Architecture assessment: fire spread is feasible as a separate compute service on top of existing raster and vector layers.",
    "A loss in euros cannot be shown honestly without an approved data model — a methodology is needed (biomass / insurance proxy / expert table).",
    "Data readiness is uneven: species and height/age are fine; the cadastre API is a gap; moisture and the € table are new work before release.",
    "Player performance: pre-rendered frames or streamed timestamps are needed, not \"live\" calculation per frame in the first version.",
    "Access rights and corporate accounts already exist — scenarios must live in the same permission model. Billing/run limits are an open product question.",
  ],
  insights: [
    {
      title: "The user's task is broader than the player",
      detail:
        "The player is the core of the demo. For retention we also need: save a scenario, compare 2 zones or dates, export to a report.",
    },
    {
      title: "Reports are the forgotten must-have for large customers",
      detail:
        "The business request is focused on the widget. The research shows: without reporting, insurance pilots stall.",
    },
    {
      title: "Euros are the main uncertain input",
      detail:
        "Users demand money, but the loss sources have not been agreed. Otherwise the product promises accuracy it does not have.",
    },
    {
      title: "Design depends on the model output",
      detail:
        "What goes on the map (frames), in the panel (€ + methodology), in the report (table by class) — these are fields of the output contract. Drawing the UI before the meaning of these fields is fixed risks rework.",
    },
    {
      title: "The insurance segment is the best wedge",
      detail:
        "The clearest payment scenario and readiness for a pilot. Forestry companies are the second priority for the roadmap.",
    },
  ],
  risks: [
    "No approved loss model → risk of distrust in the numbers during demos.",
    "Prerequisite work on the cadastre, moisture and the € table may delay the MVP if not planned before design.",
    "Scope creep: real-time fires, alerts, insurer APIs — the business may add them after the first demo.",
    "If we build only the widget without reports, demo→pilot conversion in insurance will remain weak.",
  ],
  recommendation:
    "Proceed to the concept with a focus: scenario widget + player + loss display + saving to reports. In the HLR, fix the mandatory inputs, prerequisite layers and the meaning of the model output for design. The insurance analyst is the primary persona.",
}

/** Stage 2 decision document — what we take into the concept */
export const highLevelRequirementsArtifact = {
  id: "hlr",
  title: "High-Level Requirements",
  status: "Draft for transition to concept",
  version: "v0.2",
  date: "2026-03-29",
  author: {
    name: "Camille Bernard",
    role: "Product Manager",
    team: "Forest Platform",
  },
  recipients: [
    "Head of Product",
    "Design",
    "Architecture",
    "Data Analysts",
    "Tech Lead",
  ],
  basedOn: "Research Report v0.3 + Business Case v0.1",
  problemStatement:
    "The user cannot specify a forest zone and a fire start moment and get a clear spread scenario with a monetary loss estimate — in the product and in reports.",
  primaryPersona:
    "Insurance analyst (primary wedge); secondary — forestry companies and municipalities",
  outcomes: [
    "Run a risk and loss scenario on the map in under 2 minutes during a demo",
    "Show spread over time and a loss estimate in euros",
    "Save the scenario and include the result in a platform report",
  ],
  mustHave: [
    {
      id: "HLR-1",
      text: "Forest zone selection on the map (polygon / administrative unit) with an \"is this forest\" check",
    },
    {
      id: "HLR-2",
      text: "Specifying the scenario start date / season / year",
    },
    {
      id: "HLR-3",
      text: "Calculation and visualization of fire spread (player / timeline)",
    },
    {
      id: "HLR-4",
      text: "Display of monetary losses for the scenario with a transparent methodology source",
    },
    {
      id: "HLR-5",
      text: "Saving the scenario and exporting key results to the reporting module",
    },
    {
      id: "HLR-6",
      text: "Clear rejections: no layer, not forest, area limit, no credits to run",
    },
  ],
  shouldHave: [
    "Comparison of two scenarios (zone or date)",
    "Short share link / demo mode for sales",
    "Notification when a long calculation completes (in-app + email)",
  ],
  outOfScope: [
    "Real-time monitoring of active fires and alerts",
    "Direct underwriting API for insurers",
    "Mobile-first application",
    "Automatic request to emergency services",
  ],
  /** What must be ready / started before detailed design and module development */
  prerequisites: [
    {
      id: "PRE-1",
      text: "Finish the cadastre API: land_cover + forest share within the polygon",
      owner: "Platform",
    },
    {
      id: "PRE-2",
      text: "Connect a moisture/weather proxy for the date (or fix \"average season\" as a temporary mode)",
      owner: "Data Analysts",
    },
    {
      id: "PRE-3",
      text: "Approve the €/ha table v1 and the methodology versioning rules",
      owner: "Data + Business",
    },
  ],
  /** Meaning of the model output — brief for design before mockups */
  modelOutputForDesign: [
    {
      surface: "Map / player",
      fields: "Spread frames, burned area over time, fire model version",
    },
    {
      surface: "Loss panel",
      fields: "Amount in €, breakdown by stand class, methodology id/version, assumptions",
    },
    {
      surface: "Report",
      fields: "Scenario summary, loss table, methodology link, map preview",
    },
  ],
  openQuestions: [
    "Module billing: do we deduct credits from the tenant balance for each run or include it in the subscription?",
    "Limit on concurrent / daily simulations per tenant — what number for the pilot?",
  ],
  successMetrics: [
    "≥ 5 pilots with the risk module per quarter after release",
    "+20% demo→pilot conversion in the insurance segment",
    "Active users: ≥ 3 scenarios per week",
  ],
  nextStep:
    "Stage 3 — concept: workspace UX, business rules (limits, errors, notifications), a contract for the meaning of model inputs/outputs for design and architecture.",
}

/** Product concept after the HLR — the chosen solution, not a detailed spec */
export const solutionConceptArtifact = {
  id: "solution-concept",
  title: "Solution Concept",
  status: "Selected option",
  version: "v0.2",
  date: "2026-04-08",
  author: {
    name: "Camille Bernard",
    role: "Product Manager",
    team: "Forest Platform",
  },
  recipients: [
    "Head of Product",
    "Design",
    "Architecture",
    "Data Analysts",
    "Tech Lead",
  ],
  basedOn: "High-Level Requirements v0.2 + Research Report v0.3",
  summary:
    "We choose the \"Scenario Workspace\" option: a widget with a player and a loss in euros on the map + scenario saving and export to the reporting module. The primary persona is the insurance analyst. In the first version the loss is a transparent proxy methodology from the data team, not a \"black box\".",
  options: [
    {
      id: "A",
      title: "Player widget only",
      pros: ["Faster to demo", "Matches the original business request"],
      cons: [
        "Without reports, weak demo→pilot conversion in insurance",
        "Does not satisfy requirement HLR-5",
      ],
    },
    {
      id: "B",
      title: "Scenario workspace = widget + saving and export to reports",
      pros: [
        "Covers the mandatory high-level requirements",
        "Stronger for insurance pilots",
        "Reuses the existing reporting module",
      ],
      cons: [
        "Slightly larger scope than \"player only\"",
        "Requires agreement on the loss methodology",
      ],
    },
    {
      id: "C",
      title: "Full set: comparison, link, separate package billing",
      pros: ["Maximum differentiation"],
      cons: [
        "Too early for the first release",
        "Dilutes focus on the primary segment",
      ],
    },
  ],
  decision: {
    chosen: "Option B — scenario workspace",
    why: "Covers the high-level requirements and research insights without sprawling into real-time, alerts and insurer APIs. Comparison and sharing remain nice-to-have after the first pilot.",
  },
  processAsIsToBe: {
    note: "At concept we draw the processes of the feature being shipped: as-is → to-be user path and how the module plugs into existing platform processes (billing, notifications, reports). Not a full enterprise BPMN.",
    asIsChart: `flowchart LR
  A["Customer asks for risk and loss"] --> B["Sales or product opens the layer map"]
  B --> C["Show species and condition"]
  C --> D["No scenario and no amount in euros"]
  D --> E["Long email thread and a weak demo"]`,
    toBeChart: `flowchart LR
  A["Insurance analyst opens Risk and Loss"] --> B["Credit check"]
  B --> C["Zone + date / season"]
  C --> D["Run scenario"]
  D --> E["Player and loss in €"]
  E --> F["Save to reports"]
  D -.-> G["If slow: in-app + email"]
  G -.-> E`,
    platformIntegrationNote:
      "The feature does not replace billing, notifications, or reports — it plugs into them. This is part of the to-be process for one shipped feature.",
    platformIntegrationChart: `flowchart TB
  Feat["Feature: Risk and Loss"]
  Feat -->|"deducts / refunds credit"| Bill["Billing: credit balance"]
  Feat -->|"calculation ready + deep link"| Notif["Notifications: in-app + email"]
  Feat -->|"scenario card + € table"| Rep["Platform reports"]
  Feat -->|"zone, layers, fire frames"| Map["Map and layers"]`,
  },
  userFlow: [
    "Open \"Risk and Loss\" on the France forest map",
    "Select a zone (polygon or admin unit)",
    "Set the start date / season / year",
    "Run the calculation → see the spread player and the loss amount",
    "Save the scenario and add a block to the platform report",
  ],
  userFlowChart: `flowchart TD
  S(["Start"]) --> A["Open Risk and Loss on the map"]
  A --> B["Select a forest zone"]
  B --> C["Set a date or season"]
  C --> D["Run the scenario"]
  D --> E{"Result ready?"}
  E -->|yes| F["Player and loss panel"]
  E -->|error or no layers| G["Show a clear error"]
  G --> B
  F --> H["Save the scenario"]
  H --> I["Attach a snapshot to reports"]
  I --> Z(["Done"])`,
  uxSurfaces: [
    {
      name: "Map + scenario controls",
      note: "Zone, date, run, calculation status",
    },
    {
      name: "Player / timeline",
      note: "Spread frames + play / pause",
    },
    {
      name: "Loss panel",
      note: "Total in euros + a short \"how it was calculated\" (methodology v1)",
    },
    {
      name: "Save → reports",
      note: "The scenario card goes into the existing reporting module",
    },
  ],
  modelApproach: {
    fireSpread:
      "A separate fire spread compute service: input is zone + date + mandatory layers (species, height/age, condition, moisture proxy after PRE). Output is a frame timeline for the player.",
    loss: "Loss in v1 = a transparent proxy table of euros/ha by stand class × burned area per frame. The methodology is approved by data analysts and the business. We do not promise insurance underwriting accuracy in the interface.",
    inputsRequired: [
      "Tree species composition",
      "Height and age",
      "Stand condition",
      "Zone boundary + forest share",
      "Start date / season",
      "Moisture proxy (after PRE-2)",
    ],
  },
  /** Design brief: what to draw, based on the model output */
  designBrief: [
    {
      surface: "Map",
      shows: "Selected polygon, calculation progress, fire frame animation",
      fromModel: "frames[], burned_area_ha over time",
    },
    {
      surface: "Loss panel",
      shows: "Total €, table by class, \"how it was calculated\" block",
      fromModel: "total_eur, breakdown[], methodology_id/version, assumptions",
    },
    {
      surface: "Report",
      shows: "Scenario card: summary, loss table, preview, methodology link",
      fromModel: "snapshot: scenario_id, loss summary, map_preview_url",
    },
  ],
  /** Product rules before the detailed spec — so the prototype does not lie */
  businessRules: [
    {
      id: "BR-1",
      title: "Credits per run",
      rule: "Running a simulation deducts 1 credit from the tenant balance. At a balance of 0 the button is disabled with an explanation.",
    },
    {
      id: "BR-2",
      title: "Area limit",
      rule: "Before the run we check the zone area. Above the pilot limit — rejection without deducting a credit.",
    },
    {
      id: "BR-3",
      title: "Not forest / road / field",
      rule: "If the forest share in the zone is below the threshold — rejection \"select a forest area\", no credit is deducted.",
    },
    {
      id: "BR-4",
      title: "Data / calculation error",
      rule: "A missing mandatory layer or a service failure → error status, clear text, the credit is refunded.",
    },
    {
      id: "BR-5",
      title: "Completion notification",
      rule: "If the calculation exceeds the wait threshold: in-app notification + email to the scenario owner; the email contains a deep link to the result.",
    },
  ],
  businessFlowChart: `flowchart TD
  A["Opened the module"] --> B{"Credit balance > 0?"}
  B -->|no| B1["Show: top up / no quota"]
  B -->|yes| C["Select zone and date"]
  C --> D{"Forest share ok?"}
  D -->|no| D1["Error: not a forest area"]
  D -->|yes| E{"Area within limit?"}
  E -->|no| E1["Error: area limit"]
  E -->|yes| F["Deduct 1 credit and run"]
  F --> G{"Layers available?"}
  G -->|no| G1["Data error + refund credit"]
  G -->|yes| H["Asynchronous calculation"]
  H --> I{"Ready quickly?"}
  I -->|no| J["In-app + email on completion"]
  I -->|yes| K["Player + loss panel"]
  J --> K
  K --> L["Save to report"]
  H -->|failure| M["Error status + refund credit"]`,
  /** Semantic I/O contract — not OpenAPI yet, but already usable for design and architecture */
  modelIoExamples: {
    inputExample: {
      scenario_id: "scn_01HXYZ",
      tenant_id: "tn_symbiose_demo",
      geometry: {
        type: "Polygon",
        coordinates: [[[2.1, 44.2], [2.3, 44.2], [2.3, 44.4], [2.1, 44.4], [2.1, 44.2]]],
      },
      start: { kind: "season", value: "2025-summer" },
      required_layers: [
        "tree_species",
        "height_age",
        "stand_condition",
        "moisture_proxy",
        "cadastre_forest_share",
      ],
    },
    fireOutputExample: {
      model_version: "fire-spread-v0.3",
      status: "ready",
      frames: [
        { t_hours: 0, burned_area_ha: 0, tile_url: "…" },
        { t_hours: 6, burned_area_ha: 12.4, tile_url: "…" },
        { t_hours: 24, burned_area_ha: 48.1, tile_url: "…" },
      ],
      total_burned_area_ha: 48.1,
    },
    lossOutputExample: {
      methodology_id: "loss-proxy-eur-ha-v1",
      methodology_version: "1.0.0",
      currency: "EUR",
      total_eur: 186_400,
      breakdown: [
        { stand_class: "mature conifer", area_ha: 30.2, eur_per_ha: 4200, subtotal_eur: 126_840 },
        { stand_class: "broadleaf", area_ha: 17.9, eur_per_ha: 3300, subtotal_eur: 59_070 },
      ],
      assumptions: [
        "Proxy table, not insurance underwriting",
        "€/ha prices approved by the business for 2026-Q2",
      ],
    },
  },
  tradeOffs: [
    "Demo speed vs. report completeness → we take a minimal export to reports, not a new report builder",
    "Euro accuracy vs. honesty → a proxy with an explanation beats a \"magic\" number",
    "Pre-rendered frames vs. live calculation → for v1, pre-rendering or cached timestamps for a stable player",
    "Credits per run vs. \"everything in the subscription\" → for the pilot, credits make limits visible; they can be folded into the plan later",
  ],
  nonGoals:
    "Real-time fires, alerts, insurer APIs, mobile-first, comparison of two scenarios in v1",
  nextStep:
    "Fix the architecture diagram with contract examples and move to the prototype (map → rejection rules → player → loss → report).",
}

/** High-level architecture for the selected concept */
export const architectureArtifact = {
  id: "architecture",
  title: "Architecture Diagram",
  status: "Draft",
  version: "v0.1",
  date: "2026-04-09",
  author: {
    name: "Julien Moreau",
    role: "Architect",
    team: "Platform Engineering",
  },
  recipients: [
    "Product",
    "Tech Lead",
    "Data Analysts",
    "DevOps",
    "Design",
  ],
  basedOn: "Solution Concept v0.2 — Scenario Workspace",
  summary:
    "The new \"Risk and Loss\" user flow builds on the existing map, layers and reporting module. We add a scenarios service, fire spread calculation and loss estimation; the player interface reads ready-made frames rather than computing every tick \"on the fly\".",
  principles: [
    "Reuse the map, authentication/permissions and reports as is",
    "Models are separate services with an explicit input and output contract",
    "The interface shows only a completed or streamed-ready scenario result",
    "The loss methodology is versioned — so that the figure is reproducible",
  ],
  components: [
    {
      name: "Map and scenario interface",
      role: "Zone and date selection, player, loss panel, saving",
    },
    {
      name: "Scenarios service",
      role: "Creating and storing scenarios, job status, permissions linkage",
    },
    {
      name: "Fire spread calculation",
      role: "Spread calculation → timeline frames",
    },
    {
      name: "Loss estimation",
      role: "Euros using proxy methodology v1 + methodology metadata",
    },
    {
      name: "Layer storage",
      role: "Existing forest layers as model inputs",
    },
    {
      name: "Reporting module",
      role: "Accepts a scenario snapshot into a report",
    },
  ],
  componentChart: `flowchart TB
  subgraph Existing["Current platform"]
    MAP["Map and layers"]
    AUTH["Authentication and permissions"]
    LAYERS["Layer storage"]
    REPORTS["Reporting module"]
  end

  subgraph New["New Risk and Loss flow"]
    UI["Scenario workspace"]
    SCEN["Scenarios service"]
    FIRE["Spread calculation"]
    LOSS["Loss estimation"]
  end

  UI --> MAP
  UI --> AUTH
  UI --> SCEN
  SCEN --> FIRE
  SCEN --> LOSS
  FIRE --> LAYERS
  LOSS --> LAYERS
  UI --> REPORTS`,
  flow: [
    "The interface creates a scenario (zone + date) → scenarios service",
    "The scenarios service queues a spread calculation job",
    "The calculation reads the mandatory layers → writes frames and burned area",
    "Loss estimation calculates euros and the methodology version",
    "The interface fetches frames and loss and shows the player",
    "Saving sends a snapshot to the reporting module",
  ],
  sequenceChart: `sequenceDiagram
  actor User as Insurance analyst
  participant UI as Scenario interface
  participant SC as Scenarios service
  participant FS as Fire calculation
  participant LE as Loss estimation
  participant LY as Layer storage
  participant RP as Reports

  User->>UI: Zone and date, run
  UI->>SC: Create scenario job
  SC->>FS: Start calculation
  FS->>LY: Read required layers
  LY-->>FS: Layer data
  FS-->>SC: Frames and area
  SC->>LE: Estimate loss
  LE-->>SC: Euros and methodology id
  SC-->>UI: Result ready
  UI-->>User: Player and loss panel
  User->>UI: Save to report
  UI->>RP: Scenario snapshot
  RP-->>UI: Attached`,
  dataContracts: [
    {
      name: "CreateScenarioRequest",
      note: "Request to create a scenario from the UI",
      example: {
        tenant_id: "tn_symbiose_demo",
        user_id: "usr_camille",
        geometry: { type: "Polygon", coordinates: ["…"] },
        start: { kind: "date", value: "2025-07-14" },
        credit_charge: 1,
      },
    },
    {
      name: "ScenarioStatus",
      note: "Async calculation status for the UI",
      example: {
        scenario_id: "scn_01HXYZ",
        status: "running",
        progress_pct: 42,
        error_code: null,
      },
    },
    {
      name: "FireSpreadResult",
      note: "Fire model output → map player",
      example: {
        model_version: "fire-spread-v0.3",
        frames: [
          { t_hours: 0, burned_area_ha: 0, tile_url: "s3://…/f0" },
          { t_hours: 24, burned_area_ha: 48.1, tile_url: "s3://…/f3" },
        ],
        total_burned_area_ha: 48.1,
      },
    },
    {
      name: "LossResult",
      note: "Loss estimation output → panel and report",
      example: {
        methodology_id: "loss-proxy-eur-ha-v1",
        methodology_version: "1.0.0",
        total_eur: 186_400,
        currency: "EUR",
        breakdown: [
          { stand_class: "mature conifer", area_ha: 30.2, subtotal_eur: 126_840 },
        ],
        assumptions: ["Proxy table v1"],
      },
    },
    {
      name: "ReportSnapshot",
      note: "Snapshot for the reporting module",
      example: {
        scenario_id: "scn_01HXYZ",
        map_preview_url: "https://…/preview.png",
        loss_total_eur: 186_400,
        methodology_id: "loss-proxy-eur-ha-v1",
        created_at: "2026-04-09T10:15:00Z",
      },
    },
  ],
  /** Storage entities — high-level, not the final migration */
  entitiesSketch: {
    Scenario: {
      id: "uuid",
      tenant_id: "uuid",
      created_by: "uuid",
      geometry: "GeoJSON",
      start: "date | season",
      status: "queued | running | ready | failed",
      credit_spent: "int",
      fire_result_ref: "nullable",
      loss_result_ref: "nullable",
    },
    Methodology: {
      id: "string",
      version: "semver",
      table_eur_per_ha: "stand_class → number",
      approved_by: "string",
      effective_from: "date",
    },
    TenantQuota: {
      tenant_id: "uuid",
      credits_balance: "int",
      daily_run_limit: "int",
    },
  },
  risks: [
    {
      risk: "Quality and completeness of layers in the zone",
      mitigation:
        "Hard rejection with a clear error if a mandatory layer is unavailable; cadastre and moisture PREs before MVP",
    },
    {
      risk: "Long calculation on large polygons",
      mitigation:
        "Area limit in v1 + asynchronous job + progress + notifications",
    },
    {
      risk: "Distrust of the euro amount",
      mitigation:
        "Methodology id in the interface and in the report; the data team owns the versions",
    },
  ],
  openTechQuestions: [
    "Where to store player frames: object storage or a tile service?",
    "The exact area limit (ha) and daily run limit for the pilot",
  ],
  nextStep:
    "UI prototype based on the design brief + a calculation spike on the pilot region; formal API paths — in the full spec.",
}

/** UI/UX prototype after the concept — what we validate before the full spec */
export const uiPrototypeArtifact = {
  id: "ui-prototype",
  title: "UI/UX Prototype",
  status: "Ready for testing",
  version: "v0.4",
  date: "2026-04-18",
  author: {
    name: "Léa Martin",
    role: "UX/UI Designer",
    team: "Platform Design",
  },
  recipients: [
    "Product Manager",
    "Tech Lead",
    "Data Analysts",
    "Business",
  ],
  basedOn: "Solution Concept v0.2 + Architecture Diagram v0.1",
  summary:
    "A clickable \"Scenario Workspace\" prototype: map → zone and date → run → player and loss → save to reports. The focus is the insurance analyst and a 2-minute demo. Loss figures are labeled with the methodology and do not look like \"magic\".",
  goals: [
    "Verify that the main path is clear without training",
    "Verify whether users trust the euro amount when the methodology is transparent",
    "Verify the value of saving scenarios to reports",
  ],
  tool: "Figma — clickable prototype (not final mockups)",
  prototypeLink: "figma.com/file/symbiose-risk-loss-prototype-v04",
  scopeIn: [
    "Map of France with zone selection",
    "Date / season selection",
    "Calculation and status screen",
    "Spread player + loss panel",
    "Saving the scenario and a block in the report",
    "Error state: mandatory layer missing",
  ],
  scopeOut: [
    "Comparison of two scenarios",
    "Mobile layout",
    "Full report builder",
    "Real alerts and real-time",
  ],
  screens: [
    {
      name: "Start: Risk and Loss",
      note: "Entry from the platform map, short explanation of the module",
    },
    {
      name: "Zone selection",
      note: "Polygon or admin unit, hint about the area limit",
    },
    {
      name: "Date and run",
      note: "Season / date, \"Run scenario\" button",
    },
    {
      name: "Player and loss",
      note: "Timeline, play/pause, total in euros + \"how it was calculated\"",
    },
    {
      name: "Save to report",
      note: "The scenario card goes into the reporting module",
    },
    {
      name: "Data error",
      note: "Clear text if a layer is unavailable",
    },
  ],
  flowChart: `flowchart TD
  A["Module start"] --> B["Zone selection"]
  B --> C["Date or season"]
  C --> D["Run"]
  D --> E{"Layers available?"}
  E -->|no| F["Data error"]
  F --> B
  E -->|yes| G["Player and loss panel"]
  G --> H["Save to report"]
  H --> I["Done"]`,
  assumptions: [
    "Loss is shown using proxy methodology v1 with the version labeled",
    "The player uses pre-prepared frames for the demo region",
    "Access rights are the same as for the current map and reports",
  ],
  techSpikeNotes: [
    "Tech Lead: on the pilot region, frame calculation completes in reasonable time with an area limit",
    "Data: labeling the methodology on the loss panel is mandatory for trust",
  ],
  nextStep:
    "Run user tests and a technical check; record the results and the decision: proceed or iterate.",
}

/** Prototype validation report */
export const testResultsArtifact = {
  id: "validation-results",
  title: "Validation Results",
  status: "Decision: proceed to detailed specification",
  version: "v1.0",
  date: "2026-04-25",
  author: {
    name: "Léa Martin",
    role: "UX/UI Designer",
    team: "Platform Design",
  },
  coAuthors: ["Camille Bernard — Product", "Tech Lead — spike"],
  recipients: [
    "Head of Product",
    "Design",
    "Architecture",
    "Data Analysts",
    "Business",
  ],
  basedOn: "UI/UX Prototype v0.4",
  summary:
    "The main path is clear to insurance analysts. The player and saving to reports strengthen the value. Trust in the euro figure grows when the methodology is visible. We move to the spec with adjustments: explain the methodology more clearly, the area limit, and the calculation status.",
  method: {
    users: "5 sessions: 3 insurance analysts, 1 forest manager, 1 internal sales",
    format: "Moderated test on the clickable prototype + a short demo for sales",
    techCheck: "Calculation spike on one pilot region with an area limit",
  },
  successCriteria: [
    {
      name: "Main path without facilitator hints",
      target: "≥ 4 of 5 complete the scenario through to saving",
      result: "5 of 5",
      pass: true,
    },
    {
      name: "Loss clarity",
      target: "≥ 4 of 5 understand where the figure comes from",
      result: "3 of 5 before the text fix; after clarifying the label — OK for the spec",
      pass: true,
    },
    {
      name: "Report value",
      target: "≥ 3 of 5 say saving is needed for their work",
      result: "4 of 5",
      pass: true,
    },
    {
      name: "Tech spike",
      target: "Pilot zone calculation fits within an acceptable wait time",
      result: "OK with an area limit; above the limit — rejection with a clear error",
      pass: true,
    },
  ],
  findings: [
    {
      title: "The player is a strong demo moment",
      detail:
        "Sales and analysts immediately \"see the story of the fire\". Without the player, interest drops.",
      action: "Keep the player as a must-have in the first version",
    },
    {
      title: "The loss methodology must be visible",
      detail:
        "Without a \"how it was calculated\" label, the figure is not trusted. With a short label and a version, it is accepted for the demo and pilot.",
      action: "In the spec: a mandatory methodology block on the loss panel and in the report",
    },
    {
      title: "Saving to reports is a must-have, not a nice-to-have",
      detail:
        "Insurance participants confirmed: without a file/report, the scenario will not reach the committee.",
      action: "Do not cut export to reports from the first version",
    },
    {
      title: "The area limit must be explained upfront",
      detail:
        "Users got frustrated when a large polygon \"silently\" spun for a long time. An explicit limit and error are clearer.",
      action: "In the prototype/spec: a warning before the run + an error when exceeded",
    },
  ],
  quotes: [
    {
      who: "Insurance analyst",
      text: "The player is cool, but I need a figure with an explanation — otherwise the committee won't pass it.",
    },
    {
      who: "Internal sales",
      text: "In two minutes you can already show it to a customer. Without a report we'll get stuck in email threads again.",
    },
  ],
  techSpike: {
    summary:
      "On the pilot region, frame calculation and the proxy loss pass with an area restriction. An asynchronous status is needed in the interface.",
    risks: [
      "Large zones without a limit cause long waits",
      "A stable loss methodology version is needed before the production demo",
    ],
  },
  decision: {
    verdict: "Proceed to detailed specification (full spec)",
    why: "The value hypothesis is confirmed on the target segment; technical risks are manageable with an area limit and a transparent methodology.",
    changesBeforeSpec: [
      "Strengthen the \"how it was calculated\" block on the loss panel",
      "Show the area limit before the run",
      "Explicit calculation status (queued / ready / error)",
      "Keep saving to reports as a must-have",
    ],
  },
  nextStep:
    "Stage 5 — full spec, final mockups and a backlog that incorporates the post-test adjustments.",
}

/** Full spec after the prototype and tests */
export const fullSpecArtifact = {
  id: "full-spec",
  title: "Full Specification",
  status: "Ready for approval",
  version: "v1.0",
  date: "2026-05-06",
  author: {
    name: "Camille Bernard",
    role: "Product Manager",
    team: "Forest Platform",
  },
  recipients: [
    "Head of Product",
    "Design",
    "Architecture",
    "Tech Lead",
    "Data Analysts",
    "QA",
  ],
  basedOn:
    "Validation Results v1.0 + Concept v0.2 + Architecture Diagram v0.1 + High-Level Requirements v0.2",
  summary:
    "Specification of the \"Risk and Loss\" module: a scenario workspace on the map with a player, a transparent loss in euros, and saving to reports. Post-test adjustments are included: methodology visible, area limit before the run, explicit calculation statuses.",
  packageNote:
    "The full spec is the build-and-acceptance canon. UI screens, high-level architecture, and delivery cut live in related artifacts; this doc keeps links plus what is required to accept stories.",
  links: [
    {
      id: "figma-handoff",
      title: "Figma handoff v1.0",
      role: "UI source of truth",
      note: "Screens, states, use cases. We do not paste mocks into the spec — criteria + link only.",
    },
    {
      id: "architecture",
      title: "Architecture diagram v0.1",
      role: "Tech context",
      note: "Components and sequence. The spec holds formal APIs/schemas, not a redraw of the whole diagram.",
    },
    {
      id: "solution-concept",
      title: "Solution concept v0.2",
      role: "Process / rules baseline",
      note: "As-is/to-be and business rules already live there. Here — acceptance and edge cases.",
    },
    {
      id: "backlog",
      title: "Backlog · RISK-LOSS-MVP",
      role: "Delivery cut",
      note: "Epic/story cut for estimation. Spec stories = criteria; backlog = delivery.",
    },
  ],
  goals: [
    "Give the insurance analyst a zone + date → spread + loss scenario in a demo under 2 minutes",
    "Save the scenario to the reporting module for committees and pilots",
    "Show the loss methodology and calculation version transparently",
  ],
  successMetrics: [
    "≥ 5 pilots with the module per quarter after release",
    "+20% demo→pilot conversion in the insurance segment",
    "≥ 3 scenarios per week per active user",
  ],
  personas: [
    {
      name: "Insurance analyst",
      priority: "Primary",
      need: "A quick what-if and a loss figure with an explanation for the committee",
    },
    {
      name: "Forest manager",
      priority: "Secondary",
      need: "Understand where the fire will go and what the losses are for the zone",
    },
    {
      name: "Internal sales",
      priority: "Secondary",
      need: "A stable 2-minute demo with scenario saving",
    },
  ],
  userStories: [
    {
      id: "US-1",
      story:
        "As an insurance analyst, I want to select a forest zone on the map so that I can run a scenario for exactly the polygon I need.",
      acceptance: [
        "A polygon or administrative unit can be selected",
        "The area limit is shown before the run",
        "If the limit is exceeded — a clear error without starting the calculation",
      ],
    },
    {
      id: "US-2",
      story:
        "As an insurance analyst, I want to set a start date or season so that I can compare risk in the period I need.",
      acceptance: [
        "Date / season / year selection is available",
        "An invalid date blocks the run with clear text",
      ],
    },
    {
      id: "US-3",
      story:
        "As a user, I want to see the spread player and the loss amount so that I can understand the dynamics and scale of losses.",
      acceptance: [
        "Once the calculation is ready, play/pause and the timeline are available",
        "The loss panel shows the amount in euros",
        "Next to it is a \"how it was calculated\" block with the methodology id/version",
        "While the calculation is running — status queued / running / ready / error",
      ],
    },
    {
      id: "US-4",
      story:
        "As an insurance analyst, I want to save the scenario to a report so that I can hand the result to the committee.",
      acceptance: [
        "There is a \"Save to report\" action",
        "A scenario card with the loss summary and a methodology link appears in the reporting module",
        "Access rights match the tenant's report permissions",
      ],
    },
    {
      id: "US-5",
      story:
        "As a user, I want a clear error when data is insufficient so that I can fix the zone or choose a different period.",
      acceptance: [
        "If a mandatory layer is missing, the calculation does not start \"silently\"",
        "The error text explains the cause and the next step",
      ],
    },
  ],
  functionalRequirements: [
    {
      id: "FR-1",
      text: "The \"Risk and Loss\" module is accessible from the platform map for users with the module permission",
    },
    {
      id: "FR-2",
      text: "Scenario creation: zone + date/season + run",
    },
    {
      id: "FR-3",
      text: "Asynchronous spread calculation with status display",
    },
    {
      id: "FR-4",
      text: "Spread frame player after a successful calculation",
    },
    {
      id: "FR-5",
      text: "Loss panel with the amount, breakdown (if available) and methodology",
    },
    {
      id: "FR-6",
      text: "Saving a scenario snapshot into the existing reporting module",
    },
    {
      id: "FR-7",
      text: "Validation of the area limit and mandatory layers before/at run time",
    },
  ],
  nonFunctional: [
    "Pilot zone: calculation fits within the agreed wait SLA (target — minutes, not tens of minutes)",
    "Permissions and tenancy as for the map and reports",
    "The loss methodology is versioned; the methodology id appears in the UI and report",
    "Errors and statuses are localized in the interface",
    "Scenario run logging for support and product analytics",
  ],
  apis: [
    {
      name: "Create scenario",
      method: "POST",
      path: "/api/v1/risk-loss/scenarios",
      note: "Forest/area/balance validations before queuing",
      requestExample: {
        geometry: { type: "Polygon", coordinates: ["…"] },
        start: { kind: "date", value: "2025-07-14" },
      },
      responseExample: {
        scenario_id: "scn_01HXYZ",
        status: "queued",
        credits_charged: 1,
        credits_remaining: 14,
      },
    },
    {
      name: "Calculation status",
      method: "GET",
      path: "/api/v1/risk-loss/scenarios/{id}",
      note: "UI polling: queued | running | ready | failed",
      requestExample: { scenario_id: "scn_01HXYZ" },
      responseExample: {
        scenario_id: "scn_01HXYZ",
        status: "running",
        progress_pct: 55,
        error: null,
      },
    },
    {
      name: "Spread result",
      method: "GET",
      path: "/api/v1/risk-loss/scenarios/{id}/fire-spread",
      note: "Frames for the player",
      requestExample: { scenario_id: "scn_01HXYZ" },
      responseExample: {
        model_version: "fire-spread-v0.3",
        frames: [{ t_hours: 24, burned_area_ha: 48.1, tile_url: "…" }],
        total_burned_area_ha: 48.1,
      },
    },
    {
      name: "Loss result",
      method: "GET",
      path: "/api/v1/risk-loss/scenarios/{id}/loss",
      note: "Loss panel and methodology block",
      requestExample: { scenario_id: "scn_01HXYZ" },
      responseExample: {
        methodology_id: "loss-proxy-eur-ha-v1",
        methodology_version: "1.0.0",
        total_eur: 186_400,
        breakdown: [
          { stand_class: "mature conifer", area_ha: 30.2, subtotal_eur: 126_840 },
        ],
        assumptions: ["Proxy table v1"],
      },
    },
    {
      name: "Save to report",
      method: "POST",
      path: "/api/v1/risk-loss/scenarios/{id}/report-snapshot",
      note: "Snapshot into the reporting module",
      requestExample: { report_folder_id: "rep_folder_12" },
      responseExample: {
        snapshot_id: "snap_99",
        report_url: "/reports/rep_folder_12/snap_99",
      },
    },
    {
      name: "Credit balance",
      method: "GET",
      path: "/api/v1/risk-loss/quota",
      note: "To disable the run button",
      requestExample: {},
      responseExample: {
        credits_balance: 14,
        daily_runs_used: 2,
        daily_run_limit: 10,
      },
    },
  ],
  schemaExamples: {
    ScenarioRow: {
      id: "uuid",
      tenant_id: "uuid",
      created_by: "uuid",
      geometry: "geometry(Polygon, 4326)",
      start_kind: "date | season",
      start_value: "text",
      status: "enum",
      credits_charged: "int",
      fire_result_json: "jsonb nullable",
      loss_result_json: "jsonb nullable",
      created_at: "timestamptz",
    },
    MethodologyRow: {
      id: "text pk",
      version: "text",
      payload_json: "jsonb",
      approved_by: "text",
      effective_from: "date",
    },
  },
  edgeCases: [
    "Credit balance = 0 → run unavailable, no credit deducted",
    "Click/polygon with a forest share below the threshold (road, field) → rejection \"not a forest area\"",
    "Zone larger than the area limit → rejection before calculation without deduction",
    "Mandatory layer missing → rejection with a reason text + credit refund",
    "Calculation failed on the service → status failed + credit refund + retry",
    "Long calculation → in-app notification + email with a deep link",
    "No permission for reports → saving unavailable with an explanation",
    "Empty/invalid date → run blocked",
    "Daily run limit exhausted → rejection until the next day",
  ],
  outOfScope: [
    "Comparison of two scenarios",
    "Real-time fires and alerts",
    "Underwriting API for insurers",
    "Mobile-first",
    "New report builder",
  ],
  analytics: [
    "Event: module opened",
    "Event: scenario run",
    "Event: successful player view",
    "Event: save to report",
    "Event: validation / calculation error (with reason code)",
  ],
  openQuestions: [
    "Exact numeric value of the area limit for v1 (approved by architecture + data)",
    "Final methodology v1 text for the UI (approved by data + business)",
  ],
  definitionOfDone: [
    "All US with acceptance criteria are closed on the staging environment",
    "Figma mockups are in handoff status",
    "Backlog stories are estimated during planning",
    "No blocking open questions on the methodology and area limit",
  ],
  nextStep:
    "Spec approval → backlog planning and estimation → handoff to development.",
}

/** Design handoff */
export const figmaHandoffArtifact = {
  id: "figma-handoff",
  title: "Figma Link",
  status: "Handoff ready",
  version: "v1.0",
  date: "2026-05-06",
  author: {
    name: "Léa Martin",
    role: "UX/UI Designer",
    team: "Platform Design",
  },
  recipients: ["Product Manager", "Development", "QA"],
  basedOn: "Full Specification v1.0 + post-test prototype adjustments",
  summary:
    "Final mockups of the \"Risk and Loss\" module for development: main flow, calculation statuses, loss methodology panel, area limit error and saving to reports.",
  link: "figma.com/file/symbiose-risk-loss-handoff-v1",
  pages: [
    {
      name: "Happy path flow",
      note: "Start → zone → date → statuses → player → report",
    },
    {
      name: "Loss panel",
      note: "Amount + \"how it was calculated\" block + methodology version",
    },
    {
      name: "States",
      note: "Queued, running, ready, layer error, area exceeded",
    },
    {
      name: "Report",
      note: "Scenario snapshot card in the reporting module",
    },
  ],
  designTokens: [
    "We use the existing design system of the map and reports",
    "New components: player timeline, calculation status badge, methodology block",
  ],
  qaNotes: [
    "Verify error texts against the spec",
    "Check that the methodology is not hidden in a tooltip \"three clicks deep\"",
  ],
  nextStep: "Development per the spec and these mockups; deviations only via product/design.",
}

/** Backlog for planning */
export const backlogArtifact = {
  id: "backlog",
  title: "Backlog",
  status: "Ready for estimation",
  version: "v1.0",
  date: "2026-05-06",
  author: {
    name: "Camille Bernard",
    role: "Product Manager",
    team: "Forest Platform",
  },
  recipients: ["Tech Lead", "Development Team", "QA", "Data Analysts"],
  basedOn: "Full Specification v1.0",
  epic: {
    id: "RISK-LOSS-MVP",
    title: "\"Risk and Loss\" Module — MVP",
    goal: "A scenario on the map with a player, loss and saving to reports",
  },
  stories: [
    {
      id: "MD-1",
      title: "Model I/O contract and pipeline skeleton",
      pointsHint: "estimated during planning",
      refs: ["data-readiness", "architecture"],
    },
    {
      id: "MD-2",
      title: "Fire spread model (frame calculation)",
      pointsHint: "estimated during planning",
      refs: ["FR-4", "US-3"],
    },
    {
      id: "MD-3",
      title: "Loss pipeline using the €/ha methodology",
      pointsHint: "estimated during planning",
      refs: ["FR-5", "PRE-3"],
    },
    {
      id: "RL-1",
      title: "Module entry and zone selection",
      pointsHint: "estimated during planning",
      refs: ["US-1", "FR-1", "FR-2"],
    },
    {
      id: "RL-2",
      title: "Date/season and area limit validation",
      pointsHint: "estimated during planning",
      refs: ["US-2", "FR-7"],
    },
    {
      id: "RL-3",
      title: "Scenarios service and calculation statuses",
      pointsHint: "estimated during planning",
      refs: ["FR-3", "US-3"],
    },
    {
      id: "RL-4",
      title: "Spread frame player",
      pointsHint: "estimated during planning",
      refs: ["FR-4", "US-3"],
    },
    {
      id: "RL-5",
      title: "Loss panel and methodology block in the UI",
      pointsHint: "estimated during planning",
      refs: ["FR-5", "US-3"],
    },
    {
      id: "RL-6",
      title: "Saving a snapshot to reports",
      pointsHint: "estimated during planning",
      refs: ["US-4", "FR-6"],
    },
    {
      id: "RL-7",
      title: "Data errors and analytics events",
      pointsHint: "estimated during planning",
      refs: ["US-5", "analytics"],
    },
  ],
  notes: [
    "Model and pipeline first (MD-*), then UI / business logic / backend (RL-*)",
    "Story point estimation is done during planning; this is only the decomposition",
    "MD-3 depends on PRE-3 (€/ha methodology); RL-4 reads the ready frames from MD-2",
    "Design handoff: Figma v1.0",
  ],
  nextStep: "Stage 6 — estimation, risks and sprint plan.",
}

/** Work plan after backlog estimation — schedule, owners, platform dependencies */
export const workPlanArtifact = {
  id: "work-plan",
  title: "Work Plan (Jira / Linear)",
  status: "Approved for sprint",
  version: "v1.0",
  date: "2026-05-12",
  author: {
    name: "Thomas Dupont",
    role: "Tech Lead",
    team: "Forest Platform",
  },
  recipients: [
    "Product Manager",
    "Development",
    "QA",
    "Data Analysts",
    "Design",
    "Platform Billing",
  ],
  basedOn: "Backlog v1.0 + Full Specification v1.0 + Figma handoff v1.0",
  summary:
    "Delivery plan for the \"Risk and Loss\" MVP across 3 sprints (May 18 — July 3, 2026). The order is deliberate: first the model and pipeline (MD) and their data dependencies, then the UI, business logic and scenarios backend (RL). Credit billing is not ready — the MVP uses a daily soft limit without charging money.",
  board: "Linear · Forest Platform · Epic RISK-LOSS-MVP",
  releaseTarget: "Internal demo June 26 · Insurer pilot July 3",
  sprints: [
    {
      id: "S1",
      name: "Sprint 1 — model and pipeline",
      range: "May 18–29",
      goal: "I/O contract, fire model, loss pipeline, cadastre PRE",
    },
    {
      id: "S2",
      name: "Sprint 2 — UI and scenarios backend",
      range: "June 1–12",
      goal: "Zone/date, scenarios service, player, loss panel",
    },
    {
      id: "S3",
      name: "Sprint 3 — reports, errors, pilot",
      range: "June 15 — July 3",
      goal: "Reports, analytics, stabilization, demo",
    },
  ],
  /** What already exists on the platform / what blocks — as in real planning */
  platformSlice: [
    {
      id: "PLAT-MAP",
      title: "Map, layers, tenant permissions",
      status: "Ready",
      owner: "Platform",
      blocks: [],
      note: "Reused as is for module entry.",
      workaround: null,
    },
    {
      id: "PLAT-REPORTS",
      title: "Reporting module",
      status: "Ready",
      owner: "Platform",
      blocks: [],
      note: "Scenario snapshot API is available.",
      workaround: null,
    },
    {
      id: "PRE-3",
      title: "€/ha table + methodology v1",
      status: "Ready",
      owner: "Data + Business",
      blocks: [],
      note: "Approved on May 6 — MD-3 (loss pipeline) can be closed in S1.",
      workaround: null,
    },
    {
      id: "PRE-1",
      title: "Cadastre: land_cover + forest share",
      status: "In progress",
      owner: "Platform / Geo",
      blocks: ["RL-1 \"not forest\" validation", "BR-3 rejection for road/field"],
      note: "The layer exists, but the API does not return the required attributes. ETA for the rework — end of S1.",
      workaround: "Until ready: a manual allowlist of pilot polygons.",
    },
    {
      id: "PRE-2",
      title: "Moisture proxy / weather for the date",
      status: "Not ready",
      owner: "Data Analysts",
      blocks: ["Accurate start on an arbitrary date"],
      note: "There is no source in the product; full integration — after the MVP.",
      workaround: "MVP: \"season / average profile\" mode without day-level weather.",
    },
    {
      id: "PLAT-BILLING",
      title: "Tenant billing and credits",
      status: "Not ready",
      owner: "Billing Team",
      blocks: [
        "Deducting 1 credit per run (BR-1)",
        "Balance in the UI from the billing API",
      ],
      note: "Platform billing is being refactored until Q3. Waiting for it = pilot slip.",
      workaround:
        "MVP: a daily per-tenant run soft limit in our service; money/credits — follow-up after billing.",
    },
    {
      id: "PLAT-NOTIFY",
      title: "Email / in-app notifications",
      status: "Partial",
      owner: "Platform",
      blocks: ["Email about a long calculation (BR-5)"],
      note: "In-app notifications exist; transactional email is unstable on staging.",
      workaround: "In-app is mandatory; email is best-effort, not a pilot blocker.",
    },
  ],
  workItems: [
    {
      id: "MD-1",
      title: "Model I/O contract and pipeline skeleton",
      points: 5,
      owner: "Data · Sophie + Marc",
      team: "Data / Development",
      sprint: "S1",
      start: "2026-05-18",
      end: "2026-05-22",
      dependsOn: [],
      blockedByPlatform: [],
    },
    {
      id: "MD-2",
      title: "Fire spread model (frames)",
      points: 13,
      owner: "Data · Sophie + Marc",
      team: "Data",
      sprint: "S1",
      start: "2026-05-18",
      end: "2026-05-29",
      dependsOn: ["MD-1"],
      blockedByPlatform: ["PRE-2"],
    },
    {
      id: "MD-3",
      title: "Loss pipeline using the €/ha methodology",
      points: 5,
      owner: "Data · Sophie + Nina",
      team: "Data / Backend",
      sprint: "S1",
      start: "2026-05-25",
      end: "2026-05-29",
      dependsOn: ["MD-1", "PRE-3"],
      blockedByPlatform: [],
    },
    {
      id: "RL-1",
      title: "Module entry and zone selection",
      points: 5,
      owner: "Frontend · Alex",
      team: "Development",
      sprint: "S2",
      start: "2026-06-01",
      end: "2026-06-05",
      dependsOn: ["PRE-1", "MD-1"],
      blockedByPlatform: ["PRE-1"],
    },
    {
      id: "RL-2",
      title: "Date/season and area limit",
      points: 3,
      owner: "Frontend · Alex",
      team: "Development",
      sprint: "S2",
      start: "2026-06-03",
      end: "2026-06-08",
      dependsOn: ["RL-1"],
      blockedByPlatform: ["PRE-2"],
    },
    {
      id: "RL-3",
      title: "Scenarios service (pipeline orchestration)",
      points: 8,
      owner: "Backend · Nina",
      team: "Development",
      sprint: "S2",
      start: "2026-06-01",
      end: "2026-06-10",
      dependsOn: ["MD-1", "MD-2"],
      blockedByPlatform: ["PLAT-BILLING"],
    },
    {
      id: "RL-SOFT-LIMIT",
      title: "Daily run soft limit (instead of billing)",
      points: 3,
      owner: "Backend · Nina",
      team: "Development",
      sprint: "S2",
      start: "2026-06-08",
      end: "2026-06-12",
      dependsOn: ["RL-3"],
      blockedByPlatform: ["PLAT-BILLING"],
    },
    {
      id: "RL-4",
      title: "Spread frame player",
      points: 5,
      owner: "Frontend · Alex",
      team: "Development",
      sprint: "S2",
      start: "2026-06-08",
      end: "2026-06-12",
      dependsOn: ["RL-3", "MD-2"],
      blockedByPlatform: [],
    },
    {
      id: "RL-5",
      title: "Loss panel and methodology block in the UI",
      points: 5,
      owner: "Frontend · Alex + Nina",
      team: "Development",
      sprint: "S2",
      start: "2026-06-10",
      end: "2026-06-12",
      dependsOn: ["RL-4", "MD-3"],
      blockedByPlatform: [],
    },
    {
      id: "RL-6",
      title: "Saving a snapshot to reports",
      points: 5,
      owner: "Frontend · Alex",
      team: "Development",
      sprint: "S3",
      start: "2026-06-15",
      end: "2026-06-19",
      dependsOn: ["RL-5", "PLAT-REPORTS"],
      blockedByPlatform: [],
    },
    {
      id: "RL-7",
      title: "Data errors and analytics",
      points: 5,
      owner: "Fullstack · Marc",
      team: "Development",
      sprint: "S3",
      start: "2026-06-17",
      end: "2026-06-24",
      dependsOn: ["RL-3", "RL-SOFT-LIMIT"],
      blockedByPlatform: ["PLAT-NOTIFY"],
    },
    {
      id: "QA-1",
      title: "Pilot scenario regression + DoD",
      points: 5,
      owner: "QA · Sophie",
      team: "QA",
      sprint: "S3",
      start: "2026-06-22",
      end: "2026-07-01",
      dependsOn: ["RL-6", "RL-7"],
      blockedByPlatform: [],
    },
    {
      id: "DEMO-1",
      title: "Internal demo + pilot packaging",
      points: 2,
      owner: "PM · Camille",
      team: "Product",
      sprint: "S3",
      start: "2026-06-26",
      end: "2026-07-03",
      dependsOn: ["QA-1"],
      blockedByPlatform: [],
    },
  ],
  /**
   * SVAR Gantt: four categories.
   * Model/pipeline first, then the application (UI + backend).
   * PRE — data dependencies; billing only affects credit deduction.
   */
  gantt: {
    tasks: [
      {
        id: 100,
        text: "Model and pipeline",
        type: "summary",
        start: new Date(2026, 4, 18),
        end: new Date(2026, 4, 29),
        progress: 20,
        open: true,
        department: "Data",
        role: "Delivery category",
        owner: "Data Lead + Marc",
        impact: "Foundation before UI",
      },
      {
        id: 15,
        text: "MD-1 I/O contract + pipeline",
        type: "task",
        parent: 100,
        start: new Date(2026, 4, 18),
        end: new Date(2026, 4, 22),
        progress: 0,
        department: "Data / Development",
        role: "ML eng. + fullstack",
        owner: "Sophie + Marc",
        impact: "Unblocks MD-2/3 and RL-3",
      },
      {
        id: 16,
        text: "MD-2 Fire model (frames)",
        type: "task",
        parent: 100,
        start: new Date(2026, 4, 18),
        end: new Date(2026, 4, 29),
        progress: 0,
        department: "Data",
        role: "ML / data scientist",
        owner: "Sophie + Marc",
        impact: "PRE-2: partial (seasonal profile)",
      },
      {
        id: 17,
        text: "MD-3 Loss pipeline",
        type: "task",
        parent: 100,
        start: new Date(2026, 4, 25),
        end: new Date(2026, 4, 29),
        progress: 0,
        department: "Data / Backend",
        role: "Data + backend",
        owner: "Sophie + Nina",
        impact: "PRE-3 ready",
      },

      {
        id: 150,
        text: "Application: UI + backend",
        type: "summary",
        start: new Date(2026, 5, 1),
        end: new Date(2026, 6, 3),
        progress: 0,
        open: true,
        department: "Forest Platform",
        role: "Delivery category",
        owner: "Tech Lead",
        impact: "After the model",
      },
      {
        id: 20,
        text: "RL-1 Zone selection",
        type: "task",
        parent: 150,
        start: new Date(2026, 5, 1),
        end: new Date(2026, 5, 5),
        progress: 0,
        department: "Development",
        role: "Frontend",
        owner: "Alex",
        impact: "PRE-1: partial (\"not forest\" check)",
      },
      {
        id: 21,
        text: "RL-2 Date / area limit",
        type: "task",
        parent: 150,
        start: new Date(2026, 5, 3),
        end: new Date(2026, 5, 8),
        progress: 0,
        department: "Development",
        role: "Frontend",
        owner: "Alex",
        impact: "PRE-2: partial (season only)",
      },
      {
        id: 22,
        text: "RL-3 Scenarios service",
        type: "task",
        parent: 150,
        start: new Date(2026, 5, 1),
        end: new Date(2026, 5, 10),
        progress: 0,
        department: "Development",
        role: "Backend",
        owner: "Nina",
        impact: "Billing: does not block entirely",
      },
      {
        id: 23,
        text: "RL-SOFT-LIMIT instead of billing",
        type: "task",
        parent: 150,
        start: new Date(2026, 5, 8),
        end: new Date(2026, 5, 12),
        progress: 0,
        department: "Development",
        role: "Backend",
        owner: "Nina",
        impact: "Workaround for BILL-CREDITS",
      },
      {
        id: 30,
        text: "RL-4 Frame player",
        type: "task",
        parent: 150,
        start: new Date(2026, 5, 8),
        end: new Date(2026, 5, 12),
        progress: 0,
        department: "Development",
        role: "Frontend",
        owner: "Alex",
        impact: "Reads the MD-2 output",
      },
      {
        id: 31,
        text: "RL-5 Loss panel UI",
        type: "task",
        parent: 150,
        start: new Date(2026, 5, 10),
        end: new Date(2026, 5, 12),
        progress: 0,
        department: "Development",
        role: "Frontend + backend",
        owner: "Alex + Nina",
        impact: "Reads the MD-3 output",
      },
      {
        id: 40,
        text: "RL-6 Snapshot to reports",
        type: "task",
        parent: 150,
        start: new Date(2026, 5, 15),
        end: new Date(2026, 5, 19),
        progress: 0,
        department: "Development",
        role: "Frontend",
        owner: "Alex",
        impact: "—",
      },
      {
        id: 41,
        text: "RL-7 Errors + analytics",
        type: "task",
        parent: 150,
        start: new Date(2026, 5, 17),
        end: new Date(2026, 5, 24),
        progress: 0,
        department: "Development",
        role: "Fullstack",
        owner: "Marc",
        impact: "Notify: partial (email)",
      },
      {
        id: 50,
        text: "QA-1 Regression / DoD",
        type: "task",
        parent: 150,
        start: new Date(2026, 5, 22),
        end: new Date(2026, 6, 1),
        progress: 0,
        department: "QA",
        role: "QA engineer",
        owner: "Sophie",
        impact: "—",
      },
      {
        id: 60,
        text: "Demo + pilot",
        type: "task",
        parent: 150,
        start: new Date(2026, 6, 1),
        end: new Date(2026, 6, 3),
        progress: 0,
        department: "Product",
        role: "Product Manager",
        owner: "Camille",
        impact: "—",
      },

      {
        id: 200,
        text: "Data and layers (prerequisite)",
        type: "summary",
        start: new Date(2026, 4, 5),
        end: new Date(2026, 6, 10),
        progress: 60,
        open: true,
        department: "Data / Geo",
        role: "Dependency category",
        owner: "Data Lead",
        impact: "Affects the model and UI",
      },
      {
        id: 10,
        text: "PRE-1 Cadastre API",
        type: "task",
        parent: 200,
        start: new Date(2026, 4, 12),
        end: new Date(2026, 4, 29),
        progress: 55,
        department: "Platform / Geo",
        role: "Geo / backend",
        owner: "Geo Team",
        impact: "Partial: \"not forest\" validation in RL-1",
      },
      {
        id: 13,
        text: "PRE-2 Moisture proxy",
        type: "task",
        parent: 200,
        start: new Date(2026, 5, 15),
        end: new Date(2026, 6, 10),
        progress: 5,
        department: "Data Analysts",
        role: "Data engineer",
        owner: "Data Team",
        impact: "Partial: exact date in RL-2 / MD-2",
      },
      {
        id: 11,
        text: "PRE-3 EUR/ha methodology",
        type: "task",
        parent: 200,
        start: new Date(2026, 4, 5),
        end: new Date(2026, 4, 8),
        progress: 100,
        department: "Data + Business",
        role: "Data + stakeholder",
        owner: "Data + Business",
        impact: "Done → unblocks MD-3",
      },

      {
        id: 300,
        text: "Platform billing",
        type: "summary",
        start: new Date(2026, 5, 1),
        end: new Date(2026, 7, 31),
        progress: 15,
        open: true,
        department: "Billing",
        role: "Platform epic",
        owner: "Billing lead",
        impact: "Partially affects the MVP",
      },
      {
        id: 12,
        text: "PLAT-BILLING refactoring",
        type: "task",
        parent: 300,
        start: new Date(2026, 5, 1),
        end: new Date(2026, 7, 31),
        progress: 10,
        department: "Billing",
        role: "Billing tech lead",
        owner: "Billing Team",
        impact: "Not waiting for it in the MVP",
      },
      {
        id: 14,
        text: "BILL-CREDITS deduction API",
        type: "task",
        parent: 300,
        start: new Date(2026, 5, 15),
        end: new Date(2026, 6, 15),
        progress: 0,
        department: "Billing",
        role: "Backend billing",
        owner: "Billing eng.",
        impact: "Partial: credit deduction only, not all of RL-3",
      },
    ],
    links: [
      { id: 1, source: 15, target: 16, type: "e2s" as const },
      { id: 2, source: 15, target: 17, type: "e2s" as const },
      { id: 3, source: 11, target: 17, type: "e2s" as const },
      { id: 4, source: 16, target: 22, type: "e2s" as const },
      { id: 5, source: 15, target: 22, type: "e2s" as const },
      { id: 6, source: 10, target: 20, type: "e2s" as const },
      { id: 7, source: 20, target: 21, type: "e2s" as const },
      { id: 8, source: 22, target: 23, type: "e2s" as const },
      { id: 9, source: 22, target: 30, type: "e2s" as const },
      { id: 10, source: 16, target: 30, type: "e2s" as const },
      { id: 11, source: 17, target: 31, type: "e2s" as const },
      { id: 12, source: 30, target: 31, type: "e2s" as const },
      { id: 13, source: 31, target: 40, type: "e2s" as const },
      { id: 14, source: 22, target: 41, type: "e2s" as const },
      { id: 15, source: 23, target: 41, type: "e2s" as const },
      { id: 16, source: 40, target: 50, type: "e2s" as const },
      { id: 17, source: 41, target: 50, type: "e2s" as const },
      { id: 18, source: 50, target: 60, type: "e2s" as const },
      { id: 19, source: 13, target: 21, type: "e2s" as const },
      { id: 20, source: 14, target: 23, type: "e2s" as const },
      { id: 21, source: 12, target: 14, type: "e2s" as const },
    ],
    /** Separate dictionary: SVAR may not preserve custom fields in cells during normalization */
    metaById: {
      100: {
        department: "Data",
        role: "Delivery category",
        owner: "Data Lead + Marc",
        impact: "Foundation before UI",
      },
      15: {
        department: "Data / Development",
        role: "ML eng. + fullstack",
        owner: "Sophie + Marc",
        impact: "Unblocks MD-2/3 and RL-3",
      },
      16: {
        department: "Data",
        role: "ML / data scientist",
        owner: "Sophie + Marc",
        impact: "PRE-2: partial (seasonal profile)",
      },
      17: {
        department: "Data / Backend",
        role: "Data + backend",
        owner: "Sophie + Nina",
        impact: "PRE-3 ready",
      },
      150: {
        department: "Forest Platform",
        role: "Delivery category",
        owner: "Tech Lead",
        impact: "After the model",
      },
      20: {
        department: "Development",
        role: "Frontend",
        owner: "Alex",
        impact: "PRE-1: partial (\"not forest\" check)",
      },
      21: {
        department: "Development",
        role: "Frontend",
        owner: "Alex",
        impact: "PRE-2: partial (season only)",
      },
      22: {
        department: "Development",
        role: "Backend",
        owner: "Nina",
        impact: "Billing: does not block entirely",
      },
      23: {
        department: "Development",
        role: "Backend",
        owner: "Nina",
        impact: "Workaround for BILL-CREDITS",
      },
      30: {
        department: "Development",
        role: "Frontend",
        owner: "Alex",
        impact: "Reads the MD-2 output",
      },
      31: {
        department: "Development",
        role: "Frontend + backend",
        owner: "Alex + Nina",
        impact: "Reads the MD-3 output",
      },
      40: {
        department: "Development",
        role: "Frontend",
        owner: "Alex",
        impact: "—",
      },
      41: {
        department: "Development",
        role: "Fullstack",
        owner: "Marc",
        impact: "Notify: partial (email)",
      },
      50: {
        department: "QA",
        role: "QA engineer",
        owner: "Sophie",
        impact: "—",
      },
      60: {
        department: "Product",
        role: "Product Manager",
        owner: "Camille",
        impact: "—",
      },
      200: {
        department: "Data / Geo",
        role: "Dependency category",
        owner: "Data Lead",
        impact: "Affects the model and UI",
      },
      10: {
        department: "Platform / Geo",
        role: "Geo / backend",
        owner: "Geo Team",
        impact: "Partial: \"not forest\" validation in RL-1",
      },
      13: {
        department: "Data Analysts",
        role: "Data engineer",
        owner: "Data Team",
        impact: "Partial: exact date in RL-2 / MD-2",
      },
      11: {
        department: "Data + Business",
        role: "Data + stakeholder",
        owner: "Data + Business",
        impact: "Done → unblocks MD-3",
      },
      300: {
        department: "Billing",
        role: "Platform epic",
        owner: "Billing lead",
        impact: "Partially affects the MVP",
      },
      12: {
        department: "Billing",
        role: "Billing tech lead",
        owner: "Billing Team",
        impact: "Not waiting for it in the MVP",
      },
      14: {
        department: "Billing",
        role: "Backend billing",
        owner: "Billing eng.",
        impact: "Partial: credit deduction only, not all of RL-3",
      },
    } as Record<
      number,
      { department: string; role: string; owner: string; impact: string }
    >,
  },
  decisions: [
    "Model and pipeline first (S1); scenarios UI/backend — after a stable I/O (S2).",
    "We are not waiting for billing: soft limit in our service, credit integration — a separate epic after Q3.",
    "PRE-2 does not block the pilot: only a seasonal moisture profile in MD-2.",
    "PRE-1 must close in S1 — otherwise the \"not forest\" validation falls back to an allowlist in RL-1.",
  ],
  nextStep:
    "Align the plan with stakeholders → hand tasks off to Linear → start Sprint 1 (model).",
}

/** Estimation, capacity and planning risks */
export const estimateRisksArtifact = {
  id: "estimate-risks",
  title: "Estimates and Risks",
  status: "Ready for approval",
  version: "v1.0",
  date: "2026-05-12",
  author: {
    name: "Thomas Dupont",
    role: "Tech Lead",
    team: "Forest Platform",
  },
  recipients: [
    "Product Manager",
    "Development",
    "QA",
    "Data Analysts",
    "Head of Product",
  ],
  basedOn: "Work Plan v1.0 + Backlog v1.0",
  summary:
    "MVP total: 69 sp across 3 sprints at a team capacity of ~22–24 sp/sprint (+ data in S1). Critical path: MD-1 → MD-2/MD-3 → RL-3 → RL-4/RL-5 → RL-6 → QA → demo. Model first, then UI/backend. The main external blocker is billing; it is removed by the soft limit.",
  method:
    "Planning poker at the May 12 grooming session. Reference: 5 sp ≈ 3–4 engineering days including review. A 15% buffer is built into S3 (QA + demo).",
  capacity: [
    {
      role: "Data / ML",
      people: "1 (Sophie) + Marc part-time",
      perSprint: "13–18 sp (peak in S1)",
      note: "MD-1…MD-3 in S1",
    },
    {
      role: "Frontend",
      people: "1 (Alex)",
      perSprint: "8–10 sp",
      note: "Main load in S2–S3",
    },
    {
      role: "Backend",
      people: "1 (Nina)",
      perSprint: "8–10 sp",
      note: "MD-3 support → RL-3, soft limit, RL-5",
    },
    {
      role: "Fullstack",
      people: "1 (Marc)",
      perSprint: "5–8 sp after S1",
      note: "S1 with data; S3 — RL-7",
    },
    {
      role: "QA",
      people: "0.5 (Sophie)",
      perSprint: "3–5 sp",
      note: "Main load in S3",
    },
  ],
  totals: {
    committedPoints: 69,
    s1: 23,
    s2: 29,
    s3: 17,
    velocityAssumption: "22–24 sp/sprint product + data in S1",
  },
  estimates: [
    {
      id: "MD-1",
      points: 5,
      confidence: "High",
      note: "The contract is already sketched in the spec",
    },
    {
      id: "MD-2",
      points: 13,
      confidence: "Medium",
      note: "The biggest chunk; a spike was already done",
    },
    {
      id: "MD-3",
      points: 5,
      confidence: "High",
      note: "PRE-3 methodology is ready",
    },
    { id: "RL-1", points: 5, confidence: "High", note: "UI on top of the ready map" },
    {
      id: "RL-2",
      points: 3,
      confidence: "High",
      note: "Season without a weather API",
    },
    {
      id: "RL-3",
      points: 8,
      confidence: "Medium",
      note: "Orchestration of the ready pipeline",
    },
    {
      id: "RL-SOFT-LIMIT",
      points: 3,
      confidence: "High",
      note: "Instead of billing",
    },
    {
      id: "RL-4",
      points: 5,
      confidence: "High",
      note: "Player only; frames come from MD-2",
    },
    {
      id: "RL-5",
      points: 5,
      confidence: "High",
      note: "UI on top of MD-3",
    },
    { id: "RL-6", points: 5, confidence: "High", note: "Reports are ready" },
    {
      id: "RL-7",
      points: 5,
      confidence: "Medium",
      note: "Email best-effort",
    },
    { id: "QA-1", points: 5, confidence: "High", note: "Pilot scenario" },
    { id: "DEMO-1", points: 2, confidence: "High", note: "Demo packaging" },
  ],
  criticalPath: [
    "MD-1 → MD-2 / MD-3 (S1: model and pipeline)",
    "MD-2 → RL-3 → RL-4 → RL-5 → RL-6",
    "PRE-1 → RL-1 (zone validation, in parallel with the model)",
    "RL-6 + RL-7 → QA-1 → Demo July 3",
  ],
  risks: [
    {
      id: "R1",
      title: "Billing is not ready",
      level: "High",
      impact: "Credits cannot be properly deducted",
      mitigation:
        "Soft limit in the scenarios service; billing epic after the platform refactoring",
      owner: "PM + Tech Lead",
    },
    {
      id: "R2",
      title: "PRE-1 slips beyond S1",
      level: "High",
      impact: "No automatic \"not forest\" check in RL-1",
      mitigation: "Allowlist of pilot zones; escalation to the geo team by May 22",
      owner: "Architecture / Geo",
    },
    {
      id: "R3",
      title: "MD-2 (fire model) balloons",
      level: "Medium",
      impact: "Slip of RL-3/player and the whole of S2",
      mitigation: "A tech spike was already done; area limit; pre-rendered frames; the UI waits for a stable I/O",
      owner: "Data Lead + Tech Lead",
    },
    {
      id: "R4",
      title: "Email notifications are unstable",
      level: "Low",
      impact: "The user will not receive an email about a long calculation",
      mitigation: "In-app is mandatory; email is not in the pilot DoD",
      owner: "Product",
    },
    {
      id: "R5",
      title: "No weather for the date (PRE-2)",
      level: "Medium",
      impact: "Weaker \"wow\" on an exact date",
      mitigation: "Seasonal profile in MD-2; honest UI in RL-2; PRE-2 in the next release",
      owner: "Data + PM",
    },
  ],
  openQuestions: [
    "Daily soft limit value for the pilot tenant (proposal: 10)",
    "Design freeze date before S2 (proposed: May 29)",
  ],
  nextStep:
    "Approve the billing workaround and soft limit at the sign-off → publish tasks to Linear.",
}

/** Go/No-Go gate before handoff — final decision record */
export const finalDecisionArtifact = {
  id: "final-decision",
  title: "Final Decision (Go + freeze)",
  status: "Approved",
  version: "v1.0",
  date: "2026-05-14",
  meeting: "MVP Gate \"Risk and Loss\" · May 14, 2026, 11:00–12:15",
  author: {
    name: "Camille Bernard",
    role: "Product Manager",
    team: "Forest Platform",
  },
  recipients: [
    "Business Sponsor",
    "Architect",
    "Tech Lead",
    "Data Lead",
    "Head of Product",
  ],
  basedOn:
    "Full Specification v1.0 + Figma handoff v1.0 + Backlog v1.0 + Work Plan v1.0 + Estimates and Risks v1.0",
  summary:
    "Approval of the \"Risk and Loss\" MVP: Go with conditions. Insurer pilot on July 3. Model and pipeline first (S1), then UI/backend (S2). We are not waiting for credit billing — soft limit; PRE-2 does not block — seasonal profile.",
  decision: {
    verdict: "Go with conditions",
    rationale:
      "The pilot's value is confirmed (player + loss in €). The architecture and I/O contracts are sufficient to start. The plan is realistic with the \"model → application\" order. External blockers (billing, weather for the date) are covered by explicit workarounds rather than \"we'll figure it out later\".",
    releaseTarget: "Internal demo June 26 · Insurer pilot July 3",
  },
  packageReviewed: [
    { id: "tz", title: "Full Specification", version: "v1.0", status: "Accepted" },
    {
      id: "figma",
      title: "Figma handoff",
      version: "v1.0",
      status: "Accepted",
    },
    { id: "backlog", title: "Backlog", version: "v1.0", status: "Accepted" },
    {
      id: "plan",
      title: "Work Plan",
      version: "v1.0",
      status: "Accepted",
    },
    {
      id: "estimate-risks",
      title: "Estimates and Risks",
      version: "v1.0",
      status: "Accepted",
    },
  ],
  conditions: [
    {
      id: "C1",
      title: "Billing → soft limit",
      detail:
        "Credit deduction (BR-1) is out of the MVP. The scenarios service has a daily soft limit of 10 runs per pilot tenant. The billing epic — after the Q3 platform refactoring.",
      owner: "PM + Tech Lead",
    },
    {
      id: "C2",
      title: "PRE-2 → seasonal profile",
      detail:
        "Weather/moisture proxy for an arbitrary date does not block the pilot. MD-2 and RL-2 work in \"season / average profile\" mode; the UI carries an honest disclaimer.",
      owner: "Data + PM",
    },
    {
      id: "C3",
      title: "PRE-1 by the end of S1",
      detail:
        "The cadastre land_cover is required for \"not forest\" validation. Until the API is ready — an allowlist of pilot polygons. If PRE-1 slips — escalation to geo by May 22.",
      owner: "Architecture / Geo",
    },
    {
      id: "C4",
      title: "Delivery order: model before UI",
      detail:
        "S1 = MD-1…MD-3. The UI and scenarios backend (RL-*) start after a stable I/O contract. The player reads frames and does not compute \"on the fly\".",
      owner: "Tech Lead + Data Lead",
    },
  ],
  outOfScope: [
    "Insurance underwriting accuracy and a legally binding loss estimate",
    "Weather for an arbitrary date (PRE-2) — next release",
    "Deducting money/credits via platform billing",
    "Email about a long calculation as a mandatory DoD item (in-app only)",
    "Real-time fires, alerts, external insurer API",
  ],
  votes: [
    {
      role: "Business Sponsor",
      name: "Marie Dupont",
      verdict: "Approve",
      note: "The insurer pilot matters more than perfect billing. Soft limit is fine.",
    },
    {
      role: "Product Manager",
      name: "Camille Bernard",
      verdict: "Approve",
      note: "We record conditions C1–C4 in the decision and in Linear.",
    },
    {
      role: "Architect",
      name: "Julien Moreau",
      verdict: "Approve",
      note: "Contracts and the scenarios service are fine. PRE-1 is the only hard risk in S1.",
    },
    {
      role: "Tech Lead",
      name: "Thomas Dupont",
      verdict: "Approve",
      note: "Capacity for 3 sprints adds up; MD-2 is the main risk buffer.",
    },
    {
      role: "Data Lead",
      name: "Sophie Rey",
      verdict: "Approve",
      note: "The €/ha methodology is approved; the disclaimer is mandatory in the UI and report.",
    },
  ],
  resolvedQuestions: [
    {
      question: "Daily soft limit value for the pilot tenant",
      answer: "10 runs / day / tenant",
    },
    {
      question: "Design freeze date before S2",
      answer: "May 29 (end of S1); state changes — via change request",
    },
  ],
  freezeNote:
    "Package freeze is part of this same decision record (not a separate document). Baseline for Sprints 1–3 and the July 3 pilot. Wording tweaks in Linear are fine; scope / DoD / removing C1–C4 require a change request.",
  freezePackage: [
    {
      title: "Full Specification",
      version: "v1.0",
      date: "2026-05-06",
      status: "Freeze",
    },
    {
      title: "Figma handoff",
      version: "v1.0",
      date: "2026-05-06",
      status: "Freeze until May 29",
    },
    {
      title: "Backlog (MD-* + RL-*)",
      version: "v1.0",
      date: "2026-05-06",
      status: "Freeze",
    },
    {
      title: "Work Plan",
      version: "v1.0",
      date: "2026-05-12",
      status: "Freeze",
    },
    {
      title: "Estimates and Risks",
      version: "v1.0",
      date: "2026-05-12",
      status: "Freeze",
    },
    {
      title: "Final Decision",
      version: "v1.0",
      date: "2026-05-14",
      status: "Freeze",
    },
  ],
  signatures: [
    {
      role: "Business / value and priority",
      name: "Marie Dupont",
      signsFor: "Pilot scope, soft limit, pilot date of July 3",
      status: "Signed",
      signedAt: "2026-05-14",
    },
    {
      role: "Product / entire package",
      name: "Camille Bernard",
      signsFor: "Spec, backlog, conditions C1–C4, pilot DoD",
      status: "Signed",
      signedAt: "2026-05-14",
    },
    {
      role: "Architecture / engineering",
      name: "Julien Moreau",
      signsFor: "Architecture, API/contracts, handling of platform blockers",
      status: "Signed",
      signedAt: "2026-05-14",
    },
    {
      role: "Tech Lead / delivery",
      name: "Thomas Dupont",
      signsFor: "Estimates, plan, capacity, readiness for S1",
      status: "Signed",
      signedAt: "2026-05-14",
    },
    {
      role: "Data / model and methodology",
      name: "Sophie Rey",
      signsFor: "MD-* start, €/ha methodology, loss disclaimer",
      status: "Signed",
      signedAt: "2026-05-14",
    },
  ],
  compliance: [
    {
      topic: "Pilot tenant data",
      verdict: "Ok",
      note: "The pilot runs on an internal / partner tenant; we do not expand the PII of platform users.",
    },
    {
      topic: "€/ha loss methodology",
      verdict: "Ok with disclaimer",
      note: "In the UI and report: \"proxy estimate, not insurance underwriting\". A legally binding estimate is out of the MVP.",
    },
    {
      topic: "Billing / money",
      verdict: "Deferred",
      note: "We do not include monetary deduction. Soft limit without financial transactions — agreed with the business.",
    },
    {
      topic: "Security (scenarios service)",
      verdict: "Ok for pilot",
      note: "Tenant permissions as on the platform; the rate limit (soft limit) reduces the risk of run abuse.",
    },
  ],
  changePolicy: [
    {
      title: "Requires new approval",
      items: [
        "Expanding pilot scope (new segments, real-time, external API)",
        "Lifting or replacing conditions C1–C4",
        "Shifting the pilot date by more than 1 week",
        "Changing the loss methodology without a disclaimer",
      ],
    },
    {
      title: "Can be adjusted within the sprint",
      items: [
        "Task wording and technical implementation details",
        "Minor UX tweaks to states before the May 29 design freeze",
        "Allowlist of pilot polygons until PRE-1 is ready",
        "Soft limit value within the 5–15 range based on internal test runs",
      ],
    },
  ],
  nextStep:
    "Stage 8 — Handoff to the team: publish MD-* and RL-* in Linear, tech briefing, links to the freeze package.",
}
/** Stage 8 — publish tasks and tech briefing */
export const handoffBriefArtifact = {
  id: "handoff-brief",
  title: "Handoff brief",
  status: "Published",
  version: "v1.0",
  date: "2026-05-15",
  author: {
    name: "Thomas Dupont",
    role: "Tech Lead",
    team: "Forest Platform",
  },
  summary:
    "After Go + freeze: MD-* and RL-* are published in Linear, the team has baseline links and completed the tech briefing. The planning draft board is now published.",
  tracker: {
    board: "Linear · Forest Platform · Epic RISK-LOSS-MVP",
    note: "Task status: Ready for Sprint 1. Ownership assigned in the briefing.",
    published: [
      "MD-1…MD-4 — model and pipeline (S1)",
      "RL-1…RL-6 — scenario UI/backend (S2–S3)",
      "PRE-1 and soft-limit dependencies captured in descriptions",
    ],
  },
  briefing: {
    when: "15 May 2026, 10:00–11:00",
    attendees: "Tech lead, backend, frontend, data, QA, PM, design",
    agenda: [
      "July 3 pilot goal and conditions C1–C4",
      "I/O contracts and model → UI order",
      "Figma freeze and error states",
      "Pilot DoD and question channels",
    ],
  },
  links: [
    {
      label: "Freeze pack (Notion)",
      url: "notion.so/symbiose/risk-loss-approved-baseline-v1",
    },
    {
      label: "Figma handoff",
      url: "figma.com/file/symbiose-risk-loss-handoff-v1",
    },
    {
      label: "Linear epic",
      url: "linear.app/symbiose/issue/FP-RISK-LOSS-MVP",
    },
  ],
}

/** Stage 9 — QA evidence before release */
export const qaReportArtifact = {
  id: "qa-report",
  title: "QA report",
  status: "Ready for pilot release",
  version: "v1.0",
  date: "2026-06-25",
  author: {
    name: "Elisa Petit",
    role: "QA",
    team: "Forest Platform",
  },
  summary:
    "Engineering tests (not prototype validation): critical scenario path, billing soft-limit, notifications, and reports. No P0 blockers.",
  coverage: [
    {
      name: "Critical path",
      result: "12/12 acceptance stories — pass",
    },
    {
      name: "Map / reports regression",
      result: "Smoke ok on the pilot tenant",
    },
    {
      name: "API automated tests",
      result: "Scenario contracts green",
    },
  ],
  openBugs: [
    {
      id: "BUG-214",
      severity: "P2",
      title: "Long-running calculation email sometimes delayed",
      note: "In-app is mandatory in DoD; email does not block the pilot",
    },
    {
      id: "BUG-219",
      severity: "P3",
      title: "Minor player timeline shift on Safari",
      note: "Known workaround; fix in the next sprint",
    },
  ],
  readiness:
    "Go for the internal demo on 26 June and the insurer pilot on 3 July, keeping soft-limit and the methodology disclaimer.",
  operationalReadiness: [
    {
      item: "Monitoring / alerting",
      status: "Ok",
      note: "Scenario-service latency and error rate + UI error boundary",
    },
    {
      item: "Feature flag",
      status: "Ok",
      note: "risk-loss-pilot · tenant allowlist",
    },
    {
      item: "Rollback",
      status: "Ok",
      note: "Flag off + previous UI deploy; scenario data read-only for the pilot",
    },
    {
      item: "Migrations",
      status: "Ok",
      note: "scenarios / snapshots tables applied on staging and prod",
    },
    {
      item: "Security light-check",
      status: "Ok for pilot",
      note: "Tenant permissions; no PII expansion",
    },
  ],
}

/** Stage 10 — release and pilot metrics */
export const releaseReportArtifact = {
  id: "release-report",
  title: "Release report",
  status: "Pilot live",
  version: "v1.0",
  date: "2026-07-10",
  author: {
    name: "Camille Bernard",
    role: "Product Manager",
    team: "Forest Platform",
  },
  summary:
    "Risk and Loss module is in pilot with the insurance partner. Deploy is done; Impact is still collecting — a feature is not “done” just because it shipped.",
  metricsOwner: "Camille Bernard (PM) · metrics sponsor: Marie Dupont (business)",
  deploy: {
    env: "Production · feature flag risk-loss-pilot",
    note: "Enabled for allowlisted pilot tenants. Scenario-service error and latency monitoring — green.",
  },
  metrics: [
    {
      name: "Pilots with the risk module",
      target: "≥ 5 / quarter",
      actual: "1 active pilot (started 3 July)",
    },
    {
      name: "Demo → next step",
      target: "+20% in insurance segment",
      actual: "Tracking; first demo → pilot closed",
    },
    {
      name: "Widget usage",
      target: "≥ 3 scenarios / week per active user",
      actual: "Average 4.2 in the first pilot week",
    },
  ],
  impactDecision: {
    verdict: "Iterate",
    rationale:
      "Pilot is live and critical-path adoption looks fine. Scaling to all tenants is early: PRE-2 and hard billing are missing. Next cycle is Iterate, not Scale.",
    optionsConsidered: ["Scale", "Iterate", "Pivot", "Sunset"],
  },
  nextIteration: [
    "PRE-2: weather for a specific date (seasonal profile for now)",
    "Hard credit billing instead of soft-limit",
    "Compare two scenarios (was nice-to-have)",
  ],
}
