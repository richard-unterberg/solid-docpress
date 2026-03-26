import MenuTab from '@/components/Sidebar/MenuTab'

const Sidebar = () => {
  return (
    <div className="-ml-4 sticky top-16">
      <div className="absolute h-full w-px right-0 top-0 bg-linear-to-t to-base-content/15  via-base-content/15  pointer-events-none z-1"></div>
      <div className="pr-4 h-[calc(100svh-16*var(--spacing))] overflow-y-scroll overflow-x-hidden  relative z-10">
        <MenuTab />
      </div>
    </div>
  )
}

export default Sidebar
