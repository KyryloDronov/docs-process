import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import {
  Background,
  Controls,
  Handle,
  MarkerType,
  MiniMap,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

import { cn } from "@/lib/utils"

type FlowNodeData = {
  label: string
  subtitle?: string
  tone?: "default" | "gate" | "loop"
}

const COLORS = {
  main: "#334155",
  gate: "#d97706",
  feedback: "#0284c7",
}

const nodeBase =
  "rounded-xl border px-3 py-2 text-left shadow-none min-w-[170px] max-w-[200px] bg-card"

function FlowNode({ data }: NodeProps<Node<FlowNodeData>>) {
  return (
    <div
      className={cn(
        nodeBase,
        data.tone === "gate" &&
          "border-amber-400 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/40",
        data.tone === "loop" &&
          "border-sky-400 bg-sky-50 dark:border-sky-700 dark:bg-sky-950/40"
      )}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="!size-2.5 !border-0 !bg-slate-500"
      />
      <Handle
        type="target"
        position={Position.Top}
        id="top"
        className="!size-2.5 !border-0 !bg-slate-500"
      />
      <div className="text-xs font-semibold leading-snug">{data.label}</div>
      {data.subtitle ? (
        <div className="mt-1 text-[11px] leading-snug text-muted-foreground">
          {data.subtitle}
        </div>
      ) : null}
      <Handle
        type="source"
        position={Position.Right}
        className="!size-2.5 !border-0 !bg-slate-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        className="!size-2.5 !border-0 !bg-slate-500"
      />
    </div>
  )
}

const nodeTypes = { stage: FlowNode }

const col = (i: number) => 40 + i * 230
const row = (i: number) => 40 + i * 170

function mainEdge(id: string, source: string, target: string): Edge {
  return {
    id,
    source,
    target,
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: COLORS.main,
      width: 16,
      height: 16,
    },
    style: { stroke: COLORS.main, strokeWidth: 2 },
  }
}

function gateEdge(id: string, source: string, target: string): Edge {
  return {
    id,
    source,
    target,
    type: "smoothstep",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: COLORS.gate,
      width: 16,
      height: 16,
    },
    style: { stroke: COLORS.gate, strokeWidth: 2.25 },
  }
}

function Legend() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-wrap gap-4 rounded-xl border bg-muted/30 px-4 py-3 text-xs text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="h-0.5 w-6 rounded bg-slate-600" />
        {t("flow.legendMain")}
      </div>
      <div className="flex items-center gap-2">
        <span className="h-0.5 w-6 rounded bg-amber-500" />
        {t("flow.legendGate")}
      </div>
      <div className="flex items-center gap-2">
        <span className="h-0.5 w-6 rounded border-t-2 border-dashed border-sky-600" />
        {t("flow.legendFeedback")}
      </div>
      <div className="flex items-center gap-2">
        <span className="size-3 rounded-sm border border-amber-400 bg-amber-50" />
        {t("flow.legendCheckpoint")}
      </div>
    </div>
  )
}

/** Matches the canonical 10 processSteps — same order as process.ts */
export function LifecycleFlow({ className }: { className?: string }) {
  const { t } = useTranslation()

  const memoNodes = useMemo((): Node[] => {
    const nodeData = (id: string, tone?: FlowNodeData["tone"]) => ({
      label: t(`flow.nodes.${id}.label`),
      subtitle: t(`flow.nodes.${id}.subtitle`),
      ...(tone ? { tone } : {}),
    })
    return [
      {
        id: "1",
        type: "stage",
        position: { x: col(0), y: row(0) },
        data: nodeData("1"),
      },
      {
        id: "2",
        type: "stage",
        position: { x: col(1), y: row(0) },
        data: nodeData("2"),
      },
      {
        id: "3",
        type: "stage",
        position: { x: col(2), y: row(0) },
        data: nodeData("3"),
      },
      {
        id: "4",
        type: "stage",
        position: { x: col(3), y: row(0) },
        data: nodeData("4", "gate"),
      },
      {
        id: "5",
        type: "stage",
        position: { x: col(0), y: row(1) },
        data: nodeData("5"),
      },
      {
        id: "6",
        type: "stage",
        position: { x: col(1), y: row(1) },
        data: nodeData("6"),
      },
      {
        id: "7",
        type: "stage",
        position: { x: col(2), y: row(1) },
        data: nodeData("7", "gate"),
      },
      {
        id: "8",
        type: "stage",
        position: { x: col(3), y: row(1) },
        data: nodeData("8"),
      },
      {
        id: "9",
        type: "stage",
        position: { x: col(1), y: row(2) },
        data: nodeData("9"),
      },
      {
        id: "10",
        type: "stage",
        position: { x: col(2), y: row(2) },
        data: nodeData("10", "loop"),
      },
    ]
  }, [t])

  const memoEdges = useMemo((): Edge[] => {
    return [
      mainEdge("e1-2", "1", "2"),
      mainEdge("e2-3", "2", "3"),
      mainEdge("e3-4", "3", "4"),
      {
        ...gateEdge("e4-5", "4", "5"),
        sourceHandle: "bottom",
        targetHandle: "top",
      },
      mainEdge("e5-6", "5", "6"),
      gateEdge("e6-7", "6", "7"),
      mainEdge("e7-8", "7", "8"),
      {
        ...mainEdge("e8-9", "8", "9"),
        sourceHandle: "bottom",
        targetHandle: "top",
      },
      mainEdge("e9-10", "9", "10"),
      {
        id: "e10-1",
        source: "10",
        target: "1",
        sourceHandle: "bottom",
        targetHandle: "top",
        type: "smoothstep",
        animated: true,
        label: t("flow.loopLabel"),
        labelStyle: { fill: COLORS.feedback, fontWeight: 600, fontSize: 11 },
        labelBgStyle: { fill: "#f0f9ff" },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: COLORS.feedback,
          width: 16,
          height: 16,
        },
        style: {
          stroke: COLORS.feedback,
          strokeWidth: 2,
          strokeDasharray: "6 4",
        },
      },
    ]
  }, [t])

  return (
    <div className={cn("space-y-3", className)}>
      <div className="h-[480px] w-full min-w-0 overflow-hidden rounded-2xl border bg-background">
        <ReactFlow
          nodes={memoNodes}
          edges={memoEdges}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.18 }}
          minZoom={0.4}
          maxZoom={1.3}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnScroll
          proOptions={{ hideAttribution: true }}
        >
          <Background gap={20} size={1} />
          <MiniMap pannable zoomable />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>
      <Legend />
    </div>
  )
}
