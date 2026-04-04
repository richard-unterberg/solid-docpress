import type { DocsThemeConfig, ThemePreference } from '../types.js'

export const DEFAULT_THEME_PREFERENCE: ThemePreference = 'light'

const getDataTheme = (themePreference: ThemePreference, themeConfig: Required<DocsThemeConfig>) => {
  return themePreference === 'dark' ? themeConfig.dark : themeConfig.light
}

export const applyThemePreference = (themePreference: ThemePreference, themeConfig: Required<DocsThemeConfig>) => {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.setAttribute('data-theme', getDataTheme(themePreference, themeConfig))
}
