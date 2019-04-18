# react-hook-inview

Detect if an element is in the viewport using a [React Hook](https://reactjs.org/docs/hooks-intro.html). Utilizes the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), so check for [compatibility](https://caniuse.com/#feat=intersectionobserver).

## Install

```
npm install react-hook-inview
```

> *Optional:* Install a [polyfill](https://www.npmjs.com/package/intersection-observer) for browsers that don't support `IntersectionObserver` yet (i.e. Safari 12).

## Usage

Hooks can only be used inside functional components.

```js
import React, { useState, useRef } from 'react'
import { useInView } from 'react-hook-inview'

const Component = () => {
  const element = useRef()
  const [isVisible, setVisible] = useState(false)

  useInView({
    target: element,
    threshold: 1,
    onEnter: ([entry]) => setVisible(entry.isIntersecting),
    onLeave: ([entry]) => setVisible(entry.isIntersecting),
  })

  return (
    <div ref={element}>
      {isVisible
        ? 'Hello World!'
        : ''
      }
    </div>
  )
}
```

### Options
These are the default options. `target` is the only one that's required.
```js
useInView({
  target: null,             // *required* a ref to the component
  root: null,               // optional, must be a parent of 'target' ref
  rootMargin: '0px',        // accepts a string of 'px' or '%' values
  threshold: 0,             // optionally use an array of numbers: [0, 0.5, 1]
  unobserveOnEnter: false,  // set 'true' to run only once
  onEnter: () => null,      // see below
  onLeave: () => null,      // see below
})
```

`onEnter` and `onLeave` recieve a function that returns an array of `IntersectionObserverEntry` and the observer itself.

```js
function onEnter([entry], observer) {
  // entry.boundingClientRect
  // entry.intersectionRatio
  // entry.intersectionRect
  // entry.isIntersecting
  // entry.rootBounds
  // entry.target
  // entry.time
}
```

## License
[MIT](https://github.com/bitmap/react-hook-inview/blob/master/LICENSE)
