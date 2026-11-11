import {
  CheckCircle2,
  CircleX,
  FileText,
  MessageSquareQuote,
  Target,
  UserRound,
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
import { useCaseStudyData } from "@/hooks/use-locale-data"
import { cn } from "@/lib/utils"

export function TestResultsArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, testResultsArtifact } = useCaseStudyData()
  const doc = testResultsArtifact

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
            <p className="mt-1 text-xs text-muted-foreground">
              {t("artifactChrome.coAuthors")}: {doc.coAuthors.join("; ")}
            </p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">{t("artifactChrome.basedOn")}: {doc.basedOn}</p>
      </header>

      <div className="space-y-6 px-5 py-6 md:px-6">
        <section className="space-y-2">
          <SectionLabel icon={FileText} title={t("artifactChrome.summary")} />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doc.summary}
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <SectionLabel icon={FileText} title={t("artifactChrome.method")} />
          <div className="grid gap-3 md:grid-cols-3">
            <Card className="shadow-none">
              <CardHeader className="gap-1.5">
                <CardTitle className="text-sm">{t("artifactChrome.labels.participants")}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {doc.method.users}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-none">
              <CardHeader className="gap-1.5">
                <CardTitle className="text-sm">{t("artifactChrome.labels.format")}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {doc.method.format}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="shadow-none">
              <CardHeader className="gap-1.5">
                <CardTitle className="text-sm">{t("artifactChrome.labels.techCheck")}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {doc.method.techCheck}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Target} title={t("artifactChrome.sections.successCriteria")} />
          <div className="grid gap-3">
            {doc.successCriteria.map((item) => (
              <Card key={item.name} className="shadow-none">
                <CardHeader className="gap-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <CardTitle className="text-sm">{item.name}</CardTitle>
                    <Badge
                      variant="outline"
                      className={cn(
                        item.pass
                          ? "border-emerald-300 text-emerald-800 dark:border-emerald-800 dark:text-emerald-200"
                          : "border-amber-300 text-amber-900 dark:border-amber-800 dark:text-amber-200"
                      )}
                    >
                      {item.pass ? (
                        <span className="inline-flex items-center gap-1">
                          <CheckCircle2 className="size-3.5" />
                          {t("artifactChrome.labels.passOk")}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1">
                          <CircleX className="size-3.5" />
                          {t("artifactChrome.labels.passNotOk")}
                        </span>
                      )}
                    </Badge>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {t("artifactChrome.goal")}: {item.target}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {t("artifactChrome.fact")}: {item.result}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.findings")} />
          <div className="grid gap-3">
            {doc.findings.map((item) => (
              <Card key={item.title} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{item.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.detail}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                  <span className="font-medium">{t("artifactChrome.whatWeDo")}: </span>
                  <span className="text-muted-foreground">{item.action}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={MessageSquareQuote} title={t("artifactChrome.sections.quotes")} />
          <div className="grid gap-3">
            {doc.quotes.map((item) => (
              <Card key={item.text} className="shadow-none">
                <CardContent className="space-y-2 pt-5 text-sm">
                  <p className="italic text-muted-foreground">«{item.text}»</p>
                  <p className="text-xs font-medium">{item.who}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.techSpike")} />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doc.techSpike.summary}
          </p>
          <ul className="space-y-2">
            {doc.techSpike.risks.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-amber-200 bg-amber-50/50 px-3 py-2.5 text-sm leading-relaxed dark:border-amber-900 dark:bg-amber-950/30"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <Card className="border-emerald-200 bg-emerald-50/50 shadow-none dark:border-emerald-900 dark:bg-emerald-950/30">
          <CardHeader className="gap-2">
            <CardTitle className="text-sm">
              {t("artifactChrome.decision")}: {doc.decision.verdict}
            </CardTitle>
            <CardDescription className="leading-relaxed">
              {doc.decision.why}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {t("artifactChrome.labels.changesBeforeSpec")}
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {doc.decision.changesBeforeSpec.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-sky-200 bg-sky-50/60 shadow-none dark:border-sky-900 dark:bg-sky-950/40">
          <CardHeader>
            <CardTitle className="text-sm">{t("artifactChrome.nextStep")}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-relaxed">
            {doc.nextStep}
          </CardContent>
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
