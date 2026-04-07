import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptsDir = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(scriptsDir, '..')
const engineDir = path.join(rootDir, 'packages', 'engine')

const run = (command, args, options = {}) => {
  execFileSync(command, args, {
    cwd: rootDir,
    stdio: 'inherit',
    env: process.env,
    ...options,
  })
}

const main = () => {
  run('pnpm', ['--filter', '@unterberg/nivel', 'build'])
  run('npm', ['publish', '--access', 'public'], { cwd: engineDir })
}

main()
