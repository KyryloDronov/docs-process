import { createFileRoute } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

import { PageHeader } from "@/components/page-header"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useProcessData } from "@/hooks/use-locale-data"
import { getParticipantIcon } from "@/lib/doc-icons"

export const Route = createFileRoute("/participants")({
  component: ParticipantsPage,
})

function ParticipantsPage() {
  const { t } = useTranslation()
  const process = useProcessData()

  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-6 md:px-8 md:py-8">
      <PageHeader
        title={t("pages.participantsTitle")}
        description={t("pages.participantsDescription")}
        crumbs={[
          { label: t("nav.home"), to: "/" },
          { label: t("nav.participants") },
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {process.participants.map((participant) => {
          const Icon = getParticipantIcon(participant.id)

          return (
            <Card key={participant.id} className="shadow-none">
              <CardHeader className="gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl border bg-muted/50">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <CardTitle className="text-base">{participant.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {participant.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/35" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
