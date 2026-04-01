import fs from 'node:fs'
import path from 'node:path'

/**
 * @typedef {{
 *   locale: string
 *   path: string
 *   routeId: string
 * }} DocsSourceEntry
 */

/**
 * @param {string} dirPath
 * @returns {string[]}
 */
const walkDir = (dirPath) => {
  return fs.readdirSync(dirPath, { withFileTypes: true }).flatMap((entry) => {
    const nextPath = path.join(dirPath, entry.name)
    if (entry.isDirectory()) {
      return walkDir(nextPath)
    }

    return [nextPath]
  })
}

/**
 * @param {string[]} segments
 */
const getLogicalSegments = (segments) => {
  return segments.filter((segment) => segment !== '' && !(segment.startsWith('(') && segment.endsWith(')')))
}

/**
 * @param {string} value
 */
const toPosixPath = (value) => value.split(path.sep).join('/')

/**
 * @param {string} filePath
 * @param {string} source
 */
const writeFileIfChanged = (filePath, source) => {
  const current = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : null
  if (current === source) {
    return
  }

  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, source)
}

/**
 * @param {string} pagesRoot
 * @returns {DocsSourceEntry[]}
 */
export const getDocsSourceEntries = (pagesRoot) => {
  if (!fs.existsSync(pagesRoot)) {
    return []
  }

  return walkDir(pagesRoot).flatMap((filePath) => {
    const localeMatch = path.basename(filePath).match(/^content\.([^.]+)\.mdx$/)
    if (!localeMatch) {
      return []
    }

    const relativePath = path.relative(pagesRoot, filePath)
    if (!relativePath || relativePath.startsWith('..')) {
      return []
    }

    const segments = relativePath.split(path.sep).filter(Boolean)
    const contentIndex = segments.indexOf('(content)')
    if (contentIndex < 0) {
      return []
    }

    const routeId = getLogicalSegments(segments.slice(contentIndex + 1, -1)).join('/')
    if (!routeId) {
      return []
    }

    return [
      {
        locale: localeMatch[1],
        path: filePath,
        routeId,
      },
    ]
  })
}

/**
 * @param {string} routeId
 * @param {DocsSourceEntry[]} entries
 */
const getGeneratedImports = (routeId, entries) => {
  const imports = entries
    .map((entry) => {
      const importName = `doc${entry.locale.replace(/[^a-zA-Z0-9_$]/g, '_')}`
      const importPath = `@/pages/(docs)/(content)/${routeId}/content.${entry.locale}.mdx`
      return {
        importName,
        importStatement: `import * as ${importName} from ${JSON.stringify(importPath)}`,
        locale: entry.locale,
      }
    })
    .sort((left, right) => left.locale.localeCompare(right.locale))

  return {
    importBlock: imports.map((entry) => entry.importStatement).join('\n'),
    modulesBlock: imports.map((entry) => `  ${JSON.stringify(entry.locale)}: ${entry.importName},`).join('\n'),
  }
}

/**
 * @param {string} routeId
 * @param {DocsSourceEntry[]} entries
 */
const getGeneratedPageSource = (routeId, entries) => {
  const { importBlock, modulesBlock } = getGeneratedImports(routeId, entries)

  return [
    "import { usePageContext } from 'vike-react/usePageContext'",
    "import type { DocPageData, GeneratedDocModule } from '@/lib/docs/contentData'",
    "import type { Locale } from '@/lib/i18n/config'",
    importBlock,
    '',
    'const modules: Partial<Record<Locale, GeneratedDocModule>> = {',
    modulesBlock,
    '}',
    '',
    'const Page = () => {',
    '  const pageContext = usePageContext()',
    '  const docData = pageContext.data as DocPageData',
    '  const MdxPage = modules[docData.resolvedLocale]?.default',
    '',
    '  if (!MdxPage) {',
    `    throw new Error(${JSON.stringify(`Missing generated doc module for "${routeId}".`)})`,
    '  }',
    '',
    '  return <MdxPage />',
    '}',
    '',
    'export default Page',
    '',
  ].join('\n')
}

/**
 * @param {string} routeId
 * @param {DocsSourceEntry[]} entries
 */
const getGeneratedDataSource = (routeId, entries) => {
  const { importBlock, modulesBlock } = getGeneratedImports(routeId, entries)

  return [
    "import type { PageContext } from 'vike/types'",
    "import { getGeneratedDocPageData, type GeneratedDocModule } from '@/lib/docs/contentData'",
    "import type { Locale } from '@/lib/i18n/config'",
    "import { getTelefuncSystemConfig } from '@/lib/docs/systemConfig'",
    importBlock,
    '',
    'const modules: Partial<Record<Locale, GeneratedDocModule>> = {',
    modulesBlock,
    '}',
    '',
    'const data = (pageContext: PageContext) => {',
    `  return getGeneratedDocPageData(${JSON.stringify(routeId)}, pageContext.locale, modules, getTelefuncSystemConfig(pageContext))`,
    '}',
    '',
    'export default data',
    '',
  ].join('\n')
}

/**
 * @param {string} routeId
 */
const getGeneratedRouteSource = (routeId) => {
  return [`export default ${JSON.stringify(`/${routeId}/`)}`, ''].join('\n')
}

/**
 * @param {{ pagesRoot: string, generatedPagesRoot: string }} options
 */
export const syncGeneratedDocPages = ({ pagesRoot, generatedPagesRoot }) => {
  const docsContentEntries = getDocsSourceEntries(pagesRoot).sort((left, right) => left.path.localeCompare(right.path))
  const entriesByRoute = new Map()

  for (const entry of docsContentEntries) {
    const routeEntries = entriesByRoute.get(entry.routeId) ?? []
    routeEntries.push(entry)
    entriesByRoute.set(entry.routeId, routeEntries)
  }

  fs.rmSync(generatedPagesRoot, { force: true, recursive: true })
  fs.mkdirSync(generatedPagesRoot, { recursive: true })

  for (const [routeId, entries] of entriesByRoute) {
    const pageDir = path.join(generatedPagesRoot, ...routeId.split('/'))
    writeFileIfChanged(path.join(pageDir, '+Page.tsx'), getGeneratedPageSource(routeId, entries))
    writeFileIfChanged(path.join(pageDir, '+data.ts'), getGeneratedDataSource(routeId, entries))
    writeFileIfChanged(path.join(pageDir, '+route.ts'), getGeneratedRouteSource(routeId))
  }
}

/**
 * @param {string} filePath
 * @param {{ docsPagesRoot: string, generatedPagesRoot: string }} options
 */
export const isDocsSourcePath = (filePath, { docsPagesRoot, generatedPagesRoot }) => {
  const normalized = toPosixPath(filePath)
  const docsRoot = toPosixPath(docsPagesRoot)
  const generatedRoot = toPosixPath(generatedPagesRoot)

  return (
    normalized.startsWith(docsRoot) &&
    !normalized.startsWith(generatedRoot) &&
    (/\/content\.[^.]+\.mdx$/.test(normalized) || /\/content\.config\.(ts|js)$/.test(normalized))
  )
}
