import { useEffect } from 'react'
import { useUserSettingsStore } from '@/lib/settings-store'
import { applyThemePreference } from '@/lib/theme'

const UserSettingsSync = () => {
  const themePreference = useUserSettingsStore((state) => state.themePreference)

  useEffect(() => {
    applyThemePreference(themePreference)
  }, [themePreference])

  return null
}

export default UserSettingsSync
