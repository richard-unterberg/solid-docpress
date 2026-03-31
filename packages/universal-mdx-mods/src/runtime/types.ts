import type { ReactNode } from 'react'

export type UniversalMdxTranslationFn = (group: string, key: string) => string

export type UniversalResolvedDocLink = {
  href: string
  title?: ReactNode
  breadcrumb?: ReactNode[]
}

export type UniversalResolveDocLinkFn = (href: string) => UniversalResolvedDocLink | null

export interface UniversalMdxCodeBlockChoiceStore {
  subscribe: (listener: () => void) => () => void
  getChoice: (choiceGroupName: string) => string | null
  setChoice: (choiceGroupName: string, choice: string) => void
  getLegacyChoice?: (choiceGroupName: string) => string | null
}

export interface UniversalMdxRuntimeValue {
  locale: string
  t?: UniversalMdxTranslationFn
  localizeHref?: (href: string) => string
  resolveDocLink?: UniversalResolveDocLinkFn
  codeBlockChoices?: UniversalMdxCodeBlockChoiceStore
}
