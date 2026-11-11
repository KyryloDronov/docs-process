import { useEffect, useState } from "react"
import { Link, useRouterState } from "@tanstack/react-router"
import {
  BookOpen,
  Boxes,
  Building2,
  ChevronRight,
  Compass,
  House,
  Layers3,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react"
import { useTranslation } from "react-i18next"

import { LanguageSwitcher } from "@/components/language-switcher"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useFoundationData, useProcessData } from "@/hooks/use-locale-data"
import { getStepIcon } from "@/lib/doc-icons"
import { cn } from "@/lib/utils"

function pathActive(pathname: string, to: string, exact = false) {
  if (exact) return pathname === to || (to !== "/" && pathname === `${to}/`)
  if (to === "/") return pathname === "/"
  if (to === "/foundation") {
    return pathname === "/foundation" || pathname === "/foundation/"
  }
  return pathname === to || pathname.startsWith(`${to}/`)
}

export function DocsSidebar() {
  const { t } = useTranslation()
  const process = useProcessData()
  const foundation = useFoundationData()
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const inFoundation =
    pathname === "/foundation" || pathname.startsWith("/foundation/")
  const inProcess =
    !inFoundation &&
    (pathname.startsWith("/process") ||
      pathname.startsWith("/artifacts") ||
      pathname.startsWith("/participants") ||
      pathname.startsWith("/principles"))
  const onHome = pathname === "/" || pathname === ""

  const [foundationOpen, setFoundationOpen] = useState(true)
  const [processOpen, setProcessOpen] = useState(true)

  useEffect(() => {
    if (inFoundation) setFoundationOpen(true)
    if (inProcess) setProcessOpen(true)
  }, [inFoundation, inProcess])

  const processOverviewNav = [
    {
      to: "/process/overview",
      label: t("nav.processOverview"),
      icon: Compass,
      exact: true,
    },
    { to: "/process", label: t("nav.processMap"), icon: Layers3, exact: true },
    { to: "/artifacts", label: t("nav.artifacts"), icon: Boxes, exact: true },
    {
      to: "/participants",
      label: t("nav.participants"),
      icon: Users,
      exact: true,
    },
    {
      to: "/principles",
      label: t("nav.principles"),
      icon: Sparkles,
      exact: true,
    },
  ] as const

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader className="border-b border-sidebar-border px-3 py-4">
        <Link to="/" className="flex items-center gap-2.5 overflow-hidden">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-lg">
            <BookOpen className="size-4" />
          </div>
          <div className="min-w-0 group-data-[collapsible=icon]:hidden">
            <p className="truncate text-sm font-semibold tracking-tight">
              {t("appName")}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {t("appTagline")}
            </p>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t("sections")}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={onHome}
                  tooltip={t("nav.home")}
                  render={<Link to="/" />}
                >
                  <House />
                  <span>{t("nav.home")}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible
                open={foundationOpen}
                onOpenChange={setFoundationOpen}
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger
                    render={
                      <SidebarMenuButton
                        isActive={inFoundation}
                        tooltip={t("nav.foundation")}
                      />
                    }
                  >
                    <Building2 />
                    <span>{t("nav.foundation")}</span>
                    <ChevronRight
                      className={cn(
                        "ml-auto transition-transform",
                        foundationOpen && "rotate-90"
                      )}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {foundation.foundationNav.map((item) => (
                        <SidebarMenuSubItem key={item.to}>
                          <SidebarMenuSubButton
                            isActive={pathActive(
                              pathname,
                              item.to,
                              item.to === "/foundation"
                            )}
                            render={<Link to={item.to} />}
                          >
                            <span>{item.label}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <Collapsible open={processOpen} onOpenChange={setProcessOpen}>
                <SidebarMenuItem>
                  <CollapsibleTrigger
                    render={
                      <SidebarMenuButton
                        isActive={inProcess}
                        tooltip={t("nav.process")}
                      />
                    }
                  >
                    <Workflow />
                    <span>{t("nav.process")}</span>
                    <ChevronRight
                      className={cn(
                        "ml-auto transition-transform",
                        processOpen && "rotate-90"
                      )}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {processOverviewNav.map((item) => {
                        const Icon = item.icon
                        return (
                          <SidebarMenuSubItem key={item.to}>
                            <SidebarMenuSubButton
                              isActive={pathActive(
                                pathname,
                                item.to,
                                item.exact
                              )}
                              render={<Link to={item.to} />}
                            >
                              <Icon />
                              <span>{item.label}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )
                      })}
                    </SidebarMenuSub>

                    <div className="px-4 pt-2 pb-1 text-[10px] font-medium tracking-wide text-muted-foreground uppercase group-data-[collapsible=icon]:hidden">
                      {t("nav.processMap")}
                    </div>
                    <SidebarMenuSub>
                      {process.processSteps.map((step) => {
                        const StepIcon = getStepIcon(step.id)
                        const active = pathname === `/process/${step.id}`
                        return (
                          <SidebarMenuSubItem key={step.id}>
                            <SidebarMenuSubButton
                              isActive={active}
                              render={
                                <Link
                                  to="/process/$stepId"
                                  params={{ stepId: step.id }}
                                />
                              }
                            >
                              <span
                                className={cn(
                                  "flex size-4 shrink-0 items-center justify-center rounded-sm text-white",
                                  step.color
                                )}
                              >
                                <StepIcon
                                  className="size-2.5"
                                  strokeWidth={2.5}
                                />
                              </span>
                              <span>{step.title}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3 group-data-[collapsible=icon]:p-2">
        <LanguageSwitcher className="w-full justify-center group-data-[collapsible=icon]:w-auto" />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
