import { useState, useEffect } from 'react'
import { Options, State, Hook } from './index.d'

export const useInView = (options: Options): Hook => {
  const [ref, setRef] = useState<Element | undefined>()
  const [state, setState] = useState<State>({
    inView: false,
    entry: undefined,
  })

  const callback: IntersectionObserverCallback = ([entry], observer) => {
    setState({
      inView: entry.isIntersecting,
      entry,
    })

    if (options && options.unobserveOnEnter) observer.unobserve(ref)
  }

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(callback, options)
    observer.observe(ref)

    return () => observer.unobserve(ref)
  }, [ref])

  return [setRef, state.inView, state.entry]
}
