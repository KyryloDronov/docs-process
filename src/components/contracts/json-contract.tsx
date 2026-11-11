import type { CSSProperties } from "react"
import JsonView from "@uiw/react-json-view"
import { lightTheme } from "@uiw/react-json-view/light"
import { vscodeTheme } from "@uiw/react-json-view/vscode"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

type JsonContractProps = {
  title: string
  description?: string
  badge?: string
  value: object
  className?: string
  collapsed?: number | boolean
}

const monoFamily =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"

export function JsonContract({
  title,
  description,
  badge,
  value,
  className,
  collapsed = 2,
}: JsonContractProps) {
  const lightStyle = {
    ...lightTheme,
    fontSize: "12px",
    backgroundColor: "transparent",
    ["--w-rjv-font-family" as string]: monoFamily,
  } as CSSProperties

  const darkStyle = {
    ...vscodeTheme,
    fontSize: "12px",
    backgroundColor: "transparent",
    ["--w-rjv-font-family" as string]: monoFamily,
  } as CSSProperties

  return (
    <Card className={cn("overflow-hidden shadow-none", className)}>
      <CardHeader className="gap-1.5 border-b bg-muted/20 py-3">
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle className="font-mono text-sm">{title}</CardTitle>
          {badge ? (
            <Badge variant="secondary" className="font-normal">
              {badge}
            </Badge>
          ) : null}
        </div>
        {description ? (
          <CardDescription className="leading-relaxed">
            {description}
          </CardDescription>
        ) : null}
      </CardHeader>
      <CardContent className="overflow-x-auto bg-[#f6f8fa] p-3 dark:bg-[#1e1e1e]">
        <JsonView
          value={value}
          collapsed={collapsed}
          displayDataTypes={false}
          style={lightStyle}
          className="dark:hidden"
        />
        <JsonView
          value={value}
          collapsed={collapsed}
          displayDataTypes={false}
          style={darkStyle}
          className="hidden dark:block"
        />
      </CardContent>
    </Card>
  )
}
