import {
  Ban,
  CheckCircle2,
  FileText,
  Flag,
  GitBranch,
  Scale,
  Target,
  UserRound,
  Users,
} from "lucide-react"
import { useTranslation } from "react-i18next"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { midFrontendJobDescriptionEn } from "@/data/job-description-example.en"
import { midFrontendJobDescriptionRu } from "@/data/job-description-example"
import { useAppLanguage } from "@/hooks/use-locale-data"

export function MidFrontendJdExample() {
  const { t } = useTranslation()
  const lng = useAppLanguage()
  const doc =
    lng === "en" ? midFrontendJobDescriptionEn : midFrontendJobDescriptionRu

  return (
    <article className="overflow-hidden rounded-2xl border bg-card shadow-none">
      <header className="space-y-4 border-b bg-muted/30 px-5 py-5 md:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{doc.status}</Badge>
              <Badge variant="outline">{doc.version}</Badge>
              <Badge variant="secondary">{doc.level}</Badge>
            </div>
            <h3 className="text-xl font-semibold tracking-tight">
              {doc.title}: {doc.role}
            </h3>
            <p className="text-sm text-muted-foreground">
              {doc.company} · {doc.team}
            </p>
          </div>
          <div className="rounded-xl border bg-background px-3 py-2 text-xs text-muted-foreground">
            <div>
              {t("foundation.jdExample.updated")}: {doc.updatedAt}
            </div>
            <div>
              {t("foundation.jdExample.reportsTo")}: {doc.reportsTo}
            </div>
            <div>{doc.location}</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 rounded-xl border bg-background px-3 py-3 text-sm">
          <div className="flex size-9 items-center justify-center rounded-lg border bg-muted/50">
            <UserRound className="size-4" />
          </div>
          <div>
            <p className="font-medium">{t("foundation.jdExample.docOwner")}</p>
            <p className="text-xs text-muted-foreground">{doc.owner}</p>
          </div>
        </div>
      </header>

      <div className="space-y-6 px-5 py-6 md:px-6">
        <section className="space-y-2">
          <SectionLabel
            icon={Target}
            title={t("foundation.jdExample.mission")}
          />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doc.mission}
          </p>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={Flag}
            title={t("foundation.jdExample.outcomes")}
          />
          <ul className="space-y-2">
            {doc.outcomes.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-3 py-2.5 text-sm leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <Separator />

        <section className="space-y-3">
          <SectionLabel
            icon={FileText}
            title={t("foundation.jdExample.responsibilities")}
          />
          <div className="grid gap-3">
            {doc.responsibilities.map((block) => (
              <Card key={block.title} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{block.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={Scale}
            title={t("foundation.jdExample.decisionRights")}
          />
          <ul className="space-y-2">
            {doc.decisionRights.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-3 py-2.5 text-sm leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={Ban}
            title={t("foundation.jdExample.notResponsible")}
          />
          <ul className="space-y-2">
            {doc.notResponsible.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-amber-200 bg-amber-50/40 px-3 py-2.5 text-sm leading-relaxed dark:border-amber-900 dark:bg-amber-950/30"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={Users}
            title={t("foundation.jdExample.collaborators")}
          />
          <div className="grid gap-3 md:grid-cols-2">
            {doc.collaborators.map((item) => (
              <Card key={item.role} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{item.role}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.how}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-3">
          <SectionLabel
            icon={CheckCircle2}
            title={t("foundation.jdExample.competencies")}
          />
          <div className="grid gap-3">
            {doc.competencies.map((item) => (
              <Card key={item.area} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="text-sm">{item.area}</CardTitle>
                    <Badge variant="secondary" className="font-normal">
                      {item.level}
                    </Badge>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {item.expect}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={Target}
            title={t("foundation.jdExample.successMetrics")}
          />
          <ul className="space-y-2">
            {doc.successMetrics.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-3 py-2.5 text-sm leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={GitBranch}
            title={t("foundation.jdExample.ladder")}
          />
          <div className="grid gap-3 md:grid-cols-2">
            <Card className="shadow-none">
              <CardHeader className="gap-1.5">
                <CardTitle className="text-sm">
                  {t("foundation.jdExample.vsJunior")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {doc.ladder.vsJunior.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardHeader className="gap-1.5">
                <CardTitle className="text-sm">
                  {t("foundation.jdExample.vsSenior")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {doc.ladder.vsSenior.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={GitBranch}
            title={t("foundation.jdExample.processTouchpoints")}
          />
          <div className="overflow-hidden rounded-2xl border">
            {doc.processTouchpoints.map((item) => (
              <div
                key={item.stage}
                className="grid gap-1 border-b px-3 py-3 text-sm last:border-b-0 sm:grid-cols-[12rem_1fr]"
              >
                <p className="font-medium">{item.stage}</p>
                <p className="text-muted-foreground">{item.does}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={Flag}
            title={t("foundation.jdExample.onboarding")}
          />
          <div className="grid gap-3 md:grid-cols-3">
            {doc.onboarding.map((item) => (
              <Card key={item.window} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{item.window}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.focus}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border-sky-200 bg-sky-50/50 shadow-none dark:border-sky-900 dark:bg-sky-950/30">
          <CardHeader className="gap-1.5">
            <CardTitle className="text-sm">
              {t("foundation.jdExample.reviewCadence")}
            </CardTitle>
            <CardDescription className="leading-relaxed">
              {doc.reviewCadence}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </article>
  )
}

function SectionLabel({
  icon: Icon,
  title,
}: {
  icon: typeof FileText
  title: string
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="size-4 text-muted-foreground" />
      <h4 className="text-sm font-semibold tracking-tight">{title}</h4>
    </div>
  )
}
