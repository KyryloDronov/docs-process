import { FileText, Rocket, Target, UserRound } from "lucide-react"
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

export function ReleaseReportArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, releaseReportArtifact } = useCaseStudyData()
  const doc = releaseReportArtifact

  return (
    <article className="overflow-hidden rounded-2xl border bg-card shadow-none">
      <header className="space-y-4 border-b bg-muted/30 px-5 py-5 md:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{doc.status}</Badge>
              <Badge variant="outline">{doc.version}</Badge>
            </div>
            <h3 className="text-xl font-semibold tracking-tight">{doc.title}</h3>
            <p className="text-sm text-muted-foreground">
              {caseStudyMeta.company} · {caseStudyMeta.initiative}
            </p>
          </div>
          <div className="rounded-xl border bg-background px-3 py-2 text-xs text-muted-foreground">
            <div>
              {t("artifactChrome.date")}: {doc.date}
            </div>
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
      </header>

      <div className="space-y-6 px-5 py-6 md:px-6">
        <section className="space-y-2">
          <SectionLabel icon={FileText} title={t("artifactChrome.summary")} />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doc.summary}
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <SectionLabel
            icon={Rocket}
            title={t("artifactChrome.sections.deploy")}
          />
          <Card className="shadow-none">
            <CardHeader className="gap-1.5">
              <CardTitle className="text-sm">{doc.deploy.env}</CardTitle>
              <CardDescription className="leading-relaxed">
                {doc.deploy.note}
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={Target}
            title={t("artifactChrome.sections.successMetrics")}
          />
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.labels.metricsOwner")}: {doc.metricsOwner}
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {doc.metrics.map((item) => (
              <Card key={item.name} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{item.name}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {t("artifactChrome.labels.target")}: {item.target}
                  </CardDescription>
                  <p className="text-sm font-medium">{item.actual}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border-violet-200 bg-violet-50/50 shadow-none dark:border-violet-900 dark:bg-violet-950/30">
          <CardHeader className="gap-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="text-sm">
                {t("artifactChrome.sections.impactDecision")}
              </CardTitle>
              <Badge variant="secondary">{doc.impactDecision.verdict}</Badge>
            </div>
            <CardDescription className="leading-relaxed">
              {doc.impactDecision.rationale}
            </CardDescription>
            <div className="flex flex-wrap gap-2 pt-1">
              {doc.impactDecision.optionsConsidered.map((option) => (
                <Badge
                  key={option}
                  variant={
                    option === doc.impactDecision.verdict
                      ? "default"
                      : "outline"
                  }
                  className="font-normal"
                >
                  {option}
                </Badge>
              ))}
            </div>
          </CardHeader>
        </Card>

        <section className="space-y-3">
          <SectionLabel
            icon={FileText}
            title={t("artifactChrome.sections.nextIteration")}
          />
          <ul className="space-y-2">
            {doc.nextIteration.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-3 py-2.5 text-sm leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
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
