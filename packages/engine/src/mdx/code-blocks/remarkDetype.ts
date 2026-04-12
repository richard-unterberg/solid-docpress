import { transform as detype } from 'detype'
import { visit } from 'unist-util-visit'
import type { ChoiceGroupElement, CodeNode, FileLike, ParentNode, RootNode } from '../ast.js'
import { generateChoiceGroupCode } from './generateChoiceGroupCode.js'
import { parseMetaString } from './meta.js'

const prettierOptions = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
} as const

type TransformNode = {
  codeBlock: CodeNode
  index: number
  parent: ParentNode
}

export const remarkDetype = () => {
  return async (tree: RootNode, file: FileLike) => {
    const codeNodes: TransformNode[] = []

    visit(tree, 'code', (node: CodeNode, index: number | undefined, parent: ParentNode | undefined) => {
      if (!parent || typeof index !== 'number') {
        return
      }

      if (!['ts', 'tsx', 'vue', 'yaml'].includes(node.lang ?? '')) {
        return
      }

      if (typeof node.meta === 'string' && node.meta.includes('ts-only')) {
        return
      }

      codeNodes.push({ codeBlock: node, index, parent })
    })

    for (const node of [...codeNodes].reverse()) {
      if (node.codeBlock.lang === 'yaml') {
        transformYaml(node)
      } else {
        await transformTsToJs(node, file)
      }
    }
  }
}

const transformYaml = (node: TransformNode) => {
  const { codeBlock, index, parent } = node
  const codeBlockContentJs = replaceFileNameSuffixes(codeBlock.value)

  if (codeBlockContentJs === codeBlock.value) {
    return
  }

  const meta = parseMetaString(codeBlock.meta, ['choice'])
  const choice = meta.props.choice
  codeBlock.meta = meta.rest

  const yamlJsCode = {
    ...codeBlock,
    value: codeBlockContentJs,
  }

  const replacement = generateChoiceGroupCode([
    { choiceValue: 'JavaScript', children: [yamlJsCode] },
    { choiceValue: 'TypeScript', children: [codeBlock] },
  ]) as ChoiceGroupElement

  replacement.attributes.push({ type: 'mdxJsxAttribute', name: 'hide' })
  replacement.data ??= {}
  replacement.data.customDataChoice = choice
  replacement.data.customDataFilter = 'codeLang'
  parent.children.splice(index, 1, replacement)
}

const transformTsToJs = async (node: TransformNode, file: FileLike) => {
  const { codeBlock, index, parent } = node
  const meta = parseMetaString(codeBlock.meta, ['max-width', 'choice'])
  const maxWidth = Number(meta.props['max-width'])
  const choice = meta.props.choice
  codeBlock.meta = meta.rest

  codeBlock.data ??= {}
  codeBlock.data.customDataChoice = choice
  codeBlock.data.customDataFilter = 'codeLang'

  if (choice === 'TypeScript') {
    return
  }

  const codeBlockReplacedJs = replaceFileNameSuffixes(codeBlock.value)
  let codeBlockContentJs = ''

  try {
    codeBlockContentJs = await detype(codeBlockReplacedJs, `snippet.${codeBlock.lang}`, {
      customizeBabelConfig(config) {
        if (!config.presets || config.presets.length !== 1) {
          return
        }

        config.presets = [[config.presets[0], { onlyRemoveTypeImports: true }]]
      },
      removeTsComments: true,
      prettierOptions: {
        ...prettierOptions,
        printWidth: Number.isFinite(maxWidth) && maxWidth > 0 ? maxWidth : 99,
      },
    })
  } catch (error) {
    console.error(
      [
        `Failed to detype code block in ${file?.path ?? 'an MDX file'}.`,
        error instanceof Error ? error.message : String(error),
      ].join('\n'),
    )
    return
  }

  codeBlockContentJs = cleanUpCode(codeBlockContentJs.trimEnd(), true)
  codeBlock.value = cleanUpCode(codeBlock.value)
  codeBlockContentJs = preserveSourceLineBreaks(codeBlock.value, codeBlockContentJs)
  codeBlockContentJs = preserveSourceBlankLines(codeBlock.value, codeBlockContentJs)

  if (codeBlockContentJs === codeBlock.value) {
    return
  }

  const tsCode: CodeNode = { ...codeBlock, lang: codeBlock.lang }
  const jsCode: CodeNode = {
    ...codeBlock,
    lang: String(codeBlock.lang).replace('t', 'j'),
    meta: replaceCodeBlockTitleFileExtension(codeBlock.meta, String(codeBlock.lang).replace('t', 'j')),
    value: codeBlockContentJs,
  }

  const replacement = generateChoiceGroupCode([
    { choiceValue: 'JavaScript', children: [jsCode] },
    { choiceValue: 'TypeScript', children: [tsCode] },
  ]) as ChoiceGroupElement

  if (codeBlockReplacedJs === codeBlockContentJs) {
    replacement.attributes.push({ type: 'mdxJsxAttribute', name: 'hide' })
  }

  replacement.data ??= {}
  replacement.data.customDataChoice = codeBlock.data.customDataChoice
  replacement.data.customDataFilter = codeBlock.data.customDataFilter
  parent.children.splice(index, 1, replacement)
}

const replaceFileNameSuffixes = (value: string) => value.replaceAll('.ts', '.js')

const replaceCodeBlockTitleFileExtension = (meta: unknown, outputLang: string): string | null | undefined => {
  if (typeof meta !== 'string' || meta.trim() === '') {
    return typeof meta === 'string' ? meta : undefined
  }

  const parsedMeta = parseMetaString(meta)
  const titleToken = parsedMeta.tokens.find((token) => token.name === 'title' && token.hasExplicitValue)
  const titleValue = typeof parsedMeta.props.title === 'string' ? parsedMeta.props.title : null

  if (!titleToken || !titleValue) {
    return meta
  }

  const nextTitleValue = replaceTitleFileExtension(titleValue, outputLang)
  if (nextTitleValue === titleValue) {
    return meta
  }

  const quote = titleToken.raw.includes("title='") ? "'" : '"'
  return meta.replace(titleToken.raw, `title=${quote}${nextTitleValue}${quote}`)
}

const replaceTitleFileExtension = (title: string, outputLang: string) => {
  if (outputLang === 'jsx') {
    return title.replace(/\.tsx$/i, '.jsx').replace(/\.ts$/i, '.js')
  }

  if (outputLang === 'js') {
    return title.replace(/\.tsx$/i, '.jsx').replace(/\.ts$/i, '.js')
  }

  return title
}

const cleanUpCode = (code: string, isJsCode = false) => {
  if (isJsCode) {
    code = correctCodeDiffComments(code)
  }

  return processMagicComments(code)
}

const processMagicComments = (code: string) => {
  const renameCommentRe = /^\s*\/\/\s@docpress-replace\s([^ ]+) ([^ ]+)\n/gm
  const matches = Array.from(code.matchAll(renameCommentRe))

  for (let index = matches.length - 1; index >= 0; index -= 1) {
    const match = matches[index]
    if (!match) {
      continue
    }

    const [fullMatch, renameFrom, renameTo] = match
    code = code.split(fullMatch).join('').replaceAll(renameFrom, renameTo)
  }

  return code.replaceAll('// @docpress-uncomment ', '')
}

const correctCodeDiffComments = (code: string) => {
  return code.replaceAll(/\n\s*\/\/\s\[!code.+\]/g, (codeDiff) => codeDiff.trimStart())
}

const preserveSourceLineBreaks = (sourceCode: string, outputCode: string) => {
  const multilineSegments = collectMultilineSourceSegments(sourceCode)

  if (multilineSegments.length === 0) {
    return outputCode
  }

  const outputLines = outputCode.split('\n')

  for (const segmentLines of multilineSegments) {
    const segmentNormalized = normalizeCodeSegment(segmentLines.join('\n'))

    if (!segmentNormalized) {
      continue
    }

    for (let start = 0; start < outputLines.length; start += 1) {
      let replaced = false

      for (let size = 1; size <= segmentLines.length; size += 1) {
        if (start + size > outputLines.length) {
          break
        }

        const outputSegment = outputLines.slice(start, start + size)

        if (normalizeCodeSegment(outputSegment.join('\n')) !== segmentNormalized) {
          continue
        }

        if (outputSegment.join('\n') !== segmentLines.join('\n')) {
          outputLines.splice(start, size, ...segmentLines)
        }

        start += segmentLines.length - 1
        replaced = true
        break
      }

      if (replaced) {
        break
      }
    }
  }

  return outputLines.join('\n')
}

const collectMultilineSourceSegments = (code: string) => {
  const lines = code.split('\n')
  const segments: string[][] = []
  let paragraphStart = -1

  for (let index = 0; index <= lines.length; index += 1) {
    if (index < lines.length && lines[index]?.trim() !== '') {
      if (paragraphStart === -1) {
        paragraphStart = index
      }
      continue
    }

    if (paragraphStart !== -1) {
      const paragraphEnd = index - 1

      for (let size = paragraphEnd - paragraphStart + 1; size >= 2; size -= 1) {
        for (let start = paragraphStart; start + size - 1 <= paragraphEnd; start += 1) {
          segments.push(lines.slice(start, start + size).map(replaceFileNameSuffixes))
        }
      }
    }

    paragraphStart = -1
  }

  return segments
}

const preserveSourceBlankLines = (sourceCode: string, outputCode: string) => {
  const blankLineAnchors = collectBlankLineAnchors(sourceCode)

  if (blankLineAnchors.length === 0) {
    return outputCode
  }

  const outputLines = outputCode.split('\n')
  let searchFrom = 0

  for (const anchor of blankLineAnchors) {
    const lineIndex = outputLines.findIndex((line, index) => index >= searchFrom && normalizeCodeLine(line) === anchor)

    if (lineIndex <= 0) {
      continue
    }

    if (outputLines[lineIndex - 1]?.trim() !== '') {
      outputLines.splice(lineIndex, 0, '')
      searchFrom = lineIndex + 2
    } else {
      searchFrom = lineIndex + 1
    }
  }

  return outputLines.join('\n')
}

const collectBlankLineAnchors = (code: string) => {
  const lines = code.split('\n')
  const anchors: string[] = []

  for (let index = 1; index < lines.length; index += 1) {
    if (lines[index]?.trim() !== '' || lines[index - 1]?.trim() === '') {
      continue
    }

    let nextLineIndex = index + 1

    while (nextLineIndex < lines.length && lines[nextLineIndex]?.trim() === '') {
      nextLineIndex += 1
    }

    const anchor = lines[nextLineIndex]

    if (anchor) {
      anchors.push(normalizeCodeLine(anchor))
    }
  }

  return anchors
}

const normalizeCodeLine = (line: string) => {
  return stripTypeSyntax(replaceFileNameSuffixes(line)).trim().replace(/\s+/g, ' ')
}

const normalizeCodeSegment = (code: string) => {
  return replaceFileNameSuffixes(code).replace(/\s+/g, '')
}

const stripTypeSyntax = (line: string) => {
  return line
    .replace(/\??:\s*[A-Za-z_$][\w$.<>, |&[\]]*/g, '')
    .replace(/\s+as\s+const\b/g, '')
    .replace(/\s+as\s+[A-Za-z_$][\w$.<>, |&[\]]*/g, '')
}
