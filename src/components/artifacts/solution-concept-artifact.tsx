import {
  FileText,
  GitBranch,
  ListOrdered,
  Scale,
  ShieldAlert,
  Target,
  UserRound,
  Workflow,
} from "lucide-react"

import { useTranslation } from "react-i18next"

import { JsonContract } from "@/components/contracts/json-contract"
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

export function SolutionConceptArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, solutionConceptArtifact } = useCaseStudyData()
  const doc = solutionConceptArtifact

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
          <SectionLabel icon={GitBranch} title={t("artifactChrome.sections.options")} />
          <div className="grid gap-3">
            {doc.options.map((option) => (
              <Card key={option.id} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">
                    {option.id}. {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="mb-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {t("artifactChrome.labels.pros")}
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {option.pros.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {t("artifactChrome.labels.cons")}
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {option.cons.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border-violet-200 bg-violet-50/50 shadow-none dark:border-violet-900 dark:bg-violet-950/30">
          <CardHeader className="gap-1.5">
            <CardTitle className="text-sm">{t("artifactChrome.decision")}: {doc.decision.chosen}</CardTitle>
            <CardDescription className="leading-relaxed">
              {doc.decision.why}
            </CardDescription>
          </CardHeader>
        </Card>

        <section className="space-y-3">
          <SectionLabel icon={Workflow} title={t("artifactChrome.sections.asIsToBe")} />
          <p className="text-sm text-muted-foreground">
            {doc.processAsIsToBe.note}
          </p>
          <div className="grid gap-4">
            <div className="space-y-2">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {t("artifactChrome.labels.asWas")}
              </p>
              <MermaidDiagram chart={doc.processAsIsToBe.asIsChart} />
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {t("artifactChrome.labels.asWillBe")}
              </p>
              <MermaidDiagram chart={doc.processAsIsToBe.toBeChart} />
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={GitBranch}
            title={t("artifactChrome.sections.platformIntegrations")}
          />
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.hints.platformIntegrationsIntro")}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doc.processAsIsToBe.platformIntegrationNote}
          </p>
          <MermaidDiagram
            chart={doc.processAsIsToBe.platformIntegrationChart}
          />
        </section>

        <section className="space-y-3">
          <SectionLabel icon={ListOrdered} title={t("artifactChrome.sections.userFlow")} />
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.hints.userFlowIntro")}
          </p>
          <MermaidDiagram chart={doc.userFlowChart} />
          <ol className="space-y-2">
            {doc.userFlow.map((step, index) => (
              <li
                key={step}
                className="flex gap-3 rounded-xl border px-3 py-2.5 text-sm leading-relaxed"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md border bg-muted/50 text-xs font-semibold">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={ShieldAlert}
            title={t("artifactChrome.sections.businessProcessLimits")}
          />
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.hints.businessProcessIntro")}
          </p>
          <MermaidDiagram chart={doc.businessFlowChart} />
          <div className="grid gap-3">
            {doc.businessRules.map((item) => (
              <Card key={item.id} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="font-mono">
                      {item.id}
                    </Badge>
                    <CardTitle className="text-sm">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {item.rule}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Target} title={t("artifactChrome.sections.uxSurfaces")} />
          <div className="grid gap-3 md:grid-cols-2">
            {doc.uxSurfaces.map((item) => (
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
          <SectionLabel icon={Target} title={t("artifactChrome.sections.modelApproach")} />
          <Card className="shadow-none">
            <CardHeader className="gap-2">
              <CardTitle className="text-sm">{t("artifactChrome.labels.fireSpread")}</CardTitle>
              <CardDescription className="leading-relaxed">
                {doc.modelApproach.fireSpread}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="shadow-none">
            <CardHeader className="gap-2">
              <CardTitle className="text-sm">{t("artifactChrome.labels.lossEuro")}</CardTitle>
              <CardDescription className="leading-relaxed">
                {doc.modelApproach.loss}
              </CardDescription>
            </CardHeader>
          </Card>
          <div className="flex flex-wrap gap-1.5">
            {doc.modelApproach.inputsRequired.map((item) => (
              <Badge key={item} variant="secondary" className="font-normal">
                {item}
              </Badge>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Target} title={t("artifactChrome.sections.designBriefModelOutput")} />
          <div className="grid gap-3 md:grid-cols-3">
            {doc.designBrief.map((item) => (
              <Card key={item.surface} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{item.surface}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.shows}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="rounded-lg border bg-muted/30 px-2.5 py-2 font-mono text-[11px] leading-relaxed text-muted-foreground">
                    {item.fromModel}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Workflow} title={t("artifactChrome.sections.modelIoExamples")} />
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.hints.modelIoIntro")}
          </p>
          <div className="grid gap-3">
            <JsonContract
              title="ModelInput"
              badge={t("artifactChrome.labels.inputBadge")}
              description={t("artifactChrome.labels.modelInputDesc")}
              value={doc.modelIoExamples.inputExample}
            />
            <JsonContract
              title="FireSpreadOutput"
              badge={t("artifactChrome.labels.outputPlayerBadge")}
              description={t("artifactChrome.labels.fireOutputDesc")}
              value={doc.modelIoExamples.fireOutputExample}
            />
            <JsonContract
              title="LossOutput"
              badge={t("artifactChrome.labels.outputPanelBadge")}
              description={t("artifactChrome.labels.lossOutputDesc")}
              value={doc.modelIoExamples.lossOutputExample}
            />
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Scale} title={t("artifactChrome.sections.tradeOffs")} />
          <ul className="space-y-2">
            {doc.tradeOffs.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-3 py-2.5 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{t("artifactChrome.notDoing")}: </span>
            {doc.nonGoals}
          </p>
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
