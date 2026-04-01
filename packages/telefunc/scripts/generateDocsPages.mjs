import path from 'node:path'
import { syncGeneratedDocPages } from '../lib/docs/codegen.js'

const rootDir = process.cwd()
const pagesRoot = path.resolve(rootDir, 'pages')
const generatedPagesRoot = path.resolve(pagesRoot, '(docs)/(generated)')
syncGeneratedDocPages({ generatedPagesRoot, pagesRoot })
