import { useEffect, useState } from 'react'
import { useDocsGlobalContext } from '../docsGlobalContext.js'
import { useDocsSearchStore } from '../store/runtime-store.js'

type SearchModalModule = typeof import('./SearchModal.js')

let searchModalModulePromise: Promise<SearchModalModule> | null = null

const loadSearchModalModule = () => {
  searchModalModulePromise ??= import('./SearchModal.js')
  return searchModalModulePromise
}

export const Search = () => {
  const docs = useDocsGlobalContext()
  const isOpen = useDocsSearchStore((state) => state.isOpen)
  const [searchModalModule, setSearchModalModule] = useState<SearchModalModule | null>(null)

  useEffect(() => {
    if (!docs.algolia || !isOpen || searchModalModule !== null) {
      return
    }

    let isMounted = true

    loadSearchModalModule().then((module) => {
      if (isMounted) {
        setSearchModalModule(module)
      }
    })

    return () => {
      isMounted = false
    }
  }, [docs.algolia, isOpen, searchModalModule])

  if (!docs.algolia || searchModalModule === null) {
    return null
  }

  const { SearchModal } = searchModalModule

  return <SearchModal />
}
