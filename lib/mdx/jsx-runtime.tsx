import { Fragment, jsx as reactJsx, jsxs as reactJsxs } from 'react/jsx-runtime'
import { MdxCodeBlock } from '@/components/docs/CodeBlock'
import { MdxLink } from './MdxLink'

type MdxElementType = Parameters<typeof reactJsx>[0]

const resolveMdxType = (type: MdxElementType): MdxElementType => {
  if (type === 'a') return MdxLink
  if (type === 'pre') return MdxCodeBlock
  return type
}

export { Fragment }

export const jsx: typeof reactJsx = (type, props, key) => reactJsx(resolveMdxType(type), props, key)
export const jsxs: typeof reactJsxs = (type, props, key) => reactJsxs(resolveMdxType(type), props, key)
