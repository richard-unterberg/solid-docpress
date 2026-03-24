export const USER_SETTINGS_STORAGE_KEY = 'vike-user-settings'

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null
}

export const readPersistedSettingsState = () => {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const rawValue = window.localStorage.getItem(USER_SETTINGS_STORAGE_KEY)
    if (!rawValue) {
      return null
    }

    const parsedValue = JSON.parse(rawValue) as unknown
    if (!isRecord(parsedValue)) {
      return null
    }

    const state = parsedValue.state
    return isRecord(state) ? state : null
  } catch {
    return null
  }
}
