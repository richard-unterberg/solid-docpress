import cm from '@classmatejs/react'

const StickyContent = cm.div`
  relative 
  h-[calc(100svh-14*var(--spacing))] 
  overflow-y-auto overflow-x-hidden
`

export default StickyContent
