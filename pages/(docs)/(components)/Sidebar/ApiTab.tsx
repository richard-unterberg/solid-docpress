import { usePageContext } from 'vike-react/usePageContext'
import { getApiNavigation } from '@/lib/navigation/apiNavigation'
import SidebarNavigation from '@/pages/(docs)/(components)/Sidebar/SidebarNavigation'

const ApiTab = () => {
  const { locale, urlPathnameLocalized, urlPathname } = usePageContext()
  const groups = getApiNavigation(locale)
  return <SidebarNavigation groups={groups} currentPathname={urlPathnameLocalized ?? urlPathname} />
}

export default ApiTab
