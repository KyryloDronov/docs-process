import {
  CircleHelp,
  Database,
  FileText,
  Flag,
  ListChecks,
  Link2,
  Target,
  UserRound,
} from "lucide-react"

import { useTranslation } from "react-i18next"

import { JsonContract } from "@/components/contracts/json-contract"
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

export function FullSpecArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, fullSpecArtifact } = useCaseStudyData()
  const doc = fullSpecArtifact

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

        <section className="space-y-3">
          <SectionLabel
            icon={Link2}
            title={t("artifactChrome.sections.relatedArtifacts")}
          />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doc.packageNote}
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {doc.links.map((item) => (
              <Card key={item.id} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="font-mono text-[10px]">
                      {item.id}
                    </Badge>
                    <Badge variant="secondary" className="font-normal">
                      {item.role}
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

        <Separator />

        <section className="space-y-3">
          <SectionLabel icon={Target} title={t("artifactChrome.sections.goalsAndMetrics")} />
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
          <div className="grid gap-2 md:grid-cols-3">
            {doc.successMetrics.map((item) => (
              <Card key={item} className="shadow-none">
                <CardContent className="pt-5 text-sm text-muted-foreground">
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={UserRound} title={t("artifactChrome.sections.personas")} />
          <div className="grid gap-3 md:grid-cols-3">
            {doc.personas.map((item) => (
              <Card key={item.name} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-sm">{item.name}</CardTitle>
                    <Badge variant="outline">{item.priority}</Badge>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {item.need}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={ListChecks} title={t("artifactChrome.sections.userStories")} />
          <div className="grid gap-3">
            {doc.userStories.map((item) => (
              <Card key={item.id} className="shadow-none">
                <CardHeader className="gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="font-mono">
                      {item.id}
                    </Badge>
                    <CardTitle className="text-sm font-medium leading-relaxed">
                      {item.story}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {t("artifactChrome.labels.acceptanceCriteria")}
                  </p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {item.acceptance.map((ac) => (
                      <li key={ac}>• {ac}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={ListChecks} title={t("artifactChrome.sections.functionalRequirements")} />
          <div className="grid gap-2">
            {doc.functionalRequirements.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 rounded-xl border px-3 py-2.5 text-sm leading-relaxed"
              >
                <Badge variant="outline" className="shrink-0 font-mono">
                  {item.id}
                </Badge>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.nonFunctionalRequirements")} />
          <ul className="space-y-2">
            {doc.nonFunctional.map((item) => (
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
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.apiContracts")} />
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.hints.apiContractsIntro")}
          </p>
          <div className="grid gap-4">
            {doc.apis.map((item) => (
              <div key={item.path} className="space-y-3 rounded-2xl border p-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="font-mono">
                    {item.method}
                  </Badge>
                  <p className="font-mono text-xs sm:text-sm">{item.path}</p>
                </div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.note}</p>
                <div className="grid gap-3 lg:grid-cols-2">
                  <JsonContract
                    title="request"
                    value={item.requestExample}
                    collapsed={1}
                  />
                  <JsonContract
                    title="response"
                    value={item.responseExample}
                    collapsed={1}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Database} title={t("artifactChrome.sections.storageSchemasSample")} />
          <div className="grid gap-3 lg:grid-cols-2">
            {Object.entries(doc.schemaExamples).map(([name, fields]) => (
              <JsonContract
                key={name}
                title={name}
                badge="table sketch"
                value={fields}
                collapsed={false}
              />
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={CircleHelp} title={t("artifactChrome.sections.edgeCases")} />
          <ul className="space-y-2">
            {doc.edgeCases.map((item) => (
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
          <SectionLabel icon={Flag} title={t("artifactChrome.sections.outOfScope")} />
          <ul className="space-y-2 text-sm text-muted-foreground">
            {doc.outOfScope.map((item) => (
              <li key={item} className="rounded-xl border px-3 py-2.5">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Target} title={t("artifactChrome.sections.analytics")} />
          <div className="flex flex-wrap gap-2">
            {doc.analytics.map((item) => (
              <Badge key={item} variant="secondary" className="font-normal">
                {item}
              </Badge>
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

        <section className="space-y-3">
          <SectionLabel icon={ListChecks} title={t("artifactChrome.sections.definitionOfDone")} />
          <ul className="space-y-2">
            {doc.definitionOfDone.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-emerald-200 bg-emerald-50/40 px-3 py-2.5 text-sm leading-relaxed dark:border-emerald-900 dark:bg-emerald-950/30"
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
