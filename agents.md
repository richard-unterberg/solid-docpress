# Zustand Settings Refactor Plan

## Goal

Reduce settings-related code by consolidating user preferences into a single Zustand store with `persist`, while keeping Vike's routing/i18n model intact.

## Constraints

- `locale` remains URL-driven and is still resolved in `pages/+onBeforeRoute.ts`.
- Theme must keep its early "quick-read" bootstrap in `pages/+Head.tsx` to avoid a flash of the wrong theme.
- Theme and locale preference should live in the same persisted payload, under different state keys.
- The persisted locale is only a preference hint and must never override an explicit locale segment in the URL.

## Target Architecture

- Create one persisted Zustand store for user settings:
  - `themePreference`
  - `localePreference`
- Persist both values under one localStorage key such as `vike-user-settings`.
- Remove the React theme context/provider and read/write theme directly through Zustand.
- Keep `pageContext.locale` as the render-time source of truth for translations and localized links.
- Use the persisted `localePreference` only when the current URL has no locale prefix.

## Implementation Steps

### 1. Shared settings storage and store

- Add a small shared settings-storage helper for:
  - storage key
  - persisted payload parsing
- Add a Zustand store with `persist` for theme and locale preference.

### 2. Theme flow

- Keep theme utilities in `lib/theme.ts` focused on:
  - theme types/defaults
  - `getDataTheme()`
  - `applyThemePreference()`
  - bootstrap script generation
- Update the bootstrap script so it reads the persisted Zustand payload directly.
- Replace `ThemeProvider` with a thin app-wide sync component that:
  - reads `themePreference` from Zustand
  - applies `data-theme` whenever the setting changes

### 3. Locale preference flow

- Update the language switcher to persist the selected locale before navigation.
- Keep full reload behavior after locale changes.
- Update `pages/+onBeforeRoute.ts` to:
  - derive locale from the URL first
  - detect whether the URL already has an explicit locale prefix
  - fall back to persisted `localePreference` only for non-prefixed URLs
  - redirect non-prefixed URLs to the preferred localized URL when needed

### 4. Cleanup

- Remove `themePreference` from `pageContext` and `passToClient` if no longer needed.
- Remove the old theme-context/localStorage code path.
- Keep existing route structure and localized MDX behavior unchanged.

## Verification

- `pnpm typecheck`
- `pnpm build`
- Manual checks:
  - theme is applied immediately on first paint
  - theme toggle updates UI and persistence
  - language switch persists user choice
  - explicit `/zh/...` URLs stay authoritative
  - non-prefixed URLs can redirect to the stored locale preference
