import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export type MenuCollapsible =
  | boolean
  | {
      isDefaultOpen?: boolean
    }

export type MenuGroupShared = {
  id: string
  icon?: LucideIcon
  collapsible?: MenuCollapsible
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

export type SidebarGroupItem = {
  id: string
  title: ReactNode
  href?: string
  collapsible?: MenuCollapsible
  items: SidebarItem[]
}

export type SidebarItem = SidebarLinkItem | SidebarDividerItem | SidebarGroupItem

export type MenuRendererGroup = MenuGroupShared & {
  title: ReactNode
  items?: SidebarItem[]
}
