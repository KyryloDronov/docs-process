import { createFileRoute, notFound } from "@tanstack/react-router"

import {
  FoundationGuideContent,
  FoundationNextLinks,
  FoundationPage,
} from "@/components/foundation-section"
import { useFoundationData } from "@/hooks/use-locale-data"

export const Route = createFileRoute("/foundation/engineering")({
  component: FoundationEngineeringPage,
})

function FoundationEngineeringPage() {
  const foundation = useFoundationData()
  const guide = foundation.getFoundationGuide("engineering")
  if (!guide) throw notFound()

  return (
    <FoundationPage
      title={guide.title}
      description={guide.short}
      crumb={guide.title}
    >
      <FoundationGuideContent guide={guide} />
      <FoundationNextLinks currentTo="/foundation/engineering" />
    </FoundationPage>
  )
}
