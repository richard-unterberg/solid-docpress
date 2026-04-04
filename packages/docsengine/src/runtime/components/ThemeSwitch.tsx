import { Moon, Sun } from 'lucide-react'
import { useDocsUserSettingsStore } from '../store/settings-store.js'

export const ThemeSwitch = () => {
  const themePreference = useDocsUserSettingsStore((state) => state.themePreference)
  const setThemePreference = useDocsUserSettingsStore((state) => state.setThemePreference)

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setThemePreference(themePreference === 'light' ? 'dark' : 'light')}
      className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-base-muted-light bg-base-200"
    >
      <Sun className="h-4 w-4 dark:hidden" />
      <Moon className="hidden h-4 w-4 dark:block" />
    </button>
  )
}
