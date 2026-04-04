import type { DocsThemeConfig } from '../../../types.js'
import { USER_SETTINGS_STORAGE_KEY } from '../../store/settings-storage.js'
import { DEFAULT_THEME_PREFERENCE } from '../../theme.js'

const getThemeBootstrapScript = (theme: Required<DocsThemeConfig>) => {
  return `(() => {
  const storageKey = ${JSON.stringify(USER_SETTINGS_STORAGE_KEY)};
  const themes = {
    light: ${JSON.stringify(theme.light)},
    dark: ${JSON.stringify(theme.dark)}
  };

  try {
    const persistedValue = window.localStorage.getItem(storageKey);
    const parsedValue = persistedValue ? JSON.parse(persistedValue) : null;
    const storedThemePreference = parsedValue?.state?.themePreference;
    const themePreference =
      storedThemePreference === 'light' || storedThemePreference === 'dark'
        ? storedThemePreference
        : ${JSON.stringify(DEFAULT_THEME_PREFERENCE)};

    document.documentElement.setAttribute('data-theme', themes[themePreference]);
  } catch {
    document.documentElement.setAttribute('data-theme', themes[${JSON.stringify(DEFAULT_THEME_PREFERENCE)}]);
  }
})();`
}

export const ThemeBootstrap = ({ theme }: { theme: Required<DocsThemeConfig> }) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: getThemeBootstrapScript(theme),
      }}
    />
  )
}
