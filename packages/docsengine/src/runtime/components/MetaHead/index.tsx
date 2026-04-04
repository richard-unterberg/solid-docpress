import type { DocsConfig } from '../../../types.js'
import { resolveDocsConfig } from '../../resolveDocsConfig.js'
import { FaviconLinks } from './FaviconLinks.js'
import { FontLinks } from './FontLinks.js'
import { ThemeBootstrap } from './ThemeBootstrap.js'

export const MetaHead = ({ docsConfig }: { docsConfig: DocsConfig }) => {
  const resolvedConfig = resolveDocsConfig(docsConfig)

  return (
    <>
      <ThemeBootstrap theme={resolvedConfig.theme} />
      <FaviconLinks head={resolvedConfig.head} />
      <FontLinks head={resolvedConfig.head} />
    </>
  )
}
