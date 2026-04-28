import type { ElementContentNode, ElementNode, HtmlRootNode, TextNode } from '../ast.js'

type DefinitionListItem = {
  definitions: ElementContentNode[][]
  term: ElementContentNode[]
}

const isElementNode = (node: ElementContentNode): node is ElementNode => {
  return node.type === 'element'
}

const isTextNode = (node: ElementContentNode): node is TextNode => {
  return node.type === 'text'
}

const cloneElementNode = (node: ElementNode): ElementNode => {
  return {
    ...node,
    properties: { ...node.properties },
    children: node.children.map((child) => cloneContentNode(child)),
  }
}

const cloneContentNode = (node: ElementContentNode): ElementContentNode => {
  if (isTextNode(node)) {
    return { ...node }
  }

  return cloneElementNode(node)
}

const trimLine = (line: ElementContentNode[]): ElementContentNode[] => {
  const trimmed = line.map((node) => cloneContentNode(node))

  while (trimmed.length > 0 && isTextNode(trimmed[0]) && trimmed[0].value.trim() === '') {
    trimmed.shift()
  }

  while (trimmed.length > 0) {
    const lastNode = trimmed[trimmed.length - 1]
    if (!lastNode || !isTextNode(lastNode) || lastNode.value.trim() !== '') {
      break
    }

    trimmed.pop()
  }

  if (trimmed.length > 0 && isTextNode(trimmed[0])) {
    trimmed[0].value = trimmed[0].value.replace(/^\s+/, '')
  }

  const lastNode = trimmed[trimmed.length - 1]
  if (lastNode && isTextNode(lastNode)) {
    lastNode.value = lastNode.value.replace(/\s+$/, '')
  }

  return trimmed
}

const stripDefinitionMarker = (line: ElementContentNode[]): ElementContentNode[] | undefined => {
  const [firstNode, ...rest] = line.map((node) => cloneContentNode(node))

  if (!firstNode || !isTextNode(firstNode)) {
    return undefined
  }

  const markerMatch = /^[ \t]{0,3}:[ \t]?/.exec(firstNode.value)
  if (!markerMatch) {
    return undefined
  }

  firstNode.value = firstNode.value.slice(markerMatch[0].length)
  return trimLine(firstNode.value === '' ? rest : [firstNode, ...rest])
}

const splitParagraphLines = (node: ElementNode): ElementContentNode[][] | undefined => {
  const lines: ElementContentNode[][] = [[]]

  for (const child of node.children) {
    if (isElementNode(child)) {
      lines[lines.length - 1].push(cloneElementNode(child))
      continue
    }

    if (!isTextNode(child)) {
      return undefined
    }

    const textLines = child.value.split('\n')
    textLines.forEach((textLine, index) => {
      if (index > 0) {
        lines.push([])
      }

      if (textLine !== '') {
        lines[lines.length - 1].push({ ...child, value: textLine })
      }
    })
  }

  return lines.length > 1 ? lines : undefined
}

const isDefinitionLine = (line: ElementContentNode[]) => {
  return stripDefinitionMarker(line) !== undefined
}

const parseDefinitionListParagraph = (node: ElementNode): DefinitionListItem[] | undefined => {
  if (node.tagName !== 'p') {
    return undefined
  }

  const lines = splitParagraphLines(node)
  if (!lines || lines.length < 2) {
    return undefined
  }

  const items: DefinitionListItem[] = []
  let lineIndex = 0

  while (lineIndex < lines.length) {
    const term = trimLine(lines[lineIndex])
    if (term.length === 0 || isDefinitionLine(lines[lineIndex])) {
      return undefined
    }

    lineIndex += 1

    const definitions: ElementContentNode[][] = []
    while (lineIndex < lines.length) {
      const definition = stripDefinitionMarker(lines[lineIndex])
      if (!definition) {
        break
      }

      definitions.push(definition)
      lineIndex += 1
    }

    if (definitions.length === 0) {
      return undefined
    }

    items.push({ definitions, term })
  }

  return items
}

const createElement = (tagName: string, children: ElementContentNode[]): ElementNode => {
  return {
    type: 'element',
    tagName,
    properties: {},
    children,
  }
}

const createDefinitionList = (items: DefinitionListItem[]): ElementNode => {
  return createElement(
    'dl',
    items.flatMap((item) => {
      return [createElement('dt', item.term), ...item.definitions.map((definition) => createElement('dd', definition))]
    }),
  )
}

const transformChildren = (parent: HtmlRootNode | ElementNode) => {
  const transformedChildren: ElementContentNode[] = []
  let childIndex = 0

  while (childIndex < parent.children.length) {
    const child = parent.children[childIndex]

    if (!isElementNode(child)) {
      transformedChildren.push(child)
      childIndex += 1
      continue
    }

    const definitionListItems = parseDefinitionListParagraph(child)
    if (!definitionListItems) {
      transformChildren(child)
      transformedChildren.push(child)
      childIndex += 1
      continue
    }

    const groupedItems = [...definitionListItems]
    childIndex += 1

    while (childIndex < parent.children.length) {
      const nextChild = parent.children[childIndex]
      if (!isElementNode(nextChild)) {
        break
      }

      const nextItems = parseDefinitionListParagraph(nextChild)
      if (!nextItems) {
        break
      }

      groupedItems.push(...nextItems)
      childIndex += 1
    }

    transformedChildren.push(createDefinitionList(groupedItems))
  }

  parent.children = transformedChildren
}

export const rehypeDefinitionLists = () => {
  return (tree: HtmlRootNode) => {
    transformChildren(tree)
  }
}
