import type { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import UserSettingsSync from '@/components/UserSettingsSync'

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <UserSettingsSync />
      <Navbar />
      <div className="pt-16">{children}</div>
    </>
  )
}

export default PageLayout
