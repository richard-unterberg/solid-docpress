import cm from '@classmatejs/solid'
import ListTree from 'lucide-solid/icons/list-tree'
import { createEffect, createMemo, createSignal, For, onCleanup, onMount, Show } from 'solid-js'
import { usePageContext } from 'vike-solid/usePageContext'
import { createHeadingSlugger, type DocHeading, normalizeHeadingTitle } from '@/lib/docs/headings'
import { t } from '@/lib/i18n/messages'

const TocLink = cm.a<{ $isActive?: boolean; $isNested?: boolean }>`
  block
  border-l
  border-base-300
  py-1.5
  text-sm
  text-base-content/65
  transition-colors
  hover:border-primary/40
  hover:text-base-content
  ${(props) => (props.$isNested ? 'pl-6' : 'pl-4')}
  ${(props) => (props.$isActive ? 'border-primary text-base-content font-medium' : '')}
`

const getCurrentHash = () => {
  try {
    return decodeURIComponent(window.location.hash)
  } catch {
    return window.location.hash
  }
}

const getHeadingElements = () => {
  const root = document.querySelector('[data-doc-content]')
  if (!(root instanceof HTMLElement)) return []

  return Array.from(root.querySelectorAll('h2, h3, h4')).filter(
    (element): element is HTMLHeadingElement => element instanceof HTMLHeadingElement,
  )
}

const TableOfContents = (props: { headings: DocHeading[] }) => {
  const pageContext = usePageContext()
  const [activeHeadingId, setActiveHeadingId] = createSignal('')
  const [domHeadings, setDomHeadings] = createSignal<DocHeading[]>(props.headings)
  const headings = createMemo(() => (domHeadings().length > 0 ? domHeadings() : props.headings))
  const hasHeadings = createMemo(() => headings().length > 0)

  const syncHeadingsFromDom = () => {
    const root = document.querySelector('[data-doc-content]')
    if (!(root instanceof HTMLElement)) {
      return
    }

    const slugify = createHeadingSlugger()
    const nextHeadings = Array.from(root.querySelectorAll('h2, h3, h4'))
      .map((element) => {
        const title = normalizeHeadingTitle(element.textContent ?? '')
        if (!title) return null

        const id = element.id || slugify(title)
        if (!element.id) {
          element.id = id
        }

        return {
          depth: Number(element.tagName.slice(1)),
          id,
          title,
        } satisfies DocHeading
      })
      .filter((heading): heading is DocHeading => heading !== null)

    setDomHeadings(nextHeadings)
  }

  const updateActiveHeadingFromScroll = () => {
    const headingElements = getHeadingElements()
    if (headingElements.length === 0) return

    const activationOffset = 144
    let nextActiveHeadingId = headingElements[0]?.id ?? ''

    for (const heading of headingElements) {
      if (!heading.id) continue
      if (heading.getBoundingClientRect().top <= activationOffset) {
        nextActiveHeadingId = heading.id
        continue
      }
      break
    }

    const lastHeading = headingElements.at(-1)
    if (lastHeading?.id && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
      nextActiveHeadingId = lastHeading.id
    }

    setActiveHeadingId(nextActiveHeadingId)
  }

  onMount(() => {
    let scrollFrame = 0
    const syncActiveHeading = () => {
      if (scrollFrame) return

      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0
        updateActiveHeadingFromScroll()
      })
    }

    const updateHash = () => {
      const currentHash = getCurrentHash().replace(/^#/, '')
      if (currentHash !== '') {
        setActiveHeadingId(currentHash)
        return
      }

      syncActiveHeading()
    }

    updateHash()
    queueMicrotask(() => {
      syncHeadingsFromDom()
      syncActiveHeading()
    })

    window.addEventListener('hashchange', updateHash)
    window.addEventListener('scroll', syncActiveHeading, { passive: true })
    window.addEventListener('resize', syncActiveHeading)
    onCleanup(() => {
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
      window.removeEventListener('hashchange', updateHash)
      window.removeEventListener('scroll', syncActiveHeading)
      window.removeEventListener('resize', syncActiveHeading)
    })
  })

  createEffect(() => {
    pageContext.urlPathnameLocalized ?? pageContext.urlPathname

    if (typeof window === 'undefined') return
    queueMicrotask(() => {
      syncHeadingsFromDom()
      updateActiveHeadingFromScroll()
    })
  })

  return (
    <aside class="hidden xl:block w-64 shrink-0">
      <Show when={hasHeadings()}>
        <div class="sticky top-24 max-h-[calc(100svh-7rem)] overflow-y-auto pb-8">
          <p class="mb-4 text-xs font-semibold text-vike-grey-300 uppercase flex gap-2 items-center">
            <ListTree class="w-3 h-3" />
            {t(pageContext.locale, 'docs', 'onThisPage')}
          </p>
          <nav aria-label={t(pageContext.locale, 'docs', 'onThisPage')}>
            <ul>
              <For each={headings()}>
                {(heading, index) => (
                  <li>
                    <TocLink
                      href={`#${heading.id}`}
                      $isNested={heading.depth > 2}
                      $isActive={activeHeadingId() ? activeHeadingId() === heading.id : index() === 0}
                      aria-current={activeHeadingId() === heading.id ? 'location' : undefined}
                      onClick={() => setActiveHeadingId(heading.id)}
                    >
                      {heading.title}
                    </TocLink>
                  </li>
                )}
              </For>
            </ul>
          </nav>
        </div>
      </Show>
    </aside>
  )
}

export default TableOfContents
