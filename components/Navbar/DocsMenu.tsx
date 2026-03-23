import cm from '@classmatejs/react'
import { BookText, Cpu, Megaphone } from 'lucide-react'

const MenuItem = cm.a.variants<{ $active?: boolean }>({
  base: 'btn btn-sm btn-primary dark:text-primary-content px-3',
  variants: {
    $active: {
      true: 'bg-primary text-primary-content',
      false: 'btn-soft',
    },
  },
  defaultVariants: {
    $active: false,
  },
})

const DocsMenu = () => {
  return (
    <ul className="flex items-center font-semibold gap-2">
      <li tabIndex={0}>
        <MenuItem>
          <BookText className="w-4 h-4" />
          Docs
        </MenuItem>
      </li>
      <li tabIndex={0}>
        <MenuItem>
          <Cpu className="w-4 h-4" />
          API
        </MenuItem>
      </li>
      <li tabIndex={0}>
        <MenuItem>
          <Megaphone className="w-4 h-4" />
          Blog
        </MenuItem>
      </li>
    </ul>
  )
}

export default DocsMenu
