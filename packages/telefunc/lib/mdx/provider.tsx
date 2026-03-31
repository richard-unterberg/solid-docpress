export { useMDXComponents }

import {
  Alert,
  ChoiceGroup,
  CodeBlockTransformer,
  FileAdded,
  FileRemoved,
  Pre,
  RepoLink,
  Table,
} from '@unterberg/universal-mdx-mods'
import Link from '@/components/docs/Link'

type MdxComponents = Record<string, unknown>

const useMDXComponents = (components: MdxComponents = {}) => {
  return {
    Alert,
    Link,
    RepoLink,
    Table,
    pre: Pre,
    ChoiceGroup,
    FileAdded,
    FileRemoved,
    CodeBlockTransformer,
    ...components,
  }
}
