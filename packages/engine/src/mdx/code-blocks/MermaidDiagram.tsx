export { MermaidDiagram }

import { cmMerge } from '@classmatejs/react'
import { useEffect, useId, useState } from 'react'

let isMermaidInitialized = false
let mermaidModulePromise: Promise<typeof import('mermaid').default> | null = null
const MERMAID_SVG_CLASS_NAME = 'nivel-mermaid-svg'
const MERMAID_ROOT_CLASS_NAME = 'nivel-mermaid'

const getMermaidSvgOverrideCss = (diagramId: string) => `
#${diagramId}.${MERMAID_SVG_CLASS_NAME} {
  font-family: var(--font-sans);
}

#${diagramId} .node rect,
#${diagramId} .node circle,
#${diagramId} .node ellipse,
#${diagramId} .node polygon,
#${diagramId} .node path {
  fill: var(--nivel-mermaid-node-fill, var(--color-primary-muted-superlight));
  stroke: var(--nivel-mermaid-node-stroke, var(--color-primary-muted-medium));
  stroke-width: var(--nivel-mermaid-node-stroke-width, 1px);
}

#${diagramId} .node .label,
#${diagramId} .node .label text,
#${diagramId} .cluster-label text,
#${diagramId} .label text {
  fill: var(--nivel-mermaid-node-text, var(--color-base-content));
  color: var(--nivel-mermaid-node-text, var(--color-base-content));
}

#${diagramId} .edgePath .path,
#${diagramId} .flowchart-link,
#${diagramId} .relationshipLine,
#${diagramId} .messageLine0,
#${diagramId} .messageLine1 {
  stroke: var(--nivel-mermaid-line-color, var(--color-primary-muted));
  stroke-width: var(--nivel-mermaid-line-width, 1.5px);
}

#${diagramId} marker path,
#${diagramId} .marker {
  fill: var(--nivel-mermaid-line-color, var(--color-primary-muted));
  stroke: var(--nivel-mermaid-line-color, var(--color-primary-muted));
}

#${diagramId} .cluster rect {
  fill: var(--nivel-mermaid-cluster-fill, var(--color-base-100));
  stroke: var(--nivel-mermaid-cluster-stroke, var(--color-primary-muted-light));
  stroke-width: var(--nivel-mermaid-cluster-stroke-width, 1px);
}
`

const loadMermaid = async () => {
  mermaidModulePromise ??= import('mermaid').then((module) => module.default)
  return mermaidModulePromise
}

const ensureMermaidInitialized = async () => {
  const mermaid = await loadMermaid()

  if (isMermaidInitialized) {
    return mermaid
  }

  mermaid.initialize({
    startOnLoad: false,
    suppressErrorRendering: true,
    theme: 'base',
  })
  isMermaidInitialized = true

  return mermaid
}

const decorateSvg = (svg: string, diagramId: string) => {
  const svgWithClassName = svg.replace(/<svg\b([^>]*?)>/, (match, attributes: string) => {
    const classMatch = attributes.match(/\sclass="([^"]*)"/)
    if (classMatch) {
      const mergedClassNames = `${classMatch[1]} ${MERMAID_SVG_CLASS_NAME}`.trim()
      return `<svg${attributes.replace(/\sclass="([^"]*)"/, ` class="${mergedClassNames}"`)} data-mermaid-graphic="">`
    }

    return `<svg${attributes} class="${MERMAID_SVG_CLASS_NAME}" data-mermaid-graphic="">`
  })

  return svgWithClassName.replace('</svg>', `<style>${getMermaidSvgOverrideCss(diagramId)}</style></svg>`)
}

const MermaidDiagram = ({ className, source }: { className?: string; source: string }) => {
  const [svg, setSvg] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const diagramId = useId()

  useEffect(() => {
    let isActive = true

    const renderDiagram = async () => {
      try {
        const mermaid = await ensureMermaidInitialized()
        const { svg: renderedSvg } = await mermaid.render(`nivel-mermaid-${diagramId}`, source)

        if (!isActive) {
          return
        }

        setSvg(decorateSvg(renderedSvg, `nivel-mermaid-${diagramId}`))
        setError(null)
      } catch (renderError) {
        if (!isActive) {
          return
        }

        const message = renderError instanceof Error ? renderError.message : 'Failed to render Mermaid diagram.'
        setError(message)
        setSvg(null)
      }
    }

    void renderDiagram()

    return () => {
      isActive = false
    }
  }, [diagramId, source])

  if (error) {
    return (
      <div
        className={cmMerge(MERMAID_ROOT_CLASS_NAME, 'space-y-3', className)}
        data-mermaid-diagram=""
        data-mermaid-status="error"
      >
        <div className="rounded-box border border-error/30 bg-error/8 px-4 py-3 text-sm text-error">{error}</div>
        <pre className="doc-code-pre m-0 overflow-x-auto bg-base-200! p-4 text-sm">
          <code>{source}</code>
        </pre>
      </div>
    )
  }

  if (!svg) {
    return (
      <div
        className={cmMerge(MERMAID_ROOT_CLASS_NAME, 'space-y-3', className)}
        data-mermaid-diagram=""
        data-mermaid-status="loading"
      >
        <div className="rounded-box border border-base-muted-light bg-base-muted-superlight/70 px-4 py-10 text-center text-sm text-base-content/70">
          Rendering diagram...
        </div>
        <pre className="doc-code-pre m-0 overflow-x-auto bg-base-200! p-4 text-sm">
          <code>{source}</code>
        </pre>
      </div>
    )
  }

  return (
    <div
      className={cmMerge(
        MERMAID_ROOT_CLASS_NAME,
        'overflow-x-auto bg-base-200 px-3 py-4 [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:max-w-full',
        className,
      )}
      data-mermaid-diagram=""
      data-mermaid-status="ready"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
