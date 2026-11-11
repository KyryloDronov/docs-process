import { Link, createFileRoute } from "@tanstack/react-router"
import {
  ArrowRight,
  Boxes,
  Building2,
  Compass,
  Layers3,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react"
import { useTranslation } from "react-i18next"

import { PageHeader } from "@/components/page-header"
import { useFoundationData } from "@/hooks/use-locale-data"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/")({
  component: HomePage,
})

function HomePage() {
  const { t } = useTranslation()
  const foundation = useFoundationData()

  const processLinks = [
    {
      to: "/process/overview",
      label: t("nav.processOverview"),
      description: t("home.processOverviewDesc"),
      icon: Compass,
    },
    {
      to: "/process",
      label: t("nav.processMap"),
      description: t("home.processMapDesc"),
      icon: Layers3,
    },
    {
      to: "/artifacts",
      label: t("nav.artifacts"),
      description: t("home.artifactsDesc"),
      icon: Boxes,
    },
    {
      to: "/participants",
      label: t("nav.participants"),
      description: t("home.participantsDesc"),
      icon: Users,
    },
    {
      to: "/principles",
      label: t("nav.principles"),
      description: t("home.principlesDesc"),
      icon: Sparkles,
    },
  ] as const

  return (
    <div className="mx-auto w-full min-w-0 max-w-5xl space-y-10 px-4 py-6 md:space-y-12 md:px-8 md:py-8">
      <PageHeader crumbs={[{ label: t("nav.home") }]} />

      <section className="relative isolate overflow-hidden rounded-3xl border bg-[radial-gradient(120%_80%_at_10%_-10%,oklch(0.94_0.04_230),transparent_55%),linear-gradient(165deg,oklch(0.995_0.01_230),oklch(0.97_0.02_240)_48%,oklch(0.985_0.01_200))] px-5 py-8 md:px-10 md:py-11 dark:bg-[radial-gradient(100%_70%_at_0%_0%,oklch(0.28_0.05_250),transparent_50%),linear-gradient(165deg,oklch(0.2_0.02_250),oklch(0.17_0.01_250))]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(oklch(0.55_0.04_240_/0.18)_1px,transparent_1px)] [background-size:18px_18px] dark:opacity-20"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <p className="text-sm font-semibold tracking-[0.08em] text-sky-700 uppercase dark:text-sky-300">
            {t("appName")}
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            {t("home.title")}
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
            {t("home.subtitle")}
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            {t("sections")}
          </h2>
          <p className="text-sm text-muted-foreground">{t("home.sectionsHint")}</p>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border">
            <div className="flex items-center gap-3 border-b bg-sky-50/80 px-4 py-3 dark:bg-sky-950/40">
              <span className="flex size-9 items-center justify-center rounded-xl bg-sky-600 text-white">
                <Building2 className="size-4" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold tracking-tight">
                  {t("nav.foundation")}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {foundation.foundationMeta.subtitle}
                </p>
              </div>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {foundation.foundationNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex flex-col gap-1 bg-card px-4 py-3.5 transition-colors hover:bg-muted/40"
                >
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium">
                    {item.label}
                    <ArrowRight className="size-3.5 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </span>
                  <span className="text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border">
            <div className="flex items-center gap-3 border-b bg-amber-50/70 px-4 py-3 dark:bg-amber-950/30">
              <span className="flex size-9 items-center justify-center rounded-xl bg-amber-600 text-white">
                <Workflow className="size-4" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold tracking-tight">
                  {t("nav.process")}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t("home.processSectionHint")}
                </p>
              </div>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {processLinks.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group flex gap-3 bg-card px-4 py-3.5 transition-colors hover:bg-muted/40"
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border bg-muted/40"
                      )}
                    >
                      <Icon className="size-3.5" strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium">
                        {item.label}
                        <ArrowRight className="size-3.5 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
