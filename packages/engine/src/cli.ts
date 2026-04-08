import path from 'node:path'
import { syncGeneratedDocsPages } from './runtime/node/codegen.js'
import { loadDocsConfigWithTsx } from './runtime/node/loadDocsConfigWithTsx.js'
import { getInitSummary, initConsumer } from './runtime/node/scaffold.js'

const usage = [
  'Usage:',
  '  nivel prepare [--root <path>]',
  '  nivel init [--root <path>] [--force]',
  '',
  'Commands:',
  '  prepare    Generate docs pages from pages/+docs.ts',
  '  init       Scaffold visible consumer files and standard docs scripts',
].join('\n')

const parseCliArgs = (args: string[]) => {
  let command: string | null = null
  let force = false
  let rootDir = process.cwd()

  for (let index = 0; index < args.length; index += 1) {
    const value = args[index]

    if (value === '--help' || value === '-h') {
      return {
        command: 'help',
        force,
        rootDir,
      }
    }

    if (value === '--root') {
      const nextValue = args[index + 1]

      if (!nextValue) {
        throw new Error('Missing value for --root.')
      }

      rootDir = path.resolve(nextValue)
      index += 1
      continue
    }

    if (value === '--force') {
      force = true
      continue
    }

    if (value.startsWith('--')) {
      throw new Error(`Unknown option ${value}`)
    }

    if (command) {
      throw new Error(`Unexpected argument ${value}`)
    }

    command = value
  }

  return {
    command,
    force,
    rootDir,
  }
}

const runPrepare = async (rootDir: string) => {
  const docsConfig = await loadDocsConfigWithTsx(rootDir)

  syncGeneratedDocsPages({
    rootDir,
    docsConfig,
  })
}

const runInit = (rootDir: string, force: boolean) => {
  const result = initConsumer({
    force,
    rootDir,
  })

  process.stdout.write(getInitSummary(result))
}

export const runCli = async (args: string[]) => {
  const parsed = parseCliArgs(args)

  if (!parsed.command || parsed.command === 'help') {
    process.stdout.write(`${usage}\n`)
    return
  }

  if (parsed.command !== 'prepare') {
    if (parsed.command !== 'init') {
      throw new Error(`Unknown command ${parsed.command}`)
    }

    runInit(parsed.rootDir, parsed.force)
    return
  }

  await runPrepare(parsed.rootDir)
}

void runCli(process.argv.slice(2)).catch((error: unknown) => {
  const message = error instanceof Error ? (error.stack ?? error.message) : String(error)
  process.stderr.write(`${message}\n`)
  process.exitCode = 1
})
