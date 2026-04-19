import { cmMerge } from '@classmatejs/react'
import { useEffect, useMemo, useState } from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import { getDocsIconMapKey } from '../../../../docs/iconKeys.js'
import type { ResolvedDocsSection } from '../../../../docs/types.js'
import { withSiteBaseUrl } from '../../../../shared/assets.js'
import { renderInlineMarkdown } from '../../../../shared/renderInlineMarkdown.js'
import { useDocsGlobalContext } from '../../docsGlobalContext.js'
import { LayoutComponent } from '../LayoutComponent.js'

const findActiveItemId = (section: ResolvedDocsSection | undefined, currentHref: string): string | undefined => {
  if (!section) {
    return undefined
  }

  for (const item of section.items) {
    if (item.href === currentHref) {
      return item.id
    }

    if (item.kind === 'group') {
      for (const child of item.items) {
        if (child.href === currentHref) {
          return child.id
        }
      }
    }
  }

  return undefined
}

export const MegaMenu = ({
  isActive,
  onOpen,
  onClose,
  sections,
  activeSectionId,
  hoveredSectionId,
  isLandingPage,
}: {
  isActive: boolean
  onOpen: (sectionId?: string) => void
  onClose: () => void
  sections: ResolvedDocsSection[]
  activeSectionId?: string
  hoveredSectionId?: string
  isLandingPage: boolean
}) => {
  const docs = useDocsGlobalContext()
  const { urlPathname } = usePageContext()
  const visibleSectionId = hoveredSectionId ?? activeSectionId ?? sections[0]?.id
  const [visibleSectionElement, setVisibleSectionElement] = useState<HTMLDivElement | null>(null)
  const [contentHeight, setContentHeight] = useState(0)

  const activeItemId = useMemo(
    () =>
      findActiveItemId(
        sections.find((section) => section.id === visibleSectionId),
        urlPathname,
      ),
    [sections, visibleSectionId, urlPathname],
  )

  useEffect(() => {
    if (!isActive || !visibleSectionId || visibleSectionElement === null) {
      return
    }

    const updateContentHeight = () => {
      setContentHeight(visibleSectionElement.offsetHeight)
    }

    updateContentHeight()

    if (typeof ResizeObserver === 'undefined') {
      return
    }

    const resizeObserver = new ResizeObserver(() => {
      updateContentHeight()
    })

    resizeObserver.observe(visibleSectionElement)

    return () => {
      resizeObserver.disconnect()
    }
  }, [visibleSectionElement, visibleSectionId, isActive])

  return (
    <div
      className={cmMerge('fixed top-14 left-0 z-3 w-full', isActive ? 'pointer-events-auto' : 'pointer-events-none')}
      onPointerEnter={() => onOpen(visibleSectionId)}
      onPointerLeave={onClose}
    >
      <div
        className={cmMerge(
          isActive ? 'opacity-100' : 'opacity-0',
          'pointer-events-none absolute top-0 left-0 h-svh w-full bg-linear-to-t from-base-100/60 to-base-100 transition-opacity duration-200 backdrop-blur-md',
        )}
      />
      <div
        className={cmMerge(
          'relative z-4 overflow-hidden transition-[height] bg-base-100 duration-300 ease-out',
          !isLandingPage && isActive ? '' : 'border-b border-base-muted-light',
        )}
        // biome-ignore lint/nursery/noInlineStyles: needed here
        style={{ height: isActive ? contentHeight : 0 }}
      >
        <LayoutComponent $size="sm">
          <div
            className={cmMerge(
              isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0',
              'relative z-4 transition-all duration-300',
            )}
          >
            {sections.map((section) => (
              <div
                key={section.id}
                ref={section.id === visibleSectionId ? setVisibleSectionElement : undefined}
                className={cmMerge(
                  section.id === visibleSectionId ? 'opacity-100' : 'opacity-0 pointer-events-none',
                  'transition-all absolute w-full duration-300',
                )}
              >
                {section.items.length > 0 && (
                  <ul className="mt-2 flex ">
                    {section.items.map((child) => {
                      if (child.showInNav === false) {
                        return null
                      }

                      const ChildIcon = docs.docsIconMap[getDocsIconMapKey(child.kind, child.id)]

                      return (
                        <li key={child.id} className="flex-1 py-3 mb-6 px-4">
                          {child.href ? (
                            <a
                              className={cmMerge(
                                'mb-4 flex items-center gap-2 text-lg font-semibold tracking-tight',
                                activeItemId === child.id && 'text-primary!',
                              )}
                              href={withSiteBaseUrl(child.href)}
                            >
                              {ChildIcon ? <ChildIcon className="size-4 shrink-0" aria-hidden="true" /> : null}
                              <span>{child.title}</span>
                            </a>
                          ) : (
                            <span className="mb-4 flex items-center gap-2 text-lg font-semibold tracking-tight">
                              {ChildIcon ? <ChildIcon className="size-4 shrink-0" aria-hidden="true" /> : null}
                              <span>{child.title}</span>
                            </span>
                          )}
                          {child.kind === 'group' && child.items.length > 0 && (
                            <ul className="menu border-l border-base-muted-light py-0 w-full">
                              {child.items.map((subChild) => {
                                const SubChildIcon = docs.docsIconMap[getDocsIconMapKey(subChild.kind, subChild.id)]

                                return (
                                  <li key={subChild.id}>
                                    {subChild.href ? (
                                      <a
                                        className={cmMerge(
                                          'text-base-muted hover:text-base-content',
                                          activeItemId === subChild.id && 'text-primary! font-semibold',
                                        )}
                                        href={withSiteBaseUrl(subChild.href)}
                                        onClick={onClose}
                                      >
                                        <span className="flex items-center gap-2">
                                          {SubChildIcon ? (
                                            <SubChildIcon className="size-4 shrink-0" aria-hidden="true" />
                                          ) : null}
                                          <span>{renderInlineMarkdown(subChild.title)}</span>
                                        </span>
                                      </a>
                                    ) : (
                                      <span className="flex items-center gap-2">
                                        {SubChildIcon ? (
                                          <SubChildIcon className="size-4 shrink-0" aria-hidden="true" />
                                        ) : null}
                                        <span>{renderInlineMarkdown(subChild.title)}</span>
                                      </span>
                                    )}
                                  </li>
                                )
                              })}
                            </ul>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </LayoutComponent>
      </div>
    </div>
  )
}
