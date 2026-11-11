import { useEffect, useMemo, useRef } from "react"
import { Link } from "@tanstack/react-router"
import { Info, Lock } from "lucide-react"
import { useTranslation } from "react-i18next"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { KnowledgeEntry } from "@/data/knowledge-map"
import type { Artifact } from "@/data/process"
import { useKnowledgeData, useProcessData } from "@/hooks/use-locale-data"
import { cn } from "@/lib/utils"

const artifactKnowledgeId: Record<string, string> = {
  "business-case": "km-business-case",
  insights: "km-research",
  hlr: "km-hlr",
  "solution-concept": "km-concept",
  architecture: "km-architecture",
  prototype: "km-proto",
  "test-results": "km-test-results",
  tz: "km-tz",
  figma: "km-figma-handoff",
  backlog: "km-backlog",
  plan: "km-plan",
  "estimate-risks": "km-estimate",
  "final-decision": "km-decision",
  "signed-spec": "km-signed",
}

type RoadmapItem = {
  artifact: Artifact
  knowledge?: KnowledgeEntry
}

type ColumnState = "past" | "current" | "future"

function columnState(
  stepNumber: number,
  focusStepNumber?: number
): ColumnState {
  if (focusStepNumber == null) return "current"
  if (stepNumber < focusStepNumber) return "past"
  if (stepNumber === focusStepNumber) return "current"
  return "future"
}

type ArtifactRoadmapProps = {
  focusStepNumber?: number
  className?: string
}

export function ArtifactRoadmap({
  focusStepNumber,
  className,
}: ArtifactRoadmapProps) {
  const { t } = useTranslation()
  const process = useProcessData()
  const knowledge = useKnowledgeData()
  const focusRef = useRef<HTMLDivElement | null>(null)

  const columns = useMemo(
    () =>
      process.processSteps
        .map((step) => {
          const items: RoadmapItem[] = process.artifacts
            .filter((a) => a.fromStepId === step.id)
            .map((artifact) => {
              const kid = artifactKnowledgeId[artifact.id]
              return {
                artifact,
                knowledge: kid
                  ? knowledge.knowledgeEntries.find((e) => e.id === kid)
                  : undefined,
              }
            })
          return { step, items }
        })
        .filter((col) => col.items.length > 0),
    [process, knowledge]
  )

  useEffect(() => {
    if (focusStepNumber == null) return
    focusRef.current?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    })
  }, [focusStepNumber])

  return (
    <TooltipProvider>
      <div
        className={cn(
          "min-w-0 overflow-x-auto overscroll-x-contain pb-1",
          className
        )}
      >
        <div className="flex w-max items-stretch gap-0">
          {columns.map((col, index) => {
            const state = columnState(col.step.number, focusStepNumber)
            const locked = state === "future"
            const isFocusColumn =
              focusStepNumber != null && col.step.number === focusStepNumber

            return (
              <div
                key={col.step.id}
                ref={isFocusColumn ? focusRef : undefined}
                className="flex items-stretch"
              >
                <div
                  className={cn(
                    "flex w-[168px] shrink-0 flex-col md:w-[184px]",
                    locked && "opacity-45",
                    state === "current" &&
                      focusStepNumber != null &&
                      "rounded-xl bg-muted/35 ring-1 ring-foreground/10"
                  )}
                >
                  {locked ? (
                    <div className="mb-3 border-b border-foreground/10 pb-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {String(col.step.number).padStart(2, "0")}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold leading-snug text-muted-foreground">
                          <Lock className="size-3 shrink-0" />
                          {col.step.title}
                        </span>
                      </div>
                      <div className="mt-2 h-0.5 w-full rounded-full bg-muted-foreground/25" />
                      <p className="mt-1.5 text-[10px] text-muted-foreground">
                        {t("roadmap.notYet")}
                      </p>
                    </div>
                  ) : (
                    <Link
                      to="/process/$stepId"
                      params={{ stepId: col.step.id }}
                      className="group mb-3 block border-b border-foreground/10 pb-2"
                    >
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-mono text-[11px] text-muted-foreground">
                          {String(col.step.number).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-semibold leading-snug group-hover:underline">
                          {col.step.title}
                        </span>
                      </div>
                      <div
                        className={cn(
                          "mt-2 h-0.5 w-full rounded-full",
                          col.step.color
                        )}
                      />
                      {state === "past" ? (
                        <p className="mt-1.5 text-[10px] text-muted-foreground">
                          {t("roadmap.done")}
                        </p>
                      ) : focusStepNumber != null ? (
                        <p className="mt-1.5 text-[10px] font-medium text-foreground/70">
                          {t("roadmap.now")}
                        </p>
                      ) : null}
                    </Link>
                  )}

                  <ul className="flex flex-1 flex-col gap-0.5">
                    {col.items.map((item) => (
                      <RoadmapArtifact
                        key={item.artifact.id}
                        item={item}
                        stepNumber={col.step.number}
                        locked={locked}
                        getSystemById={knowledge.getSystemById}
                      />
                    ))}
                  </ul>
                </div>

                {index < columns.length - 1 ? (
                  <div
                    className={cn(
                      "mx-1 mt-[22px] w-5 shrink-0 border-t border-dashed",
                      locked ||
                        columnState(
                          columns[index + 1]?.step.number ?? 0,
                          focusStepNumber
                        ) === "future"
                        ? "border-foreground/10"
                        : "border-foreground/20"
                    )}
                    aria-hidden
                  />
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </TooltipProvider>
  )
}

function RoadmapArtifact({
  item,
  stepNumber,
  locked = false,
  getSystemById,
}: {
  item: RoadmapItem
  stepNumber: number
  locked?: boolean
  getSystemById: (id: string) =>
    | { short: string; id: string }
    | undefined
}) {
  const { t } = useTranslation()
  const system = item.knowledge
    ? getSystemById(item.knowledge.systemId)
    : undefined

  const statusText =
    item.knowledge?.status === "ready"
      ? t("roadmap.statusReady")
      : item.knowledge?.status === "draft"
        ? t("roadmap.statusDraft")
        : ""

  return (
    <li
      className={cn(
        "flex items-start gap-1 rounded-md px-1 py-1.5",
        locked ? "cursor-default" : "hover:bg-muted/40"
      )}
    >
      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "text-[12px] font-medium leading-snug",
            locked && "text-muted-foreground"
          )}
        >
          {item.artifact.title}
        </p>
        <p className="mt-0.5 truncate text-[10px] text-muted-foreground">
          {locked
            ? t("roadmap.later")
            : system
              ? `${system.short}${statusText ? ` · ${statusText}` : ""}`
              : `${t("stepPage.crumbStep", { number: stepNumber })}`}
        </p>
      </div>

      <Tooltip>
        <TooltipTrigger
          render={
            <button
              type="button"
              className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label={`${item.artifact.title}`}
            />
          }
        >
          <Info className="size-3.5" />
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          align="start"
          className="flex max-w-[280px] flex-col items-stretch gap-0 rounded-xl px-0 py-0 text-left"
        >
          <div className="space-y-2.5 px-3.5 py-3">
            <div className="space-y-1">
              <p className="text-[13px] font-semibold leading-snug">
                {item.artifact.title}
              </p>
              <p className="text-[11px] leading-relaxed text-background/75">
                {item.artifact.description}
              </p>
            </div>

            {locked ? (
              <p className="rounded-md bg-background/10 px-2 py-1.5 text-[11px] leading-relaxed text-background/80">
                {t("roadmap.lockedHint", { number: stepNumber })}
              </p>
            ) : (
              <div className="space-y-2 border-t border-background/15 pt-2.5">
                {item.knowledge ? (
                  <>
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-medium tracking-wide text-background/55 uppercase">
                        {t("roadmap.where")}
                      </p>
                      <p className="text-[11px] leading-snug text-background/90">
                        <span className="font-medium">{system?.short}</span>
                        <span className="text-background/50"> · </span>
                        <span className="break-words">{item.knowledge.path}</span>
                      </p>
                    </div>
                    {item.knowledge.integratedInto.length > 0 ? (
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-medium tracking-wide text-background/55 uppercase">
                          {t("roadmap.integrated")}
                        </p>
                        <ul className="space-y-0.5">
                          {item.knowledge.integratedInto.map((target) => (
                            <li
                              key={target}
                              className="text-[11px] leading-snug text-background/90"
                            >
                              → {target}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {item.knowledge.note ? (
                      <p className="text-[11px] leading-relaxed text-background/65">
                        {item.knowledge.note}
                      </p>
                    ) : null}
                  </>
                ) : (
                  <p className="text-[11px] leading-relaxed text-background/75">
                    {t("stepPage.crumbStep", { number: stepNumber })}
                  </p>
                )}
              </div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </li>
  )
}
