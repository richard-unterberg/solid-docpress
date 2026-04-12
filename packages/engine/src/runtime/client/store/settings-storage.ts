export const USER_SETTINGS_STORAGE_KEY = 'nivel-user-settings'
const LEGACY_CODE_BLOCK_CHOICE_STORAGE_KEY_PREFIX = 'vike-docpress:choice:'

export const readLegacyCodeBlockChoice = (choiceGroupName: string) => {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    const value = window.localStorage.getItem(`${LEGACY_CODE_BLOCK_CHOICE_STORAGE_KEY_PREFIX}${choiceGroupName}`)
    return value || null
  } catch {
    return null
  }
}
