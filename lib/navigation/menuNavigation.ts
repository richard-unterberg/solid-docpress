import { Compass, Map as MapIcon, Sprout } from 'lucide-react'
import { getHeadingData, type HeadingKey } from '@/lib/docs/headings'
import type { Locale } from '@/lib/i18n/config'
import { t } from '@/lib/messages'
import type { MenuGroupShared, MenuRendererGroup } from '@/lib/types'

const GroupKeys = {
  getStarted: 'getStarted',
  components: 'components',
  guides: 'guides',
} as const
type GroupKeys = (typeof GroupKeys)[keyof typeof GroupKeys]

type MenuGroupDefinition = MenuGroupShared & {
  groupKey: GroupKeys
  links: HeadingKey[]
}
const menuGroups: MenuGroupDefinition[] = [
  {
    id: 'get-started',
    icon: Sprout,
    groupKey: 'getStarted',
    links: ['getStarted', 'designSystem'],
    collapsible: {
      isDefaultOpen: true,
    },
  },
  {
    id: 'components',
    icon: Compass,
    groupKey: 'components',
    links: ['components', 'alert'],
    collapsible: true,
  },
  {
    id: 'guides',
    icon: MapIcon,
    groupKey: 'guides',
    links: ['tailwind', 'daisyUiTestRange'],
  },
]

export const getMenuNavigation = (locale: Locale): MenuRendererGroup[] => {
  return menuGroups.map((group) => ({
    id: group.id,
    icon: group.icon,
    title: t(locale, 'sidebar', group.groupKey),
    collapsible: group.collapsible,
    links: group.links.map((item) => getHeadingData(item, locale)),
  }))
}
