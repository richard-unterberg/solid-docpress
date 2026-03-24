import { usePageContext } from 'vike-react/usePageContext'
import appConfig from '@/lib/config'
import { themeBootstrapScript } from '@/lib/theme'

export const Head = () => {
  const context = usePageContext()
  const locale = context.locale || 'en'
  const isChinese = locale === 'zh'

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      <link rel="icon" href={`${appConfig.publicAssets}favicon.svg`} />
      {isChinese ? (
        <>
          <link
            rel="preload"
            href={`${appConfig.publicAssets}fonts/noto-sans-sc-v40-chinese-simplified-regular.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={`${appConfig.publicAssets}fonts/noto-sans-sc-v40-chinese-simplified-600.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={`${appConfig.publicAssets}fonts/noto-sans-sc-v40-chinese-simplified-800.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </>
      ) : (
        <>
          <link
            rel="preload"
            href={`${appConfig.publicAssets}fonts/inter-v20-latin-regular.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={`${appConfig.publicAssets}fonts/inter-v20-latin-600.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={`${appConfig.publicAssets}fonts/inter-v20-latin-800.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </>
      )}
      <link
        rel="stylesheet"
        href={`${appConfig.publicAssets}${isChinese ? 'fonts-noto-sans-sc.css' : 'fonts-inter.css'}`}
      />
    </>
  )
}
