import type { ReactNode } from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import { getHeadingTitleFromHref } from '@/lib/headings'
import { getLogicalPathname, localizeHref } from '@/lib/i18n/routing'

export const Link = (props: { href: string; children?: ReactNode; doNotInferSectionTitle?: boolean }) => {
  const { locale, urlPathname } = usePageContext()
  const href = localizeHref(props.href, locale)
  const currentPathname = getLogicalPathname(urlPathname)
  const targetPathname = getLogicalPathname(href)
  const isActive =
    currentPathname === '/' ? currentPathname === targetPathname : currentPathname.startsWith(targetPathname)
  const label =
    props.children ??
    (props.doNotInferSectionTitle
      ? props.href
      : (getHeadingTitleFromHref(props.href, locale) ?? props.href))

  return (
    <a href={href} className={isActive ? 'is-active' : undefined}>
      {label}
    </a>
  )
}
