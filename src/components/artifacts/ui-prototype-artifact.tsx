import {
  ExternalLink,
  FileText,
  ListOrdered,
  Monitor,
  Target,
  UserRound,
} from "lucide-react"

import { useTranslation } from "react-i18next"

import { MermaidDiagram } from "@/components/diagrams/mermaid-diagram"
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

export function UiPrototypeArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, uiPrototypeArtifact } = useCaseStudyData()
  const doc = uiPrototypeArtifact

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
        </section>

        <Separator />

        <section className="space-y-3">
          <SectionLabel icon={Target} title={t("artifactChrome.sections.prototypeGoals")} />
          <ul className="space-y-2">
            {doc.goals.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-3 py-2.5 text-sm leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <Card className="shadow-none">
          <CardHeader className="gap-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <ExternalLink className="size-4" />
              {t("artifactChrome.sections.whereToView")}
            </CardTitle>
            <CardDescription className="leading-relaxed">
              {doc.tool}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="rounded-lg border bg-muted/30 px-3 py-2 font-mono text-xs break-all text-muted-foreground">
              {doc.prototypeLink}
            </p>
          </CardContent>
        </Card>

        <section className="space-y-3">
          <SectionLabel icon={ListOrdered} title={t("artifactChrome.sections.prototypeFlow")} />
          <MermaidDiagram chart={doc.flowChart} />
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Monitor} title={t("artifactChrome.sections.screens")} />
          <div className="grid gap-3 md:grid-cols-2">
            {doc.screens.map((item) => (
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
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.inScopeOutOfScope")} />
          <div className="grid gap-3 md:grid-cols-2">
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">{t("artifactChrome.labels.inPrototype")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {doc.scopeIn.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-amber-200 bg-amber-50/40 shadow-none dark:border-amber-900 dark:bg-amber-950/30">
              <CardHeader>
                <CardTitle className="text-sm">{t("artifactChrome.labels.notInPrototype")}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {doc.scopeOut.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.assumptionsTechNotes")} />
          <ul className="space-y-2">
            {doc.assumptions.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-3 py-2.5 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {doc.techSpikeNotes.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-sky-200 bg-sky-50/40 px-3 py-2.5 text-sm leading-relaxed dark:border-sky-900 dark:bg-sky-950/30"
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
