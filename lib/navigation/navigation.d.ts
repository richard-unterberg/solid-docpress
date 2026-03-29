import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export type MenuGroupShared = {
  id: string
  icon?: LucideIcon
  collapsible?:
    | boolean
    | {
        isDefaultOpen?: boolean
      }
}

export type SidebarLinkItem = {
  title: ReactNode
  href: string
}

export type SidebarDividerItem = {
  id: string
  title: ReactNode
  isDivider: true
}

export type SidebarItem = SidebarLinkItem | SidebarDividerItem

export type MenuRendererGroup = MenuGroupShared & {
  title: ReactNode
  links?: SidebarItem[]
}
