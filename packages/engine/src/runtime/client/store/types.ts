export type DocsSearchState = {
  isOpen: boolean
  query: string
}

export type DocsSearchActions = {
  open: () => void
  close: () => void
  toggle: () => void
  setQuery: (query: string) => void
  clearQuery: () => void
}

export type DocsSearchSlice = DocsSearchState & DocsSearchActions
