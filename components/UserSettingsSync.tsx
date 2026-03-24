import { useEffect } from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import { hasLocalePrefix } from '@/lib/i18n/routing'
import { useUserSettingsStore } from '@/lib/settings-store'
import { applyThemePreference } from '@/lib/theme'

const UserSettingsSync = () => {
  const { locale, urlPathnameLocalized, urlPathname } = usePageContext()
  const themePreference = useUserSettingsStore((state) => state.themePreference)
  const setLocalePreference = useUserSettingsStore((state) => state.setLocalePreference)
  const currentLocalizedPathname = urlPathnameLocalized ?? urlPathname

  useEffect(() => {
    applyThemePreference(themePreference)
  }, [themePreference])

  useEffect(() => {
    if (!hasLocalePrefix(currentLocalizedPathname)) {
      return
    }
    setLocalePreference(locale)
  }, [currentLocalizedPathname, locale, setLocalePreference])

  return null
}

export default UserSettingsSync
