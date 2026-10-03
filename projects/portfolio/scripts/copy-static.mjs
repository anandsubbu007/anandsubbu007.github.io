import { cpSync, existsSync, mkdirSync, readdirSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { join, resolve } from 'node:path'

const projectDirectory = fileURLToPath(new URL('../', import.meta.url))
const sourceDirectory = join(projectDirectory, 'static')
const destinationDirectory = resolve(
  projectDirectory,
  process.argv.find((argument, index) => index > 1 && argument !== '--stage') ?? '../../docs',
)

function copyDirectory(source, destination) {
  mkdirSync(destination, { recursive: true })

  for (const entry of readdirSync(source, { withFileTypes: true })) {
    const sourcePath = join(source, entry.name)
    const destinationPath = join(destination, entry.name)

    if (entry.isDirectory()) {
      copyDirectory(sourcePath, destinationPath)
    } else {
      cpSync(sourcePath, destinationPath)

      if (process.argv.includes('--stage')) {
        execFileSync('git', ['add', '--', destinationPath], { cwd: projectDirectory })
      }
    }
  }
}

if (existsSync(sourceDirectory)) {
  copyDirectory(sourceDirectory, destinationDirectory)
}