import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export const __dirname = meta => dirname(fileURLToPath(meta.url))
export const numberOfWorkers = 7

export function nthPrime(n) {
  const prime = []
  let i = 1

  while (i++ && prime.length < n)
    prime.reduce((a, c) => (i % c) * a, 2) && prime.push(i)

  return prime.length ? prime.pop() : -1
}
