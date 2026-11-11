import { createFileRoute, notFound } from "@tanstack/react-router"

import {
  FoundationGuideContent,
  FoundationNextLinks,
  FoundationPage,
} from "@/components/foundation-section"
import { useFoundationData } from "@/hooks/use-locale-data"

export const Route = createFileRoute("/foundation/compliance")({
  component: FoundationCompliancePage,
})

function FoundationCompliancePage() {
  const foundation = useFoundationData()
  const guide = foundation.getFoundationGuide("compliance")
  if (!guide) throw notFound()

  return (
    <FoundationPage
      title={guide.title}
      description={guide.short}
      crumb={guide.title}
    >
      <FoundationGuideContent guide={guide} />
      <FoundationNextLinks currentTo="/foundation/compliance" />
    </FoundationPage>
  )
}
