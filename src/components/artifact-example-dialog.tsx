import { useMemo } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { resultExamplesByArtifactId } from "@/data/result-examples"
import {
  useAppLanguage,
  useCaseStudyData,
} from "@/hooks/use-locale-data"

type ArtifactRef = {
  id: string
  title: string
}

export function hasArtifactExample(artifactId: string) {
  return Boolean(resultExamplesByArtifactId[artifactId])
}

export function ArtifactExampleDialog({
  openArtifactId,
  onOpenChange,
  artifacts,
}: {
  openArtifactId: string | null
  onOpenChange: (id: string | null) => void
  artifacts: ArtifactRef[]
}) {
  const lng = useAppLanguage()
  const caseStudy = useCaseStudyData()

  const activeExample = useMemo(() => {
    if (!openArtifactId) return undefined
    const example = resultExamplesByArtifactId[openArtifactId]
    const artifact = artifacts.find((a) => a.id === openArtifactId)
    if (!example || !artifact) return undefined
    const description =
      lng === "en" ? example.descriptionEn : example.descriptionRu
    return {
      dialogTitle: artifact.title,
      dialogDescription: `${caseStudy.caseStudyMeta.company} · ${caseStudy.caseStudyMeta.initiative}. ${description}`,
      render: example.render,
    }
  }, [openArtifactId, artifacts, caseStudy.caseStudyMeta, lng])

  return (
    <Dialog
      open={Boolean(activeExample)}
      onOpenChange={(open) => {
        if (!open) onOpenChange(null)
      }}
    >
      <DialogContent className="flex max-h-[90vh] w-[min(1280px,calc(100%-1.5rem))] max-w-none flex-col gap-4 overflow-hidden p-4 sm:max-w-none md:p-6">
        {activeExample ? (
          <>
            <DialogHeader className="shrink-0 pr-8 text-left">
              <DialogTitle>{activeExample.dialogTitle}</DialogTitle>
              <DialogDescription>
                {activeExample.dialogDescription}
              </DialogDescription>
            </DialogHeader>
            <div className="min-h-0 min-w-0 flex-1 overflow-y-auto">
              {activeExample.render()}
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
