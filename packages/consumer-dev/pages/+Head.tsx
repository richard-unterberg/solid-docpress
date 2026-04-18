import { MetaHead } from '@unterberg/nivel/client'

export const Head = () => {
  return (
    <>
      <MetaHead />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const loadAnalytics = () => {
                if (document.querySelector('script[data-website-id="1d5fc8f9-2ff4-4846-a242-1a2b061572ed"]')) {
                  return
                }

                const script = document.createElement('script')
                script.src = 'https://cloud.umami.is/script.js'
                script.async = true
                script.dataset.websiteId = '1d5fc8f9-2ff4-4846-a242-1a2b061572ed'
                document.head.appendChild(script)
              }

              const scheduleAnalyticsLoad = () => {
                if ('requestIdleCallback' in window) {
                  window.requestIdleCallback(loadAnalytics, { timeout: 3000 })
                  return
                }

                window.setTimeout(loadAnalytics, 1500)
              }

              if (document.readyState === 'complete') {
                scheduleAnalyticsLoad()
                return
              }

              window.addEventListener('load', scheduleAnalyticsLoad, { once: true })
            })();
          `,
        }}
      />
    </>
  )
}
