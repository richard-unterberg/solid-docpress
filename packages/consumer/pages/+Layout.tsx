import { AppLayout } from '@unterberg/docsengine/client'
import type { ReactNode } from 'react'
import docs from './+docs'

const Layout = ({ children }: { children: ReactNode }) => {
  return <AppLayout docsConfig={docs}>{children}</AppLayout>
}

export default Layout
