import {
  CalendarRange,
  FileText,
  GanttChart,
  Link2,
  ListOrdered,
  TriangleAlert,
  UserRound,
  Users,
} from "lucide-react"

import { Trans, useTranslation } from "react-i18next"

import { PlanGantt } from "@/components/diagrams/plan-gantt"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCaseStudyData } from "@/hooks/use-locale-data"
import { cn } from "@/lib/utils"

const statusStyles: Record<string, string> = {
  Готово:
    "border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40",
  Ready:
    "border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40",
  "В работе":
    "border-sky-300 bg-sky-50 dark:border-sky-900 dark:bg-sky-950/40",
  "In progress":
    "border-sky-300 bg-sky-50 dark:border-sky-900 dark:bg-sky-950/40",
  "Не готово":
    "border-rose-300 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/40",
  "Not ready":
    "border-rose-300 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/40",
  Частично:
    "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40",
  Partial:
    "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40",
}

export function WorkPlanArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, workPlanArtifact } = useCaseStudyData()
  const doc = workPlanArtifact

  return (
    <article className="overflow-hidden rounded-2xl border bg-card shadow-none">
      <header className="space-y-4 border-b bg-muted/30 px-5 py-5 md:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{doc.status}</Badge>
              <Badge variant="outline">{doc.version}</Badge>
            </div>
            <h3 className="text-xl font-semibold tracking-tight">
              {doc.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {caseStudyMeta.company} · {caseStudyMeta.initiative}
            </p>
          </div>
          <div className="rounded-xl border bg-background px-3 py-2 text-xs text-muted-foreground">
            <div>{t("artifactChrome.date")}: {doc.date}</div>
            <div>{t("artifactChrome.to")}: {doc.recipients.join(", ")}</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 rounded-xl border bg-background px-3 py-3 text-sm">
          <div className="flex size-9 items-center justify-center rounded-lg border bg-muted/50">
            <UserRound className="size-4" />
          </div>
          <div>
            <p className="font-medium">{doc.author.name}</p>
            <p className="text-xs text-muted-foreground">
              {doc.author.role} · {doc.author.team}
            </p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">{t("artifactChrome.basedOn")}: {doc.basedOn}</p>
      </header>

      <div className="space-y-6 px-5 py-6 md:px-6">
        <section className="space-y-2">
          <SectionLabel icon={FileText} title={t("artifactChrome.summary")} />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doc.summary}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Badge variant="secondary" className="font-normal">
              {doc.board}
            </Badge>
            <Badge variant="outline" className="font-normal">
              {t("artifactChrome.goal")}: {doc.releaseTarget}
            </Badge>
          </div>
        </section>

        <Separator />

        <section className="space-y-3">
          <SectionLabel icon={CalendarRange} title={t("artifactChrome.sections.sprints")} />
          <div className="grid gap-3 md:grid-cols-3">
            {doc.sprints.map((item) => (
              <Card key={item.id} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-mono">
                      {item.id}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {item.range}
                    </span>
                  </div>
                  <CardTitle className="text-sm">{item.name}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.goal}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={TriangleAlert}
            title={t("artifactChrome.sections.platformPlanExcerpt")}
          />
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.hints.platformSliceIntro")}
          </p>
          <div className="space-y-3">
            {doc.platformSlice.map((item) => (
              <Card key={item.id} className="shadow-none">
                <CardHeader className="gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="font-mono">
                      {item.id}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={cn(
                        "font-normal",
                        statusStyles[item.status] ?? ""
                      )}
                    >
                      {item.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {item.owner}
                    </span>
                  </div>
                  <CardTitle className="text-sm">{item.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.note}
                  </CardDescription>
                </CardHeader>
                {(item.blocks.length > 0 || item.workaround) && (
                  <CardContent className="space-y-2">
                    {item.blocks.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5">
                        {item.blocks.map((block) => (
                          <Badge
                            key={block}
                            variant="secondary"
                            className="font-normal"
                          >
                            {t("artifactChrome.blocks")}: {block}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                    {item.workaround ? (
                      <p className="rounded-lg border border-amber-200 bg-amber-50/50 px-3 py-2 text-sm leading-relaxed dark:border-amber-900 dark:bg-amber-950/30">
                        Workaround: {item.workaround}
                      </p>
                    ) : null}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={GanttChart} title={t("artifactChrome.sections.ganttChart")} />
          <p className="text-sm text-muted-foreground">
            <Trans
              i18nKey="artifactChrome.hints.ganttOrder"
              components={{
                strong: (
                  <span className="font-medium text-foreground" />
                ),
              }}
            />
          </p>
          <div className="overflow-hidden rounded-2xl border">
            <PlanGantt
              tasks={doc.gantt.tasks}
              links={doc.gantt.links}
              metaById={doc.gantt.metaById}
            />
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={ListOrdered} title={t("artifactChrome.sections.tasksAndOwnership")} />
          <div className="overflow-hidden rounded-2xl border">
            {doc.workItems.map((item) => (
              <div
                key={item.id}
                className="grid gap-2 border-b px-3 py-3 text-sm last:border-b-0 lg:grid-cols-[5.5rem_1fr_auto]"
              >
                <Badge variant="outline" className="w-fit font-mono">
                  {item.id}
                </Badge>
                <div className="space-y-1.5">
                  <p className="font-medium">{item.title}</p>
                  <div className="flex flex-wrap gap-1.5 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Users className="size-3" />
                      {item.owner}
                    </span>
                    <Badge variant="secondary" className="font-normal">
                      {item.sprint}
                    </Badge>
                    <span>
                      {item.start} → {item.end}
                    </span>
                    {item.dependsOn.length > 0 ? (
                      <span className="inline-flex items-center gap-1">
                        <Link2 className="size-3" />
                        {item.dependsOn.join(", ")}
                      </span>
                    ) : null}
                  </div>
                  {item.blockedByPlatform.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                      {item.blockedByPlatform.map((b) => (
                        <Badge
                          key={b}
                          variant="outline"
                          className="border-rose-300 font-mono text-[10px] dark:border-rose-900"
                        >
                          ← {b}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </div>
                <Badge variant="secondary" className="h-fit w-fit font-mono">
                  {item.points} sp
                </Badge>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.planningDecisions")} />
          <ul className="space-y-2">
            {doc.decisions.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-3 py-2.5 text-sm leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <Card className="border-sky-200 bg-sky-50/60 shadow-none dark:border-sky-900 dark:bg-sky-950/40">
          <CardHeader>
            <CardTitle className="text-sm">{t("artifactChrome.nextStep")}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed">
            {doc.nextStep}
          </CardContent>
        </Card>
      </div>
    </article>
  )
}

function SectionLabel({
  icon: Icon,
  title,
}: {
  icon: typeof FileText
  title: string
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="size-4 text-muted-foreground" />
      <h4 className="text-sm font-semibold tracking-tight">{title}</h4>
    </div>
  )
}
