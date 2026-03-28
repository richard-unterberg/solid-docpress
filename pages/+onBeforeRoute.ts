import { redirect } from 'vike/abort'
import { modifyUrl } from 'vike/modifyUrl'
import type { PageContext } from 'vike/types'
import { hasDocPageForLocale, hasDocSlug } from '@/lib/docs/content'
import { matchDocPath } from '@/lib/docs/systemConfig'
import { DEFAULT_LOCALE } from '@/lib/i18n/config'
import { hasLocalePrefix, localizeHref, stripLocaleFromPathname } from '@/lib/i18n/routing'
import { getStoredLocalePreference } from '@/lib/settings-store'

const getDocSlugFromPathname = (pathname: string) => {
  const slug = matchDocPath(pathname)
  return slug !== null && hasDocSlug(slug) ? slug : null
}

const onBeforeRoute = (pageContext: PageContext) => {
  const urlPathnameLocalized = pageContext.urlParsed.pathname
  const urlHasExplicitLocale = hasLocalePrefix(urlPathnameLocalized)
  const { locale, pathname } = stripLocaleFromPathname(urlPathnameLocalized)
  const docSlug = getDocSlugFromPathname(pathname)
  const localePreference = !urlHasExplicitLocale ? getStoredLocalePreference() : null

  if (urlHasExplicitLocale && locale !== DEFAULT_LOCALE && docSlug && !hasDocPageForLocale(docSlug, locale)) {
    throw redirect(modifyUrl(pageContext.urlOriginal, { pathname: localizeHref(pathname, DEFAULT_LOCALE) }))
  }

  if (
    typeof window !== 'undefined' &&
    !urlHasExplicitLocale &&
    localePreference &&
    localePreference !== DEFAULT_LOCALE &&
    (!docSlug || hasDocPageForLocale(docSlug, localePreference))
  ) {
    throw redirect(modifyUrl(pageContext.urlOriginal, { pathname: localizeHref(pathname, localePreference) }))
  }

  return {
    pageContext: {
      // Keep the URL as the render-time source of truth. The persisted locale
      // is only a redirect hint for non-prefixed URLs.
      locale,
      urlPathnameLocalized,
      urlLogical: modifyUrl(pageContext.urlOriginal, { pathname }),
    },
  }
}
export default onBeforeRoute
