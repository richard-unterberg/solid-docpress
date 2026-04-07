import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { nivelPublicRoute } from '../../engine/src/shared/assets'

const nivelRoot = fileURLToPath(new URL('../../engine', import.meta.url))

const syncNivelAssets = () => {
  const consumerRoot = process.cwd()
  const nivelAssetsRoot = path.join(nivelRoot, 'assets', nivelPublicRoute.replace(/^\/+/, ''))
  const outputRoot = path.join(consumerRoot, 'dist', 'client', nivelPublicRoute.replace(/^\/+/, ''))

  if (!fs.existsSync(nivelAssetsRoot)) {
    throw new Error(`Missing nivel assets directory: ${nivelAssetsRoot}`)
  }

  fs.rmSync(outputRoot, { recursive: true, force: true })
  fs.mkdirSync(path.dirname(outputRoot), { recursive: true })
  fs.cpSync(nivelAssetsRoot, outputRoot, { recursive: true })
}

syncNivelAssets()
