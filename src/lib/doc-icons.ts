import {
  BrainCircuit,
  Building2,
  CalendarClock,
  CalendarDays,
  CircleCheck,
  ClipboardList,
  Cloud,
  CloudCog,
  Code2,
  CodeXml,
  Compass,
  FileCode2,
  FileText,
  Goal,
  HeartHandshake,
  Lightbulb,
  MessageSquare,
  Monitor,
  Network,
  PenTool,
  PieChart,
  RefreshCw,
  Rocket,
  Scale,
  Search,
  Settings,
  ShieldCheck,
  SquareKanban,
  Target,
  Terminal,
  TriangleAlert,
  User,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react"

export const stepIcons = {
  problem: Target,
  research: Search,
  concept: Lightbulb,
  prototype: CodeXml,
  spec: ClipboardList,
  planning: CalendarClock,
  approval: UsersRound,
  handoff: Terminal,
  development: Code2,
  release: Rocket,
} as const satisfies Record<string, LucideIcon>

export const artifactIcons = {
  "business-case": FileText,
  "research-report": Search,
  hlr: ClipboardList,
  "solution-concept": Lightbulb,
  architecture: Network,
  "ui-prototype": Monitor,
  "validation-results": ClipboardList,
  "full-spec": FileCode2,
  "figma-handoff": PenTool,
  backlog: SquareKanban,
  "work-plan": CalendarDays,
  "estimate-risks": TriangleAlert,
  "final-decision": CircleCheck,
  "handoff-brief": SquareKanban,
  "qa-report": ShieldCheck,
  "release-report": Cloud,
} as const satisfies Record<string, LucideIcon>

export const participantIcons = {
  pm: User,
  designer: PenTool,
  architect: Compass,
  "data-analysts": BrainCircuit,
  "tech-lead": Users,
  developers: Code2,
  qa: ShieldCheck,
  devops: CloudCog,
  business: Building2,
} as const satisfies Record<string, LucideIcon>

export const principleIcons = {
  user: HeartHandshake,
  data: PieChart,
  transparency: MessageSquare,
  iteration: RefreshCw,
  quality: CircleCheck,
  automation: Settings,
  priority: Scale,
} as const satisfies Record<string, LucideIcon>

export function getStepIcon(id: string): LucideIcon {
  return stepIcons[id as keyof typeof stepIcons] ?? Goal
}

export function getArtifactIcon(id: string): LucideIcon {
  return artifactIcons[id as keyof typeof artifactIcons] ?? FileText
}

export function getParticipantIcon(id: string): LucideIcon {
  return participantIcons[id as keyof typeof participantIcons] ?? User
}

export function getPrincipleIcon(id: string): LucideIcon {
  return principleIcons[id as keyof typeof principleIcons] ?? CircleCheck
}
