import { createFileRoute, notFound } from "@tanstack/react-router"

import {
  FoundationGuideContent,
  FoundationNextLinks,
  FoundationPage,
} from "@/components/foundation-section"
import { useFoundationData } from "@/hooks/use-locale-data"

export const Route = createFileRoute("/foundation/decision-rights")({
  component: FoundationDecisionRightsPage,
})

function FoundationDecisionRightsPage() {
  const foundation = useFoundationData()
  const guide = foundation.getFoundationGuide("decision-rights")
  if (!guide) throw notFound()

  return (
    <FoundationPage
      title={guide.title}
      description={guide.short}
      crumb={guide.title}
    >
      <FoundationGuideContent guide={guide} />
      <FoundationNextLinks currentTo="/foundation/decision-rights" />
    </FoundationPage>
  )
}
