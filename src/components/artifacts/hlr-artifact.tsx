import {
  CircleHelp,
  FileText,
  Flag,
  Layers,
  ListChecks,
  Monitor,
  Target,
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

export function HlrArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, highLevelRequirementsArtifact } = useCaseStudyData()
  const doc = highLevelRequirementsArtifact

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
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.problemStatement")} />
          <p className="text-sm leading-relaxed font-medium">
            {doc.problemStatement}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.primaryPersona")}: {doc.primaryPersona}
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <SectionLabel icon={Target} title={t("artifactChrome.sections.expectedOutcomes")} />
          <ul className="space-y-2">
            {doc.outcomes.map((item) => (
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
          <SectionLabel icon={ListChecks} title={t("artifactChrome.sections.mandatoryRequirements")} />
          <div className="grid gap-2">
            {doc.mustHave.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 rounded-xl border px-3 py-2.5 text-sm leading-relaxed"
              >
                <Badge variant="secondary" className="shrink-0 font-mono">
                  {item.id}
                </Badge>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={ListChecks} title={t("artifactChrome.sections.shouldHave")} />
          <ul className="space-y-2 text-sm text-muted-foreground">
            {doc.shouldHave.map((item) => (
              <li key={item} className="rounded-xl border px-3 py-2.5">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Flag} title={t("artifactChrome.sections.outOfScopeNow")} />
          <ul className="space-y-2">
            {doc.outOfScope.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-amber-200 bg-amber-50/50 px-3 py-2.5 text-sm leading-relaxed dark:border-amber-900 dark:bg-amber-950/30"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Layers} title={t("artifactChrome.sections.prerequisitesBeforeDesign")} />
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.hints.prerequisitesIntro")}
          </p>
          <div className="grid gap-2">
            {doc.prerequisites.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-start gap-3 rounded-xl border px-3 py-2.5 text-sm leading-relaxed"
              >
                <Badge variant="secondary" className="shrink-0 font-mono">
                  {item.id}
                </Badge>
                <span className="min-w-0 flex-1">{item.text}</span>
                <Badge variant="outline" className="font-normal">
                  {item.owner}
                </Badge>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={Monitor}
            title={t("artifactChrome.sections.modelOutputToUi")}
          />
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.hints.modelOutputToUiIntro")}
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {doc.modelOutputForDesign.map((item) => (
              <Card key={item.surface} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{item.surface}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.fields}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={CircleHelp} title={t("artifactChrome.sections.openQuestions")} />
          <div className="grid gap-3">
            {doc.openQuestions.map((item) => (
              <Card key={item} className="shadow-none">
                <CardHeader className="py-3">
                  <CardDescription className="leading-relaxed text-foreground">
                    {item}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Target} title={t("artifactChrome.sections.successMetrics")} />
          <div className="grid gap-2 md:grid-cols-3">
            {doc.successMetrics.map((item) => (
              <Card key={item} className="shadow-none">
                <CardContent className="pt-5 text-sm leading-relaxed text-muted-foreground">
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
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
