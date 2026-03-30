import { cmMerge } from '@classmatejs/react'
import { ExternalLink } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import { isExternalHref, localizeHref } from '@/lib/i18n/routing'

type AnchorProps = ComponentPropsWithoutRef<'a'>

const getLocalizedMdxHref = (href: AnchorProps['href'], locale: string | undefined) => {
  if (typeof href !== 'string' || !href.startsWith('/')) {
    return href
  }
  return localizeHref(href, locale)
}

const Link = ({ href, children, className, ...props }: AnchorProps) => {
  const { locale } = usePageContext()
  const isExternal = isExternalHref(href ?? '')

  return (
    <a
      href={getLocalizedMdxHref(href, locale)}
      className={cmMerge(className, 'inline-flex gap-1 items-center')}
      {...props}
    >
      {children}
      {isExternal && <ExternalLink className="w-3 h-3" />}
    </a>
  )
}

export default Link
