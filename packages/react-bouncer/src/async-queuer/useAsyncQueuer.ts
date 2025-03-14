import { useRef } from 'react'
import { AsyncQueuer } from '@tanstack/bouncer/async-queuer'
import type { AsyncQueuerOptions } from '@tanstack/bouncer/async-queuer'

export function useAsyncQueuer<TValue>(options: AsyncQueuerOptions<TValue>) {
  const asyncQueuerRef = useRef<AsyncQueuer<TValue>>(null)

  if (!asyncQueuerRef.current) {
    asyncQueuerRef.current = new AsyncQueuer(options)
  }

  return {
    clear: asyncQueuerRef.current.clear.bind(asyncQueuerRef.current),
    enqueue: asyncQueuerRef.current.enqueue.bind(asyncQueuerRef.current),
    getActive: asyncQueuerRef.current.getActive.bind(asyncQueuerRef.current),
    getAll: asyncQueuerRef.current.getAll.bind(asyncQueuerRef.current),
    getPending: asyncQueuerRef.current.getPending.bind(asyncQueuerRef.current),
    isRunning: asyncQueuerRef.current.isRunning.bind(asyncQueuerRef.current),
    isSettled: asyncQueuerRef.current.isSettled.bind(asyncQueuerRef.current),
    onError: asyncQueuerRef.current.onError.bind(asyncQueuerRef.current),
    onSettled: asyncQueuerRef.current.onSettled.bind(asyncQueuerRef.current),
    onSuccess: asyncQueuerRef.current.onSuccess.bind(asyncQueuerRef.current),
    peek: asyncQueuerRef.current.peek.bind(asyncQueuerRef.current),
    start: asyncQueuerRef.current.start.bind(asyncQueuerRef.current),
    stop: asyncQueuerRef.current.stop.bind(asyncQueuerRef.current),
    throttle: asyncQueuerRef.current.throttle.bind(asyncQueuerRef.current),
  }
}
