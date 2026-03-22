import Compass from 'lucide-solid/icons/compass'
import Map from 'lucide-solid/icons/map'
import Plug from 'lucide-solid/icons/plug'
import Rocket from 'lucide-solid/icons/rocket'
import Sprout from 'lucide-solid/icons/sprout'
import { createMemo } from 'solid-js'
import { usePageContext } from 'vike-solid/usePageContext'
import { getHeadingData } from '@/lib/headings-flat'
import { t } from '@/lib/i18n/messages'
import SidebarNavigation, { type SidebarGroup } from '@/pages/(docs)/Sidebar/SidebarNavigation'

const getMenu = (locale: 'en' | 'zh'): SidebarGroup[] => [
  {
    icon: Sprout,
    title: t(locale, 'sidebar', 'getStarted'),
    links: [getHeadingData('scaffoldNewVikeApp', locale), getHeadingData('addSsrSsgToVite', locale)],
  },
  {
    icon: Compass,
    title: t(locale, 'sidebar', 'overview'),
    links: [
      getHeadingData('whyVike', locale),
      getHeadingData('faq', locale),
      getHeadingData('openSourcePricing', locale),
      getHeadingData('freeProgram', locale),
      getHeadingData('extensions', locale),
      getHeadingData('team', locale),
    ],
  },
  {
    icon: Map,
    title: t(locale, 'sidebar', 'guides'),
    links: [
      {
        title: t(locale, 'sidebar', 'basics'),
        children: [
          getHeadingData('dataFetching', locale),
          getHeadingData('preRendering', locale),
          getHeadingData('ssrVsSpa', locale),
          getHeadingData('headTags', locale),
          getHeadingData('commonIssues', locale),
        ],
      },
      {
        title: t(locale, 'sidebar', 'routing'),
        children: [
          getHeadingData('routing', locale),
          getHeadingData('baseUrl', locale),
          getHeadingData('activeLinks', locale),
        ],
      },
      {
        title: t(locale, 'sidebar', 'more'),
        children: [
          getHeadingData('staticDirectory', locale),
          getHeadingData('serverClient', locale),
          getHeadingData('environmentVariables', locale),
          getHeadingData('httpHeaders', locale),
          getHeadingData('i18n', locale),
          getHeadingData('pathAliases', locale),
          getHeadingData('preloading', locale),
          getHeadingData('apiRoutes', locale),
        ],
      },
    ],
  },
  {
    title: t(locale, 'sidebar', 'deploy'),
    icon: Rocket,
    links: [
      {
        title: t(locale, 'sidebar', 'staticHosts'),
        children: [
          getHeadingData('staticHostsOverview', locale),
          getHeadingData('githubPages', locale),
          getHeadingData('netlify', locale),
          getHeadingData('cloudflarePages', locale),
        ],
      },
      {
        title: t(locale, 'sidebar', 'serverless'),
        children: [
          getHeadingData('cloudflare', locale),
          getHeadingData('vercel', locale),
          getHeadingData('awsLambda', locale),
          getHeadingData('netlifyFunctions', locale),
          getHeadingData('edgeonePages', locale),
        ],
      },
      {
        title: t(locale, 'sidebar', 'selfHosted'),
        children: [
          getHeadingData('aws', locale),
          getHeadingData('docker', locale),
          getHeadingData('selfHostedOther', locale),
        ],
      },
      getHeadingData('otherDeployment', locale),
    ],
  },
  {
    title: t(locale, 'sidebar', 'integration'),
    icon: Plug,
    links: [
      getHeadingData('authentication', locale),
      getHeadingData('serverIntegration', locale),
      getHeadingData('errorTracking', locale),
      getHeadingData('cssInJs', locale),
      getHeadingData('markdown', locale),
      getHeadingData('store', locale),
      getHeadingData('graphql', locale),
      getHeadingData('vanillaUiTools', locale),
      getHeadingData('analytics', locale),
      getHeadingData('componentLibraries', locale),
      getHeadingData('dataFetchingIntegration', locale),
      getHeadingData('serviceWorker', locale),
      getHeadingData('viewTransitions', locale),
      getHeadingData('uiFramework', locale),
      getHeadingData('seeAlso', locale),
    ],
  },
]

const MenuTab = () => {
  const pageContext = usePageContext()
  const menu = createMemo(() => getMenu(pageContext.locale))

  return (
    <SidebarNavigation groups={menu()} currentPathname={pageContext.urlPathnameLocalized ?? pageContext.urlPathname} />
  )
}

export default MenuTab
