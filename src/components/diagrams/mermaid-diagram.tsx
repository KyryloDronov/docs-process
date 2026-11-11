import { useEffect, useId, useState } from "react"
import mermaid from "mermaid"

import { cn } from "@/lib/utils"

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "loose",
  theme: "neutral",
  fontFamily: "inherit",
})

export function MermaidDiagram({
  chart,
  className,
}: {
  chart: string
  className?: string
}) {
  const reactId = useId().replace(/:/g, "")
  const [svg, setSvg] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function render() {
      try {
        const { svg: nextSvg } = await mermaid.render(
          `mermaid-${reactId}`,
          chart.trim()
        )
        if (!cancelled) {
          setSvg(nextSvg)
          setError(null)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Mermaid render error")
          setSvg("")
        }
      }
    }

    void render()
    return () => {
      cancelled = true
    }
  }, [chart, reactId])

  if (error) {
    return (
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
        Не удалось отрисовать схему: {error}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "overflow-x-auto rounded-2xl border bg-card p-4 [&_svg]:mx-auto [&_svg]:max-w-none",
        className
      )}
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
    />
  )
}
