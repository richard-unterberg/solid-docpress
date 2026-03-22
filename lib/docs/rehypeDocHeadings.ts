import { createHeadingSlugger, extractTextFromHast, normalizeHeadingTitle } from './headings'

type HastNode = {
  children?: HastNode[]
  properties?: Record<string, unknown>
  tagName?: string
  type?: string
}

const isHeadingTag = (tagName?: string) => {
  return typeof tagName === 'string' && /^h[1-6]$/.test(tagName)
}

const appendClassName = (properties: Record<string, unknown>, className: string) => {
  const current = properties.className

  if (Array.isArray(current)) {
    if (!current.includes(className)) current.push(className)
    return
  }

  if (typeof current === 'string' && current !== '') {
    if (!current.split(/\s+/).includes(className)) {
      properties.className = `${current} ${className}`
    }
    return
  }

  properties.className = className
}

const visit = (node: HastNode, slugify: (value: string) => string) => {
  if (node.type === 'element' && isHeadingTag(node.tagName)) {
    const title = normalizeHeadingTitle(extractTextFromHast(node.children ?? []))

    if (title) {
      node.properties ??= {}
      node.properties.id ??= slugify(title)
      appendClassName(node.properties, 'scroll-mt-24')
    }
  }

  for (const child of node.children ?? []) {
    visit(child, slugify)
  }
}

export const rehypeDocHeadings = () => {
  return (tree: HastNode) => {
    visit(tree, createHeadingSlugger())
  }
}
