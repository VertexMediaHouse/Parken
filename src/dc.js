import { useEffect, useReducer, useRef } from 'react'

// Minimal stand-in for the canvas's DCLogic: class state + renderVals(), re-rendered via a hook.
export class DCLogic {
  constructor(props) { this.props = props ?? {}; this.state = {} }
  setState(patch) {
    this.state = { ...this.state, ...(typeof patch === 'function' ? patch(this.state) : patch) }
    this.rerender?.()
  }
}

export function useDC(Component) {
  const [, rerender] = useReducer(n => n + 1, 0)
  const ref = useRef(null)
  if (!ref.current) ref.current = new Component({})
  ref.current.rerender = rerender
  // mount() runs after hydration: put browser-only state (today's date, URL params) there
  useEffect(() => { ref.current.mount?.() }, [])
  return ref.current.renderVals()
}
