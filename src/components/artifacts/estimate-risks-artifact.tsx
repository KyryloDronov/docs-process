import {
  CircleHelp,
  FileText,
  Gauge,
  Route,
  TriangleAlert,
  UserRound,
} from "lucide-react"

import { useTranslation } from "react-i18next"

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

const levelStyles: Record<string, string> = {
  Высокий:
    "border-rose-300 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/40",
  High:
    "border-rose-300 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/40",
  Средний:
    "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40",
  Medium:
    "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40",
  Низкий:
    "border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40",
  Low:
    "border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40",
}

export function EstimateRisksArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, estimateRisksArtifact } = useCaseStudyData()
  const doc = estimateRisksArtifact

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
          <p className="rounded-xl border bg-muted/30 px-3 py-2.5 text-sm leading-relaxed text-muted-foreground">
            {t("artifactChrome.method")}: {doc.method}
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <SectionLabel icon={Gauge} title={t("artifactChrome.sections.teamCapacity")} />
          <div className="grid gap-3 sm:grid-cols-2">
            {doc.capacity.map((item) => (
              <Card key={item.role} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <CardTitle className="text-sm">{item.role}</CardTitle>
                    <Badge variant="secondary" className="font-normal">
                      {item.perSprint}
                    </Badge>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {item.people}. {item.note}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="grid gap-2 rounded-2xl border px-3 py-3 text-sm sm:grid-cols-4">
            <Stat label={t("artifactChrome.total")} value={`${doc.totals.committedPoints} sp`} />
            <Stat label="S1" value={`${doc.totals.s1} sp`} />
            <Stat label="S2" value={`${doc.totals.s2} sp`} />
            <Stat label="S3" value={`${doc.totals.s3} sp`} />
          </div>
          <p className="text-xs text-muted-foreground">
            Velocity: {doc.totals.velocityAssumption}
          </p>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.storyEstimates")} />
          <div className="overflow-hidden rounded-2xl border">
            {doc.estimates.map((item) => (
              <div
                key={item.id}
                className="grid gap-2 border-b px-3 py-3 text-sm last:border-b-0 md:grid-cols-[5.5rem_3.5rem_6rem_1fr]"
              >
                <Badge variant="outline" className="w-fit font-mono">
                  {item.id}
                </Badge>
                <span className="font-mono font-medium">{item.points} sp</span>
                <Badge variant="secondary" className="w-fit font-normal">
                  {item.confidence}
                </Badge>
                <p className="text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Route} title={t("artifactChrome.sections.criticalPath")} />
          <ol className="space-y-2">
            {doc.criticalPath.map((item, index) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border px-3 py-2.5 text-sm leading-relaxed"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md border bg-muted/50 text-xs font-semibold">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={TriangleAlert} title={t("artifactChrome.sections.riskRegister")} />
          <div className="grid gap-3">
            {doc.risks.map((item) => (
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
                        levelStyles[item.level] ?? ""
                      )}
                    >
                      {item.level}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Owner: {item.owner}
                    </span>
                  </div>
                  <CardTitle className="text-sm">{item.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {t("artifactChrome.impact")}: {item.impact}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="rounded-lg border bg-muted/30 px-3 py-2 text-sm leading-relaxed text-muted-foreground">
                    Mitigation: {item.mitigation}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={CircleHelp} title={t("artifactChrome.sections.openQuestions")} />
          <ul className="space-y-2">
            {doc.openQuestions.map((item) => (
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold tracking-tight">{value}</p>
    </div>
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
