import type { LucideIcon } from 'lucide-react'
import * as lucideIcons from 'lucide-react'

type LucideModule = typeof import('lucide-react')

type DocsIconKind = 'group' | 'page' | 'section'

export type DocsIconName = {
  [Key in keyof LucideModule]: LucideModule[Key] extends LucideIcon ? Key : never
}[keyof LucideModule]

const excludedLucideExports = new Set(['createLucideIcon', 'Icon', 'icons', 'LucideProvider', 'useLucideContext'])

const isLucideIconExport = (value: unknown) => {
  if (typeof value !== 'object' || value === null) {
    return false
  }

  return '$$typeof' in value && 'render' in value
}

const docsIconNames = Object.freeze(
  Object.entries(lucideIcons)
    .filter(([name, value]) => !excludedLucideExports.has(name) && isLucideIconExport(value))
    .map(([name]) => name)
    .sort(),
) as readonly DocsIconName[]

const docsIconNameSet = new Set<string>(docsIconNames)

const isDocsIconName = (value: string): value is DocsIconName => {
  return docsIconNameSet.has(value)
}

export const getDocsIconMapKey = (kind: DocsIconKind, id: string) => {
  return `${kind}:${id}`
}

export const assertDocsIconName = (value: string, context: string) => {
  if (isDocsIconName(value)) {
    return
  }

  throw new Error(
    `${context} must be a valid lucide-react icon export. Received "${value}". See https://lucide.dev/icons/`,
  )
}
