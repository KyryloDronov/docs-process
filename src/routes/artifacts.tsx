import { useState } from "react"
import { Link, createFileRoute } from "@tanstack/react-router"
import { ArrowRight, Eye } from "lucide-react"
import { useTranslation } from "react-i18next"

import {
  ArtifactExampleDialog,
  hasArtifactExample,
} from "@/components/artifact-example-dialog"
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
import { useProcessData } from "@/hooks/use-locale-data"
import { getArtifactIcon } from "@/lib/doc-icons"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/artifacts")({
  component: ArtifactsPage,
})

function ArtifactsPage() {
  const { t } = useTranslation()
  const process = useProcessData()
  const [openArtifactId, setOpenArtifactId] = useState<string | null>(null)

  return (
    <div className="mx-auto w-full max-w-3xl space-y-8 px-4 py-6 md:px-8 md:py-8">
      <PageHeader
        title={t("pages.artifactsTitle")}
        description={t("pages.artifactsDescription")}
        crumbs={[
          { label: t("nav.home"), to: "/" },
          { label: t("nav.artifacts") },
        ]}
      />

      <ol className="relative space-y-4 border-l border-border pl-6">
        {process.artifacts.map((artifact, index) => {
          const step = process.getStepById(artifact.fromStepId)
          const Icon = getArtifactIcon(artifact.id)
          const canOpenExample = hasArtifactExample(artifact.id)

          return (
            <li key={artifact.id} className="relative">
              <span className="absolute top-4 -left-6 flex size-7 -translate-x-1/2 items-center justify-center rounded-full border bg-background">
                <Icon className="size-3.5" strokeWidth={1.75} />
              </span>
              <Card className="shadow-none">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="text-base">
                      {index + 1}. {artifact.title}
                    </CardTitle>
                    {step ? (
                      <Badge
                        variant="outline"
                        className={cn("border", step.colorSoft)}
                      >
                        {t("stepPage.stepBadge", { number: step.number })}
                      </Badge>
                    ) : null}
                  </div>
                  <CardDescription className="leading-relaxed">
                    {artifact.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  {canOpenExample ? (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setOpenArtifactId(artifact.id)}
                    >
                      <Eye data-icon="inline-start" />
                      {t("stepPage.example")}
                    </Button>
                  ) : null}
                  {step ? (
                    <Link
                      to="/process/$stepId"
                      params={{ stepId: step.id }}
                      className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                    >
                      {t("nav.goToStep", { title: step.title })}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  ) : null}
                </CardContent>
              </Card>
            </li>
          )
        })}
      </ol>

      <ArtifactExampleDialog
        openArtifactId={openArtifactId}
        onOpenChange={setOpenArtifactId}
        artifacts={process.artifacts}
      />
    </div>
  )
}
