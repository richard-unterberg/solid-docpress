import { nivelAssetUrl } from '../../../../shared/assets.js'
import type { ResolvedDocsHeadConfig } from '../../../../docs/types.js'

const defaultInterFontStylesheetHref = nivelAssetUrl('fonts/fonts-inter.css')

const defaultInterFontCss = `
@font-face {
  font-display: swap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url('${nivelAssetUrl('fonts/inter-v20-latin-regular.woff2')}') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  src: url('${nivelAssetUrl('fonts/inter-v20-latin-600.woff2')}') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  src: url('${nivelAssetUrl('fonts/inter-v20-latin-800.woff2')}') format('woff2');
}
`

export const FontLinks = ({ head }: { head: ResolvedDocsHeadConfig }) => {
  const { fontStylesheetHref, fontPreloadHrefs } = head
  const effectivePreloadHrefs = fontPreloadHrefs ?? []
  const shouldInlineDefaultInterFonts = fontStylesheetHref === defaultInterFontStylesheetHref

  return (
    <>
      {effectivePreloadHrefs.map((href) => (
        <link key={href} rel="preload" href={href} as="font" type="font/woff2" crossOrigin="anonymous" />
      ))}
      {shouldInlineDefaultInterFonts ? <style dangerouslySetInnerHTML={{ __html: defaultInterFontCss }} /> : null}
      {fontStylesheetHref && !shouldInlineDefaultInterFonts ? (
        <link rel="stylesheet" href={fontStylesheetHref} />
      ) : null}
    </>
  )
}
