import { cmMerge } from '@classmatejs/solid'
import type { LucideIcon } from 'lucide-solid'
import { createMemo, For, type JSXElement } from 'solid-js'
import { getLogicalPathname } from '@/lib/i18n/routing'

export type SidebarHeading = {
  title: JSXElement
  href: string
}

export type SidebarCategory = {
  title: JSXElement
  children?: SidebarHeading[]
}

export type SidebarGroup = {
  icon?: LucideIcon
  title: JSXElement
  links?: (SidebarHeading | SidebarCategory)[]
}

const isCategory = (item: SidebarHeading | SidebarCategory): item is SidebarCategory => 'children' in item

const isActiveHref = (currentPathname: string, href: string) => {
  const currentLogicalPathname = getLogicalPathname(currentPathname)
  const hrefLogicalPathname = getLogicalPathname(href)
  return hrefLogicalPathname === '/'
    ? currentLogicalPathname === hrefLogicalPathname
    : currentLogicalPathname.startsWith(hrefLogicalPathname)
}

const hasActiveChild = (items: (SidebarHeading | SidebarCategory)[], currentPathname: string): boolean => {
  return items.some((item) =>
    isCategory(item)
      ? Boolean(item.children) && hasActiveChild(item.children as SidebarHeading[], currentPathname)
      : isActiveHref(currentPathname, item.href),
  )
}

export const renderInlineMarkdown = (title: JSXElement): JSXElement => {
  if (typeof title !== 'string') return title

  return title.split(/(`[^`]+`)/g).map((part) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code>{part.slice(1, -1)}</code>
    }

    return part
  })
}

const SidebarLink = (props: SidebarHeading & { currentPathname: string }) => {
  return (
    <li>
      <a
        href={props.href}
        class={cmMerge(
          'text-vike-grey-300 justify-start',
          isActiveHref(props.currentPathname, props.href) && 'menu-active',
        )}
      >
        {renderInlineMarkdown(props.title)}
      </a>
    </li>
  )
}

const SidebarCategoryComponent = (props: SidebarCategory & { currentPathname: string }) => {
  const isOpen = createMemo(() => (props.children ? hasActiveChild(props.children, props.currentPathname) : false))

  return (
    <li>
      <details open={isOpen()}>
        <summary class="text-vike-grey-200">{renderInlineMarkdown(props.title)}</summary>
        <ul>
          <For each={props.children}>
            {(item) => <SidebarItem item={item} currentPathname={props.currentPathname} />}
          </For>
        </ul>
      </details>
    </li>
  )
}

const SidebarItem = (props: { item: SidebarHeading | SidebarCategory; currentPathname: string }) => {
  return isCategory(props.item) ? (
    <SidebarCategoryComponent {...props.item} currentPathname={props.currentPathname} />
  ) : (
    <SidebarLink {...props.item} currentPathname={props.currentPathname} />
  )
}

const SidebarGroupComponent = (props: SidebarGroup & { currentPathname: string; showSeparator: boolean }) => {
  const Icon = props.icon

  return (
    <li class="pb-4">
      <details open>
        <summary class="text-vike-grey-100">
          {Icon && <Icon class="inline w-3 h-3" />}
          <span class="text-base-content font-semibold">{renderInlineMarkdown(props.title)}</span>
        </summary>
        <ul>
          <For each={props.links}>{(item) => <SidebarItem item={item} currentPathname={props.currentPathname} />}</For>
        </ul>
      </details>
      {props.showSeparator && (
        <span class="pointer-events-none absolute -bottom-1 border-b border-base-200 block rounded-none w-full mx-auto mb-3"></span>
      )}
    </li>
  )
}

const SidebarNavigation = (props: { groups: SidebarGroup[]; currentPathname: string }) => {
  return (
    <ul class="menu w-full px-0 py-5 li:last-child:border-0">
      <For each={props.groups}>
        {(group, index) => (
          <SidebarGroupComponent
            {...group}
            currentPathname={props.currentPathname}
            showSeparator={index() !== props.groups.length - 1}
          />
        )}
      </For>
    </ul>
  )
}

export default SidebarNavigation
