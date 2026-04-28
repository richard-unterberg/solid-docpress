import assert from 'node:assert/strict'
import test from 'node:test'
import type { ElementNode, HtmlRootNode } from '../src/mdx/ast.js'
import { rehypeDefinitionLists } from '../src/mdx/plugins/rehypeDefinitionLists.js'

const text = (value: string) => {
  return { type: 'text', value } as const
}

const element = (tagName: string, children = []) => {
  return {
    type: 'element',
    tagName,
    properties: {},
    children,
  } as ElementNode
}

const transform = (children: HtmlRootNode['children']) => {
  const tree: HtmlRootNode = { type: 'root', children }
  const transformer = rehypeDefinitionLists()

  transformer(tree)

  return tree
}

test('rehypeDefinitionLists converts colon-prefixed markdown paragraphs to definition lists', () => {
  const tree = transform([
    element('p', [text('First Term\n: This is the definition of the first term.')]),
    element('p', [
      text(
        'Second Term\n: This is one definition of the second term.\n: This is another definition of the second term.',
      ),
    ]),
  ])

  assert.deepEqual(tree, {
    type: 'root',
    children: [
      {
        type: 'element',
        tagName: 'dl',
        properties: {},
        children: [
          element('dt', [text('First Term')]),
          element('dd', [text('This is the definition of the first term.')]),
          element('dt', [text('Second Term')]),
          element('dd', [text('This is one definition of the second term.')]),
          element('dd', [text('This is another definition of the second term.')]),
        ],
      },
    ],
  })
})

test('rehypeDefinitionLists preserves inline markdown elements inside terms and definitions', () => {
  const tree = transform([
    element('p', [
      text('First '),
      element('strong', [text('Term')]),
      text('\n: Definition with '),
      element('em', [text('emphasis')]),
    ]),
  ])

  assert.deepEqual(tree.children, [
    {
      type: 'element',
      tagName: 'dl',
      properties: {},
      children: [
        element('dt', [text('First '), element('strong', [text('Term')])]),
        element('dd', [text('Definition with '), element('em', [text('emphasis')])]),
      ],
    },
  ])
})

test('rehypeDefinitionLists leaves ordinary colon paragraphs untouched', () => {
  const paragraph = element('p', [text('Meeting notes\n10:00 - 11:00')])
  const tree = transform([paragraph])

  assert.equal(tree.children[0], paragraph)
})
