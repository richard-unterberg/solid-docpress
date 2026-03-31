import type { UniversalMdxCodeBlockChoiceStore, UniversalMdxRuntimeValue } from '@unterberg/universal-mdx-mods'
import { localizeHref } from '@/lib/i18n/routing'
import { useUserSettingsStore } from '@/lib/settings-store'
import { readLegacyCodeBlockChoice } from '@/lib/settings-storage'

const telefuncCodeBlockChoiceStore: UniversalMdxCodeBlockChoiceStore = {
  subscribe: (listener) => useUserSettingsStore.subscribe(listener),
  getChoice: (choiceGroupName) => useUserSettingsStore.getState().codeBlockChoices[choiceGroupName] ?? null,
  setChoice: (choiceGroupName, choice) => useUserSettingsStore.getState().setCodeBlockChoice(choiceGroupName, choice),
  getLegacyChoice: readLegacyCodeBlockChoice,
}

export const getTelefuncMdxRuntimeValue = (locale: string): UniversalMdxRuntimeValue => {
  return {
    locale,
    localizeHref: (href) => localizeHref(href, locale),
    codeBlockChoices: telefuncCodeBlockChoiceStore,
  }
}
