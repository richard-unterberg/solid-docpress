import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    client: 'src/runtime/client.ts',
    'code-blocks': 'src/components/code-blocks/index.ts',
    config: 'src/config.ts',
    mdx: 'src/mdx.ts',
    'runtime/index': 'src/runtime/node.ts',
    'runtime/client': 'src/runtime/client.ts',
  },
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'vike', 'vike-react', 'vite'],
})
