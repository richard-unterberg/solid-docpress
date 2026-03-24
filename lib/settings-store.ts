import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { DEFAULT_LOCALE, isLocale, type Locale } from '@/lib/i18n/config'
import { readPersistedSettingsState, USER_SETTINGS_STORAGE_KEY } from '@/lib/settings-storage'
import { DEFAULT_THEME_PREFERENCE, type ThemePreference } from '@/lib/theme'

type UserSettingsState = {
  themePreference: ThemePreference
  localePreference: Locale
  setThemePreference: (themePreference: ThemePreference) => void
  setLocalePreference: (localePreference: Locale) => void
}

const initialSettingsState = {
  themePreference: DEFAULT_THEME_PREFERENCE,
  localePreference: DEFAULT_LOCALE,
} satisfies Pick<UserSettingsState, 'themePreference' | 'localePreference'>

export const useUserSettingsStore = create<UserSettingsState>()(
  persist(
    (set) => ({
      ...initialSettingsState,
      setThemePreference: (themePreference) => set({ themePreference }),
      setLocalePreference: (localePreference) => set({ localePreference }),
    }),
    {
      name: USER_SETTINGS_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: ({ themePreference, localePreference }) => ({
        themePreference,
        localePreference,
      }),
    },
  ),
)

export const getStoredLocalePreference = () => {
  const persistedState = readPersistedSettingsState()
  const localePreference = persistedState?.localePreference
  return typeof localePreference === 'string' && isLocale(localePreference) ? localePreference : null
}
