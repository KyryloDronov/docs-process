import { createFileRoute } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

import { PageHeader } from "@/components/page-header"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useProcessData } from "@/hooks/use-locale-data"
import { getPrincipleIcon } from "@/lib/doc-icons"

export const Route = createFileRoute("/principles")({
  component: PrinciplesPage,
})

function PrinciplesPage() {
  const { t } = useTranslation()
  const process = useProcessData()

  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 px-4 py-6 md:px-8 md:py-8">
      <PageHeader
        title={t("pages.principlesTitle")}
        description={t("pages.principlesDescription")}
        crumbs={[
          { label: t("nav.home"), to: "/" },
          { label: t("nav.principles") },
        ]}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {process.principles.map((principle) => {
          const Icon = getPrincipleIcon(principle.id)

          return (
            <Card key={principle.id} className="shadow-none">
              <CardHeader className="gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl border bg-muted/50">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-base">{principle.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {principle.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
