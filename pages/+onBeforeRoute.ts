import { redirect } from 'vike/abort'
import { modifyUrl } from 'vike/modifyUrl'
import type { PageContext } from 'vike/types'
import { DEFAULT_LOCALE } from '@/lib/i18n/config'
import { hasLocalePrefix, localizeHref, stripLocaleFromPathname } from '@/lib/i18n/routing'
import { getStoredLocalePreference } from '@/lib/settings-store'

const onBeforeRoute = (pageContext: PageContext) => {
  const urlPathnameLocalized = pageContext.urlParsed.pathname
  const urlHasExplicitLocale = hasLocalePrefix(urlPathnameLocalized)
  const { locale, pathname } = stripLocaleFromPathname(urlPathnameLocalized)
  const localePreference = !urlHasExplicitLocale ? getStoredLocalePreference() : null

  if (
    typeof window !== 'undefined' &&
    !urlHasExplicitLocale &&
    localePreference &&
    localePreference !== DEFAULT_LOCALE
  ) {
    throw redirect(modifyUrl(pageContext.urlOriginal, { pathname: localizeHref(pathname, localePreference) }))
  }

  return {
    pageContext: {
      locale: localePreference ?? locale,
      urlPathnameLocalized,
      urlLogical: modifyUrl(pageContext.urlOriginal, { pathname }),
    },
  }
}
export default onBeforeRoute
