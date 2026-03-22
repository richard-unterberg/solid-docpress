import type { Component } from 'solid-js'
import { type DocHeading, extractDocHeadings } from '@/lib/docs/headings'
import { DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/i18n/config'

type MdxModule = {
  default: Component
}

type DocContentModule = {
  Page?: Component
  headings?: DocHeading[]
}

type DocEntry = Partial<Record<Locale, DocContentModule>>

const pageModules = import.meta.glob<MdxModule>('../../pages/**/content.*.mdx', {
  eager: true,
})

type RawContentModule = string | { default?: string }

const rawContentModules = import.meta.glob<RawContentModule>('../../pages/**/content.*.mdx', {
  eager: true,
  import: 'default',
  query: '?raw',
})

const getRawDocSource = (module: RawContentModule) => {
  if (typeof module === 'string') return module
  if (typeof module?.default === 'string') return module.default
  return ''
}

const getDocModuleMeta = (path: string) => {
  const match = path.match(/\/pages\/\(docs\)\/(.+)\/content\.([^.]+)\.mdx$/)
  if (!match) return null

  const [, routeId, locale] = match
  if (!isLocale(locale)) return null

  return { locale, routeId }
}

const docs = {} as Record<string, DocEntry>

for (const [path, mod] of Object.entries(pageModules)) {
  const meta = getDocModuleMeta(path)
  if (!meta) continue

  docs[meta.routeId] ??= {}
  const localizedDoc = (docs[meta.routeId][meta.locale] ??= {})
  localizedDoc.Page = mod.default
}

for (const [path, source] of Object.entries(rawContentModules)) {
  const meta = getDocModuleMeta(path)
  if (!meta) continue

  docs[meta.routeId] ??= {}
  const localizedDoc = (docs[meta.routeId][meta.locale] ??= {})
  const rawSource = getRawDocSource(source)
  localizedDoc.headings = extractDocHeadings(rawSource)
}

export const getDocPage = (slug: string, locale: Locale) => {
  const doc = docs[slug]
  if (!doc) {
    return null
  }

  const docContent = doc[locale] ?? doc[DEFAULT_LOCALE]
  if (!docContent?.Page) {
    return null
  }

  return {
    Page: docContent.Page,
    headings: docContent.headings ?? [],
    resolvedLocale: doc[locale] ? locale : DEFAULT_LOCALE,
  }
}
