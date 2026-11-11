import type { ReactNode } from "react"
import { Link } from "@tanstack/react-router"
import { AlertTriangle, CheckCircle2, Clock3, Goal, ListChecks } from "lucide-react"
import { useTranslation } from "react-i18next"

import { PageHeader } from "@/components/page-header"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type {
  FoundationGuide,
  FoundationSection,
} from "@/data/foundation"
import { useFoundationData } from "@/hooks/use-locale-data"

export function FoundationPage({
  title,
  description,
  crumb,
  children,
}: {
  title: string
  description?: string
  crumb: string
  children: ReactNode
}) {
  const { t } = useTranslation()

  return (
    <div className="mx-auto w-full min-w-0 max-w-4xl space-y-8 overflow-x-hidden px-4 py-6 md:px-8 md:py-8">
      <PageHeader
        title={title}
        description={description}
        crumbs={[
          { label: t("nav.home"), to: "/" },
          { label: t("foundation.crumb"), to: "/foundation" },
          { label: crumb },
        ]}
      />
      <div className="space-y-8">{children}</div>
    </div>
  )
}

export function OutlineCards({
  sections,
}: {
  sections: FoundationSection[]
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {sections.map((section) => (
        <Card key={section.title} className="shadow-none">
          <CardHeader>
            <CardTitle className="text-base">{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {section.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/35" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function FoundationGuideContent({
  guide,
  diagram,
}: {
  guide: FoundationGuide
  diagram?: ReactNode
}) {
  const { t } = useTranslation()

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">{t("foundation.whatIsBadge")}</Badge>
        <Badge variant="outline">{guide.short}</Badge>
      </div>

      <Card className="shadow-none">
        <CardHeader className="gap-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <Goal className="size-4" />
            {t("foundation.whatIsTitle")}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed text-foreground/80">
            {guide.what}
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ListChecks className="size-4" />
              {t("foundation.whyTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {guide.why.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="border-sky-200 bg-sky-50/50 shadow-none dark:border-sky-900 dark:bg-sky-950/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Clock3 className="size-4" />
              {t("foundation.whenTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-relaxed">
            <p>{guide.when}</p>
            <p className="text-muted-foreground">{guide.stage}</p>
          </CardContent>
        </Card>
      </div>

      {diagram}

      <Card className="shadow-none">
        <CardHeader>
          <CardTitle className="text-base">{t("foundation.howTitle")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="space-y-2 text-sm leading-relaxed">
            {guide.how.map((item, index) => (
              <li key={item} className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-semibold">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">
          {t("foundation.containsTitle")}
        </h2>
        <OutlineCards sections={guide.contains} />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-emerald-200 bg-emerald-50/40 shadow-none dark:border-emerald-900 dark:bg-emerald-950/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <CheckCircle2 className="size-4" />
              {t("foundation.doneWhenTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm leading-relaxed">
              {guide.doneWhen.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="border-amber-200 bg-amber-50/50 shadow-none dark:border-amber-900 dark:bg-amber-950/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="size-4" />
              {t("foundation.antiPatternsTitle")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm leading-relaxed">
              {guide.antiPatterns.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export function FoundationNextLinks({ currentTo }: { currentTo: string }) {
  const { t } = useTranslation()
  const foundation = useFoundationData()
  const index = foundation.foundationNav.findIndex(
    (item) => item.to === currentTo
  )
  const prev = index > 0 ? foundation.foundationNav[index - 1] : undefined
  const next =
    index >= 0 && index < foundation.foundationNav.length - 1
      ? foundation.foundationNav[index + 1]
      : undefined

  return (
    <div className="flex flex-col gap-3 border-t pt-6 sm:flex-row sm:justify-between">
      {prev ? (
        <Link to={prev.to} className="text-sm font-medium hover:underline">
          ← {prev.label}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link to={next.to} className="text-sm font-medium hover:underline">
          {next.label} →
        </Link>
      ) : (
        <Link
          to="/process/overview"
          className="text-sm font-medium hover:underline"
        >
          {t("nav.processOverviewCta")}
        </Link>
      )}
    </div>
  )
}
