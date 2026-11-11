import { Link, createFileRoute } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"

import { MermaidDiagram } from "@/components/diagrams/mermaid-diagram"
import {
  FoundationNextLinks,
  FoundationPage,
} from "@/components/foundation-section"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useAppLanguage, useFoundationData } from "@/hooks/use-locale-data"

export const Route = createFileRoute("/foundation/")({
  component: FoundationIntroPage,
})

const orderChartRu = `
flowchart TD
  A[Старт базы компании] --> B[1. Оргструктура]
  B --> J[2. Должностные инструкции]
  J --> DR[3. Права на решения]
  DR --> C[4. Продукт и цели]
  C --> IN[5. Intake и приоритизация]
  IN --> D[6. Карта системы]
  IN --> E[6. Глоссарий]
  D --> DO[7. Владение данными]
  E --> DO
  DO --> F[8. Инженерный baseline]
  F --> CL[8. Legal и вендоры]
  CL --> G[9. План реализации]
  G --> BP[10. Бизнес-процессы]
  BP --> H[11. Процесс постановки задач]
  H --> I[Спеки / DoR / разработка / релиз]
`

const orderChartEn = `
flowchart TD
  A[Start company foundation] --> B[1. Org structure]
  B --> J[2. Job descriptions]
  J --> DR[3. Decision rights]
  DR --> C[4. Product and goals]
  C --> IN[5. Intake and prioritization]
  IN --> D[6. System map]
  IN --> E[6. Glossary]
  D --> DO[7. Data ownership]
  E --> DO
  DO --> F[8. Engineering baseline]
  F --> CL[8. Legal and vendors]
  CL --> G[9. Implementation plan]
  G --> BP[10. Business processes]
  BP --> H[11. Task framing process]
  H --> I[Specs / DoR / build / release]
`

function FoundationIntroPage() {
  const { t } = useTranslation()
  const lng = useAppLanguage()
  const foundation = useFoundationData()
  const howToRead = t("foundation.howToRead", { returnObjects: true }) as string[]

  return (
    <FoundationPage
      title={foundation.foundationMeta.title}
      description={foundation.foundationMeta.subtitle}
      crumb={t("foundation.introCrumb")}
    >
      <section className="space-y-3 text-sm leading-relaxed md:text-[15px]">
        <p>{t("foundation.introP1")}</p>
        <p className="text-muted-foreground">{t("foundation.introP2")}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">
          {t("foundation.orderTitle")}
        </h2>
        <MermaidDiagram chart={lng === "en" ? orderChartEn : orderChartRu} />
        <div className="grid gap-3 sm:grid-cols-2">
          {foundation.foundationOrder.map((item) => (
            <Card key={item.step} className="shadow-none">
              <CardHeader className="gap-1.5">
                <CardTitle className="text-sm">
                  {item.step}. {item.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {item.purpose}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold tracking-tight">
          {t("foundation.howToReadTitle")}
        </h2>
        <Card className="shadow-none">
          <CardContent className="space-y-2 pt-6 text-sm leading-relaxed text-muted-foreground">
            {howToRead.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        {foundation.foundationNav.slice(1).map((item) => {
          const guide = foundation.foundationGuides.find((g) => g.to === item.to)
          return (
            <Link key={item.to} to={item.to}>
              <Card className="h-full shadow-none transition-colors hover:bg-muted/30">
                <CardHeader className="gap-1.5">
                  <CardTitle className="text-base">{item.label}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {guide?.short ?? item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          )
        })}
      </section>

      <FoundationNextLinks currentTo="/foundation" />
    </FoundationPage>
  )
}
