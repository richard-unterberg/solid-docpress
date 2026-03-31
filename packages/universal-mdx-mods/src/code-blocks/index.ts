import { transformerNotationHighlight } from '@brillout/shiki-transformers'
import { transformerNotationDiff, transformerNotationWordHighlight } from '@shikijs/transformers'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkDirective from 'remark-directive'
import { rehypeMetaToProps } from './rehypeMetaToProps'
import { remarkChoiceGroup } from './remarkChoiceGroup'
import { remarkDetype } from './remarkDetype'
import { remarkPkgManager } from './remarkPkgManager'
import { shikiTransformerAutoLinks } from './shikiTransformerAutoLinks'

export { getCodeBlockPropsFromMeta, parseMetaString } from './meta'
export { rehypeMetaToProps } from './rehypeMetaToProps'
export { remarkChoiceGroup } from './remarkChoiceGroup'
export { remarkDetype } from './remarkDetype'
export { remarkPkgManager } from './remarkPkgManager'
export { shikiTransformerAutoLinks } from './shikiTransformerAutoLinks'

export const getCodeBlockMdxPlugins = (): { remarkPlugins: any[]; rehypePlugins: any[] } => {
  return {
    remarkPlugins: [remarkDirective, remarkDetype, remarkPkgManager, remarkChoiceGroup],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          keepBackground: false,
          theme: {
            light: 'github-light',
            dark: 'one-dark-pro',
          },
          transformers: [
            transformerNotationDiff(),
            transformerNotationHighlight(),
            transformerNotationWordHighlight(),
            shikiTransformerAutoLinks(),
          ],
        },
      ],
      rehypeMetaToProps,
    ],
  }
}
