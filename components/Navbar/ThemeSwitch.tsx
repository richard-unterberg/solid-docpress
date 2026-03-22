import { cmMerge } from '@classmatejs/react'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ThemeSwitch = () => {
  const [isLight, setIsLight] = useState(false)

  const updateTheme = (isLight: boolean) => {
    const html = document.documentElement
    html.setAttribute('data-theme', isLight ? 'vike-light' : 'vike-dark')
    setIsLight(isLight)
  }

  useEffect(() => {
    setIsLight(document.documentElement.getAttribute('data-theme') === 'vike-light')
  }, [])

  return (
    <label className="cursor-pointer swap swap-rotate rounded-full bg-base-100 p-1.5 border border-base-100">
      <input
        type="checkbox"
        checked={isLight}
        aria-label="Toggle light theme"
        onChange={(event) => updateTheme(event.currentTarget.checked)}
      />
      <Sun className={cmMerge('h-4 w-4', 'swap-on')} />
      <Moon className={cmMerge('h-4 w-4', 'swap-off')} />
    </label>
  )
}

export default ThemeSwitch
