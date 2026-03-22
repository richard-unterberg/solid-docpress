import type { ReactNode } from 'react'
import Navbar from '@/components/Navbar'

const PageLayout = (props: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="pt-16">{props.children}</div>
    </>
  )
}

export default PageLayout
