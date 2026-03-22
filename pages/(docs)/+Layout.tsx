import cm from '@classmatejs/solid'
import { createMemo, JSXElement } from 'solid-js'
import { usePageContext } from 'vike-solid/usePageContext'
import LayoutComponent from '@/components/LayoutComponent'
import appConfig from '@/lib/config'
import { getDocPage } from '@/lib/docs/content'
import { getLogicalPathname } from '@/lib/i18n/routing'
import DocsFooter from '@/pages/(docs)/Footer'
import Sidebar from '@/pages/(docs)/Sidebar'
import TableOfContents from '@/pages/(docs)/TableOfContents'

const ProseContainer = cm.section`
  prose 
  prose-neutral
  max-w-none
  dark:prose-invert 
  prose-a:text-primary
  prose-code:bg-base-200!
  prose-pre:bg-base-200!
`

const DocsLayout = (props: { children: JSXElement }) => {
  const pageContext = usePageContext()
  const docSlug = createMemo(() => {
    const pathname = pageContext.urlPathnameLocalized ?? pageContext.urlPathname
    return getLogicalPathname(pathname).replace(/^\/+/, '')
  })
  const doc = createMemo(() => getDocPage(docSlug(), pageContext.locale))

  return (
    <>
      <div class="absolute w-full h-full top-0 left-0 overflow-hidden">
        <div class="w-500 h-300 absolute -top-70 -right-100 z-0">
          <img
            src={`${appConfig.publicAssets}decorators/dot.png`}
            alt=""
            width={400}
            height={400}
            class="w-full h-full object-fill absolute inset-0"
          />
        </div>
      </div>
      <LayoutComponent class="flex mx-auto gap-10 xl:gap-14">
        <div class="w-90 shrink-0 relative">
          <Sidebar />
        </div>
        <div class="pt-16 mt-10 relative">
          <ProseContainer class="min-w-0 flex-1 z-1 relative" data-doc-content>
            {props.children}
          </ProseContainer>
          <DocsFooter />
        </div>
        <TableOfContents headings={doc()?.headings ?? []} />
      </LayoutComponent>
    </>
  )
}

export default DocsLayout
