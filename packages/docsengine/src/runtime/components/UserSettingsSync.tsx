import { useEffect } from 'react'
import type { DocsConfig } from '../../types.js'
import { useDocsUserSettingsStore } from '../store/settings-store.js'
import { applyThemePreference } from '../theme.js'

export const UserSettingsSync = ({ theme }: { theme?: DocsConfig['theme'] }) => {
  const themePreference = useDocsUserSettingsStore((state) => state.themePreference)

  useEffect(() => {
    applyThemePreference(themePreference, {
      light: theme?.light ?? 'consumer-light',
      dark: theme?.dark ?? 'consumer-dark',
      defaultPreference: theme?.defaultPreference ?? 'light',
    })
  }, [theme?.dark, theme?.light, theme?.defaultPreference, themePreference])

  return null
}
