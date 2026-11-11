import { Building2, FileText, Target, UserRound, Users } from "lucide-react"

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
import { useCaseStudyData } from "@/hooks/use-locale-data"

export function BusinessCaseArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, businessCaseArtifact } = useCaseStudyData()
  const doc = businessCaseArtifact

  return (
    <article className="overflow-hidden rounded-2xl border bg-card shadow-none">
      <header className="space-y-4 border-b bg-muted/30 px-5 py-5 md:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{doc.status}</Badge>
              <Badge variant="outline">{doc.version}</Badge>
            </div>
            <h3 className="text-xl font-semibold tracking-tight">
              {doc.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {caseStudyMeta.company} · {caseStudyMeta.initiative}
            </p>
          </div>
          <div className="rounded-xl border bg-background px-3 py-2 text-xs text-muted-foreground">
            <div>{t("artifactChrome.date")}: {doc.date}</div>
            <div>{t("artifactChrome.to")}: {doc.recipients.join(", ")}</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 rounded-xl border bg-background px-3 py-3 text-sm">
          <div className="flex size-9 items-center justify-center rounded-lg border bg-muted/50">
            <UserRound className="size-4" />
          </div>
          <div>
            <p className="font-medium">{doc.author.name}</p>
            <p className="text-xs text-muted-foreground">
              {doc.author.role} · {doc.author.team}
            </p>
          </div>
        </div>
      </header>

      <div className="space-y-6 px-5 py-6 md:px-6">
        <section className="space-y-2">
          <SectionLabel icon={Building2} title={t("artifactChrome.sections.context")} />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doc.context}
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.problem1")} />
          <p className="text-sm leading-relaxed font-medium">
            {doc.problem.summary}
          </p>
          <Card className="shadow-none">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">{t("artifactChrome.labels.asToday")}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {doc.problem.today}
            </CardContent>
          </Card>
          <ul className="space-y-2">
            {doc.problem.pain.map((item) => (
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
          <SectionLabel icon={UserRound} title={t("artifactChrome.sections.forWhom2")} />
          <div className="grid gap-3 md:grid-cols-3">
            {doc.users.map((user) => (
              <Card key={user.segment} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{user.segment}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {user.need}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Target} title={t("artifactChrome.sections.goalHypothesis3")} />
          <Card className="border-sky-200 bg-sky-50/50 shadow-none dark:border-sky-900 dark:bg-sky-950/30">
            <CardContent className="space-y-3 pt-5 text-sm leading-relaxed">
              <p>
                <span className="font-semibold">{t("artifactChrome.goal")}: </span>
                {doc.goal}
              </p>
              <p>
                <span className="font-semibold">{t("artifactChrome.hypothesis")}: </span>
                {doc.hypothesis}
              </p>
            </CardContent>
          </Card>
          <div className="grid gap-3 md:grid-cols-2">
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">
                  {t("artifactChrome.labels.valueForUser")}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {doc.value.forUser}
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle className="text-sm">{t("artifactChrome.labels.valueForBusiness")}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {doc.value.forBusiness}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Target} title={t("artifactChrome.sections.success4")} />
          <div className="grid gap-3 md:grid-cols-3">
            {doc.successMetrics.map((metric) => (
              <Card key={metric.name} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{metric.name}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {metric.target}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.whatsNeeded5")} />
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle className="text-sm">{t("artifactChrome.labels.mustHave")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm leading-relaxed">
                {doc.requestedSolution.mustHave.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle className="text-sm">{t("artifactChrome.labels.niceToHave")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {doc.requestedSolution.niceToHave.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <Card className="border-sky-200 bg-sky-50/60 shadow-none dark:border-sky-900 dark:bg-sky-950/40">
          <CardHeader>
            <CardTitle className="text-sm">{t("artifactChrome.labels.askToProduct")}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed">
            {doc.askToProduct}
          </CardContent>
        </Card>

        <Separator />

        <section className="space-y-3">
          <SectionLabel
            icon={Users}
            title={t("artifactChrome.sections.discoverySquad")}
          />
          <p className="text-sm text-muted-foreground">
            {t("artifactChrome.hints.discoverySquadIntro")}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doc.discoverySquad.note}
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            <Card className="shadow-none md:col-span-3">
              <CardHeader className="gap-1.5">
                <CardTitle className="text-sm">
                  {t("artifactChrome.labels.problemType")}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {doc.discoverySquad.problemType}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-none">
              <CardHeader className="gap-1.5">
                <CardTitle className="text-sm">
                  {t("artifactChrome.labels.decidedBy")}
                </CardTitle>
                <CardDescription>{doc.discoverySquad.decidedBy}</CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-none md:col-span-2">
              <CardHeader className="gap-1.5">
                <CardTitle className="text-sm">
                  {t("artifactChrome.labels.decidedAt")}
                </CardTitle>
                <CardDescription>{doc.discoverySquad.decidedAt}</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {t("artifactChrome.labels.squadIn")}
              </p>
              {doc.discoverySquad.members.map((member) => (
                <Card key={member.role} className="shadow-none">
                  <CardHeader className="gap-1.5">
                    <CardTitle className="text-sm">{member.role}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {member.why}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {t("artifactChrome.labels.squadOut")}
              </p>
              {doc.discoverySquad.notNeededYet.map((member) => (
                <Card key={member.role} className="shadow-none">
                  <CardHeader className="gap-1.5">
                    <CardTitle className="text-sm">{member.role}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {member.why}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
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
