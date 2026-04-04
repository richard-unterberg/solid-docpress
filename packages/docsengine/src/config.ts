export { docsengineConfig as default }

import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'
import type { Config } from 'vike/types'
import type { PluginOption, UserConfig } from 'vite'
import { getCodeBlockMdxPlugins } from './components/code-blocks/index.js'
import { docsenginePagesPlugin } from './runtime/node.js'
import { rehypeDocsHeadings } from './runtime/rehypeDocsHeadings.js'

process.env.VIKE_CRAWL ??= JSON.stringify({ git: false })

const codeBlockMdxPlugins = getCodeBlockMdxPlugins()

const viteConfig: UserConfig = {
  plugins: [
    {
      ...mdx({
        providerImportSource: '@unterberg/docsengine/mdx',
        ...codeBlockMdxPlugins,
        rehypePlugins: [...codeBlockMdxPlugins.rehypePlugins, rehypeDocsHeadings],
        remarkPlugins: [remarkGfm, ...codeBlockMdxPlugins.remarkPlugins],
      }),
      enforce: 'pre',
    } as PluginOption,
    docsenginePagesPlugin(),
  ],
  ssr: {
    noExternal: ['@unterberg/docsengine'],
  },
}

const docsengineConfig = {
  meta: {
    docs: {
      env: {
        server: true,
        client: true,
      },
      global: true,
    },
  },
  prerender: true,
  trailingSlash: true,
  vite: viteConfig as Record<string, unknown>,
} satisfies Config
