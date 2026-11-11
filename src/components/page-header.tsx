import type { ReactNode } from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Link } from "@tanstack/react-router"

type Crumb = {
  label: string
  to?: string
}

export function PageHeader({
  title,
  description,
  crumbs,
  actions,
}: {
  title?: string
  description?: string
  crumbs?: Crumb[]
  actions?: ReactNode
}) {
  const hasTitleBlock = Boolean(title || description || actions)

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-1 h-4" />
        {crumbs && crumbs.length > 0 ? (
          <Breadcrumb>
            <BreadcrumbList>
              {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1
                return (
                  <div key={`${crumb.label}-${index}`} className="contents">
                    <BreadcrumbItem>
                      {isLast || !crumb.to ? (
                        <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink render={<Link to={crumb.to} />}>
                          {crumb.label}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {!isLast ? <BreadcrumbSeparator /> : null}
                  </div>
                )
              })}
            </BreadcrumbList>
          </Breadcrumb>
        ) : null}
      </div>

      {hasTitleBlock ? (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1.5">
            {title ? (
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {title}
              </h1>
            ) : null}
            {description ? (
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {description}
              </p>
            ) : null}
          </div>
          {actions}
        </div>
      ) : null}
    </div>
  )
}
