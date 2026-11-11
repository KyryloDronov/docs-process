import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import {
  Controls,
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react"
import {
  BarChart3,
  Boxes,
  Database,
  FileText,
  ListChecks,
  PenTool,
  Rocket,
  Search,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react"
import "@xyflow/react/dist/style.css"

import type {
  BpmnArtifact,
  BpmnArtifactIcon,
  BpmnEdge,
  BpmnLane,
  BpmnNode,
} from "@/data/bpmn-task-process"
import { useBpmnData } from "@/hooks/use-locale-data"
import { cn } from "@/lib/utils"

const LANE_H = 188
const LABEL_W = 132
const COL_W = 230
const NODE_W = 178
const NODE_H = 72
const EVENT_W = 100
const EVENT_H = 96
const XOR_W = 120
const XOR_H = 108
const ARTIFACT_W = 122
const ARTIFACT_H = 34
const PAD_X = 22

const COLORS = {
  main: "#334155",
  approve: "#059669",
  reject: "#e11d48",
  artifact: "#0284c7",
}

const ARTIFACT_ICONS: Record<BpmnArtifactIcon, LucideIcon> = {
  doc: FileText,
  figma: PenTool,
  chart: BarChart3,
  research: Search,
  database: Database,
  architecture: Boxes,
  checklist: ListChecks,
  alert: TriangleAlert,
  rocket: Rocket,
}

type Side = "left" | "right" | "top" | "bottom"

type LaneBgData = { tone: string }
type LaneLabelData = { label: string; accent: string }
type ActivityData = {
  label: string
  subtitle?: string
  kind: BpmnNode["kind"]
  accent: string
  ports: {
    inLeft: boolean
    inTop: boolean
    inBottom: boolean
    outRight: boolean
    outTop: boolean
    outBottom: boolean
  }
}
type ArtifactChipData = {
  label: string
  icon: BpmnArtifactIcon
}

function LaneBgNode({ data }: NodeProps<Node<LaneBgData>>) {
  return (
    <div className={cn("h-full w-full border-b border-border/60", data.tone)} />
  )
}

function LaneLabelNode({ data }: NodeProps<Node<LaneLabelData>>) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center rounded-xl border bg-background px-3 text-xs font-semibold tracking-tight shadow-none",
        data.accent
      )}
    >
      {data.label}
    </div>
  )
}

function PortHandle({
  id,
  type,
  position,
}: {
  id: string
  type: "source" | "target"
  position: Position
}) {
  return (
    <Handle
      id={id}
      type={type}
      position={position}
      isConnectable={false}
      style={{
        opacity: 0,
        pointerEvents: "none",
        border: "none",
        background: "transparent",
        width: 1,
        height: 1,
        minWidth: 1,
        minHeight: 1,
      }}
    />
  )
}

function Ports({ ports }: { ports: ActivityData["ports"] }) {
  return (
    <>
      {ports.inLeft ? (
        <PortHandle id="in-left" type="target" position={Position.Left} />
      ) : null}
      {ports.inTop ? (
        <PortHandle id="in-top" type="target" position={Position.Top} />
      ) : null}
      {ports.inBottom ? (
        <PortHandle id="in-bottom" type="target" position={Position.Bottom} />
      ) : null}
      {ports.outRight ? (
        <PortHandle id="out-right" type="source" position={Position.Right} />
      ) : null}
      {ports.outTop ? (
        <PortHandle id="out-top" type="source" position={Position.Top} />
      ) : null}
      {ports.outBottom ? (
        <PortHandle id="out-bottom" type="source" position={Position.Bottom} />
      ) : null}
    </>
  )
}

function ArtifactChipNode({ data }: NodeProps<Node<ArtifactChipData>>) {
  const Icon = ARTIFACT_ICONS[data.icon] ?? FileText
  return (
    <div className="relative flex h-full w-full items-center gap-1.5 rounded-md border border-sky-300/80 bg-sky-50/95 px-2 text-sky-900 shadow-none dark:border-sky-800 dark:bg-sky-950/70 dark:text-sky-100">
      <PortHandle id="in-top" type="target" position={Position.Top} />
      <span className="flex size-6 shrink-0 items-center justify-center rounded border border-sky-200 bg-background dark:border-sky-800">
        <Icon className="size-3.5" strokeWidth={2} aria-hidden />
      </span>
      <span className="truncate text-[10px] font-semibold leading-tight">
        {data.label}
      </span>
    </div>
  )
}

function ActivityNode({ data }: NodeProps<Node<ActivityData>>) {
  if (data.kind === "start" || data.kind === "end") {
    const isEnd = data.kind === "end"
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-1.5">
        <Ports ports={data.ports} />
        <div
          className={cn(
            "flex size-10 items-center justify-center rounded-full border-2 bg-background",
            isEnd
              ? "border-[3px] border-slate-800 dark:border-slate-200"
              : "border-slate-500"
          )}
          aria-hidden
        >
          {isEnd ? (
            <div className="size-3 rounded-sm bg-slate-800 dark:bg-slate-200" />
          ) : (
            <div className="ml-0.5 size-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-slate-600" />
          )}
        </div>
        <div className="px-1 text-center text-[11px] font-semibold leading-snug">
          {data.label}
        </div>
        {data.subtitle ? (
          <div className="px-1 text-center text-[10px] leading-snug text-muted-foreground">
            {data.subtitle}
          </div>
        ) : null}
      </div>
    )
  }

  if (data.kind === "xor") {
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-1">
        <Ports ports={data.ports} />
        <div className="relative flex size-12 items-center justify-center">
          <div className="absolute size-9 rotate-45 border-2 border-slate-700 bg-background dark:border-slate-300" />
          <span className="relative z-10 text-base font-bold leading-none text-slate-800 dark:text-slate-100">
            ×
          </span>
        </div>
        <div className="max-w-[110px] px-1 text-center text-[11px] font-semibold leading-snug">
          {data.label}
        </div>
        {data.subtitle ? (
          <div className="max-w-[110px] px-1 text-center text-[10px] leading-snug text-muted-foreground">
            {data.subtitle}
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col justify-center rounded-xl border bg-card px-3 py-2 shadow-none",
        data.accent
      )}
    >
      <Ports ports={data.ports} />
      <div className="text-xs font-semibold leading-snug">{data.label}</div>
      {data.subtitle ? (
        <div className="mt-1 text-[11px] leading-snug text-muted-foreground">
          {data.subtitle}
        </div>
      ) : null}
    </div>
  )
}

const nodeTypes = {
  laneBg: LaneBgNode,
  laneLabel: LaneLabelNode,
  activity: ActivityNode,
  artifactChip: ArtifactChipNode,
}

function laneIndex(lanes: BpmnLane[], laneId: string) {
  return Math.max(
    0,
    lanes.findIndex((lane) => lane.id === laneId)
  )
}

function resolveHandles(
  sourceLane: number,
  targetLane: number,
  sourceCol: number,
  targetCol: number
): {
  sourceHandle: string
  targetHandle: string
  sourceSide: Side
  targetSide: Side
} {
  if (sourceLane === targetLane) {
    if (targetCol >= sourceCol) {
      return {
        sourceHandle: "out-right",
        targetHandle: "in-left",
        sourceSide: "right",
        targetSide: "left",
      }
    }
    return {
      sourceHandle: "out-top",
      targetHandle: "in-top",
      sourceSide: "top",
      targetSide: "top",
    }
  }

  if (sourceLane < targetLane) {
    return {
      sourceHandle: "out-bottom",
      targetHandle: "in-top",
      sourceSide: "bottom",
      targetSide: "top",
    }
  }

  return {
    sourceHandle: "out-top",
    targetHandle: "in-bottom",
    sourceSide: "top",
    targetSide: "bottom",
  }
}

function emptyPorts(): ActivityData["ports"] {
  return {
    inLeft: false,
    inTop: false,
    inBottom: false,
    outRight: false,
    outTop: false,
    outBottom: false,
  }
}

function edgeColor(kind: BpmnEdge["kind"]) {
  if (kind === "approve") return COLORS.approve
  if (kind === "reject") return COLORS.reject
  if (kind === "artifact") return COLORS.artifact
  return COLORS.main
}

function Legend() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-wrap gap-4 rounded-xl border bg-muted/30 px-4 py-3 text-xs text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="size-3 rounded-full border-2 border-slate-500 bg-background" />
        {t("foundation.bpmnLegendStart")}
      </div>
      <div className="flex items-center gap-2">
        <span className="size-3 rounded-full border-[3px] border-slate-800 bg-background" />
        {t("foundation.bpmnLegendEnd")}
      </div>
      <div className="flex items-center gap-2">
        <span className="relative flex size-4 items-center justify-center">
          <span className="absolute size-2.5 rotate-45 border border-slate-700 bg-background" />
          <span className="relative text-[9px] font-bold">×</span>
        </span>
        {t("foundation.bpmnLegendXor")}
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded border border-sky-300 bg-sky-50 px-1.5 py-0.5 text-[9px] font-semibold text-sky-900">
          <FileText className="size-2.5" />
          {t("foundation.bpmnLegendArtifactChip")}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-0.5 w-6 rounded bg-emerald-600" />
        {t("foundation.bpmnLegendApprove")}
      </div>
      <div className="flex items-center gap-2">
        <span className="h-0.5 w-6 rounded bg-rose-600" />
        {t("foundation.bpmnLegendReject")}
      </div>
      <div className="flex items-center gap-2">
        <span className="h-0.5 w-6 rounded border-t-2 border-dashed border-sky-600" />
        {t("foundation.bpmnLegendArtifact")}
      </div>
    </div>
  )
}

function buildGraph(bpmn: {
  bpmnLanes: BpmnLane[]
  bpmnNodes: BpmnNode[]
  bpmnEdges: BpmnEdge[]
  bpmnArtifacts: BpmnArtifact[]
}) {
  const maxCol = Math.max(...bpmn.bpmnNodes.map((n) => n.column), 0)
  const width = LABEL_W + (maxCol + 1) * COL_W + PAD_X * 2
  const height = bpmn.bpmnLanes.length * LANE_H

  const byId = new Map(bpmn.bpmnNodes.map((n) => [n.id, n]))
  const artifactsByTask = new Map<string, BpmnArtifact[]>()
  for (const art of bpmn.bpmnArtifacts) {
    const list = artifactsByTask.get(art.afterNodeId) ?? []
    list.push(art)
    artifactsByTask.set(art.afterNodeId, list)
  }

  const portsById = new Map<string, ActivityData["ports"]>()
  for (const node of bpmn.bpmnNodes) {
    portsById.set(node.id, emptyPorts())
  }

  const routed = bpmn.bpmnEdges.map((edge) => {
    const source = byId.get(edge.source)
    const target = byId.get(edge.target)
    const sLane = source ? laneIndex(bpmn.bpmnLanes, source.laneId) : 0
    const tLane = target ? laneIndex(bpmn.bpmnLanes, target.laneId) : 0
    const handles = resolveHandles(
      sLane,
      tLane,
      source?.column ?? 0,
      target?.column ?? 0
    )

    const sp = portsById.get(edge.source)
    const tp = portsById.get(edge.target)
    if (sp) {
      if (handles.sourceSide === "right") sp.outRight = true
      if (handles.sourceSide === "top") sp.outTop = true
      if (handles.sourceSide === "bottom") sp.outBottom = true
    }
    if (tp) {
      if (handles.targetSide === "left") tp.inLeft = true
      if (handles.targetSide === "top") tp.inTop = true
      if (handles.targetSide === "bottom") tp.inBottom = true
    }

    return { edge, ...handles }
  })

  // Association ports: task → artifact chip under it
  for (const art of bpmn.bpmnArtifacts) {
    const sp = portsById.get(art.afterNodeId)
    if (sp) sp.outBottom = true
  }

  const laneBgNodes: Node[] = bpmn.bpmnLanes.map((lane, index) => ({
    id: `lane-bg-${lane.id}`,
    type: "laneBg",
    position: { x: 0, y: index * LANE_H },
    data: { tone: lane.tone },
    style: { width, height: LANE_H },
    selectable: false,
    draggable: false,
    focusable: false,
    zIndex: -2,
  }))

  const laneLabelNodes: Node[] = bpmn.bpmnLanes.map((lane, index) => ({
    id: `lane-label-${lane.id}`,
    type: "laneLabel",
    position: { x: 12, y: index * LANE_H + (LANE_H - 84) / 2 },
    data: { label: lane.label, accent: lane.accent },
    style: { width: 108, height: 84 },
    selectable: false,
    draggable: false,
    focusable: false,
    zIndex: 2,
  }))

  const activityNodes: Node[] = bpmn.bpmnNodes.map((node) => {
    const lane = bpmn.bpmnLanes[laneIndex(bpmn.bpmnLanes, node.laneId)]
    const li = laneIndex(bpmn.bpmnLanes, node.laneId)
    const isEvent = node.kind === "start" || node.kind === "end"
    const isXor = node.kind === "xor"
    const w = isXor ? XOR_W : isEvent ? EVENT_W : NODE_W
    const h = isXor ? XOR_H : isEvent ? EVENT_H : NODE_H
    const hasArtifact = artifactsByTask.has(node.id)
    const y = hasArtifact
      ? li * LANE_H + 14
      : li * LANE_H + (LANE_H - h) / 2

    return {
      id: node.id,
      type: "activity",
      position: {
        x: LABEL_W + PAD_X + node.column * COL_W + (COL_W - w) / 2,
        y,
      },
      data: {
        label: node.label,
        subtitle: node.subtitle,
        kind: node.kind,
        accent: lane?.accent ?? "",
        ports: portsById.get(node.id) ?? emptyPorts(),
      },
      style: { width: w, height: h },
      zIndex: 3,
    }
  })

  const artifactNodes: Node[] = bpmn.bpmnArtifacts.flatMap((art) => {
    const parent = byId.get(art.afterNodeId)
    if (!parent) return []
    const li = laneIndex(bpmn.bpmnLanes, parent.laneId)
    return [
      {
        id: art.id,
        type: "artifactChip",
        position: {
          x:
            LABEL_W +
            PAD_X +
            parent.column * COL_W +
            (COL_W - ARTIFACT_W) / 2,
          y: li * LANE_H + LANE_H - ARTIFACT_H - 10,
        },
        data: { label: art.label, icon: art.icon },
        style: { width: ARTIFACT_W, height: ARTIFACT_H },
        selectable: false,
        draggable: false,
        zIndex: 4,
      },
    ]
  })

  const flowEdges: Edge[] = routed.map(({ edge, sourceHandle, targetHandle }) => {
    const kind = edge.kind ?? "main"
    const color = edgeColor(kind)

    return {
      id: edge.id,
      source: edge.source,
      target: edge.target,
      sourceHandle,
      targetHandle,
      type: "smoothstep",
      label: edge.label,
      labelStyle: {
        fill: color,
        fontWeight: 600,
        fontSize: 10,
      },
      labelBgStyle: { fill: "var(--background)", fillOpacity: 0.94 },
      labelBgPadding: [4, 6] as [number, number],
      labelBgBorderRadius: 6,
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color,
        width: 14,
        height: 14,
      },
      style: {
        stroke: color,
        strokeWidth: kind === "approve" || kind === "reject" ? 2.25 : 2,
        ...(kind === "artifact" || kind === "reject"
          ? { strokeDasharray: "6 4" }
          : {}),
      },
      zIndex: 1,
    }
  })

  const associationEdges: Edge[] = bpmn.bpmnArtifacts.map((art) => ({
    id: `assoc-${art.id}`,
    source: art.afterNodeId,
    target: art.id,
    sourceHandle: "out-bottom",
    targetHandle: "in-top",
    type: "straight",
    markerEnd: undefined,
    style: {
      stroke: COLORS.artifact,
      strokeWidth: 1.25,
      strokeDasharray: "3 3",
    },
    zIndex: 0,
  }))

  return {
    nodes: [
      ...laneBgNodes,
      ...laneLabelNodes,
      ...activityNodes,
      ...artifactNodes,
    ],
    edges: [...flowEdges, ...associationEdges],
    width,
    height,
  }
}

export function ProcessSwimlanes({ className }: { className?: string }) {
  const bpmn = useBpmnData()

  const { nodes, edges, width, height } = useMemo(
    () =>
      buildGraph({
        bpmnLanes: bpmn.bpmnLanes,
        bpmnNodes: bpmn.bpmnNodes,
        bpmnEdges: bpmn.bpmnEdges,
        bpmnArtifacts: bpmn.bpmnArtifacts,
      }),
    [bpmn]
  )

  return (
    <div className={cn("space-y-3", className)}>
      <div className="process-swimlanes relative h-[min(72vh,720px)] w-full min-w-0 overflow-hidden rounded-2xl border bg-background">
        <style>{`
          .process-swimlanes .react-flow__handle {
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
            border: 0 !important;
            background: transparent !important;
            width: 1px !important;
            height: 1px !important;
            min-width: 0 !important;
            min-height: 0 !important;
          }
          .process-swimlanes .react-flow__edge-text {
            font-size: 10px;
          }
        `}</style>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.08, minZoom: 0.35, maxZoom: 1.15 }}
          minZoom={0.35}
          maxZoom={1.6}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag
          panOnScroll={false}
          zoomOnScroll
          zoomOnPinch
          zoomOnDoubleClick
          proOptions={{ hideAttribution: true }}
          defaultEdgeOptions={{ type: "smoothstep" }}
          style={{ width: "100%", height: "100%" }}
        >
          <Controls showInteractive={false} />
        </ReactFlow>
        <span className="sr-only">
          {width}×{height}
        </span>
      </div>
      <p className="text-[11px] text-muted-foreground">{bpmn.bpmnMeta.subtitle}</p>
      <Legend />
    </div>
  )
}
