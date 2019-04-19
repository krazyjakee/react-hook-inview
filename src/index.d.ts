declare module 'react-hook-inview'

export interface Options extends IntersectionObserverInit {
  unobserveOnEnter?: boolean;
}

export interface State {
  inView: boolean;
  entry?: IntersectionObserverEntry | undefined;
}

export type Hook = [
  ((node?: Element | null) => void),
  boolean,
  IntersectionObserverEntry
]

declare function useInView(options: Options): Hook
