import fs from 'node:fs'
import path from 'node:path'

const MANAGED_SCRIPT_NAMES = ['generate:docs', 'predev', 'prebuild', 'pretypecheck'] as const

const REQUIRED_DEPENDENCIES = ['@unterberg/nivel', 'react', 'react-dom', 'vike', 'vike-react'] as const
const REQUIRED_DEV_DEPENDENCIES = ['vite', 'typescript', '@types/react', '@types/react-dom'] as const

type InitConsumerOptions = { force: boolean; rootDir: string }

type InitConsumerResult = {
  allDependenciesPresent: boolean
  createdFiles: string[]
  missingDependencies: string[]
  overwrittenFiles: string[]
  skippedFiles: string[]
  updatedScripts: string[]
}

type PackageJsonShape = {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  packageManager?: string
  scripts?: Record<string, string>
}

const getDocsConfigTemplate = () => {
  return [
    "import { defineDocsConfig } from '@unterberg/nivel/config'",
    "import { docsGraph } from '../docs/docs.graph'",
    '',
    'const docsConfig = defineDocsConfig({',
    '  graph: docsGraph,',
    "  siteTitle: 'My Docs',",
    "  siteDescription: 'Documentation site powered by @unterberg/nivel.',",
    "  basePath: '/docs',",
    '})',
    '',
    'export default docsConfig',
    '',
  ].join('\n')
}

const getDocsGraphTemplate = () => {
  return [
    "import { defineDocsGraph } from '@unterberg/nivel/config'",
    '',
    'export const docsGraph = defineDocsGraph({',
    '  items: [',
    '    {',
    "      kind: 'section',",
    "      id: 'docs',",
    "      title: 'Docs',",
    '      items: [',
    '        {',
    "          kind: 'page',",
    "          id: 'gettingStarted',",
    "          title: 'Getting Started',",
    "          slug: 'getting-started',",
    "          source: 'content/getting-started/content.mdx',",
    "          description: 'Getting started with @unterberg/nivel.',",
    '        },',
    '      ],',
    '    },',
    '  ],',
    '})',
    '',
  ].join('\n')
}

const getConfigTemplate = () => {
  return [
    "import { createNivelVikeConfig } from '@unterberg/nivel/vike'",
    "import docsConfig from './+docs'",
    '',
    'export { config }',
    '',
    'const config = createNivelVikeConfig(docsConfig)',
    '',
  ].join('\n')
}

const getHeadTemplate = () => {
  return [
    "import { MetaHead } from '@unterberg/nivel/client'",
    '',
    'export const Head = () => {',
    '  return <MetaHead />',
    '}',
    '',
  ].join('\n')
}

const getLayoutTemplate = () => {
  return [
    "import { AppLayout } from '@unterberg/nivel/client'",
    "import type { ReactNode } from 'react'",
    '',
    'const Layout = ({ children }: { children: ReactNode }) => {',
    '  return <AppLayout>{children}</AppLayout>',
    '}',
    '',
    'export default Layout',
    '',
  ].join('\n')
}

const getGlobalContextTemplate = () => {
  return [
    "import { docsGlobalContextData } from './(nivel-generated)/_docsGlobalContext'",
    '',
    'export const onCreateGlobalContext = (globalContext: { docs?: typeof docsGlobalContextData }) => {',
    '  globalContext.docs = docsGlobalContextData',
    '}',
    '',
  ].join('\n')
}

const getWrapperTemplate = () => {
  return [
    "import type { ReactNode } from 'react'",
    '',
    'const Wrapper = ({ children }: { children: ReactNode }) => {',
    '  return <>{children}</>',
    '}',
    '',
    'export default Wrapper',
    '',
  ].join('\n')
}

const getGlobalTypesTemplate = () => {
  return [
    "declare module '*.mdx' {",
    "  import type { ComponentType } from 'react'",
    '',
    '  const MdxComponent: ComponentType',
    '  export default MdxComponent',
    '}',
    '',
    "declare module '*.css'",
    '',
    'declare global {',
    '  namespace Vike {',
    '    interface GlobalContext {',
    "      docs: import('@unterberg/nivel').DocsGlobalContextData",
    '    }',
    '  }',
    '}',
    '',
  ].join('\n')
}

const getManagedFileEntries = () => {
  return [
    ['pages/+docs.ts', getDocsConfigTemplate()],
    ['docs/docs.graph.ts', getDocsGraphTemplate()],
    ['pages/+config.ts', getConfigTemplate()],
    ['pages/+Head.tsx', getHeadTemplate()],
    ['pages/+Layout.tsx', getLayoutTemplate()],
    ['pages/+onCreateGlobalContext.ts', getGlobalContextTemplate()],
    ['pages/+Wrapper.tsx', getWrapperTemplate()],
    ['global.d.ts', getGlobalTypesTemplate()],
  ] as const
}

const getGenerateDocsRunner = (packageJson: PackageJsonShape) => {
  const packageManager = packageJson.packageManager?.trim() ?? ''

  if (packageManager.startsWith('pnpm@')) {
    return 'pnpm generate:docs'
  }

  if (packageManager.startsWith('npm@')) {
    return 'npm run generate:docs'
  }

  return 'npm run generate:docs'
}

const getManagedScripts = (packageJson: PackageJsonShape) => {
  const generateDocsRunner = getGenerateDocsRunner(packageJson)

  return {
    'generate:docs': 'nivel prepare',
    predev: generateDocsRunner,
    prebuild: generateDocsRunner,
    pretypecheck: generateDocsRunner,
  } satisfies Record<(typeof MANAGED_SCRIPT_NAMES)[number], string>
}

const writeFile = (filePath: string, source: string) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, source)
}

const writeManagedFile = (
  rootDir: string,
  relativeFilePath: string,
  source: string,
  force: boolean,
  result: InitConsumerResult,
) => {
  const filePath = path.join(rootDir, relativeFilePath)
  const exists = fs.existsSync(filePath)

  if (exists && !force) {
    result.skippedFiles.push(relativeFilePath)
    return
  }

  writeFile(filePath, source)

  if (exists) {
    result.overwrittenFiles.push(relativeFilePath)
    return
  }

  result.createdFiles.push(relativeFilePath)
}

const readPackageJson = (rootDir: string) => {
  const packageJsonPath = path.join(rootDir, 'package.json')

  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`Expected package.json in ${rootDir}`)
  }

  return {
    packageJson: JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')) as PackageJsonShape,
    packageJsonPath,
  }
}

const patchPackageScripts = (packageJson: PackageJsonShape, packageJsonPath: string, result: InitConsumerResult) => {
  const scripts = { ...(packageJson.scripts ?? {}) }
  const managedScripts = getManagedScripts(packageJson)

  for (const scriptName of MANAGED_SCRIPT_NAMES) {
    if (scripts[scriptName] === managedScripts[scriptName]) {
      continue
    }

    scripts[scriptName] = managedScripts[scriptName]
    result.updatedScripts.push(scriptName)
  }

  const nextPackageJson = {
    ...packageJson,
    scripts,
  }

  fs.writeFileSync(packageJsonPath, `${JSON.stringify(nextPackageJson, null, 2)}\n`)
}

const getMissingDependencies = (packageJson: PackageJsonShape) => {
  const installed = new Set<string>([
    ...Object.keys(packageJson.dependencies ?? {}),
    ...Object.keys(packageJson.devDependencies ?? {}),
  ])

  return [...REQUIRED_DEPENDENCIES, ...REQUIRED_DEV_DEPENDENCIES].filter((packageName) => !installed.has(packageName))
}

export const getInitSummary = (result: InitConsumerResult) => {
  const lines = ['Initialized nivel consumer scaffolding.']

  if (result.createdFiles.length > 0) {
    lines.push(`Created files: ${result.createdFiles.join(', ')}`)
  }

  if (result.overwrittenFiles.length > 0) {
    lines.push(`Overwritten files: ${result.overwrittenFiles.join(', ')}`)
  }

  if (result.skippedFiles.length > 0) {
    lines.push(`Skipped existing files: ${result.skippedFiles.join(', ')}`)
  }

  if (result.updatedScripts.length > 0) {
    lines.push(`Updated package.json scripts: ${result.updatedScripts.join(', ')}`)
  }

  if (result.missingDependencies.length > 0) {
    lines.push(`Missing dependencies: ${result.missingDependencies.join(', ')}`)
    lines.push(
      'Consumer CSS stays hand-authored. Add your stylesheet import manually, for example in pages/+Wrapper.tsx.',
    )
  } else if (!result.allDependenciesPresent) {
    lines.push('Dependency validation completed with warnings.')
  } else {
    lines.push('All required dependencies are already present.')
  }

  return `${lines.join('\n')}\n`
}

export const initConsumer = (options: InitConsumerOptions): InitConsumerResult => {
  const result: InitConsumerResult = {
    allDependenciesPresent: true,
    createdFiles: [],
    missingDependencies: [],
    overwrittenFiles: [],
    skippedFiles: [],
    updatedScripts: [],
  }

  const { packageJson, packageJsonPath } = readPackageJson(options.rootDir)

  for (const [relativeFilePath, source] of getManagedFileEntries()) {
    writeManagedFile(options.rootDir, relativeFilePath, source, options.force, result)
  }

  patchPackageScripts(packageJson, packageJsonPath, result)

  result.missingDependencies = getMissingDependencies(packageJson)
  result.allDependenciesPresent = result.missingDependencies.length === 0

  return result
}
