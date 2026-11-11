import {
  Building2,
  Database,
  FileSearch,
  Lightbulb,
  Search,
  TriangleAlert,
  UserRound,
  Users,
  Workflow,
} from "lucide-react"

import { MermaidDiagram } from "@/components/diagrams/mermaid-diagram"

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

const dataReadinessReady = new Set(["Готово", "Ready"])
const dataReadinessRework = new Set(["Доработать", "Needs rework"])

export function ResearchReportArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, researchReportArtifact } = useCaseStudyData()
  const doc = researchReportArtifact

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

        <p className="text-xs text-muted-foreground">
          {t("artifactChrome.source")}: {doc.sourceCase}
        </p>
      </header>

      <div className="space-y-6 px-5 py-6 md:px-6">
        <section className="space-y-2">
          <SectionLabel icon={FileSearch} title={t("artifactChrome.sections.briefConclusion")} />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doc.summary}
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <SectionLabel icon={Search} title={t("artifactChrome.sections.methods")} />
          <ul className="space-y-2">
            {doc.methods.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-3 py-2.5 text-sm leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Users} title={t("artifactChrome.sections.users")} />
          <div className="grid gap-3">
            {doc.users.map((user) => (
              <Card key={user.segment} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{user.segment}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {user.finding}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="rounded-lg border bg-muted/30 px-3 py-2 text-sm italic text-muted-foreground">
                    «{user.quote}»
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Building2} title={t("artifactChrome.sections.competitorsMarket")} />
          <div className="grid gap-3">
            {doc.competitors.map((item) => (
              <Card key={item.name} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{item.name}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.note}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={FileSearch} title={t("artifactChrome.sections.productAudit")} />
          <div className="overflow-hidden rounded-2xl border">
            {doc.productAudit.map((row) => (
              <div
                key={row.area}
                className="grid gap-2 border-b px-3 py-3 text-sm last:border-b-0 sm:grid-cols-[1fr_auto_1.2fr]"
              >
                <p className="font-medium">{row.area}</p>
                <Badge variant="outline" className="w-fit font-normal">
                  {row.status}
                </Badge>
                <p className="text-muted-foreground">{row.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={Workflow}
            title={t("artifactChrome.sections.processTouchpoints")}
          />
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.hints.processTouchpointsIntro")}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doc.processTouchpoints.note}
          </p>
          <MermaidDiagram chart={doc.processTouchpoints.asIsSketchChart} />
          <div className="grid gap-3">
            {doc.processTouchpoints.items.map((item) => (
              <Card key={item.process} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{item.process}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <p className="mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {t("artifactChrome.labels.processAsIs")}
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                      {item.asIs}
                    </p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {t("artifactChrome.labels.processImpact")}
                    </p>
                    <p className="leading-relaxed text-muted-foreground">
                      {item.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Database} title={t("artifactChrome.sections.dataReadinessForModel")} />
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.hints.dataReadinessIntro")}
          </p>
          <div className="overflow-hidden rounded-2xl border">
            {doc.dataReadiness.map((row) => (
              <div
                key={row.layer}
                className="space-y-2 border-b px-3 py-3 text-sm last:border-b-0"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium">{row.layer}</p>
                  <Badge
                    variant="outline"
                    className={
                      dataReadinessReady.has(row.status)
                        ? "border-emerald-300 bg-emerald-50 font-normal dark:border-emerald-900 dark:bg-emerald-950/40"
                        : dataReadinessRework.has(row.status)
                          ? "border-amber-300 bg-amber-50 font-normal dark:border-amber-900 dark:bg-amber-950/40"
                          : "border-rose-300 bg-rose-50 font-normal dark:border-rose-900 dark:bg-rose-950/40"
                    }
                  >
                    {row.status}
                  </Badge>
                  <Badge variant="secondary" className="font-normal">
                    {row.action}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {t("artifactChrome.neededForOwner", {
                    neededFor: row.neededFor,
                    owner: row.owner,
                  })}
                </p>
                <p className="text-muted-foreground">{row.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Search} title={t("artifactChrome.sections.techFindings")} />
          <ul className="space-y-2">
            {doc.techFindings.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-3 py-2.5 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Lightbulb} title={t("artifactChrome.sections.keyInsights")} />
          <div className="grid gap-3">
            {doc.insights.map((item) => (
              <Card
                key={item.title}
                className="border-emerald-200 bg-emerald-50/40 shadow-none dark:border-emerald-900 dark:bg-emerald-950/30"
              >
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{item.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.detail}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={TriangleAlert} title={t("artifactChrome.sections.risks")} />
          <ul className="space-y-2">
            {doc.risks.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-amber-200 bg-amber-50/50 px-3 py-2.5 text-sm leading-relaxed dark:border-amber-900 dark:bg-amber-950/30"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <Card className="border-sky-200 bg-sky-50/60 shadow-none dark:border-sky-900 dark:bg-sky-950/40">
          <CardHeader>
            <CardTitle className="text-sm">{t("artifactChrome.recommendation")}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed">
            {doc.recommendation}
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
  icon: typeof FileSearch
  title: string
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="size-4 text-muted-foreground" />
      <h4 className="text-sm font-semibold tracking-tight">{title}</h4>
    </div>
  )
}
