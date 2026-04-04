import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { docsenginePublicRoute } from '../docsengineAssets.js'

const toPosix = (value: string) => value.split(path.sep).join(path.posix.sep)

const getRequestPathname = (requestUrl: string | undefined) => {
  return requestUrl?.split('?')[0]?.split('#')[0] ?? ''
}

const normalizeDocsengineAssetPathname = (pathname: string) => {
  if (pathname === docsenginePublicRoute) {
    return pathname
  }

  if (!pathname.startsWith(`${docsenginePublicRoute}/`)) {
    return null
  }

  const trimmedPathname = pathname.replace(/\/+$/g, '')
  if (trimmedPathname !== pathname && path.extname(trimmedPathname)) {
    return trimmedPathname
  }

  return pathname
}

const getPublicAssetsRootCandidates = (runtimeDir: string) => {
  let packageRoot: string | null = null

  try {
    const docsengineConfigUrl = import.meta.resolve('@unterberg/docsengine/config')
    const docsengineConfigPath = fileURLToPath(docsengineConfigUrl)
    packageRoot = path.resolve(path.dirname(docsengineConfigPath), '..')
  } catch {
    packageRoot = null
  }

  return [
    ...(packageRoot ? [path.join(packageRoot, 'assets')] : []),
    path.resolve(runtimeDir, '../assets'),
    path.resolve(runtimeDir, '../../assets'),
  ]
}

export const getDocsenginePublicAssetsRoot = () => {
  const runtimeUrl = import.meta.url.startsWith('/') ? pathToFileURL(import.meta.url).href : import.meta.url
  const runtimeDir = path.dirname(fileURLToPath(runtimeUrl))

  for (const candidate of getPublicAssetsRootCandidates(runtimeDir)) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
      return candidate
    }
  }

  throw new Error(`Unable to locate docsengine public assets from ${runtimeDir}.`)
}

export const getDocsenginePublicAssetFilePath = (requestUrl: string | undefined) => {
  const pathname = normalizeDocsengineAssetPathname(getRequestPathname(requestUrl))

  if (!pathname) {
    return null
  }

  const assetsRoot = getDocsenginePublicAssetsRoot()
  const relativePath = pathname.replace(/^\/+/, '')
  const filePath = path.resolve(assetsRoot, relativePath)
  const relativeToRoot = path.relative(assetsRoot, filePath)

  if (
    relativeToRoot.startsWith('..') ||
    path.isAbsolute(relativeToRoot) ||
    !fs.existsSync(filePath) ||
    !fs.statSync(filePath).isFile()
  ) {
    return null
  }

  return filePath
}

export const getDocsenginePublicAssetContentType = (filePath: string) => {
  switch (path.extname(filePath)) {
    case '.css':
      return 'text/css; charset=utf-8'
    case '.svg':
      return 'image/svg+xml'
    case '.png':
      return 'image/png'
    case '.ico':
      return 'image/x-icon'
    case '.woff2':
      return 'font/woff2'
    default:
      return 'application/octet-stream'
  }
}

export const isDocsengineAssetRequestUrl = (requestUrl: string | undefined) => {
  return normalizeDocsengineAssetPathname(getRequestPathname(requestUrl)) !== null
}

export const isDocsengineAssetPath = (filePath: string) => {
  const normalizedFilePath = toPosix(path.resolve(filePath))
  const assetsRoot = toPosix(getDocsenginePublicAssetsRoot())
  return normalizedFilePath.startsWith(`${assetsRoot}/`)
}
