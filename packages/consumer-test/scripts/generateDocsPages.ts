import { syncGeneratedDocsPages } from '../../engine/src/runtime/node/index'
import docsConfig from '../pages/+docs'

syncGeneratedDocsPages({
  rootDir: process.cwd(),
  docsConfig,
})
