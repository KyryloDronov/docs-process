import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { format as formatDate } from "date-fns"
import { enUS, ru } from "date-fns/locale"
import { Gantt, Willow } from "@svar-ui/react-gantt"
import type { ILink, ITask, TID } from "@svar-ui/react-gantt"
import "@svar-ui/react-gantt/all.css"

import { useAppLanguage } from "@/hooks/use-locale-data"

export type GanttTaskMeta = {
  department: string
  role: string
  owner: string
  impact: string
}

type PlanGanttProps = {
  tasks: ITask[]
  links: ILink[]
  metaById?: Record<number, GanttTaskMeta>
  className?: string
  start?: Date
  end?: Date
  height?: number
  showHint?: boolean
}

const GRID_WIDTH = 640
const GANTT_MIN_WIDTH = 1200

export function PlanGantt({
  tasks,
  links,
  metaById = {},
  className,
  start = new Date(2026, 4, 1),
  end = new Date(2026, 7, 15),
  height = 560,
  showHint = true,
}: PlanGanttProps) {
  const { t } = useTranslation()
  const language = useAppLanguage()
  const dateLocale = language === "ru" ? ru : enUS

  const scales = useMemo(
    () => [
      {
        unit: "month" as const,
        step: 1,
        format: (date: Date) =>
          formatDate(date, "LLLL yyyy", { locale: dateLocale }),
      },
      {
        unit: "week" as const,
        step: 1,
        format: (date: Date) => formatDate(date, "'W'w", { locale: dateLocale }),
      },
    ],
    [dateLocale]
  )

  const metaOf = (row: ITask) => {
    const id = row.id as TID
    if (typeof id === "number") return metaById[id]
    if (typeof id === "string") return metaById[Number(id)]
    return undefined
  }

  const columns = useMemo(
    () => [
      { id: "text", header: t("gantt.task"), width: 200, resize: true },
      {
        id: "department",
        header: t("gantt.department"),
        width: 130,
        resize: true,
        template: (_value: unknown, row: ITask) =>
          metaOf(row)?.department ?? "—",
      },
      {
        id: "role",
        header: t("gantt.role"),
        width: 140,
        resize: true,
        template: (_value: unknown, row: ITask) => metaOf(row)?.role ?? "—",
      },
      {
        id: "owner",
        header: t("gantt.owner"),
        width: 110,
        resize: true,
        template: (_value: unknown, row: ITask) => metaOf(row)?.owner ?? "—",
      },
      {
        id: "impact",
        header: t("gantt.impact"),
        width: 200,
        resize: true,
        template: (_value: unknown, row: ITask) => metaOf(row)?.impact ?? "—",
      },
    ],
    [metaById, t]
  )

  return (
    <div className={className}>
      <style>{`
        .plan-gantt-scroll {
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          border-radius: inherit;
          -webkit-overflow-scrolling: touch;
        }
        .plan-gantt-shell {
          height: ${height}px;
          min-width: ${GANTT_MIN_WIDTH}px;
          width: max(100%, ${GANTT_MIN_WIDTH}px);
        }
        .plan-gantt-shell .wx-layout {
          display: flex !important;
          width: 100% !important;
          height: 100% !important;
          overflow: hidden !important;
        }
        .plan-gantt-shell .wx-table-container {
          flex-shrink: 0 !important;
          min-width: 320px !important;
          max-width: 72% !important;
          overflow-x: auto !important;
          overflow-y: hidden !important;
        }
        .plan-gantt-shell .wx-table,
        .plan-gantt-shell .wx-grid,
        .plan-gantt-shell .wx-table-box {
          min-width: max-content;
        }
        .plan-gantt-shell .wx-resizer,
        .plan-gantt-shell .wx-resizer-layout-start {
          flex: 0 0 8px !important;
          width: 8px !important;
          cursor: col-resize !important;
          z-index: 3;
          background: color-mix(in oklab, var(--border) 80%, transparent);
        }
        .plan-gantt-shell .wx-resizer:hover,
        .plan-gantt-shell .wx-resizer-layout-start:hover {
          background: color-mix(in oklab, var(--foreground) 25%, transparent);
        }
        .plan-gantt-shell .wx-content,
        .plan-gantt-shell .wx-content-visible {
          flex: 1 1 auto !important;
          min-width: 240px !important;
          width: auto !important;
          overflow: auto !important;
        }
        .plan-gantt-shell .wx-chart,
        .plan-gantt-shell .wx-scale {
          min-width: max-content;
        }
      `}</style>
      <div className="plan-gantt-scroll">
        <div className="plan-gantt-shell">
          <Willow fonts={false}>
            <Gantt
              tasks={tasks}
              links={links}
              scales={scales}
              columns={columns}
              readonly
              cellBorders="column"
              gridWidth={GRID_WIDTH}
              cellWidth={44}
              start={start}
              end={end}
              autoScale={false}
              displayMode="all"
            />
          </Willow>
        </div>
      </div>
      {showHint ? (
        <p className="mt-2 text-xs text-muted-foreground">{t("gantt.hint")}</p>
      ) : null}
    </div>
  )
}
