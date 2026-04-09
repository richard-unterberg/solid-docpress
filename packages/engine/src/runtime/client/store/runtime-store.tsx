import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'
import { useStore } from 'zustand'
import { createStore } from 'zustand/vanilla'
import type { DocsSearchActions, DocsSearchSlice, DocsSearchState } from './types.js'

type DocsRuntimeStoreState = {
  searchActions: DocsSearchActions
  searchState: DocsSearchState
}

type DocsRuntimeStoreApi = ReturnType<typeof createDocsRuntimeStore>

const defaultDocsSearchState: DocsSearchState = {
  isOpen: false,
  query: '',
}

export const createDocsRuntimeStore = () => {
  return createStore<DocsRuntimeStoreState>()((set) => {
    const searchActions: DocsSearchActions = {
      open: () =>
        set((state) => {
          if (state.searchState.isOpen) {
            return state
          }

          return {
            searchState: {
              ...state.searchState,
              isOpen: true,
            },
          }
        }),
      close: () =>
        set((state) => {
          if (!state.searchState.isOpen) {
            return state
          }

          return {
            searchState: {
              ...state.searchState,
              isOpen: false,
            },
          }
        }),
      toggle: () =>
        set((state) => ({
          searchState: {
            ...state.searchState,
            isOpen: !state.searchState.isOpen,
          },
        })),
      setQuery: (query) =>
        set((state) => {
          if (state.searchState.query === query) {
            return state
          }

          return {
            searchState: {
              ...state.searchState,
              query,
            },
          }
        }),
      clearQuery: () =>
        set((state) => {
          if (state.searchState.query === '') {
            return state
          }

          return {
            searchState: {
              ...state.searchState,
              query: '',
            },
          }
        }),
    }

    return {
      searchActions,
      searchState: defaultDocsSearchState,
    }
  })
}

const DocsRuntimeStoreContext = createContext<DocsRuntimeStoreApi | null>(null)

export const DocsRuntimeStoreProvider = ({ children, store }: { children: ReactNode; store: DocsRuntimeStoreApi }) => {
  return <DocsRuntimeStoreContext.Provider value={store}>{children}</DocsRuntimeStoreContext.Provider>
}

const useDocsRuntimeStoreApi = () => {
  const store = useContext(DocsRuntimeStoreContext)

  if (store === null) {
    throw new Error('Missing docs runtime store provider.')
  }

  return store
}

const useDocsRuntimeStore = <Selected,>(selector: (state: DocsRuntimeStoreState) => Selected) => {
  return useStore(useDocsRuntimeStoreApi(), selector)
}

export const useDocsSearchStore = <Selected,>(selector: (state: DocsSearchSlice) => Selected) => {
  return useDocsRuntimeStore((state) =>
    selector({
      ...state.searchState,
      ...state.searchActions,
    }),
  )
}

export const useDocsSearchActions = () => {
  return useDocsRuntimeStore((state) => state.searchActions)
}
