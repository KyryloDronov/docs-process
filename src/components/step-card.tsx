import { Link } from "@tanstack/react-router"
import { ArrowRight, CheckCircle2, ListChecks } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { ProcessStep } from "@/data/process"
import { getStepIcon } from "@/lib/doc-icons"
import { cn } from "@/lib/utils"

export function StepCard({
  step,
  compact = false,
}: {
  step: ProcessStep
  compact?: boolean
}) {
  const { t } = useTranslation()
  const Icon = getStepIcon(step.id)

  return (
    <Card className="h-full overflow-hidden border-border/80 shadow-none">
      <div className={cn("h-1.5 w-full", step.color)} />
      <CardHeader className="gap-3">
        <div className="flex items-start justify-between gap-3">
          <Badge variant="outline" className={cn("border", step.colorSoft)}>
            {t("stepPage.stepBadge", { number: step.number })}
          </Badge>
          <div
            className={cn(
              "flex size-9 items-center justify-center rounded-xl border",
              step.colorSoft
            )}
          >
            <Icon className="size-4" strokeWidth={1.75} />
          </div>
        </div>
        <div className="space-y-1">
          <CardTitle className="text-base leading-snug md:text-lg">
            {step.title}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {step.subtitle}
          </CardDescription>
        </div>
      </CardHeader>

      {!compact ? (
        <CardContent className="grid gap-4">
          <div className="space-y-2">
            <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              <ListChecks className="size-3.5" />
              {t("stepPage.whatWeDo")}
            </p>
            <ul className="space-y-1.5 text-sm leading-relaxed">
              {step.whatWeDo.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={cn("space-y-2 rounded-xl border p-3", step.colorSoft)}>
            <p className="flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
              <CheckCircle2 className="size-3.5" />
              {t("stepPage.result")}
            </p>
            <ul className="space-y-1 text-sm leading-relaxed">
              {step.result.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      ) : null}

      <CardFooter>
        <Link
          to="/process/$stepId"
          params={{ stepId: step.id }}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:underline"
        >
          {t("nav.openStep")}
          <ArrowRight className="size-3.5" />
        </Link>
      </CardFooter>
    </Card>
  )
}
