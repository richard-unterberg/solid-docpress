import type { ComponentType } from 'react'
import { useData } from 'vike-react/useData'
import { usePageContext } from 'vike-react/usePageContext'
import { renderInlineMarkdown } from '../components/renderInlineMarkdown.js'
import { UniversalMdxProvider } from '../components/UniversalMdxProvider.js'
import type { DocPageData, DocsConfig } from '../types.js'
import { LayoutComponent, ProseContainer } from './client.js'
import { DocsPagination } from './components/DocsPagination.js'
import { DocsFooter } from './components/Footer.js'
import { Sidebar } from './components/Sidebar.js'
import { TableOfContents } from './components/TableOfContents.js'
import { getMdxRuntimeValue } from './getMdxRuntimeValue.js'
import { resolveDocsConfig } from './resolveDocsConfig.js'

interface DocsPageProps {
  Content: ComponentType
  docsConfig: DocsConfig
}

export const DocsPage = ({ Content, docsConfig }: DocsPageProps) => {
  const pageContext = usePageContext()
  const { activeSectionId, page, sidebarSections, headings, footer, previousPage, nextPage } = useData() as DocPageData
  const resolvedConfig = resolveDocsConfig(docsConfig)

  return (
    <UniversalMdxProvider
      value={getMdxRuntimeValue({
        docsConfig: docsConfig,
        currentPathname: pageContext.urlPathname,
      })}
    >
      <div className="absolute top-0 left-0 w-full h-[60svh] bg-radial-[at_65%_-85%] from-primary-muted-light to-65%" />

      <LayoutComponent>
        <div className="lg:flex lg:gap-10 xl:gap-14">
          <Sidebar sections={sidebarSections} activeSectionId={activeSectionId} currentHref={page.href} />

          <main className="mt-10 min-w-0 flex-1 basis-auto shrink">
            <ProseContainer data-doc-content="">
              <h1 className="scroll-mt-24">{renderInlineMarkdown(page.title)}</h1>
              <Content />
            </ProseContainer>
            {footer.pagination ? <DocsPagination previousPage={previousPage} nextPage={nextPage} /> : null}
            <DocsFooter brand={resolvedConfig.brand} />
          </main>
          <TableOfContents headings={headings} partners={resolvedConfig.partners} />
        </div>
      </LayoutComponent>
    </UniversalMdxProvider>
  )
}
