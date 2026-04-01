export type DocsSourceEntry = {
  locale: string
  path: string
  routeId: string
}

export const getDocsSourceEntries: (pagesRoot: string) => DocsSourceEntry[] = undefined

export const syncGeneratedDocPages: (options: { generatedPagesRoot: string; pagesRoot: string }) => void = undefined

export const isDocsSourcePath: (
  filePath: string,
  options: {
    docsPagesRoot: string
    generatedPagesRoot: string
  },
) => boolean = undefined
