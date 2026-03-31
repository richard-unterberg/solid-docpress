import { Map as MapIcon, Sprout } from 'lucide-react'
import { getHeadingData, getHeadingLinkData, type HeadingKey } from '@/lib/docs/headings'
import type { TelefuncSystemConfig } from '@/lib/docs/systemConfig'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/messages'
import type { MenuGroupShared, MenuRendererGroup, SidebarDividerItem, SidebarItem } from '@/lib/navigation/navigation'

const GroupKeys = {
  getStarted: 'getStarted',
  api: 'api',
  maintainers: 'maintainers',
} as const
type GroupKeys = (typeof GroupKeys)[keyof typeof GroupKeys]

type MenuHeadingDefinition = {
  heading: HeadingKey
  collapsible?: MenuGroupShared['collapsible']
  items?: MenuItemDefinition[]
}

type MenuDividerDefinition = {
  dividerText: string
}

type MenuItemDefinition = MenuHeadingDefinition | MenuDividerDefinition

type MenuGroupDefinition = MenuGroupShared & {
  groupKey: GroupKeys
  items: MenuItemDefinition[]
}

const menuGroups: MenuGroupDefinition[] = [
  {
    id: 'get-started',
    icon: Sprout,
    groupKey: 'getStarted',
    items: [
      { heading: 'quickStart' },
      { heading: 'concepts' },
      { heading: 'bestPractices' },
      { dividerText: 'Guides' },
      {
        collapsible: {
          isDefaultOpen: false,
        },
        heading: 'serverIntegration',
        items: [
          { heading: 'next' },
          { heading: 'svelteKit' },
          { heading: 'vike' },
          { heading: 'nuxt' },
          { heading: 'reactRouter' },
          { heading: 'reactNative' },
          { heading: 'bundler' },
        ],
      },
      { heading: 'initialData' },
      { heading: 'permissions' },
      { heading: 'validation' },
      { heading: 'fileUploads' },
      { heading: 'errorHandling' },
      { dividerText: 'Learn More' },
      { heading: 'whySchemaless' },
      { heading: 'howItWorks' },
    ],
  },
  {
    id: 'guides',
    icon: MapIcon,
    groupKey: 'api',
    items: [
      { dividerText: 'Server' },
      { heading: 'apiTelefunc' },
      { heading: 'throwAbort' },
      { heading: 'getContext' },
      { heading: 'shield' },
      { heading: 'onBug' },
      { dividerText: 'Client' },
      { heading: 'onAbort' },
      { dividerText: 'Config' },
      { heading: 'telefuncUrl' },
      { heading: 'disableNamingConvention' },
      { heading: 'httpHeaders' },
      { heading: 'fetch' },
      { heading: 'telefuncFiles' },
      { heading: 'root' },
      { heading: 'configShield' },
      { heading: 'log' },
    ],
  },
  {
    id: 'maintainers',
    icon: Sprout,
    groupKey: 'maintainers',
    items: [{ heading: 'getStarted' }],
  },
]

export type MenuDocLink = ReturnType<typeof getHeadingLinkData>

const isMenuDividerDefinition = (item: MenuItemDefinition): item is MenuDividerDefinition => 'dividerText' in item

const getDividerItem = (dividerText: string): SidebarDividerItem => ({
  id: `divider-${dividerText}`,
  title: dividerText,
  isDivider: true,
})

const flattenMenuHeadings = (items: MenuItemDefinition[]): HeadingKey[] => {
  return items.flatMap((item) => {
    if (isMenuDividerDefinition(item)) {
      return []
    }

    return item.items ? [item.heading, ...flattenMenuHeadings(item.items)] : [item.heading]
  })
}

const renderMenuItem = (
  item: MenuItemDefinition,
  locale: Locale,
  telefuncConfig?: TelefuncSystemConfig,
): SidebarItem => {
  if (isMenuDividerDefinition(item)) {
    return getDividerItem(item.dividerText)
  }

  const headingData = getHeadingData(item.heading, locale, telefuncConfig)

  if (!item.items) {
    return headingData
  }

  return {
    id: `group-${item.heading}`,
    title: headingData.title,
    href: headingData.href,
    collapsible: item.collapsible,
    items: item.items.map((childItem) => renderMenuItem(childItem, locale, telefuncConfig)),
  }
}

export const getHeadingGroupTitle = (headingKey: HeadingKey, locale: Locale) => {
  const group = menuGroups.find((menuGroup) => flattenMenuHeadings(menuGroup.items).includes(headingKey))
  return group ? t(locale, 'sidebar', group.groupKey) : null
}

export const getMenuDocLinks = (locale: Locale, telefuncConfig?: TelefuncSystemConfig): MenuDocLink[] => {
  return menuGroups.flatMap((group) =>
    flattenMenuHeadings(group.items).map((headingKey) => getHeadingLinkData(headingKey, locale, telefuncConfig)),
  )
}

export const getMenuNavigation = (locale: Locale, telefuncConfig?: TelefuncSystemConfig): MenuRendererGroup[] => {
  return menuGroups.map((group) => ({
    id: group.id,
    icon: group.icon,
    title: t(locale, 'sidebar', group.groupKey),
    collapsible: group.collapsible,
    items: group.items.map((item) => renderMenuItem(item, locale, telefuncConfig)),
  }))
}
