import { syncGeneratedDocsPages } from '@unterberg/docsengine/runtime'
import docsConfig from '../pages/+docs'

syncGeneratedDocsPages({
  rootDir: process.cwd(),
  docsConfig,
})
