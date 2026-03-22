import { createSignal, Show } from 'solid-js'
import { usePageContext } from 'vike-solid/usePageContext'
import { t } from '@/lib/i18n/messages'
import ApiTab from '@/pages/(docs)/Sidebar/ApiTab'
import MenuTab from '@/pages/(docs)/Sidebar/MenuTab'

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = createSignal<'menu' | 'api'>('menu')
  const { locale } = usePageContext()

  return (
    <>
      <div class="border-r border-vike-grey -translate-x-4 pr-4 h-[calc(100svh-16*var(--spacing))] overflow-y-scroll overflow-x-hidden sticky top-16">
        <ul class="menu menu-sm menu-horizontal gap-1">
          <li>
            <button
              class={`justify-start ${selectedTab() === 'menu' && 'menu-active'}`}
              onClick={() => setSelectedTab('menu')}
            >
              {t(locale, 'docs', 'documentation')}
            </button>
          </li>
          <li>
            <button
              class={`justify-start ${selectedTab() === 'api' && 'menu-active'}`}
              onClick={() => setSelectedTab('api')}
            >
              {t(locale, 'docs', 'apiReference')}
            </button>
          </li>
        </ul>
        <Show when={selectedTab() === 'menu'} fallback={<ApiTab />}>
          <MenuTab />
        </Show>
      </div>
    </>
  )
}

export default Sidebar
