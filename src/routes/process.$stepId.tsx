import { useState } from "react"
import { Link, createFileRoute, notFound } from "@tanstack/react-router"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Eye,
  Flag,
  ListChecks,
  UserRound,
} from "lucide-react"
import { useTranslation } from "react-i18next"

import { ArtifactExampleDialog } from "@/components/artifact-example-dialog"
import { ArtifactTemplatePanel } from "@/components/artifact-template-panel"
import { StepKnowledgeMap } from "@/components/step-knowledge-map"
import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  getResultArtifactId,
  resultArtifactIdsByStep,
  resultExamplesByArtifactId,
} from "@/data/result-examples"
import {
  useArtifactTemplatesData,
  useCaseStudyData,
  useProcessData,
} from "@/hooks/use-locale-data"
import { getParticipantIcon, getStepIcon } from "@/lib/doc-icons"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/process/$stepId")({
  component: ProcessStepPage,
})

function ProcessStepPage() {
  const { stepId } = Route.useParams()
  const { t } = useTranslation()
  const process = useProcessData()
  const caseStudy = useCaseStudyData()
  const artifactTemplatesData = useArtifactTemplatesData()

  const step = process.getStepById(stepId)
  if (!step) {
    throw notFound()
  }

  const { prev, next } = process.getStepNeighbors(step.id)
  const relatedArtifacts = process.artifacts.filter(
    (a) => a.fromStepId === step.id
  )
  const Icon = getStepIcon(step.id)
  const stepTemplates = artifactTemplatesData.getArtifactTemplatesForStep(
    step.id
  )
  const hasExamples = (resultArtifactIdsByStep[step.id]?.length ?? 0) > 0
  const [openArtifactId, setOpenArtifactId] = useState<string | null>(null)
  const [caseOpen, setCaseOpen] = useState(false)

  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-4 py-6 md:px-8 md:py-8">
      <PageHeader
        title={step.title}
        description={step.subtitle}
        crumbs={[
          { label: t("nav.home"), to: "/" },
          { label: t("nav.processOverview"), to: "/process/overview" },
          { label: t("nav.processMap"), to: "/process" },
          { label: t("stepPage.crumbStep", { number: step.number }) },
        ]}
        actions={
          <div className="flex flex-wrap items-center justify-end gap-2">
            <Dialog open={caseOpen} onOpenChange={setCaseOpen}>
              <DialogTrigger
                render={
                  <Button variant="outline" size="sm" className="gap-1.5" />
                }
              >
                <BookOpen className="size-3.5" />
                {t("stepPage.caseStudy")}
              </DialogTrigger>
              <DialogContent className="flex max-h-[90vh] w-[min(560px,calc(100%-2rem))] max-w-none flex-col gap-4 overflow-hidden p-4 sm:max-w-none md:p-6">
                <DialogHeader className="shrink-0 pr-8 text-left">
                  <DialogTitle>{t("stepPage.caseStudyTitle")}</DialogTitle>
                  <DialogDescription>
                    {t("stepPage.caseStudyDescription")}
                  </DialogDescription>
                </DialogHeader>
                <div className="min-h-0 space-y-4 overflow-y-auto text-sm leading-relaxed">
                  <div className="space-y-1">
                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {t("stepPage.company")}
                    </p>
                    <p className="font-medium">
                      {caseStudy.caseStudyMeta.company}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {t("stepPage.initiative")}
                    </p>
                    <p className="font-medium">
                      {caseStudy.caseStudyMeta.initiative}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {t("stepPage.context")}
                    </p>
                    <p className="text-muted-foreground">
                      {caseStudy.caseStudyMeta.productContext}
                    </p>
                  </div>
                  <div className="rounded-xl border bg-muted/40 px-3 py-3 text-muted-foreground">
                    {t("stepPage.caseStudyHint")}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <div
              className={cn(
                "flex size-10 items-center justify-center rounded-xl border",
                step.colorSoft
              )}
            >
              <Icon className="size-5" strokeWidth={1.75} />
            </div>
            <Badge variant="outline" className={cn("border", step.colorSoft)}>
              {t("stepPage.stepOf", {
                number: step.number,
                total: process.processSteps.length,
              })}
            </Badge>
          </div>
        }
      />

      <div className={cn("h-1.5 w-full rounded-full", step.color)} />

      {step.id === "problem" ? (
        <Card className="border-amber-200 bg-amber-50/50 shadow-none dark:border-amber-900 dark:bg-amber-950/30">
          <CardHeader className="gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <CardTitle className="text-sm">
                {t("stepPage.intakeBeforeStep")}
              </CardTitle>
              <CardDescription className="leading-relaxed">
                {t("stepPage.intakeBeforeStepText")}
              </CardDescription>
            </div>
            <Button
              nativeButton={false}
              variant="outline"
              size="sm"
              className="shrink-0 bg-background/80"
              render={<Link to="/foundation/intake" />}
            >
              {t("stepPage.intakeBeforeStepLink")}
            </Button>
          </CardHeader>
        </Card>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
        <Card className="shadow-none">
          <CardHeader className="gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2 text-sm">
                <UserRound className="size-4" />
                {t("stepPage.driTitle")}
              </CardTitle>
              <CardDescription>{t("stepPage.driHint")}</CardDescription>
            </div>
            {(() => {
              const dri = process.getParticipantById(step.driParticipantId)
              if (!dri) return null
              const DriIcon = getParticipantIcon(dri.id)
              return (
                <div className="flex items-center gap-2 rounded-xl border bg-muted/40 px-3 py-2">
                  <DriIcon className="size-4" />
                  <span className="text-sm font-semibold">{dri.title}</span>
                </div>
              )
            })()}
          </CardHeader>
        </Card>
        <div className="flex flex-wrap gap-1.5 sm:justify-end">
          <span className="text-xs text-muted-foreground self-center mr-1">
            {t("stepPage.levelsBadge")}
          </span>
          {step.appliesToLevels.map((level) => (
            <Badge key={level} variant="outline">
              {level}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ListChecks className="size-4" />
              {t("stepPage.whatWeDo")}
            </CardTitle>
            <CardDescription>{t("stepPage.whatWeDoHint")}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm leading-relaxed">
              {step.whatWeDo.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-lg border px-3 py-2.5"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className={cn("border shadow-none", step.colorSoft)}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <CheckCircle2 className="size-4" />
              {t("stepPage.result")}
            </CardTitle>
            <CardDescription>{t("stepPage.resultHint")}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm leading-relaxed">
              {step.result.map((item, index) => {
                const artifactId = getResultArtifactId(step.id, index)
                const example = artifactId
                  ? resultExamplesByArtifactId[artifactId]
                  : undefined
                if (example && artifactId) {
                  return (
                    <li key={`${artifactId}-${item}`}>
                      <button
                        type="button"
                        onClick={() => setOpenArtifactId(artifactId)}
                        className="flex w-full items-start justify-between gap-3 rounded-lg border border-current/15 bg-background/80 px-3 py-2.5 text-left transition-colors hover:bg-background"
                      >
                        <span className="font-medium">{item}</span>
                        <span className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
                          <Eye className="size-3.5" />
                          {t("stepPage.example")}
                        </span>
                      </button>
                    </li>
                  )
                }

                return (
                  <li
                    key={item}
                    className="rounded-lg border border-current/10 bg-background/60 px-3 py-2.5"
                  >
                    {item}
                  </li>
                )
              })}
            </ul>
          </CardContent>
        </Card>
      </div>

      {!hasExamples && relatedArtifacts.length > 0 ? (
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="text-base">
              {t("stepPage.relatedArtifacts")}
            </CardTitle>
            <CardDescription>{t("stepPage.relatedHint")}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {relatedArtifacts.map((artifact) => (
              <Badge key={artifact.id} variant="secondary">
                {artifact.title}
              </Badge>
            ))}
            <Button
              nativeButton={false}
              variant="link"
              size="sm"
              className="px-0"
              render={<Link to="/artifacts" />}
            >
              {t("nav.allArtifacts")}
            </Button>
          </CardContent>
        </Card>
      ) : null}

      <Card className="border-emerald-200 bg-emerald-50/40 shadow-none dark:border-emerald-900 dark:bg-emerald-950/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Flag className="size-4" />
            {t("stepPage.exitTitle")}
          </CardTitle>
          <CardDescription>{t("stepPage.exitHint")}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm leading-relaxed">
            {step.exitCriteria.map((item) => (
              <li key={item} className="flex gap-3 rounded-lg border border-emerald-200/60 bg-background/70 px-3 py-2.5 dark:border-emerald-900/60">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-700 dark:text-emerald-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              {t("stepPage.involvedTitle")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("stepPage.involvedHint")}
            </p>
          </div>
          <Button
            nativeButton={false}
            variant="link"
            size="sm"
            className="px-0"
            render={<Link to="/participants" />}
          >
            {t("nav.allRoles")}
          </Button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {step.involved.map((item) => {
            const participant = process.getParticipantById(item.participantId)
            if (!participant) return null
            const ParticipantIcon = getParticipantIcon(participant.id)
            return (
              <div
                key={participant.id}
                className="rounded-2xl border bg-card p-4"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-xl border bg-muted/50">
                    <ParticipantIcon className="size-4" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-semibold leading-tight">
                        {participant.title}
                      </h3>
                      {participant.id === step.driParticipantId ? (
                        <Badge variant="secondary" className="font-normal">
                          DRI
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                </div>
                <ul className="space-y-1.5 text-xs leading-relaxed text-muted-foreground">
                  {item.does.map((action) => (
                    <li key={action} className="flex gap-2">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-foreground/35" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <StepKnowledgeMap
        stepId={step.id}
        stepNumber={step.number}
        stepTitle={step.title}
      />

      {stepTemplates.length > 0 ? (
        <ArtifactTemplatePanel templates={stepTemplates} />
      ) : null}

      <div className="flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
        {prev ? (
          <Button
            nativeButton={false}
            variant="outline"
            render={
              <Link to="/process/$stepId" params={{ stepId: prev.id }} />
            }
          >
            <ArrowLeft data-icon="inline-start" />
            {prev.number}. {prev.title}
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button
            nativeButton={false}
            render={
              <Link to="/process/$stepId" params={{ stepId: next.id }} />
            }
          >
            {next.number}. {next.title}
            <ArrowRight data-icon="inline-end" />
          </Button>
        ) : (
          <Button nativeButton={false} render={<Link to="/artifacts" />}>
            {t("nav.toArtifacts")}
            <ArrowRight data-icon="inline-end" />
          </Button>
        )}
      </div>

      <ArtifactExampleDialog
        openArtifactId={openArtifactId}
        onOpenChange={setOpenArtifactId}
        artifacts={process.artifacts}
      />
    </div>
  )
}
