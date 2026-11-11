import { CheckCircle2, ListTree } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { ArtifactTemplate } from "@/data/artifact-templates"

export function ArtifactTemplatePanel({
  templates,
}: {
  templates: ArtifactTemplate[]
}) {
  const { t } = useTranslation()

  if (templates.length === 0) return null

  const defaultTab = templates[0]?.id

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold tracking-tight">
          {t("templates.title")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {t("templates.description")}
        </p>
      </div>

      <Tabs defaultValue={defaultTab} className="gap-4">
        <TabsList
          variant="line"
          className="h-auto w-full flex-wrap justify-start gap-1"
        >
          {templates.map((template) => (
            <TabsTrigger
              key={template.id}
              value={template.id}
              className="px-3 py-1.5"
            >
              {template.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {templates.map((template) => (
          <TabsContent
            key={template.id}
            value={template.id}
            className="space-y-4"
          >
            <Card className="shadow-none">
              <CardHeader className="gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{t("templates.badge")}</Badge>
                  <Badge variant="outline">{template.owner}</Badge>
                </div>
                <CardTitle className="text-base">{template.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {template.summary}
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                  <ListTree className="size-4 text-muted-foreground" />
                  {t("templates.structureHeading")}
                </div>
                <p className="text-xs text-muted-foreground">
                  {t("templates.sectionOwnerHint")}
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border bg-card">
                {template.sections.map((section, index) => (
                  <div
                    key={section.title}
                    className="grid gap-3 border-b px-4 py-4 last:border-b-0 sm:grid-cols-[2.5rem_minmax(0,1fr)_auto] sm:gap-4"
                  >
                    <div className="flex size-8 items-center justify-center rounded-lg border bg-muted/50 text-xs font-semibold text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0 space-y-2">
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold tracking-tight">
                          {section.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {section.purpose}
                        </p>
                      </div>
                      <ul className="flex flex-wrap gap-1.5">
                        {section.include.map((item) => (
                          <li
                            key={item}
                            className="rounded-md border bg-muted/40 px-2 py-1 text-xs leading-relaxed text-muted-foreground"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap content-start gap-1.5 sm:max-w-40 sm:justify-end">
                      {section.owners.map((owner) => (
                        <Badge
                          key={owner}
                          variant="outline"
                          className="font-normal"
                        >
                          {owner}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-emerald-200 bg-emerald-50/50 shadow-none dark:border-emerald-900 dark:bg-emerald-950/30">
              <CardHeader className="gap-2">
                <CardTitle className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="size-4" />
                  {t("templates.doneWhenHeading")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm leading-relaxed">
                  {template.whenReady.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-700/60 dark:bg-emerald-300/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
