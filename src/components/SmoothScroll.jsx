import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    window.lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    const id = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
      window.lenis = null
    }
  }, [])

  return children
}
