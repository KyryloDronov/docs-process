import { FileText, ShieldCheck, TriangleAlert, UserRound } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCaseStudyData } from "@/hooks/use-locale-data"

export function QaReportArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, qaReportArtifact } = useCaseStudyData()
  const doc = qaReportArtifact

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
            icon={ShieldCheck}
            title={t("artifactChrome.sections.coverage")}
          />
          <div className="grid gap-3 md:grid-cols-3">
            {doc.coverage.map((item) => (
              <Card key={item.name} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{item.name}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.result}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={TriangleAlert}
            title={t("artifactChrome.sections.openBugs")}
          />
          <div className="grid gap-3">
            {doc.openBugs.map((item) => (
              <Card key={item.id} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="font-mono">
                      {item.id}
                    </Badge>
                    <Badge variant="secondary" className="font-normal">
                      {item.severity}
                    </Badge>
                  </div>
                  <CardTitle className="text-sm">{item.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.note}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={ShieldCheck}
            title={t("artifactChrome.sections.operationalReadiness")}
          />
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.hints.operationalReadinessIntro")}
          </p>
          <div className="overflow-hidden rounded-2xl border">
            {doc.operationalReadiness.map((item) => (
              <div
                key={item.item}
                className="grid gap-1 border-b px-3 py-3 text-sm last:border-b-0 sm:grid-cols-[11rem_auto_1fr] sm:items-center"
              >
                <p className="font-medium">{item.item}</p>
                <Badge variant="secondary" className="w-fit font-normal">
                  {item.status}
                </Badge>
                <p className="text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <Card className="border-emerald-200 bg-emerald-50/50 shadow-none dark:border-emerald-900 dark:bg-emerald-950/30">
          <CardHeader className="gap-1.5">
            <CardTitle className="text-sm">
              {t("artifactChrome.sections.releaseReadiness")}
            </CardTitle>
            <CardDescription className="leading-relaxed">
              {doc.readiness}
            </CardDescription>
          </CardHeader>
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
