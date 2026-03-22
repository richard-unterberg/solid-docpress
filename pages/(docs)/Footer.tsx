import Bug from 'lucide-solid/icons/bug'
import Pencil from 'lucide-solid/icons/pencil'
import { usePageContext } from 'vike-solid/usePageContext'
import { t } from '@/lib/i18n/messages'

const DocsFooter = () => {
  const { locale } = usePageContext()

  return (
    <footer class="mb-8 mt-12 text-sm text-base-content/60">
      <div class="mb-16 flex items-center gap-2">
        <a href="edit" class="btn btn-sm btn-ghost border-vike-grey">
          <Pencil /> {t(locale, 'docs', 'edit')}
        </a>
        <a href="edit" class="btn btn-sm btn-ghost border-vike-grey">
          <Bug /> {t(locale, 'docs', 'reportIssue')}
        </a>
      </div>
      <a href="vike.dev" class="text-primary">
        Vike
      </a>
      &nbsp;|&nbsp;Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </footer>
  )
}

export default DocsFooter
