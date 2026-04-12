import { visit } from 'unist-util-visit'
import type { ElementNode, HtmlRootNode } from '../ast.js'
import { getCodeBlockPropsFromMeta } from './meta.js'

export const rehypeMetaToProps = () => {
  return (tree: HtmlRootNode) => {
    visit(
      tree,
      'element',
      (node: ElementNode, _index: number | undefined, parent: ElementNode | HtmlRootNode | undefined) => {
        if (!parent || parent.type !== 'element' || node.tagName !== 'code' || parent.tagName !== 'pre') {
          return
        }

        const meta = getCodeBlockPropsFromMeta((node.data as { meta?: unknown } | undefined)?.meta)
        parent.properties ??= {}
        parent.properties = {
          ...parent.properties,
          ...meta.props,
          ...(meta.env ? { 'data-code-env': meta.env } : {}),
          ...(meta.title ? { 'data-code-title': meta.title } : {}),
        }
      },
    )
  }
}
