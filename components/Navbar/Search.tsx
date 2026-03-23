import { cmMerge } from '@classmatejs/react'
import { Search as SearchIcon } from 'lucide-react'
import { useState } from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import { t } from '@/lib/i18n/messages'

const Search = () => {
  const { locale } = usePageContext()
  const [isSearchHovered, setIsSearchHovered] = useState(false)

  return (
    <div
      className={cmMerge('relative w-50 text-right overflow-hidden ')}
      onMouseEnter={() => setIsSearchHovered(true)}
      onMouseLeave={() => setIsSearchHovered(false)}
    >
      <button className="absolute z-2 inset-0 cursor-pointer " />
      <label className={cmMerge('input input-sm', isSearchHovered ? 'border-secondary' : '')}>
        <span className="floating-label">
          <SearchIcon className={cmMerge('w-4 h-4', isSearchHovered ? 'text-secondary' : '')} />
        </span>
        <input
          type="text"
          placeholder={t(locale, 'header', 'searchPlaceholder')}
          className={cmMerge('w-fit', isSearchHovered && 'placeholder:text-secondary')}
        />
      </label>
    </div>
  )
}

export default Search
