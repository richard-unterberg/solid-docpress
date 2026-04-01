import fs from 'node:fs'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Plugin, ViteDevServer } from 'vite'
import { getDocsSourceEntries, isDocsSourcePath, syncGeneratedDocPages } from './codegen.js'
import { extractDocHeadings } from './headings'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const virtualModuleId = 'virtual:docs-content-manifest'
const resolvedVirtualModuleId = '\0virtual:docs-content-manifest'
const pagesRoot = path.resolve(__dirname, '../../pages')
const docsPagesRoot = path.resolve(pagesRoot, '(docs)')
const generatedPagesRoot = path.resolve(pagesRoot, '(docs)/(generated)')

type DocsContentEntry = ReturnType<typeof getDocsSourceEntries>[number] & {
  headings: ReturnType<typeof extractDocHeadings>
}

const getDocsContentEntries = (): DocsContentEntry[] => {
  return getDocsSourceEntries(pagesRoot).map((entry) => ({
    ...entry,
    headings: extractDocHeadings(fs.readFileSync(entry.path, 'utf8')),
  }))
}

const restartDevServer = async (server: ViteDevServer) => {
  syncGeneratedDocPages({ generatedPagesRoot, pagesRoot })
  await server.restart()
}

export const docsPagesPlugin = (): Plugin => {
  return {
    name: 'docs-pages-plugin',
    enforce: 'pre',
    configureServer(server) {
      server.watcher.on('add', async (filePath) => {
        if (!isDocsSourcePath(filePath, { docsPagesRoot, generatedPagesRoot })) {
          return
        }

        await restartDevServer(server)
      })

      server.watcher.on('unlink', async (filePath) => {
        if (!isDocsSourcePath(filePath, { docsPagesRoot, generatedPagesRoot })) {
          return
        }

        await restartDevServer(server)
      })
    },
    handleHotUpdate(ctx) {
      if (!isDocsSourcePath(ctx.file, { docsPagesRoot, generatedPagesRoot })) {
        return
      }

      ctx.server.ws.send({ type: 'full-reload' })
      return []
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id !== resolvedVirtualModuleId) {
        return
      }

      const docsContentEntries = getDocsContentEntries().sort((left, right) => left.path.localeCompare(right.path))

      return [
        `export const docsContentEntries = ${JSON.stringify(docsContentEntries)};`,
        'export default docsContentEntries;',
      ].join('\n')
    },
  }
}
