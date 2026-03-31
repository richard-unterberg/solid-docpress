import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'code-blocks': 'src/code-blocks/index.ts',
  },
  format: ['esm'],
  dts: true,
  tsconfig: './tsconfig.build.json',
  sourcemap: true,
  clean: true,
  target: 'es2022',
  external: ['react', 'react-dom'],
})
