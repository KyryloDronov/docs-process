import {
  CircleCheck,
  FileText,
  ListChecks,
  ShieldCheck,
  TriangleAlert,
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
import { useCaseStudyData } from "@/hooks/use-locale-data"
import { cn } from "@/lib/utils"

const verdictStyles: Record<string, string> = {
  Approve:
    "border-emerald-300 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/40",
  Reject:
    "border-rose-300 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/40",
  Hold: "border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/40",
}

export function FinalDecisionArtifact() {
  const { t } = useTranslation()
  const { caseStudyMeta, finalDecisionArtifact } = useCaseStudyData()
  const doc = finalDecisionArtifact

  return (
    <article className="overflow-hidden rounded-2xl border bg-card shadow-none">
      <header className="space-y-4 border-b bg-muted/30 px-5 py-5 md:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">{doc.status}</Badge>
              <Badge variant="outline">{doc.version}</Badge>
              <Badge
                variant="outline"
                className="border-emerald-300 bg-emerald-50 font-normal dark:border-emerald-900 dark:bg-emerald-950/40"
              >
                {doc.decision.verdict}
              </Badge>
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

        <p className="text-xs text-muted-foreground">{t("artifactChrome.basedOn")}: {doc.basedOn}</p>
        <p className="text-xs text-muted-foreground">{doc.meeting}</p>
      </header>

      <div className="space-y-6 px-5 py-6 md:px-6">
        <section className="space-y-2">
          <SectionLabel icon={FileText} title={t("artifactChrome.summary")} />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doc.summary}
          </p>
        </section>

        <Card className="border-emerald-200 bg-emerald-50/50 shadow-none dark:border-emerald-900 dark:bg-emerald-950/30">
          <CardHeader className="gap-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <CircleCheck className="size-4 text-emerald-700 dark:text-emerald-300" />
              <Badge variant="secondary">{doc.decision.verdict}</Badge>
            </div>
            <CardTitle className="text-base">{t("artifactChrome.sections.gateDecision")}</CardTitle>
            <CardDescription className="leading-relaxed">
              {doc.decision.rationale}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {t("artifactChrome.goal")}: {doc.decision.releaseTarget}
          </CardContent>
        </Card>

        <Separator />

        <section className="space-y-3">
          <SectionLabel icon={ListChecks} title={t("artifactChrome.sections.reviewPackage")} />
          <div className="overflow-hidden rounded-2xl border">
            {doc.packageReviewed.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2.5 text-sm last:border-b-0"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="font-mono">
                    {item.id}
                  </Badge>
                  <span className="font-medium">{item.title}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{item.version}</span>
                  <Badge variant="secondary" className="font-normal">
                    {item.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={TriangleAlert} title={t("artifactChrome.sections.conditions")} />
          <div className="space-y-3">
            {doc.conditions.map((item) => (
              <Card key={item.id} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="font-mono">
                      {item.id}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {item.owner}
                    </span>
                  </div>
                  <CardTitle className="text-sm">{item.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {item.detail}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={FileText} title={t("artifactChrome.sections.pilotOutOfScope")} />
          <ul className="space-y-2">
            {doc.outOfScope.map((item) => (
              <li
                key={item}
                className="rounded-xl border px-3 py-2.5 text-sm leading-relaxed text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={Users} title={t("artifactChrome.sections.votes")} />
          <div className="space-y-3">
            {doc.votes.map((item) => (
              <Card key={item.name} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-sm">{item.name}</CardTitle>
                      <CardDescription>{item.role}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={cn(
                        "font-normal",
                        verdictStyles[item.verdict] ?? ""
                      )}
                    >
                      {item.verdict}
                    </Badge>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.note}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel icon={CircleCheck} title={t("artifactChrome.sections.resolvedQuestions")} />
          <div className="overflow-hidden rounded-2xl border">
            {doc.resolvedQuestions.map((item) => (
              <div
                key={item.question}
                className="space-y-1 border-b px-3 py-3 text-sm last:border-b-0"
              >
                <p className="font-medium">{item.question}</p>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        <section className="space-y-3">
          <SectionLabel
            icon={ShieldCheck}
            title={t("artifactChrome.sections.freezePackage")}
          />
          <p className="text-sm leading-relaxed text-muted-foreground">
            {doc.freezeNote}
          </p>
          <div className="overflow-hidden rounded-2xl border">
            {doc.freezePackage.map((item) => (
              <div
                key={item.title}
                className="flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2.5 text-sm last:border-b-0"
              >
                <span className="font-medium">{item.title}</span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{item.version}</span>
                  <span>{item.date}</span>
                  <Badge variant="secondary" className="font-normal">
                    {item.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={Users}
            title={t("artifactChrome.sections.signatureMatrix")}
          />
          <div className="space-y-3">
            {doc.signatures.map((item) => (
              <Card key={item.name} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-sm">{item.name}</CardTitle>
                      <CardDescription>{item.role}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="font-normal">
                      {item.status}
                    </Badge>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {item.signsFor}
                  </CardDescription>
                  <p className="text-xs text-muted-foreground">{item.signedAt}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={ShieldCheck}
            title={t("artifactChrome.sections.securityLegalCheck")}
          />
          <div className="grid gap-3">
            {doc.compliance.map((item) => (
              <Card key={item.topic} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="text-sm">{item.topic}</CardTitle>
                    <Badge variant="outline" className="font-normal">
                      {item.verdict}
                    </Badge>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {item.note}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionLabel
            icon={ListChecks}
            title={t("artifactChrome.sections.changeRuleAfterFreeze")}
          />
          <div className="grid gap-3 md:grid-cols-2">
            {doc.changePolicy.map((block) => (
              <Card key={block.title} className="shadow-none">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-sm">{block.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {block.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

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
