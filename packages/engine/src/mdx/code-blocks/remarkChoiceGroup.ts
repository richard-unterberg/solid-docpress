import { visit } from 'unist-util-visit'
import type { AstNode, ChoiceCarrierNode, ChoiceGroupElement, CodeNode, ContainerDirective, RootNode } from '../ast.js'
import { hasChildren } from '../ast.js'
import { generateChoiceGroupCode } from './generateChoiceGroupCode.js'
import { parseMetaString } from './meta.js'

type ChoiceNodeGroup = Array<{ choiceValue: string; children: ChoiceCarrierNode[] }>
const isChoiceCarrierNode = (node: AstNode): node is ChoiceCarrierNode => {
  return ['code', 'containerDirective', 'mdxJsxFlowElement'].includes(node.type)
}

export const remarkChoiceGroup = () => {
  return (tree: RootNode) => {
    visit(tree, (node) => {
      if (node.type === 'code') {
        const codeNode = node as CodeNode
        if (!codeNode.meta) {
          return
        }

        const meta = parseMetaString(codeNode.meta, ['choice'])
        const choice = meta.props.choice
        codeNode.meta = meta.rest

        if (choice) {
          codeNode.data ??= {}
          codeNode.data.customDataChoice = choice
          codeNode.data.customDataFilter = 'explicitChoice'
        }
      }

      if (node.type === 'containerDirective') {
        const directiveNode = node as ContainerDirective
        if (directiveNode.name !== 'Choice') {
          return
        }

        const choice = typeof directiveNode.attributes?.id === 'string' ? directiveNode.attributes.id : null
        if (!choice) {
          return
        }

        directiveNode.data ??= {}
        directiveNode.data.customDataChoice = choice
        directiveNode.data.customDataFilter = directiveNode.type
        directiveNode.attributes = {}
      }
    })

    visit(tree, (node) => {
      if (!hasChildren(node)) {
        return
      }

      let start = -1
      let end = 0

      const processRange = () => {
        if (start === -1 || start === end) {
          return
        }

        const nodes = node.children.slice(start, end).filter(isChoiceCarrierNode)
        const replacements = filterChoices(nodes).map(
          (choiceNodes) => generateChoiceGroupCode(choiceNodes, node) as ChoiceGroupElement,
        )
        node.children.splice(start, end - start, ...replacements)
        end = start + replacements.length
        start = -1
      }

      for (; end < node.children.length; end += 1) {
        const child = node.children[end]

        if (!child || !isChoiceCarrierNode(child as AstNode)) {
          processRange()
          continue
        }

        if (!child.data?.customDataChoice) {
          processRange()
          continue
        }

        if (start === -1) {
          start = end
        }
      }

      processRange()
    })
  }
}

const filterChoices = (nodes: ChoiceCarrierNode[]): ChoiceNodeGroup[] => {
  const filteredChoices: ChoiceNodeGroup[] = []
  const filters = [
    ...new Set(
      nodes
        .map((node) => node.data?.customDataFilter)
        .filter((filter): filter is string => typeof filter === 'string' && filter !== ''),
    ),
  ]

  for (const filter of filters) {
    const nodesByChoice = new Map<string, ChoiceCarrierNode[]>()

    for (const node of nodes.filter((candidate) => candidate.data?.customDataFilter === filter)) {
      const data = node.data
      const choice = data?.customDataChoice
      if (!choice || !data) {
        continue
      }

      data.customDataChoice = undefined
      const choiceNodes = nodesByChoice.get(choice) ?? []
      choiceNodes.push(node)
      nodesByChoice.set(choice, choiceNodes)
    }

    filteredChoices.push(
      [...nodesByChoice].map(([choiceValue, children]) => ({
        choiceValue,
        children,
      })),
    )
  }

  return filteredChoices
}
