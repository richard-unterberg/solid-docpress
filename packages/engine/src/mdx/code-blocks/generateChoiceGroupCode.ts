import { valueToEstree } from 'estree-util-value-to-estree'
import type { MdxJsxAttribute, MdxJsxAttributeValueExpression, MdxJsxFlowElement } from 'mdast-util-mdx-jsx'
import type { ChoiceCarrierNode, ChoiceGroupElement, ParentNode } from '../ast.js'
import { isContainerDirective } from '../ast.js'

type ChoiceNode = {
  choiceValue: string
  children: ChoiceCarrierNode[]
}

const BUILT_IN_CHOICE_GROUPS = {
  codeLang: {
    choices: ['JavaScript', 'TypeScript'],
    default: 'JavaScript',
  },
  pkgManager: {
    choices: ['npm', 'pnpm', 'Bun', 'Yarn'],
    default: 'npm',
  },
} as const

const getChoiceGroup = (choicesRaw: string[]) => {
  const choices = [...new Set(choicesRaw.filter(Boolean))]

  for (const [name, group] of Object.entries(BUILT_IN_CHOICE_GROUPS)) {
    if (!choices.every((choice) => group.choices.includes(choice as never))) {
      continue
    }

    return {
      name,
      choices: group.choices,
      default: group.default,
      disabled: group.choices.filter((choice) => !choices.includes(choice)),
    }
  }

  return {
    name: `custom:${choices.join('|')}`,
    choices,
    default: choices[0] ?? '',
    disabled: [] as string[],
  }
}

type AttributeEstree = NonNullable<NonNullable<MdxJsxAttributeValueExpression['data']>['estree']>

export const generateChoiceGroupCode = (choiceNodes: ChoiceNode[], parent?: ParentNode): ChoiceGroupElement => {
  const choiceGroup = getChoiceGroup(choiceNodes.map((choiceNode) => choiceNode.choiceValue))
  const mergedChoiceNodes = choiceGroup.choices.map((choice) => {
    const choiceNode = choiceNodes.find((node) => node.choiceValue === choice)

    return {
      choiceValue: choice,
      children: choiceNode?.children ?? [],
    }
  })

  const attributes: MdxJsxAttribute[] = [
    {
      type: 'mdxJsxAttribute',
      name: 'choiceGroup',
      value: {
        type: 'mdxJsxAttributeValueExpression',
        value: '',
        data: {
          estree: {
            type: 'Program',
            sourceType: 'module',
            comments: [],
            body: [
              {
                type: 'ExpressionStatement',
                expression: valueToEstree(choiceGroup),
              },
            ],
          } as unknown as AttributeEstree,
        },
      },
    },
  ]

  if (choiceNodes.length === 1) {
    attributes.push({ type: 'mdxJsxAttribute', name: 'hide' })
  }

  attributes.push({
    type: 'mdxJsxAttribute',
    name: 'lvl',
    value: `${parent?.type === 'mdxJsxFlowElement' ? 1 : 0}`,
  })

  const children: MdxJsxFlowElement[] = mergedChoiceNodes.map((choiceNode) => {
    const choiceChildren: ChoiceCarrierNode[] =
      choiceNode.children.length > 0 && choiceNode.children.every(isContainerDirective)
        ? choiceNode.children.flatMap((node) => node.children ?? [])
        : choiceNode.children

    for (const child of choiceChildren) {
      increaseLvl(child)
    }

    return {
      type: 'mdxJsxFlowElement',
      name: 'div',
      attributes: [
        {
          type: 'mdxJsxAttribute',
          name: 'data-choice-value',
          value: choiceNode.choiceValue,
        },
        { type: 'mdxJsxAttribute', name: 'className', value: 'choice' },
      ],
      children: choiceChildren as MdxJsxFlowElement['children'],
    }
  })

  return {
    type: 'mdxJsxFlowElement',
    name: 'ChoiceGroup',
    attributes,
    children,
  } as ChoiceGroupElement
}

const increaseLvl = (node: ChoiceCarrierNode) => {
  if (node.type !== 'mdxJsxFlowElement' || node.name !== 'ChoiceGroup') {
    return
  }

  const attribute = node.attributes.find(
    (candidate: ChoiceGroupElement['attributes'][number]): candidate is MdxJsxAttribute =>
      candidate.type === 'mdxJsxAttribute' && candidate.name === 'lvl',
  )

  if (typeof attribute?.value === 'string') {
    attribute.value = `${Number(attribute.value) + 1}`
  }
}
