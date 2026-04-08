import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptsDir = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(scriptsDir, '..')
const engineDir = path.join(rootDir, 'packages', 'engine')
const publishEnvKeys = [
  'npm_command',
  'npm_config__jsr_registry',
  'npm_config_npm_globalconfig',
  'npm_config_verify_deps_before_run',
]

const run = (command, args, options = {}) => {
  execFileSync(command, args, {
    cwd: rootDir,
    stdio: 'inherit',
    env: process.env,
    ...options,
  })
}

const getPublishEnv = () => {
  const env = { ...process.env }

  for (const key of Object.keys(env)) {
    if (key.startsWith('npm_lifecycle_') || key.startsWith('npm_package_')) {
      delete env[key]
    }
  }

  for (const key of publishEnvKeys) {
    delete env[key]
  }

  return env
}

const main = () => {
  run('pnpm', ['--filter', '@unterberg/nivel', 'build'])
  run('npm', ['publish', '--access', 'public'], {
    cwd: engineDir,
    env: getPublishEnv(),
  })
}

main()
