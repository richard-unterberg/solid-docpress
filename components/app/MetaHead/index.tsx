import Favicon from '@/app-components/MetaHead/Favicon'
import MetaHeadFonts from '@/app-components/MetaHead/Fonts'
import ThemeBootstrap from '@/app-components/MetaHead/ThemeBootstrap'

const MetaHead = () => {
  return (
    <>
      <ThemeBootstrap />
      <Favicon />
      <MetaHeadFonts />
    </>
  )
}

export default MetaHead
