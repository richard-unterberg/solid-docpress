export const docsenginePublicRoute = '/docsengine'

export const baseAssets = `${docsenginePublicRoute}/`

export const docsengineAssetUrl = (assetPath: string) => `${baseAssets}${assetPath.replace(/^\/+/, '')}`
