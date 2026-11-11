import { FileText, SquareKanban, UserRound, Users } from "lucide-react"
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

export function HandoffBriefArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, handoffBriefArtifact } = useCaseStudyData()
  const doc = handoffBriefArtifact

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
            icon={SquareKanban}
            title={t("artifactChrome.sections.trackerPublish")}
          />
          <Card className="shadow-none">
            <CardHeader className="gap-1.5">
              <CardTitle className="text-sm">{doc.tracker.board}</CardTitle>
              <CardDescription className="leading-relaxed">
                {doc.tracker.note}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {doc.tracker.published.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border px-3 py-2.5 leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={Users}
            title={t("artifactChrome.sections.techBriefing")}
          />
          <Card className="shadow-none">
            <CardHeader className="gap-1.5">
              <CardTitle className="text-sm">{doc.briefing.when}</CardTitle>
              <CardDescription>{doc.briefing.attendees}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {doc.briefing.agenda.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={FileText}
            title={t("artifactChrome.sections.docLinks")}
          />
          <div className="grid gap-3">
            {doc.links.map((item) => (
              <Card key={item.label} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{item.label}</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    {item.url}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
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
