import { redirect } from 'vike/abort'
import { modifyUrl } from 'vike/modifyUrl'
import type { PageContext } from 'vike/types'
import { hasDocPageForLocale, hasDocSlug } from '@/lib/docs/contentManifest'
import { resolveHeadingByHrefPathname } from '@/lib/docs/headings'
import { getDocPath, matchDocPath } from '@/lib/docs/systemConfig'
import { DEFAULT_LOCALE } from '@/lib/i18n/config'
import { hasLocalePrefix, localizeHref, stripLocaleFromPathname } from '@/lib/i18n/routing'
import { getStoredLocalePreference } from '@/lib/store/settings-store'

const isPageContextRequest = (url: string) => {
  return url.split('?')[0]?.endsWith('.pageContext.json') ?? false
}

const getCanonicalDocPathname = (pathname: string) => {
  const resolved = resolveHeadingByHrefPathname(pathname)
  return resolved ? getDocPath(resolved.docPath) : pathname
}

const getDocSlugFromPathname = (pathname: string) => {
  const slug = matchDocPath(pathname)
  return slug !== null && hasDocSlug(slug) ? slug : null
}

const onBeforeRoute = (pageContext: PageContext) => {
  const pageContextRequest = isPageContextRequest(pageContext.urlOriginal)
  const urlPathnameLocalized = pageContext.urlParsed.pathname
  const urlHasExplicitLocale = hasLocalePrefix(urlPathnameLocalized)
  const { locale, pathname } = stripLocaleFromPathname(urlPathnameLocalized)
  const pathnameCanonical = getCanonicalDocPathname(pathname)
  const docSlug = getDocSlugFromPathname(pathnameCanonical)
  const localePreference = !urlHasExplicitLocale ? getStoredLocalePreference() : null

  if (
    !pageContextRequest &&
    urlHasExplicitLocale &&
    locale !== DEFAULT_LOCALE &&
    docSlug &&
    !hasDocPageForLocale(docSlug, locale)
  ) {
    throw redirect(modifyUrl(pageContext.urlOriginal, { pathname: localizeHref(pathnameCanonical, DEFAULT_LOCALE) }))
  }

  if (
    !pageContextRequest &&
    typeof window !== 'undefined' &&
    !urlHasExplicitLocale &&
    localePreference &&
    localePreference !== DEFAULT_LOCALE &&
    (!docSlug || hasDocPageForLocale(docSlug, localePreference))
  ) {
    throw redirect(modifyUrl(pageContext.urlOriginal, { pathname: localizeHref(pathnameCanonical, localePreference) }))
  }

  if (!pageContextRequest && pathnameCanonical !== pathname) {
    throw redirect(modifyUrl(pageContext.urlOriginal, { pathname: localizeHref(pathnameCanonical, locale) }))
  }

  return {
    pageContext: {
      // Keep the URL as the render-time source of truth. The persisted locale
      // is only a redirect hint for non-prefixed URLs.
      locale,
      urlPathnameLocalized,
      urlLogical: modifyUrl(pageContext.urlOriginal, { pathname: pathnameCanonical }),
    },
  }
}
export default onBeforeRoute
