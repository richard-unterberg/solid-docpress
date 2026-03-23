import { usePageContext } from 'vike-react/usePageContext'
import { getMenuNavigation } from '@/lib/navigation/menuNavigation'
import SidebarNavigation from '@/pages/(docs)/(components)/Sidebar/SidebarNavigation'

const MenuTab = () => {
  const { locale, urlPathnameLocalized, urlPathname } = usePageContext()
  const menu = getMenuNavigation(locale)

  return (
    <SidebarNavigation groups={menu} currentPathname={urlPathnameLocalized ?? urlPathname} />
  )
}

export default MenuTab
