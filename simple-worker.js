import { Worker, isMainThread, threadId } from 'node:worker_threads'

if (isMainThread) {
  // This loads the current file inside a Worker instance
  console.log('Inside main thread')
  new Worker('./simple-worker.js')
} else {
  console.log('Inside worker', threadId)
}
