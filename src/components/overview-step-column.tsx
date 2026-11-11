import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

import type { ProcessStep } from "@/data/process"
import { getStepIcon } from "@/lib/doc-icons"
import { cn } from "@/lib/utils"

export function OverviewStepColumn({
  step,
  index,
}: {
  step: ProcessStep
  index: number
}) {
  const { t } = useTranslation()
  const Icon = getStepIcon(step.id)

  return (
    <div className="relative flex shrink-0 items-stretch">
      {index > 0 ? (
        <div
          className="absolute top-[2.35rem] -left-3 hidden h-px w-3 bg-border sm:block"
          aria-hidden
        />
      ) : null}
      <Link
        to="/process/$stepId"
        params={{ stepId: step.id }}
        className={cn(
          "group flex w-[168px] flex-col overflow-hidden rounded-2xl border bg-card/90 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:shadow-md xl:w-[180px]",
          step.colorSoft
        )}
      >
        <div
          className={cn(
            "flex items-center gap-2 px-3 py-2 text-white",
            step.color
          )}
        >
          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-white/15">
            <Icon className="size-3.5" strokeWidth={2} />
          </span>
          <span className="truncate text-[11px] font-semibold tracking-wide">
            {step.number}. {step.title}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-2.5 p-3">
          <p className="line-clamp-3 text-[11px] leading-snug text-current/80">
            {step.subtitle}
          </p>
          <span className="mt-auto inline-flex items-center gap-1 text-[10px] font-semibold tracking-wide uppercase opacity-70 transition-opacity group-hover:opacity-100">
            {t("nav.openStep")}
            <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </div>
  )
}
