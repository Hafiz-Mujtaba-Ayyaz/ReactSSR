import { useEffect } from "react"

const useDetectOutsideClick = (el, initialState, autoclose, props) => {
  const { callback } = props
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (autoclose) {
        callback(!initialState)
      } else if (el && el.current && !el.current.contains(e.target)) {
        callback(!initialState)
      }
    }

    if (initialState) {
      requestAnimationFrame(() => {
      window.addEventListener("click", pageClickEvent)
      })
    }
    return () => {
      window.removeEventListener("click", pageClickEvent)
    }
  }, [el, initialState, callback])
}

export { useDetectOutsideClick }
