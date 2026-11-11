import { useState } from "react"
import { Link, createFileRoute } from "@tanstack/react-router"
import { ArrowRight, Layers3, Map, RefreshCw } from "lucide-react"
import { useTranslation } from "react-i18next"

import { ArtifactRoadmap } from "@/components/artifact-roadmap"
import { LifecycleFlow } from "@/components/diagrams/lifecycle-flow"
import { OverviewStepColumn } from "@/components/overview-step-column"
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
import { useProcessData } from "@/hooks/use-locale-data"
import { getParticipantIcon, getPrincipleIcon } from "@/lib/doc-icons"

export const Route = createFileRoute("/process/overview")({
  component: ProcessOverviewPage,
})

function ProcessOverviewPage() {
  const { t } = useTranslation()
  const process = useProcessData()
  const [flowOpen, setFlowOpen] = useState(false)
  const firstStep = process.processSteps[0]

  return (
    <div className="mx-auto w-full min-w-0 max-w-[1400px] space-y-10 overflow-x-hidden px-4 py-6 md:space-y-12 md:px-6 md:py-8">
      <PageHeader
        title={process.docsMeta.title}
        description={process.docsMeta.subtitle}
        crumbs={[
          { label: t("nav.home"), to: "/" },
          { label: t("nav.processOverview") },
        ]}
        actions={
          <div className="flex flex-wrap gap-2">
            {firstStep ? (
              <Button
                nativeButton={false}
                render={
                  <Link
                    to="/process/$stepId"
                    params={{ stepId: firstStep.id }}
                  />
                }
              >
                {t("overview.startFirstStep")}
                <ArrowRight data-icon="inline-end" />
              </Button>
            ) : null}
            <Dialog open={flowOpen} onOpenChange={setFlowOpen}>
              <DialogTrigger
                render={
                  <Button variant="outline" className="bg-background/80" />
                }
              >
                <Map data-icon="inline-start" />
                {t("overview.openProcessMap")}
              </DialogTrigger>
              <DialogContent className="flex max-h-[90vh] w-[min(1100px,calc(100%-2rem))] max-w-none flex-col gap-4 overflow-hidden p-4 sm:max-w-none md:p-6">
                <DialogHeader className="shrink-0 text-left">
                  <DialogTitle>{t("overview.mapDialogTitle")}</DialogTitle>
                  <DialogDescription>
                    {t("overview.mapDialogDescription")}
                  </DialogDescription>
                </DialogHeader>
                <div className="min-h-0 min-w-0 flex-1 overflow-y-auto">
                  {flowOpen ? <LifecycleFlow /> : null}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        }
      />

      <Card className="border-amber-200 bg-amber-50/50 shadow-none dark:border-amber-900 dark:bg-amber-950/30">
        <CardHeader className="gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <CardTitle className="text-base">
              {t("overview.intakeBannerTitle")}
            </CardTitle>
            <CardDescription className="leading-relaxed">
              {process.docsMeta.intakeNote}
            </CardDescription>
          </div>
          <Button
            nativeButton={false}
            variant="outline"
            size="sm"
            className="shrink-0 bg-background/80"
            render={<Link to="/foundation/intake" />}
          >
            {t("overview.intakeBannerLink")}
          </Button>
        </CardHeader>
      </Card>

      <section className="space-y-4">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <Layers3 className="size-5" />
            {t("overview.levelsTitle")}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("overview.levelsSubtitle")}
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {process.initiativeLevels.map((level) => (
            <Card key={level.id} className="shadow-none">
              <CardHeader className="gap-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{level.id}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {level.subtitle}
                  </span>
                </div>
                <CardTitle className="text-sm">{level.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  <span className="font-medium text-foreground/80">
                    {t("overview.levelsWhen")}:{" "}
                  </span>
                  {level.when}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="mb-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {t("overview.levelsProcess")}
                  </p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {level.process.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/35" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="rounded-xl border bg-muted/30 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
                  {level.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="rounded-2xl border border-dashed px-4 py-3 text-sm leading-relaxed text-muted-foreground">
          {t("overview.dualTrackNote")}
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              {t("overview.journeyTitle")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("overview.journeySubtitle")}
            </p>
          </div>
          <Link to="/process" className="text-sm font-medium hover:underline">
            {t("nav.processMap")}
          </Link>
        </div>

        <div className="min-w-0 overflow-hidden rounded-3xl border bg-muted/20 p-3 md:p-4">
          <div className="min-w-0 overflow-x-auto overscroll-x-contain pb-1">
            <div className="flex w-max gap-3">
              {process.processSteps.map((step, index) => (
                <OverviewStepColumn key={step.id} step={step} index={index} />
              ))}
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-2 rounded-2xl border border-sky-200/80 bg-sky-50/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between dark:border-sky-900 dark:bg-sky-950/40">
            <div className="flex items-center gap-2 text-sm font-medium text-sky-900 dark:text-sky-100">
              <RefreshCw className="size-4 shrink-0" />
              <span>{process.docsMeta.feedbackNote}</span>
            </div>
            <p className="text-xs text-sky-800/80 dark:text-sky-200/80 sm:text-sm">
              {t("overview.feedbackSources")}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              {t("overview.artifactsTitle")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("overview.artifactsSubtitle")}
            </p>
          </div>
          <Link to="/artifacts" className="text-sm font-medium hover:underline">
            {t("nav.readMore")}
          </Link>
        </div>
        <div className="rounded-3xl border bg-card/40 px-3 py-4 md:px-4">
          <ArtifactRoadmap />
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              {t("overview.participantsTitle")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("overview.participantsSubtitle")}
            </p>
          </div>
          <Link
            to="/participants"
            className="text-sm font-medium hover:underline"
          >
            {t("nav.allRoles")}
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {process.participants.map((participant) => {
            const Icon = getParticipantIcon(participant.id)
            return (
              <Link
                key={participant.id}
                to="/participants"
                className="rounded-2xl border bg-card p-4 transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-muted/30"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-xl border bg-muted/50">
                    <Icon className="size-4" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-semibold leading-tight">
                    {participant.title}
                  </h3>
                </div>
                <ul className="space-y-1.5 text-xs leading-relaxed text-muted-foreground">
                  {participant.responsibilities.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-foreground/35" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              {t("overview.principlesTitle")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("overview.principlesSubtitle")}
            </p>
          </div>
          <Link
            to="/principles"
            className="text-sm font-medium hover:underline"
          >
            {t("nav.read")}
          </Link>
        </div>
        <div className="grid gap-3 rounded-3xl border bg-muted/20 p-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-7 xl:gap-2">
          {process.principles.map((principle) => {
            const Icon = getPrincipleIcon(principle.id)
            return (
              <Link
                key={principle.id}
                to="/principles"
                className="flex flex-col items-center gap-2 rounded-2xl border bg-card px-3 py-4 text-center transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-background"
              >
                <div className="flex size-10 items-center justify-center rounded-full border bg-muted/40">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <span className="text-xs font-semibold leading-snug">
                  {principle.title}
                </span>
                <span className="text-[11px] leading-snug text-muted-foreground">
                  {principle.description}
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
