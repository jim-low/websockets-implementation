import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'


const __dirname = join(dirname(fileURLToPath(import.meta.url)), "..")

export function getFilePath(...pathToFile) {
  return join(__dirname, ...pathToFile)
}
