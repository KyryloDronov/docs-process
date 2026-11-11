import { FileText, SquareKanban, UserRound } from "lucide-react"

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

export function BacklogArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, backlogArtifact } = useCaseStudyData()
  const doc = backlogArtifact

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
        <Card className="border-amber-200 bg-amber-50/40 shadow-none dark:border-amber-900 dark:bg-amber-950/30">
          <CardHeader className="gap-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <SquareKanban className="size-4" />
              <Badge variant="secondary" className="font-mono">
                {doc.epic.id}
              </Badge>
            </div>
            <CardTitle className="text-base">{doc.epic.title}</CardTitle>
            <CardDescription className="leading-relaxed">
              {doc.epic.goal}
            </CardDescription>
          </CardHeader>
        </Card>

        <Separator />

        <section className="space-y-3">
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.stories")} />
          <div className="overflow-hidden rounded-2xl border">
            {doc.stories.map((item) => (
              <div
                key={item.id}
                className="grid gap-2 border-b px-3 py-3 text-sm last:border-b-0 md:grid-cols-[5.5rem_1fr_auto]"
              >
                <Badge variant="outline" className="w-fit font-mono">
                  {item.id}
                </Badge>
                <div className="space-y-1.5">
                  <p className="font-medium">{item.title}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.refs.map((ref) => (
                      <Badge
                        key={ref}
                        variant="secondary"
                        className="font-mono text-[10px]"
                      >
                        {ref}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground md:text-right">
                  {item.pointsHint}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.notes")} />
          <ul className="space-y-2">
            {doc.notes.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-3 py-2.5 text-sm leading-relaxed text-muted-foreground"
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
