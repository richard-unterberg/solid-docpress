import { createMemo } from 'solid-js'
import { usePageContext } from 'vike-solid/usePageContext'
import { getApiNavigation } from '@/pages/(docs)/Sidebar/apiNavigation'
import SidebarNavigation from '@/pages/(docs)/Sidebar/SidebarNavigation'

const ApiTab = () => {
  const pageContext = usePageContext()
  const groups = createMemo(() => getApiNavigation(pageContext.locale))

  return (
    <SidebarNavigation
      groups={groups()}
      currentPathname={pageContext.urlPathnameLocalized ?? pageContext.urlPathname}
    />
  )
}

export default ApiTab
