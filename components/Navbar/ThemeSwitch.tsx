import { cmMerge } from '@classmatejs/react'
import { Moon, Sun } from 'lucide-react'
import { useThemePreference } from '@/components/ThemeProvider'

const ThemeSwitch = () => {
  const { themePreference, setThemePreference } = useThemePreference()

  return (
    <label className="cursor-pointer rounded-full bg-base-200 w-8 h-8 border border-base-content/10 relative flex justify-center items-center">
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={() => setThemePreference(themePreference === 'light' ? 'dark' : 'light')}
        className="absolute inset-0"
      />
      <Sun className={cmMerge('h-4 w-4 dark:hidden')} />
      <Moon className={cmMerge('hidden h-4 w-4 dark:block')} />
    </label>
  )
}

export default ThemeSwitch
