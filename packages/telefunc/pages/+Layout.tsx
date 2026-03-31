import type { ReactNode } from 'react'
import { UniversalMdxProvider } from '@unterberg/universal-mdx-mods'
import { usePageContext } from 'vike-react/usePageContext'
import Navbar from '@/app-components/Navbar'
import UserSettingsSync from '@/app-components/UserSettingsSync'
import { getTelefuncMdxRuntimeValue } from '@/lib/mdx/runtime'

const PageLayout = ({ children }: { children: ReactNode }) => {
  const { locale } = usePageContext()

  return (
    <UniversalMdxProvider value={getTelefuncMdxRuntimeValue(locale)}>
      <UserSettingsSync />
      <Navbar />
      <div className="pt-16">{children}</div>
    </UniversalMdxProvider>
  )
}

export default PageLayout
