import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { docsenginePublicRoute } from '@unterberg/docsengine'

const getDocsenginePackageRoot = () => {
  const docsengineConfigUrl = import.meta.resolve('@unterberg/docsengine/config')
  const docsengineConfigPath = fileURLToPath(docsengineConfigUrl)
  return path.resolve(path.dirname(docsengineConfigPath), '..')
}

const syncDocsengineAssets = () => {
  const consumerRoot = process.cwd()
  const docsengineAssetsRoot = path.join(
    getDocsenginePackageRoot(),
    'assets',
    docsenginePublicRoute.replace(/^\/+/, ''),
  )
  const outputRoot = path.join(consumerRoot, 'dist', 'client', docsenginePublicRoute.replace(/^\/+/, ''))

  if (!fs.existsSync(docsengineAssetsRoot)) {
    throw new Error(`Missing docsengine assets directory: ${docsengineAssetsRoot}`)
  }

  fs.rmSync(outputRoot, { recursive: true, force: true })
  fs.mkdirSync(path.dirname(outputRoot), { recursive: true })
  fs.cpSync(docsengineAssetsRoot, outputRoot, { recursive: true })
}

syncDocsengineAssets()
