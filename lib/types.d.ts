export type MenuGroupShared = {
  id: string
  icon?: LucideIcon
  collapsible?:
    | boolean
    | {
        isDefaultOpen?: boolean
      }
}

export type MenuRendererGroup = MenuGroupShared & {
  title: ReactNode
  links?: SidebarHeading[]
}
